<script setup>
/**
 * 지역(Local) 등록 실습용 자식 컴포넌트.
 * 이 파일은 practices 폴더의 하위라서 실습 목록에는 잡히지 않는다.
 */
defineProps({
  label: { type: String, default: '기본 버튼' },
})
</script>

<template>
  <button type="button" class="base-button">{{ label }}</button>
</template>

<style scoped>
.base-button {
  padding: 8px 14px;
  border: 1px solid var(--accent-line);
  border-radius: 999px;
  color: var(--accent);
  background: var(--accent-tint);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
</style>
