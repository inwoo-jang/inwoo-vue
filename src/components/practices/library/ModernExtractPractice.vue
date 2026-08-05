<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 247쪽 Code Challenge — 데이터 추출 및 포맷팅.
 *
 * 교안은 결과창 한 줄만 보여 주지만, 그 한 줄이 나오기까지
 * 값이 어떤 모양으로 바뀌는지가 이 문법의 전부다.
 * 그래서 중간 변수 세 개를 각각 따로 보여 준다.
 */

/** 실시간 화면 출력을 위한 Vue 상태값 (교안의 수정 금지 부분) */
const result1 = ref('')

/** 중간 과정을 보여 주려고 따로 담아 둔다. 교안 코드에는 없다 */
const steps = ref([])

const MEMBERS = ['김수원', '이서울', '박부산', '최대전']
const RAW_DATA = { id: 101, grade: 'VIP', details: { score: 95 } }

const runTask1 = () => {
  // 1. includes() — 배열에 그 값이 있는지 true/false 로만 알려 준다
  const memberContainsPark = MEMBERS.includes('박부산')

  // 2. 중첩 구조 분해 — details 안으로 한 겹 더 들어간다.
  //    콜론 뒤가 "더 들어갈 곳"이라, details 라는 변수는 생기지 않는다.
  const {
    grade,
    details: { score },
  } = RAW_DATA

  // 3. 템플릿 리터럴 — 백틱 안에서 ${} 로 값을 끼워 넣는다
  result1.value = `부산 포함 여부: ${memberContainsPark} / 등급: ${grade} / 점수: ${score}점`

  steps.value = [
    {
      label: 'memberContainsPark',
      code: "MEMBERS.includes('박부산')",
      value: String(memberContainsPark),
      kind: 'boolean',
      why: '값 자체가 아니라 "있느냐"만 돌려준다. 그래서 true 다.',
    },
    {
      label: 'grade',
      code: 'const { grade } = RAW_DATA',
      value: `'${grade}'`,
      kind: 'string',
      why: '키 이름과 변수 이름이 같아야 꺼내진다.',
    },
    {
      label: 'score',
      code: 'const { details: { score } } = RAW_DATA',
      value: String(score),
      kind: 'number',
      why: '콜론은 "이름 바꾸기"가 아니라 "한 겹 더 들어가기"다.',
    },
  ]
}

const reset = () => {
  result1.value = ''
  steps.value = []
}
</script>

<template>
  <section class="practice-card">
    <h2>
      과제 1 — 데이터 추출 및 포맷팅
      <ConceptHelp
        text="구조 분해 할당은 객체나 배열에서 필요한 값만 골라 변수로 꺼내는 문법입니다. 중첩된 객체는 콜론(:)으로 한 겹 더 들어갑니다. 템플릿 리터럴은 백틱(`) 안에서 ${} 로 값을 끼워 넣어 문자열을 조립하는 문법입니다."
      />
    </h2>

    <!-- 재료 -->
    <div class="area">
      <h3>주어진 재료</h3>
      <div class="given">
        <div class="given-item">
          <code class="g-name">members</code>
          <div class="chips">
            <span v-for="name in MEMBERS" :key="name" :class="{ hit: name === '박부산' }">
              {{ name }}
            </span>
          </div>
        </div>
        <div class="given-item">
          <code class="g-name">rawData</code>
          <pre class="g-value">{{ RAW_DATA }}</pre>
        </div>
      </div>
    </div>

    <!-- 실행 -->
    <div class="area">
      <div class="run">
        <button type="button" class="go" @click="runTask1">과제 1 가동</button>
        <button v-if="result1" type="button" class="ghost" @click="reset">지우기</button>
      </div>
    </div>

    <!-- 중간 과정 -->
    <div v-if="steps.length" class="area">
      <h3>꺼낸 값 <small>결과창에 들어가기 전 모습</small></h3>
      <ul class="steps">
        <li v-for="step in steps" :key="step.label">
          <code class="s-name">{{ step.label }}</code>
          <code class="s-code">{{ step.code }}</code>
          <span class="s-value" :class="step.kind">{{ step.value }}</span>
          <span class="s-why">{{ step.why }}</span>
        </li>
      </ul>
    </div>

    <!-- 결과창 -->
    <div class="area">
      <h3>결과창 1</h3>
      <div class="console" :class="{ empty: !result1 }">
        {{ result1 || '가동 버튼을 누르면 조립된 문자열이 여기 찍힙니다.' }}
      </div>
    </div>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

h3 small {
  color: var(--faint);
  font-size: 11px;
  font-weight: 500;
}

.area + .area {
  margin-top: 20px;
}

/* 재료 */
.given {
  display: grid;
  gap: 8px;
}

.given-item {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 11px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

.g-name {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.chips span {
  padding: 4px 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 12.5px;
}

/* 찾는 값 하나만 눈에 띄게 — includes() 가 무엇을 보는지 */
.chips span.hit {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
  font-weight: 700;
}

.g-value {
  margin: 0;
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 12px;
  white-space: pre-wrap;
}

/* 실행 */
.run {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.go {
  padding: 10px 20px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
}

.ghost {
  padding: 10px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
}

/* 중간 과정 */
.steps {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.steps li {
  display: grid;
  grid-template-columns: 152px minmax(0, 1.1fr) auto;
  gap: 10px 12px;
  align-items: center;
  padding: 11px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

.s-name {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}

.s-code {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.s-value {
  padding: 3px 10px;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;
}

/* 타입이 다르다는 것을 색으로 갈라 준다 — true 는 값이 아니라 판정이다 */
.s-value.boolean {
  color: var(--accent);
  background: var(--accent-tint);
}

.s-value.string {
  color: var(--slate);
  background: var(--paper-strong, var(--surface));
}

.s-value.number {
  color: var(--signal);
  background: var(--signal-tint);
}

.s-why {
  grid-column: 1 / -1;
  color: var(--faint);
  font-size: 12px;
  line-height: 1.6;
}

/* 결과창 — 교안 화면과 같은 검은 콘솔 */
.console {
  padding: 15px 18px;
  border-radius: 10px;
  color: #e8e8e8;
  background: #2b2b2b;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.7;
  word-break: break-all;
}

.console.empty {
  color: #8a8a8a;
}

@media (max-width: 640px) {
  .given-item,
  .steps li {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .s-value {
    justify-self: start;
  }
}
</style>
