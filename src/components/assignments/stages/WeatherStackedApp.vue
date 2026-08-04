<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import WeatherBackdrop from '../../weather/WeatherBackdrop.vue'
import UnitToggler from '../pinia5/UnitToggler.vue'
import { backdropStatus } from '../router4/backdropState'
import { featuresOf, stageNumber } from './stageFeatures'

/**
 * 6~8단계 결과물의 껍데기 — 5단계 껍데기 위에 한 겹씩 더 얹은 것.
 *
 *   4단계 껍데기 : 홈 · 소개 (RouterLink + RouterView)
 *   5단계        + 단위 토글
 *   6단계        + 실제 API (목록을 Mock 이 아니라 서버에서 받는다)
 *   7단계        + Element Plus 조작 요소 (본문 화면에서)
 *   8단계        + 운세 메뉴
 *
 * 단계마다 앱을 통째로 복사하지 않고, "몇 단계부터 켜지는가"만
 * stageFeatures.js 에서 읽어 껍데기와 본문이 함께 참고한다.
 */
const route = useRoute()

const stage = computed(() => stageNumber(route.params.stageId))
const stageId = computed(() => String(stage.value))
const features = computed(() => featuresOf(route.params.stageId))

const isAbout = computed(() => route.name === 'a4-about')
const isTarot = computed(() => route.name === 'a4-tarot')
const isHome = computed(() => !isAbout.value && !isTarot.value)
</script>

<template>
  <div class="app">
    <!-- 보고 있는 도시의 날씨가 배경이 된다 -->
    <WeatherBackdrop :status="backdropStatus" />

    <div class="column">
      <nav class="nav" role="tablist">
        <RouterLink :to="{ name: 'a4-home', params: { stageId } }" :class="{ on: isHome }">
          홈
        </RouterLink>
        <RouterLink :to="{ name: 'a4-about', params: { stageId } }" active-class="on">
          소개
        </RouterLink>
        <!-- 8단계에서 늘어난 메뉴 -->
        <RouterLink
          v-if="features.fortune"
          :to="{ name: 'a4-tarot', params: { stageId } }"
          active-class="on"
        >
          운세
        </RouterLink>

        <code class="url">{{ route.path }}</code>

        <!-- 5단계에서 붙인 단위 토글 -->
        <UnitToggler v-if="features.unitToggle" />
      </nav>

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  display: grid;
}

/* 배경(z-index 0) 위에 내용이 오도록 */
.app > *:not(.backdrop) {
  position: relative;
  z-index: 1;
}

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

  .nav :deep(.unit-toggler) {
    margin-left: auto;
  }
}
</style>
