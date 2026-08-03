<script setup>
import { computed } from 'vue'
import { highlightVue } from '../../utils/highlight'

const props = defineProps({
  code: { type: String, required: true },
  desc: { type: String, default: '' },
  /** 코드 속 각 조각이 무슨 역할인지: [{ token, role }] */
  parts: { type: Array, default: () => [] },
  /** 이 문법이 돌려주는 값 */
  returns: { type: String, default: '' },
})

/** 명령어·변수·문자열을 색으로 구분해 준다 */
const highlighted = computed(() => highlightVue(props.code))
</script>

<template>
  <figure class="snippet">
    <pre><code v-html="highlighted"></code></pre>

    <!-- 식별자 · 조각별 역할 -->
    <dl v-if="parts.length" class="parts">
      <template v-for="part in parts" :key="part.token">
        <dt>{{ part.token }}</dt>
        <dd>{{ part.role }}</dd>
      </template>
    </dl>

    <p v-if="returns" class="returns">
      <span class="returns-label">돌려주는 값</span>{{ returns }}
    </p>

    <figcaption v-if="desc">{{ desc }}</figcaption>
  </figure>
</template>

<style scoped>
.snippet {
  margin: 0;
}

pre {
  margin: 0;
  overflow-x: auto;
  padding: 14px 16px;
  border: 1px solid var(--accent-line);
  border-radius: 10px;
  background: var(--surface);
}

code {
  color: var(--ink);
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre;
}

/* 조각별 역할 */
.parts {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6px 12px;
  margin: 10px 0 0;
  padding: 12px 14px;
  border-left: 3px solid var(--line-strong);
  border-radius: 0 8px 8px 0;
  background: var(--surface);
}

dt {
  color: var(--accent);
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;
}

dd {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.65;
}

.returns {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  margin: 8px 0 0;
  padding: 9px 13px;
  border-radius: 8px;
  background: var(--slate-tint);
  color: var(--slate);
  font-size: 12.5px;
  line-height: 1.65;
}

.returns-label {
  padding: 2px 7px;
  border-radius: 20px;
  color: var(--on-accent);
  background: var(--slate);
  font-size: 10.5px;
  font-weight: 800;
  white-space: nowrap;
}

figcaption {
  margin-top: 8px;
  padding-left: 2px;
  color: var(--faint);
  font-size: 12.5px;
}

@media (max-width: 560px) {
  .parts {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  dd {
    margin-bottom: 8px;
  }
}
</style>

<!-- 토큰 색상은 v-html로 주입되므로 scoped 밖에 둔다 -->
<style>
.snippet .tok-comment {
  color: #6f8a72;
  font-style: italic;
}
.snippet .tok-string {
  color: #a8562b;
}
.snippet .tok-keyword {
  color: #1f5b9e;
  font-weight: 600;
}
.snippet .tok-api {
  color: #0b6f57;
  font-weight: 700;
}
.snippet .tok-tag {
  color: #a33a63;
}
.snippet .tok-attr {
  color: #7a3fa8;
}
.snippet .tok-number {
  color: #38702a;
}

/* 다크 테마에서는 밝은 계열로 */
:root[data-theme='terminal'] .snippet .tok-comment { color: #6b8a6b; }
:root[data-theme='terminal'] .snippet .tok-string { color: #ecc48d; }
:root[data-theme='terminal'] .snippet .tok-keyword { color: #7fb3ff; }
:root[data-theme='terminal'] .snippet .tok-api { color: #55d6b8; }
:root[data-theme='terminal'] .snippet .tok-tag { color: #ff8fa3; }
:root[data-theme='terminal'] .snippet .tok-attr { color: #d6a2f0; }
:root[data-theme='terminal'] .snippet .tok-number { color: #b7e08a; }
</style>
