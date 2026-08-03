<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AssignmentsView from './views/AssignmentsView.vue'
import HomeView from './views/HomeView.vue'
import LearningView from './views/LearningView.vue'
import ProjectView from './views/ProjectView.vue'
import SettingsView from './views/SettingsView.vue'

const currentPath = ref(window.location.hash.slice(1) || '/')

const updatePath = () => {
  currentPath.value = window.location.hash.slice(1) || '/'
}

onMounted(() => window.addEventListener('hashchange', updatePath))
onUnmounted(() => window.removeEventListener('hashchange', updatePath))

const currentView = computed(() => {
  if (currentPath.value === '/learning') return LearningView
  if (currentPath.value === '/assignments') return AssignmentsView
  if (currentPath.value === '/project') return ProjectView
  if (currentPath.value === '/settings') return SettingsView
  return HomeView
})

const isActive = (path) => currentPath.value === path
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <a class="brand" href="#/">
        <span class="brand-mark">V</span>
        <span>Vue Learning Lab</span>
      </a>

      <nav class="main-nav" aria-label="주요 메뉴">
        <a href="#/" :class="{ active: isActive('/') }">홈</a>
        <a href="#/learning" :class="{ active: isActive('/learning') }">
          학습 & 챌린지
        </a>
        <a href="#/assignments" :class="{ active: isActive('/assignments') }">
          제출 과제
        </a>
        <a href="#/project" :class="{ active: isActive('/project') }">
          최종 결과물
        </a>
        <a href="#/settings" :class="{ active: isActive('/settings') }">
          환경 설정
        </a>
      </nav>
    </header>

    <main class="page-container">
      <component :is="currentView" />
    </main>
  </div>
</template>

<style>
.app-shell {
  min-height: 100vh;
}

.app-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px max(24px, calc((100vw - 1180px) / 2));
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter: saturate(1.4) blur(10px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--ink);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.brand-mark {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 9px;
  color: var(--on-accent);
  background: var(--accent);
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.main-nav a {
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 700;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--ink);
  background: var(--accent-tint);
}

.page-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
  padding: 48px 0 80px;
}

@media (max-width: 760px) {
  .app-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .main-nav {
    justify-content: flex-start;
  }

  .page-container {
    width: min(100% - 32px, 1180px);
    padding-top: 32px;
  }
}
</style>
