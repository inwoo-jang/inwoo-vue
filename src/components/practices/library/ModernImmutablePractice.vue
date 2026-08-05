<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 248쪽 Code Challenge — 불변성 복사 및 기본값 방어.
 *
 * 이 과제의 진짜 함정은 stock: 0 이다.
 * || 를 쓰면 0 이 사라지고, ?? 를 쓰면 살아남는다.
 * 결과창만 봐서는 왜 그런지 알 수 없으므로 두 방식을 나란히 계산해 보여 준다.
 */

/** 실시간 화면 출력을 위한 Vue 상태값 (교안의 수정 금지 부분) */
const result2 = ref('')

const compare = ref([])
const cartBefore = ref([])
const cartAfter = ref([])

const CURRENT_CART = ['Apple', 'Banana']
const NEW_PRODUCT = { name: 'Orange', stock: 0, preview: null }

const runTask2 = () => {
  // 1. 스프레드 — 기존 배열을 펼쳐 새 배열을 만든다. 원본은 그대로 남는다
  const updatedCart = [...CURRENT_CART, NEW_PRODUCT.name]

  // 2. 옵셔널 체이닝(?.) + 널 병합(??) 연쇄
  //    preview 가 null 이므로 우항의 기본값으로 넘어간다
  const imgStatus = NEW_PRODUCT?.preview ?? '이미지 준비중'

  // 3. stock 은 0 이다. ?? 는 0 을 "값이 있다"고 인정한다
  const finalStock = NEW_PRODUCT.stock ?? 0

  result2.value = `카트: ${updatedCart} / 이미지: ${imgStatus} / 수량: ${finalStock}개`

  cartBefore.value = [...CURRENT_CART]
  cartAfter.value = updatedCart

  compare.value = [
    {
      label: 'stock (0)',
      old: NEW_PRODUCT.stock || 99,
      oldCode: 'stock || 99',
      now: NEW_PRODUCT.stock ?? 99,
      nowCode: 'stock ?? 99',
      why: '0 은 Falsy 라서 || 는 없는 값으로 본다. ?? 는 null·undefined 만 없는 값으로 본다.',
      broken: true,
    },
    {
      label: 'preview (null)',
      old: NEW_PRODUCT.preview || '이미지 준비중',
      oldCode: 'preview || …',
      now: NEW_PRODUCT.preview ?? '이미지 준비중',
      nowCode: 'preview ?? …',
      why: 'null 은 둘 다 없는 값으로 본다. 여기서는 결과가 같다.',
      broken: false,
    },
  ]
}

const reset = () => {
  result2.value = ''
  compare.value = []
  cartBefore.value = []
  cartAfter.value = []
}

/** 화면에 찍을 때 빈 문자열과 0 이 구분되게 */
const show = (value) => (value === '' ? "''" : String(value))
</script>

<template>
  <section class="practice-card">
    <h2>
      과제 2 — 불변성 복사 및 데이터 방어
      <ConceptHelp
        text="스프레드 연산자(...)는 배열·객체를 펼쳐 새 것을 만들어 원본을 지킵니다. 널 병합 연산자(??)는 좌항이 null이나 undefined일 때만 우항의 기본값을 씁니다. 논리합(||)과 달리 숫자 0과 빈 문자열을 값으로 인정합니다."
      />
    </h2>

    <!-- 재료 -->
    <div class="area">
      <h3>주어진 재료</h3>
      <div class="given">
        <div class="given-item">
          <code class="g-name">currentCart</code>
          <div class="chips">
            <span v-for="item in CURRENT_CART" :key="item">{{ item }}</span>
          </div>
        </div>
        <div class="given-item">
          <code class="g-name">newProduct</code>
          <pre class="g-value">{{ NEW_PRODUCT }}</pre>
        </div>
      </div>
      <p class="hint-line">
        <b>stock 이 0</b>이고 <b>preview 가 null</b>인 것이 이 과제의 함정입니다.
      </p>
    </div>

    <!-- 실행 -->
    <div class="area">
      <div class="run">
        <button type="button" class="go" @click="runTask2">과제 2 가동</button>
        <button v-if="result2" type="button" class="ghost" @click="reset">지우기</button>
      </div>
    </div>

    <!-- 원본 보존 -->
    <div v-if="cartAfter.length" class="area">
      <h3>원본은 그대로인가 <small>스프레드가 하는 일</small></h3>
      <div class="carts">
        <div class="cart">
          <p class="c-label">currentCart <span class="tag keep">원본</span></p>
          <div class="chips">
            <span v-for="item in cartBefore" :key="item">{{ item }}</span>
          </div>
        </div>
        <span class="arrow" aria-hidden="true">→</span>
        <div class="cart">
          <p class="c-label">updatedCart <span class="tag new">새 배열</span></p>
          <div class="chips">
            <span v-for="item in cartAfter" :key="item" :class="{ added: item === 'Orange' }">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
      <p class="hint-line">
        오른쪽에 Orange 가 늘었는데 왼쪽은 두 개 그대로입니다. <code>=</code> 로 대입했다면 왼쪽도
        같이 늘었을 것입니다.
      </p>
    </div>

    <!-- || vs ?? -->
    <div v-if="compare.length" class="area">
      <h3>|| 였다면 <small>같은 값에 두 연산자를 각각 써 본 결과</small></h3>
      <ul class="compare">
        <li v-for="row in compare" :key="row.label" :class="{ broken: row.broken }">
          <span class="cm-label">{{ row.label }}</span>
          <span class="cm-cell old">
            <code>{{ row.oldCode }}</code>
            <b>{{ show(row.old) }}</b>
          </span>
          <span class="cm-cell now">
            <code>{{ row.nowCode }}</code>
            <b>{{ show(row.now) }}</b>
          </span>
          <span class="cm-why">{{ row.why }}</span>
        </li>
      </ul>
    </div>

    <!-- 결과창 -->
    <div class="area">
      <h3>결과창 2</h3>
      <div class="console" :class="{ empty: !result2 }">
        {{ result2 || '가동 버튼을 누르면 조립된 문자열이 여기 찍힙니다.' }}
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
  grid-template-columns: 100px minmax(0, 1fr);
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

.g-value {
  margin: 0;
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 12px;
  white-space: pre-wrap;
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

.chips span.added {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
  font-weight: 700;
}

.hint-line {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.hint-line code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
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

/* 원본 vs 복사본 */
.carts {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
}

.cart {
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

.c-label {
  display: flex;
  gap: 7px;
  align-items: center;
  margin: 0 0 8px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 700;
}

.tag {
  padding: 2px 8px;
  border-radius: 999px;
  font-family: var(--font-sans, inherit);
  font-size: 10.5px;
}

.tag.keep {
  color: var(--slate);
  background: var(--surface);
}

.tag.new {
  color: var(--on-accent);
  background: var(--accent);
}

.arrow {
  color: var(--faint);
  font-size: 18px;
}

/* || vs ?? 대조표 */
.compare {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.compare li {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr) minmax(0, 1fr);
  gap: 9px 12px;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

/* || 이 값을 망가뜨리는 줄만 붉게 — 여기가 이 과제의 핵심이다 */
.compare li.broken {
  border-color: var(--signal);
  background: var(--signal-tint);
}

.cm-label {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}

.cm-cell {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  align-items: baseline;
}

.cm-cell code {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
}

.cm-cell b {
  padding: 3px 10px;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.cm-cell.old b {
  color: var(--signal);
  background: var(--paper);
}

.cm-cell.now b {
  color: var(--accent);
  background: var(--accent-tint);
}

.compare li.broken .cm-cell.old b {
  background: #fff;
}

.cm-why {
  grid-column: 1 / -1;
  color: var(--faint);
  font-size: 12px;
  line-height: 1.6;
}

.compare li.broken .cm-why {
  color: var(--signal);
}

/* 결과창 */
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

@media (max-width: 700px) {
  .carts {
    grid-template-columns: 1fr;
  }

  .arrow {
    justify-self: center;
    transform: rotate(90deg);
  }

  .given-item,
  .compare li {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
</style>
