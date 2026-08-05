import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import finalRoutes from '../final/routes'

/**
 * 주소표
 * ------------------------------------------------------------------
 * 첫 화면(HomeView)만 정적으로 들고 온다. 어차피 바로 보이는 화면이라
 * 미리 싣는 편이 빠르다. 나머지는 그 주소로 갈 때 불러온다(Lazy Loading).
 *
 * path  = 브라우저 주소
 * name  = 코드에서 부를 이름 (주소가 바뀌어도 이 이름은 그대로 쓴다)
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    // 챕터를 주소에 담아 두면 "CH04 보고 있어" 를 링크로 보낼 수 있다
    path: '/learning/:chapterId(\\d+)?',
    name: 'learning',
    component: () => import('../views/LearningView.vue'),
    props: true,
  },
  {
    path: '/assignments',
    name: 'assignments',
    component: () => import('../views/AssignmentsView.vue'),
  },
  {
    // 단계별 결과물 — 단계까지 주소에 담아 특정 결과물만 따로 보낼 수 있다
    path: '/project/:stageId(\\d+)?',
    name: 'project',
    component: () => import('../views/ProjectView.vue'),
    props: true,
    /**
     * 제출 과제 4(Router 활용)의 화면들.
     * 결과물이 "실제 라우터로 도는 것"이어야 의미가 있으므로,
     * 흉내가 아니라 이 앱의 자식 경로로 등록한다.
     */
    children: [
      {
        /**
         * 기본 화면 — /project/4 로 들어오면 이게 뜬다.
         * 4~8단계가 같은 홈을 쓰고, 단계에 따라 켜지는 기능만 달라진다.
         * (단계가 올라갈 때 기능이 사라지지 않도록 화면을 하나로 둔다)
         */
        path: '',
        name: 'a4-home',
        component: () => import('../components/assignments/stages/StageHomeView.vue'),
      },
      {
        path: 'about',
        name: 'a4-about',
        component: () => import('../components/assignments/router4/WeatherAboutView.vue'),
      },
      {
        path: 'weather/:cityId',
        name: 'a4-detail',
        component: () => import('../components/assignments/stages/StageDetailView.vue'),
      },
      {
        // 8단계에서 늘어난 메뉴. 그 전 단계에서는 내비게이션에 나오지 않는다.
        path: 'tarot',
        name: 'a4-tarot',
        component: () => import('../components/assignments/stages/StageTarotView.vue'),
      },
      {
        // 과제 4 안에서만 쓰는 Catch-all. 반드시 형제들 뒤에 와야 한다.
        path: ':pathMatch(.*)*',
        name: 'a4-missing',
        component: () => import('../components/assignments/router4/WeatherNotFoundView.vue'),
      },
    ],
  },
  {
    /**
     * 최종 결과물 — 과제를 다 쌓아 완성한 서비스.
     * 단계별 결과물(/project)이 "만들어 온 과정"이라면, 여기는 "완성된 것"이다.
     * 그래서 학습 페이지 안에 끼워 넣지 않고 자기 주소를 따로 갖는다.
     *
     * 껍데기(index.vue)가 홈 · 날씨 · 운세 메뉴를 그리고,
     * 그 안의 <RouterView /> 자리에 아래 자식 화면이 들어온다.
     */
    path: '/final',
    component: () => import('../final/index.vue'),
    children: finalRoutes,
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue'),
  },
  {
    // 어디에도 걸리지 않은 주소를 전부 받는다. 반드시 맨 마지막이어야 한다.
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  // BASE_URL을 넣어야 GitHub Pages의 /inwoo-vue/ 하위 경로에서도 링크가 맞는다
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  /** 페이지를 옮길 때 스크롤을 어디로 둘지 */
  scrollBehavior(to, from, saved) {
    if (saved) return saved // 뒤로가기 — 보던 자리로 되돌린다
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    // 같은 화면에서 챕터·단계만 바뀔 때는 스크롤을 건드리지 않는다
    if (to.name === from.name) return false
    return { top: 0 }
  },
})

/**
 * 로그인 가드
 * ------------------------------------------------------------------
 * meta.requiresAuth 가 붙은 화면(지금은 /final/records)은 로그인해야 들어간다.
 *
 * 새로고침 직후에는 토큰만 있고 "내가 누구인지"는 아직 모른다.
 * 그래서 들어가기 전에 restore() 로 서버에 한 번 물어본다.
 * 토큰이 만료됐다면 그 안에서 정리되어 아래 isLoggedIn 이 false 가 된다.
 *
 * 막을 때는 그냥 돌려보내지 않고 ?redirect= 에 가려던 주소를 적어 둔다.
 * 로그인하면 그 자리로 이어서 보내 주기 위해서다.
 */
router.beforeEach(async (to) => {
  if (!to.meta.requiresAuth) return true

  // Pinia 는 main.js 에서 router 보다 먼저 등록되므로 여기서 꺼내 써도 된다
  const { useAuthStore } = await import('../stores/authStore')
  const auth = useAuthStore()
  await auth.restore()

  if (!auth.isLoggedIn) return { name: 'final-login', query: { redirect: to.fullPath } }

  /*
   * 관리자 화면은 한 겹 더 본다.
   * 여기서 막는 것은 잘못 들어온 사람을 돌려보내는 안내에 가깝다 —
   * 진짜로 막는 곳은 서버(와 브라우저 폴백)로, 토큰의 role 을 보고 403 을 준다.
   */
  if (to.meta.requiresAdmin && !auth.isAdmin) return { name: 'final-home' }

  return true
})

export default router
