<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const dynamicUrl = 'https://vuejs.org'
const logoImgSrc = 'https://vuejs.org/images/logo.png'
const isButtonDisabled = ref(true)

const isWarning = ref(false)
const themeClass = ref('dark-box')

const textColor = ref('purple')
const boxWidth = ref(200)
const baseBoxStyle = {
  height: '80px',
  color: 'white',
  backgroundColor: '#42b883',
  transition: 'all 0.3s ease',
}

// HTML 속성명과 변수명이 같을 때 사용하는 축약형
const id = 'user-profile-card'
const src = 'https://vuejs.org/images/logo.png'
</script>

<template>
  <section class="practice-card">
    <div class="practice-area">
      <h2>
        v-bind 디렉티브 기본 (축약형: 콜론)
        <ConceptHelp
          text="v-bind는 href, src, disabled 같은 HTML 속성에 JavaScript 데이터를 연결합니다. 축약형은 : 입니다."
        />
      </h2>
      <a :href="dynamicUrl" target="_blank">Vue 공식 사이트</a>
      <img :src="logoImgSrc" alt="Vue 로고" width="80" />

      <button :disabled="isButtonDisabled">잠기는 버튼</button>
      <button @click="isButtonDisabled = !isButtonDisabled">
        잠금 상태 변경
      </button>
    </div>

    <div class="practice-area">
      <h2>
        v-bind 디렉티브 고급 (클래스 바인딩)
        <ConceptHelp
          text=":class는 조건에 따라 CSS 클래스를 추가하거나 제거합니다. 객체와 배열 형식을 사용할 수 있습니다."
        />
      </h2>
      <p :class="{ danger: isWarning }">
        현재 경고 상태: {{ isWarning }}
      </p>
      <button @click="isWarning = !isWarning">경고 상태 변경</button>

      <div
        :class="[
          themeClass,
          isWarning ? 'red-border' : 'gray-border',
        ]"
      >
        배열로 클래스를 조합한 상자
      </div>
    </div>

    <div class="practice-area">
      <h2>
        v-bind 디렉티브 고급 (스타일 바인딩)
        <ConceptHelp
          text=":style은 색상이나 크기 같은 인라인 CSS 값을 데이터와 직접 연결합니다. 객체와 배열 형식을 지원합니다."
        />
      </h2>
      <p :style="{ color: textColor, fontWeight: 'bold' }">
        동적 스타일이 적용된 글자
      </p>
      <button
        @click="
          textColor = textColor === 'purple' ? 'blue' : 'purple'
        "
      >
        글자색 변경
      </button>

      <div class="input-group">
        <label for="box-width">박스 너비: </label>
        <input
          id="box-width"
          v-model.number="boxWidth"
          type="number"
          step="50"
        />
      </div>

      <div
        class="size-box"
        :style="[baseBoxStyle, { width: boxWidth + 'px' }]"
      >
        {{ boxWidth }}px
      </div>
    </div>

    <div class="practice-area">
      <h2>
        Class Binding vs. Style Binding
        <ConceptHelp
          text="미리 만든 디자인을 바꿀 때는 :class, 너비처럼 값 자체를 실시간으로 바꿀 때는 :style이 적합합니다."
        />
      </h2>
      <p>
        미리 만든 디자인을 상태에 따라 바꿀 때는
        <strong>:class</strong>를 사용합니다.
      </p>
      <p>
        너비나 색상 값을 실시간으로 직접 바꿀 때는
        <strong>:style</strong>을 사용합니다.
      </p>
    </div>

    <div class="practice-area">
      <h2>
        v-bind 디렉티브 고급 (단축 문법)
        <ConceptHelp
          text="HTML 속성명과 JavaScript 변수명이 같으면 :src='src'를 :src처럼 줄일 수 있는 Vue 3.4 이상의 문법입니다."
        />
      </h2>
      <div :id>
        <img :src alt="Vue 로고" width="50" />
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  display: block;
  margin: 12px 0;
}

.input-group {
  margin-top: 22px;
}

.danger {
  color: red;
  font-weight: bold;
}

.dark-box {
  margin-top: 10px;
  padding: 15px;
  color: white;
  background-color: #333;
}

.red-border {
  border: 3px solid red;
}

.gray-border {
  border: 3px solid #ccc;
}

.size-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
</style>
