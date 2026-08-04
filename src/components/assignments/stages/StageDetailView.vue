<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import BaseDashboardCard from '../weather/BaseDashboardCard.vue'
import WeatherIcon from '../weather/WeatherIcon.vue'
import HourlyDetail from '../weather/HourlyDetail.vue'
import UiIcon from '../weather/UiIcon.vue'
import { CITIES, fetchCityDetail, fetchWeather, findCity } from '../weather/weatherApi'
import { findMockCity } from '../router4/mockCities'
import { backdropStatus } from '../router4/backdropState'
import { useConfigStore } from '../../../stores/configStore'
import { featuresOf } from './stageFeatures'

/**
 * 4단계부터의 상세 화면.
 *
 * 관측값 표와 시간별 예보를 한 화면에 함께 둔다.
 * 단계가 올라간다고 앞 단계에 있던 것이 사라지면 안 되므로,
 * 화면은 하나만 두고 "채울 수 있는 값만" 채우는 방식으로 만든다.
 *
 *   4·5단계  Mock 에서 도시를 고른다 (관측값이 전부 들어 있다)
 *   6단계~   실제 응답에서 고른다 (제공자에 따라 없는 값이 있다)
 *
 * 시간별 예보는 좌표가 있어야 부를 수 있다. Mock 도시도 이름이 같은
 * 실제 도시를 찾아 붙여 주므로 4단계에서도 시간별을 볼 수 있다.
 */
const route = useRoute()
const router = useRouter()

const features = computed(() => featuresOf(route.params.stageId))
const { unit, unitSymbol } = storeToRefs(useConfigStore())
const toUnit = (celsius) =>
  unit.value === 'celsius' ? celsius : Math.round((celsius * 9) / 5 + 32)

const city = ref(null)
const isLoading = ref(true)
const errorMessage = ref('')

/**
 * 목록 응답에 없는 관측값(가시거리 · 일출/일몰 · 미세먼지).
 * 45개 도시분을 미리 받아 두면 낭비라, 이 화면에서 이 도시 것만 따로 받는다.
 */
const extras = ref({})

/**
 * 좌표는 목록을 기다리지 않고도 알 수 있다.
 * 실 API 는 id 가 곧 도시 코드이고, Mock 은 이름이 같은 실제 도시를 찾으면 된다.
 * 덕분에 목록 조회와 추가 관측값 조회를 나란히 보낼 수 있다.
 */
const coordsFor = (cityId) => {
  const direct = findCity(cityId)
  if (direct) return direct
  const mock = findMockCity(cityId)
  return mock ? (CITIES.find((item) => item.name === mock.name) ?? null) : null
}

const load = async () => {
  isLoading.value = true
  errorMessage.value = ''
  try {
    const live = features.value.liveApi
    const known = coordsFor(route.params.cityId)

    // 두 요청은 서로를 기다릴 이유가 없다
    const [list, extra] = await Promise.all([
      live ? fetchWeather() : Promise.resolve(null),
      // Mock 단계는 관측값이 데이터에 이미 다 들어 있어 더 받을 것이 없다
      live && known ? fetchCityDetail(known) : Promise.resolve({}),
    ])

    city.value = live
      ? (list?.rows.find((row) => row.id === route.params.cityId) ?? null)
      : findMockCity(route.params.cityId)
    extras.value = extra

    if (city.value) backdropStatus.value = city.value.status
  } catch (error) {
    errorMessage.value = '날씨를 불러오지 못했습니다.'
    console.error('[stage] 상세 불러오기 실패', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(load)
watch(() => route.params.cityId, load)

/** 아이콘 받침 색조 — 메인 카드와 같은 규칙 */
const tone = computed(() => {
  const status = city.value?.status ?? ''
  if (status.includes('맑')) return 'warm'
  if (status.includes('비') || status.includes('눈')) return 'cool'
  return 'neutral'
})

/**
 * 시간별 예보에 쓸 좌표.
 * 실제 도시는 id 로 바로 찾고, Mock 도시는 이름이 같은 실제 도시에 맞춘다.
 */
const coords = computed(() => {
  if (!city.value) return null
  return findCity(city.value.id) ?? CITIES.find((item) => item.name === city.value.name) ?? null
})

/** 값이 있는 항목만 표에 올린다 — 제공자마다 주는 것이 다르다 */
const observations = computed(() => {
  if (!city.value) return []
  // 목록에서 온 값이 우선, 없으면 상세에서 따로 받아 온 값으로 채운다
  const c = { ...extras.value, ...Object.fromEntries(
    Object.entries(city.value).filter(([, value]) => value !== null && value !== undefined && value !== ''),
  ) }
  return [
    {
      label: '오늘 최저 · 최고',
      value:
        c.tempMin != null && c.tempMax != null
          ? `${toUnit(c.tempMin)} · ${toUnit(c.tempMax)}${unitSymbol.value}`
          : null,
      unit: '',
    },
    { label: '강수 확률', value: c.rainChance, unit: '%' },
    { label: '습도', value: c.humidity, unit: '%' },
    { label: '미세먼지', value: c.dust, unit: '' },
    { label: '풍속', value: c.wind, unit: 'm/s' },
    { label: '가시거리', value: c.visibility, unit: 'km' },
    { label: '기압', value: c.pressure, unit: 'hPa' },
    {
      label: '일출 · 일몰',
      value: c.sunrise && c.sunset ? `${c.sunrise} · ${c.sunset}` : null,
      unit: '',
      small: true,
    },
  ].filter((item) => item.value !== null && item.value !== undefined && item.value !== '')
})

/** 관측 시각 — 표의 값들이 언제 기준인지 밝혀 준다 */
const observedClock = computed(() => {
  const at = city.value?.observedAt
  if (!at) return ''
  const date = new Date(at)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
})

const goBack = () => router.go(-1)
</script>

<template>
  <div class="detail">
    <BaseDashboardCard>
      <p v-if="isLoading" class="notice">불러오는 중…</p>

      <template v-else-if="city">
        <header class="head">
          <div class="icon-tile" :class="tone">
            <WeatherIcon :status="city.status" :size="34" />
          </div>
          <div class="title">
            <p class="eyebrow">{{ city.region }} · <code>{{ city.id }}</code></p>
            <h3>{{ city.name }}</h3>
            <p class="status">{{ city.status }}</p>
          </div>
          <p class="temp">{{ toUnit(city.temp) }}<span class="unit">{{ unitSymbol }}</span></p>
        </header>

        <p class="obs-label">
          오늘의 관측값
          <small v-if="observedClock">{{ observedClock }} 기준</small>
        </p>

        <dl class="observation">
          <div v-for="item in observations" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd :class="{ small: item.small }">
              {{ item.value }}<i v-if="item.unit">{{ item.unit }}</i>
            </dd>
          </div>
        </dl>

        <footer class="foot">
          <el-button v-if="features.elementPlus" round size="small" @click="goBack">
            ← 이전 화면으로
          </el-button>
          <button v-else type="button" class="plain-back" @click="goBack">← 이전 화면으로</button>
        </footer>
      </template>

      <div v-else class="missing">
        <UiIcon name="empty" :size="24" />
        <p>
          <code>{{ route.params.cityId }}</code> 에 해당하는 도시가 없습니다.
          <span v-if="errorMessage">{{ errorMessage }}</span>
        </p>
        <button type="button" class="plain-back" @click="goBack">← 이전 화면으로</button>
      </div>
    </BaseDashboardCard>

    <!-- 시간별 예보 — 관측값과 같은 화면에 둔다 -->
    <HourlyDetail
      v-if="coords && city"
      :city="{
        ...coords,
        temp: city.temp,
        humidity: city.humidity,
        status: city.status,
      }"
      :to-unit="toUnit"
      :unit-symbol="unitSymbol"
      @close="goBack"
    />
  </div>
</template>

<style scoped>
.detail {
  display: grid;
  gap: 14px;
}

.head {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  margin-bottom: 18px;
}

.icon-tile {
  display: grid;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  place-items: center;
}

.icon-tile.warm {
  background: #fdf2d5;
}

.icon-tile.cool {
  background: #e5eff9;
}

.icon-tile.neutral {
  background: #edf0f3;
}

.eyebrow {
  margin: 0 0 3px;
  color: var(--faint);
  font-size: 11.5px;
}

.eyebrow code {
  font-family: var(--font-mono);
}

h3 {
  margin: 0 0 2px;
  color: var(--ink);
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.status {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.temp {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.unit {
  margin-left: 2px;
  color: var(--faint);
  font-size: 15px;
  font-weight: 500;
}

.obs-label {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  margin: 0 2px 8px;
  color: var(--ink-soft);
  font-size: 12.5px;
  font-weight: 700;
}

.obs-label small {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
}

/*
 * grid 로 칸을 못박으면 항목 수가 열 수의 배수가 아닐 때 마지막 줄에 빈 칸이 남는다.
 * flex 로 두면 남는 폭을 마지막 줄 항목들이 나눠 가져 빈 자리가 생기지 않는다.
 */
.observation {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
}

.observation > div {
  flex: 1 1 148px;
  padding: 12px 15px;
  border-radius: 13px;
  background: var(--paper);
}

dt {
  margin-bottom: 4px;
  color: var(--faint);
  font-size: 11.5px;
}

dd {
  display: flex;
  gap: 4px;
  align-items: baseline;
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 17px;
  font-weight: 700;
}

dd i {
  color: var(--faint);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
}

dd.small {
  font-size: 14px;
}

.foot {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-top: 16px;
}

.plain-back {
  margin-left: auto;
  padding: 9px 15px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
}

.plain-back:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.foot :deep(.el-button) {
  margin-left: auto;
}

.notice,
.missing {
  display: grid;
  gap: 12px;
  padding: 30px 0;
  justify-items: center;
  margin: 0;
  color: var(--faint);
  text-align: center;
  font-size: 13.5px;
}

.missing p {
  margin: 0;
  color: var(--muted);
}

.missing .plain-back {
  margin: 0;
}

@media (max-width: 480px) {
  .head {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .temp {
    grid-column: 2;
  }
}
</style>
