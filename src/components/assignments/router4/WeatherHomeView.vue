<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { MOCK_CITIES } from './mockCities'

/**
 * 과제 4 — 메인 대시보드 (/ 경로)
 * WeatherParent를 대신하는 "페이지 단위 최상위 컴포넌트"다.
 *
 * 이전 과제에서 상세보기는 window.alert() 였다.
 * 이제는 라우터로 상세 페이지에 다녀온다 (Programmatic Navigation).
 */
const router = useRouter()

const searchQuery = ref('')

const filteredCities = computed(() => {
  const query = searchQuery.value.trim()
  if (!query) return MOCK_CITIES
  return MOCK_CITIES.filter((city) => city.name.includes(query))
})

/**
 * 상세보기 — alert 대신 주소를 옮긴다.
 * 교안 172쪽의 handleAdvancedMove 와 같은 형태다.
 */
const goDetail = (cityId) => {
  router.push({
    name: 'a4-detail', // 라우터 설정에 등록된 고유 Name
    params: { cityId }, // 주소창 :cityId 자리에 매핑
    query: { from: 'home' }, // 주소창 뒤에 ?from=home
  })
}
</script>

<template>
  <div class="home">
    <div class="card">
      <h3>도시 검색</h3>
      <input v-model="searchQuery" type="text" placeholder="검색할 도시 이름 입력" />
    </div>

    <div class="card">
      <h3>지역별 날씨 현황</h3>

      <div v-for="city in filteredCities" :key="city.id" class="city">
        <div class="city-main">
          <b class="name">{{ city.name }}</b>
          <span class="region">{{ city.region }}</span>
          <span class="status">{{ city.status }}</span>
        </div>
        <span class="temp">{{ city.temp }}°C</span>
        <button type="button" @click="goDetail(city.id)">상세보기</button>
      </div>

      <p v-if="!filteredCities.length" class="empty">검색 결과와 일치하는 도시가 없습니다.</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: grid;
  gap: 14px;
}

.card {
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}

h3 {
  margin: 0 0 14px;
  color: var(--ink);
  font-size: 16px;
  font-weight: 700;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
  color: var(--ink);
  font: inherit;
  font-size: 14px;
}

input:focus {
  border-color: var(--accent);
  outline: none;
}

.city {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
}

.city + .city {
  margin-top: 8px;
}

.city-main {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  min-width: 0;
}

.name {
  color: var(--ink);
  font-size: 15px;
  font-weight: 700;
}

.region,
.status {
  color: var(--muted);
  font-size: 12px;
}

.temp {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
}

.city button {
  padding: 7px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
}

.city button:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.empty {
  margin: 18px 0 0;
  color: var(--faint);
  font-size: 13px;
  text-align: center;
}
</style>
