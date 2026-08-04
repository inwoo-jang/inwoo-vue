<script setup>
import { useRoute, useRouter } from 'vue-router'

/**
 * 과제 4 — 없는 주소 (Catch-all Route)
 * routes 배열 맨 마지막의 /:pathMatch(.*)* 가 여기로 보낸다.
 */
const route = useRoute()
const router = useRouter()

const goHome = () => {
  router.push({ name: 'a4-home', params: { stageId: route.params.stageId ?? '4' } })
}
</script>

<template>
  <div class="missing">
    <p class="code">404</p>
    <h3>그런 페이지는 없습니다</h3>
    <p class="path">
      찾으신 주소 <code>{{ route.fullPath }}</code>
    </p>
    <button type="button" @click="goHome">← 메인 대시보드로 돌아가기</button>
  </div>
</template>

<style scoped>
.missing {
  padding: 46px 24px;
  border: 1px dashed var(--signal);
  border-radius: 14px;
  background: var(--surface);
  text-align: center;
}

.code {
  margin: 0 0 8px;
  color: var(--signal);
  font-family: var(--font-mono);
  font-size: 34px;
  font-weight: 800;
}

h3 {
  margin: 0 0 8px;
  color: var(--ink);
  font-size: 18px;
}

.path {
  margin: 0 0 20px;
  color: var(--muted);
  font-size: 12.5px;
}

.path code {
  padding: 2px 8px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: var(--paper);
  font-family: var(--font-mono);
  overflow-wrap: anywhere;
}

button {
  padding: 9px 15px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  background: var(--accent-tint);
  color: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}
</style>
