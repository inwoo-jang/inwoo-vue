<script setup>
import { ref } from 'vue'
import CodeSnippet from './CodeSnippet.vue'
import { renderEmphasis } from '../../utils/highlight'

const props = defineProps({
  lecture: { type: Object, required: true },
  studyRange: { type: String, default: '' },
  /** 처음부터 펼쳐서 보여줄지. 기본은 접힌 상태로 통일한다. */
  open: { type: Boolean, default: false },
})

const isOpen = ref(props.open)
</script>

<template>
  <section class="lecture" :class="{ closed: !isOpen }">
    <button class="lecture-toggle" type="button" :aria-expanded="isOpen" @click="isOpen = !isOpen">
      <span class="marker">📖</span>
      <span class="toggle-title">관련 강의 내용</span>
      <span v-if="studyRange" class="range">교안 {{ studyRange }}</span>
      <span class="chevron">{{ isOpen ? '−' : '+' }}</span>
    </button>

    <div v-show="isOpen" class="lecture-body">
      <!-- 완전 처음 배우는 사람을 위한 눈높이 설명 -->
      <p v-if="lecture.intro" class="intro">
        <span class="intro-label">쉽게 말하면</span>
        <span v-html="renderEmphasis(lecture.intro)"></span>
      </p>

      <p class="lead" v-html="renderEmphasis(lecture.summary)"></p>

      <ul v-if="lecture.points?.length" class="points">
        <li v-for="point in lecture.points" :key="point" v-html="renderEmphasis(point)"></li>
      </ul>

      <div v-if="lecture.syntax?.length" class="syntax">
        <p class="syntax-label">문법 정리</p>
        <CodeSnippet
          v-for="item in lecture.syntax"
          :key="item.code"
          :code="item.code"
          :desc="item.desc"
          :parts="item.parts ?? []"
          :returns="item.returns ?? ''"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.lecture {
  border: 1px solid var(--accent-line);
  border-radius: 12px;
  background: var(--surface);
}

.lecture-toggle {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  border: 0;
  border-radius: inherit;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.lecture-toggle:hover {
  background: var(--accent-tint);
}

.marker {
  font-size: 15px;
}

.toggle-title {
  color: var(--accent);
  font-size: 14px;
  font-weight: 800;
}

.range {
  padding: 3px 8px;
  border-radius: 20px;
  color: var(--ink-soft);
  background: var(--accent-tint);
  font-size: 11.5px;
  font-weight: 700;
}

.chevron {
  margin-left: auto;
  color: var(--muted);
  font-size: 18px;
  line-height: 1;
}

.lecture-body {
  padding: 0 16px 18px;
}

.intro {
  margin: 0 0 14px;
  padding: 13px 15px;
  border-radius: 10px;
  background: var(--accent-tint);
  color: var(--accent);
  font-size: 14.5px;
  line-height: 1.8;
}

.intro-label {
  display: inline-block;
  margin-right: 7px;
  padding: 2px 8px;
  border-radius: 20px;
  color: var(--on-accent);
  background: var(--accent);
  font-size: 11px;
  font-weight: 800;
  vertical-align: 1px;
}

.lead {
  margin: 0 0 14px;
  color: var(--ink-soft);
  font-size: 14.5px;
  line-height: 1.75;
}

.points {
  margin: 0 0 16px;
  padding-left: 18px;
  color: var(--ink-soft);
}

.points li {
  margin-bottom: 7px;
  font-size: 13.5px;
  line-height: 1.7;
}

.points li::marker {
  color: var(--accent);
}

.syntax-label {
  margin: 0 0 8px;
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.syntax {
  display: grid;
  gap: 12px;
}
</style>

<!-- v-html로 주입되는 마크업이라 scoped 밖에 둔다 -->
<style>
.lecture mark {
  padding: 1px 2px;
  border-radius: 3px;
  color: inherit;
  background: linear-gradient(transparent 58%, var(--accent-tint) 58%);
  box-shadow: inset 0 -1px 0 var(--accent-line);
  font-weight: 700;
}

.lecture code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--accent);
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 0.9em;
}
</style>
