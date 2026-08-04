<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../../../stores/counter'

/**
 * Store 를 쓰는 자식 컴포넌트.
 *
 * 이름표(label) 말고는 부모에게서 아무것도 받지 않는다.
 * 그런데도 옆 패널과 숫자가 똑같다 — 둘 다 같은 사물함을 열고 있기 때문이다.
 * useCounterStore() 는 매번 새로 만드는 것이 아니라, 이미 있으면 그것을 돌려준다.
 */
defineProps({
  label: { type: String, required: true },
})

const counter = useCounterStore()
const { count, doubleCount } = storeToRefs(counter)
</script>

<template>
  <div class="panel">
    <p class="label">{{ label }}</p>
    <p class="count">{{ count }}</p>
    <p class="double">doubleCount · {{ doubleCount }}</p>
    <button type="button" @click="counter.increment()">increment()</button>
  </div>
</template>

<style scoped>
.panel {
  display: grid;
  gap: 4px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  text-align: center;
}

.label {
  margin: 0;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
}

.count {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 34px;
  font-weight: 700;
  line-height: 1.1;
}

.double {
  margin: 0 0 8px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

button {
  padding: 8px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  color: var(--ink-soft);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 12px;
}

button:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}
</style>
