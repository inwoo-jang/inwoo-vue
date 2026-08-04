<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import ConceptHelp from '../../ConceptHelp.vue'
import StoreCounterPanel from './StoreCounterPanel.vue'
import { useCounterStore } from '../../../stores/counter'

/**
 * Code Challenge 10 — Pinia Store (교안 190쪽)
 *
 * 아래 두 패널은 서로의 존재를 모르는 형제 컴포넌트다.
 * props 도 emits 도 없이 숫자가 같이 움직이는 것을 눈으로 확인하는 것이 핵심이다.
 *
 * 아래쪽에는 가장 흔한 실수(storeToRefs 누락)를 나란히 놓았다.
 * 두 숫자가 언제 갈라지는지 직접 눌러 보면 왜 필요한지가 분명해진다.
 */
const counter = useCounterStore()

/** 올바른 방법 — storeToRefs 로 감싸면 ref 로 꺼내져 반응성이 유지된다 */
const { count } = storeToRefs(counter)

/**
 * 잘못된 방법 — 그냥 구조 분해하면 "그 순간의 숫자"만 복사된다.
 * 이 화면에 들어온 시점의 값에서 멈춰 있고, 이후 increment() 를 눌러도 꿈쩍하지 않는다.
 */
const { count: brokenCount } = counter

/** 실습을 처음부터 다시 보기 위한 초기화 */
const reset = () => {
  counter.count = 0
}

const showBroken = ref(false)
</script>

<template>
  <section class="practice-card">
    <h2>
      한 사물함을 두 컴포넌트가 함께 본다
      <ConceptHelp
        text="아래 두 패널은 부모가 값을 내려 주지 않습니다. 각자 useCounterStore()를 불러 같은 사물함을 열 뿐입니다. 한쪽에서 increment()를 누르면 다른 쪽 숫자도 같이 바뀝니다 — 이것이 Props Drilling 없이 상태를 나누는 방법입니다."
      />
    </h2>

    <div class="area">
      <div class="panels">
        <StoreCounterPanel label="COMPONENT A" />
        <StoreCounterPanel label="COMPONENT B" />
      </div>
      <p class="note">
        두 패널 사이에는 <b>props 도 emits 도 없습니다</b>. 각자
        <code>useCounterStore()</code> 로 같은 Store 를 열었을 뿐인데 숫자가 함께 움직입니다.
      </p>
    </div>

    <!-- 가장 흔한 실수 -->
    <div class="area">
      <h3>
        storeToRefs 를 빼면 어떻게 되나
        <button type="button" class="peek" @click="showBroken = !showBroken">
          {{ showBroken ? '닫기' : '직접 확인' }}
        </button>
      </h3>

      <div v-if="showBroken" class="compare">
        <div class="cell good">
          <p class="cell-head">
            <span class="tag ok">정상</span>
            <code>const { count } = storeToRefs(store)</code>
          </p>
          <p class="cell-value">{{ count }}</p>
        </div>
        <div class="cell bad">
          <p class="cell-head">
            <span class="tag no">끊김</span>
            <code>const { count } = store</code>
          </p>
          <p class="cell-value">{{ brokenCount }}</p>
        </div>
      </div>

      <div v-if="showBroken" class="controls">
        <button type="button" @click="counter.increment()">increment()</button>
        <button type="button" class="ghost" @click="reset()">0 으로 되돌리기</button>
      </div>

      <p v-if="showBroken" class="note warn">
        오른쪽은 <b>값이 복사된 순간</b>에 멈춰 있습니다. Store 의 state 는 ref 인데 구조 분해하면
        <code>.value</code> 만 꺼내져 연결이 끊기기 때문입니다.
        <b>actions 는 함수라 그냥 꺼내 써도 됩니다</b> — storeToRefs 는 state 와 getters 에만
        씁니다.
      </p>
    </div>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

.area + .area {
  margin-top: 20px;
}

.panels {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.peek {
  padding: 5px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 11.5px;
  font-weight: 700;
}

.peek:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.compare {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.cell {
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
}

.cell.good {
  border-color: var(--accent-line);
  background: var(--accent-tint);
}

.cell.bad {
  border-color: var(--signal-line);
  background: var(--signal-tint);
}

.cell-head {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
  margin: 0 0 8px;
}

.cell-head code {
  overflow-wrap: anywhere;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.cell-value {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 28px;
  font-weight: 700;
}

.tag {
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
}

.tag.ok {
  color: var(--on-accent);
  background: var(--accent);
}

.tag.no {
  color: var(--surface);
  background: var(--signal);
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.controls button {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--ink-soft);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 12px;
}

.controls button:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.controls button.ghost {
  color: var(--faint);
}

.note {
  margin: 12px 0 0;
  padding: 12px 14px;
  border-left: 3px solid var(--accent);
  border-radius: 0 9px 9px 0;
  background: var(--accent-tint);
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.75;
}

.note code {
  font-family: var(--font-mono);
  font-size: 12px;
}

.note.warn {
  border-left-color: var(--signal);
  background: var(--signal-tint);
}

@media (max-width: 520px) {
  .panels,
  .compare {
    grid-template-columns: 1fr;
  }
}
</style>
