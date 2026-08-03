<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'
import PropsEmitsChild from './PropsEmitsChild.vue'

// 1. 상위 컴포넌트의 로컬 반응형 상태 정의
const message = ref('Parent 초기 메시지')

// 2. 하위 컴포넌트의 커스텀 이벤트를 수신했을 때 실행될 핸들러 함수
// 인자(newValue)로 하위 컴포넌트가 보낸 페이로드가 자동 주입됩니다.
const handleUpdateRequest = (newValue) => {
  message.value = newValue
}
</script>

<template>
  <section class="practice-card">
    <h2>
      Props & Emits — 부모와 자식의 대화
      <ConceptHelp
        text="데이터는 부모 → 자식 한 방향으로만 흐릅니다(Props). 자식이 값을 바꾸고 싶으면 직접 고치지 않고 부모에게 '바꿔 달라'고 신호를 보냅니다(Emits). 실제로 값을 바꾸는 주체는 언제나 데이터를 가진 부모입니다."
      />
    </h2>

    <div class="parent-container">
      <p class="role">상위 컴포넌트 (Parent)</p>
      <p class="state">
        현재 로컬 데이터(State): <strong>{{ message }}</strong>
      </p>

      <PropsEmitsChild :parent-data="message" @update-request="handleUpdateRequest" />
    </div>
  </section>
</template>

<style scoped>
.parent-container {
  padding: 20px;
  border: 2px solid var(--accent-line);
  border-radius: 14px;
  background: var(--paper);
}

.role {
  margin: 0 0 10px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.state {
  margin: 0 0 16px;
}

.state strong {
  color: var(--accent);
}
</style>
