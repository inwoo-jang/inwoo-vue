/**
 * 최종 결과물 · 주소표
 * ------------------------------------------------------------------
 * 여기 적은 경로는 전부 /final 아래에 붙는다.
 *
 *   /final                  홈 — 오늘 한눈에
 *   /final/weather          날씨 — 전국 도시 실시간 현황
 *   /final/weather/:cityId  도시 상세 + 시간별 예보
 *   /final/tarot            운세 — 오늘의 타로 한 장
 *   /final/about            소개
 *
 * 이름 앞에 'final-' 을 붙여 학습 페이지 쪽 이름과 섞이지 않게 한다.
 * 화면에서 부를 때는 규칙을 외우지 말고 아래 link() 를 쓴다.
 */

/** router.push(link('detail', { cityId: 'seoul' })) → /final/weather/seoul */
export const link = (name, params = {}, query = undefined) => ({
  name: `final-${name}`,
  params,
  ...(query ? { query } : {}),
})

export default [
  {
    // 기본 화면 — /final 로 들어오면 이게 뜬다
    path: '',
    name: 'final-home',
    component: () => import('./views/HomeView.vue'),
  },
  {
    path: 'weather',
    name: 'final-weather',
    component: () => import('./views/DashboardView.vue'),
  },
  {
    // :cityId 자리에 들어온 값을 useRoute() 로 읽는다
    path: 'weather/:cityId',
    name: 'final-detail',
    component: () => import('./views/DetailView.vue'),
  },
  {
    path: 'tarot',
    name: 'final-tarot',
    component: () => import('./views/TarotView.vue'),
  },
  {
    path: 'about',
    name: 'final-about',
    component: () => import('./views/AboutView.vue'),
  },
  {
    // 이 영역 안에서만 도는 Catch-all. 반드시 형제들 뒤에 와야 한다
    path: ':pathMatch(.*)*',
    name: 'final-missing',
    component: () => import('./views/NotFoundView.vue'),
  },
]
