<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import WeatherIcon from '../../components/assignments/weather/WeatherIcon.vue'
import UiIcon from '../../components/assignments/weather/UiIcon.vue'
import { fetchWeather, nearestCity } from '../../components/assignments/weather/weatherApi'
import { useConfigStore } from '../../stores/configStore'
import { link } from '../routes'

/**
 * 홈 — 오늘 한눈에.
 *
 * 여기서 가장 먼저 보고 싶은 것은 "지금 내가 있는 곳"의 날씨다.
 * 전국 목록은 날씨 화면이 맡으므로, 홈에서는 한 곳만 크게 보여 준다.
 */
const { unit, unitSymbol } = storeToRefs(useConfigStore())
const toUnit = (celsius) =>
  unit.value === 'celsius' ? celsius : Math.round((celsius * 9) / 5 + 32)

const here = ref(null)
/** idle → locating → ready | denied | failed */
const state = ref('idle')

/** 위치를 못 받아도 화면이 막히면 안 되므로, 실패를 null 로 돌려준다 */
const locate = () =>
  new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(null)
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve(nearestCity(coords.latitude, coords.longitude)),
      () => resolve(null),
      { timeout: 8000 },
    )
  })

const load = async () => {
  state.value = 'locating'
  try {
    // 위치와 날씨는 서로를 기다릴 이유가 없다
    const [near, weather] = await Promise.all([locate(), fetchWeather()])
    if (!near) {
      state.value = 'denied'
      return
    }
    here.value = weather.rows.find((row) => row.id === near.id) ?? null
    state.value = here.value ? 'ready' : 'failed'
  } catch (error) {
    console.error('[home] 현재 위치 날씨를 불러오지 못했습니다.', error)
    state.value = 'failed'
  }
}

onMounted(async () => {
  // 한 번 거절한 사용자를 다시 귀찮게 하지는 않는다
  const permission = await navigator.permissions?.query({ name: 'geolocation' }).catch(() => null)
  if (permission?.state === 'denied') {
    state.value = 'denied'
    return
  }
  load()
})

/** 아이콘 받침 색조 — 날씨 카드와 같은 규칙 */
const tone = computed(() => {
  const status = here.value?.status ?? ''
  if (status.includes('맑')) return 'warm'
  if (status.includes('비') || status.includes('눈')) return 'cool'
  return 'neutral'
})
</script>

<template>
  <main class="home-page">
    <section class="home-hero">
      <p class="home-eyebrow">TODAY, AT A GLANCE</p>
      <h1>오늘을 조금 더<br />기분 좋게 시작해요.</h1>
      <p>오늘 날씨를 확인하고, 타로 카드로 가벼운 힌트도 받아 보세요.</p>
    </section>

    <!-- 현재 위치 한 곳 -->
    <section class="here" :class="{ ready: state === 'ready' }">
      <template v-if="state === 'ready' && here">
        <div class="here-icon" :class="tone">
          <WeatherIcon :status="here.status" :size="40" />
        </div>
        <div class="here-text">
          <p class="here-label"><UiIcon name="location" :size="12" /> 현재 위치</p>
          <h2>{{ here.name }}</h2>
          <p class="here-status">{{ here.status }} · 습도 {{ here.humidity }}%</p>
        </div>
        <p class="here-temp">
          {{ toUnit(here.temp) }}<span>{{ unitSymbol }}</span>
        </p>
        <RouterLink :to="link('detail', { cityId: here.id })" class="here-more">
          자세히 보기 →
        </RouterLink>
      </template>

      <p v-else-if="state === 'locating'" class="here-note">현재 위치의 날씨를 찾는 중입니다…</p>

      <p v-else-if="state === 'denied'" class="here-note">
        위치를 알 수 없어 현재 위치 날씨는 건너뛰었습니다.
        <RouterLink :to="link('weather')">전국 날씨 보기 →</RouterLink>
      </p>

      <p v-else class="here-note">
        현재 위치의 날씨를 불러오지 못했습니다.
        <button type="button" @click="load">다시 시도</button>
      </p>
    </section>

    <section class="home-links" aria-label="서비스 바로가기">
      <RouterLink :to="link('weather')" class="home-link weather-link">
        <span>☁</span>
        <strong>날씨</strong>
        <small>전국 도시 오늘 현황</small>
      </RouterLink>
      <RouterLink :to="link('tarot')" class="home-link tarot-link">
        <span>✶</span>
        <strong>운세</strong>
        <small>오늘의 타로 한 장 뽑기</small>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.home-page { display: grid; gap: 12px; }
.home-hero, .home-link, .here { border: 1px solid color-mix(in srgb, var(--surface) 75%, transparent); border-radius: 22px; background: color-mix(in srgb, var(--surface) 82%, transparent); backdrop-filter: blur(12px); }
.home-hero { padding: 34px 28px; }
.home-eyebrow { margin: 0 0 12px; color: var(--accent); font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; }
h1 { margin: 0; color: var(--ink); font-size: clamp(30px, 7vw, 42px); font-weight: 600; line-height: 1.18; }
.home-hero > p:last-child { max-width: 420px; margin: 16px 0 0; color: var(--ink-soft); line-height: 1.65; }

/* ── 현재 위치 ── */
.here { display: grid; gap: 14px; padding: 20px 24px; }
.here.ready { grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; }
.here-icon { display: grid; width: 66px; height: 66px; border-radius: 20px; place-items: center; }
.here-icon.warm { background: #fdf2d5; }
.here-icon.cool { background: #e5eff9; }
.here-icon.neutral { background: #edf0f3; }
.here-label { display: flex; gap: 5px; align-items: center; margin: 0 0 3px; color: var(--accent); font-size: 11px; font-weight: 700; }
.here h2 { margin: 0; color: var(--ink); font-size: 24px; font-weight: 600; line-height: 1.2; }
.here-status { margin: 3px 0 0; color: var(--muted); font-size: 12.5px; }
.here-temp { margin: 0; color: var(--ink); font-family: var(--font-mono); font-size: 34px; font-weight: 700; letter-spacing: -.03em; }
.here-temp span { margin-left: 2px; color: var(--faint); font-size: 16px; font-weight: 500; }
.here-more { grid-column: 1 / -1; justify-self: end; color: var(--accent); font-size: 12.5px; font-weight: 600; text-decoration: none; }
.here-more:hover { text-decoration: underline; }
.here-note { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin: 0; color: var(--muted); font-size: 13px; }
.here-note a { color: var(--accent); font-weight: 600; text-decoration: none; }
.here-note button { padding: 5px 12px; border: 1px solid var(--line); border-radius: 999px; background: var(--surface); color: var(--muted); cursor: pointer; font: inherit; font-size: 12px; }
.here-note button:hover { border-color: var(--accent); color: var(--accent); }

.home-links { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.home-link { display: grid; gap: 8px; min-height: 170px; padding: 22px; color: var(--ink); text-decoration: none; transition: transform .2s ease, background .2s ease; }
.home-link:hover { transform: translateY(-3px); background: var(--surface); }
.home-link > span { font-size: 30px; line-height: 1; }
.home-link strong { margin-top: auto; font-size: 25px; font-weight: 600; }
.home-link small { color: var(--muted); }
.weather-link > span { color: #49788d; }
.tarot-link > span { color: #755899; }

@media (max-width: 520px) {
  .here.ready { grid-template-columns: auto minmax(0, 1fr); }
  .here-temp { grid-column: 2; }
}
@media (max-width: 420px) { .home-links { grid-template-columns: 1fr; } }
</style>
