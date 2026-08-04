<script setup>
import { computed, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * useRoute() 와 useRouter() 를 손으로 만져 보는 실습.
 *
 *   useRoute()  = 지금 이 페이지의 "정보"를 읽는다      (읽기)
 *   useRouter() = 페이지를 "옮긴다"                     (쓰기)
 *
 * 진짜 라우터를 이 안에 또 띄우면 사이트 주소까지 바뀌므로,
 * 히스토리 스택과 주소 해석만 그대로 흉내 냈다. 원리는 같다.
 */

/** 히스토리 스택 — 뒤로가기가 왜 되는지 눈으로 보기 위해 직접 쌓는다 */
const history = ref(['/'])
const cursor = ref(0)

const currentUrl = computed(() => history.value[cursor.value])

/** 주소 문자열 → route 객체 (path · params · query · name) */
const route = computed(() => {
  const [path, search = ''] = currentUrl.value.split('?')

  const query = {}
  for (const pair of search.split('&').filter(Boolean)) {
    const [k, v = ''] = pair.split('=')
    query[decodeURIComponent(k)] = decodeURIComponent(v)
  }

  // 주소표에서 맞는 줄을 찾아 동적 세그먼트(:cityId)를 뽑는다
  const TABLE = [
    { name: 'WeatherHome', path: '/' },
    { name: 'WeatherDetail', path: '/weather/:cityId' },
    { name: 'UserPosts', path: '/user/:userId/posts' },
    { name: 'Search', path: '/search' },
  ]
  for (const row of TABLE) {
    const re = new RegExp('^' + row.path.replace(/:(\w+)/g, '(?<$1>[^/]+)') + '$')
    const hit = path.match(re)
    if (hit) return { name: row.name, path, params: hit.groups ?? {}, query }
  }
  return { name: 'NotFound', path, params: {}, query }
})

/** ── useRouter() 흉내 ── */
const push = (url) => {
  // 현재 위치 뒤쪽(앞으로가기 기록)은 버리고 새 기록을 쌓는다
  history.value = [...history.value.slice(0, cursor.value + 1), url]
  cursor.value = history.value.length - 1
}

const replace = (url) => {
  // 지금 기록을 덮어쓴다 — 뒤로 가면 여기가 아니라 그 이전으로 간다
  history.value = [...history.value.slice(0, cursor.value), url]
  cursor.value = history.value.length - 1
}

const go = (step) => {
  const next = cursor.value + step
  if (next >= 0 && next < history.value.length) cursor.value = next
}

const canBack = computed(() => cursor.value > 0)
const canForward = computed(() => cursor.value < history.value.length - 1)

/** 교안 171쪽 표의 예시들 */
const EXAMPLES = [
  { label: "router.push('/about')", run: () => push('/about'), note: '가장 단순한 형태' },
  {
    label: "router.push({ name: 'WeatherDetail', params: { cityId: 'seoul' } })",
    run: () => push('/weather/seoul'),
    note: '이름 + 동적 세그먼트',
  },
  {
    label: "router.push({ name: 'Search', query: { q: 'vue' } })",
    run: () => push('/search?q=vue'),
    note: '물음표 뒤 쿼리',
  },
  {
    label: "router.push({ name: 'UserPosts', params: { userId: 42 } })",
    run: () => push('/user/42/posts'),
    note: '중간 위치 동적 세그먼트',
  },
  {
    label: "router.replace('/login')",
    run: () => replace('/login'),
    note: '기록을 덮어쓴다 — 뒤로가기로 못 돌아온다',
    danger: true,
  },
]
</script>

<template>
  <section class="practice-card">
    <h2>
      useRoute() 로 읽고, useRouter() 로 옮긴다
      <ConceptHelp
        text="이름이 한 글자 차이라 헷갈립니다. useRoute()는 '지금 이 페이지의 정보'를 읽는 것이고(읽기 전용), useRouter()는 '페이지를 옮기는 리모컨'입니다(동작). 아래에서 버튼을 눌러 주소를 옮기면 위쪽 route 객체가 어떻게 바뀌는지 보세요."
      />
    </h2>

    <!-- 주소 -->
    <div class="area">
      <div class="urlbar">
        <span class="origin">myapp.com</span>
        <span class="url">{{ currentUrl }}</span>
      </div>
    </div>

    <!-- useRoute() -->
    <div class="area">
      <h3>useRoute() — 지금 페이지의 정보 <span class="tag read">읽기</span></h3>
      <dl class="route">
        <dt>route.path</dt>
        <dd><code>{{ route.path }}</code></dd>
        <dt>route.name</dt>
        <dd><code>{{ route.name }}</code></dd>
        <dt>route.params</dt>
        <dd :class="{ empty: !Object.keys(route.params).length }">
          <code>{{ route.params }}</code>
          <small v-if="!Object.keys(route.params).length">주소에 :빈칸이 없는 경로</small>
        </dd>
        <dt>route.query</dt>
        <dd :class="{ empty: !Object.keys(route.query).length }">
          <code>{{ route.query }}</code>
          <small v-if="!Object.keys(route.query).length">물음표 뒤가 비어 있음</small>
        </dd>
      </dl>
    </div>

    <!-- useRouter() -->
    <div class="area">
      <h3>useRouter() — 페이지를 옮기는 리모컨 <span class="tag write">동작</span></h3>
      <ul class="methods">
        <li v-for="item in EXAMPLES" :key="item.label">
          <button type="button" :class="{ danger: item.danger }" @click="item.run()">
            <code>{{ item.label }}</code>
            <small>{{ item.note }}</small>
          </button>
        </li>
      </ul>
    </div>

    <!-- 히스토리 -->
    <div class="area">
      <h3>히스토리 스택 — push 와 replace 의 차이</h3>
      <ol class="stack">
        <li v-for="(url, i) in history" :key="i" :class="{ here: i === cursor }">
          <span class="no">{{ i }}</span>
          <code>{{ url }}</code>
          <span v-if="i === cursor" class="here-tag">지금</span>
        </li>
      </ol>
      <div class="nav">
        <button type="button" :disabled="!canBack" @click="go(-1)">← router.go(-1)</button>
        <button type="button" :disabled="!canForward" @click="go(1)">router.go(1) →</button>
      </div>
      <p class="note">
        <b>push</b> 는 기록을 <b>쌓고</b>, <b>replace</b> 는 지금 기록을 <b>덮어씁니다</b>. 그래서
        로그인 후 이동에는 replace를 씁니다 — 뒤로가기로 로그인 화면에 다시 돌아가면 곤란하니까요.
      </p>
    </div>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

.area + .area {
  margin-top: 20px;
}

.tag {
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
}

.tag.read {
  color: var(--slate);
  background: var(--slate-tint);
}

.tag.write {
  color: var(--on-accent);
  background: var(--accent);
}

/* 주소 */
.urlbar {
  display: flex;
  gap: 2px;
  align-items: center;
  height: 42px;
  padding: 0 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
}

.origin {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.url {
  overflow: hidden;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 13.5px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* route 객체 */
.route {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 7px 14px;
  margin: 0;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
}

.route dt {
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.route dd {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  min-width: 0;
  margin: 0;
}

.route dd code {
  overflow-wrap: anywhere;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.route dd.empty code {
  color: var(--faint);
}

.route dd small {
  color: var(--faint);
  font-size: 11px;
}

/* 메서드 버튼 */
.methods {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.methods button {
  display: grid;
  width: 100%;
  gap: 3px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  text-align: left;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}

.methods button:hover {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.methods button.danger:hover {
  border-color: var(--signal);
  background: var(--signal-tint);
}

.methods code {
  overflow-wrap: anywhere;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.methods small {
  color: var(--muted);
  font-size: 11.5px;
}

/* 히스토리 */
.stack {
  display: grid;
  gap: 4px;
  margin: 0 0 12px;
  padding: 0;
  list-style: none;
}

.stack li {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 7px 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--surface);
}

.stack li.here {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.stack .no {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
}

.stack code {
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 12.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.here-tag {
  margin-left: auto;
  padding: 2px 9px;
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  font-size: 10px;
  font-weight: 700;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.nav button {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 12px;
}

.nav button:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.nav button:disabled {
  cursor: default;
  opacity: 0.35;
}

.note {
  margin: 12px 0 0;
  padding: 12px 14px;
  border-left: 3px solid var(--accent);
  border-radius: 0 9px 9px 0;
  background: var(--accent-tint);
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.75;
}

@media (max-width: 560px) {
  .route {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  .route dd {
    margin-bottom: 8px;
  }
}
</style>
