<script setup>
import { ref, computed } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const count = ref(0)
const dummy = ref(0) // computed와 무관한 변수

// 1. 일반 함수: 화면이 조금이라도 리렌더링되면 무조건 재실행
const getMethodResult = () => {
  console.log('❌ 일반 함수 실행됨!')
  return count.value * 2
}

// 2. Computed: count가 바뀔 때만 재연산 (dummy가 바뀔 땐 이전 값 재사용)
const doubleCount = computed(() => {
  console.log('✅ Computed 연산 실행됨!')
  return count.value * 2
})
</script>

<template>
  <section class="practice-card">
    <h2>
      computed() 캐싱 동작 비교
      <ConceptHelp
        text="computed는 의존하는 값이 바뀔 때만 다시 계산하고 결과를 캐싱합니다. 일반 함수는 화면이 다시 그려질 때마다 무조건 재실행됩니다. dummy 버튼을 눌러 콘솔 출력 차이를 확인해 보세요."
      />
    </h2>

    <p>count: {{ count }} | dummy: {{ dummy }}</p>
    <button @click="count++">count 증가 (의존성 변경)</button>
    <button @click="dummy++">dummy 증가 (무관한 변경)</button>

    <!-- dummy 버튼을 누를 때 콘솔 출력 차이를 확인 -->
    <p>일반 함수 결과: {{ getMethodResult() }}</p>
    <p>Computed 결과: {{ doubleCount }}</p>

    <p class="console-hint">
      브라우저 콘솔(F12)을 열고 <b>dummy 증가</b>를 눌러보세요. 일반 함수만 계속 실행되고 computed는
      조용합니다.
    </p>
  </section>
</template>

<style scoped>
.console-hint {
  margin-top: 14px;
  padding: 11px 13px;
  border-left: 3px solid #4d8fbe;
  border-radius: 4px;
  background: #eef5fa;
  font-size: 13px;
}
</style>
