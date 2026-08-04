<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import WeatherBackdrop from '../weather/WeatherBackdrop.vue'
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
</script>

<template>
  <div class="app dashboard-wrapper">
    <!-- 보고 있는 도시의 날씨가 배경이 된다 -->
    <WeatherBackdrop :status="backdropStatus" />

    <!-- 내비게이션 바 -->
    <nav class="nav" role="tablist">
      <RouterLink
        :to="{ name: 'a4-home', params: { stageId } }"
        exact-active-class="on"
      >
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
</template>

<style scoped>
.app {
  display: grid;
  gap: 14px;
}

/* 배경(z-index 0) 위에 내용이 오도록 */
.app > *:not(.backdrop) {
  position: relative;
  z-index: 1;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  padding: 4px;
  border-radius: 999px;
  background: var(--paper);
}

.nav a {
  padding: 9px 22px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition:
    color 0.15s ease,
    background 0.15s ease;
}

.nav a:hover {
  color: var(--accent);
}

.nav a.on {
  color: var(--accent);
  background: var(--surface);
  box-shadow: 0 1px 4px rgb(15 23 42 / 8%);
}

.url {
  margin-left: auto;
  padding: 4px 13px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}
</style>
