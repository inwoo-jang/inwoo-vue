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
