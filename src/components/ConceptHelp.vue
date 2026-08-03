<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
  text: {
    type: String,
    required: true,
  },
})

const isVisible = ref(false)
const root = ref(null)

/**
 * 바깥을 클릭하면 닫는다.
 * click이 아니라 mousedown을 쓰는 이유:
 * click은 버블링 도중 Vue가 아이콘(SVG)을 교체해 버려서, document까지 올라올 때는
 * event.target이 이미 DOM에서 제거된 상태다. 그러면 contains() 검사가 실패해
 * 방금 연 팝오버가 곧바로 닫힌다. mousedown은 재렌더링 전에 발생한다.
 */
const onDocumentPointerDown = (event) => {
  if (isVisible.value && root.value && !root.value.contains(event.target)) {
    isVisible.value = false
  }
}

/** Esc로 닫는다. */
const onKeydown = (event) => {
  if (event.key === 'Escape') isVisible.value = false
}

onMounted(() => {
  document.addEventListener('mousedown', onDocumentPointerDown)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocumentPointerDown)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <span ref="root" class="concept-help">
    <button
      class="help-button"
      type="button"
      :class="{ open: isVisible }"
      :aria-expanded="isVisible"
      :aria-label="isVisible ? '개념 설명 닫기' : '개념 설명 보기'"
      :title="isVisible ? '닫기' : '개념 설명 보기'"
      @click="isVisible = !isVisible"
    >
      <!-- 닫기(X) 아이콘 -->
      <svg
        v-if="isVisible"
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>

      <!-- 정보(i) 아이콘 -->
      <svg
        v-else
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9.5" />
        <path d="M12 16.5v-5" />
        <circle cx="12" cy="8" r="1.15" fill="currentColor" stroke="none" />
      </svg>
    </button>

    <span v-show="isVisible" class="help-popover" role="note">
      <span class="help-arrow" aria-hidden="true"></span>
      <span class="help-label">개념 설명</span>
      <span class="help-text">{{ text }}</span>
    </span>
  </span>
</template>

<style scoped>
.concept-help {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  margin-left: 7px;
}

/* ── 아이콘 버튼 ── */
.help-button {
  display: inline-grid;
  width: 22px;
  height: 22px;
  padding: 0;
  place-items: center;
  border: 0;
  border-radius: 50%;
  color: var(--muted);
  background: transparent;
  cursor: pointer;
  transition:
    color 0.15s,
    background-color 0.15s;
}

.help-button:hover {
  color: var(--accent);
  background: var(--accent-tint);
}

.help-button.open {
  color: var(--surface);
  background: var(--accent);
}

.help-button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.icon {
  width: 17px;
  height: 17px;
}

/* ── 설명 팝오버 ── */
/* 부모가 <h2>라서 굵기·크기·색이 상속된다. 여기서 전부 초기화한다. */
.help-popover {
  position: absolute;
  top: calc(100% + 9px);
  left: -8px;
  z-index: 30;
  display: block;
  width: max-content;
  max-width: min(420px, calc(100vw - 80px));
  padding: 12px 14px;
  border: 1px solid var(--accent-line);
  border-radius: 10px;
  background: var(--surface);
  box-shadow: 0 10px 26px rgba(31, 92, 68, 0.13);
  color: var(--ink-soft);
  font-size: 13.5px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.7;
  text-align: left;
  white-space: normal;
}

.help-arrow {
  position: absolute;
  top: -5px;
  left: 14px;
  width: 9px;
  height: 9px;
  border-top: 1px solid var(--accent-line);
  border-left: 1px solid var(--accent-line);
  border-radius: 2px 0 0 0;
  background: var(--surface);
  transform: rotate(45deg);
}

.help-label {
  display: block;
  margin-bottom: 5px;
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.help-text {
  display: block;
}

@media (max-width: 620px) {
  .help-popover {
    max-width: calc(100vw - 64px);
  }
}
</style>
