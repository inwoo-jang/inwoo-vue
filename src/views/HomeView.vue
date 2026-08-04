<script setup>
import { RouterLink } from 'vue-router'
import {
  assignments,
  chapters,
  codeChallengeCount,
  doneAssignmentCount,
  liveChallengeCount,
} from '../data/curriculum'

const progressPercent = Math.round((doneAssignmentCount / assignments.length) * 100)
</script>

<template>
  <section class="hero">
    <div>
      <p class="eyebrow">LEARN · PRACTICE · SUBMIT</p>
      <h1>Vue를 배우고,<br /><span>하나의 결과물</span>로 완성하세요.</h1>
      <p class="hero-copy">
        코드 챌린지로 개념을 익히고, 단계별 제출 과제로 날씨 웹 애플리케이션을 발전시킵니다.
      </p>
      <div class="hero-actions">
        <RouterLink class="primary-button" to="/learning">학습 시작하기</RouterLink>
        <RouterLink class="secondary-button" to="/assignments">제출 과제 보기</RouterLink>
      </div>
    </div>
    <div class="progress-card">
      <p class="card-label">MY LEARNING</p>
      <strong>{{ doneAssignmentCount }} / {{ assignments.length }}</strong>
      <span>제출 과제 진행률</span>
      <div class="progress-track"><i :style="{ width: `${progressPercent}%` }"></i></div>
      <RouterLink to="/project">최종 결과물 확인 →</RouterLink>
    </div>
  </section>

  <section class="section-block">
    <div class="section-heading">
      <div>
        <p class="eyebrow">CURRICULUM</p>
        <h2>학습 영역</h2>
      </div>
      <RouterLink to="/learning">전체 학습 보기 →</RouterLink>
    </div>
    <div class="chapter-grid">
      <article v-for="chapter in chapters.slice(0, 4)" :key="chapter.id" class="info-card">
        <span class="number">{{ String(chapter.id).padStart(2, '0') }}</span>
        <h3>{{ chapter.title }}</h3>
        <p>{{ chapter.subtitle }}</p>
        <small>교안 {{ chapter.slides }}</small>
      </article>
    </div>
  </section>

  <section class="section-block">
    <div class="section-heading">
      <div>
        <p class="eyebrow">SUBMISSION PROJECT</p>
        <h2>하나의 날씨 프로젝트</h2>
      </div>
      <RouterLink to="/assignments">과제 전체 보기 →</RouterLink>
    </div>
    <div class="project-strip">
      <div>
        <span class="project-icon">☁</span>
        <h3>Weather Dashboard</h3>
        <p>Mockup에서 API 연동과 배포까지, 과제 결과물이 순서대로 이어집니다.</p>
      </div>
      <div class="mini-stats">
        <strong>{{ codeChallengeCount }}</strong><span>개 코드 챌린지</span>
        <strong>{{ liveChallengeCount }}</strong><span>개 실습 화면 연결됨</span>
        <strong>{{ assignments.length }}</strong><span>단계별 제출 과제</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 56px;
  align-items: center;
  padding: 56px 0 72px;
}

.eyebrow { margin: 0 0 12px; color: var(--accent); font-size: 12px; font-weight: 800; letter-spacing: 0.14em; }
h1 { margin: 0; color: var(--ink); font-size: clamp(38px, 6vw, 68px); line-height: 1.12; letter-spacing: -0.05em; }
h1 span { color: var(--accent); }
.hero-copy { max-width: 560px; margin: 24px 0; color: var(--muted); font-size: 17px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 10px; }
.primary-button, .secondary-button { padding: 12px 18px; border-radius: 9px; font-weight: 800; }
.primary-button { color: var(--on-accent); background: var(--accent); }
.secondary-button { border: 1px solid var(--accent-line); color: var(--accent); background: var(--surface); }
.progress-card { padding: 28px; border: 1px solid var(--accent-line); border-radius: 18px; background: var(--surface); box-shadow: 0 18px 40px rgba(46, 107, 79, 0.08); }
.card-label { margin: 0 0 12px; color: var(--muted); font-size: 11px; font-weight: 800; letter-spacing: 0.12em; }
.progress-card strong { display: block; color: var(--ink); font-size: 48px; line-height: 1; }
.progress-card span { display: block; margin-top: 8px; color: var(--faint); }
.progress-track { height: 8px; margin: 22px 0 14px; overflow: hidden; border-radius: 10px; background: var(--accent-tint); }
.progress-track i { display: block; width: 12.5%; height: 100%; border-radius: inherit; background: var(--accent); }
.progress-card a, .section-heading a { color: var(--accent); font-size: 14px; font-weight: 800; }
.section-block { margin-top: 24px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; margin-bottom: 18px; }
h2 { margin: 0; color: var(--ink); font-size: 28px; letter-spacing: -0.04em; }
.chapter-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.info-card { min-height: 145px; padding: 20px; border: 1px solid var(--accent-line); border-radius: 14px; background: var(--surface); }
.info-card .number { color: var(--accent); font-size: 13px; font-weight: 800; }
h3 { margin: 14px 0 7px; color: var(--ink); font-size: 18px; }
.info-card p, .project-strip p { margin: 0; color: var(--muted); font-size: 14px; }
.info-card small { display: block; margin-top: 10px; color: var(--muted); font-size: 11.5px; }
.project-strip { display: flex; align-items: center; justify-content: space-between; gap: 28px; padding: 28px; border-radius: 18px; color: var(--on-accent); background: linear-gradient(120deg, var(--ink), var(--accent)); }
.project-strip h3 { margin: 10px 0 5px; color: var(--on-accent); font-size: 25px; }
.project-strip p { color: var(--accent-tint); }
.project-icon { font-size: 34px; }
.mini-stats { display: grid; grid-template-columns: auto auto; gap: 5px 12px; padding: 18px 22px; border: 1px solid rgba(255,255,255,.25); border-radius: 12px; background: rgba(255,255,255,.1); }
.mini-stats strong { font-size: 22px; text-align: right; }
.mini-stats span { color: var(--accent-line); font-size: 13px; }
@media (max-width: 760px) { .hero { grid-template-columns: 1fr; padding-top: 24px; } .chapter-grid { grid-template-columns: repeat(2, 1fr); } .project-strip { align-items: flex-start; flex-direction: column; } }
@media (max-width: 460px) { .chapter-grid { grid-template-columns: 1fr; } .section-heading { align-items: flex-start; flex-direction: column; gap: 8px; } }
</style>
