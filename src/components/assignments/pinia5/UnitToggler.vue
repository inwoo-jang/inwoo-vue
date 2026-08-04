<script setup>
import { storeToRefs } from 'pinia'
import { useConfigStore } from '../../../stores/configStore'

/**
 * 누적 과제 5 — 단위 변경 버튼 (교안 191쪽)
 *
 * 이 컴포넌트는 props 를 하나도 받지 않는다.
 * 부모가 값을 내려 주는 대신 Store 를 직접 열어 보기 때문이다.
 * 그래서 내비게이션 바 옆이든 어디든, 갖다 놓기만 하면 동작한다.
 *
 * storeToRefs 로 감싸야 unit·unitSymbol 의 반응성이 살아 있다.
 * 그냥 구조 분해하면 값만 복사되어 눌러도 화면이 바뀌지 않는다.
 * 반면 toggleUnit 은 함수라 storeToRefs 없이 그대로 꺼내 쓴다.
 */
const configStore = useConfigStore()
const { unit, unitSymbol } = storeToRefs(configStore)
const { toggleUnit } = configStore
</script>

<template>
  <button
    type="button"
    class="unit-toggler"
    :title="unit === 'celsius' ? '화씨(℉)로 보기' : '섭씨(℃)로 보기'"
    @click="toggleUnit"
  >
    <span class="symbol">{{ unitSymbol }}</span>
    <span class="name">{{ unit === 'celsius' ? '섭씨' : '화씨' }}</span>
  </button>
</template>

<style scoped>
.unit-toggler {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  padding: 7px 14px 7px 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}

.unit-toggler:hover {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.symbol {
  display: grid;
  width: 21px;
  height: 21px;
  place-items: center;
  border-radius: 50%;
  color: var(--on-accent);
  background: var(--accent);
  font-size: 11.5px;
  font-weight: 700;
}

.name {
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 700;
}
</style>
