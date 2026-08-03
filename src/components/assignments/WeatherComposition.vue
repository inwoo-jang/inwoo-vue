<script setup>
/**
 * 누적 과제 2 — 날씨 컴포지션 (교안 126쪽)
 * 1일차 Mockup에 computed · watch · watchEffect를 얹은 버전.
 */
import { ref, computed, watch, watchEffect } from 'vue'

// 1. [1일차 데이터] 가상의 백엔드 데이터 배열
const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
])

// 2. [1일차 데이터] 검색어 및 알림창 제어용 데이터
const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

// 3. [2일차 추가] computed를 활용한 실시간 검색 필터링 연산기 (★핵심)
const filteredWeatherList = computed(() => {
  // 사용자가 입력한 검색어의 앞뒤 공백을 제거합니다.
  const query = searchQuery.value.trim()

  // 검색어가 비어있다면 원본 weatherList를 그대로 보여줍니다.
  if (!query) {
    return weatherList.value
  }

  // 검색어가 포함된 도시만 칼같이 필터링하여 실시간으로 뱉어냅니다.
  return weatherList.value.filter((item) => item.name.includes(query))
})

// 4. [2일차 추가] watch를 활용한 선택 도시 추적 센서
// selectedCityInfo의 문구 변화를 감시하여 후속 로그를 처리합니다.
watch(selectedCityInfo, (newInfo) => {
  console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${newInfo}"`)
})

// 5. [2일차 추가] watchEffect를 활용한 자동 의존성 API 로그 시뮬레이션
// 타이핑할 때마다 변하는 searchQuery를 AI CCTV처럼 자동 추적합니다.
watchEffect(() => {
  console.log(
    `🤖 [watchEffect 자동 호출] 현재 검색어 '${searchQuery.value}'에 매칭되는 API 데이터를 필터링합니다.`,
  )
})

// 알림 대행 함수
const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="dashboard-wrapper">
    <section class="search-box">
      <h3>🔍 도시 검색</h3>
      <input
        type="text"
        :value="searchQuery"
        placeholder="검색할 도시 이름 입력"
        @input="(e) => (searchQuery = e.target.value)"
      />
      <p>
        검색 중인 도시: <strong>{{ searchQuery }}</strong>
      </p>
    </section>

    <section class="list-box">
      <h3>🏙️ 지역별 날씨 현황</h3>

      <div
        v-for="item in filteredWeatherList"
        :key="item.id"
        class="weather-card"
        @click="selectedCityInfo = `${item.name}이 선택되었습니다.`"
      >
        <h4>{{ item.name }} ({{ item.status }})</h4>
        <p>현재 기온: {{ item.temp }}°C</p>

        <span v-if="item.temp >= 25" class="badge hot">🔥 더움 (25도 이상)</span>
        <span v-else class="badge cool">❄️ 선선함 (25도 미만)</span>

        <button class="btn-detail" @click.stop="showDetail(item.name, item.status)">
          상세보기
        </button>
      </div>

      <p v-if="filteredWeatherList.length === 0" class="empty-message">
        😭 검색 결과와 일치하는 도시가 없습니다.
      </p>
    </section>

    <div class="status-bar">
      {{ selectedCityInfo }}
    </div>
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  max-width: 620px;
  margin: 0 auto;
}

h3 {
  margin: 0 0 14px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* 검색 */
.search-box {
  margin-bottom: 22px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}

.search-box input {
  width: min(320px, 100%);
  padding: 13px 16px;
  border: 1px solid var(--line);
  border-radius: 10px;
  color: var(--ink);
  background: var(--paper);
  font: inherit;
  font-size: 15px;
}

.search-box input:focus {
  border-color: var(--accent);
  background: var(--surface);
  outline: none;
}

.search-box p {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 13px;
}

.search-box strong {
  color: var(--accent);
  font-weight: 700;
}

/* 목록 */
.list-box {
  display: grid;
  gap: 10px;
  margin-bottom: 18px;
}

.list-box h3 {
  margin-bottom: 0;
}

.weather-card {
  position: relative;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  cursor: pointer;
  transition:
    border-color 0.16s ease,
    transform 0.16s ease;
}

.weather-card:hover {
  border-color: var(--accent-line);
  transform: translateY(-1px);
}

.weather-card h4 {
  margin: 0 0 10px;
  padding-right: 92px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.weather-card p {
  margin: 0 0 12px;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 11px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
}

.hot {
  border-color: color-mix(in srgb, var(--signal) 35%, transparent);
  color: var(--signal);
  background: var(--signal-tint);
}

.cool {
  border-color: color-mix(in srgb, var(--slate) 30%, transparent);
  color: var(--slate);
  background: var(--slate-tint);
}

.btn-detail {
  position: absolute;
  right: 16px;
  top: 16px;
  padding: 7px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--paper);
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}

.btn-detail:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.empty-message {
  padding: 26px 0;
  color: var(--muted);
  font-size: 13.5px;
  text-align: center;
}

/* 상태바 */
.status-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  color: var(--ink-soft);
  font-size: 13.5px;
}

.status-bar::before {
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--accent);
  content: '';
}
</style>
