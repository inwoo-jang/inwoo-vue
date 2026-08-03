<script setup>
/**
 * 모달 껍데기.
 * 어둡게 덮기 · 가운데 띄우기 · 닫기 버튼만 책임진다.
 * 제목 · 내용 · 버튼은 세 개의 구멍으로 열어 두고 부모에게 맡긴다.
 */
defineProps({
  open: { type: Boolean, default: false },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="open" class="backdrop" @click.self="emit('close')">
    <div class="modal" role="dialog" aria-modal="true">
      <header class="modal-head">
        <slot name="title"><b>제목 없음</b></slot>
        <button type="button" class="close" aria-label="닫기" @click="emit('close')">✕</button>
      </header>

      <div class="modal-body">
        <slot>
          <p class="fallback">본문 구멍 (비어 있음)</p>
        </slot>
      </div>

      <footer class="modal-foot">
        <slot name="actions">
          <button type="button" @click="emit('close')">닫기</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* 실습 카드 안에서만 덮이도록 부모(.stage)를 기준으로 한다 */
.backdrop {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: grid;
  padding: 16px;
  border-radius: inherit;
  background: rgb(15 23 42 / 45%);
  place-items: center;
}

.modal {
  width: min(100%, 380px);
  overflow: hidden;
  border-radius: 12px;
  background: var(--surface);
  box-shadow: 0 18px 40px rgb(15 23 42 / 25%);
}

.modal-head {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px 15px;
  border-bottom: 1px solid var(--line);
  font-size: 14px;
}

.close {
  margin-left: auto;
  padding: 2px 7px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--faint);
  cursor: pointer;
  font-size: 13px;
}

.close:hover {
  background: var(--paper);
}

.modal-body {
  padding: 15px;
  font-size: 13.5px;
  line-height: 1.7;
}

.modal-foot {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
  padding: 12px 15px;
  border-top: 1px solid var(--line);
  background: var(--paper);
}

.fallback {
  margin: 0;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}
</style>
