<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { highlightVue } from '../../utils/highlight'

const props = defineProps({
  /** 파일 경로 (창 제목) */
  path: { type: String, required: true },
  /** 원본 코드 */
  code: { type: String, required: true },
})

const emit = defineEmits(['close'])

const highlighted = computed(() => highlightVue(props.code))
const lineCount = computed(() => props.code.split('\n').length)

const copied = ref(false)

const copy = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  } catch {
    copied.value = false
  }
}

const onKeydown = (e) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  // 뒤쪽 페이지가 같이 스크롤되지 않도록 잠근다
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div class="code-backdrop" role="dialog" aria-modal="true" @click.self="emit('close')">
      <div class="code-window">
        <header class="window-bar">
          <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <code class="path">{{ path }}</code>
          <span class="meta">{{ lineCount }}줄</span>

          <button type="button" class="bar-button" @click="copy">
            {{ copied ? '복사됨' : '복사' }}
          </button>
          <button type="button" class="bar-button close" aria-label="닫기" @click="emit('close')">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div class="code-scroll">
          <pre><code v-html="highlighted"></code></pre>
        </div>

        <footer class="window-foot">
          <span><kbd>Esc</kbd> 또는 바깥을 클릭하면 닫힙니다</span>
          <span class="legend">
            <i class="tok-keyword">키워드</i>
            <i class="tok-api">Vue 함수</i>
            <i class="tok-tag">태그</i>
            <i class="tok-attr">디렉티브</i>
            <i class="tok-string">문자열</i>
            <i class="tok-comment">주석</i>
          </span>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.code-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 28px;
  background: rgba(12, 22, 30, 0.6);
  backdrop-filter: blur(3px);
}

.code-window {
  display: flex;
  width: min(980px, 100%);
  max-height: 100%;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #2b3648;
  border-radius: 14px;
  background: #1b2130;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
}

/* 상단 바 */
.window-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border-bottom: 1px solid #2b3648;
  background: #232b3c;
}

.dots {
  display: flex;
  gap: 6px;
}

.dots i {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #3c4760;
}

.path {
  margin-right: auto;
  color: #93a4bd;
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 12.5px;
}

.meta {
  color: #63728c;
  font-size: 11.5px;
}

.bar-button {
  display: grid;
  height: 26px;
  place-items: center;
  padding: 0 11px;
  border: 1px solid #3a465e;
  border-radius: 7px;
  color: #b6c4d8;
  background: #2b3448;
  font-size: 11.5px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}

.bar-button:hover {
  border-color: #4d5d7c;
  color: white;
  background: #354160;
}

.bar-button.close {
  width: 26px;
  padding: 0;
}

.bar-button.close svg {
  display: block;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
}

/* 코드 영역 */
.code-scroll {
  overflow: auto;
  flex: 1;
  padding: 18px 20px;
}

pre {
  margin: 0;
}

code {
  color: #d6deeb;
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.75;
  white-space: pre;
}

/* 하단 범례 */
.window-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 14px;
  border-top: 1px solid #2b3648;
  background: #232b3c;
  color: #63728c;
  font-size: 11.5px;
}

kbd {
  padding: 1px 6px;
  border: 1px solid #3a465e;
  border-radius: 4px;
  background: #2b3448;
  font-family: inherit;
  font-size: 10.5px;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.legend i {
  font-style: normal;
  font-size: 11px;
}

@media (max-width: 640px) {
  .code-backdrop {
    padding: 12px;
  }

  .meta,
  .window-foot > span:first-child {
    display: none;
  }
}
</style>

<!-- 토큰 색상은 v-html로 주입되므로 scoped 밖에 둔다 -->
<style>
.code-window .tok-comment {
  color: #6b8a6b;
  font-style: italic;
}
.code-window .tok-string {
  color: #ecc48d;
}
.code-window .tok-keyword {
  color: #7fb3ff;
}
.code-window .tok-api {
  color: #55d6b8;
  font-weight: 600;
}
.code-window .tok-tag {
  color: #ff8fa3;
}
.code-window .tok-attr {
  color: #d6a2f0;
}
.code-window .tok-number {
  color: #b7e08a;
}
</style>
