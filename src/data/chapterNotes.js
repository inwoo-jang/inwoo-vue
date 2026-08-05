/**
 * 챕터 이론 정리 — 교안 본문을 이 화면만으로 복습할 수 있게 옮긴 것
 * ------------------------------------------------------------------
 * curriculum.js 의 challenges 는 "손으로 만드는 실습"을 담고,
 * 이 파일은 그 앞에 읽어야 할 "교안 본문"을 담는다.
 *
 * 출처: 1) Full-stack Engineering_3.Frontend-framework_Vue.js_강병호_0729.pdf
 *   CH06 Pinia          178~190쪽
 *   CH07 Axios          192~207쪽
 *   CH08 UI 라이브러리   210~227쪽
 *
 * 한 section 이 쓸 수 있는 재료 (전부 선택사항이며, 있는 것만 그려진다)
 *   slide     교안 쪽수
 *   body      문단 (문자열 하나 또는 배열)
 *   bullets   글머리표
 *   table     { head: [], rows: [[]] }
 *   code      { caption, text }
 *   note      한 줄 강조 (가장 자주 틀리는 지점)
 */

export const chapterNotes = {
  /* ================================================================
     CH06 · Pinia — 178~190쪽
     ================================================================ */
  6: {
    range: '178~190쪽',
    lead: '컴포넌트 계층을 타고 값을 넘기는 대신, 화면 밖 저장소 하나를 두고 모두가 거기를 본다. 이 챕터의 절반은 Store 만드는 법, 나머지 절반은 그것으로 로그인을 구현하는 사례연구다.',

    sections: [
      {
        title: 'Pinia란 무엇인가',
        slide: '179쪽',
        body: 'Vue Application이 크고 복잡해질수록 Component 간 데이터를 전달하는 일이 어려워집니다. Pinia는 Component 계층 구조와 상관없이 별도의 전역 데이터 저장소(Store)를 개설해 반응형 데이터를 관리합니다.',
        bullets: [
          'Pinia는 Vue 3의 상태(state) 관리 라이브러리다. Vue 2에서는 Vuex를 썼다.',
          '상태(State)란 웹 애플리케이션을 렌더링하는 과정에 영향을 줄 수 있는 값을 말하고, 상태관리란 그 값을 다루는 방법을 말한다.',
          'package.json 의 dependencies 에 pinia 가 들어 있어야 한다.',
        ],
      },
      {
        title: 'Store — 무엇을 한 파일에 담는가',
        slide: '180쪽',
        body: 'Store는 여러 파일로 구성될 수 있으며, 일반적으로 의미가 있는 상태끼리 파일 하나로 작성합니다. 예를 들어 인증스토어(authStore.js), UI스토어(uiStore.js), 알림스토어(alertStore.js), 공통코드스토어(commonStore.js)처럼 나눕니다.',
        table: {
          head: ['용어', '기술적 본질', 'Vue 3 내장 문법 매핑', '주요 역할'],
          rows: [
            ['state', '반응형 데이터 변수', 'ref() / reactive()', '전역으로 공유할 상태 데이터 객체를 정의한다'],
            ['getters', '읽기 전용 계산된 변수', 'computed()', '원본 state를 기반으로 실시간 가공한다'],
            ['actions', '상태 변경 및 통신 함수', 'function()', 'state 값을 변경하는 핸들러 로직 / 서버 비동기 API 통신(axios 등) 수행'],
          ],
        },
        note: 'Pinia 를 새로 외우는 것이 아니다. 이미 아는 ref · computed · function 에 이름을 새로 붙인 것뿐이다.',
      },
      {
        title: '구축 3단계 ① Pinia 등록',
        slide: '181쪽',
        body: 'src/main.js 에서 createPinia() 함수로 pinia 인스턴스를 생성하고, 애플리케이션 인스턴스의 use() 함수로 등록합니다.',
        code: {
          caption: 'src/main.js',
          text: `import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())   // ① 인스턴스 생성 ② use() 로 등록
app.use(router)

app.mount('#app')`,
        },
        note: '이 한 줄을 빠뜨리면 useStore() 를 부르는 순간 "no active Pinia" 오류가 난다.',
      },
      {
        title: '구축 3단계 ② Store 생성',
        slide: '182쪽',
        body: 'src/stores/스토어명.js 에서 Pinia 패키지가 제공하는 defineStore() 함수로 만듭니다. defineStore()가 돌려준 Store Instance를 할당하는 변수의 식별자는 use + 파일명 + Store 규칙에 따라 작성합니다.',
        code: {
          caption: 'src/stores/counter.js',
          text: `import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})`,
        },
        table: {
          head: ['코드', 'Vue 3 내장 기술 스펙', 'Pinia 관점의 명칭', '실제 런타임 역할 및 의미'],
          rows: [
            ['count', 'ref() 반응형 상태 변수', 'state (상태 데이터)', '전역에서 공유할 원본 숫자 데이터의 저장소 (기본값 0)'],
            ['doubleCount', 'computed() 계산된 변수', 'getters (연산 상태)', 'count 가 변경될 때만 실시간 연동되어 계산되는 Read-Only 변수'],
            ['increment()', '일반 JavaScript 함수', 'actions (실행 액션)', '전역 state 인 count 값을 안전하게 1씩 증가시키는 함수'],
            ['return { … }', '객체 반환 문법', 'Expose (외부 개방 API)', '이 스토어를 import 할 외부 컴포넌트가 전역 데이터에 접근할 수 있도록 선언'],
          ],
        },
        note: 'return 에 넣지 않은 것은 밖에서 보이지 않는다. 스토어 안에서만 쓰는 값은 일부러 빼 두면 된다.',
      },
      {
        title: '구축 3단계 ③ Store 사용',
        slide: '183쪽',
        body: '① 정의한 스토어를 import 하고 ② 인스턴스를 가동해(전역 저장소 포인터 확보) ③ state · getter · action 을 꺼내 씁니다.',
        code: {
          caption: 'StoreCounter.vue',
          text: `<script setup>
// 1. 정의한 카운터 스토어 플러그인 import
import { useCounterStore } from '@/stores/counter.js'

// 2. 인스턴스 가동 (전역 저장소 포인터 확보)
const counterStore = useCounterStore()
</script>

<template>
  <p>원본 카운트 데이터(state): {{ counterStore.count }}</p>
  <p>2배 연산 데이터(getters): {{ counterStore.doubleCount }}</p>
  <button @click="counterStore.increment">숫자 1 증가 (actions)</button>
</template>`,
        },
      },
      {
        title: '가장 자주 하는 실수 — 구조 분해로 반응성이 끊긴다',
        slide: '184쪽',
        body: 'Store의 데이터 속성(State, Getters)은 구조분해할당(Destructuring Assignment) 시 반응형이 유실될 수 있습니다.',
        code: {
          caption: '오류 유발 코드 / 올바른 코드',
          text: `// ✘ 이렇게 구조 분해 할당을 하면
//   Vue 3 반응형 시스템(Proxy 주소)이 단절되어 화면이 갱신되지 않습니다.
const { count, increment } = counterStore

// ✔ 데이터(State, Getters)는 storeToRefs 로 감싸야 연결 고리가 보존된다
import { storeToRefs } from 'pinia'

const { count, doubleCount } = storeToRefs(counterStore)
const { increment } = counterStore   // 함수인 Actions 는 그냥 꺼내도 무방`,
        },
        bullets: [
          '구조분해할당(Destructuring Assignment)이란 Array나 Object의 구조를 분해하여, 내부의 값들을 별도의 독립된 개별 변수에 각각 직접 할당하는 모던 JavaScript 표현식이다.',
          'storeToRefs 는 state · getters 에만 쓴다. actions 는 함수라 그대로 꺼내 써도 된다.',
        ],
        note: '화면이 안 바뀐다면 십중팔구 여기다. 값은 찍히는데 갱신만 안 되는 증상이 특징이다.',
      },
      {
        title: '(사례연구) authStore — 로그인 전체 흐름',
        slide: '185~186쪽',
        body: '로그인은 "서버가 검증하고, 프런트가 보관한다"로 나뉩니다. 둘 다 login() 이라는 이름을 쓰지만 하는 일이 다릅니다.',
        bullets: [
          '① 컴포넌트(LoginView.vue)가 axios.post("/api/login", { id, pw }) 로 요청한다.',
          '② 백엔드가 DB와 대조해 검증하고 200 OK 로 Token + User Data 를 응답한다.',
          '③ 컴포넌트가 authStore.login(user, token) 액션을 호출해 State 와 localStorage 에 저장한다.',
        ],
        table: {
          head: ['구분', 'Backend API login() — 검증 & 발급', 'Pinia authStore.login() — 저장 & 유지'],
          rows: [
            ['하는 일', '사용자가 입력한 ID/PW를 DB에 저장된 값과 비교', '백엔드가 응답한 토큰과 유저 정보를 반응형 State에 저장'],
            ['결과물', '인증 성공 시 보안 JWT Access Token 생성', '새로고침 시에도 유지되도록 localStorage 동기화'],
            ['다음 단계', '클라이언트에 토큰 및 유저 프로필 객체 응답', 'Navigation Guard에서 접근 권한 검사 용도로 상태 공유'],
          ],
        },
      },
      {
        title: 'JWT — 무엇이고 왜 쓰는가',
        slide: '187쪽',
        body: 'JWT(JSON Web Token)는 정보를 안전하게 JSON 객체 형태로 주고받기 위해 정의된 표준 규격으로, Backend가 발급합니다. 점(.) 2개로 구분된 3개의 긴 암호문(Base64)으로 이루어져 있습니다 — Header, Payload, Signature.',
        code: {
          caption: 'JWT 의 생김새와 전달 방법',
          text: `eyJhbGciOi... . eyJzdWIiOi... . d3g4eT...
   Header          Payload        Signature

GET /api/user/profile HTTP/1.1
Host: api.skala.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json`,
        },
        table: {
          head: ['구분', '기존 세션(Session) 방식', 'JWT (Token) 방식'],
          rows: [
            ['로그인 정보 저장소', '서버 메모리 / DB', '클라이언트 (브라우저 State / LocalStorage)'],
            ['서버 부하', '동시 접속자가 많으면 서버 메모리 부담 증가', '서버에 저장하지 않으므로 부하가 매우 적음 (Stateless)'],
            ['서버 확장성', '서버를 여러 대 늘릴 때 세션 공유 설정(Redis 등) 필요', '서버가 여러 대여도 토큰 서명만 검증하면 되므로 확장 용이'],
            ['적합한 아키텍처', '전통적인 서버 사이드 렌더링 (SSR)', 'SPA (Vue, React) + REST API 서버'],
          ],
        },
        note: 'Base64는 누구나 쉽게 복호화할 수 있으므로 Payload에 민감정보를 넣으면 안 된다. 실무에서는 Axios Request Interceptor 로 토큰을 자동 주입한다.',
      },
      {
        title: '(사례연구) authStore 전체 코드',
        slide: '188쪽',
        body: '사용자의 토큰(JWT), 사용자 정보, 로그인 상태 등을 앱 전체에서 공유하기 위한 전역 인증 스토어입니다. 파일명은 authStore.js 로 지정하고, 외부에서 불러올 함수명은 Vue Composable 관례에 따라 useAuthStore 로 내보냅니다.',
        code: {
          caption: 'src/stores/authStore.js',
          text: `import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // 1. State: 로그인 토큰 및 사용자 정보
  const token = ref(localStorage.getItem('accessToken') || null)
  const user = ref(JSON.parse(localStorage.getItem('userInfo') || 'null'))

  // 2. Getters: 로그인 여부 확인 및 사용자 이름
  const isLoggedIn = computed(() => !!token.value)
  const userName = computed(() => user.value?.name || '게스트')

  // 3. Actions: 로그인 / 로그아웃 로직
  function login(userData, authToken) {
    user.value = userData
    token.value = authToken
    // 브라우저 재접속 시 유지용
    localStorage.setItem('accessToken', authToken)
    localStorage.setItem('userInfo', JSON.stringify(userData))
  }
  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userInfo')
  }

  return { token, user, isLoggedIn, userName, login, logout }
})`,
        },
      },
      {
        title: 'Navigation Guard 와 연동',
        slide: '189쪽',
        body: 'router/index.js 에서 stores/authStore.js 를 import 해 이동 직전에 접근 권한을 검사합니다.',
        code: {
          caption: 'src/router/index.js',
          text: `router.beforeEach((to, from) => {
  // Guard 내부에서 authStore 호출
  const authStore = useAuthStore()

  // 1. 인증이 필요한 페이지 접근 시 로그인 여부 체크
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    alert('로그인이 필요한 서비스입니다.')
    // 로그인 후 돌아올 위치를 함께 전달
    return { name: 'Login', query: { redirect: to.fullPath } }
  }

  // 2. 이미 로그인한 사용자가 로그인 페이지 접근 시 메인으로 이동
  if (to.name === 'Login' && authStore.isLoggedIn) {
    return { name: 'Dashboard' }
  }
})`,
        },
        note: 'Guard 안에서 useAuthStore() 를 "호출 시점에" 부르는 것이 중요하다. 파일 맨 위에서 미리 꺼내 두면 Pinia 가 아직 활성화되지 않아 오류가 난다.',
      },
    ],

    checklist: [
      'Props Drilling 이 무엇이고 Pinia 가 그것을 어떻게 없애는지 한 문장으로 말할 수 있다',
      'state · getters · actions 를 각각 ref · computed · function 과 대응시킬 수 있다',
      'main.js 에 app.use(createPinia()) 를 적는 이유를 안다',
      'storeToRefs 를 언제 쓰고 언제 쓰지 않는지 구분할 수 있다',
      'Backend 의 login() 과 authStore 의 login() 이 각각 무엇을 하는지 나눠 설명할 수 있다',
      'JWT 가 세션 방식보다 SPA 에 적합한 이유를 두 가지 댈 수 있다',
      'Navigation Guard 에서 로그인 여부를 검사하고 redirect 쿼리를 남기는 코드를 쓸 수 있다',
    ],

    quiz: [
      {
        q: '화면에 스토어 값을 꽂았는데 값이 바뀌어도 화면이 그대로다. 가장 먼저 의심할 곳은?',
        a: 'storeToRefs 없이 구조 분해했는지 확인한다. const { count } = store 는 반응형 Proxy 연결이 끊겨 값만 복사된다.',
      },
      {
        q: 'state 를 객체가 아니라 함수로 돌려주는 이유는?',
        a: '스토어가 여러 번 생성될 때 인스턴스마다 별도의 값을 갖게 하기 위해서다. 객체를 그대로 두면 모두가 같은 객체를 공유하게 된다.',
      },
      {
        q: 'JWT Payload 에 사용자 비밀번호를 넣어도 되는가?',
        a: '안 된다. Base64 는 암호화가 아니라 인코딩이라 누구나 복호화할 수 있다.',
      },
      {
        q: '토큰을 localStorage 에도 저장하는 이유는?',
        a: '새로고침하면 자바스크립트 메모리(State)가 초기화되기 때문이다. 다만 진짜 유효한지는 서버에 다시 물어봐야 한다.',
      },
    ],
  },

  /* ================================================================
     CH07 · Axios — 192~207쪽
     ================================================================ */
  7: {
    range: '192~207쪽',
    lead: '앞의 여섯 챕터는 브라우저 안에서 끝나는 이야기였다. 이 챕터부터 화면 밖 서버와 대화한다. HTTP 규약 → REST 설계 → Axios 문법 순으로 좁혀 들어간다.',

    sections: [
      {
        title: 'HTTP 와 Method',
        slide: '193쪽',
        body: 'HTTP(HyperText Transfer Protocol)는 웹 브라우저와 웹 서버가 인터넷상에서 데이터를 주고받기 위해 세계적으로 약속한 표준 통신 규약(Protocol)입니다. 일반적으로 Client에서 Server로 HTTP Request를 보내고 서버는 요청에 대해 HTTP Response를 보냅니다. HTTP Method는 Client가 Server에 요청하는 작업이 무엇인지를 나타냅니다.',
        table: {
          head: ['HTTP 메서드', 'CRUD 연산 기능 (Database)', '실제 수행하는 행위의 의미'],
          rows: [
            ['GET', 'Read (조회)', '서버의 데이터를 바꾸지 않고 오직 읽어오기만 함'],
            ['POST', 'Create (생성)', '서버에 새로운 데이터를 밀어 넣어 등록함'],
            ['PUT / PATCH', 'Update (수정)', '서버에 이미 있는 데이터를 찾아서 값을 변경함'],
            ['DELETE', 'Delete (삭제)', '서버에 있는 특정 데이터를 타격하여 파괴함'],
          ],
        },
        note: '각 Method 의 역할은 강제 규칙이 아니다. POST 로 데이터를 삭제하거나 변경해도 동작은 한다 — 다만 약속을 어긴 것이라 남이 읽기 어려워진다.',
      },
      {
        title: 'API 와 REST 설계 원칙',
        slide: '194쪽',
        body: 'API(Application Programming Interface)는 서로 다른 소프트웨어 애플리케이션이 자신들의 기능이나 데이터를 상대방이 안전하고 쉽게 가져다 쓸 수 있도록 열어놓은 규칙입니다. Web에서의 API는 Browser와 Server 간에 HTTP를 사용해 데이터를 주고받는 약속을 의미합니다.',
        bullets: [
          'REST(REpresentational State Transfer) API 는 웹의 HTTP를 활용하면서, 자원을 이름으로 구분하여 해당 자원의 데이터를 주고받는 방식의 웹 인터페이스 스타일이다.',
          'HTTP Method(GET, POST, DELETE, PUT)를 활용하여 자원에 대한 CRUD 작업을 적용한다.',
          '오늘날 대부분의 인터페이스에 활용된다.',
        ],
        code: {
          caption: '주소(URI)는 오직 명사(자원)로만 구성한다',
          text: `✘ 나쁜 예 (Non-REST)   /getWeather   /deleteUser   /update_city
                        → 주소에 동사가 포함됨

✔ 바른 예 (REST)       /weather      /users        /cities
                        → 오직 깔끔한 명사만 남김

행위(동사)는 HTTP Method 로 대체한다.
  GET    /users      목록 조회
  POST   /users      등록
  DELETE /users/1    1번 삭제`,
        },
      },
      {
        title: 'Frontend 와 Backend 의 경계',
        slide: '195쪽',
        table: {
          head: ['구분', '맡는 일'],
          rows: [
            ['Frontend', '사용자가 웹 브라우저를 통해 눈으로 보고, 클릭하고, 입력하는 모든 화면(UI/UX) 영역. 사용자의 행동(Event)을 감지하고, Backend API를 통해 받은 데이터를 보기 좋게 시각화(렌더링)한다.'],
            ['Backend', '시스템의 핵심 비즈니스 로직, 데이터 가공, 보안, 데이터베이스(DB) 관리를 전담하는 서버 영역. 데이터베이스를 안전하게 제어하고, 로직과 규칙을 거쳐 Frontend가 필요한 데이터를 API를 통해 전달한다.'],
          ],
        },
      },
      {
        title: '연습용 API 두 곳',
        slide: '196~199쪽',
        body: 'JSON Placeholder 는 전 세계 프론트엔드 개발자들이 통신 및 CRUD 코드를 테스트할 때 사용하는 무료 가상 REST API 서비스입니다(https://jsonplaceholder.typicode.com/). OpenWeather 는 전 세계 20만 개 이상의 도시 데이터를 일관된 규격으로 제공하는 가장 대중적인 REST API 서비스입니다.',
        table: {
          head: ['Method', '엔드포인트', '전달할 데이터 (Body)', 'Response'],
          rows: [
            ['GET', '/posts', '없음', '서버에 등록된 전체 가상 데이터 목록 조회 (배열)'],
            ['GET', '/posts/1', '없음', '1번 고유 ID를 가진 데이터 상세 조회'],
            ['POST', '/posts', "{ title, body, userId }", '새로운 정보 등록 (보낸 데이터와 함께 id: 101 을 추가해서 객체 반환)'],
            ['PUT', '/posts/1', '{ title, body }', '새 내용으로 교체 (보낸 데이터와 함께 id:1 추가해서 반환)'],
            ['DELETE', '/posts/1', '없음', '1번 데이터 삭제 (성공 시 공백 반환)'],
          ],
        },
        code: {
          caption: 'OpenWeather Current Weather API 호출 주소',
          text: `# 좌표로 호출
https://api.openweathermap.org/data/2.5/weather
  ?lat={lat}&lon={lon}&appid={API key}&units=metric&lang=kr

# 도시 이름으로 호출 (Geocoding 내장)
https://api.openweathermap.org/data/2.5/weather
  ?q=\${targetCity.english}&appid=\${API_KEY}&units=metric&lang=kr

# 무료 등급: 월 1,000,000건 · 분당 60건
# units=metric 을 빼면 켈빈(K)으로 온다. lang=kr 이면 설명이 한글로 온다.`,
        },
        note: 'Postman 은 서버에서 제공하는 API를 테스트하는 도구다. 코드를 쓰기 전에 Postman 으로 먼저 주소와 키가 맞는지 확인하면 디버깅이 훨씬 빨라진다.',
      },
      {
        title: 'Fetch API vs Axios',
        slide: '201쪽',
        table: {
          head: ['비교 항목', 'Fetch API', 'Axios'],
          rows: [
            ['설치 여부', '없음 (브라우저 기본 내장 빌트인)', '필수 (npm i axios 로 패키지 설치 필요)'],
            ['JSON 변환', '수동 (반드시 res.json() 파싱 단계를 거침)', '자동 (내부적으로 JSON을 object로 자동 변환)'],
            ['에러 핸들링', '수동 처리', '자동 처리'],
            ['실무 선호도', '중간', '매우 높음'],
            ['BaseURL 설정', '지원 안 함', '지원 (axios.create)'],
            ['요청/응답 인터셉터', '지원 안 함', '지원 (요청 직전 로그인 토큰 자동 탑승, 에러 발생 시 공통 팝업 가로채기 등)'],
          ],
        },
        note: '실무에서 Axios 를 고르는 진짜 이유는 마지막 두 줄이다. baseURL 과 인터셉터가 없으면 주소·토큰·에러 문구가 부르는 곳마다 흩어진다.',
      },
      {
        title: 'Axios 기본 사용',
        slide: '202~204쪽',
        body: 'npm install axios 로 설치한 뒤 package.json 의 dependencies 에 들어왔는지 확인합니다. 아래는 OpenWeather 호출로 기본 동작 원리를 익히는 예제입니다.',
        code: {
          caption: '요청 — async / await + try / catch / finally',
          text: `<script setup>
import { ref } from 'vue'
import axios from 'axios'

const weatherData = ref(null)
const isLoading = ref(false)

const handleFetchWeather = async () => {
  isLoading.value = true

  const API_KEY = '8964edc63b366d27b5b728b7976570b7'
  const URL = \`https://api.openweathermap.org/data/2.5/weather?lat=35.158582&lon=126.804975&appid=\${API_KEY}&units=metric&lang=kr\`

  try {
    // 비동기 통신: 서버에서 데이터를 다 가져올 때까지 await 로 기다린다.
    const response = await axios.get(URL)
    // fetch()는 응답 String을 Json으로 변환해야 하지만(.json()),
    // Axios 에서는 응답(response.data)이 자동으로 JSON 파싱 된다.
    weatherData.value = response.data
  } catch (error) {
    // 4xx, 5xx 에러나 네트워크 오프라인 시 자동으로 reject 되어 catch 에서 처리한다.
    console.error('통신 중 에러가 발생했습니다:', error)
    alert('데이터를 가져오지 못했습니다. API 키 활성화 여부나 주소를 확인하세요.')
  } finally {
    isLoading.value = false
  }
}
</script>`,
        },
        bullets: [
          'isLoading 은 통신 시작에 true, finally 에서 false 로 되돌린다. finally 에 두어야 성공하든 실패하든 반드시 풀린다.',
          '화면에서는 :disabled="isLoading" 으로 버튼을 잠그고, v-if="weatherData" / v-else 로 결과와 안내를 갈라 준다.',
          'weatherData.name(도시), weatherData.main.temp(기온), weatherData.weather[0].description(날씨 설명), weatherData.main.humidity(습도) 를 꺼내 쓴다.',
        ],
      },
      {
        title: 'Axios 함수 목록',
        slide: '205쪽',
        table: {
          head: ['구분', '함수명 / 호출 형태', '주요 특징 및 용도', '예시'],
          rows: [
            ['인스턴스 생성', 'axios.create([config])', '사용자 정의 설정을 가진 독립된 Axios 인스턴스를 생성한다', "const api = axios.create({ baseURL: '/api' })"],
            ['기본 객체 호출', 'axios(config)', 'Config 객체 하나만 전달하여 요청을 보낸다', "axios({ method: 'get', url: '/users' })"],
            ['URL+설정 호출', 'axios(url, [config])', '첫 번째 인자로 URL, 두 번째로 설정 객체를 전달한다', "axios('/users', { method: 'post', data: {} })"],
            ['조회', 'axios.get(url, [config])', '데이터 조회 (Body 없음, Query String 사용)', "axios.get('/users', { params: { id: 1 } })"],
            ['생성', 'axios.post(url, [data], [config])', '데이터 생성 (Body 데이터 포함, JSON 자동 변환)', "axios.post('/users', { name: 'Kim' })"],
            ['전체 수정', 'axios.put(url, [data], [config])', '데이터 전체 수정 (Body 데이터 포함)', "axios.put('/users/1', { name: 'Lee' })"],
            ['일부 수정', 'axios.patch(url, [data], [config])', '데이터 일부 수정 (Body 데이터 포함)', "axios.patch('/users/1', { age: 20 })"],
            ['삭제', 'axios.delete(url, [config])', '데이터 삭제', "axios.delete('/users/1')"],
            ['인터셉터', 'axios.interceptors.request', '요청 전송 직전 토큰(JWT) 삽입 등 공통 전처리를 수행한다', 'api.interceptors.request.use(config => …)'],
            ['인터셉터', 'axios.interceptors.response', '응답 수신 직후 에러 공통 처리, 데이터 가공 등 후처리를 수행한다', 'api.interceptors.response.use(res => …)'],
            ['병렬 요청', 'axios.all([…])', '여러 개의 Axios Promise를 배열로 받아 동시에 실행한다', 'axios.all([getA(), getB()])'],
            ['병렬 요청', 'axios.spread(callback)', 'axios.all 의 결과를 각 변수로 분해하여 수신한다', '.then(axios.spread((resA, resB) => …))'],
          ],
        },
        note: '통신 메서드들은 호출 후 자바스크립트의 Standard Promise 객체를 반환한다. 그래서 .then 으로도, await 로도 받을 수 있다.',
      },
      {
        title: '비동기 호출 방식 — .then vs async/await',
        slide: '206쪽',
        body: 'Axios가 Promise를 리턴하기 때문에 두 가지 비동기 처리 방식을 쓸 수 있습니다.',
        table: {
          head: ['비교 항목', 'Promise (.then()) 방식', 'async / await 방식'],
          rows: [
            ['문법적 기반', 'ES6 (2015년) 도입 표준 객체 기반', 'ES8 (2017년) 도입, Promise를 감싼 문법적 설탕'],
            ['코드 스타일', '체이닝 방식 (콜백 함수를 뒤에 줄줄이 엮어 나감)', '동기식 스타일 (위에서 아래로 순차적으로 읽히는 일반 코드 형태)'],
            ['에러 핸들링', '.catch(error => { … }) 메서드로 제어', '자바스크립트 정석 문법인 try { … } catch (e) { … } 로 제어'],
            ['실무 선호도', '보통 (간단한 단발성 통신에 가끔 사용)', '매우 높음 (가독성과 유지보수성이 매우 유리)'],
          ],
        },
        code: {
          caption: '실행 순서가 다르다 — 로그가 찍히는 차례를 보라',
          text: `// .then 방식 — '1번 → 2번 → 3번' 이 아니라 1 → 2 → 3(도착) 순
console.log('1. 통신 시작 구역')
axios.get(URL)
  .then((response) => console.log('3. 데이터 도착:', response.data))
  .catch((error) => console.error('에러 발생:', error))
console.log('2. 통신 요청 직후 라인')
// 백엔드 데이터가 오기 전에 '2번 로그'가 콘솔창에 먼저 기록된다

// async/await 방식 — 위에서 아래로 읽은 그대로
const fetchWeatherAsync = async () => {
  console.log('1. 통신 시작 구역')
  try {
    const response = await axios.get(URL)   // 도착할 때까지 이 줄에서 기다린다
    console.log('2. 데이터 도착:', response.data)
  } catch (error) {
    console.error('에러 발생:', error)
  }
  console.log('3. 모든 통신 프로세스 완전히 끝난 후 라인')
  // '1번 -> 2번 -> 3번' 순서대로 기록된다
}`,
        },
      },
      {
        title: 'CRUD 한 바퀴 (AxiosJson.vue)',
        slide: '207쪽',
        body: 'JSONPlaceholder 예제로 REST API의 CRUD 처리 코드를 확인합니다.',
        code: {
          caption: 'READ — 목록 가져오기',
          text: `<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 1. 백엔드 공용 주소
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

// 2. 반응형 상태 데이터
const items = ref([])      // 서버에서 받아온 데이터 배열 박스
const textInput = ref('')  // 입력창과 연결된 글자 데이터 박스

// [READ] GET : 데이터 가져오기
const handleRead = async () => {
  try {
    // 공부용으로 딱 3개만 들고 옵니다.
    const response = await axios.get(BASE_URL, { params: { _limit: 3 } })
    items.value = response.data
    console.log('GET 성공:', response.data)
  } catch (error) {
    console.error('GET 실패:', error)
  }
}

onMounted(handleRead)
</script>`,
        },
        bullets: [
          'POST 는 axios.post(BASE_URL, { title: textInput.value }) 처럼 두 번째 인자에 Body 를 싣는다.',
          'PUT 은 axios.put(`${BASE_URL}/${id}`, {…}) 로 자원 주소를 지정한다.',
          'DELETE 는 axios.delete(`${BASE_URL}/${id}`) 로 Body 없이 보낸다.',
          'JSONPlaceholder 는 가상 서버라 실제로 저장되지는 않는다. 응답은 성공한 것처럼 돌아온다.',
        ],
      },
    ],

    checklist: [
      'HTTP Method 4개와 CRUD 를 짝지어 말할 수 있다',
      'REST 설계에서 URI 에 동사를 쓰지 않는 이유를 설명할 수 있다',
      'Fetch 대신 Axios 를 쓰는 이유를 baseURL · 인터셉터로 설명할 수 있다',
      'async / await 와 try / catch / finally 로 로딩·에러 상태를 다룰 수 있다',
      'response 와 response.data 의 차이를 안다',
      '.then 방식과 await 방식의 실행 순서 차이를 로그 순서로 설명할 수 있다',
      'axios.create 로 인스턴스를 만들고 baseURL 을 지정할 수 있다',
    ],

    quiz: [
      {
        q: 'axios.get() 의 결과에서 실제 데이터는 어디에 들어 있는가?',
        a: 'response.data 다. response 는 status · headers · config 까지 담은 봉투이고, data 가 그 안의 내용물이다.',
      },
      {
        q: 'fetch 와 달리 axios 는 4xx·5xx 응답을 어떻게 다루는가?',
        a: '자동으로 reject 되어 catch 로 넘어간다. fetch 는 404 여도 resolve 되므로 res.ok 를 직접 검사해야 한다.',
      },
      {
        q: 'isLoading = false 를 finally 에 두는 이유는?',
        a: '성공하든 실패하든 반드시 실행되기 때문이다. try 안에만 두면 에러가 났을 때 로딩이 영원히 풀리지 않는다.',
      },
      {
        q: 'URI 를 /getWeather 로 지으면 무엇이 잘못인가?',
        a: '행위(동사)는 HTTP Method 가 표현해야 한다. 주소는 자원(명사)만 가리켜야 /weather 하나로 GET·POST·DELETE 를 모두 표현할 수 있다.',
      },
    ],
  },

  /* ================================================================
     CH08 · UI 라이브러리 (Element Plus) — 210~227쪽
     ================================================================ */
  8: {
    range: '210~227쪽',
    lead: '직접 만들던 버튼·입력창·팝업을 가져다 쓴다. 이 챕터의 본문은 대부분 "무엇이 있는지"를 훑는 카탈로그다. 외울 것이 아니라 필요할 때 찾아보는 목록으로 두면 된다.',

    sections: [
      {
        title: 'UI 라이브러리를 쓰는 이유',
        slide: '211쪽',
        body: 'UI 라이브러리는 웹 애플리케이션 UI(User Interface) 구축에 필요한 공통 컴포넌트(Button, Input, Form, Dialog, Table 등)를 Vue 3 컴포넌트 단위로 모듈화하여 제공하는 오픈소스 소프트웨어 패키지입니다.',
        bullets: [
          '개발 리소스 절감: CSS 스타일시트 및 HTML 마크업 코드 작성을 생략하고 완성된 컴포넌트 태그를 호출하므로 UI 구현 속도가 향상된다.',
          '크로스 브라우징 및 반응형 대응: 다양한 브라우저 환경(Chrome, Safari, Firefox 등)과 디바이스 해상도(Mobile, Tablet, Desktop)별 미디어 쿼리가 내부적으로 최적화되어 있다.',
          '웹 표준 및 접근성(WAI-ARIA) 준수: 스크린 리더 인식, 키보드 포커스 제어 등 웹 접근성 가이드라인이 컴포넌트 레벨에서 사전 구현되어 있다.',
        ],
      },
      {
        title: 'Vue 3 생태계 UI 라이브러리 비교',
        slide: '212쪽',
        table: {
          head: ['비교 항목', 'Vuetify', 'Element Plus', 'PrimeVue'],
          rows: [
            ['기반 디자인 명세', 'Google Material Design', 'Enterprise Desktop View', 'Multi-Theme & Flex CSS'],
            ['TypeScript 지원', '지원 완료', '완전 기본 내장 (최상)', '지원 완료'],
            ['스타일 격리/커스텀', 'SASS 변수 수정 방식', 'CSS 변수 수정 방식', 'Unstyled 모드 지원 (최상)'],
            ['특화 컴포넌트', 'Mobile V-App Layout', 'Data Table, Form Validation', 'Advanced Chart, Tree Table'],
            ['전용 컴포넌트 태그 예시', '<v-btn>', '<el-button>', '<Button>'],
          ],
        },
        note: 'Global 시장에서는 PrimeVue 와 Vuetify 의 점유율이 높으며, 국내에서는 Element Plus 의 점유율이 높다. Element Plus 의 학습 난이도가 가장 낮다.',
      },
      {
        title: '설치와 등록',
        slide: '213~215쪽',
        body: '공식 사이트는 https://element-plus.org/ 입니다. Guide · Component · Resource 세 갈래로 되어 있고, 실무에서는 Component 문서를 가장 많이 봅니다.',
        code: {
          caption: '설치 후 src/main.js 에 전역 설정 주입',
          text: `npm install element-plus

# ── src/main.js ──────────────────────────────
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Element Plus 모듈 및 필수 CSS 장부 파일 Import
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)   // Vue 앱에 Element Plus 사용 등록

app.mount('#app')`,
        },
        note: 'CSS 를 import 하지 않으면 태그는 인식되지만 스타일이 하나도 입혀지지 않는다. 내 디자인 토큰이 위에 덮이도록 순서에도 신경 쓴다.',
      },
      {
        title: '컴포넌트 카탈로그 ① Basic — 화면 구조와 기본 요소',
        slide: '216~217쪽',
        table: {
          head: ['컴포넌트', '전용 태그', '기능'],
          rows: [
            ['Button', '<el-button>', '다양한 색상, 크기, 비활성화 등을 지원하는 실무 표준 버튼 컴포넌트'],
            ['Container', '<el-container>', '레이아웃 외곽을 잡는 부모 컨테이너 (<el-header>, <el-aside> 등과 결합)'],
            ['Icon', '<el-icon>', '시스템 아이콘(화살표, 검색 등)을 손쉽게 주입하는 전용 아이콘 시스템'],
            ['Layout', '<el-row>, <el-col>', '24분할 기반의 정밀한 반응형 그리드(Grid) 레이아웃 배치 시스템'],
            ['Link', '<el-link>', '스타일 처리와 밑줄, 아이콘 결합이 내장된 텍스트 하이퍼링크 부품'],
            ['Text', '<el-text>', '크기, 두께, 말줄임표(Truncate) 처리가 손쉬운 표준 텍스트 컴포넌트'],
            ['Scrollbar', '<el-scrollbar>', '브라우저 기본 스크롤바 대신 세련된 커스텀 스크롤바를 씌우는 부품'],
            ['Space', '<el-space>', '자식 컴포넌트들 간의 가로/세로 여백(Gap)을 균일하게 통제하는 인프라'],
            ['Splitter', '<el-splitter>', '화면을 좌우/상하로 분할하고 마우스 드래그로 너비를 조절하는 레이아웃 부품'],
            ['Config Provider', '<el-config-provider>', '프로젝트 전체의 다국어 언어팩(Locale), 컴포넌트 기본 크기, z-index 를 일괄 제어'],
            ['Border / Color / Typography', '(CSS Utility)', '테두리 둥글기·두께, 브랜드 색상 세트, 표준 글꼴·크기·행간 명세'],
          ],
        },
      },
      {
        title: '컴포넌트 카탈로그 ② Form — 입력과 검증',
        slide: '218~219쪽',
        body: '회원가입, 조건 검색 등 데이터를 입력하고 검증하는 컴포넌트입니다.',
        table: {
          head: ['컴포넌트', '전용 태그', '기능'],
          rows: [
            ['Form', '<el-form>, <el-form-item>', '입력창들을 감싸서 실시간 데이터 검증(Validation) 및 경고 메시지를 뿜는 통제소'],
            ['Input', '<el-input>', '기본 텍스트, 비밀번호(눈 아이콘), 한 번에 지우기(X) 등을 지원하는 필수 인풋'],
            ['Input Number', '<el-input-number>', '오직 숫자만 입력받으며 +, - 버튼으로 수량을 조절하는 전용 인풋'],
            ['Autocomplete', '<el-autocomplete>', '사용자가 입력 시 백엔드 추천 검색어 목록을 아래에 즉시 띄워주는 인풋창'],
            ['Cascader', '<el-cascader>', '시/도 → 구/군 → 동 처럼 계층 구조의 데이터를 단계별로 선택하는 창'],
            ['Checkbox / Radio', '<el-checkbox> / <el-radio>', '다중 선택 및 그룹화 / 여러 단일 선택 중 무조건 1개만 고르도록 통제'],
            ['Select', '<el-select>', '화살표를 누르면 하부 옵션 목록이 슬라이딩 드롭다운되는 표준 선택 상자'],
            ['Virtualized Select', '<el-select-v2>', '옵션이 수만 개일 때 화면 버벅임 없이 렌더링하는 가상 스크롤 버전'],
            ['Date / DateTime Picker', '<el-date-picker>, <el-date-time-picker>', '실무 빈도 최상. 달력이 팝업되어 날짜(및 시간)를 선택하는 부품'],
            ['Time Picker / Select', '<el-time-picker> / <el-time-select>', '시:분:초 정밀 선택 / 09:00, 09:30 등 미리 지정된 목록 중 선택'],
            ['Switch', '<el-switch>', 'ON/OFF, 토글 모드, 다크모드 스위칭을 시각적으로 변환하는 버튼'],
            ['Slider / Rate', '<el-slider> / <el-rate>', '바 위의 슬라이더로 수치 범위 지정 / 별점(★)을 클릭·드래그로 입력'],
            ['Color Picker', '<el-color-picker>', '마우스 클릭으로 웹 표준 컬러차트에서 색상을 선택하는 부품'],
            ['Transfer / TreeSelect', '<el-transfer> / <el-tree-select>', '좌우 바구니로 항목 이동 / 트리 구조를 품은 드롭다운 선택 상자'],
            ['Upload', '<el-upload>', '마우스 클릭 혹은 드래그 앤 드롭으로 파일을 첨부해 백엔드로 전송하는 인프라'],
            ['Input Tag / OTP / Mention', '<el-input-tag>, <el-input-otp>, <el-mention>', '엔터로 태그 칩 생성 / 인증번호 칸 분리 입력 / @ 멘션 창'],
          ],
        },
      },
      {
        title: '컴포넌트 카탈로그 ③ Data — 받아온 데이터를 뿌리기',
        slide: '220~221쪽',
        body: '백엔드에서 전달받은 데이터 등을 표나 리스트로 가공해 뿌리는 컴포넌트입니다.',
        table: {
          head: ['컴포넌트', '전용 태그', '기능'],
          rows: [
            ['Table', '<el-table>', '실무 점유율 1위. 정렬, 필터, 열 고정, 합계 연산이 탑재된 끝판왕 그리드 표'],
            ['Card', '<el-card>', '외곽 섀도우 펜스를 치는 만능 레이아웃 블록'],
            ['Pagination', '<el-pagination>', '데이터가 많을 때 [1] [2] [3] … [다음] 구조로 페이지를 쪼개주는 네비게이터'],
            ['Progress', '<el-progress>', '진행률이나 다운로드 게이지 바를 퍼센트(%) 애니메이션 그래프로 보여주는 바'],
            ['Skeleton', '<el-skeleton>', '실제 데이터가 오기 전, 회색빛 유령 레이아웃을 띄워 유저의 체감 속도를 높이는 버퍼'],
            ['Empty', '<el-empty>', '"조회된 검색 결과가 없습니다" 라는 안내 이미지와 문구를 자동 배치'],
            ['Tag / Badge', '<el-tag> / <el-badge>', '상태값을 색상 배지로 강조 / 알림 아이콘 우측 상단에 숫자 배지'],
            ['Avatar / Image', '<el-avatar> / <el-image>', '프로필 사진 크롭 / 로딩 실패 시 대체 이미지 및 클릭 확대(Viewer)'],
            ['Descriptions', '<el-descriptions>', '이름 : 홍길동 / 나이 : 20 구조의 정갈한 명세서 표'],
            ['Calendar / Countdown', '<el-calendar> / <el-countdown>', '월간 달력 판 / 종료 시간까지 실시간 초 단위 카운팅'],
            ['Timeline / Tree', '<el-timeline> / <el-tree>', '시간 흐름순 이력을 수직선 그래프로 / 계층형 아코디언 구조'],
            ['Carousel / Collapse', '<el-carousel> / <el-collapse>', '좌우 슬라이딩 이미지 뷰어 / 눌러서 펼쳐지는 접이식 메뉴'],
            ['Statistic / Result', '<el-statistic> / <el-result>', '숫자에 콤마를 달아 강조 / 결제 성공·실패 통짜 결과 화면'],
            ['Infinite Scroll / Watermark', 'v-infinite-scroll / <el-watermark>', '스크롤 끝에서 자동 이어붙이기 / 화면 뒤에 투명 워터마크'],
            ['Tour', '<el-tour>', '신규 유저에게 "여기를 클릭하세요" 팝업 팁을 돌며 안내하는 튜토리얼'],
          ],
        },
      },
      {
        title: '컴포넌트 카탈로그 ④ Navigation · Feedback · Others',
        slide: '222~224쪽',
        table: {
          head: ['분류', '컴포넌트 / 태그', '기능'],
          rows: [
            ['Navigation', 'Tabs <el-tabs>', '한 화면 안에서 탭을 누를 때마다 하부 본문만 스위칭해 주는 전환 탭'],
            ['Navigation', 'Menu <el-menu>', '사내 시스템 좌측에 들어가는 아코디언 사이드바 내비게이션 메뉴 시스템'],
            ['Navigation', 'Breadcrumb <el-breadcrumb>', '현재 위치 경로를 Dashboard > Weather > Suwon 형태로 정렬해 주는 텍스트 바'],
            ['Navigation', 'Dropdown <el-dropdown>', '마우스를 올리거나 클릭하면 하부 액션 메뉴 목록이 내려오는 드롭다운'],
            ['Navigation', 'Steps <el-steps>', '정보입력 → 본인인증 → 가입완료 단계 진행 상태를 숫자로 시각화하는 바'],
            ['Navigation', 'Anchor / Backtop / Page Header', '목차 워프 링크 / 맨 위로 이동 버튼 / 뒤로가기 + 서브 타이틀 헤더'],
            ['Feedback', 'Message (ElMessage)', '화면 상단 중앙에 2초간 "저장 완료" 토스트 알림을 띄우고 사라지는 일시 알림창'],
            ['Feedback', 'MessageBox (ElMessageBox)', '브라우저 구식 alert(), confirm() 을 완벽히 대체하는 세련된 최종 확인 팝업창'],
            ['Feedback', 'Notification (ElNotification)', '화면 우측 구석에서 윈도우 알림처럼 상세 메시지 카드를 띄워주는 고급 알림창'],
            ['Feedback', 'Dialog <el-dialog>', '화면 중앙에 어두운 딤드(Dimmed) 처리를 하고 팝업창을 띄우는 정석 모달창'],
            ['Feedback', 'Drawer <el-drawer>', '스마트폰 앱 메뉴처럼 화면 우측이나 좌측에서 서랍장이 열리는 슬라이드 창'],
            ['Feedback', 'Loading (v-loading 디렉티브)', '태그에 이 지시어만 적어주면 데이터 수신 중일 때 회전 스피너와 막을 쳐주는 사양'],
            ['Feedback', 'Alert / Popconfirm / Popover / Tooltip', '상단 고정 알림 띠 / 버튼 위 작은 확인창 / 상세 설명 풍선 / 짧은 힌트'],
            ['Others', 'Affix <el-affix>', '스크롤을 내려도 특정 메뉴나 버튼이 화면 최상단에 고정되어 따라오는 장치'],
            ['Others', 'Segmented <el-segmented>', '라디오 버튼을 가로형 슬라이딩 스위치 바 탭 형태로 진화시킨 제어 컨트롤러'],
            ['Others', 'Animate (CSS Utility)', '컴포넌트들이 나타나거나 사라질 때 주는 내장 애니메이션 효과 세트'],
          ],
        },
        note: 'Message · MessageBox · Notification 은 태그가 아니라 JS 함수로 부른다. import { ElMessage } from "element-plus" 처럼 가져와 ElMessage.success("저장 완료") 로 쓴다.',
      },
      {
        title: '실습 1 — 회원가입 폼과 검증',
        slide: '225쪽',
        body: '<el-card> 안에 <el-input>(이메일), <el-switch>(약관 동의), <el-button>(가입)을 배치하고, 버튼을 누를 때 값을 검사해 ElMessage 로 결과를 알립니다.',
        code: {
          caption: 'userForm 객체와 검증',
          text: `const userForm = ref({
  email: '',
  agree: false,
})

const handleRegister = () => {
  if (!userForm.value.email.includes('@')) {
    ElMessage.error('올바른 이메일 형식이 아닙니다.')
    return
  }
  if (!userForm.value.agree) {
    ElMessage.warning('이용약관에 동의하셔야 합니다.')
    return
  }
  ElMessage.success('가입 신청이 정상적으로 완료되었습니다!')
}`,
        },
        note: 'ElMessage 는 error · warning · success · info 네 가지를 가진다. 검증에 걸리면 return 으로 즉시 빠져나가는 것이 핵심이다.',
      },
      {
        title: '실습 2 — 수량과 평점',
        slide: '226쪽',
        body: '<el-input-number> 로 구매 수량을, <el-rate> 로 별점을 입력받아 실시간 요약을 보여줍니다.',
        code: {
          caption: '반응형 데이터',
          text: `const productQuantity = ref(1)   // 수량 카운터 기본값
const productRate = ref(4)       // 별점 기본값 (별 4개)

// <el-input-number v-model="productQuantity" :min="1" :max="10" />
// <el-rate v-model="productRate" />
// 실시간 장부 요약: 선택 수량 {{ productQuantity }}개 / 내가 준 점수 {{ productRate }}점`,
        },
      },
      {
        title: '실습 3 — 확인 팝업과 진행률',
        slide: '227쪽',
        body: 'ElMessageBox.confirm 으로 삭제를 되묻고, <el-progress> 로 진행률을 애니메이션합니다. confirm 은 Promise 를 돌려주므로 .then(확인) / .catch(취소) 로 갈립니다.',
        code: {
          caption: '파일 삭제 Confirm + 게이지 바',
          text: `const confirmDelete = () => {
  ElMessageBox.confirm('서버에서 해당 파일을 영구히 삭제하시겠습니까?', '최종 경고', {
    confirmButtonText: '네, 삭제합니다',
    cancelButtonText: '취소',
    type: 'danger',
  })
    .then(() => ElMessage.success('파일이 안전하게 파쇄되었습니다.'))
    .catch(() => ElMessage.info('삭제 작업이 취소되었습니다.'))
}

const downloadProgress = ref(0)
const isDownloading = ref(false)

const startDownload = () => {
  if (isDownloading.value) return
  isDownloading.value = true
  downloadProgress.value = 0

  const interval = setInterval(() => {
    downloadProgress.value += 20
    if (downloadProgress.value >= 100) {
      clearInterval(interval)
      isDownloading.value = false
      ElMessage.success('대용량 데이터 로드가 완료되었습니다!')
    }
  }, 400)
}`,
        },
        note: '취소를 누르면 reject 되어 catch 로 간다. catch 를 빼먹으면 콘솔에 처리되지 않은 Promise 경고가 뜬다.',
      },
    ],

    checklist: [
      'UI 라이브러리를 쓰면 무엇이 절감되는지 세 가지로 말할 수 있다',
      'Element Plus 를 국내에서 많이 쓰는 이유를 비교표로 설명할 수 있다',
      'main.js 에 라이브러리와 CSS 를 등록하는 두 줄을 외우지 않고도 찾아 쓸 수 있다',
      '태그로 쓰는 컴포넌트와 JS 함수로 부르는 컴포넌트(ElMessage 등)를 구분할 수 있다',
      'el-form 검증과 직접 if 로 검증하는 방식의 차이를 안다',
      'ElMessageBox.confirm 이 Promise 를 돌려준다는 점과 취소가 catch 로 간다는 점을 안다',
    ],

    quiz: [
      {
        q: 'el-button 은 나오는데 스타일이 하나도 없다. 무엇을 빠뜨렸나?',
        a: "import 'element-plus/dist/index.css' 다. 컴포넌트 등록과 CSS 로드는 별개다.",
      },
      {
        q: 'ElMessage 를 쓰려면 템플릿에 어떤 태그를 적어야 하는가?',
        a: '적지 않는다. 태그가 아니라 JS 함수라서 import 해서 호출만 하면 화면에 알아서 떠오른다.',
      },
      {
        q: 'ElMessageBox.confirm 에서 사용자가 취소를 눌렀다. 코드의 어디로 가는가?',
        a: 'catch 로 간다. 확인은 then, 취소는 catch 다. catch 가 없으면 처리되지 않은 Promise 경고가 뜬다.',
      },
      {
        q: '데이터가 오기 전 화면이 텅 비어 보인다. 어떤 컴포넌트가 어울리나?',
        a: 'el-skeleton 이다. 회색 유령 레이아웃을 미리 깔아 체감 속도를 높인다. 결과가 없을 때는 el-empty 를 쓴다.',
      },
    ],
  },
}

/** 이 챕터에 정리 노트가 있는지 */
export const notesOf = (chapterId) => chapterNotes[chapterId] ?? null
