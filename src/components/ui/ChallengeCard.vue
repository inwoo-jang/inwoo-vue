<script setup>
import { computed, reactive, ref } from 'vue'
import LectureBrief from './LectureBrief.vue'
import CodeWindow from './CodeWindow.vue'
import { findPractice, findPracticePath, findPracticeSource } from '../practices'
import { renderEmphasis } from '../../utils/highlight'

const props = defineProps({
  challenge: { type: Object, required: true },
})

/** curriculum.js의 practices 이름을 실제 컴포넌트로 변환한다. */
const practiceComponents = computed(() =>
  props.challenge.practices
    .map((name) => ({ name, component: findPractice(name) }))
    .filter((entry) => entry.component),
)

/** 데이터에는 적혀 있지만 파일이 없는 실습 (오타 방지용 안내) */
const missingPractices = computed(() =>
  props.challenge.practices.filter((name) => !findPractice(name)),
)

const hasPractice = computed(() => practiceComponents.value.length > 0)

const guideSteps = computed(() => props.challenge.practiceGuide ?? [])

/**
 * 확인 가이드를 실습 단위로 묶는다.
 * 각 단계의 practice 값(실습 제목)이 바뀌는 지점에서 새 그룹이 시작된다.
 * "첫 번째 실습" 같은 표현 대신 실습 제목 chip으로 구분하기 위함.
 */
const guideGroups = computed(() => {
  const groups = []
  for (const step of guideSteps.value) {
    // practice가 적힌 단계에서 새 그룹이 시작되고,
    // 없는 단계는 직전 그룹에 이어 붙는다(번호가 1부터 다시 시작하지 않도록).
    if (step.practice || groups.length === 0) {
      groups.push({ label: step.practice ?? null, steps: [step] })
    } else {
      groups[groups.length - 1].steps.push(step)
    }
  }

  // 심화 응용을 해당 실습 그룹 바로 밑에 끼워 넣는다.
  return groups.map((group) => ({
    ...group,
    extras: extensionItems.value.filter(
      (item) => typeof item === 'object' && item.practice === group.label,
    ),
  }))
})

/** 특정 실습에 묶이지 않은 심화 응용 (문자열이거나 매칭되는 그룹이 없는 것) */
const looseExtensions = computed(() => {
  const labels = new Set(guideGroups.value.map((g) => g.label))
  return extensionItems.value.filter(
    (item) => typeof item === 'string' || !labels.has(item.practice),
  )
})

/** 화면에 뿌릴 문자열로 변환 */
const extensionText = (item) => (typeof item === 'string' ? item : item.text)
const extensionItems = computed(() => props.challenge.extensions ?? [])

/** 실습 옆 사이드바(확인 가이드 + 심화 응용)를 띄울지 */
const hasSide = computed(
  () => hasPractice.value && (guideSteps.value.length > 0 || extensionItems.value.length > 0),
)

/** 사이드바를 접으면 실습 화면이 그만큼 넓어진다. */
const isSideOpen = ref(true)

/** 실습 화면 패널 자체를 접어 카드를 짧게 만들 수 있다. */
const isPracticeOpen = ref(true)

/**
 * 챌린지 카드 전체 접기 — 제목 줄만 남는다.
 * 기본은 접힘. 챕터를 열면 목차처럼 보이고, 필요한 챌린지만 펼쳐서 학습한다.
 */
const isCardOpen = ref(false)

/** 접었을 때 헤더에 요약으로 보여줄 항목 수 */
const cardSummary = computed(() => {
  const parts = []
  if (props.challenge.tasks?.length) parts.push(`연습 ${props.challenge.tasks.length}`)
  if (props.challenge.pitfalls?.length) parts.push(`주의 ${props.challenge.pitfalls.length}`)
  if (practiceComponents.value.length) parts.push(`실습 ${practiceComponents.value.length}`)
  return parts.join(' · ')
})

/** 사이드바가 없을 때만 카드 아래쪽에 심화 응용을 따로 보여준다. */
const showBottomExtensions = computed(() => !hasSide.value && extensionItems.value.length > 0)

/**
 * 실습 단위 초기화.
 * Vue는 :key가 바뀌면 컴포넌트를 버리고 새로 만든다(unmount → mount).
 * 그래서 카운터만 올려주면 그 실습의 ref 값·watch가 처음 상태로 돌아간다.
 * 페이지를 새로고침하지 않으므로 스크롤 위치와 다른 실습의 상태는 그대로 유지된다.
 */
const resetCounts = reactive({})

const keyOf = (name) => `${name}-${resetCounts[name] ?? 0}`

const resetPractice = (name) => {
  resetCounts[name] = (resetCounts[name] ?? 0) + 1
}

const resetAllPractices = () => {
  practiceComponents.value.forEach((entry) => resetPractice(entry.name))
}

/** 코드 창에 띄운 실습 이름 (null이면 닫힘) */
const openedSource = ref(null)

const openSource = (name) => {
  openedSource.value = name
}

/** 챌린지 카드 최상위 요소 — 안에서 실습 슬롯을 찾기 위해 참조해 둔다 */
const cardEl = ref(null)

const squash = (text) => text.replace(/\s+/g, ' ').trim()

/**
 * 확인 가이드의 실습 이름을 누르면 그 실습으로 스크롤한다.
 * 1순위는 실습 카드의 제목(h2)과 이름이 일치하는 것,
 * 없으면 가이드 그룹 순서와 실습 순서가 같다는 점을 이용해 index로 찾는다.
 */
const scrollToPractice = (label, groupIndex) => {
  const root = cardEl.value
  if (!root) return

  const slots = [...root.querySelectorAll('.practice-slot')]
  if (!slots.length) return

  const byTitle = slots.find((slot) => {
    const heading = slot.querySelector('h2')
    return heading && squash(heading.textContent) === squash(label ?? '')
  })

  const target = byTitle ?? slots[groupIndex] ?? slots[0]
  target.scrollIntoView({ behavior: 'smooth', block: 'center' })

  // 어디로 갔는지 눈으로 알 수 있게 잠깐 표시
  target.classList.add('is-target')
  setTimeout(() => target.classList.remove('is-target'), 1400)
}
</script>

<template>
  <article
    :id="`challenge-${challenge.id}`"
    ref="cardEl"
    class="challenge"
    :class="[challenge.status, { collapsed: !isCardOpen }]"
  >
    <!-- 헤더 — 이 줄 어디를 눌러도 카드 전체가 접힌다 -->
    <header
      class="challenge-head"
      role="button"
      tabindex="0"
      :aria-expanded="isCardOpen"
      :title="isCardOpen ? '이 챌린지 접기' : '이 챌린지 펼치기'"
      @click="isCardOpen = !isCardOpen"
      @keydown.enter.prevent="isCardOpen = !isCardOpen"
      @keydown.space.prevent="isCardOpen = !isCardOpen"
    >
      <span class="card-chevron" aria-hidden="true">{{ isCardOpen ? '▾' : '▸' }}</span>

      <div class="head-text">
        <p class="label">
          {{ challenge.label }}
          <span class="slide">교안 {{ challenge.slidePage }}</span>
        </p>
        <h3>{{ challenge.title }}</h3>
        <p v-if="isCardOpen" class="goal">{{ challenge.goal }}</p>
        <p v-else-if="cardSummary" class="card-summary">{{ cardSummary }}</p>
      </div>

      <div class="head-badges">
        <span class="badge" :class="challenge.status">
          {{ challenge.status === 'done' ? '학습 완료' : '진행 예정' }}
        </span>
        <span v-if="hasPractice" class="badge live">
          실습 {{ practiceComponents.length }}개
        </span>
      </div>
    </header>

    <template v-if="isCardOpen">

    <!-- 관련 강의 내용 -->
    <LectureBrief
      v-if="challenge.lecture"
      :lecture="challenge.lecture"
      :study-range="challenge.studyRange"
    />

    <!-- 연습 항목 체크리스트 -->
    <section v-if="challenge.tasks?.length" class="tasks">
      <p class="section-label">✎ 연습 항목</p>
      <ul>
        <li v-for="task in challenge.tasks" :key="task">{{ task }}</li>
      </ul>
    </section>

    <!-- 조심할 점 — 초보자가 자주 틀리는 지점 -->
    <details v-if="challenge.pitfalls?.length" class="fold pitfalls">
      <summary>
        <span aria-hidden="true">⚠</span> 조심할 점
        <b>{{ challenge.pitfalls.length }}</b>
      </summary>
      <div class="fold-body">
        <div v-for="(item, i) in challenge.pitfalls" :key="i" class="pitfall">
          <div v-if="item.bad || item.good" class="compare">
            <p v-if="item.bad" class="bad"><span>❌</span><code>{{ item.bad }}</code></p>
            <p v-if="item.good" class="good"><span>✅</span><code>{{ item.good }}</code></p>
          </div>
          <p class="why">{{ item.why }}</p>
        </div>
      </div>
    </details>

    <!-- 애초에 조작할 실습이 없는 단계 (예: 개발환경 설치) -->
    <p v-if="!hasPractice && challenge.practiceNote" class="practice-note">
      <span aria-hidden="true">✓</span> {{ challenge.practiceNote }}
    </p>

    <!-- 실습 영역 — 강의 내용(읽는 곳)과 확실히 구분되는 파란 톤 패널 -->
    <section v-else class="practice-zone" :class="{ closed: !isPracticeOpen }">
      <header class="practice-head">
        <button
          type="button"
          class="practice-toggle"
          :aria-expanded="isPracticeOpen"
          :title="isPracticeOpen ? '실습 화면 접기' : '실습 화면 펼치기'"
          @click="isPracticeOpen = !isPracticeOpen"
        >
          <span class="chevron" aria-hidden="true">{{ isPracticeOpen ? '▾' : '▸' }}</span>
          <span class="practice-mark" aria-hidden="true">🖥</span>
          <span class="practice-title">실습 화면</span>
          <span v-if="hasPractice" class="count">{{ practiceComponents.length }}</span>
        </button>

        <span class="practice-hint">
          {{ isPracticeOpen ? '직접 눌러보며 동작을 확인하세요' : '접어 둠 · 제목을 눌러 펼치기' }}
        </span>

        <button
          v-if="practiceComponents.length > 1 && isPracticeOpen"
          type="button"
          class="reset-button reset-all"
          aria-label="실습 전체 초기화"
          title="이 챌린지의 실습을 모두 처음 상태로 되돌립니다"
          @click="resetAllPractices"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 12a8 8 0 1 1-2.6-5.9" />
            <path d="M20 4v4.5h-4.5" />
          </svg>
        </button>
      </header>

      <!-- 실습 화면(왼쪽) + 확인 가이드(오른쪽 고정) -->
      <div
        v-show="isPracticeOpen"
        class="practice-body"
        :class="{ 'has-guide': hasSide, 'side-closed': hasSide && !isSideOpen }"
      >
        <div class="practice-main">
          <div v-if="hasPractice" class="practice-mounts">
            <div v-for="entry in practiceComponents" :key="entry.name" class="practice-slot">
              <div class="slot-tools">
                <button
                  type="button"
                  class="icon-button"
                  aria-label="소스 코드 보기"
                  title="소스 코드를 새 창으로 엽니다"
                  @click="openSource(entry.name)"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 7 4 12l5 5M15 7l5 5-5 5" />
                  </svg>
                </button>
                <button
                  type="button"
                  class="icon-button"
                  aria-label="이 실습 초기화"
                  title="이 실습만 처음 상태로 되돌립니다 (페이지 새로고침 없음)"
                  @click="resetPractice(entry.name)"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
                    <path d="M20 4v4.5h-4.5" />
                  </svg>
                </button>
              </div>

              <component :is="entry.component" :key="keyOf(entry.name)" />
            </div>
          </div>

          <p v-else class="practice-empty">
            아직 이 챌린지에 연결된 실습 화면이 없습니다.
            <code>src/components/practices/</code> 에 컴포넌트를 추가하고
            <code>curriculum.js</code> 의 <code>practices</code> 에 이름을 넣으면 여기에 나타납니다.
          </p>

          <p v-if="missingPractices.length" class="practice-missing">
            ⚠ 파일을 찾지 못한 실습: {{ missingPractices.join(', ') }}
          </p>
        </div>

        <!-- 스크롤을 따라오는 실습 도우미 (확인 가이드 + 심화 응용) -->
        <aside v-if="hasSide" class="guide-side" :class="{ collapsed: !isSideOpen }">
          <button
            type="button"
            class="side-toggle"
            :aria-expanded="isSideOpen"
            :title="isSideOpen ? '접어서 실습 화면 넓히기' : '실습 도우미 펼치기'"
            @click="isSideOpen = !isSideOpen"
          >
            <span class="side-toggle-label">
              <span aria-hidden="true">✓</span> 실습 도우미
            </span>
            <span class="side-chevron" aria-hidden="true">{{ isSideOpen ? '›' : '‹' }}</span>
          </button>

          <div v-show="isSideOpen" class="side-body">
            <!-- 확인 가이드 -->
            <section v-if="guideSteps.length" class="side-block">
              <p class="side-heading">
                확인 가이드 <b>{{ guideSteps.length }}</b>
              </p>
              <div v-for="(group, gi) in guideGroups" :key="gi" class="guide-group">
                <button
                  v-if="group.label"
                  type="button"
                  class="guide-chip"
                  title="이 실습으로 이동합니다"
                  @click="scrollToPractice(group.label, gi)"
                >
                  {{ group.label }}
                  <span class="jump" aria-hidden="true">↓</span>
                </button>
                <ol class="guide">
                  <li v-for="(step, i) in group.steps" :key="i">
                    <p class="guide-do" v-html="renderEmphasis(step.do)"></p>
                    <p class="guide-see"><b>확인</b> <span v-html="renderEmphasis(step.see)"></span></p>
                    <p v-if="step.why" class="guide-why"><b>왜</b> <span v-html="renderEmphasis(step.why)"></span></p>
                  </li>
                </ol>

                <!-- 이 실습에서 이어서 해볼 것 -->
                <div v-if="group.extras.length" class="group-extras">
                  <p class="extras-label"><span aria-hidden="true">🚀</span> 더 해보기</p>
                  <ul>
                    <li v-for="(item, i) in group.extras" :key="i">{{ extensionText(item) }}</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- 특정 실습에 묶이지 않은 심화 응용 -->
            <details v-if="looseExtensions.length" class="side-block fold extensions">
              <summary>
                <span aria-hidden="true">🚀</span> 더 해보기 (전체)
                <b>{{ looseExtensions.length }}</b>
              </summary>
              <div class="fold-body">
                <ul>
                  <li v-for="(item, i) in looseExtensions" :key="i">{{ extensionText(item) }}</li>
                </ul>
              </div>
            </details>
          </div>
        </aside>
      </div>
    </section>

    <!-- 심화 응용 — 실습 사이드바가 없는 챌린지에서만 카드 하단에 표시 -->
    <details v-if="showBottomExtensions" class="fold extensions">
      <summary>
        <span aria-hidden="true">🚀</span> 더 해보기 (심화 응용)
        <b>{{ extensionItems.length }}</b>
      </summary>
      <div class="fold-body">
        <ul>
          <li v-for="(item, i) in extensionItems" :key="i">{{ extensionText(item) }}</li>
        </ul>
      </div>
    </details>
    </template>

    <!-- 소스 코드 새 창 — 레이아웃을 건드리지 않고 위에 겹쳐 뜬다 -->
    <CodeWindow
      v-if="openedSource"
      :path="findPracticePath(openedSource)"
      :code="findPracticeSource(openedSource)"
      @close="openedSource = null"
    />
  </article>
</template>

<style scoped>
.challenge {
  display: grid;
  gap: 18px;
  padding: 26px;
  border: 1px solid var(--accent-line);
  border-radius: 16px;
  background: var(--surface);
  scroll-margin-top: 24px;
}

.challenge.todo {
  background: var(--surface);
}

/* 접힌 카드는 제목 줄만 남는다 */
.challenge.collapsed {
  gap: 0;
  padding: 18px 26px;
}

/* 헤더 — 줄 전체가 접기 버튼이다 */
.challenge-head {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: flex-start;
  /* 카드 안쪽 여백만큼 넓혀서 좌우 끝까지 눌리게 한다 */
  margin: -10px -12px;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.challenge-head:hover {
  background: var(--accent-tint);
}

.challenge-head:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.head-text {
  min-width: 0;
  flex: 1;
}

.card-chevron {
  margin-top: 3px;
  color: var(--faint);
  font-size: 11px;
  line-height: 1.4;
}

.challenge-head:hover .card-chevron {
  color: var(--accent);
}

.card-summary {
  margin: 6px 0 0;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.label {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 0 0 8px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.slide {
  padding: 2px 7px;
  border-radius: 4px;
  color: var(--muted);
  background: var(--accent-tint);
  font-weight: 700;
  letter-spacing: 0;
}

h3 {
  margin: 0;
  color: var(--ink);
  font-size: 23px;
  letter-spacing: -0.03em;
}

.goal {
  max-width: 680px;
  margin: 9px 0 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.7;
}

.head-badges {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.badge {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 11.5px;
  font-weight: 800;
  white-space: nowrap;
}

.badge.done {
  color: var(--accent);
  background: var(--accent-tint);
}

.badge.todo {
  color: var(--faint);
  background: var(--accent-tint);
}

.badge.live {
  color: var(--slate);
  background: var(--slate-tint);
}

/* 체크리스트 */
.section-label {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0 0 10px;
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.count {
  display: grid;
  min-width: 18px;
  height: 18px;
  place-items: center;
  border-radius: 9px;
  color: var(--on-accent);
  background: var(--slate);
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
}

.tasks ul {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tasks li {
  position: relative;
  padding-left: 21px;
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.65;
}

/* 클릭되는 체크박스가 아니라, 체크 모양의 불릿이다. */
.tasks li::before {
  position: absolute;
  top: 0;
  left: 1px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 900;
  line-height: 1.85;
  content: '✓';
}

/* ── 접이식 블록 (조심할 점 · 심화 응용) ── */
.fold {
  border: 1px solid var(--accent-tint);
  border-radius: 11px;
  background: var(--surface);
}

.fold summary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 15px;
  border-radius: inherit;
  color: var(--ink-soft);
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
}

.fold summary b {
  display: grid;
  min-width: 18px;
  height: 18px;
  place-items: center;
  border-radius: 9px;
  background: var(--accent-tint);
  font-size: 11px;
  line-height: 1;
}

.fold summary:hover {
  background: var(--surface);
}

.fold-body {
  padding: 2px 15px 16px;
}

/* 조심할 점 */
.pitfalls {
  border-color: var(--signal-line);
  background: var(--surface);
}

.pitfalls summary {
  color: var(--signal);
}

.pitfalls summary b {
  background: var(--signal-tint);
}

.pitfalls summary:hover {
  background: var(--signal-tint);
}

.pitfall + .pitfall {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--signal-line);
}

.compare {
  display: grid;
  gap: 5px;
  margin-bottom: 7px;
}

.compare p {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  margin: 0;
}

.compare code {
  padding: 3px 8px;
  border-radius: 5px;
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 12.5px;
  line-height: 1.6;
  white-space: pre-wrap;
}

.bad code {
  color: var(--danger);
  background: var(--danger-tint);
}

.good code {
  color: var(--accent);
  background: var(--accent-tint);
}

.why {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

/* 심화 응용 */
.extensions summary {
  color: var(--slate);
}

.extensions ul {
  display: grid;
  gap: 8px;
  margin: 0;
  padding-left: 18px;
}

.extensions li {
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.7;
}

.extensions li::marker {
  color: var(--slate);
}

/* ── 실습 본문: 실습(왼쪽) + 확인 가이드(오른쪽 고정) ── */
.practice-body.has-guide {
  display: grid;
  /* 좁을 때는 가이드가 먼저 줄어들어 실습 칸을 지켜 준다 */
  grid-template-columns: minmax(0, 1fr) clamp(238px, 30%, 320px);
  gap: 18px;
  align-items: start;
}

.practice-main {
  min-width: 0;
}

/* 접으면 실습 화면이 그만큼 넓어진다 */
.practice-body.has-guide.side-closed {
  grid-template-columns: minmax(0, 1fr) 38px;
}

.guide-side {
  position: sticky;
  top: 16px;
  /* 실습 안의 도구 버튼(.slot-tools, z-index 2)이 뚫고 나오지 않도록 */
  z-index: 3;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  overscroll-behavior: contain;
  border: 1px solid var(--slate-line);
  border-radius: 11px;
  background: var(--surface);
}

.side-toggle {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border: 0;
  border-bottom: 1px solid var(--slate-tint);
  border-radius: 11px 11px 0 0;
  background: var(--surface);
  color: var(--slate);
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
}

.side-toggle:hover {
  background: var(--surface);
}

.side-chevron {
  margin-left: auto;
  font-size: 15px;
}

.side-body {
  padding: 14px;
}

.side-block + .side-block {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--slate-tint);
}

.side-heading {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0 0 10px;
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.side-heading b {
  display: grid;
  min-width: 18px;
  height: 18px;
  place-items: center;
  border-radius: 9px;
  color: var(--on-accent);
  background: var(--slate);
  font-size: 11px;
  line-height: 1;
}

/* 접힌 상태 — 세로 라벨만 남는다 */
.guide-side.collapsed {
  max-height: none;
  overflow: visible;
}

.guide-side.collapsed .side-toggle {
  flex-direction: column;
  gap: 10px;
  padding: 12px 8px;
  border-bottom: 0;
  border-radius: 11px;
}

.guide-side.collapsed .side-toggle-label {
  writing-mode: vertical-rl;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.guide-side.collapsed .side-chevron {
  margin-left: 0;
}

/* 실습 제목 chip — "첫 번째 실습" 대신 어떤 실습인지 명시 */
/* 누르면 해당 실습으로 이동한다 */
.guide-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 9px;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 20px;
  color: var(--muted);
  background: var(--slate-tint);
  font-family: inherit;
  font-size: 11.5px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;
  cursor: pointer;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    background 0.15s ease;
}

.guide-chip:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.guide-chip .jump {
  color: var(--faint);
  font-size: 10px;
}

.guide-chip:hover .jump {
  color: var(--accent);
}

.guide-group + .guide-group {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dashed var(--slate-tint);
}

/* 실습 그룹 바로 밑에 붙는 심화 응용 */
.group-extras {
  margin: 10px 0 0 22px;
  padding: 10px 12px;
  border-left: 3px solid var(--slate-line);
  border-radius: 0 8px 8px 0;
  background: var(--surface);
}

.extras-label {
  margin: 0 0 6px;
  color: var(--slate);
  font-size: 11.5px;
  font-weight: 800;
}

.group-extras ul {
  margin: 0;
  padding-left: 16px;
}

.group-extras li {
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.65;
}

.group-extras li + li {
  margin-top: 5px;
}

.group-extras li::marker {
  color: var(--slate);
}

/* 사이드바 안의 심화 응용 */
.side-block.extensions {
  border-radius: 9px;
}

.side-block.extensions summary {
  padding: 9px 11px;
  font-size: 12.5px;
}

.side-block.extensions .fold-body {
  padding: 2px 11px 12px;
}

.side-block.extensions li {
  font-size: 12.5px;
}

.guide-fold summary {
  color: var(--slate);
}

.guide-fold summary b {
  background: var(--slate-tint);
}

.guide-fold summary:hover {
  background: var(--surface);
}

.guide {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0 0 0 22px;
}

.guide li {
  padding-left: 4px;
  color: var(--slate);
}

.guide li::marker {
  color: var(--slate);
  font-weight: 800;
}

.guide p {
  margin: 0;
}

.guide-do {
  color: var(--slate);
  font-size: 13.5px;
  font-weight: 700;
  line-height: 1.6;
}

.guide-see,
.guide-why {
  margin-top: 3px !important;
  color: var(--faint);
  font-size: 13px;
  line-height: 1.65;
}

.guide-see b,
.guide-why b {
  display: inline-block;
  min-width: 30px;
  margin-right: 5px;
  padding: 1px 6px;
  border-radius: 4px;
  background: var(--slate-tint);
  color: var(--slate);
  font-size: 11px;
  text-align: center;
}

.guide-why b {
  background: var(--slate-tint);
  color: var(--faint);
}

/* ── 실습 영역 ──
   강의 내용(초록 = 읽는 곳)과 대비되도록 파란 톤 패널(= 만지는 곳)로 구분한다. */
.practice-zone {
  /* 왼쪽 로드맵이 열리면 뷰포트는 넓어도 실제 폭은 좁아진다.
     그래서 @media(뷰포트)가 아니라 @container(실제 폭)로 분기한다. */
  container-type: inline-size;
  padding: 4px 16px 16px;
  border: 1px solid var(--slate-line);
  border-radius: 12px;
  background: var(--surface);
}

.practice-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 0 -16px 16px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--slate-tint);
}

/* 제목 부분 전체가 접기 버튼이다 */
.practice-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: -6px -8px;
  padding: 6px 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font-family: inherit;
  cursor: pointer;
}

.practice-toggle:hover {
  background: var(--slate-tint);
}

.chevron {
  color: var(--slate);
  font-size: 11px;
  line-height: 1;
}

.practice-mark {
  font-size: 14px;
}

.practice-title {
  color: var(--slate);
  font-size: 14px;
  font-weight: 800;
}

/* 접힌 상태 — 헤더만 남기고 아래 여백을 없앤다 */
.practice-zone.closed {
  padding-bottom: 0;
}

.practice-zone.closed .practice-head {
  margin-bottom: 0;
  border-bottom: 0;
}

.practice-hint {
  margin-left: auto;
  color: var(--faint);
  font-size: 12px;
}

.practice-mounts {
  display: grid;
  gap: 16px;
}

/* 실습 단위 초기화 버튼 */
.practice-slot {
  position: relative;
  /* 실습이 칸보다 넓으면 여기서 스크롤한다.
     .practice-main에 걸면 도구 버튼(.slot-tools)이 넘친 콘텐츠 오른쪽 끝으로
     밀려나 사이드바 아래에 깔리므로, 반드시 실습 하나 단위여야 한다. */
  overflow-x: auto;
  border-radius: 12px;
  scroll-margin-block: 24px;
  transition: box-shadow 0.3s ease;
}

/* 가이드에서 이동해 왔을 때 잠깐 테두리로 알려준다 */
.practice-slot.is-target {
  box-shadow: 0 0 0 3px var(--accent-tint), 0 0 0 4px var(--accent);
}

.slot-tools {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: flex;
  gap: 5px;
}

.icon-button,
.reset-button {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  /* margin·padding·line-height를 명시적으로 0으로 두어야 아이콘이 정확히 가운데 온다 */
  margin: 0;
  padding: 0;
  border: 1px solid var(--slate-line);
  border-radius: 50%;
  color: var(--faint);
  background: var(--surface);
  font-size: 0;
  line-height: 0;
  cursor: pointer;
}

.icon-button svg,
.reset-button svg {
  display: block;
  width: 17px;
  height: 17px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.icon-button:hover,
.reset-button:hover {
  border-color: var(--line-strong);
  color: var(--slate);
  background: var(--surface);
}

.icon-button.on {
  border-color: var(--slate);
  color: var(--on-accent);
  background: var(--slate);
}

.reset-button.reset-all {
  width: 26px;
  height: 26px;
  margin-left: 10px;
  background: var(--slate-tint);
}

.reset-button.reset-all svg {
  width: 15px;
  height: 15px;
}

/* 실습 컴포넌트 내부 공통 스타일 (자식 컴포넌트에 주입) */
.practice-mounts :deep(.practice-card) {
  padding: 20px;
  border: 1px solid var(--slate-tint);
  border-radius: 12px;
  background: var(--surface);
}

.practice-mounts :deep(.practice-card > h2:first-child),
.practice-mounts :deep(.practice-area > h2:first-child) {
  margin: 0 0 14px;
  color: var(--slate);
  font-size: 16px;
}

/* 첫 제목이 초기화 버튼과 겹치지 않도록 */
.practice-mounts :deep(.practice-card > h2:first-child),
.practice-mounts :deep(.practice-card > .practice-area:first-child > h2:first-child) {
  padding-right: 36px;
}

.practice-mounts :deep(h3) {
  margin: 0 0 10px;
  color: var(--slate);
  font-size: 14px;
}

.practice-mounts :deep(.practice-area + .practice-area) {
  margin-top: 22px;
  padding-top: 20px;
  border-top: 1px solid var(--slate-tint);
}

/* 실습 안의 일반 버튼.
   .practice-card 내부로 한정해야 도구 버튼(.icon-button)과 복사 버튼이 영향받지 않는다.
   ConceptHelp의 아이콘 버튼(.help-button)은 추가로 제외한다. */
.practice-mounts :deep(.practice-card button:not(.help-button)) {
  margin: 4px 4px 4px 0;
  padding: 7px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 7px;
  color: var(--slate);
  background: var(--surface);
  font-size: 13px;
  cursor: pointer;
}

/* :disabled로 잠근 버튼은 잠긴 티가 나야 한다 (위 규칙보다 명시도가 높아야 이긴다) */
.practice-mounts :deep(.practice-card button:not(.help-button):disabled) {
  border-color: var(--slate-line);
  color: var(--line-strong);
  background: var(--slate-tint);
  cursor: not-allowed;
}

.practice-mounts :deep(.practice-card button:not(.help-button):not(:disabled):hover) {
  border-color: var(--slate);
  background: var(--slate-tint);
}

.practice-mounts :deep(input),
.practice-mounts :deep(textarea),
.practice-mounts :deep(select) {
  padding: 7px 10px;
  border: 1px solid var(--slate-line);
  border-radius: 7px;
  font-size: 13px;
}

.practice-mounts :deep(input[type='checkbox']),
.practice-mounts :deep(input[type='radio']) {
  accent-color: var(--slate);
}

.practice-mounts :deep(p) {
  color: var(--ink-soft);
  font-size: 14px;
}

.practice-mounts :deep(strong) {
  color: var(--slate);
}

/* 화면이 좁으면 가이드를 실습 위로 되돌린다 */
/* 가이드는 기본적으로 옆에 붙어 있는다.
   실습 칸이 확보되지 않는 좁은 폭에서만 위아래로 쌓는다. */
@container (max-width: 660px) {
  .practice-body.has-guide,
  .practice-body.has-guide.side-closed {
    display: block;
  }

  .guide-side {
    position: static;
    z-index: auto;
    max-height: none;
    margin-bottom: 16px;
    overflow: visible;
  }

  .guide-side.collapsed .side-toggle {
    flex-direction: row;
    padding: 12px 14px;
  }

  .guide-side.collapsed .side-toggle-label {
    writing-mode: horizontal-tb;
  }

  .guide-side.collapsed .side-chevron {
    margin-left: auto;
  }
}

@media (max-width: 620px) {
  .challenge {
    padding: 20px;
  }

  .challenge-head {
    flex-direction: column;
  }

  .head-badges {
    justify-content: flex-start;
  }
}
</style>

<!-- 확인 가이드의 **강조**·`코드`는 v-html로 주입되므로 scoped 밖에 둔다 -->
<style>
.guide-side .guide mark {
  padding: 0 2px;
  border-radius: 3px;
  color: inherit;
  background: linear-gradient(transparent 58%, var(--slate-tint) 58%);
  box-shadow: inset 0 -1px 0 var(--slate-line);
  font-weight: 700;
}

.guide-side .guide code {
  padding: 0 4px;
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--slate);
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 0.9em;
}
</style>
