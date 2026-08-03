<script setup>
/**
 * 전역(Global) 등록 실습용 컴포넌트.
 * main.js에서 app.component('GlobalBadge', GlobalBadge) 로 한 번 등록해 두었기 때문에
 * 어느 컴포넌트에서든 import 없이 <GlobalBadge /> 로 바로 쓸 수 있다.
 */
defineProps({
  text: { type: String, default: '전역 등록됨' },
})
</script>

<template>
  <span class="global-badge">
    <i aria-hidden="true"></i>
    {{ text }}
  </span>
</template>

<style scoped>
.global-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 12px;
  border: 1px solid var(--slate-line);
  border-radius: 999px;
  color: var(--slate);
  background: var(--slate-tint);
  font-size: 12px;
  font-weight: 600;
}

.global-badge i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--slate);
}
</style>
