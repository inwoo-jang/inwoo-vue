<script setup>
import { ref, watch } from 'vue'
import DrillLeaf from './DrillLeaf.vue'

// 이 컴포넌트는 theme이 전혀 필요 없다.
// 오직 아래로 넘겨주기 위해 받아야만 한다 — 이것이 Props Drilling.
const props = defineProps({
  theme: { type: String, required: true },
})

// 값이 "내 손을 거쳐 갔다"를 눈에 보이게 표시한다
const passing = ref(false)
watch(
  () => props.theme,
  () => {
    passing.value = true
    setTimeout(() => (passing.value = false), 900)
  },
)
</script>

<template>
  <div class="level" :class="{ passing }">
    <p class="role">부모 (Parent)</p>

    <p class="hold" :class="{ passing }">
      <span class="name">props.theme :</span>
      <span class="data">{{ theme }}</span>
    </p>
    <p class="desc">😩 쓰지도 않는 값을 받아서 아래로 넘긴다</p>

    <DrillLeaf :theme="theme" />
  </div>
</template>

<style scoped>
.level {
  padding: 14px 16px;
  border: 1px dashed var(--slate-line);
  border-radius: 10px;
  background: var(--surface);
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.role {
  margin: 0 0 10px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* 이 컴포넌트가 값을 쥐고 있는지 보여주는 칸 */
.hold {
  display: grid;
  gap: 3px;
  margin: 0 0 6px;
  padding: 9px 11px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--paper);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.hold .name {
  color: var(--faint);
  font-size: 11px;
  white-space: nowrap;
}

.hold .data {
  color: var(--signal);
  font-weight: 700;
}

.hold .none {
  color: var(--faint);
}

.desc {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 12px;
}

.level .level {
  margin-top: 0;
}

/* 값이 지나갈 때 번쩍인다 */
.level.passing {
  border-color: var(--signal);
  border-style: solid;
  box-shadow: 0 0 0 3px var(--signal-tint);
}

.hold.passing {
  border-color: var(--signal);
  background: var(--signal-tint);
}
</style>
