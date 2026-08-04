<script setup>
import { computed, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 라우터가 하는 일을 손으로 만져 보는 실습.
 *
 * 진짜 vue-router를 이 안에 또 띄우면 사이트 주소까지 바뀌어 버리므로,
 * "주소표를 보고 화면을 고른다"는 원리만 그대로 흉내 낸 미니 라우터다.
 * 원리는 완전히 같다 — path 를 보고 component 를 고른다.
 */

/** 주소표 (routes) — 진짜 router/index.js 와 같은 모양 */
const routes = [
  { path: '/', name: 'home', label: '홈', body: '오늘의 날씨 목록이 여기 나옵니다.' },
  { path: '/about', name: 'about', label: '소개', body: '이 앱이 무엇인지 설명하는 화면입니다.' },
  {
    path: '/weather/:cityId',
    name: 'detail',
    label: '도시 상세',
    body: '한 도시의 시간별 날씨를 봅니다.',
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', label: '없는 페이지', body: '404' },
]

/** 지금 주소 */
const currentPath = ref('/')

/** 주소창에 직접 칠 수 있게 */
const typed = ref('/')

/**
 * 주소를 보고 어떤 화면을 그릴지 고른다.
 * 위에서부터 검사하고, 맨 마지막 catch-all 이 나머지를 전부 받는다.
 */
const matched = computed(() => {
  for (const route of routes) {
    if (route.path === '/:pathMatch(.*)*') continue
    const pattern = '^' + route.path.replace(/:([\w]+)/g, '(?<$1>[^/]+)') + '$'
    const found = currentPath.value.match(new RegExp(pattern))
    if (found) return { route, params: found.groups ?? {} }
  }
  return { route: routes[routes.length - 1], params: {} }
})

const go = (path) => {
  currentPath.value = path
  typed.value = path
}

/** 새로고침을 흉내 낸다 — a 태그를 눌렀을 때 무슨 일이 벌어지는지 보기 위함 */
const counter = ref(0)
const wiped = ref(false)

const hardReload = () => {
  wiped.value = true
  counter.value = 0
  setTimeout(() => (wiped.value = false), 1400)
}
</script>

<template>
  <section class="practice-card">
    <h2>
      주소 → 화면, 라우터가 하는 일
      <ConceptHelp
        text="라우터는 주소표(routes)를 들고 있다가, 주소가 바뀌면 거기 맞는 컴포넌트를 골라 RouterView 자리에 끼워 넣습니다. 아래는 그 과정을 그대로 흉내 낸 미니 라우터입니다. 진짜 vue-router를 이 안에 또 띄우면 이 사이트의 주소까지 바뀌므로 원리만 재현했습니다."
      />
    </h2>

    <!-- ① 주소표 -->
    <div class="area">
      <h3>① 주소표 (routes)</h3>
      <ul class="routes">
        <li v-for="route in routes" :key="route.path" :class="{ on: route === matched.route }">
          <code class="path">{{ route.path }}</code>
          <span class="arrow" aria-hidden="true">→</span>
          <span class="name">{{ route.label }}</span>
          <span v-if="route === matched.route" class="hit">지금 이것</span>
        </li>
      </ul>
    </div>

    <!-- ② 주소창 -->
    <div class="area">
      <h3>② 주소창</h3>
      <div class="bar">
        <span class="origin">myapp.com</span>
        <input v-model="typed" @keyup.enter="go(typed)" />
        <button type="button" @click="go(typed)">이동</button>
      </div>
      <p class="links">
        <button type="button" class="link" @click="go('/')">/</button>
        <button type="button" class="link" @click="go('/about')">/about</button>
        <button type="button" class="link" @click="go('/weather/seoul')">/weather/seoul</button>
        <button type="button" class="link" @click="go('/weather/busan')">/weather/busan</button>
        <button type="button" class="link" @click="go('/hello')">/hello (없는 주소)</button>
      </p>
    </div>

    <!-- ③ RouterView -->
    <div class="area">
      <h3>③ &lt;RouterView /&gt; — 화면이 갈아끼워지는 자리</h3>
      <div class="viewport" :class="{ missing: matched.route.name === 'not-found' }">
        <p class="view-name">{{ matched.route.label }}</p>
        <p class="view-body">{{ matched.route.body }}</p>
        <p v-if="Object.keys(matched.params).length" class="params">
          <span class="tag">route.params</span>
          <code>{{ matched.params }}</code>
        </p>
      </div>
    </div>

    <!-- ④ a 태그가 위험한 이유 -->
    <div class="area">
      <h3>④ 왜 &lt;a href&gt; 를 쓰면 안 되나</h3>
      <p class="explain">
        아래 숫자는 화면이 기억하고 있는 값입니다(<code>ref</code>). 두 버튼을 각각 눌러 보세요.
      </p>
      <div class="ab">
        <div class="counter" :class="{ wiped }">
          <span class="tick">{{ counter }}</span>
          <button type="button" @click="counter++">+1 올리기</button>
        </div>
        <div class="ab-buttons">
          <button type="button" class="good" @click="go('/about')">
            RouterLink 로 이동
          </button>
          <button type="button" class="bad" @click="hardReload">
            &lt;a href&gt; 로 이동
          </button>
        </div>
      </div>
      <p class="verdict" :class="{ show: wiped }">
        새로고침이 일어나 <b>기억하던 값이 0으로 초기화</b>되었습니다.
      </p>
    </div>
  </section>
</template>

<style scoped>
h3 {
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

.area + .area {
  margin-top: 20px;
}

.explain {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.explain code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.92em;
}

/* ── 주소표 ── */
.routes {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.routes li {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--surface);
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}

.routes li.on {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.path {
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.arrow {
  color: var(--faint);
}

.name {
  color: var(--muted);
  font-size: 12.5px;
}

.hit {
  margin-left: auto;
  padding: 2px 9px;
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  font-size: 10.5px;
  font-weight: 700;
}

/* ── 주소창 ── */
.bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
}

.origin {
  display: grid;
  padding: 0 6px 0 15px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 12px;
  place-items: center;
}

.bar input {
  min-width: 0;
  flex: 1;
  padding: 10px 4px;
  border: 0;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-family: var(--font-mono);
  font-size: 13px;
  outline: none;
}

.bar button {
  padding: 0 16px;
  border: 0;
  border-left: 1px solid var(--line);
  background: var(--paper);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
}

.bar button:hover {
  color: var(--accent);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0 0;
}

.link {
  padding: 5px 11px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.link:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ── RouterView ── */
.viewport {
  padding: 22px 20px;
  border: 2px dashed var(--accent);
  border-radius: 12px;
  background: var(--paper);
  text-align: center;
}

.viewport.missing {
  border-color: var(--signal);
}

.view-name {
  margin: 0 0 6px;
  color: var(--accent);
  font-size: 17px;
  font-weight: 700;
}

.viewport.missing .view-name {
  color: var(--signal);
}

.view-body {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.params {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 12px 0 0;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--surface);
}

.params .tag {
  color: var(--faint);
  font-size: 10.5px;
  font-weight: 700;
}

.params code {
  font-family: var(--font-mono);
  font-size: 12px;
}

/* ── a 태그 비교 ── */
.ab {
  display: grid;
  gap: 12px;
}

.counter {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
  transition: background 0.2s ease;
}

.counter.wiped {
  background: var(--signal-tint);
}

.tick {
  min-width: 46px;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 700;
  text-align: center;
}

.counter button {
  padding: 7px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
}

.ab-buttons {
  display: grid;
  gap: 8px;
}

.ab-buttons button {
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}

.ab-buttons .good {
  border-color: var(--accent);
  color: var(--accent);
}

.ab-buttons .bad {
  border-color: var(--signal);
  color: var(--signal);
}

.verdict {
  height: 0;
  margin: 10px 0 0;
  color: var(--signal);
  font-size: 12.5px;
  font-weight: 600;
  opacity: 0;
  text-align: center;
  transition: opacity 0.2s ease;
}

.verdict.show {
  height: auto;
  opacity: 1;
}

@media (min-width: 620px) {
  .ab {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}
</style>
