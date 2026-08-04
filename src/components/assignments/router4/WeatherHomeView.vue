<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '../../../stores/configStore'
import BaseDashboardCard from '../weather/BaseDashboardCard.vue'
import SearchBar from '../weather/SearchBar.vue'
import WeatherCard from '../weather/WeatherCard.vue'
import UiIcon from '../weather/UiIcon.vue'
import { MOCK_CITIES } from './mockCities'
import { backdropStatus } from './backdropState'

/**
 * 과제 4 — 메인 대시보드 (/ 경로)
 * WeatherParent를 대신하는 "페이지 단위 최상위 컴포넌트"다.
 *
 * 화면 부품은 components/ 의 것을 그대로 가져다 쓴다.
 * views 는 페이지를 조립하는 곳, 재사용 부품은 components 에 두는 구분이다.
 *
 * 이전 과제에서 상세보기는 window.alert() 였다.
 * 이제는 라우터로 상세 페이지에 다녀온다 (Programmatic Navigation).
 */
const route = useRoute()
const router = useRouter()

/**
 * 과제 5 — 온도 단위는 Store 에서 읽는다.
 *
 * 단위를 바꾸는 버튼(UnitToggler)은 이 화면이 아니라 껍데기의 내비게이션 바에 있다.
 * 서로 남남인 두 컴포넌트가 같은 값을 보는 방법이 Store 다.
 * 과제 4까지는 이 값을 건드릴 버튼 자체가 없어 늘 섭씨(초깃값)로 남는다.
 */
const { unit, unitSymbol } = storeToRefs(useConfigStore())

/** 교안 191쪽 — 섭씨 원본은 그대로 두고, 화씨는 (섭씨 × 9) / 5 + 32 로 환산해 보여 준다 */
const toUnit = (celsius) =>
  unit.value === 'celsius' ? celsius : Math.round((celsius * 9) / 5 + 32)

const searchQuery = ref('')
const selectedId = ref('')

/** 고른 도시가 없으면 첫 도시의 날씨를 배경으로 쓴다 */
const applyBackdrop = () => {
  const picked = MOCK_CITIES.find((city) => city.id === selectedId.value)
  backdropStatus.value = (picked ?? MOCK_CITIES[0]).status
}

onMounted(applyBackdrop)
watch(selectedId, applyBackdrop)

const filteredCities = computed(() => {
  const query = searchQuery.value.trim()
  if (!query) return MOCK_CITIES
  return MOCK_CITIES.filter((city) => city.name.includes(query))
})

/**
 * 상세보기 — alert 대신 주소를 옮긴다.
 * 교안 172쪽의 handleAdvancedMove 와 같은 형태다.
 */
const goDetail = (cityName) => {
  const city = MOCK_CITIES.find((item) => item.name === cityName)
  if (!city) return
  router.push({
    name: 'a4-detail', // 라우터 설정에 등록된 고유 Name
    params: { stageId: route.params.stageId ?? '4', cityId: city.id }, // :cityId 자리에 매핑
    query: { from: 'home' }, // 주소창 뒤에 ?from=home
  })
}
</script>

<template>
  <div class="home">
    <BaseDashboardCard>
      <SearchBar :current-query="searchQuery" @update-query="(val) => (searchQuery = val)" />
    </BaseDashboardCard>

    <BaseDashboardCard>
      <h3><UiIcon name="city" :size="19" /> 지역별 날씨 현황</h3>

      <WeatherCard
        v-for="city in filteredCities"
        :key="city.id"
        :city-item="city"
        :selected="city.id === selectedId"
        :temp-value="toUnit(city.temp)"
        :temp-unit="unitSymbol"
        detail-label="상세보기"
        @select-card="(id) => (selectedId = selectedId === id ? '' : id)"
        @click-detail="goDetail"
      />

      <p v-if="!filteredCities.length" class="empty">
        <UiIcon name="empty" :size="22" />
        검색 결과와 일치하는 도시가 없습니다.
      </p>
    </BaseDashboardCard>
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

.empty {
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  color: var(--faint);
  font-size: 13.5px;
}
</style>
