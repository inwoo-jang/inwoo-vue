<script setup>
import { computed, ref } from 'vue'

/**
 * 챕터 이론 정리 — 교안 본문을 이 화면에서 읽는다.
 *
 * 실습(ChallengeCard) 앞에 놓인다. 손을 움직이기 전에 읽을 것,
 * 그리고 나중에 복습할 때 PDF 대신 열어 볼 것이 여기에 있다.
 *
 * 섹션마다 가진 재료가 다르므로(표만 있는 것, 코드만 있는 것) v-if 로 있는 것만 그린다.
 */
const props = defineProps({
  notes: { type: Object, required: true },
})

/**
 * 기본은 접어 둔다.
 * 실습을 하러 온 사람에게 긴 글이 먼저 펼쳐져 있으면 스크롤이 길어진다.
 * 복습하러 온 사람만 열어 보면 된다.
 */
const isOpen = ref(false)

/** 지금 펼쳐 둔 섹션의 인덱스. -1 이면 전부 접힘 */
const openSection = ref(0)

const toggleSection = (index) => {
  openSection.value = openSection.value === index ? -1 : index
}

/** body 는 문자열 하나일 수도, 여러 문단일 수도 있다 */
const paragraphsOf = (body) => (Array.isArray(body) ? body : [body])

const sectionCount = computed(() => props.notes.sections.length)
</script>

<template>
  <section class="notes" :class="{ closed: !isOpen }">
    <button class="notes-toggle" type="button" :aria-expanded="isOpen" @click="isOpen = !isOpen">
      <span class="marker" aria-hidden="true">📖</span>
      <span class="toggle-title">
        교안 정리 — 이 챕터를 여기서 복습합니다
        <small>{{ notes.range }} · {{ sectionCount }}개 항목</small>
      </span>
      <span class="chevron" aria-hidden="true">{{ isOpen ? '−' : '+' }}</span>
    </button>

    <div v-show="isOpen" class="notes-body">
      <p class="lead">{{ notes.lead }}</p>

      <!-- ── 본문 ── -->
      <article
        v-for="(section, index) in notes.sections"
        :key="section.title"
        class="note-section"
        :class="{ open: openSection === index }"
      >
        <button
          class="section-head"
          type="button"
          :aria-expanded="openSection === index"
          @click="toggleSection(index)"
        >
          <span class="no">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="section-title">{{ section.title }}</span>
          <span v-if="section.slide" class="slide">{{ section.slide }}</span>
        </button>

        <div v-show="openSection === index" class="section-body">
          <!-- body 가 없는 섹션(표만 있는 것)도 있으므로 있을 때만 그린다 -->
          <template v-if="section.body">
            <p v-for="(para, i) in paragraphsOf(section.body)" :key="i" class="para">{{ para }}</p>
          </template>

          <ul v-if="section.bullets" class="bullets">
            <li v-for="item in section.bullets" :key="item">{{ item }}</li>
          </ul>

          <!-- 표는 좁은 화면에서 가로로 넘칠 수 있으므로 자기 안에서 스크롤된다 -->
          <div v-if="section.table" class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th v-for="head in section.table.head" :key="head">{{ head }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, r) in section.table.rows" :key="r">
                  <td v-for="(cell, c) in row" :key="c">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure v-if="section.code" class="code">
            <figcaption>{{ section.code.caption }}</figcaption>
            <pre><code>{{ section.code.text }}</code></pre>
          </figure>

          <p v-if="section.note" class="note-line">
            <span aria-hidden="true">⚠</span>
            {{ section.note }}
          </p>
        </div>
      </article>

      <!-- ── 복습 체크리스트 ── -->
      <section v-if="notes.checklist" class="checklist">
        <p class="block-label">이만큼 말할 수 있으면 이 챕터는 넘어가도 됩니다</p>
        <ul>
          <li v-for="item in notes.checklist" :key="item">{{ item }}</li>
        </ul>
      </section>

      <!-- ── 스스로 확인 ── -->
      <section v-if="notes.quiz" class="quiz">
        <p class="block-label">스스로 확인 — 답을 떠올린 뒤 펼쳐 보세요</p>
        <details v-for="item in notes.quiz" :key="item.q">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </section>
    </div>
  </section>
</template>

<style scoped>
.notes {
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
  overflow: hidden;
}

.notes-toggle {
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding: 14px 16px;
  border: 0;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  font: inherit;
  text-align: left;
}

.notes:not(.closed) .notes-toggle {
  border-bottom: 1px solid var(--line);
}

.marker {
  font-size: 15px;
}

.toggle-title {
  display: grid;
  gap: 2px;
  flex: 1;
  font-size: 14px;
  font-weight: 700;
}

.toggle-title small {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 400;
}

.chevron {
  color: var(--muted);
  font-size: 16px;
}

.notes-body {
  padding: 16px;
}

.lead {
  margin: 0 0 14px;
  padding-left: 12px;
  border-left: 2px solid var(--accent-line);
  color: var(--muted);
  font-size: 13px;
  line-height: 1.75;
}

/* ── 섹션 ── */
.note-section + .note-section {
  margin-top: 6px;
}

.section-head {
  display: flex;
  gap: 10px;
  align-items: baseline;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--paper);
  color: var(--ink);
  cursor: pointer;
  font: inherit;
  text-align: left;
}

.note-section.open .section-head {
  border-color: var(--accent-line);
  background: var(--accent-tint);
}

.no {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
}

.section-title {
  flex: 1;
  font-size: 13.5px;
  font-weight: 600;
}

.slide {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  white-space: nowrap;
}

.section-body {
  padding: 12px 12px 4px;
}

.para {
  margin: 0 0 10px;
  color: var(--ink-soft);
  font-size: 13px;
  line-height: 1.8;
}

.bullets {
  margin: 0 0 10px;
  padding-left: 18px;
  color: var(--ink-soft);
  font-size: 13px;
  line-height: 1.8;
}

.bullets li + li {
  margin-top: 4px;
}

/* ── 표 ── */
.table-wrap {
  margin: 0 0 12px;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 6px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
}

th,
td {
  padding: 8px 10px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
  line-height: 1.65;
}

th {
  background: var(--surface-sunken);
  color: var(--ink);
  font-weight: 700;
  white-space: nowrap;
}

td {
  color: var(--ink-soft);
}

tbody tr:last-child td {
  border-bottom: 0;
}

td:first-child {
  color: var(--ink);
  font-weight: 600;
  white-space: nowrap;
}

/* ── 코드 ── */
.code {
  margin: 0 0 12px;
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow: hidden;
}

figcaption {
  padding: 6px 10px;
  border-bottom: 1px solid var(--line);
  background: var(--surface-sunken);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
}

pre {
  margin: 0;
  padding: 12px;
  overflow-x: auto;
  background: var(--paper);
}

code {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.7;
  white-space: pre;
}

/* ── 강조 한 줄 ── */
.note-line {
  display: flex;
  gap: 8px;
  margin: 0 0 12px;
  padding: 9px 12px;
  border: 1px solid var(--signal-line);
  border-radius: 6px;
  background: var(--signal-tint);
  color: var(--signal);
  font-size: 12.5px;
  line-height: 1.7;
}

/* ── 체크리스트 · 퀴즈 ── */
.block-label {
  margin: 0 0 8px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
}

.checklist,
.quiz {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
}

.checklist ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.checklist li {
  position: relative;
  padding-left: 22px;
  color: var(--ink-soft);
  font-size: 13px;
  line-height: 1.9;
}

.checklist li::before {
  content: '☐';
  position: absolute;
  left: 0;
  color: var(--accent);
}

details {
  border: 1px solid var(--line);
  border-radius: 6px;
  background: var(--paper);
}

details + details {
  margin-top: 6px;
}

summary {
  padding: 9px 12px;
  color: var(--ink);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

details[open] summary {
  border-bottom: 1px solid var(--line);
}

details p {
  margin: 0;
  padding: 10px 12px;
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.8;
}
</style>
