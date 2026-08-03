<script setup>
import { ref } from 'vue'

const props = defineProps({
  count: { type: Number, required: true },
})

const emit = defineEmits(['increase'])

const result = ref('')

/** ❌ 금지된 방법 — Props를 자식이 직접 바꾸려는 시도 */
const tryDirectChange = () => {
  const before = props.count
  try {
    // Props 객체는 readonly라 이 대입은 무시된다 (콘솔에 경고가 찍힌다)
    props.count = before + 1
  } catch {
    // strict 환경에서는 예외가 날 수도 있다
  }
  result.value =
    props.count === before
      ? `실패 — 값은 그대로 ${props.count} 입니다. (콘솔 경고 확인)`
      : `어라, 바뀌었습니다: ${props.count}`
}

/** ✅ 올바른 방법 — 부모에게 바꿔 달라고 요청 */
const askParent = () => {
  emit('increase')
  result.value = '성공 — 부모가 값을 바꿔 주었습니다.'
}
</script>

<template>
  <div class="child">
    <p class="node-role">자식 (Child)</p>
    <p class="field">
      <span class="key">props.count</span>
      <span class="val">{{ count }}</span>
    </p>

    <div class="buttons">
      <button class="bad" @click="tryDirectChange">❌ 직접 바꾸기 (props.count++)</button>
      <button class="good" @click="askParent">✅ 부모에게 요청 (emit)</button>
    </div>

    <p v-if="result" class="result" :class="{ fail: result.startsWith('실패') }">{{ result }}</p>
  </div>
</template>

<style scoped>
.child {
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
  align-items: baseline;
  gap: 8px;
  margin: 0 0 14px;
}

.key {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.val {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 700;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.result {
  margin: 14px 0 0;
  padding: 10px 12px;
  border-left: 3px solid var(--accent);
  border-radius: 0 8px 8px 0;
  background: var(--accent-tint);
  color: var(--accent);
  font-size: 13px;
}

.result.fail {
  border-left-color: var(--danger);
  background: var(--danger-tint);
  color: var(--danger);
}
</style>
