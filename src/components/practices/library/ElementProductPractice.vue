<script setup>
import { computed, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 226쪽 Code Challenge — 상품 수량과 별점.
 *
 * el-input-number 와 el-rate 는 둘 다 v-model 로 숫자를 주고받는다.
 * 직접 만들면 "1 미만으로 못 내려가게" "소수점 못 넣게" 같은 것을
 * 전부 손으로 막아야 하는데, min·max·step 속성 한 줄로 끝난다는 것이 요점이다.
 */

const productQuantity = ref(1)
const productRate = ref(4)

const UNIT_PRICE = 12500

const total = computed(() => (productQuantity.value * UNIT_PRICE).toLocaleString())

/** 별점을 말로 바꿔 보여 준다 — el-rate 의 texts 와 같은 값 */
const RATE_TEXTS = ['별로예요', '그저 그래요', '괜찮아요', '좋아요', '최고예요']
</script>

<template>
  <section class="practice-card">
    <h2>
      Element Plus — 상품 수량과 별점
      <ConceptHelp
        text="el-input-number는 숫자 전용 입력창으로 min·max·step으로 범위를 제한합니다. el-rate는 별점 컴포넌트로 show-text를 켜면 점수에 맞는 설명이 함께 나옵니다. 둘 다 v-model로 숫자를 주고받습니다."
      />
    </h2>

    <div class="area">
      <el-card shadow="never" class="product-card">
        <template #header>
          <span class="card-title">SKALA 텀블러</span>
        </template>

        <p class="price">{{ UNIT_PRICE.toLocaleString() }}원</p>

        <div class="field">
          <label>수량</label>
          <el-input-number v-model="productQuantity" :min="1" :max="10" :step="1" />
          <span class="limit">1 ~ 10개</span>
        </div>

        <div class="field">
          <label>별점</label>
          <el-rate v-model="productRate" show-text :texts="RATE_TEXTS" />
        </div>

        <div class="total">
          <span>합계</span>
          <b>{{ total }}원</b>
        </div>
      </el-card>
    </div>

    <div class="area">
      <h3>지금 값 <small>v-model 이 묶어 둔 반응형 상태</small></h3>
      <ul class="values">
        <li>
          <code>productQuantity</code>
          <b>{{ productQuantity }}</b>
        </li>
        <li>
          <code>productRate</code>
          <b>{{ productRate }}</b>
        </li>
      </ul>
    </div>

    <p class="note">
      수량에서 <b>−</b> 를 계속 눌러 보세요. 1 에서 멈추고 버튼이 비활성화됩니다.
      <code>:min="1"</code> 한 줄이 하는 일입니다. 직접 만들었다면 입력값 검사·버튼 잠금·음수
      방어를 전부 손으로 짜야 합니다.
    </p>
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

.product-card {
  max-width: 460px;
}

.card-title {
  font-size: 14.5px;
  font-weight: 700;
}

.price {
  margin: 0 0 18px;
  color: var(--ink);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.field {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
}

.field label {
  width: 44px;
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 600;
}

.limit {
  color: var(--faint);
  font-size: 11.5px;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
}

.total b {
  color: var(--accent);
  font-size: 20px;
  font-weight: 800;
}

.values {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.values li {
  display: grid;
  grid-template-columns: 160px auto;
  gap: 12px;
  align-items: center;
  padding: 10px 14px;
  border-radius: 9px;
  background: var(--paper);
}

.values code {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 12px;
}

.values b {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 14px;
}

.note {
  margin: 20px 0 0;
  padding: 13px 16px;
  border: 1px dashed var(--accent);
  border-radius: 10px;
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.8;
}

.note code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

:deep(.el-card) {
  border-color: var(--line);
  border-radius: 12px;
  background: var(--surface);
}
</style>
