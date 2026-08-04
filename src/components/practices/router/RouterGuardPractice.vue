<script setup>
import { computed, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * Navigation Guard(검문소)와 Catch-all Route를 손으로 만져 보는 실습.
 *
 * 진짜 라우터를 이 안에 또 띄우면 사이트 주소까지 바뀌므로,
 * beforeEach → beforeResolve → afterEach 순서와 next()의 역할만 그대로 흉내 냈다.
 */

/** 주소표. meta.isAuth 가 붙은 곳은 로그인해야 들어갈 수 있다 */
const ROUTES = [
  { path: '/', name: 'Home', label: '홈', meta: {} },
  { path: '/about', name: 'About', label: '소개', meta: {} },
  { path: '/mypage', name: 'MyPage', label: '마이페이지', meta: { isAuth: true } },
  { path: '/admin', name: 'Admin', label: '관리자', meta: { isAuth: true } },
  { path: '/login', name: 'Login', label: '로그인', meta: {} },
]

const isAuthenticated = ref(false)
const useCatchAll = ref(true)
const currentPath = ref('/')
const logs = ref([])

const matched = computed(() => ROUTES.find((r) => r.path === currentPath.value) ?? null)

/** 지금 화면에 그려질 것 */
const screen = computed(() => {
  if (matched.value) return { kind: 'page', route: matched.value }
  return useCatchAll.value ? { kind: 'not-found' } : { kind: 'blank' }
})

const add = (hook, text, tone = 'plain') =>
  logs.value.unshift({ id: logs.value.length, hook, text, tone })

/**
 * 라우터가 주소를 옮길 때 거치는 순서를 그대로 재현한다.
 *   beforeEach → (통과하면) beforeResolve → 화면 그리기 → afterEach
 */
const navigate = (to) => {
  logs.value = []
  const target = ROUTES.find((r) => r.path === to)
  const meta = target?.meta ?? {}

  add('beforeEach', `to: ${to} · from: ${currentPath.value}`, 'start')

  // 교안 174쪽의 예제와 같은 판단
  if (meta.isAuth && !isAuthenticated.value) {
    add('beforeEach', `to.meta.isAuth 인데 로그인 안 됨 → next('/login')`, 'block')
    currentPath.value = '/login'
    add('afterEach', '로그인 화면으로 이동 완료', 'done')
    return
  }

  add('beforeEach', 'next() — 통과 허가', 'pass')
  add('beforeResolve', '컴포넌트까지 다 준비됨 (마지막 확인 지점)', 'plain')
  currentPath.value = to
  add('afterEach', '화면 전환 완료 (분석 로그 보내기 좋은 곳)', 'done')
}

const login = () => {
  isAuthenticated.value = true
  add('상태', '로그인했습니다. 이제 잠긴 주소도 들어갈 수 있습니다.', 'pass')
}

const logout = () => {
  isAuthenticated.value = false
  add('상태', '로그아웃했습니다.', 'block')
}
</script>

<template>
  <section class="practice-card">
    <h2>
      Navigation Guard — 페이지 입장 전 검문소
      <ConceptHelp
        text="특정 주소로 들어가기 직전에 가로채서 권한을 검사하거나 다른 곳으로 보내는 장치입니다. 로그인해야 볼 수 있는 마이페이지·관리자 화면에 씁니다. beforeEach(시작 직전) → beforeResolve(컴포넌트까지 준비된 뒤) → afterEach(전환 완료 후) 순서로 불립니다."
      />
    </h2>

    <!-- 로그인 상태 -->
    <div class="area">
      <div class="auth" :class="{ on: isAuthenticated }">
        <span class="dot" aria-hidden="true" />
        <b>{{ isAuthenticated ? '로그인 상태' : '비로그인 상태' }}</b>
        <code>isAuthenticated = {{ isAuthenticated }}</code>
        <button type="button" @click="isAuthenticated ? logout() : login()">
          {{ isAuthenticated ? '로그아웃' : '로그인하기' }}
        </button>
      </div>
    </div>

    <!-- 주소 이동 -->
    <div class="area">
      <h3>어디로 갈까요</h3>
      <div class="links">
        <button
          v-for="route in ROUTES"
          :key="route.path"
          type="button"
          class="link"
          :class="{ locked: route.meta.isAuth }"
          @click="navigate(route.path)"
        >
          {{ route.path }}
          <span v-if="route.meta.isAuth" class="lock" aria-hidden="true">🔒</span>
        </button>
        <button type="button" class="link ghost" @click="navigate('/unknown-page')">
          /unknown-page
        </button>
      </div>
    </div>

    <!-- 화면 -->
    <div class="area">
      <h3>&lt;RouterView /&gt;</h3>
      <div class="viewport" :class="screen.kind">
        <template v-if="screen.kind === 'page'">
          <p class="view-name">{{ screen.route.label }}</p>
          <code class="view-path">{{ screen.route.path }}</code>
        </template>
        <template v-else-if="screen.kind === 'not-found'">
          <p class="view-name">404 — 그런 페이지는 없습니다</p>
          <code class="view-path">Catch-all Route 가 받아 냈습니다</code>
        </template>
        <template v-else>
          <p class="view-name blank">(하얗게 비어 있음)</p>
          <code class="view-path">매칭되는 컴포넌트가 없어 아무것도 그려지지 않았습니다</code>
        </template>
      </div>

      <label class="toggle">
        <input v-model="useCatchAll" type="checkbox" />
        <span>
          Catch-all Route 사용 —
          <code>{ path: '/:pathMatch(.*)*', component: NotFoundView }</code>
        </span>
      </label>
    </div>

    <!-- 검문 기록 -->
    <div class="area">
      <h3>검문 기록 <small>최근 이동이 위에</small></h3>
      <ul v-if="logs.length" class="logs">
        <li v-for="log in logs" :key="log.id" :class="log.tone">
          <span class="hook">{{ log.hook }}</span>
          <span class="text">{{ log.text }}</span>
        </li>
      </ul>
      <p v-else class="hint">위에서 주소를 눌러 보세요. 검문 순서가 여기 쌓입니다.</p>
    </div>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

h3 small {
  color: var(--faint);
  font-size: 11px;
  font-weight: 500;
}

.area + .area {
  margin-top: 20px;
}

/* 로그인 상태 */
.auth {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
}

.auth .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--signal);
}

.auth.on .dot {
  background: var(--accent);
}

.auth b {
  font-size: 13.5px;
}

.auth code {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.auth button {
  margin-left: auto;
  padding: 7px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
}

.auth button:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* 주소 버튼 */
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.link {
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 7px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 12px;
}

.link:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.link.locked {
  border-style: dashed;
}

.link.ghost {
  color: var(--faint);
}

.lock {
  font-size: 10px;
}

/* 화면 */
.viewport {
  padding: 26px 20px;
  border: 2px dashed var(--accent);
  border-radius: 12px;
  background: var(--paper);
  text-align: center;
}

.viewport.not-found {
  border-color: var(--signal);
}

.viewport.blank {
  border-color: var(--line-strong);
  background: #fff;
}

.view-name {
  margin: 0 0 6px;
  color: var(--accent);
  font-size: 17px;
  font-weight: 700;
}

.viewport.not-found .view-name {
  color: var(--signal);
}

.view-name.blank {
  color: var(--line-strong);
}

.view-path {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.toggle {
  display: flex;
  gap: 9px;
  align-items: center;
  margin-top: 12px;
  color: var(--muted);
  cursor: pointer;
  font-size: 12.5px;
}

.toggle code {
  font-family: var(--font-mono);
  font-size: 11.5px;
}

/* 검문 기록 */
.logs {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.logs li {
  display: grid;
  grid-template-columns: 104px minmax(0, 1fr);
  gap: 10px;
  align-items: baseline;
  padding: 8px 12px;
  border-radius: 9px;
  background: var(--paper);
}

.logs .hook {
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 700;
}

.logs .text {
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.6;
}

.logs li.start {
  box-shadow: inset 3px 0 0 var(--slate);
}

.logs li.pass {
  box-shadow: inset 3px 0 0 var(--accent);
}

.logs li.pass .hook {
  color: var(--accent);
}

.logs li.block {
  background: var(--signal-tint);
  box-shadow: inset 3px 0 0 var(--signal);
}

.logs li.block .hook,
.logs li.block .text {
  color: var(--signal);
}

.logs li.done {
  box-shadow: inset 3px 0 0 var(--line-strong);
}

.hint {
  margin: 0;
  padding: 18px 0;
  color: var(--faint);
  font-size: 12.5px;
  text-align: center;
}

@media (max-width: 520px) {
  .logs li {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
