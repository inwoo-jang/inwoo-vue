<script setup>
// 부모가 내려준 값을 받기만 한다 (읽기 전용)
defineProps({
  message: { type: String, required: true },
})

// 부모에게 올려보낼 신호를 등록한다
const emit = defineEmits(['reply'])
</script>

<template>
  <div class="node child">
    <p class="node-role">자식 (Child)</p>

    <p class="field">
      <span class="key">props.message</span>
      <span class="val">{{ message || '(빈 값)' }}</span>
    </p>

    <button @click="emit('reply', '자식이 보낸 인사 👋')">
      부모에게 신호 보내기 (emit)
    </button>
  </div>
</template>

<style scoped>
.node {
  padding: 16px 18px;
  border: 1px dashed var(--slate-line);
  border-radius: 12px;
  background: var(--surface);
}

.node-role {
  margin: 0 0 12px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.field {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  margin: 0 0 12px;
}

.key {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.val {
  color: var(--ink);
  font-size: 14px;
  font-weight: 600;
}
</style>
