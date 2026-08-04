<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import BaseDashboardCard from '../weather/BaseDashboardCard.vue'
import SearchBar from '../weather/SearchBar.vue'
import RegionTabs from '../weather/RegionTabs.vue'
import WeatherCard from '../weather/WeatherCard.vue'
import WeatherByStatus from '../weather/WeatherByStatus.vue'
import UiIcon from '../weather/UiIcon.vue'
import { fetchWeather, nearestCity, groupOf, REGIONS, DEMO_ROWS } from '../weather/weatherApi'
import { MOCK_CITIES } from '../router4/mockCities'
import { backdropStatus } from '../router4/backdropState'
import { useConfigStore } from '../../../stores/configStore'
import { featuresOf } from './stageFeatures'

/**
 * 4단계부터의 메인 화면.
 *
 * ── 왜 하나의 화면인가 ──
 * 단계는 쌓이기만 해야 한다. 3단계에서 만든 대시보드(보기 전환 · 지역 탭 ·
 * 내 위치 · 즐겨찾기 · 상태 바)가 4단계에서 사라지면 그건 누적이 아니라 퇴보다.
 * 그래서 홈은 하나만 두고, 단계에 따라 "무엇이 더 켜지는가"만 달라진다.
 *
 *   4단계  3단계 대시보드 + 라우터(상세 화면으로 주소를 옮긴다)
 *   5단계  + 섭씨/화씨 (Store 의 단위를 따른다)
 *   6단계  + Mock 대신 실제 API
 *   7단계  + 검색창·새로고침·로딩·알림을 Element Plus 로
 *
 * 무엇이 언제 켜지는지는 stageFeatures.js 한 곳에 적혀 있다.
 */
const route = useRoute()
const router = useRouter()

const features = computed(() => featuresOf(route.params.stageId))
const stageId = computed(() => String(route.params.stageId ?? 4))

/** 단위는 5단계에서 붙인 Store 를 그대로 이어 쓴다 */
const { unit, unitSymbol } = storeToRefs(useConfigStore())
const toUnit = (celsius) =>
  unit.value === 'celsius' ? celsius : Math.round((celsius * 9) / 5 + 32)

/* ── 데이터 ─────────────────────────────────────────────────────── */
const rows = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const source = ref('')
const updatedAt = ref('')

const SOURCE_LABEL = {
  openweather: 'OpenWeather',
  'open-meteo': 'Open-Meteo',
  'met.no': 'MET Norway',
  cache: '저장해 둔 값',
  mock: 'Mock Data',
}

/** 4·5단계는 고정 데이터, 6단계부터는 실제 응답 */
const load = async (force = false) => {
  if (!features.value.liveApi) {
    rows.value = MOCK_CITIES.map((city) => ({ ...city, group: groupOf(city.region) }))
    source.value = 'mock'
    updatedAt.value = ''
    applyBackdrop()
    return
  }

  isLoading.value = true
  errorMessage.value = ''
  try {
    const response = await fetchWeather(undefined, force)
    rows.value = [...response.rows, ...DEMO_ROWS]
    source.value = response.source ?? 'open-meteo'
    updatedAt.value = new Date(response.at).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    })
    applyBackdrop()
    if (force && features.value.elementPlus) {
      ElMessage.success({ message: '날씨를 새로 받았습니다.', duration: 1800 })
    }
  } catch (error) {
    errorMessage.value = '날씨를 불러오지 못했습니다. 네트워크를 확인해 주세요.'
    if (force && features.value.elementPlus) ElMessage.error('날씨를 불러오지 못했습니다.')
    console.error('[stage] 불러오기 실패', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => load())
// 단계를 옮기면 데이터 출처도 따라 바뀐다
watch(() => route.params.stageId, () => load())

/* ── 사용자가 만지는 상태 (3단계에서 물려받은 것들) ─────────────── */
const searchQuery = ref('')
const selectedRegion = ref('전체')
const viewMode = ref('region') // 'region' | 'status'
const selectedId = ref('')

const VIEW_OPTIONS = [
  { value: 'region', label: '지역별 날씨 현황', icon: 'city' },
  { value: 'status', label: '날씨별 지역 현황', icon: 'droplet' },
]

/** 즐겨찾기 — 새로고침해도 남도록 localStorage 에 담는다 */
const FAVORITES_KEY = 'inwoo-weather-favorites'
const favorites = ref(JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]'))

const toggleFavorite = (cityId) => {
  favorites.value = favorites.value.includes(cityId)
    ? favorites.value.filter((id) => id !== cityId)
    : [...favorites.value, cityId]
}

watch(favorites, (list) => localStorage.setItem(FAVORITES_KEY, JSON.stringify(list)), {
  deep: true,
})

/* ── 현재 위치 ──────────────────────────────────────────────────── */
const hereId = ref('')
const locationState = ref('idle') // idle | asking | done | denied

const findMyLocation = () => {
  if (!navigator.geolocation) {
    locationState.value = 'denied'
    return
  }
  locationState.value = 'asking'
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      hereId.value = nearestCity(coords.latitude, coords.longitude)?.id ?? ''
      locationState.value = 'done'
    },
    () => {
      locationState.value = 'denied'
      if (features.value.elementPlus) {
        ElMessage.warning('위치 권한이 없어 현재 위치를 표시하지 못했습니다.')
      }
    },
    { timeout: 8000 },
  )
}

/* ── 걸러낸 목록 ────────────────────────────────────────────────── */
const matched = computed(() => {
  const query = searchQuery.value.trim()
  return rows.value.filter((row) => !query || row.name.includes(query))
})

const filtered = computed(() => {
  const list = matched.value.filter(
    (row) => selectedRegion.value === '전체' || row.group === selectedRegion.value,
  )
  const rank = (row) => (row.id === hereId.value ? 0 : favorites.value.includes(row.id) ? 1 : 2)
  return [...list].sort((a, b) => rank(a) - rank(b)).slice(0, 8)
})

/** 탭에 붙일 지역별 개수 — 검색어까지 반영해 실제로 보이는 수를 센다 */
const regionCounts = computed(() =>
  matched.value.reduce(
    (acc, row) => {
      acc[row.group] = (acc[row.group] ?? 0) + 1
      return acc
    },
    { 전체: matched.value.length },
  ),
)

/** 이 단계의 지역 탭 목록 — Mock 은 지역이 적으니 있는 것만 보여 준다 */
const regionList = computed(() =>
  features.value.liveApi
    ? [...REGIONS, '데모']
    : [...new Set(rows.value.map((row) => row.group))],
)

const favoriteCount = computed(
  () => matched.value.filter((row) => favorites.value.includes(row.id)).length,
)

/* ── 상태 바 (3단계에서 물려받음) ───────────────────────────────── */
const selectedCityInfo = computed(() => {
  const city = rows.value.find((row) => row.id === selectedId.value)
  if (!city) return '카드를 클릭하거나 검색해 보세요.'
  return `${city.name} · ${city.status} · ${toUnit(city.temp)}${unitSymbol.value} · 습도 ${city.humidity}%`
})

/** 고른 도시가 없으면 첫 도시의 날씨를 배경으로 쓴다 */
const applyBackdrop = () => {
  const picked = rows.value.find((row) => row.id === selectedId.value)
  backdropStatus.value = (picked ?? rows.value[0])?.status ?? ''
}

const selectCity = (cityId) => {
  selectedId.value = selectedId.value === cityId ? '' : cityId
  applyBackdrop()
}

watch([searchQuery, selectedRegion, viewMode], () => {
  selectedId.value = ''
})

/**
 * 상세보기 — 4단계에서 붙은 것. alert 대신 주소를 옮긴다.
 * 단계 번호를 유지해야 상세에서 돌아왔을 때 같은 단계에 머문다.
 */
const goDetail = (cityName) => {
  const city = rows.value.find((row) => row.name === cityName)
  if (!city) return
  router.push({
    name: 'a4-detail',
    params: { stageId: stageId.value, cityId: city.id },
    query: { from: 'home' },
  })
}
</script>

<template>
  <div class="home">
    <!-- 검색 — 7단계부터 Element Plus 로 갈아끼운다 -->
    <BaseDashboardCard>
      <template v-if="features.elementPlus">
        <h3><UiIcon name="search" :size="19" /> 도시 검색</h3>
        <el-input v-model="searchQuery" size="large" clearable placeholder="검색할 도시 이름 입력">
          <template #prefix>
            <UiIcon name="search" :size="16" />
          </template>
        </el-input>
      </template>
      <SearchBar
        v-else
        :current-query="searchQuery"
        @update-query="(value) => (searchQuery = value)"
      />
    </BaseDashboardCard>

    <BaseDashboardCard>
      <!-- 보기 방식 — 3단계에서 물려받은 것 -->
      <el-segmented
        v-if="features.elementPlus"
        v-model="viewMode"
        :options="VIEW_OPTIONS"
        class="view-segmented"
      >
        <template #default="{ item }">
          <span class="seg-item"><UiIcon :name="item.icon" :size="15" /> {{ item.label }}</span>
        </template>
      </el-segmented>
      <div v-else class="view-tabs" role="tablist">
        <button
          v-for="option in VIEW_OPTIONS"
          :key="option.value"
          type="button"
          role="tab"
          :aria-selected="viewMode === option.value"
          :class="{ active: viewMode === option.value }"
          @click="viewMode = option.value"
        >
          <UiIcon :name="option.icon" :size="16" /> {{ option.label }}
        </button>
      </div>

      <!-- 도구 줄 -->
      <div class="tool-row">
        <p class="summary">
          <b>{{ matched.length }}</b>곳
          <span v-if="favoriteCount" class="fav-count">
            <UiIcon name="star" :size="12" :filled="true" /> {{ favoriteCount }}
          </span>
        </p>

        <span class="source">
          <span class="dot" :class="{ live: features.liveApi && source !== 'cache' }"></span>
          {{ SOURCE_LABEL[source] ?? '불러오는 중' }}
        </span>

        <template v-if="features.elementPlus">
          <el-button
            round
            size="small"
            :loading="locationState === 'asking'"
            @click="findMyLocation"
          >
            <UiIcon v-if="locationState !== 'asking'" name="location" :size="14" />
            <span class="btn-label">내 위치</span>
          </el-button>
          <!-- 새로고침은 아이콘만. loading 이면 el-button 이 스피너로 대신한다 -->
          <el-button
            v-if="features.liveApi"
            circle
            size="small"
            :loading="isLoading"
            title="새로고침"
            aria-label="새로고침"
            @click="load(true)"
          >
            <UiIcon v-if="!isLoading" name="refresh" :size="15" />
          </el-button>
        </template>
        <template v-else>
          <button
            type="button"
            class="tool"
            :disabled="locationState === 'asking'"
            @click="findMyLocation"
          >
            <UiIcon name="location" :size="14" />
            {{ locationState === 'asking' ? '찾는 중…' : '내 위치' }}
          </button>
          <button
            v-if="features.liveApi"
            type="button"
            class="tool"
            :disabled="isLoading"
            @click="load(true)"
          >
            {{ isLoading ? '불러오는 중…' : '새로고침' }}
          </button>
        </template>
      </div>

      <p v-if="locationState === 'denied'" class="hint">
        위치 권한이 없어 현재 위치를 표시하지 못했습니다. 나머지 기능은 그대로 쓸 수 있습니다.
      </p>

      <!-- 지역 탭은 지역별 보기에서만 의미가 있다 -->
      <RegionTabs
        v-if="viewMode === 'region'"
        :regions="regionList"
        :current="selectedRegion"
        :counts="regionCounts"
        @select-region="(region) => (selectedRegion = region)"
      />

      <p v-if="errorMessage" class="notice">{{ errorMessage }}</p>

      <p v-else-if="isLoading && !rows.length" class="notice">불러오는 중…</p>

      <!-- ① 지역별 -->
      <template v-else-if="viewMode === 'region'">
        <WeatherCard
          v-for="city in filtered"
          :key="city.id"
          :city-item="city"
          :favorite="favorites.includes(city.id)"
          :here="city.id === hereId"
          :selected="city.id === selectedId"
          :temp-value="toUnit(city.temp)"
          :temp-unit="unitSymbol"
          detail-label="상세보기"
          @select-card="selectCity"
          @click-detail="goDetail"
          @toggle-favorite="toggleFavorite"
          @dblclick="goDetail(city.name)"
        />
        <p v-if="!filtered.length" class="notice">
          <UiIcon name="empty" :size="22" /> 검색 결과와 일치하는 도시가 없습니다.
        </p>
      </template>

      <!-- ② 날씨별 -->
      <WeatherByStatus
        v-else
        :list="matched"
        :favorites="favorites"
        :here-id="hereId"
        :selected-id="selectedId"
        @select-card="selectCity"
        @toggle-favorite="toggleFavorite"
      />
    </BaseDashboardCard>

    <!-- 상태 바 — 3단계에서 물려받은 것 -->
    <div class="status-bar">
      <span>{{ selectedCityInfo }}</span>
      <small v-if="updatedAt" class="stamp">{{ updatedAt }} 기준 · {{ SOURCE_LABEL[source] }}</small>
      <small v-else class="stamp">{{ SOURCE_LABEL[source] ?? '' }}</small>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: grid;
  gap: 14px;
}

h3 {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 0 14px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* ── 보기 방식 탭 ── */
.view-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 14px;
  padding: 4px;
  border-radius: 999px;
  background: var(--paper);
}

.view-tabs button {
  display: inline-flex;
  flex: 1;
  gap: 7px;
  align-items: center;
  justify-content: center;
  padding: 9px 12px;
  border: 0;
  border-radius: 999px;
  color: var(--muted);
  background: transparent;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
}

.view-tabs button.active {
  color: var(--accent);
  background: var(--surface);
  box-shadow: 0 1px 4px rgb(15 23 42 / 8%);
}

.view-segmented {
  width: 100%;
  margin-bottom: 14px;
  padding: 4px;
  border-radius: 999px;
  background: var(--paper);
}

/* 선택 표시는 항목이 아니라 뒤에서 미끄러지는 별도 요소다 */
.view-segmented :deep(.el-segmented__item-selected) {
  border-radius: 999px;
  background: var(--surface);
  box-shadow: 0 1px 4px rgb(15 23 42 / 8%);
}

.view-segmented :deep(.el-segmented__item) {
  color: var(--muted);
}

.view-segmented :deep(.el-segmented__item.is-selected) {
  color: var(--accent);
  background: transparent;
}

.view-segmented :deep(.el-segmented__item) {
  padding: 9px 14px;
}

/* 항목 안의 내용이 칸 가운데 오도록 폭을 채운다 */
.seg-item {
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 13px;
  font-weight: 700;
}

/* ── 도구 줄 ── */
.tool-row {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
  margin-bottom: 12px;
}

.summary {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 auto 0 2px;
  color: var(--muted);
  font-size: 12.5px;
}

.summary b {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 14px;
}

.fav-count {
  display: inline-flex;
  gap: 3px;
  align-items: center;
  color: #b8862a;
  font-family: var(--font-mono);
  font-weight: 700;
}

.source {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 4px 11px;
  border-radius: 999px;
  background: var(--paper);
  color: var(--muted);
  font-size: 11.5px;
  font-weight: 600;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--line-strong);
}

.dot.live {
  background: var(--accent);
}

.tool {
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
}

.tool:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.tool:disabled {
  cursor: progress;
  opacity: 0.6;
}

.btn-label {
  font-size: 12px;
}

/*
 * Element Plus 부품 맞춤.
 * circle 버튼은 안쪽 내용이 넘치면 동그라미 밖으로 삐져나오므로
 * 크기를 못박고 넘치는 것을 잘라 낸다.
 */
.tool-row :deep(.el-button) {
  --el-button-bg-color: var(--surface);
  --el-button-border-color: var(--line);
  --el-button-text-color: var(--muted);
  --el-button-hover-bg-color: var(--accent-tint);
  --el-button-hover-border-color: var(--accent);
  --el-button-hover-text-color: var(--accent);

  gap: 5px;
  font-weight: 600;
}

.tool-row :deep(.el-button.is-circle) {
  width: 28px;
  height: 28px;
  padding: 0;
  overflow: hidden;
}

.tool-row :deep(.el-button.is-circle .ui-icon),
.tool-row :deep(.el-button.is-circle .el-icon) {
  flex: none;
}

.hint {
  margin: 0 0 12px;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--faint);
  font-size: 12px;
}

.notice {
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  padding: 28px 0;
  margin: 0;
  color: var(--faint);
  font-size: 13.5px;
}

/* ── 상태 바 ── */
.status-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 11px 16px;
  border-radius: 14px;
  background: color-mix(in srgb, var(--surface) 82%, transparent);
  backdrop-filter: blur(10px);
  color: var(--ink-soft);
  font-size: 12.5px;
}

.stamp {
  margin-left: auto;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
}

.home :deep(.el-input__wrapper) {
  padding: 4px 16px;
  border-radius: 999px;
  background: var(--paper);
  box-shadow: none;
}

.home :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px var(--accent) inset;
}

.home :deep(.el-input__prefix) {
  color: var(--faint);
}
</style>
