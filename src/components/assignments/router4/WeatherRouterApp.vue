<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import WeatherBackdrop from '../../weather/WeatherBackdrop.vue'
import { backdropStatus } from './backdropState'

/**
 * 과제 4 결과물의 껍데기 — 교안의 App.vue 역할.
 *
 *   내비게이션 바 : <RouterLink>
 *   메인 콘텐츠   : <RouterView />
 *
 * 이 사이트 안에서 돌아가야 하므로, 과제의 화면들은
 * /project/:stageId 아래의 자식 경로로 등록되어 있다.
 * 원리는 교안과 같다 — 주소가 바뀌면 RouterView 자리가 갈아끼워진다.
 */
const route = useRoute()

/** 자식 경로로 이동할 때 stageId 를 유지해야 한다 */
const stageId = computed(() => route.params.stageId ?? '4')

/**
 * 소개를 뺀 나머지(홈 · 상세 · 없는 주소)는 전부 홈 갈래로 본다.
 * exact-active-class 만 쓰면 상세 화면에서 아무 탭도 안 눌린 상태가 된다.
 */
const isAbout = computed(() => route.name === 'a4-about')
</script>

<template>
  <div class="app">
    <!-- 보고 있는 도시의 날씨가 배경이 된다 -->
    <WeatherBackdrop :status="backdropStatus" />

    <!-- 최종 결과물과 같은 형태 — 내비게이션과 본문이 한 기둥 안에서 같은 폭을 쓴다 -->
    <div class="column">
      <!-- 내비게이션 바 -->
      <nav class="nav" role="tablist">
        <RouterLink :to="{ name: 'a4-home', params: { stageId } }" :class="{ on: !isAbout }">
          홈
        </RouterLink>
        <RouterLink :to="{ name: 'a4-about', params: { stageId } }" active-class="on">
          소개
        </RouterLink>
        <code class="url">{{ route.path }}</code>
      </nav>

      <!-- 메인 콘텐츠 — 주소에 맞는 화면이 여기 놓인다 -->
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
/* ── 여기부터는 최종 결과물(final/index.vue)과 같은 규격이다 ── */
.app {
  position: relative;
  display: grid;
}

/* 배경(z-index 0) 위에 내용이 오도록 */
.app > *:not(.backdrop) {
  position: relative;
  z-index: 1;
}

/*
 * 화면의 폭을 여기 한 곳에서 정한다.
 * minmax(0, 1fr) 이 없으면 가로로 긴 내용이 들어왔을 때 칸이 벌어져
 * max-width 를 넘어간다. 0 을 최소로 못박아야 그 안에서 스크롤된다.
 */
.column {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  gap: 12px;
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  align-items: center;
  padding: 2px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  backdrop-filter: blur(10px);
}

.nav a {
  padding: 8px 16px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.nav a:hover {
  color: var(--ink);
}

.nav a.on {
  color: var(--on-accent);
  background: var(--accent);
}

.url {
  margin-left: auto;
  padding: 0 12px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
  overflow-wrap: anywhere;
}

@media (max-width: 620px) {
  .url {
    display: none;
  }
}
</style>
