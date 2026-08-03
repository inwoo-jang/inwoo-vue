<script setup>
/**
 * 누적 과제 1 — 날씨 Mockup (교안 98쪽)
 * 원본: weather-mockup/src/App.vue
 *
 * 로직은 원본 그대로이며, 이 사이트에 끼워 넣기 위해
 * 전역 <style>을 <style scoped>로 바꾸고 body/* 리셋만 제거했습니다.
 */
import { ref } from 'vue'

const searchQuery = ref('')
const selectedCityMessage = ref('도시 카드를 선택해 주세요.')

const weatherList = ref([
  { id: 1, city: '서울', temperature: 28, weather: '맑음' },
  { id: 2, city: '부산', temperature: 24, weather: '흐림' },
  { id: 3, city: '제주', temperature: 26, weather: '구름 조금' },
  { id: 4, city: '대전', temperature: 22, weather: '비' },
  { id: 5, city: '광주', temperature: 30, weather: '맑음' },
])

const handleSearchInput = (e) => {
  searchQuery.value = e.target.value
}

const getFilteredWeatherList = () => {
  const keyword = searchQuery.value.trim()

  if (!keyword) return weatherList.value

  return weatherList.value.filter((weather) => weather.city.includes(keyword))
}

const getTemperatureStatus = (temperature) => {
  return temperature >= 25 ? '🔥 더움' : '❄️ 선선함'
}

const selectCity = (cityName) => {
  selectedCityMessage.value = `${cityName}이 선택되었습니다.`
}

const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <main class="weather-app">
    <h1>날씨 Mockup</h1>

    <div class="weather-search">
      <label for="city-search">한글 도시 검색</label>
      <input
        id="city-search"
        :value="searchQuery"
        type="text"
        placeholder="예: 서울"
        @input="handleSearchInput"
      />
    </div>

    <p class="status-bar">{{ selectedCityMessage }}</p>

    <div class="weather-grid">
      <article
        v-for="weather in getFilteredWeatherList()"
        :key="weather.id"
        class="weather-card"
        @click="selectCity(weather.city)"
      >
        <div class="weather-card-header">
          <h2>{{ weather.city }}</h2>
          <span>{{ weather.weather }}</span>
        </div>

        <p class="temperature">{{ weather.temperature }}℃</p>

        <p v-if="weather.temperature >= 25" class="hot">🔥 더움</p>
        <p v-else class="cool">❄️ 선선함</p>

        <button
          type="button"
          @click.stop="showDetail(weather.city, getTemperatureStatus(weather.temperature))"
        >
          상세보기
        </button>
      </article>
    </div>

    <p v-if="getFilteredWeatherList().length === 0" class="empty-message">
      검색 결과와 일치하는 도시가 없습니다.
    </p>
  </main>
</template>

<style scoped>
.weather-app {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.weather-app > h1 {
  margin: 0 0 20px;
  color: var(--ink);
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.035em;
}

.weather-search {
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
}

.weather-search label {
  color: var(--ink);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.weather-search input {
  max-width: 320px;
  padding: 12px 15px;
  border: 1px solid var(--line);
  border-radius: 10px;
  color: var(--ink);
  background: var(--surface);
  font: inherit;
  font-size: 15px;
}

.weather-search input:focus {
  border-color: var(--accent);
  outline: none;
}

.status-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
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

.weather-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
  gap: 12px;
}

.weather-card {
  padding: 18px;
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

.weather-card-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}

.weather-card-header h2 {
  margin: 0;
  color: var(--ink);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.weather-card-header span {
  color: var(--faint);
  font-size: 11.5px;
}

.temperature {
  margin: 14px 0 10px;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.04em;
}

.hot,
.cool {
  display: inline-flex;
  align-items: center;
  margin: 0 0 14px;
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

.weather-card button {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--paper);
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}

.weather-card button:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.empty-message {
  padding: 30px;
  color: var(--muted);
  font-size: 13.5px;
  text-align: center;
}

@media (max-width: 520px) {
  .weather-search input {
    max-width: none;
  }
}
</style>
