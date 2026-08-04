import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import { initTheme } from './utils/theme'
import GlobalBadge from './components/GlobalBadge.vue'

// 첫 화면이 그려지기 전에 테마를 적용해 색이 번쩍이는 것을 막는다
initTheme()

const app = createApp(App)

// 전역(Global) 등록 — 교안 131쪽.
// 여기서 한 번 등록해 두면 어느 컴포넌트에서든 import 없이 <GlobalBadge />를 쓸 수 있다.
// (CH04 "Component 등록" 실습에서 이 차이를 눈으로 확인한다)
app.component('GlobalBadge', GlobalBadge)

// 주소 ↔ 화면 연결
app.use(router)

app.mount('#app')

/**
 * 최종 결과물 화면에서 쓸 것들을 미리 받아 둔다.
 *
 * 그냥 두면 "청크 받기 → 컴포넌트 실행 → 그제서야 API 호출"로 줄줄이 기다린다.
 * 미리 시작해 두면 화면이 준비될 즈음 답이 이미 와 있다.
 * 이미 신선한 값이 있으면 primeWeather()가 아무 것도 하지 않는다.
 */
const primeWeather = () =>
  import('./components/assignments/weather/weatherApi').then((m) => m.primeWeather())

if (location.pathname.includes('/project')) {
  // 결과물 화면으로 바로 들어온 경우 — 기다릴 이유가 없다. 지금 부른다.
  primeWeather()
} else {
  // 다른 화면이라면 한가해진 뒤에 미리 받아 둔다
  const warmUp = () => {
    import('./views/ProjectView.vue')
    primeWeather()
  }
  if ('requestIdleCallback' in window) requestIdleCallback(warmUp, { timeout: 2000 })
  else setTimeout(warmUp, 800)
}
