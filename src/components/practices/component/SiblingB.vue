<script setup>
// 형제 A가 아니라 부모에게서 받는다.
defineProps({
  received: { type: String, default: '' },
})
</script>

<template>
  <div class="sibling">
    <p class="node-role">형제 B (받는 쪽)</p>
    <p class="desc">부모가 내려준 값(props)만 볼 수 있습니다.</p>
    <p class="bubble" :class="{ empty: !received }">
      {{ received || '아직 받은 말이 없습니다' }}
    </p>
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

.bubble {
  margin: 0;
  padding: 14px 16px;
  border-radius: 12px 12px 12px 4px;
  background: var(--slate-tint);
  color: var(--ink);
  font-size: 15px;
  font-weight: 600;
}

.bubble.empty {
  color: var(--faint);
  background: var(--surface-sunken);
  font-weight: 400;
}
</style>
