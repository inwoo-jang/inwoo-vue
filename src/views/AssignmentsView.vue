<script setup>
import { computed } from 'vue'
import { assignments, chapters } from '../data/curriculum'
import { findAssignmentResult } from '../components/assignments'

const chapterTitle = (chapterId) => chapters.find((c) => c.id === chapterId)?.title ?? ''

const statusLabel = {
  done: '완료',
  todo: '진행 예정',
  final: '최종',
}

const doneCount = computed(() => assignments.filter((a) => a.status === 'done').length)
</script>

<template>
  <section class="page-intro">
    <p class="eyebrow">SUBMISSION ASSIGNMENTS</p>
    <h1>제출 과제</h1>
    <p>
      각 과제는 이전 결과물에서 <strong>이어집니다</strong>. 여기서 완성한 결과가 최종 날씨 서비스의
      기반이 됩니다.
    </p>
  </section>

  <section class="progress-bar">
    <div>
      <p class="label">전체 진행률</p>
      <strong>{{ doneCount }} / {{ assignments.length }}</strong>
    </div>
    <div class="track">
      <i :style="{ width: `${(doneCount / assignments.length) * 100}%` }"></i>
    </div>
  </section>

  <section class="assignment-timeline">
    <article
      v-for="assignment in assignments"
      :key="assignment.id"
      class="assignment-card"
      :class="assignment.status"
    >
      <div class="step">{{ String(assignment.id).padStart(2, '0') }}</div>

      <div class="assignment-body">
        <div class="topline">
          <p class="eyebrow">
            ASSIGNMENT {{ String(assignment.id).padStart(2, '0') }}
            <span class="slide">교안 {{ assignment.slidePage }}</span>
          </p>
          <span class="status" :class="assignment.status">
            {{ statusLabel[assignment.status] }}
          </span>
        </div>

        <h2>{{ assignment.title }}</h2>
        <p class="goal">{{ assignment.goal }}</p>

        <div class="scope">
          <span class="chapter-tag">{{ chapterTitle(assignment.chapterId) }}</span>
          <span class="range">{{ assignment.scope }}</span>
        </div>

        <details class="requirements" :open="assignment.status !== 'todo'">
          <summary>요구사항 {{ assignment.requirements.length }}개</summary>
          <ul>
            <li v-for="item in assignment.requirements" :key="item">{{ item }}</li>
          </ul>
        </details>

        <p v-if="assignment.note" class="note">⚠ {{ assignment.note }}</p>

        <!-- 완성한 결과물을 이 자리에서 바로 실행해 볼 수 있다 -->
        <details v-if="findAssignmentResult(assignment.result)" class="result">
          <summary>
            <span aria-hidden="true">▶</span> 결과물 보기
            <small v-if="assignment.resultNote">{{ assignment.resultNote }}</small>
          </summary>
          <div class="result-stage">
            <component :is="findAssignmentResult(assignment.result)" />
          </div>
        </details>
      </div>
    </article>
  </section>
</template>

<style scoped>
/* 진행률 */
.progress-bar {
  display: grid;
  gap: 14px;
  margin-bottom: 26px;
  padding: 20px 24px;
  border: 1px solid var(--accent-line);
  border-radius: 14px;
  background: var(--surface);
}

.progress-bar > div:first-child {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.label {
  margin: 0;
  color: var(--faint);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.progress-bar strong {
  color: var(--ink);
  font-size: 22px;
}

.track {
  height: 8px;
  overflow: hidden;
  border-radius: 10px;
  background: var(--accent-tint);
}

.track i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--accent);
  transition: width 0.3s;
}

/* 타임라인 */
.assignment-timeline {
  position: relative;
  display: grid;
  gap: 14px;
}

.assignment-timeline::before {
  position: absolute;
  top: 40px;
  bottom: 40px;
  left: 28px;
  width: 2px;
  background: var(--accent-line);
  content: '';
}

.assignment-card {
  position: relative;
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 18px;
  padding: 22px;
  border: 1px solid var(--accent-line);
  border-radius: 14px;
  background: var(--surface);
}

.assignment-card.final {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.step {
  z-index: 1;
  display: grid;
  width: 56px;
  height: 56px;
  place-items: center;
  border: 5px solid var(--accent-tint);
  border-radius: 50%;
  color: var(--on-accent);
  background: var(--accent);
  font-weight: 900;
  line-height: 1;
}

.assignment-card.todo .step {
  background: var(--line-strong);
}

.topline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.topline .eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}

.slide {
  padding: 2px 7px;
  border-radius: 4px;
  color: var(--muted);
  background: var(--accent-tint);
  font-weight: 700;
  letter-spacing: 0;
}

.status {
  padding: 4px 9px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 800;
}

.status.done {
  color: var(--accent);
  background: var(--accent-tint);
}

.status.todo {
  color: var(--faint);
  background: var(--accent-tint);
}

.status.final {
  color: var(--signal);
  background: var(--signal-tint);
}

h2 {
  margin: 10px 0 5px;
  color: var(--ink);
  font-size: 22px;
  letter-spacing: -0.02em;
}

.goal {
  margin: 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.7;
}

.scope {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 13px;
}

.chapter-tag {
  padding: 4px 9px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-tint);
  font-size: 11.5px;
  font-weight: 800;
}

.range {
  color: var(--faint);
  font-size: 12px;
}

/* 요구사항 */
.requirements {
  margin-top: 16px;
  padding: 14px 16px;
  border: 1px solid var(--accent-tint);
  border-radius: 10px;
  background: var(--surface);
}

summary {
  color: var(--ink-soft);
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
}

.requirements ul {
  display: grid;
  gap: 7px;
  margin: 13px 0 0;
  padding: 0;
  list-style: none;
}

.requirements li {
  position: relative;
  padding-left: 21px;
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.65;
}

/* 클릭되는 체크박스가 아니라 체크 모양의 불릿이다 (연습 항목과 동일한 규칙) */
.requirements li::before {
  position: absolute;
  top: 0;
  left: 1px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 900;
  line-height: 1.85;
  content: '✓';
}

/* 결과물 보기 */
.result {
  margin-top: 14px;
  border: 1px solid var(--accent-line);
  border-radius: 11px;
  background: var(--surface);
}

.result summary {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 9px;
  padding: 13px 16px;
  color: var(--accent);
  font-size: 13.5px;
  font-weight: 800;
  cursor: pointer;
}

.result summary:hover {
  background: var(--accent-tint);
  border-radius: inherit;
}

.result summary small {
  color: var(--muted);
  font-size: 11.5px;
  font-weight: 500;
}

.result-stage {
  margin: 0 12px 12px;
  padding: 18px;
  border: 1px solid var(--accent-line);
  border-radius: 9px;
  background: var(--accent-tint);
}

.note {
  margin: 13px 0 0;
  padding: 12px 14px;
  border-radius: 9px;
  color: var(--signal);
  background: var(--signal-tint);
  font-size: 12.5px;
  line-height: 1.7;
}

@media (max-width: 650px) {
  .assignment-card {
    grid-template-columns: 46px 1fr;
    gap: 14px;
  }

  .step {
    width: 46px;
    height: 46px;
    font-size: 14px;
  }

  .assignment-timeline::before {
    left: 23px;
  }
}
</style>
