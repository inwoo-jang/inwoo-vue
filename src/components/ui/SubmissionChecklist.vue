<script setup>
import { computed, ref } from 'vue'
import { finalChecklist, gradingScale, submissionRules } from '../../data/curriculum'

const checks = ref(finalChecklist.map((item) => ({ ...item, done: false })))

const doneCount = computed(() => checks.value.filter((check) => check.done).length)
const percent = computed(() => Math.round((doneCount.value / checks.value.length) * 100))
</script>

<template>
  <div class="check-layout">
    <!-- 체크리스트 -->
    <section class="checklist-card">
      <div class="checklist-head">
        <div>
          <h2>최종 제출 체크리스트</h2>
          <p>완료한 항목을 체크하면 진행률에 반영됩니다.</p>
        </div>
        <strong>{{ doneCount }} / {{ checks.length }}</strong>
      </div>

      <div class="track"><i :style="{ width: `${percent}%` }"></i></div>

      <label
        v-for="check in checks"
        :key="check.title"
        class="check-item"
        :class="{ done: check.done }"
      >
        <input v-model="check.done" type="checkbox" />
        <span>
          <b>{{ check.title }}</b>
          <small>{{ check.detail }}</small>
        </span>
      </label>
    </section>

    <!-- 사이드: 제출 조건 · 평가 기준 -->
    <aside class="side">
      <section class="side-card">
        <p class="side-label">제출 조건 · 교안 5쪽</p>
        <ul>
          <li v-for="rule in submissionRules" :key="rule">{{ rule }}</li>
        </ul>
      </section>

      <section class="side-card">
        <p class="side-label">평가 기준 · 교안 6쪽</p>
        <div v-for="row in gradingScale" :key="row.grade" class="grade-row">
          <div class="grade-head">
            <b>{{ row.grade }}</b>
            <span>{{ row.score }}</span>
          </div>
          <p>{{ row.criteria }}</p>
        </div>
      </section>
    </aside>
  </div>
</template>

<style scoped>
.check-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 22px;
  align-items: start;
}

/* 체크리스트 */
.checklist-card {
  padding: 28px;
  border: 1px solid var(--accent-line);
  border-radius: 16px;
  background: var(--surface);
}

.checklist-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

h2 {
  margin: 0;
  color: var(--ink);
  font-size: 21px;
}

.checklist-head p {
  margin: 5px 0 0;
  color: var(--faint);
  font-size: 13.5px;
}

.checklist-head strong {
  color: var(--accent);
  font-size: 26px;
  white-space: nowrap;
}

.track {
  height: 8px;
  margin: 18px 0 6px;
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

.check-item {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  padding: 15px 0;
  border-top: 1px solid var(--accent-tint);
  cursor: pointer;
}

.check-item input {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: var(--accent);
}

.check-item b,
.check-item small {
  display: block;
}

.check-item b {
  color: var(--ink);
  font-size: 14.5px;
}

.check-item small {
  margin-top: 3px;
  color: var(--faint);
  font-size: 12.5px;
}

.check-item.done b {
  color: var(--faint);
  text-decoration: line-through;
}

/* 사이드 */
.side {
  display: grid;
  gap: 14px;
}

.side-card {
  padding: 22px;
  border: 1px solid var(--accent-line);
  border-radius: 14px;
  background: var(--surface);
}

.side-label {
  margin: 0 0 14px;
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.side-card ul {
  display: grid;
  gap: 9px;
  margin: 0;
  padding-left: 17px;
}

.side-card li {
  color: var(--ink-soft);
  font-size: 13px;
  line-height: 1.65;
}

.side-card li::marker {
  color: var(--accent);
}

.grade-row {
  padding: 11px 0;
  border-top: 1px solid var(--accent-tint);
}

.grade-row:first-of-type {
  border-top: 0;
  padding-top: 0;
}

.grade-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}

.grade-head b {
  color: var(--ink);
  font-size: 14px;
}

.grade-head span {
  color: var(--faint);
  font-size: 12px;
  font-weight: 700;
}

.grade-row p {
  margin: 4px 0 0;
  color: var(--faint);
  font-size: 12.5px;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .check-layout {
    grid-template-columns: 1fr;
  }
}
</style>
