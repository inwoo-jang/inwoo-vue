<script setup>
import { computed } from 'vue'

/**
 * 9단계 결과물 — 최종 완성과 배포 (교안 274쪽)
 *
 * 앞의 여덟 단계는 "화면"이 결과물이었지만 이 단계는 그렇지 않다.
 * ESLint 를 통과시키고, 키를 분리하고, 빌드해서 올리는 일은
 * 눈에 보이는 화면을 남기지 않는다.
 *
 * 그래서 이 카드는 화면 대신 "지금 이 페이지가 어떤 상태로 만들어졌는지"를 보여 준다.
 * 아래 값들은 적어 둔 것이 아니라 import.meta.env 에서 실제로 읽는다 —
 * 개발 서버에서 열면 development 로, 배포본에서 열면 production 으로 나온다.
 */

/** 빌드 모드 — 이 화면이 개발 서버인지 배포본인지 */
const mode = import.meta.env.MODE

/** base 경로 — GitHub Pages 는 저장소 이름이 앞에 붙는다 */
const base = import.meta.env.BASE_URL

/**
 * 키가 번들에 들어갔는지.
 * VITE_ 로 시작하는 값은 빌드할 때 파일 안에 그대로 박히므로,
 * 배포본에서 이 값이 비어 있어야 안전하다.
 */
const keyInBundle = (import.meta.env.VITE_OPENWEATHER_API_KEY ?? '') !== ''

const isProd = computed(() => mode === 'production')

/**
 * 요구사항 다섯 가지.
 * how 는 직접 확인해 볼 수 있는 방법이다 — 여기 적힌 것을 믿으라는 뜻이 아니라,
 * 터미널에서 같은 명령을 쳐 보면 같은 결과가 나온다는 뜻이다.
 */
const REQUIREMENTS = [
  {
    title: 'ESLint 로 점검해 Error 0개',
    how: 'npm run lint:check',
    detail:
      'eslint.config.js 에 Vue 3 규칙을 두고, 형식은 Prettier 에 넘겨 서로 다투지 않게 했다. 실습 중 일부러 남긴 위반(Props 직접 수정)은 그 한 줄만 주석으로 끈다.',
  },
  {
    title: 'API Key 를 환경변수로 분리',
    how: 'import.meta.env.VITE_OPENWEATHER_API_KEY',
    detail:
      '코드에 키를 적지 않는다. .env.example 에는 어떤 키가 필요한지만 적어 두고 실제 값은 .env.local 에 넣는다.',
  },
  {
    title: '.gitignore 로 키와 환경 파일 보호',
    how: '.gitignore 의 .env*',
    detail:
      '.env.example 만 일부러 추적한다 — 값이 없는 견본이라 올라가도 안전하고, 다른 사람이 무엇을 채워야 하는지 알 수 있다.',
  },
  {
    title: 'npm run build 로 dist/ 생성',
    how: 'npm run build',
    detail:
      'Vite 가 소스를 묶어 dist/ 에 정적 파일로 낸다. 이 화면도 그 결과물 안에서 돌고 있다.',
  },
  {
    title: 'GitHub Pages 에 정적 배포',
    how: 'npm run deploy',
    detail:
      '빌드 → 404.html 복사(SPA 라 새로고침에 필요) → .nojekyll 생성(Jekyll 이 _ 로 시작하는 파일을 지우지 않게) → gh-pages 브랜치에 올린다.',
  },
]
</script>

<template>
  <section class="report">
    <header class="head">
      <p class="eyebrow">STAGE 09 · 교안 274쪽</p>
      <h2>최종 완성과 배포</h2>
      <p class="lead">
        이 단계에는 새로 만든 화면이 없습니다. 대신 앞의 여덟 단계를 하나로 묶어 내보내는 일을
        했습니다. 아래 값은 적어 둔 것이 아니라
        <code>import.meta.env</code> 에서 지금 읽은 것입니다.
      </p>
    </header>

    <!-- 지금 이 화면의 실제 상태 -->
    <div class="live">
      <div class="cell">
        <p class="c-label">빌드 모드</p>
        <p class="c-value" :class="{ prod: isProd }">{{ mode }}</p>
        <p class="c-note">
          {{ isProd ? '배포본에서 보고 있습니다.' : '개발 서버에서 보고 있습니다.' }}
        </p>
      </div>

      <div class="cell">
        <p class="c-label">base 경로</p>
        <p class="c-value">{{ base }}</p>
        <p class="c-note">
          {{
            base === '/'
              ? '로컬이라 최상위입니다.'
              : 'GitHub Pages 는 저장소 이름이 앞에 붙습니다.'
          }}
        </p>
      </div>

      <div class="cell">
        <p class="c-label">번들 안의 API Key</p>
        <p class="c-value" :class="keyInBundle ? 'warn' : 'prod'">
          {{ keyInBundle ? '들어 있음' : '비어 있음' }}
        </p>
        <p class="c-note">
          {{
            keyInBundle
              ? '로컬 .env.local 의 값이 잡혔습니다. 배포 명령은 이 값을 비우고 빌드합니다.'
              : 'VITE_ 값은 파일에 그대로 박히므로, 배포본에서는 비어 있어야 안전합니다.'
          }}
        </p>
      </div>
    </div>

    <!-- 요구사항 다섯 -->
    <ol class="reqs">
      <li v-for="(item, i) in REQUIREMENTS" :key="item.title">
        <span class="no">{{ String(i + 1).padStart(2, '0') }}</span>
        <div class="body">
          <p class="r-title">{{ item.title }}</p>
          <p class="r-detail">{{ item.detail }}</p>
          <code class="r-how">{{ item.how }}</code>
        </div>
      </li>
    </ol>

    <p class="foot">
      키가 없어도 앱은 멈추지 않습니다. OpenWeather 키가 비면 키가 필요 없는
      <b>Open-Meteo</b> 로 자동 전환되도록 만들어 두었습니다 — 배포본에서 날씨가 나오는 이유입니다.
    </p>
  </section>
</template>

<style scoped>
.report {
  display: grid;
  gap: 22px;
}

.eyebrow {
  margin: 0 0 6px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.head h2 {
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 21px;
  letter-spacing: -0.02em;
}

.lead {
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.85;
}

.lead code,
.r-how {
  padding: 1px 6px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

/* 지금 상태 */
.live {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 10px;
}

.cell {
  display: grid;
  gap: 5px;
  padding: 15px 17px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
}

.c-label {
  margin: 0;
  color: var(--faint);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.c-value {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 17px;
  font-weight: 800;
}

/* 안전한 상태만 강조색을 준다 — 색이 곧 판정이 되게 */
.c-value.prod {
  color: var(--accent);
}

.c-value.warn {
  color: var(--signal);
}

.c-note {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
}

/* 요구사항 */
.reqs {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: none;
}

.reqs li {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
}

.no {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 800;
}

.body {
  display: grid;
  gap: 6px;
  justify-items: start;
}

.r-title {
  margin: 0;
  color: var(--ink);
  font-size: 14px;
  font-weight: 700;
}

.r-detail {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.75;
}

.foot {
  margin: 0;
  padding: 14px 17px;
  border: 1px dashed var(--accent);
  border-radius: 12px;
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.8;
}
</style>
