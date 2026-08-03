<script setup>
// 1. 상위 컴포넌트로부터 주입받을 데이터의 자료형 및 필수 여부 정의
defineProps({
  parentData: {
    type: String,
    required: true,
  },
})

// 2. 상위 컴포넌트로 송신할 커스텀 이벤트 식별자 등록
const emit = defineEmits(['update-request'])

// 3. 내부 이벤트 발생 시 페이로드를 실어 상위로 이벤트를 디스패치하는 함수
const sendNotification = () => {
  const payload = 'Child에서 가공한 새로운 데이터'
  emit('update-request', payload)
}
</script>

<template>
  <div class="child-container">
    <p class="role">하위 컴포넌트 (Child)</p>
    <p>
      수신된 Props 데이터: <strong>{{ parentData }}</strong>
    </p>
    <button @click="sendNotification">상위 컴포넌트로 갱신 요청 (Emit)</button>
  </div>
</template>

<style scoped>
.child-container {
  padding: 18px 20px;
  border: 1px dashed var(--slate-line);
  border-radius: 12px;
  background: var(--surface);
}

.role {
  margin: 0 0 10px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.child-container p + p {
  margin: 0 0 12px;
}

strong {
  color: var(--slate);
}
</style>
