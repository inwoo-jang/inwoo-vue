import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    // 최종 결과물 — 단계까지 주소에 담아 특정 결과물만 따로 보낼 수 있다
    path: '/project/:stageId(\\d+)?',
    name: 'project',
    component: () => import('../views/ProjectView.vue'),
    props: true,
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

export default router
