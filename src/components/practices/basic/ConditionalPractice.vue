<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// 1. 조건부 온/오프 스위치 변수
const isLogged = ref(false)

// 2. 다중 조건 분기용 숫자 변수
const score = ref(85)

// v-show 화면 표시 여부
const isVisible = ref(true)
</script>

<template>
  <section class="practice-card">
    <h2>
      v-if, v-else-if, v-else 디렉티브 학습
      <ConceptHelp
        text="조건에 따라 DOM 요소를 생성하거나 제거합니다. 여러 조건은 v-else-if와 v-else로 이어서 표현합니다."
      />
    </h2>

    <h3>1) 기본 로그인 상태 스위치</h3>
    <p v-if="isLogged">환영합니다! 회원 전용 화면입니다.</p>
    <p v-else>로그인이 필요합니다. 먼저 로그인해 주세요.</p>
    <button @click="isLogged = !isLogged">
      {{ isLogged ? '로그아웃 하기' : '로그인 하기' }}
    </button>

    <br />

    <h3>2) 성적별 학점 등급 측정 (다중 조건문)</h3>
    <label>현재 점수 입력: </label>
    <input
      v-model="score"
      type="number"
      min="0"
      max="100"
      step="5"
    />
    <br />

    <div
      v-if="score >= 90"
      style="color: green; font-weight: bold"
    >
      합격 등급: A 학점 (훌륭합니다!)
    </div>
    <div v-else-if="score >= 80" style="color: blue">
      합격 등급: B 학점 (양호합니다.)
    </div>
    <div v-else-if="score >= 70" style="color: orange">
      합격 등급: C 학점 (조금 더 분발하세요.)
    </div>
    <div v-else style="color: red; font-weight: bold">
      합격 등급: F 학점 (재시험 대상입니다.)
    </div>

    <h2>
      v-show 디렉티브 학습
      <ConceptHelp
        text="v-show는 요소를 DOM에 유지하면서 CSS display 속성으로 보이거나 숨깁니다."
      />
    </h2>
    <button @click="isVisible = !isVisible">
      화면 토글하기
    </button>
    <br />

    <div v-show="isVisible" class="box">
      <p>v-show 상자</p>
      <p>
        조건이 false가 되면 CSS display: none이 붙습니다.
      </p>
    </div>

    <div class="practice-area comparison-area">
      <h2>
        v-if vs. v-show
        <ConceptHelp
          text="전환이 드물면 DOM을 생성·제거하는 v-if, 자주 열고 닫으면 display만 바꾸는 v-show가 적합합니다."
        />
      </h2>
      <p>
        v-if는 DOM을 생성·제거하고, v-show는 DOM을 유지한 채
        CSS display 속성으로 표시 여부를 바꿉니다.
      </p>
    </div>
  </section>
</template>

<style scoped>
.box {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: #3498db;
}

.comparison-area {
  margin-top: 36px;
}
</style>
