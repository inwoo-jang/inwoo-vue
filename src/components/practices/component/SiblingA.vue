<script setup>
// 형제에게 직접 말을 걸 방법은 없다. 부모에게 올려보낼 뿐이다.
const emit = defineEmits(['send'])

const messages = ['안녕!', '점심 먹었어?', '과제 다 했어?']
</script>

<template>
  <div class="sibling">
    <p class="node-role">형제 A (보내는 쪽)</p>
    <p class="desc">누르면 부모에게 올려보냅니다(emit).</p>
    <div class="buttons">
      <button v-for="m in messages" :key="m" @click="emit('send', m)">{{ m }}</button>
    </div>
  </div>
</template>

<style scoped>
.sibling {
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

.desc {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 13px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
