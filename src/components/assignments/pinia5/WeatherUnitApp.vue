<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import WeatherBackdrop from '../../weather/WeatherBackdrop.vue'
import { backdropStatus } from '../router4/backdropState'
import UnitToggler from './UnitToggler.vue'

/**
 * 과제 5 결과물의 껍데기 — 과제 4의 껍데기에 UnitToggler 한 줄을 더한 것이다.
 *
 * 화면(홈 · 소개 · 상세)은 과제 4에서 만든 것을 그대로 쓴다.
 * 누적 과제라 새로 만드는 것이 아니라 "쌓는" 것이고,
 * 실제로 이번에 늘어난 것은 내비게이션 바 옆의 단위 버튼 하나뿐이다.
 *
 * 그 버튼과 아래 화면들은 서로를 전혀 모른다.
 * 둘 다 configStore 라는 같은 사물함을 볼 뿐이다 — 그것이 Pinia 를 쓰는 이유다.
 */
const route = useRoute()

/** 자식 경로로 이동할 때 stageId 를 유지해야 한다 */
const stageId = computed(() => route.params.stageId ?? '5')

/** 소개를 뺀 나머지(홈 · 상세 · 없는 주소)는 전부 홈 갈래로 본다 */
const isAbout = computed(() => route.name === 'a4-about')
</script>

<template>
  <div class="app">
    <!-- 보고 있는 도시의 날씨가 배경이 된다 -->
    <WeatherBackdrop :status="backdropStatus" />

    <!-- 최종 결과물과 같은 형태 — 내비게이션과 본문이 한 기둥 안에서 같은 폭을 쓴다 -->
    <div class="column">
      <!-- 내비게이션 바 — 오른쪽 끝에 단위 변경 버튼을 둔다 -->
      <nav class="nav" role="tablist">
        <RouterLink :to="{ name: 'a4-home', params: { stageId } }" :class="{ on: !isAbout }">
          홈
        </RouterLink>
        <RouterLink :to="{ name: 'a4-about', params: { stageId } }" active-class="on">
          소개
        </RouterLink>
        <code class="url">{{ route.path }}</code>
        <UnitToggler />
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

/* 화면의 폭을 여기 한 곳에서 정한다 */
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

/* 주소는 오른쪽으로 밀고, 그 뒤에 단위 버튼이 온다 */
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

  /* 주소가 숨으면 단위 버튼이 오른쪽 끝을 이어받는다 */
  .nav :deep(.unit-toggler) {
    margin-left: auto;
  }
}
</style>
