<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ChallengeCard from '../components/ui/ChallengeCard.vue'
import ChapterNotes from '../components/ui/ChapterNotes.vue'
import ChapterOrientation from '../components/ui/ChapterOrientation.vue'
import { assignmentsOf, chapters, challengesOf } from '../data/curriculum'
import { notesOf } from '../data/chapterNotes'

/**
 * 현재 선택된 챕터 id — 주소(/learning/4)에서 읽는다.
 * 주소에 담아 두면 "CH04 보고 있어"를 링크로 그대로 보낼 수 있다.
 */
const route = useRoute()
const router = useRouter()

const props = defineProps({
  chapterId: { type: String, default: '' },
})

const DEFAULT_CHAPTER = 2

const selectedChapterId = computed(() => {
  const id = Number(props.chapterId)
  return chapters.some((c) => c.id === id) ? id : DEFAULT_CHAPTER
})

/** 챕터를 고르면 주소를 바꾼다. 화면은 주소를 보고 따라 바뀐다. */
const selectChapter = (id) => {
  router.push({ name: 'learning', params: { chapterId: String(id) } })
  document.getElementById('learning-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// 주소에 챕터가 없으면 기본 챕터를 주소에 채워 둔다(링크를 복사해도 같은 화면이 열리게)
watch(
  () => props.chapterId,
  (value) => {
    if (!value) router.replace({ name: 'learning', params: { chapterId: String(DEFAULT_CHAPTER) } })
  },
  { immediate: true },
)

/** 왼쪽 챕터 메뉴 접기 — 실습할 때 화면을 넓게 쓰기 위함 */
const isNavCollapsed = ref(false)

const selectedChapter = computed(() =>
  chapters.find((chapter) => chapter.id === selectedChapterId.value),
)

/** 교안 본문 정리 — 아직 옮겨 둔 챕터에만 있다 */
const chapterNote = computed(() => notesOf(selectedChapterId.value))

const visibleChallenges = computed(() => challengesOf(selectedChapterId.value))

const chapterAssignments = computed(() => assignmentsOf(selectedChapterId.value))

/**
 * 사이드바에 표시할 챕터별 요약 정보
 * "준비 실습"·"개념 정리"처럼 교안에 Code Challenge가 없는 항목은 세지 않는다.
 */
const chapterStats = computed(() =>
  chapters.map((chapter) => {
    const list = challengesOf(chapter.id)
    const codeOnly = list.filter((c) => c.label.startsWith('Code Challenge'))
    return {
      ...chapter,
      total: codeOnly.length,
      live: list.filter((c) => c.practices.length > 0).length,
      assignments: assignmentsOf(chapter.id).length,
    }
  }),
)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <section class="page-intro">
    <p class="eyebrow">LEARNING &amp; CODE CHALLENGES</p>
    <h1>학습 &amp; 코드 챌린지</h1>
    <p>
      왼쪽에서 챕터를 고르면 해당 챕터의 <strong>코드 챌린지</strong>가 열립니다. 각 챌린지는
      <strong>관련 강의 내용 → 연습 항목 → 실습 화면</strong> 순서로 이어집니다.
    </p>
  </section>

  <section class="learning-layout" :class="{ 'nav-collapsed': isNavCollapsed }">
    <!-- ── 사이드바 ── -->
    <aside class="chapter-nav">
      <div class="nav-head">
        <p v-if="!isNavCollapsed" class="nav-title">학습 로드맵</p>
        <button
          type="button"
          class="nav-toggle"
          :title="isNavCollapsed ? '메뉴 펼치기' : '메뉴 접기'"
          :aria-label="isNavCollapsed ? '메뉴 펼치기' : '메뉴 접기'"
          @click="isNavCollapsed = !isNavCollapsed"
        >
          {{ isNavCollapsed ? '»' : '«' }}
        </button>
      </div>

      <button
        v-for="chapter in chapterStats"
        :key="chapter.id"
        type="button"
        class="chapter-item"
        :class="{ active: chapter.id === selectedChapterId }"
        :title="isNavCollapsed ? `${chapter.title} · ${chapter.slides}` : ''"
        @click="selectChapter(chapter.id)"
      >
        <span class="chapter-no">{{ String(chapter.id).padStart(2, '0') }}</span>
        <span v-if="!isNavCollapsed" class="chapter-info">
          <b>{{ chapter.title }}</b>
          <small>{{ chapter.slides }}</small>
        </span>
        <span v-if="!isNavCollapsed" class="chapter-meta">
          <i
            class="dot"
            :class="{ live: chapter.live, none: !chapter.total }"
            :title="
              chapter.total
                ? `코드 챌린지 ${chapter.total}개${chapter.live ? ` · 실습 화면 ${chapter.live}개` : ''}`
                : '코드 챌린지 없음'
            "
          >
            {{ chapter.total || '–' }}
          </i>
        </span>
      </button>

      <p v-if="!isNavCollapsed" class="nav-legend">
        숫자 = 코드 챌린지 수 &nbsp;·&nbsp; <i class="dot live">n</i> 실습 화면 있음
      </p>

      <button
        type="button"
        class="to-top"
        title="맨 위로"
        aria-label="맨 위로 가기"
        @click="scrollToTop"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 15 6-6 6 6" />
        </svg>
        <span v-if="!isNavCollapsed">맨 위로</span>
      </button>
    </aside>

    <!-- ── 본문 ── -->
    <div id="learning-content" class="learning-content">
      <header class="chapter-head">
        <div>
          <p class="eyebrow">
            {{ selectedChapter.code }} · 교안 {{ selectedChapter.slides }}
          </p>
          <h2>{{ selectedChapter.title }}</h2>
          <p class="chapter-summary">{{ selectedChapter.summary }}</p>

          <div class="topic-chips">
            <span v-for="topic in selectedChapter.topics" :key="topic">{{ topic }}</span>
          </div>
        </div>
      </header>

      <!-- 챕터 문법이 많아 보일 때 먼저 읽는 지도 (있는 챕터만) -->
      <ChapterOrientation
        v-if="selectedChapter.orientation"
        :orientation="selectedChapter.orientation"
      />

      <!-- 교안 본문 정리 — 실습 전에 읽고, 나중에 PDF 대신 여기서 복습한다 -->
      <ChapterNotes v-if="chapterNote" :notes="chapterNote" />

      <div v-if="visibleChallenges.length" class="challenge-stack">
        <ChallengeCard
          v-for="challenge in visibleChallenges"
          :key="challenge.id"
          :challenge="challenge"
        />
      </div>

      <p v-else class="empty-state">
        교안 기준으로 이 챕터에는 코드 챌린지가 없습니다. 아래 <b>제출 과제</b>로 바로 진행합니다.
      </p>

      <!-- 이 챕터에 연결된 제출 과제 -->
      <section v-if="chapterAssignments.length" class="linked-assignments">
        <p class="section-label">이 챕터의 제출 과제</p>
        <RouterLink
          v-for="assignment in chapterAssignments"
          :key="assignment.id"
          class="assignment-link"
          to="/assignments"
        >
          <span class="step">{{ String(assignment.id).padStart(2, '0') }}</span>
          <span>
            <b>{{ assignment.title }}</b>
            <small>{{ assignment.goal }}</small>
          </span>
          <span class="arrow">→</span>
        </RouterLink>
      </section>
    </div>
  </section>
</template>

<style scoped>
.learning-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 34px;
  align-items: start;
}

/* ── 사이드바 ── */
.chapter-nav {
  position: sticky;
  top: 20px;
  display: grid;
  gap: 3px;
  padding: 16px;
  border: 1px solid var(--accent-line);
  border-radius: 16px;
  background: var(--surface);
}

.learning-layout.nav-collapsed {
  grid-template-columns: 62px 1fr;
}

.nav-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.nav-title {
  margin: 0;
  padding-left: 4px;
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.nav-toggle {
  display: grid;
  width: 26px;
  height: 26px;
  margin-left: auto;
  place-items: center;
  border: 1px solid var(--accent-line);
  border-radius: 7px;
  color: var(--muted);
  background: var(--surface);
  font-size: 13px;
  cursor: pointer;
}

.nav-toggle:hover {
  border-color: var(--line-strong);
  color: var(--accent);
  background: var(--accent-tint);
}

/* 접힌 상태 */
.nav-collapsed .chapter-item {
  justify-content: center;
  padding: 10px 0;
}

.nav-collapsed .chapter-no {
  font-size: 13px;
}

.chapter-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.chapter-item:hover {
  background: var(--accent-tint);
}

.chapter-item.active {
  background: var(--accent-tint);
}

.chapter-no {
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
}

.chapter-item.active .chapter-no {
  color: var(--accent);
}

.chapter-info {
  display: grid;
  gap: 1px;
  margin-right: auto;
}

.chapter-info b {
  color: var(--ink-soft);
  font-size: 13.5px;
  font-weight: 700;
}

.chapter-item.active .chapter-info b {
  color: var(--ink);
  font-weight: 800;
}

.chapter-info small {
  color: var(--muted);
  font-size: 11px;
}

.dot {
  display: grid;
  min-width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 10px;
  color: var(--faint);
  background: var(--accent-tint);
  font-size: 11px;
  font-style: normal;
  font-weight: 800;
  line-height: 1;
}

.dot.live {
  color: var(--on-accent);
  background: var(--accent);
}

.dot.none {
  color: var(--line-strong);
  background: var(--accent-tint);
}

.nav-legend {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 12px 0 0;
  padding: 11px 4px 0;
  border-top: 1px solid var(--accent-tint);
  color: var(--line-strong);
  font-size: 11px;
}

/* 맨 위로 가기 — 로드맵 맨 아래 */
.to-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 8px;
  padding: 9px 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--muted);
  background: transparent;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease,
    background 0.15s ease;
}

.to-top:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.to-top svg {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ── 본문 헤더 ── */
.chapter-head h2 {
  margin: 0;
  color: var(--ink);
  font-size: 32px;
  letter-spacing: -0.04em;
}

.chapter-summary {
  max-width: 700px;
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.75;
}

/* ── 본문 헤더 ── */
.chapter-head h2 {
  margin: 0;
  color: var(--ink);
  font-size: 32px;
  letter-spacing: -0.04em;
}

.chapter-summary {
  max-width: 700px;
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.75;
}

.topic-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  /* 아래 코드 챌린지 카드와 붙어 보이지 않게 여백을 둔다 */
  margin: 16px 0 22px;
}

.topic-chips span {
  padding: 5px 11px;
  border: 1px solid var(--line);
  border-radius: 20px;
  color: var(--muted);
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

/* ── 챌린지 목록 ── */
.challenge-stack {
  display: grid;
  gap: 20px;
}

.empty-state {
  padding: 40px 24px;
  border: 1px dashed var(--accent-line);
  border-radius: 12px;
  color: var(--faint);
  background: var(--surface);
  font-size: 14px;
  line-height: 1.75;
  text-align: center;
}

.empty-state b {
  color: var(--ink-soft);
}

/* ── 연결된 과제 ── */
.linked-assignments {
  margin-top: 34px;
  padding-top: 26px;
  border-top: 1px solid var(--accent-tint);
}

.section-label {
  margin: 0 0 12px;
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.assignment-link {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 8px;
  padding: 16px 18px;
  border: 1px solid var(--accent-line);
  border-radius: 12px;
  background: var(--surface);
}

.assignment-link:hover {
  border-color: var(--line-strong);
  background: var(--surface);
}

.step {
  display: grid;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  place-items: center;
  border-radius: 50%;
  color: var(--on-accent);
  background: var(--accent);
  font-size: 13px;
  font-weight: 900;
}

.assignment-link span:nth-child(2) {
  display: grid;
  gap: 3px;
  margin-right: auto;
}

.assignment-link b {
  color: var(--ink);
  font-size: 15px;
}

.assignment-link small {
  color: var(--faint);
  font-size: 12.5px;
}

.arrow {
  color: var(--accent);
  font-weight: 800;
}

@media (max-width: 900px) {
  .learning-layout {
    grid-template-columns: 1fr;
  }

  .chapter-nav {
    position: static;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  }

  /* 제목줄과 범례는 한 줄을 통째로 쓴다.
     .nav-title이 아니라 이를 감싼 .nav-head를 지정해야 한다.
     (안 그러면 헤더가 첫 칸을 차지해 01번 챕터가 두 번째 칸부터 시작한다) */
  .nav-head,
  .nav-legend,
  .to-top {
    grid-column: 1 / -1;
  }

  /* 좁은 화면에서는 접기 버튼이 의미가 없다 */
  .nav-toggle {
    display: none;
  }
}
</style>
