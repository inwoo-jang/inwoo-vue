<script setup>
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { assignments } from '../data/curriculum'
import { findAssignmentResult } from '../components/assignments'
import ResultAnatomy from '../components/ui/ResultAnatomy.vue'
import SubmissionChecklist from '../components/ui/SubmissionChecklist.vue'

/**
 * 결과물 컴포넌트가 연결된 과제만 모은다.
 * curriculum.js의 과제에 result를 추가하면 여기 탭이 자동으로 늘어난다.
 */
const builtStages = computed(() =>
  assignments
    .filter((a) => findAssignmentResult(a.result))
    .map((a) => ({ ...a, component: findAssignmentResult(a.result) })),
)

/** 아직 결과물이 붙지 않은 다음 단계들 */
const upcoming = computed(() =>
  assignments.filter((a) => !findAssignmentResult(a.result) && a.status !== 'done'),
)

/**
 * 어떤 단계를 볼지는 주소에 담는다 (/project/3).
 * 그래야 "3단계 결과물"만 따로 링크로 보낼 수 있다.
 * 주소에 단계가 없으면(/project) 가장 마지막에 완성한 단계를 보여준다.
 */
const router = useRouter()

const props = defineProps({
  stageId: { type: String, default: '' },
})

const current = computed(() => {
  const list = builtStages.value
  if (!list.length) return null
  return list.find((s) => String(s.id) === props.stageId) ?? list[list.length - 1]
})

/** 단계를 고르면 주소를 바꾼다 */
const selectStage = (id) => {
  router.push({ name: 'project', params: { stageId: String(id) } })
}

/** 주소가 비어 있으면 지금 보고 있는 단계를 주소에 채워 링크를 복사할 수 있게 한다 */
watch(
  [() => props.stageId, current],
  ([stageId, stage]) => {
    if (!stageId && stage) {
      router.replace({ name: 'project', params: { stageId: String(stage.id) } })
    }
  },
  { immediate: true },
)
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <p class="eyebrow">STEP BY STEP</p>
      <h1>Weather<br /><span>Dashboard</span></h1>
      <p class="hero-copy">
        제출 과제가 한 겹씩 쌓여 완성되는 결과물입니다. 아래에서 단계를 골라
        <strong>지금까지 만든 앱을 그대로 실행</strong>해 볼 수 있습니다.
      </p>
    </div>

    <div class="hero-meter" aria-hidden="true">
      <span class="meter-count">{{ builtStages.length }}</span>
      <span class="meter-total">/ {{ assignments.length }} 단계</span>
      <span class="meter-track">
        <i :style="{ width: `${(builtStages.length / assignments.length) * 100}%` }"></i>
      </span>
      <span class="meter-label">완성한 단계</span>
    </div>
  </section>

  <template v-if="current">
    <!-- 단계 전환 탭 -->
    <div class="stage-tabs" role="tablist">
      <button
        v-for="stage in builtStages"
        :key="stage.id"
        type="button"
        role="tab"
        class="stage-tab"
        :class="{ active: stage.id === current.id }"
        :aria-selected="stage.id === current.id"
        @click="selectStage(stage.id)"
      >
        <span class="tab-no">{{ String(stage.id).padStart(2, '0') }}</span>
        <span class="tab-title">{{ stage.title }}</span>
      </button>
    </div>

    <!-- 현재 단계 설명 -->
    <div class="stage-head">
      <div>
        <p class="eyebrow">ASSIGNMENT {{ String(current.id).padStart(2, '0') }}</p>
        <h2>{{ current.title }}</h2>
        <p class="stage-goal">{{ current.goal }}</p>
      </div>
      <RouterLink class="to-assignment" to="/assignments">요구사항 보기 →</RouterLink>
    </div>

    <!-- 실제 결과물 -->
    <div class="stage-frame">
      <div class="frame-bar">
        <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="frame-title">실행 중 · {{ current.title }}</span>
      </div>
      <div class="stage-body">
        <component :is="current.component" :key="current.id" />
      </div>
    </div>

    <p v-if="current.resultNote" class="stage-note">{{ current.resultNote }}</p>

    <!-- 이 화면 하나가 파일 몇 개로 어떻게 맞물려 도는지 -->
    <details v-if="current.anatomy" class="anatomy-fold">
      <summary>
        <span class="fold-mark" aria-hidden="true">▶</span>
        <span class="fold-title">컴포넌트 구조와 이벤트 흐름</span>
        <span class="fold-hint">파일이 어떻게 연결되고 이벤트가 어디로 오가는지</span>
      </summary>
      <div class="anatomy-body">
        <ResultAnatomy :anatomy="current.anatomy" />
      </div>
    </details>
  </template>

  <p v-else class="empty-state">
    아직 실행할 수 있는 결과물이 없습니다. 과제를 완성한 뒤
    <code>src/components/assignments/</code> 에 컴포넌트를 넣고
    <code>curriculum.js</code> 의 <code>result</code> 에 이름을 적어 주세요.
  </p>

  <!-- 앞으로 남은 단계 -->
  <section v-if="upcoming.length" class="roadmap">
    <p class="section-label">앞으로 이어 붙일 단계</p>
    <div class="roadmap-grid">
      <article v-for="stage in upcoming" :key="stage.id">
        <span class="number">{{ String(stage.id).padStart(2, '0') }}</span>
        <h3>{{ stage.title }}</h3>
        <p>{{ stage.goal }}</p>
      </article>
    </div>
  </section>

  <!-- 제출 직전 점검 — 여기까지 왔으면 바로 확인할 수 있게 -->
  <details class="submission">
    <summary>
      <span class="sum-title">제출 전 점검</span>
      <span class="sum-hint">체크리스트 · 제출 조건 · 평가 기준</span>
    </summary>
    <div class="submission-body">
      <SubmissionChecklist />
    </div>
  </details>
</template>

<style scoped>
/* ── 히어로 ── */
.hero {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: end;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--line);
}

.hero h1 {
  margin: 0;
  color: var(--ink);
  font-size: clamp(40px, 6vw, 66px);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 0.98;
}

.hero h1 span {
  color: var(--accent);
}

.hero-copy {
  max-width: 520px;
  margin: 20px 0 0;
  color: var(--muted);
  font-size: 15.5px;
  line-height: 1.8;
}

.hero-copy strong {
  color: var(--ink);
  font-weight: 700;
  box-shadow: inset 0 -0.5em 0 var(--accent-tint);
}

/* 진행 미터 */
.hero-meter {
  display: grid;
  grid-template-columns: auto auto;
  align-items: baseline;
  gap: 0 8px;
  min-width: 190px;
}

.meter-count {
  color: var(--accent);
  font-size: 54px;
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1;
}

.meter-total {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 13px;
}

.meter-track {
  grid-column: 1 / -1;
  height: 5px;
  margin-top: 14px;
  overflow: hidden;
  border-radius: 3px;
  background: var(--surface-sunken);
}

.meter-track i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--accent);
  transition: width 0.4s ease;
}

.meter-label {
  grid-column: 1 / -1;
  margin-top: 8px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* ── 단계 탭 — 알약형으로 부드럽게 ── */
.stage-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 26px;
  padding: 5px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  width: fit-content;
  max-width: 100%;
}

.stage-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  cursor: pointer;
  transition:
    background 0.18s ease,
    color 0.18s ease;
}

.stage-tab:hover {
  background: var(--accent-tint);
}

.stage-tab.active {
  background: var(--accent);
}

.tab-no {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
}

.stage-tab.active .tab-no {
  color: var(--on-accent);
  opacity: 0.7;
}

.tab-title {
  color: var(--ink-soft);
  font-size: 13.5px;
  font-weight: 700;
}

.stage-tab.active .tab-title {
  color: var(--on-accent);
}

/* ── 단계 설명 ── */
.stage-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 18px;
}

.stage-head .eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

h2 {
  margin: 0;
  color: var(--ink);
  font-size: 27px;
  font-weight: 800;
  letter-spacing: -0.035em;
}

.stage-goal {
  max-width: 680px;
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.75;
}

.to-assignment {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--accent);
  background: var(--surface);
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
}

.to-assignment:hover {
  border-color: var(--accent);
  background: var(--accent-tint);
}

/* ── 실행 화면 — 창처럼 보이도록 ── */
.stage-frame {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
}

.frame-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--line);
  background: var(--surface-sunken);
}

.dots {
  display: flex;
  gap: 6px;
}

.dots i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--line-strong);
  opacity: 0.7;
}

.frame-title {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.stage-body {
  padding: 30px;
  background: var(--paper);
}

.stage-note {
  margin: 12px 2px 0;
  color: var(--faint);
  font-size: 12.5px;
}

.empty-state {
  padding: 44px 24px;
  border: 1px dashed var(--line-strong);
  border-radius: 16px;
  color: var(--muted);
  background: var(--surface);
  font-size: 14px;
  line-height: 1.85;
  text-align: center;
}

code {
  padding: 1px 6px;
  border-radius: 4px;
  color: var(--accent);
  background: var(--accent-tint);
  font-family: var(--font-mono);
  font-size: 12px;
}

/* ── 남은 단계 ── */
/* 컴포넌트 해부도 토글 */
.anatomy-fold {
  margin-top: 16px;
  border: 1px solid var(--slate-line);
  border-radius: 12px;
  background: var(--surface);
}

.anatomy-fold summary {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: baseline;
  padding: 14px 18px;
  border-radius: inherit;
  cursor: pointer;
}

.anatomy-fold summary:hover {
  background: var(--slate-tint);
}

.fold-mark {
  display: inline-block;
  color: var(--slate);
  font-size: 10px;
  transition: transform 0.15s ease;
}

.anatomy-fold[open] .fold-mark {
  transform: rotate(90deg);
}

.fold-title {
  color: var(--slate);
  font-size: 13.5px;
  font-weight: 800;
}

.fold-hint {
  color: var(--muted);
  font-size: 12px;
}

.anatomy-body {
  padding: 0 18px 18px;
}

.roadmap {
  margin-top: 44px;
}

.section-label {
  margin: 0 0 16px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.roadmap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));
  gap: 10px;
}

.roadmap-grid article {
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  transition: border-color 0.18s ease;
}

.roadmap-grid article:hover {
  border-color: var(--accent-line);
}

.number {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
}

h3 {
  margin: 12px 0 6px;
  color: var(--ink);
  font-size: 15.5px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.roadmap-grid p {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.roadmap-grid small {
  display: block;
  margin-top: 12px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 10.5px;
}

@media (max-width: 760px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 26px;
    align-items: start;
  }
}

/* 제출 전 점검 */
.submission {
  margin-top: 40px;
  border-top: 1px solid var(--line);
}

.submission summary {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
  padding: 20px 0;
  cursor: pointer;
}

.submission summary::marker {
  color: var(--accent);
}

.sum-title {
  color: var(--ink);
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.sum-hint {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.submission-body {
  padding-bottom: 20px;
}

@media (max-width: 620px) {
  .stage-body {
    padding: 16px;
  }
}
</style>
