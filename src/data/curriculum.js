/**
 * 커리큘럼 단일 소스(Single Source of Truth)
 * ------------------------------------------------------------------
 * 화면(홈 / 학습 & 챌린지 / 제출 과제 / 제출 점검)은 모두 이 파일을 읽어서 그려진다.
 * 새 실습이나 과제를 붙일 때는 이 파일에 항목만 추가하면 된다.
 * 자세한 방법은 docs/CONTENT_GUIDE.md 참고.
 *
 * 출처: 1) Full-stack Engineering_3.Frontend-framework_Vue.js_강병호_0729.pdf (총 276쪽)
 */

/* ------------------------------------------------------------------ */
/* 1. 챕터 — 교안의 대단원                                              */
/* ------------------------------------------------------------------ */

export const chapters = [
  {
    id: 1,
    code: 'CH01',
    title: 'Vue.js 시작하기',
    subtitle: '개발환경 · 프로젝트 생성 · Vite',
    slides: '8~38쪽',
    summary:
      'Vue가 무엇이고 왜 쓰는지, 그리고 내 컴퓨터에 개발환경을 갖춰 inwoo-vue 프로젝트를 띄우기까지의 과정입니다.',
    topics: ['MVVM', 'Virtual DOM', 'SPA', 'Node.js · npm', 'Project Scaffolding', 'Vite', 'HMR'],
  },
  {
    id: 2,
    code: 'CH02',
    title: 'Vue 문법',
    subtitle: '반응성 · 디렉티브 · 이벤트 · 폼',
    slides: '40~98쪽',
    summary:
      '데이터를 화면에 꽂고(보간법·디렉티브), 사용자의 행동에 반응하고(이벤트), 입력값을 주고받는(v-model) Vue의 기본 문법입니다.',
    topics: ['Reactivity', 'Interpolation', 'v-bind', 'v-if / v-for', 'v-on', 'v-model', 'Scoped Style'],
  },
  {
    id: 3,
    code: 'CH03',
    title: 'Composition API',
    subtitle: 'ref · reactive · computed · watch',
    slides: '100~126쪽',
    summary:
      '데이터가 화면을 움직이게 만드는 엔진입니다. 반응형 상태를 선언하고, 파생값을 계산하고, 변화를 감시합니다.',
    topics: ['ref()', 'reactive()', 'computed()', 'watch()', 'watchEffect()'],
  },
  {
    id: 4,
    code: 'CH04',
    title: 'Vue Component',
    subtitle: '생명주기 · Props · Emits · Slot',
    slides: '128~158쪽',
    summary:
      '화면을 재사용 가능한 부품으로 나누고, 부품끼리 데이터를 주고받는 규칙을 배웁니다.',
    topics: ['Lifecycle Hooks', 'defineProps()', 'defineEmits()', 'Slot', 'Provide/Inject'],
    /* 실습 전에 먼저 읽는 지도. 규칙은 하나뿐이라는 걸 잡아주는 자리다. */
    orientation: {
      rule: '데이터는 위에서 아래로만 흐른다.',
      lead:
        '이 챕터의 문법이 여러 개라 예외가 많아 보이지만, 실제 규칙은 위 한 줄뿐입니다. Vue가 금지하는 건 딱 하나 — 자식이 부모의 값을 직접 바꾸는 것, 형제가 형제를 직접 만지는 것입니다. 아래 네 가지는 서로 다른 문법이 아니라, 같은 파이프에 실리는 화물이 다른 것뿐입니다.',
      cargo: [
        { name: 'props', payload: '값 (문자열 · 숫자 · 객체)', dir: '아래로' },
        { name: 'slot', payload: '화면 조각 (HTML 덩어리)', dir: '아래로' },
        { name: 'provide / inject', payload: '값을, 중간을 건너뛰고', dir: '아래로' },
        { name: 'emit', payload: '"이런 일이 생겼다"는 신호 (값이 아님)', dir: '위로' },
      ],
      why:
        '왜 이렇게까지 불편하게 만들까요? 컴포넌트가 서로 아무나 만질 수 있으면, 값이 이상해졌을 때 **범인을 찾을 수가 없습니다** — 100개 컴포넌트가 전부 용의자가 됩니다. 단방향을 강제하면 "이 값은 위에서 내려온 것" 하나로 추적 경로가 딱 하나가 됩니다. **불편한 것이 목적입니다.**',
      priority: [
        { name: 'props + emit', weight: '90%', when: '거의 항상. 이것만 확실히 하면 됩니다', level: 'core' },
        { name: 'slot', weight: '가끔', when: '카드 · 모달처럼 껍데기를 재사용할 때', level: 'mid' },
        { name: 'provide / inject', weight: '드묾', when: '실무에선 대부분 Pinia(CH06)로 해결합니다', level: 'low' },
        { name: 'scoped slot', weight: '드묾', when: '남이 쓸 컴포넌트를 만들 때', level: 'low' },
      ],
      keep:
        '부모가 `:값`으로 내려주고, 자식이 `emit`으로 알린다. **자식은 받은 값을 절대 직접 고치지 않는다.**',
    },
  },
  {
    id: 5,
    code: 'CH05',
    title: 'Vue Router',
    subtitle: '주소에 따라 화면 바꾸기',
    slides: '160~177쪽',
    summary:
      'SPA에서 페이지를 이동시키는 방법입니다. 주소와 컴포넌트를 연결하고, 동적 경로와 404를 처리합니다.',
    topics: ['createRouter', 'RouterLink / RouterView', 'useRoute()', 'useRouter()', 'Navigation Guard'],
  },
  {
    id: 6,
    code: 'CH06',
    title: 'Pinia',
    subtitle: 'Store와 전역 상태 관리',
    slides: '179~191쪽',
    summary:
      '여러 컴포넌트가 함께 쓰는 데이터를 한곳에 모아두는 공용 사물함입니다.',
    topics: ['defineStore()', 'state · getters · actions', 'storeToRefs()', 'JWT 로그인 흐름'],
  },
  {
    id: 7,
    code: 'CH07',
    title: 'Axios',
    subtitle: '서버와 데이터 주고받기',
    slides: '193~209쪽',
    summary:
      'HTTP로 외부 API를 호출해 실제 데이터를 화면에 가져옵니다. OpenWeather API를 연동합니다.',
    topics: ['HTTP · REST API', 'axios.get()', 'async / await', 'OpenWeather API'],
  },
  {
    id: 8,
    code: 'CH08',
    title: 'Element Plus',
    subtitle: 'UI 컴포넌트 라이브러리',
    slides: '211~228쪽',
    summary:
      '이미 만들어진 버튼·폼·다이얼로그를 가져다 써서 화면 완성도를 빠르게 끌어올립니다.',
    topics: ['el-button · el-card', 'el-form · el-input', 'ElMessage', 'ElMessageBox'],
  },
  {
    id: 9,
    code: 'CH09',
    title: 'Modern JavaScript',
    subtitle: '데이터 처리 · 비동기 · 불변성',
    slides: '230~250쪽',
    summary:
      'Vue 코드 곳곳에 등장하는 ES6+ 문법을 정리합니다. 구조 분해, 스프레드, async/await가 핵심입니다.',
    topics: ['구조 분해 할당', 'Spread / Rest', 'Template Literals', 'Promise · async/await', '?. 와 ??'],
  },
  {
    id: 10,
    code: 'CH10',
    title: '품질과 배포',
    subtitle: 'ESLint · Prettier · 환경변수 · Build',
    slides: '252~274쪽',
    summary:
      '코드 품질을 점검하고, API 키를 안전하게 분리하고, 빌드해서 배포하는 마무리 단계입니다.',
    topics: ['ESLint', 'Prettier', '.env / import.meta.env', 'vite build', 'GitHub Pages'],
  },
]

/* ------------------------------------------------------------------ */
/* 2. 코드 챌린지 — 교안의 Code Challenge 21개                          */
/* ------------------------------------------------------------------ */
/*
 * practices: 이 챌린지에 연결된 실습 컴포넌트 파일명(확장자 제외).
 *            src/components/practices/ 에 있는 파일이 자동으로 등록된다.
 *            비어 있으면 화면에 "실습 준비 중" 안내가 표시된다.
 * status:    'done' | 'todo'
 */

export const challenges = [
  /* ---------------- CH01 ---------------- */
  {
    id: 0,
    chapterId: 1,
    label: '준비 실습',
    title: '개발환경 구성과 프로젝트 생성',
    slidePage: '36~38쪽',
    studyRange: '8~35쪽',
    goal: 'Node.js와 VS Code 확장을 설치하고, inwoo-vue 프로젝트를 생성해 개발 서버를 띄웁니다.',
    lecture: {
      intro:
        '집을 짓기 전에 터를 닦고 비계를 세우는 단계입니다. Vue 코드를 한 줄도 쓰지 않지만, 이 준비가 없으면 아무것도 실행되지 않습니다. 명령어 세 줄이면 폴더 20개짜리 프로젝트가 30초 만에 만들어집니다.',
      summary:
        'Project Scaffolding(29쪽)은 개발에 필요한 기본 디렉터리 구조, 빌드/스타일 설정, 공통 모듈을 자동 생성해 초기 개발 환경(뼈대)을 구성하는 작업입니다. 팀 전체가 동일한 구조에서 시작할 수 있게 해 줍니다.',
      points: [
        'Vue는 국내 SI 실무에서 널리 쓰이는 프레임워크로, React·Angular 중 가장 가볍고 배우기 쉽다.',
        'MVVM: 데이터만 바꾸면 화면은 Vue가 알아서 갱신한다.',
        'Virtual DOM: 메모리의 설계도 사본과 비교해 바뀐 부분만 실제 화면에 반영한다.',
        'SPA: HTML 한 장만 받고 이후에는 JS가 내용만 교체한다.',
        '설치 프롬프트에서 Router·Pinia·ESLint·Prettier는 Yes, TypeScript·JSX·Vitest·E2E는 No를 선택한다.',
      ],
      syntax: [
        {
          code: `npm create vue@latest   # 뼈대 생성 (Scaffolding)
cd inwoo-vue
npm install             # 라이브러리 설치 → node_modules/ 생성
npm run format          # Prettier로 초기 코드 정리
npm run dev             # 개발 서버 → localhost:5173`,
          parts: [
            { token: 'npm', role: 'Node.js에 딸려 오는 패키지 관리자. 라이브러리 앱스토어 역할' },
            { token: 'create vue@latest', role: 'Vue 공식 프로젝트 생성기를 최신 버전으로 내려받아 실행' },
            { token: 'cd inwoo-vue', role: '만들어진 폴더 안으로 이동. 이걸 빼먹는 실수가 가장 잦다' },
            { token: 'npm install', role: 'package.json에 적힌 라이브러리를 실제로 내려받아 node_modules 생성' },
            { token: 'npm run dev', role: 'package.json의 scripts.dev를 실행. 내부적으로 vite가 돈다' },
          ],
          returns:
            '명령어라서 값을 돌려주지는 않는다. 대신 파일과 폴더가 생기고, 마지막 dev는 localhost:5173에서 도는 개발 서버를 띄운 채 계속 실행된다(끄려면 Ctrl+C).',
          desc: 'create는 뼈대만 만든다. node_modules는 npm install에서 생긴다.',
        },
        {
          code: `<script setup>
// 자바스크립트 영역 (우선 비워둡니다)
</script>

<template>
  <h1>Welcome to SKALA-VUE project!</h1>
</template>`,
          parts: [
            { token: '<script setup>', role: 'JavaScript를 쓰는 방. setup은 Composition API를 간편하게 쓰는 표시' },
            { token: '<template>', role: '화면에 보일 HTML을 쓰는 방. 컴포넌트마다 하나씩 있다' },
            { token: '<h1>', role: '평범한 HTML. Vue 문법이 없으면 그냥 HTML 그대로 나온다' },
          ],
          returns:
            '.vue 파일 전체가 "컴포넌트 하나"가 되어 App.vue로 export된다. main.js의 createApp(App)이 이것을 받아 화면에 붙인다.',
          desc: '교안 50쪽 — 기본 App.vue를 비우고 인사말 한 줄만 남기면 이 단계는 끝난다.',
        },
      ],
    },
    tasks: [
      'Node.js 설치',
      'VS Code 확장 3종 설치 (Vue Official · ESLint · Prettier)',
      'Chrome Vue Devtools 설치',
      'npm create vue@latest 로 inwoo-vue 생성',
      'localhost:5173 에서 화면 확인',
      'HMR 확인 — 코드 저장 시 새로고침 없이 반영',
    ],
    pitfalls: [
      {
        bad: 'npm create vue@latest 실행 후 바로 npm run dev',
        good: 'npm create vue@latest → cd → npm install → npm run dev',
        why: 'create는 뼈대만 만듭니다. npm install을 건너뛰면 node_modules가 없어서 "vite: command not found" 오류가 납니다.',
      },
      {
        why: '프로젝트를 만든 폴더로 cd 하지 않고 명령어를 실행하는 실수가 가장 잦습니다. 터미널 경로가 프로젝트 안인지 항상 확인하세요.',
      },
      {
        why: 'node_modules 폴더는 절대 직접 수정하거나 Git에 올리지 않습니다. 용량이 매우 크고 npm install로 언제든 다시 만들 수 있습니다.',
      },
      {
        why: 'package.json은 프로젝트의 설명서입니다. 무엇을 하는지 모르는 상태에서 손대면 프로젝트 전체가 실행되지 않을 수 있습니다.',
      },
    ],
    extensions: [
      'Vue Devtools의 Components 탭에서 컴포넌트 트리를 열어 보고, 값을 직접 바꿔 화면이 따라 바뀌는지 확인해 보세요.',
      'src/App.vue의 글자를 바꾸고 저장해 보세요. 새로고침 없이 반영되는 것이 HMR입니다.',
      '터미널에서 npm run build를 실행하고 dist/ 폴더가 어떻게 생겼는지 열어 보세요.',
      'package.json의 scripts 항목을 읽고, dev · build · preview가 각각 무슨 명령인지 정리해 보세요.',
    ],
    practices: [],
    // 조작할 화면이 없는 단계. 설정하면 "실습 준비 중" 안내 대신 이 문장이 표시된다.
    practiceNote:
      '이 단계는 설치와 프로젝트 생성으로 끝납니다. 조작할 실습 화면은 없고, App.vue에 인사말 한 줄만 남은 상태에서 다음 챕터로 넘어갑니다.',
    status: 'done',
  },

  /* ---------------- CH02 ---------------- */
  {
    id: 1,
    chapterId: 2,
    label: 'Code Challenge 01',
    title: '반응형 데이터와 보간법',
    slidePage: '54쪽',
    studyRange: '40~53쪽',
    goal: '일반 변수와 ref() 변수의 차이를 눈으로 확인하고, {{ }} 안에서 JavaScript 표현식을 사용해 봅니다.',
    lecture: {
      intro:
        'Vue를 쓰는 가장 큰 이유가 여기 있습니다. 예전에는 값이 바뀌면 "화면의 저 글자를 이걸로 바꿔라"까지 개발자가 직접 명령해야 했습니다. Vue에서는 데이터만 바꾸면 화면은 알아서 따라옵니다. 단, 아무 변수나 되는 게 아니라 ref()로 감싼 변수만 그렇습니다.',
      summary:
        'Reactivity는 데이터가 바뀌면 화면이 자동으로 다시 그려지는 특성입니다. Text Interpolation({{ }})은 그 값을 화면에 꽂아 넣는 문법이며, 안쪽은 단순 문자열이 아니라 JavaScript 표현식이 실행되는 자리입니다.',
      points: [
        'let으로 만든 **일반 변수는 값이 바뀌어도 화면이 그대로**다. Vue가 변화를 감지하지 못한다.',
        '**ref()로 감싼 변수만 화면이 따라 바뀐다.**',
        '**script에서는 `.value`를 붙이고, template에서는 생략**한다(자동 언래핑).',
        '{{ }} 안에는 표현식만 가능하다. if 문 같은 문장(statement)은 쓸 수 없다.',
        '템플릿에서 접근 가능한 전역은 Math, JSON, Date 등 허용 목록뿐이다. alert·window는 막힌다.',
      ],
      syntax: [
        {
          code: `const count = ref(0)      // 선언
count.value++             // script에서는 .value
{{ count }}               // template에서는 그대로`,
          parts: [
            { token: 'const count', role: '내가 정하는 이름(식별자). 상자를 가리키는 변수' },
            { token: 'ref(0)', role: "Vue 내장 함수 + 초깃값. import { ref } from 'vue' 필요" },
            { token: '.value', role: 'script에서 상자를 여는 뚜껑. template에서는 붙이지 않는다' },
          ],
          returns:
            'ref()는 상자 객체를 돌려준다. 그래서 count 자체는 객체이고, 진짜 숫자는 count.value에 들어 있다.',
          desc: 'ref()는 값을 상자에 담는다. script에서만 상자를 연다.',
        },
        {
          code: `{{ message.toUpperCase() }}
{{ count * 2 }}
{{ isOk ? '가능' : '불가' }}`,
          parts: [
            { token: '{{ }}', role: '보간법(Interpolation). 안쪽이 JavaScript 표현식으로 실행된다' },
            { token: 'message.toUpperCase()', role: '메서드 호출도 가능. 결과 문자열이 출력된다' },
            { token: 'count * 2', role: '연산도 가능. 원본 count는 바뀌지 않는다' },
            { token: "isOk ? '가능' : '불가'", role: '삼항 연산자. if 문은 못 쓰므로 조건 분기는 이걸로' },
          ],
          returns:
            '표현식의 결과가 문자열로 변환되어 화면에 출력된다. 화면이 다시 그려질 때마다 매번 재계산되므로 무거운 계산은 넣지 않는다.',
          desc: '보간법 안에서 메서드 호출·연산·삼항 연산자를 쓸 수 있다.',
        },
      ],
    },
    tasks: [
      '반응형 데이터가 바뀌면 화면이 바뀌는 예제 작성',
      '일반 변수와 ref() 변수의 차이 비교',
      '{{ }} 안에서 JavaScript 표현식 사용',
    ],
    practiceGuide: [
      {
        practice: 'Reactivity와 보간법',
        do: '"일반 변수 증가" 버튼을 5번 눌러 보세요.',
        see: '화면의 숫자가 0에서 그대로 멈춰 있습니다.',
        why: 'let으로 만든 변수라 값은 실제로 5까지 올라갔지만, Vue가 변화를 감지하지 못해 화면을 다시 그리지 않습니다.',
      },
      {
        do: '이어서 "반응형 변수 증가"를 한 번 눌러 보세요.',
        see: '반응형 숫자는 1이 되고, 그 순간 일반 변수도 갑자기 5로 바뀝니다.',
        why: '반응형 값이 바뀌어 화면이 통째로 다시 그려질 때, 일반 변수의 최신 값이 "묻어서" 함께 표시된 것입니다. 일반 변수가 반응형이 된 게 아닙니다.',
      },
      {
        do: '"대문자 변환" 줄과 "Random number" 줄을 보세요.',
        see: 'toUpperCase()와 Math.ceil()의 결과가 출력됩니다.',
        why: '{{ }} 안은 단순 문자열이 아니라 JavaScript 표현식이 실행되는 자리이기 때문입니다.',
      },
      {
        do: '아무 버튼이나 눌러 화면을 다시 그려 보세요.',
        see: 'Random number 값이 매번 바뀝니다.',
        why: '화면이 다시 그려질 때마다 {{ }} 안의 표현식도 다시 계산됩니다. 그래서 무거운 계산은 여기 넣으면 안 됩니다.',
      },
    ],
    pitfalls: [
      {
        bad: 'let count = 0',
        good: 'const count = ref(0)',
        why: '화면에 보여줄 값은 반드시 ref()로 감싸야 합니다. 일반 변수는 바뀌어도 화면이 반응하지 않습니다.',
      },
      {
        bad: 'count++  (script 안에서)',
        good: 'count.value++',
        why: 'script에서는 상자를 열어야 하므로 .value가 필요합니다. 빼먹으면 값이 바뀌지 않거나 NaN이 됩니다.',
      },
      {
        bad: '{{ count.value }}',
        good: '{{ count }}',
        why: 'template에서는 Vue가 자동으로 상자를 열어줍니다. .value를 붙이면 undefined가 출력됩니다.',
      },
      {
        bad: '{{ if (isOk) { ... } }}',
        good: "{{ isOk ? '가능' : '불가' }}",
        why: '{{ }} 안에는 값이 되는 표현식만 넣을 수 있습니다. if 문 같은 문장은 쓸 수 없어 삼항 연산자를 씁니다.',
      },
      {
        bad: '{{ alert("안녕") }}',
        good: 'script에 함수를 만들고 @click으로 호출',
        why: 'template은 허용된 전역만 쓸 수 있는 샌드박스입니다. alert · window · localStorage는 막혀 있습니다.',
      },
    ],
    extensions: [
      { practice: 'Reactivity와 보간법', text: 'ref()에 배열을 담고 {{ }}에서 .length와 .join(", ")을 출력해 보세요.' },
      {
        practice: 'Reactivity와 보간법',
        text: '{{ }} 안에서 new Date().getFullYear()를 써 보세요. Date는 허용 목록에 있어 동작합니다.',
      },
      { practice: 'Reactivity와 보간법', text: '숫자를 3자리마다 쉼표로 끊어 표시해 보세요. toLocaleString()을 쓰면 됩니다.' },
      { practice: 'Reactivity와 보간법', text: '{{ }} 안에 복잡한 계산식을 넣어보고, 나중에 배울 computed()로 옮기면 무엇이 좋아질지 생각해 보세요.' },
      { practice: 'Reactivity와 보간법', text: 'ref(0) 대신 ref({ count: 0 })으로 바꿔 보고, 화면과 script에서 접근 방법이 어떻게 달라지는지 비교해 보세요.' },
    ],
    practices: ['ReactivityPractice'],
    status: 'done',
  },
  {
    id: 2,
    chapterId: 2,
    label: 'Code Challenge 02',
    title: 'Vue 디렉티브',
    slidePage: '75쪽',
    studyRange: '55~74쪽',
    goal: 'v-html·v-text·v-bind·v-if·v-for와 특수 디렉티브를 실제로 조작하며 동작 차이를 확인합니다.',
    lecture: {
      intro:
        '디렉티브는 HTML 태그에 붙이는 "Vue 전용 명령어"입니다. 원래 HTML은 정해진 글자만 보여줄 수 있는데, v- 로 시작하는 속성을 붙이면 "조건에 따라 보여줘", "배열만큼 반복해", "이 값을 주소로 써" 같은 지시를 할 수 있습니다. 이번 챕터에서 배우는 v-bind · v-if · v-for 세 개가 실무에서 가장 많이 쓰입니다.',
      summary:
        'Directive는 HTML 요소에 Vue의 동작을 연결하는 v- 접두사 특수 속성입니다. `v-이름:argument.modifier="value"` 구조를 가지며, 따옴표 안은 JavaScript가 실행되는 자리입니다.',
      points: [
        'v-html은 문자열을 실제 HTML로 해석한다. **외부 입력에 쓰면 XSS 위험**이 있으므로 금지.',
        'v-bind(축약형 :)는 HTML 속성에 데이터를 연결한다. class·style 바인딩은 객체/배열 구문을 지원한다.',
        '**v-if는 DOM을 생성·제거**하고, **v-show는 CSS display만** 바꾼다. 자주 토글하면 v-show가 유리.',
        'v-for에는 **반드시 고유한 `:key`**를 붙인다. index보다 데이터의 id가 안전하다.',
        'v-pre·v-cloak·v-once·v-memo는 렌더링을 제어하는 특수 디렉티브다.',
      ],
      syntax: [
        {
          code: `v-bind:href="url"   →   :href="url"
v-on:click="fn"     →   @click="fn"`,
          parts: [
            { token: 'v-bind / v-on', role: '디렉티브 이름. Vue가 정한 것이라 마음대로 바꿀 수 없다' },
            { token: ':href / :click', role: 'Argument. 어떤 속성/이벤트에 걸지 지정한다' },
            { token: '"url" / "fn"', role: 'Value. 따옴표 안은 JavaScript가 실행되는 자리' },
          ],
          returns:
            '디렉티브는 값을 돌려주지 않는다. 대신 Vue가 해당 DOM 요소에 속성을 연결하거나 이벤트 리스너를 등록한다.',
          desc: '가장 많이 쓰는 두 디렉티브에는 축약형이 있다.',
        },
        {
          code: `:class="{ active: isOn }"          // 객체 — 조건이 true인 클래스만
:class="[baseClass, extraClass]"   // 배열 — 여러 클래스 조합
:style="{ color: c, fontSize: s + 'px' }"`,
          parts: [
            { token: 'active', role: '적용할 CSS 클래스 이름. 내가 만든 클래스라 자유롭게 정한다' },
            { token: 'isOn', role: '조건이 되는 반응형 변수. true일 때만 클래스가 붙는다' },
            { token: 'baseClass', role: '문자열이 담긴 변수. 그 값이 클래스 이름이 된다' },
            { token: 'fontSize', role: 'CSS의 font-size를 JavaScript 객체 키로 쓴 것. camelCase 필수' },
            { token: "+ 'px'", role: '단위. 숫자만 넣으면 CSS가 무시한다' },
          ],
          returns:
            '평가 결과가 실제 class 속성 문자열이나 인라인 style로 변환되어 요소에 붙는다. 정적 class와 함께 쓰면 합쳐진다.',
          desc: 'CSS 속성명은 camelCase로 쓴다.',
        },
        {
          code: `<li v-for="city in cities" :key="city.id">
  {{ city.name }}
</li>`,
          parts: [
            { token: 'city', role: '내가 정하는 이름(식별자). 반복 중인 항목 하나를 담는 변수' },
            { token: 'in', role: '고정 문법. of로 써도 동작한다' },
            { token: 'cities', role: '반복할 배열. 보통 ref로 만든 반응형 배열' },
            { token: ':key="city.id"', role: 'Vue가 항목을 구분하는 고유값. index보다 데이터의 id가 안전' },
          ],
          returns:
            '배열 길이만큼 <li> 요소가 복제되어 렌더링된다. v-for가 붙은 태그와 그 자식 전체가 반복 단위다.',
          desc: ':key는 Vue가 항목을 구분하는 식별자다.',
        },
      ],
    },
    tasks: [
      'v-html과 v-text의 차이 확인',
      'v-bind 기본 바인딩 (href · src · disabled)',
      '클래스 바인딩과 스타일 바인딩',
      'v-if / v-else-if / v-else 와 v-show 비교',
      'v-for 로 배열과 객체 반복 출력',
      'v-pre · v-cloak · v-once · v-memo 동작 확인',
    ],
    practiceGuide: [
      {
        practice: 'v-html · v-text 디렉티브',
        do: '"일반 보간법" 줄과 "v-html" 줄을 비교해 보세요.',
        see: '위쪽은 <span style=...> 태그가 글자 그대로 보이고, 아래쪽은 실제 빨간 굵은 글자로 나옵니다.',
        why: '{{ }}는 문자열을 안전하게 그대로 출력하고, v-html은 HTML로 해석해 삽입하기 때문입니다.',
      },
      {
        do: 'XSS 학습 입력창에 <b>굵게</b> 를 입력하고 확인을 눌러 보세요.',
        see: '입력한 태그가 실제로 굵은 글자가 되어 화면에 삽입됩니다.',
        why: '사용자 입력이 그대로 HTML이 된다는 뜻입니다. 악성 스크립트도 같은 방식으로 실행될 수 있어 실무에서는 절대 금지입니다.',
      },
      {
        practice: 'v-bind 디렉티브',
        do: '"잠금 상태 변경"을 눌러 보세요.',
        see: '위쪽 "잠기는 버튼"이 회색으로 비활성화됐다가 다시 눌러지는 상태로 바뀝니다.',
        why: ':disabled="isButtonDisabled" 로 HTML 속성이 데이터와 연결되어 있기 때문입니다.',
      },
      {
        do: '"경고 상태 변경"을 누르고 글자색과 상자 테두리를 함께 보세요.',
        see: '글자가 빨간 굵은 글씨로 바뀌고, 아래 상자 테두리도 회색에서 빨강으로 바뀝니다.',
        why: '객체 구문 :class="{ danger: isWarning }" 과 배열 구문 :class="[a, 조건 ? b : c]" 이 동시에 동작하는 예입니다.',
      },
      {
        do: '"박스 너비" 입력칸의 숫자를 300, 500으로 바꿔 보세요.',
        see: '초록 상자의 가로 길이가 부드럽게 따라 변합니다.',
        why: '미리 만든 클래스로는 표현할 수 없는 실시간 수치라서 :style을 쓰는 경우입니다.',
      },
      {
        practice: 'v-if · v-else · v-show 디렉티브',
        do: '점수 입력칸에 95 / 85 / 75 / 50을 차례로 넣어 보세요.',
        see: 'A · B · C · F 학점 문구가 색깔까지 바뀌며 하나씩만 표시됩니다.',
        why: 'v-if · v-else-if · v-else는 위에서부터 검사해 처음 참인 것 하나만 화면에 만듭니다.',
      },
      {
        do: '"화면 토글하기"를 누른 뒤 개발자도구 Elements 탭에서 파란 상자를 찾아보세요.',
        see: '상자는 사라졌지만 HTML에는 남아 있고 style="display: none"이 붙어 있습니다.',
        why: 'v-show는 DOM을 지우지 않고 CSS로만 숨깁니다. 반면 v-if는 DOM 자체가 없어집니다.',
      },
      {
        practice: 'v-for 디렉티브',
        do: '"객체 반복" 목록을 보세요.',
        see: '[0] name: 홍길동 처럼 값·키·인덱스가 함께 나옵니다.',
        why: 'v-for="(value, key, index) in object" 순서로 세 가지를 받을 수 있습니다. 배열과 순서가 다르니 주의하세요.',
      },
      {
        practice: 'v-pre · v-cloak · v-once · v-memo',
        do: '"숫자 증가"를 눌러 보세요.',
        see: '"일반 값"만 올라가고 "최초 값으로 고정"은 그대로 멈춰 있습니다.',
        why: 'v-once가 붙은 영역은 최초 한 번만 렌더링하고 이후 갱신을 건너뜁니다.',
      },
      {
        do: 'v-pre가 붙은 줄을 보세요.',
        see: '{{ message }} 가 해석되지 않고 글자 그대로 보입니다.',
        why: 'v-pre는 Vue 문법 해석을 끕니다. 문서에서 코드 예시를 보여줄 때 유용합니다.',
      },
    ],
    pitfalls: [
      {
        bad: '<div v-html="userInput">',
        good: '<div>{{ userInput }}</div>',
        why: '사용자가 입력한 값을 v-html로 출력하면 XSS 공격에 뚫립니다. 내가 직접 작성했거나 안전하게 정제한 내용만 넣습니다.',
      },
      {
        bad: '<li v-for="item in items">',
        good: '<li v-for="item in items" :key="item.id">',
        why: ':key가 없으면 목록을 정렬하거나 중간 항목을 지울 때 화면이 엉킵니다. 가능하면 index 대신 데이터의 고유 id를 쓰세요.',
      },
      {
        bad: '<li v-for="item in items" v-if="item.ok">',
        good: 'computed로 걸러낸 배열을 v-for에 넘긴다',
        why: 'Vue 3에서 v-if가 v-for보다 먼저 평가되어 item을 아직 모릅니다. 같은 태그에 두 개를 함께 쓰면 안 됩니다.',
      },
      {
        bad: ':style="{ font-size: size }"',
        good: ":style=\"{ fontSize: size + 'px' }\"",
        why: 'JavaScript 객체의 CSS 속성명은 camelCase로 씁니다. 그리고 숫자만 넣으면 적용되지 않아 단위를 붙여야 합니다.',
      },
      {
        bad: 'href="{{ url }}"',
        good: ':href="url"',
        why: 'HTML 속성 안에서는 보간법이 동작하지 않습니다. 속성에 데이터를 넣을 때는 반드시 v-bind(:)를 씁니다.',
      },
      {
        why: '자주 열고 닫는 UI(탭·토글)는 v-show, 조건이 거의 안 바뀌거나 처음부터 필요 없는 무거운 영역은 v-if가 유리합니다.',
      },
    ],
    extensions: [
      { practice: 'v-if · v-else · v-show 디렉티브', text: '점수에 따라 v-if로 글자를 바꾸는 대신, :class로 등급별 색상 클래스를 붙이도록 바꿔 보세요.' },
      { practice: 'v-for 디렉티브', text: 'v-for에 index를 :key로 쓴 목록을 만들고, 중간 항목을 삭제했을 때 화면이 어떻게 어긋나는지 실험해 보세요.' },
      { practice: 'v-for 디렉티브', text: '과일 배열에 검색 입력창을 추가하고, filter()로 걸러진 결과만 v-for로 출력해 보세요.' },
      { practice: 'v-for 디렉티브', text: 'v-for 안에 v-for를 중첩해 "카테고리 > 상품" 2단 목록을 만들어 보세요.' },
      { practice: 'v-bind 디렉티브', text: ':style로 진행률 바를 만들어 보세요. 너비를 percent + "%" 로 연결하면 됩니다.' },
      { practice: 'v-if · v-else · v-show 디렉티브', text: 'v-show와 v-if를 각각 100개 요소에 적용하고 토글 속도를 체감해 보세요.' },
    ],
    practices: [
      'HtmlTextPractice',
      'BindPractice',
      'ConditionalPractice',
      'ForPractice',
      'SpecialDirectivePractice',
    ],
    status: 'done',
  },
  {
    id: 3,
    chapterId: 2,
    label: 'Code Challenge 03',
    title: '이벤트 처리',
    slidePage: '87쪽',
    studyRange: '76~86쪽',
    goal: 'v-on으로 사용자 행동을 감지하고, 이벤트 객체와 수식어로 동작을 제어합니다.',
    lecture: {
      intro:
        '지금까지는 데이터를 화면에 "보여주기"만 했습니다. 이제 사용자가 클릭하거나 키를 눌렀을 때 반응하는 법을 배웁니다. 버튼에 @click="함수이름" 을 붙이면 끝입니다. 여기에 .prevent 같은 옵션 한 글자를 더하면 원래 JavaScript로 여러 줄 써야 했던 처리를 대신해 줍니다.',
      summary:
        'v-on(축약형 @)은 DOM 요소에 이벤트 리스너를 연결합니다. `@argument.modifier="value"` — argument는 이벤트 이름, modifier는 처리 옵션, value는 실행할 코드입니다.',
      points: [
        '**괄호 없는 `@click="fn"`은 함수의 참조를 등록**한다. `@click="fn()"`은 즉시 실행되어 버린다.',
        '인자를 넘길 때는 @click="fn(값, $event)" 처럼 $event를 명시해야 이벤트 객체를 함께 받을 수 있다.',
        'e.target은 실제로 이벤트를 발생시킨 요소, e.currentTarget은 리스너가 걸린 요소다.',
        '.prevent는 e.preventDefault(), .stop은 e.stopPropagation()과 같다.',
        '수식어는 체이닝할 수 있고, 왼쪽부터 순서대로 실행되므로 순서가 결과를 바꾼다.',
        '**`<form>`에는 `@submit.prevent`가 사실상 필수**다. 없으면 새로고침으로 상태가 초기화된다.',
      ],
      syntax: [
        {
          code: `   v-on : click .prevent = "handleSubmit"
   ─┬──   ──┬──  ───┬───    ──────┬──────
    │       │       │             │
   이름  Argument Modifier      Value`,
          parts: [
            { token: 'v-on', role: '디렉티브 이름. 축약형 @ 를 쓰면 이 부분이 통째로 사라진다' },
            { token: 'click', role: 'Argument — 감지할 이벤트 이름. submit·keyup·input 등' },
            { token: '.prevent', role: 'Modifier — 처리 옵션. 여러 개 이어 붙일 수 있다' },
            { token: '"handleSubmit"', role: 'Value — 실행할 함수 이름 또는 표현식' },
          ],
          returns:
            '값을 돌려주지 않는다. Vue가 addEventListener를 대신 호출해 리스너를 등록하고, 컴포넌트가 사라질 때 알아서 해제해 준다.',
          desc: '모든 디렉티브가 공유하는 4칸 구조.',
        },
        {
          code: `<form  @submit.prevent="save">      새로고침 방지
<button @click.stop.once="like">   버블링 차단 + 1회만
<input  @keyup.enter="search" />   Enter 키에 반응
<div   @click.self="close">        자기 자신 클릭만`,
          parts: [
            { token: '.prevent', role: 'e.preventDefault() 와 동일. 브라우저 기본 동작을 막는다' },
            { token: '.stop', role: 'e.stopPropagation() 과 동일. 부모로 전파되는 것을 막는다' },
            { token: '.once', role: '최초 1회 실행 후 리스너를 제거한다' },
            { token: '.enter', role: '키보드 수식어. Enter를 눌렀을 때만 실행' },
            { token: '.self', role: 'e.target === e.currentTarget 일 때만 실행' },
          ],
          returns:
            '핸들러 함수가 return 한 값은 사용되지 않는다. 이벤트 처리는 "값"이 아니라 "동작"을 만든다.',
          desc: '실무에서 가장 자주 쓰는 조합.',
        },
      ],
    },
    tasks: [
      'v-on 이벤트 핸들러와 축약형 @ 사용',
      'Inline Handler 와 Method Handler 구분',
      '이벤트 객체($event) 사용',
      '.prevent · .stop · .once · .self 수식어 적용',
      '키보드 · 시스템 키 · 마우스 버튼 수식어 확인',
    ],
    practiceGuide: [
      {
        practice: 'Vue 이벤트 핸들링 (v-on)',
        do: '"1씩 증가"(인라인)와 "알림창 띄우기"(메서드) 버튼을 각각 눌러 보세요.',
        see: '앞은 숫자가 올라가고, 뒤는 알림창이 뜹니다.',
        why: '한 줄짜리 동작은 태그 안에 바로(@click="count++"), 여러 줄이면 script의 함수로 분리합니다.',
      },
      {
        do: '"회원 정보와 태그 확인" 버튼을 눌러 보세요.',
        see: '전달한 이름과 클릭된 태그 이름이 함께 표시됩니다.',
        why: '인자를 넘길 때는 @click="fn(값, $event)" 처럼 $event를 명시해야 이벤트 객체도 함께 받을 수 있습니다.',
      },
      {
        do: '"네이버 링크"를 눌러 보세요.',
        see: '페이지가 네이버로 이동하지 않고 그 자리에 머뭅니다.',
        why: '.prevent가 링크의 기본 동작(주소 이동)을 막았기 때문입니다. 폼의 새로고침을 막는 것과 같은 원리입니다.',
      },
      {
        do: '"버블링 발생 버튼"과 "버블링 차단 버튼"을 차례로 눌러 보세요.',
        see: '앞은 자식과 부모 메시지가 둘 다 뜨고, 뒤는 자식 메시지만 뜹니다.',
        why: '클릭은 자식에서 부모로 물방울처럼 올라갑니다(버블링). .stop이 그 전파를 끊습니다.',
      },
      {
        do: '연결 수식어 실습의 체크박스를 두 번 눌러 보세요.',
        see: '첫 클릭은 체크가 안 되고 부모도 반응 안 하지만, 두 번째 클릭부터는 정상 동작합니다.',
        why: '.prevent.stop.once가 함께 걸려 있어, once로 리스너가 제거된 뒤에는 수식어가 사라지기 때문입니다. 수식어는 왼쪽부터 순서대로 적용됩니다.',
      },
    ],
    pitfalls: [
      {
        bad: '@click="handleClick()"',
        good: '@click="handleClick"',
        why: '괄호를 붙이면 화면이 그려지는 순간 즉시 실행되고, 그 반환값(undefined)이 리스너로 등록됩니다. 인자를 넘길 때만 괄호를 씁니다.',
      },
      {
        bad: '<form @submit="save">',
        good: '<form @submit.prevent="save">',
        why: '.prevent가 없으면 제출 후 페이지가 새로고침되어 ref 값이 전부 초기화됩니다. 함수는 실행되기 때문에 원인을 찾기 어렵습니다.',
      },
      {
        bad: '<input @keyup.enter="save" /> 만으로 폼 안에서 처리',
        good: '<input @keyup.enter.prevent="save" />',
        why: '.enter는 "언제 실행할지"만 정합니다. 폼 안에서 Enter를 누르면 여전히 submit이 발생해 새로고침될 수 있습니다.',
      },
      {
        bad: '@click="alert(\'안녕\')"',
        good: 'script에 함수를 만들고 @click="showAlert"',
        why: 'template은 샌드박스라 alert · window 같은 브라우저 전역을 쓸 수 없습니다.',
      },
      {
        bad: '@click.prevent.self="fn"',
        good: '@click.self.prevent="fn"  (의도에 따라)',
        why: '수식어는 왼쪽부터 순서대로 실행되어 순서가 결과를 바꿉니다. 앞이면 모든 클릭의 기본 동작을 막고, 뒤면 self로 걸러진 것만 막습니다.',
      },
      {
        why: '@keyup.left는 키보드 방향키, @click.left는 마우스 왼쪽 버튼입니다. 같은 수식어라도 앞의 이벤트 이름에 따라 의미가 달라집니다.',
      },
    ],
    extensions: [
      { practice: 'Vue 이벤트 핸들링 (v-on)', text: '검색 입력창을 만들고 @keyup.enter로 검색이 실행되게 해 보세요.' },
      { practice: 'Vue 이벤트 핸들링 (v-on)', text: '모달을 만들고 배경에는 @click.self="close", 내용에는 @click.stop을 걸어 "바깥 클릭으로만 닫기"를 구현해 보세요.' },
      { practice: 'Vue 이벤트 핸들링 (v-on)', text: '@keyup.esc로 모달을 닫는 기능을 추가해 보세요.' },
      { practice: 'Vue 이벤트 핸들링 (v-on)', text: '우클릭 메뉴를 @click.right.prevent로 만들어 브라우저 기본 메뉴를 대체해 보세요.' },
      { practice: 'Vue 이벤트 핸들링 (v-on)', text: '@click.ctrl 과 @click.ctrl.exact 를 각각 걸어두고, Ctrl+Shift+클릭을 했을 때 차이를 확인해 보세요.' },
      { practice: 'Vue 이벤트 핸들링 (v-on)', text: '버튼에 .once를 걸어 "좋아요 중복 클릭 방지"를 만들어 보세요.' },
    ],
    practices: ['EventPractice'],
    status: 'done',
  },
  {
    id: 4,
    chapterId: 2,
    label: 'Code Challenge 04',
    title: '폼과 스타일',
    slidePage: '97쪽',
    studyRange: '88~96쪽',
    goal: 'v-model로 폼 요소와 데이터를 양방향으로 묶고, scoped 스타일을 적용합니다.',
    lecture: {
      intro:
        '지금까지는 데이터 → 화면 한 방향이었습니다. 입력창은 반대로 사용자가 화면에서 값을 넣죠. v-model은 이 두 방향을 한 줄로 묶어줍니다. 변수를 고치면 입력창이 바뀌고, 입력창에 타이핑하면 변수가 바뀝니다.',
      summary:
        'v-model은 v-bind의 :value와 v-on의 @input을 합친 축약 문법으로, 입력창과 데이터를 양방향으로 연결합니다(Two-way Data Binding).',
      points: [
        '**`v-model`은 `:value` + `@input`을 합친 축약형**이다.',
        '체크박스 다중 선택은 ref([]) 배열, 라디오·셀렉트는 ref(\'\') 문자열로 선언한다.',
        '.lazy는 change 시점에, .number는 숫자로 변환해서, .trim은 앞뒤 공백을 잘라서 저장한다.',
        '**`<style scoped>`를 빼면 CSS가 전역으로 퍼진다.** 다른 화면 디자인이 깨진다.',
        '한글 입력(IME)은 조합 중 이벤트가 달라서, 원리 확인용으로는 :value + @input을 직접 써 보는 것이 좋다.',
      ],
      syntax: [
        {
          code: `<input v-model="text" />

<!-- 위 한 줄은 아래와 같다 -->
<input :value="text" @input="text = $event.target.value" />`,
          parts: [
            { token: 'v-model', role: '양방향 바인딩 디렉티브. 아래 두 줄을 합친 축약형' },
            { token: ':value="text"', role: '데이터 → 화면 방향. 변수 값을 입력창에 표시' },
            { token: '@input', role: '화면 → 데이터 방향. 입력이 일어날 때마다 실행' },
            { token: '$event.target.value', role: '입력창 DOM 요소가 가진 현재 입력값' },
          ],
          returns:
            '값을 돌려주지 않는다. 대신 text 변수와 입력창이 계속 같은 값을 유지하도록 Vue가 연결을 관리한다.',
          desc: 'v-model의 정체.',
        },
        {
          code: `<input v-model.lazy="msg" />    change 시점에 반영
<input v-model.number="age" />  숫자로 변환
<input v-model.trim="name" />   앞뒤 공백 제거`,
          parts: [
            { token: '.lazy', role: 'input 대신 change 이벤트로 바꾼다. 포커스를 벗어날 때 반영' },
            { token: '.number', role: '입력 문자열을 숫자로 변환해서 저장한다' },
            { token: '.trim', role: '앞뒤 공백을 잘라내고 저장한다' },
          ],
          returns:
            '변수에 저장되는 값의 "형태"가 달라진다. .number를 쓰면 typeof가 string이 아닌 number가 된다.',
          desc: '수식어는 필요한 만큼 이어 붙일 수 있다(.trim.number).',
        },
      ],
    },
    tasks: [
      'v-model 양방향 데이터 바인딩',
      'input · checkbox · radio · select 와 v-model 연결',
      '.lazy · .number · .trim 수식어 적용',
      '<style scoped> 로 컴포넌트 스타일 작성',
    ],
    practiceGuide: [
      {
        practice: 'v-model 양방향 데이터 바인딩',
        do: '위쪽 v-model 입력창과 아래쪽 :value + @input 입력창에 같은 글자를 타이핑해 보세요.',
        see: '두 칸 모두 아래에 입력값이 실시간으로 따라 나옵니다. 동작이 완전히 같습니다.',
        why: 'v-model은 :value와 @input을 합친 축약형이라는 것을 눈으로 확인하는 부분입니다.',
      },
      {
        do: '다중 체크박스(사과·바나나·딸기)를 두 개 이상 체크해 보세요.',
        see: '아래에 ["사과", "딸기"] 처럼 배열로 쌓입니다.',
        why: '같은 v-model에 묶인 체크박스는 ref([]) 배열에 체크된 value들이 모입니다.',
      },
      {
        do: '라디오 버튼(남성/여성)을 바꿔가며 눌러 보세요.',
        see: '하나만 선택되고 값이 문자열로 교체됩니다.',
        why: '라디오와 드롭다운은 ref("") 문자열로 선언합니다. 배열이 아닙니다.',
      },
      {
        do: '.lazy 입력칸에 글자를 치다가, Tab을 누르거나 다른 곳을 클릭해 보세요.',
        see: '타이핑 중에는 값이 안 바뀌다가 포커스를 벗어나는 순간 한꺼번에 반영됩니다.',
        why: '.lazy는 input이 아니라 change 이벤트 시점에 값을 저장하기 때문입니다.',
      },
      {
        do: '.number 입력칸에 25를 입력하고 바로 아래 "데이터 타입" 줄을 보세요.',
        see: 'string이 아니라 number라고 표시됩니다.',
        why: 'HTML 입력값은 기본적으로 항상 문자열입니다. .number가 숫자로 변환해 줍니다.',
      },
      {
        do: '.trim 입력칸에 앞뒤로 공백을 잔뜩 넣고 글자를 써 보세요.',
        see: '따옴표로 감싼 결과에 공백이 사라지고, 문자열 길이도 줄어듭니다.',
        why: '.trim이 저장 시점에 앞뒤 공백을 잘라냅니다. 이메일·아이디 입력에서 필수입니다.',
      },
    ],
    pitfalls: [
      {
        bad: "const fruits = ref('')  // 다중 체크박스용",
        good: 'const fruits = ref([])',
        why: '다중 체크박스는 배열로 선언해야 합니다. 문자열로 두면 true/false만 저장되어 어떤 항목인지 알 수 없습니다.',
      },
      {
        bad: 'const age = ref(0) 후 v-model="age"',
        good: 'v-model.number="age"',
        why: '입력값은 항상 문자열로 들어옵니다. .number 없이 계산하면 20 + 1 이 "201"이 되는 사고가 납니다.',
      },
      {
        bad: '<input :value="text" /> 만 사용',
        good: '<input v-model="text" />',
        why: ':value만 쓰면 화면 → 데이터 방향이 없어서 타이핑해도 변수가 바뀌지 않습니다.',
      },
      {
        bad: '<style>',
        good: '<style scoped>',
        why: 'scoped를 빼면 이 컴포넌트의 CSS가 앱 전체로 퍼져 다른 화면 디자인을 망가뜨립니다.',
      },
      {
        why: '한글은 자음·모음을 조합하는 중(IME)에는 input 이벤트가 다르게 발생합니다. 한글 입력이 이상하면 v-model 대신 @change나 .lazy를 검토하세요.',
      },
    ],
    extensions: [
      { practice: 'v-model 양방향 데이터 바인딩', text: '이름·이메일·비밀번호가 있는 회원가입 폼을 만들고 @submit.prevent로 처리해 보세요.' },
      { practice: 'v-model 양방향 데이터 바인딩', text: '입력값이 비어 있으면 제출 버튼을 :disabled로 잠그도록 만들어 보세요.' },
      { practice: 'v-model 양방향 데이터 바인딩', text: '이메일에 @가 없으면 빨간 경고 문구가 뜨도록 v-if와 computed를 조합해 보세요.' },
      { practice: 'v-model 양방향 데이터 바인딩', text: '체크박스로 선택한 과일 개수를 computed로 세어 "3개 선택됨"을 표시해 보세요.' },
      { practice: 'v-model 양방향 데이터 바인딩', text: '드롭다운 선택에 따라 아래 내용이 바뀌는 2단 선택(시/구) 폼을 만들어 보세요.' },
      { practice: 'v-model 양방향 데이터 바인딩', text: '입력 글자 수 제한(예: 20자)을 만들고 남은 글자 수를 실시간으로 보여 주세요.' },
    ],
    practices: ['ModelPractice'],
    status: 'done',
  },

  /* ---------------- CH03 ---------------- */
  {
    id: 5,
    chapterId: 3,
    label: 'Code Challenge 05',
    title: 'Reactive State — ref와 reactive',
    slidePage: '107쪽',
    studyRange: '100~106쪽',
    goal: 'ref()와 reactive()의 차이를 이해하고 상황에 맞게 선택합니다.',
    lecture: {
      intro:
        'ref는 값을 "상자"에 넣어두는 것입니다. Vue는 상자를 지켜보다가 안의 내용이 바뀌면 화면을 다시 그립니다. 다만 script에서 상자 안을 꺼내려면 뚜껑(.value)을 열어야 하고, template에서는 Vue가 알아서 열어줍니다. reactive는 뚜껑이 없는 대신 객체에만 쓸 수 있습니다.',
      summary:
        'Composition API는 <script setup> 안에서 반응형 상태를 선언하는 방식입니다. ref()는 모든 타입에, reactive()는 객체 전용으로 사용합니다.',
      points: [
        'ref()는 원시값·객체 모두 가능하고, script에서 .value로 접근한다.',
        'reactive()는 객체 전용이며 .value가 없지만, **통째로 재할당하면 반응성이 끊긴다.**',
        '그래서 **실무는 ref()로 통일하는 추세**다.',
        'template에서는 ref가 자동 언래핑되어 .value 없이 쓴다.',
      ],
      syntax: [
        {
          code: `const count = ref(0)`,
          parts: [
            { token: 'const count', role: '내가 정하는 이름(식별자). const로 선언해도 안의 값은 바꿀 수 있다' },
            { token: 'ref(...)', role: "Vue 내장 함수. import { ref } from 'vue' 가 필요하다" },
            { token: '0', role: '초깃값. 숫자·문자열·불린·배열·객체 무엇이든 가능하다' },
          ],
          returns:
            "RefImpl 이라는 객체를 돌려준다. 실제 값은 그 안의 .value에 들어 있다. 그래서 script에서는 count.value, template에서는 {{ count }}로 쓴다.",
          desc: 'const로 선언하는 이유: 상자 자체를 바꾸는 게 아니라 상자 안의 값만 바꾸기 때문이다.',
        },
        {
          code: `const user = reactive({ name: '홍길동', age: 30 })

user.name = '이순신'   // 바로 접근 (.value 없음)`,
          parts: [
            { token: 'const user', role: '식별자. 반응형 객체를 담을 변수' },
            { token: 'reactive(...)', role: 'Vue 내장 함수. 객체와 배열에만 쓸 수 있다' },
            { token: "{ name: ..., age: ... }", role: '초기 객체. 이 안의 속성들이 모두 감시 대상이 된다' },
            { token: 'user.name', role: '.value 없이 속성에 바로 접근한다' },
          ],
          returns:
            'Proxy 객체를 돌려준다. 원본과 똑같이 생겼지만 속성을 읽고 쓸 때 Vue가 가로채서 변화를 감지한다.',
          desc: 'reactive(0) 처럼 숫자를 넣으면 동작하지 않고 경고가 뜬다.',
        },
      ],
    },
    tasks: [
      'ref() 예제 작성',
      'reactive() 예제 작성',
      'script의 .value 와 template 자동 언래핑 차이 확인',
    ],
    practiceGuide: [
      {
        practice: '반응형 상태 ref() 기초',
        do: '"Ref 변수 증가"를 눌러 보세요.',
        see: '카운트가 1씩 올라갑니다.',
        why: 'script의 함수 안에서 count.value++ 로 상자 안의 값을 바꿨기 때문입니다. .value를 빼면 동작하지 않습니다.',
      },
      {
        do: '이름 입력칸에 글자를 타이핑해 보세요.',
        see: '입력칸 오른쪽 글자가 실시간으로 따라 바뀝니다.',
        why: 'ref에 담긴 문자열이 v-model로 양방향 연결되어 있기 때문입니다.',
      },
      {
        do: '"과일 추가"를 눌러 보세요.',
        see: '목록 끝에 "귤"이 붙습니다.',
        why: 'ref에 배열을 담아도 push 같은 내부 변경까지 감지됩니다. 배열은 items.value.push(...)로 접근합니다.',
      },
      {
        do: '"사용자 이름 변경"을 눌러 보세요.',
        see: '이순신이 장보고로 바뀝니다.',
        why: 'ref에 객체를 담으면 user.value.name 처럼 .value를 한 번 거쳐 속성에 접근합니다.',
      },
      {
        practice: '반응형 상태 reactive() 특징 및 주의점',
        do: '"reactive 나이 한 살 추가"를 눌러 보세요.',
        see: '나이가 31세로 올라갑니다.',
        why: 'reactive는 .value 없이 userReactive.age++ 로 바로 접근합니다. 이것이 ref와의 가장 큰 차이입니다.',
      },
      {
        do: '"과일 항목 추가"와 각 항목의 "삭제"를 눌러 보세요.',
        see: '목록이 즉시 늘어나고 줄어듭니다.',
        why: 'reactive로 만든 배열도 push · splice 같은 메서드 호출을 감지해 화면을 갱신합니다.',
      },
      {
        practice: '할 일 목록 — ref 배열 응용',
        do: '입력창에 "우유 사기"를 치고 Enter를 눌러 보세요.',
        see: '목록에 추가되고 입력창이 비워집니다.',
        why: 'todos.value.push()로 배열에 넣고, newTitle.value = "" 로 입력창을 초기화했기 때문입니다. @keyup.enter는 CC03에서 배운 이벤트 수식어입니다.',
      },
      {
        do: '아무것도 입력하지 않고, 또는 공백만 넣고 "추가"를 눌러 보세요.',
        see: '아무 일도 일어나지 않습니다.',
        why: 'trim()으로 공백을 걷어낸 뒤 빈 문자열이면 return으로 함수를 빠져나가게 막아둔 덕분입니다.',
      },
      {
        do: '체크박스를 눌러 완료 표시를 해보세요.',
        see: '글자에 취소선이 생기고 회색으로 흐려지며, 아래 "남은 일" 숫자가 줄어듭니다.',
        why: '배열 안 객체의 done 속성만 바꿨는데도 화면이 갱신됩니다. ref는 안에 담긴 객체의 속성 변경까지 감지합니다.',
      },
      {
        do: '항목을 3개쯤 만든 뒤 가운데 것을 "삭제"해 보세요.',
        see: '그 항목만 사라지고 나머지는 그대로 남습니다.',
        why: 'filter로 "그 id가 아닌 것만" 모은 새 배열을 만들어 통째로 교체했습니다. 원본을 직접 건드리지 않는 불변성 방식입니다(CC16에서 다시 나옵니다).',
      },
      {
        do: '아래 요약 줄의 숫자를 보세요.',
        see: '전체 · 남은 일 · 완료 개수가 실시간으로 바뀝니다.',
        why: 'computed 없이 템플릿에서 todos.filter(...).length 를 직접 계산한 것입니다. CC01에서 배운 "{{ }} 안은 표현식이 실행되는 자리"의 응용입니다.',
      },
      {
        practice: '할 일 목록 응용 2 — 잠금 · 수정 · 필터',
        do: '입력창을 비운 채로 "추가" 버튼을 보세요.',
        see: '버튼이 회색으로 잠겨 있고 마우스를 올리면 금지 커서가 나옵니다. 글자를 치면 바로 풀립니다.',
        why: ':disabled="!newTitle.trim()" 로 잠갔습니다. 다만 화면만 막은 것이라 addTodo 안의 검사 코드는 그대로 남겨둬야 합니다. Enter로는 여전히 들어올 수 있으니까요.',
      },
      {
        do: '할 일 제목을 클릭해 보세요.',
        see: '글자가 입력창으로 바뀌고 커서가 자동으로 들어갑니다.',
        why: 'editingId에 그 항목의 id를 넣어 "지금 몇 번을 수정 중인지" 기억합니다. 커서는 nextTick으로 입력창이 그려질 때까지 기다린 뒤에 넣어야 들어갑니다.',
      },
      {
        do: '제목을 아무렇게나 고치다가 Esc를 눌러 보세요.',
        see: '고치던 내용이 버려지고 원래 제목으로 돌아옵니다.',
        why: '원본(todo.title)이 아니라 복사본(editingTitle)을 고치고 있기 때문입니다. v-model을 원본에 바로 걸었다면 취소할 방법이 없습니다.',
      },
      {
        do: '이번에는 제목을 고치고 Enter를 눌러 보세요. 그 다음 다른 항목을 수정하다 바깥을 클릭해 보세요.',
        see: 'Enter는 확정, 바깥 클릭(blur)도 확정됩니다.',
        why: 'Enter로 확정하면 입력창이 사라지며 blur가 한 번 더 들어올 수 있습니다. confirmEdit 맨 위의 "editingId가 null이면 return" 가드가 그 중복 실행을 막습니다.',
      },
      {
        do: '"남은 일만 보기"를 켠 뒤 남은 항목을 전부 완료 처리해 보세요.',
        see: '목록이 비면서 "🎉 남은 일이 없습니다"가 뜹니다. 필터를 끄면 완료 항목이 다시 보입니다.',
        why: '빈 화면에는 "할 일이 아예 없음"과 "필터 때문에 안 보임" 두 가지 의미가 있어서 v-else-if로 구분했습니다.',
      },
      {
        do: '항목을 추가·삭제하며 아래 집계 숫자를 보세요.',
        see: '전체 · 남은 일 · 완료가 정확히 맞아떨어집니다.',
        why: 'computed로 옮긴 덕분입니다. 의존하는 todos가 바뀔 때만 다시 계산하고, doneCount는 remainingCount라는 다른 computed를 재사용해 filter를 한 번 덜 돕니다.',
      },
      {
        practice: '폼 상태 관리 — ref 여러 개 vs reactive 하나',
        do: '왼쪽(A)과 오른쪽(B)에 같은 값을 입력해 보세요.',
        see: '아래 두 결과 상자의 내용이 똑같습니다.',
        why: '동작은 완전히 같습니다. 차이는 "쓰는 사람이 얼마나 편한가"에 있습니다.',
      },
      {
        do: '양쪽의 "초기화" 버튼을 누르고, 그 아래 회색 코드 상자를 비교해 보세요.',
        see: 'A는 4줄, B는 Object.assign 한 줄입니다.',
        why: 'reactive는 관련된 값이 한 덩어리라서 객체 단위로 통째로 다룰 수 있습니다. 필드가 10개로 늘면 A는 10줄, B는 그대로 한 줄입니다.',
      },
      {
        do: '결과 상자의 코드 모양을 비교해 보세요.',
        see: 'A는 { name: name.value, email: email.value, ... } 처럼 손으로 조립했고, B는 form을 그대로 넘겼습니다.',
        why: '서버로 보내거나 자식 컴포넌트에 넘길 때 reactive는 객체 하나만 전달하면 됩니다. ref 방식은 매번 조립하거나 인자를 여러 개 넘겨야 합니다.',
      },
      {
        do: '소스 코드(</> 아이콘)를 열어 form 선언부를 보세요.',
        see: "reactive({ ...INITIAL_FORM }) 처럼 초깃값을 복사해서 넣었습니다.",
        why: 'INITIAL_FORM을 직접 넘기면 초기화할 때 원본까지 같이 바뀝니다. 스프레드로 복사본을 만들어 원본을 지켰습니다(CC16 불변성의 응용).',
      },
    ],
    pitfalls: [
      {
        bad: 'count++  (script 안)',
        good: 'count.value++',
        why: 'ref는 script에서 반드시 .value를 거칩니다. 빼먹으면 값이 바뀌지 않거나 NaN이 됩니다.',
      },
      {
        bad: '{{ count.value }}  (template 안)',
        good: '{{ count }}',
        why: 'template에서는 자동으로 언래핑됩니다. .value를 붙이면 undefined가 나옵니다.',
      },
      {
        bad: "userReactive = { name: '새이름' }",
        good: "userReactive.name = '새이름'",
        why: 'reactive 객체를 통째로 재할당하면 Vue가 감시하던 Proxy와의 연결이 끊겨 화면이 더 이상 갱신되지 않습니다.',
      },
      {
        bad: 'const count = reactive(0)',
        good: 'const count = ref(0)',
        why: 'reactive는 객체·배열 전용입니다. 숫자·문자열 같은 원시값에는 쓸 수 없습니다.',
      },
      {
        bad: 'const { name } = reactive({ name: "홍길동" })',
        good: 'toRefs()로 분해하거나 user.name 으로 접근',
        why: 'reactive 객체를 구조 분해하면 반응성이 끊어집니다. 값만 복사되기 때문입니다.',
      },
      {
        why: '헷갈리면 전부 ref()로 통일하세요. 실무도 그 방향이고, .value만 기억하면 되어 규칙이 하나로 줄어듭니다.',
      },
    ],
    extensions: [
      { practice: '반응형 상태 reactive() 특징 및 주의점', text: 'ref로 만든 객체와 reactive로 만든 객체를 나란히 두고, 통째로 재할당했을 때 어느 쪽이 화면 갱신을 멈추는지 실험해 보세요.' },
      {
        practice: '할 일 목록 — ref 배열 응용',
        text: '위 세 가지는 아래 "응용 2" 실습에 이미 구현해 두었습니다. 먼저 스스로 만들어 본 뒤 소스를 열어 비교해 보세요.',
      },
      {
        practice: '할 일 목록 응용 2 — 잠금 · 수정 · 필터',
        text: '"전체 / 남은 일 / 완료" 3단 필터로 바꿔 보세요. ref에 문자열을 담고 computed에서 분기하면 됩니다.',
      },
      {
        practice: '할 일 목록 응용 2 — 잠금 · 수정 · 필터',
        text: '수정 중에 Esc를 눌러도 blur가 먼저 발생해 확정되지는 않는지 확인하고, 문제가 있다면 cancelEdit에 플래그를 두어 막아 보세요.',
      },
      {
        practice: '할 일 목록 응용 2 — 잠금 · 수정 · 필터',
        text: '항목에 마감일을 추가하고, 오늘 날짜가 지난 항목만 빨갛게 표시해 보세요.',
      },
      {
        practice: '할 일 목록 응용 2 — 잠금 · 수정 · 필터',
        text: '할 일을 localStorage에 저장했다가 새로고침 후 복원해 보세요. watch를 쓰면 자동 저장이 됩니다(CC06 예습).',
      },
      { practice: '반응형 상태 reactive() 특징 및 주의점', text: 'reactive 객체를 구조 분해해서 화면에 출력해 보고, 값이 안 바뀌는 것을 확인한 뒤 toRefs()로 고쳐 보세요.' },
      { practice: '반응형 상태 reactive() 특징 및 주의점', text: 'Vue Devtools를 열고 ref와 reactive가 각각 어떻게 표시되는지 비교해 보세요.' },
      { practice: '반응형 상태 reactive() 특징 및 주의점', text: '입력 폼의 여러 필드를 reactive 객체 하나로 묶어 관리해 보고, ref 여러 개로 관리할 때와 비교해 보세요.' },
    ],
    practices: [
      'RefStatePractice',
      'ReactiveStatePractice',
      'TodoListPractice',
      'TodoAdvancedPractice',
      'FormStatePractice',
    ],
    status: 'done',
  },
  {
    id: 6,
    chapterId: 3,
    label: 'Code Challenge 06',
    title: 'Computed와 Watchers',
    slidePage: '125쪽',
    studyRange: '108~124쪽',
    goal: '파생 데이터는 computed로, 부수 효과는 watch로 처리하는 기준을 익힙니다.',
    lecture: {
      intro:
        'computed는 엑셀의 수식 셀입니다. "A1 곱하기 2"라고 적어두면 A1이 바뀔 때 알아서 다시 계산되죠. watch는 CCTV입니다. 값이 바뀌는 순간을 지켜보다가 "바뀌었으니 서버에 다시 물어봐" 같은 동작을 실행합니다. 화면에 보여줄 값이면 computed, 무언가를 실행해야 하면 watch입니다.',
      summary:
        'computed()는 다른 데이터로부터 자동 계산되는 값(엑셀의 수식 셀)이고, watch()는 값이 바뀌는 순간 무언가를 실행하는 감시자입니다.',
      points: [
        '**computed는 의존하는 값이 바뀔 때만 다시 계산**되고 결과를 캐싱한다.',
        '**화면에 보여줄 값이면 computed, 무언가를 실행해야 하면 watch.** 이 기준 하나면 충분하다.',
        'watch는 여러 값을 배열로 감시(Multi-Source)할 수 있다.',
        '객체 내부까지 감시하려면 **`{ deep: true }`** 옵션이 필요하다.',
        'watchEffect()는 의존성을 자동으로 추적하며 즉시 한 번 실행된다.',
      ],
      syntax: [
        {
          code: `const double = computed(() => count.value * 2)`,
          parts: [
            { token: 'const double', role: '내가 정하는 이름(식별자). 계산 결과를 담을 변수' },
            { token: 'computed(...)', role: "Vue 내장 함수. 'vue'에서 import 해야 쓸 수 있다" },
            { token: '() => ...', role: '계산 방법을 적은 화살표 함수. computed에 넘기는 인자' },
            { token: 'count.value', role: '의존성. 이 값이 바뀔 때만 다시 계산된다' },
            { token: '* 2', role: '실제 계산식. 화살표 함수가 이 결과를 return 한다' },
          ],
          returns:
            'ref 객체를 돌려준다. script에서는 double.value, template에서는 {{ double }}로 읽는다. 읽기 전용이라 double.value = 5 처럼 직접 대입할 수 없다.',
          desc: '화살표 함수에 중괄호가 없으면 그 식의 결과가 곧 return 값이다.',
        },
        {
          code: `watch(city, (newVal, oldVal) => {
  console.log(oldVal, '→', newVal)
})`,
          parts: [
            { token: 'watch(...)', role: 'Vue 내장 함수. 인자를 두 개 받는다' },
            { token: 'city', role: '1번째 인자 — 감시 대상. ref 변수 이름만 넘긴다 (.value 붙이지 않음)' },
            { token: '(newVal, oldVal) => {}', role: '2번째 인자 — 값이 바뀔 때 실행할 콜백 함수' },
            { token: 'newVal', role: '바뀐 뒤의 값. 이름은 마음대로 정해도 되고 순서로 결정된다' },
            { token: 'oldVal', role: '바뀌기 전의 값. 첫 실행 때는 undefined일 수 있다' },
          ],
          returns:
            '감시를 중단하는 함수(stop)를 돌려준다. const stop = watch(...) 로 받아 stop()을 호출하면 감시가 끝난다. 보통은 안 쓰고 버린다.',
          desc: '콜백 안에서 return 한 값은 쓰이지 않는다. watch는 "값"이 아니라 "동작"을 만든다.',
        },
        {
          code: `watchEffect(() => console.log(query.value))`,
          parts: [
            { token: 'watchEffect(...)', role: 'Vue 내장 함수. 인자를 하나만 받는다' },
            { token: '() => ...', role: '실행할 함수. 감시 대상을 따로 적지 않는다' },
            { token: 'query.value', role: '함수 안에서 읽은 값이 자동으로 의존성이 된다' },
          ],
          returns: 'watch와 마찬가지로 감시 중단 함수를 돌려준다.',
          desc: 'watch와 달리 이전 값을 받을 수 없고, 등록 즉시 한 번 실행된다.',
        },
      ],
    },
    tasks: [
      'computed() 계산값 만들기',
      '단일 값 watch()',
      'Multi-Source Watch',
      'Deep Watch ({ deep: true })',
      'reactive 데이터 감시',
      'watchEffect() 자동 의존성 추적',
    ],
    practiceGuide: [
      {
        practice: 'computed() 캐싱 동작 비교',
        do: '브라우저 콘솔(F12)을 먼저 열어두세요. 이 실습은 콘솔이 핵심입니다.',
        see: '아무 것도 없는 빈 콘솔이 보입니다.',
      },
      {
        do: '"dummy 증가"를 3번 눌러 보세요.',
        see: '콘솔에 "❌ 일반 함수 실행됨!"만 3번 찍히고, "✅ Computed"는 한 번도 안 찍힙니다.',
        why: 'dummy는 computed가 의존하는 값이 아니라서 재계산하지 않고 캐시된 값을 그대로 씁니다. 반면 일반 함수는 화면이 다시 그려질 때마다 무조건 실행됩니다.',
      },
      {
        do: '"count 증가"를 눌러 보세요.',
        see: '이번에는 "❌ 일반 함수"와 "✅ Computed"가 둘 다 찍힙니다.',
        why: 'count는 computed의 의존성이므로 재계산이 필요합니다. 이것이 캐싱의 정체입니다.',
      },
      {
        practice: '감시자 watch()의 원리와 실무 활용',
        do: '"부산 선택"을 눌러 보세요.',
        see: '모니터 박스에 "[서울]에서 [부산]로 변경됨"이 뜨고, 콘솔에 서버 요청 로그가 찍힙니다.',
        why: 'watch 콜백이 (newValue, oldValue)를 받기 때문에 이전 값과 새 값을 모두 쓸 수 있습니다.',
      },
      {
        do: '이미 선택된 "부산"을 한 번 더 눌러 보세요.',
        see: '아무 일도 일어나지 않습니다.',
        why: 'watch는 값이 실제로 바뀔 때만 발동합니다. 같은 값을 다시 넣으면 변경이 아니므로 무시됩니다.',
      },
      {
        practice: '여러 개의 변수 동시 감시 (Multi-Source Watch)',
        do: '도시만 "부산"으로 바꿔 보세요.',
        see: '로그에 도시와 날짜가 함께 나옵니다. 날짜는 안 바꿨는데도 표시됩니다.',
        why: '배열로 감시하면 둘 중 하나만 바뀌어도 콜백이 한 번 실행되고, 두 값 모두 전달됩니다. 조건이 여러 개인 API 호출을 한 번으로 묶을 때 쓰는 패턴입니다.',
      },
      {
        do: '이어서 날짜만 "주간예보"로 바꿔 보세요.',
        see: '이전 값이 (부산, 오늘), 새 값이 (부산, 주간예보)로 찍힙니다.',
        why: '새 값·이전 값 배열은 감시 대상을 적은 순서 [city, dateType] 그대로 매핑됩니다. 순서를 헷갈리면 값이 뒤바뀝니다.',
      },
      {
        practice: 'ref 객체 감시 — Deep Watch',
        do: '"이름만 변경"을 눌러 보세요.',
        see: '파란 deep 모니터만 반응하고, 보라색 타겟 모니터는 그대로입니다.',
        why: 'deep은 객체 안 아무 속성이나 바뀌면 발동하지만, 타겟 감시는 age만 보고 있기 때문입니다.',
      },
      {
        do: '"나이만 변경"을 눌러 보세요.',
        see: '두 모니터가 모두 반응하고, 보라색에는 이전 나이 → 새 나이가 표시됩니다.',
        why: 'deep 감시는 이전 값을 제대로 주지 못합니다(같은 객체라 newVal과 oldVal이 동일). 이전 값이 필요하면 화살표 함수로 특정 속성을 콕 집어야 합니다.',
      },
      {
        practice: 'ref 배열의 특정 인덱스 감시하기',
        do: '"0번 멤버를 손흥민으로 교체"를 눌러 보세요.',
        see: '파란 로그에 홍길동 ➡️ 손흥민 으로 이전 값까지 정확히 나옵니다.',
        why: '() => teamMembers.value[0] 이 가리키는 것이 문자열이라, 값이 바뀌면 곧바로 다른 값으로 인식됩니다.',
      },
      {
        do: '"서울 기온 1도 올리기"를 눌러 보세요.',
        see: '보라색 로그에 온도가 갱신됩니다.',
        why: '이 감시 대상은 객체라서 { deep: true }를 붙였기 때문입니다. deep을 빼면 temp가 아무리 올라가도 반응하지 않습니다 — 같은 객체를 계속 가리키기 때문입니다.',
      },
      {
        practice: 'reactive() 데이터 watch 감시 규칙',
        do: '"가격 500원 인상"을 눌러 보세요.',
        see: '빨간 박스는 이전값·현재값이 둘 다 1500으로 똑같고, 초록 박스만 1000 ➡️ 1500으로 제대로 나옵니다.',
        why: 'reactive 변수명을 그대로 넘기면 deep이 자동으로 켜지지만, newVal과 oldVal이 같은 객체를 가리켜 이전 값이 의미를 잃습니다.',
      },
      {
        practice: 'reactive() 배열 감시 — 스냅샷 기법',
        do: '"부산 추가"를 누르고 두 박스를 비교해 보세요.',
        see: '빨간 박스는 옛 길이·새 길이가 모두 3이고, 초록 박스는 2 ➡️ 3 으로 과거 데이터까지 보여줍니다.',
        why: '[...cityList] 로 복사본을 만들어 감시하면 매번 새 배열이 생기므로 과거 상태가 그대로 보존됩니다. 이것이 스냅샷 기법입니다.',
      },
      {
        do: '"최근 도시 삭제"를 눌러 초록 박스의 데이터 부분을 보세요.',
        see: '삭제되기 전 배열 내용이 그대로 찍힙니다.',
        why: '변경 전후를 비교해야 하는 실무 로직(무엇이 추가·삭제됐는지 계산)은 이 방식이 필수입니다.',
      },
      {
        practice: '자동 감시자 watchEffect()',
        do: '페이지를 새로고침하고 아무 버튼도 누르지 마세요.',
        see: '모니터에 이미 "[자동 감지] 이름: 홍길동 / 나이: 20세"가 찍혀 있고, 콘솔에도 로그가 하나 있습니다.',
        why: 'watchEffect는 등록되는 즉시 한 번 실행됩니다. watch는 값이 바뀌기 전까지 조용하다는 점과 정반대입니다.',
      },
      {
        do: '"이름 변경"과 "나이 추가"를 눌러 보세요.',
        see: '감시 대상을 한 줄도 적지 않았는데 둘 다 반응합니다.',
        why: '함수 안에서 username.value와 age.value를 읽었기 때문에, Vue가 그 둘을 자동으로 의존성 목록에 넣습니다.',
      },
    ],
    pitfalls: [
      {
        bad: 'watch(city.value, ...)',
        good: 'watch(city, ...)',
        why: '감시 대상에는 ref 변수 자체를 넘깁니다. .value를 붙이면 값(문자열)을 넘기게 되어 감시가 동작하지 않습니다.',
      },
      {
        bad: 'const double = computed(() => { count.value * 2 })',
        good: 'const double = computed(() => count.value * 2)',
        why: '화살표 함수에 중괄호를 쓰면 return을 직접 적어야 합니다. 빠뜨리면 undefined가 반환됩니다.',
      },
      {
        bad: 'double.value = 10',
        good: '원본인 count.value를 바꾼다',
        why: 'computed는 읽기 전용입니다. 직접 대입하면 경고가 뜨고 값도 바뀌지 않습니다.',
      },
      {
        bad: '<p>{{ getResult() }}</p> 로 무거운 계산',
        good: 'const result = computed(...) 후 {{ result }}',
        why: '템플릿에서 함수를 호출하면 화면이 다시 그려질 때마다 매번 실행됩니다. 이번 실습의 콘솔 로그가 바로 그 증거입니다.',
      },
      {
        bad: "watch(user, ...) 로 객체 속성 변경 감지",
        good: 'watch(user, ..., { deep: true })',
        why: '객체를 감시할 때 내부 속성 변경까지 잡으려면 deep 옵션이 필요합니다.',
      },
    ],
    extensions: [
      { practice: 'ref 객체 감시 — Deep Watch', text: 'DeepWatchPractice.vue의 주석 처리된 "실패하는 예시"를 살려 보세요. deep 없이는 아무리 눌러도 로그가 찍히지 않습니다 — 가장 많이 하는 실수를 직접 확인하는 방법입니다.' },
      { practice: '감시자 watch()의 원리와 실무 활용', text: 'watch에 { immediate: true } 옵션을 주고, 화면을 열자마자 콜백이 한 번 실행되는지 확인해 보세요.' },
      { practice: '여러 개의 변수 동시 감시 (Multi-Source Watch)', text: 'watch([cityA, cityB], ([newA, newB], [oldA, oldB]) => {...}) 형태로 두 값을 동시에 감시해 보세요.' },
      { practice: 'reactive() 데이터 watch 감시 규칙', text: 'reactive 객체를 만들고 { deep: true } 없이 / 있이 감시했을 때 차이를 비교해 보세요.' },
      { practice: '자동 감시자 watchEffect()', text: 'watchEffect로 같은 감시를 구현해 보고, 이전 값을 못 받는다는 점이 어떤 상황에서 불편한지 느껴 보세요.' },
      { practice: '감시자 watch()의 원리와 실무 활용', text: '검색어를 입력할 때마다 API를 호출하지 않도록, watch 안에 setTimeout으로 디바운스를 걸어 보세요.' },
      { practice: 'computed() 캐싱 동작 비교', text: 'computed로 "도시 이름 + 현재 단위" 같은 조합 문자열을 만들어 화면에 출력해 보세요.' },
    ],
    practices: [
      'ComputedCachePractice',
      'WatchPractice',
      'MultiWatchPractice',
      'DeepWatchPractice',
      'RefArrayWatchPractice',
      'ReactiveWatchPractice',
      'ReactiveArrayWatchPractice',
      'WatchEffectPractice',
    ],
    status: 'done',
  },

  /* ---------------- CH04 ---------------- */
  {
    id: 23,
    chapterId: 4,
    label: '개념 정리',
    title: 'Component 등록 — 지역 vs 전역',
    slidePage: '128~132쪽',
    studyRange: '128~132쪽',
    goal: '컴포넌트가 무엇이고 어떻게 등록해서 쓰는지, 지역 등록과 전역 등록의 차이를 확인합니다.',
    lecture: {
      intro:
        '컴포넌트는 "언제든 다른 부품으로 갈아 끼울 수 있는 표준화된 모듈"입니다. 레고 블록처럼요. 그런데 만들어만 두면 쓸 수 없고 "이 블록을 쓰겠다"고 등록해야 합니다. 등록 방법이 두 가지인데, 하나는 쓰는 파일에서 import 하는 것(지역)이고 다른 하나는 main.js에서 한 번에 선언하는 것(전역)입니다.',
      summary:
        '컴포넌트의 핵심은 독립성(Independency)과 교체 가능성(Replaceability)입니다. Vue에서는 .vue 파일 하나가 컴포넌트 하나이며, 이들이 Tree 구조로 연결되어 애플리케이션을 이룹니다.',
      points: [
        '부모-자식은 철저히 독립되어 있다. 자식은 부모의 변수를 마음대로 가져다 쓸 수 없고, 부모도 자식 내부를 들여다볼 수 없다.',
        '형제끼리는 직접 대화하는 선이 없다. 부모를 거쳐 올라갔다 내려와야 한다.',
        '<script setup>에서는 import 한 줄이 곧 등록이다. components: { ... } 를 따로 쓰지 않는다.',
        '등록한 컴포넌트는 PascalCase(<BaseButton />)와 kebab-case(<base-button>) 둘 다로 부를 수 있다.',
        '전역 등록은 main.js에서 app.component(태그이름, 컴포넌트)로 한다.',
        '전역 등록은 편하지만 안 쓰는 컴포넌트까지 번들에 들어가고, 어디서 온 태그인지 코드만 봐서는 알 수 없다.',
      ],
      syntax: [
        {
          code: `<script setup>
import BaseButton from './components/BaseButton.vue'
</script>

<template>
  <BaseButton />
  <base-button></base-button>
</template>`,
          parts: [
            { token: 'import BaseButton', role: '내가 정하는 이름. 이 이름이 곧 태그 이름이 된다' },
            { token: "'./components/BaseButton.vue'", role: '파일 경로. 확장자 .vue까지 적는다' },
            { token: '<BaseButton />', role: 'PascalCase 호출. 자식이 없으면 자기 닫힘 태그로' },
            { token: '<base-button>', role: 'kebab-case 호출. 위와 완전히 같은 컴포넌트' },
          ],
          returns:
            'import는 컴포넌트 정의 객체를 돌려준다. <script setup>은 이 변수를 자동으로 템플릿에 노출하므로 별도 등록 코드가 필요 없다.',
          desc: '교안 130쪽 — 지역(Local) 등록.',
        },
        {
          code: `// main.js
import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/BaseButton.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.mount('#app')`,
          parts: [
            { token: 'createApp(App)', role: '앱 인스턴스를 만든다. 이 결과를 app에 담는다' },
            { token: 'app.component(...)', role: '전역 등록 메서드. 인자를 두 개 받는다' },
            { token: "'BaseButton'", role: '1번째 인자 — template에서 부를 태그 이름' },
            { token: 'BaseButton', role: '2번째 인자 — 위에서 import 한 컴포넌트' },
          ],
          returns:
            'app 객체를 그대로 돌려주므로 .component(...).component(...) 처럼 이어 쓸 수 있다. 등록 후에는 앱 안 어디서든 import 없이 쓸 수 있다.',
          desc: '교안 131쪽 — 전역(Global) 등록. 반드시 app.mount() 이전에 등록해야 한다.',
        },
      ],
    },
    tasks: [
      '컴포넌트의 독립성과 교체 가능성 이해',
      '부모-자식 · 형제 · 조상-후손 관계 파악',
      '지역 등록 — 부모에서 자식을 import 해서 사용',
      'PascalCase와 kebab-case 두 가지 호출 방식 확인',
      '전역 등록 — main.js에서 app.component()로 등록',
      '지역과 전역 등록의 장단점 비교',
    ],
    pitfalls: [
      {
        bad: "App.component('BaseButton', BaseButton)",
        good: "app.component('BaseButton', BaseButton)",
        why: '교안 131쪽에 대문자 App으로 적힌 오타가 있습니다. App은 import 한 루트 컴포넌트라 .component() 메서드가 없어 실행하면 에러가 납니다. createApp이 돌려준 소문자 app을 써야 합니다.',
      },
      {
        bad: 'app.mount("#app") 뒤에 app.component(...)',
        good: 'mount 이전에 등록',
        why: '이미 화면을 그린 뒤에 등록하면 그 태그를 찾지 못해 "Failed to resolve component" 경고가 뜹니다.',
      },
      {
        bad: "import BaseButton from './BaseButton'",
        good: "import BaseButton from './BaseButton.vue'",
        why: '.vue 확장자를 빼면 Vite가 파일을 찾지 못합니다. JS 파일과 달리 생략할 수 없습니다.',
      },
      {
        bad: '자주 안 쓰는 컴포넌트까지 전역 등록',
        good: '기본은 지역 등록, 앱 전반에 반복되는 소수만 전역',
        why: '전역 등록한 컴포넌트는 한 번도 쓰지 않아도 번들에 포함됩니다. 또 태그가 어디서 왔는지 코드만 봐서는 알 수 없어 유지보수가 어려워집니다.',
      },
      {
        why: 'Options API에서는 components: { BaseButton } 선언이 필요했습니다. <script setup>에서는 import만으로 끝나므로, 옛날 예제를 보고 따라 하다 헷갈리지 마세요.',
      },
    ],
    practiceGuide: [
      {
        practice: 'Component 등록 — 지역 vs 전역',
        do: '1번 영역의 두 버튼을 비교해 보세요.',
        see: '"PascalCase 호출"과 "kebab-case 호출" 버튼이 똑같이 생겼습니다.',
        why: '같은 컴포넌트를 두 가지 이름으로 부른 것입니다. HTML은 대소문자를 구분하지 않아서 Vue가 두 표기를 모두 받아줍니다.',
      },
      {
        do: '2번 영역의 배지를 보고, 소스 코드(</> 아이콘)를 열어 상단 import 문을 확인해 보세요.',
        see: 'BaseButton은 import가 있는데 GlobalBadge는 없습니다. 그런데도 화면에는 잘 나옵니다.',
        why: 'main.js에서 app.component("GlobalBadge", ...) 로 전역 등록했기 때문입니다. 이 사이트에 실제로 등록해 둔 것이라 어느 실습에서든 쓸 수 있습니다.',
      },
      {
        do: '3번 비교표에서 "번들 크기" 줄을 눈여겨보세요.',
        see: '전역 등록은 안 써도 포함된다고 적혀 있습니다.',
        why: '전역 등록이 편해 보여도 기본은 지역 등록인 이유입니다. 버튼·아이콘처럼 앱 전반에서 수십 번 반복되는 소수만 전역으로 올립니다.',
      },
    ],
    extensions: [
      {
        practice: 'Component 등록 — 지역 vs 전역',
        text: 'src/components/GlobalBadge.vue 를 열어 색이나 문구를 바꿔 보고, 등록은 그대로인데 화면만 바뀌는지 확인해 보세요.',
      },
      {
        practice: 'Component 등록 — 지역 vs 전역',
        text: 'main.js의 app.component(...) 줄을 주석 처리하면 어떤 경고가 뜨는지 콘솔에서 확인해 보세요.',
      },
      {
        practice: 'Component 등록 — 지역 vs 전역',
        text: '전역 등록을 체이닝(.component(...).component(...))으로 두 개 이어 붙여 보세요.',
      },
      {
        practice: 'Component 등록 — 지역 vs 전역',
        text: '부모-자식-손자 3단 구조를 만들고, 손자가 부모의 변수를 직접 쓸 수 없다는 것을 확인해 보세요.',
      },
    ],
    practices: ['ComponentRegistrationPractice'],
    status: 'done',
  },
  {
    id: 7,
    chapterId: 4,
    label: 'Code Challenge 07',
    title: '컴포넌트 생명주기',
    slidePage: '136쪽',
    studyRange: '128~135쪽',
    goal: 'Lifecycle Hook이 호출되는 순서와 각 시점에 할 일을 확인합니다.',
    lecture: {
      intro:
        '컴포넌트도 사람처럼 태어나고 사라집니다. "화면에 나타난 직후"에 데이터를 불러오고, "사라지기 직전"에 뒷정리를 해야 합니다. Lifecycle Hook은 그 순간마다 Vue가 불러주는 알림입니다. 특히 onMounted에서 켠 것은 onUnmounted에서 꼭 꺼야 합니다.',
      summary:
        '컴포넌트는 생성 → 마운트 → 업데이트 → 해제의 생애를 가지며, 각 시점에 끼어들 수 있는 함수가 Lifecycle Hook입니다.',
      points: [
        '**onMounted()는 화면에 그려진 직후** 실행된다. 초기 데이터 로딩·DOM 접근은 여기서.',
        '**onMounted에서 켠 것은 onUnmounted에서 반드시 끈다.** 안 하면 메모리 누수가 생긴다.',
        'onUpdated()는 반응형 데이터 변경으로 화면이 다시 그려진 뒤 실행된다.',
      ],
      syntax: [
        {
          code: `onMounted(() => {
  timer = setInterval(tick, 1000)
})

onUnmounted(() => {
  clearInterval(timer)   // 정리 필수
})`,
          parts: [
            { token: 'onMounted(...)', role: "Vue 내장 함수. 'vue'에서 import 필요" },
            { token: '() => {...}', role: '인자로 넘기는 콜백. 그 시점에 실행할 코드' },
            { token: 'timer', role: '내가 정하는 이름. 함수 밖에 선언해야 정리할 때 접근할 수 있다' },
            { token: 'setInterval(tick, 1000)', role: '1000ms마다 tick을 실행. 타이머 id를 돌려준다' },
            { token: 'clearInterval(timer)', role: '그 id로 타이머를 끈다' },
          ],
          returns:
            'onMounted 자체는 값을 돌려주지 않는다. 콜백에서 return 한 값도 쓰이지 않는다. setInterval만 타이머 id(숫자)를 돌려준다.',
          desc: '켰으면 끈다 — 짝을 맞추는 습관.',
        },
      ],
    },
    tasks: [
      'Lifecycle Hook 예제 작성',
      'onMounted()에서 초기 작업 실행',
      'onUnmounted()에서 타이머·이벤트 정리',
    ],
    practiceGuide: [
      {
        practice: 'Lifecycle Hook — 생성부터 소멸까지',
        do: '브라우저 콘솔(F12)을 열고 페이지를 새로고침해 보세요.',
        see: '1. [setup] → 2. [onMounted] 순서로 두 줄이 찍힙니다.',
        why: '<script setup> 본문이 곧 생성 단계이고, 화면에 붙은 뒤에야 onMounted가 실행됩니다. 그래서 DOM을 만지는 코드는 onMounted 안에 넣어야 합니다.',
      },
      {
        do: '3초쯤 기다렸다가 콘솔을 보세요.',
        see: '카운트가 저절로 올라가면서 3. [onUpdated] 가 반복해서 찍힙니다.',
        why: 'onMounted에서 켠 setInterval이 3초마다 count를 바꾸고, 값이 바뀔 때마다 화면이 다시 그려지기 때문입니다.',
      },
      {
        do: '"수동으로 숫자 올리기"를 눌러 보세요.',
        see: '역시 onUpdated가 찍힙니다.',
        why: 'onUpdated는 "왜 바뀌었는지"를 가리지 않습니다. 반응형 데이터가 바뀌어 화면이 갱신되면 무조건 실행됩니다.',
      },
      {
        do: '"🛑 실습 컴포넌트 파괴하기"를 눌러 보세요.',
        see: '4. [onUnmounted] 가 찍히고, 그 뒤로는 onUpdated가 더 이상 나오지 않습니다.',
        why: 'v-if가 false가 되면서 컴포넌트가 완전히 파괴되었고, onUnmounted에서 clearInterval로 타이머를 껐기 때문입니다.',
      },
      {
        do: '껐다 켜기를 서너 번 반복해 보세요.',
        see: '켤 때마다 카운트가 0부터 다시 시작하고, 로그도 1 → 2 순서로 처음부터 다시 찍힙니다.',
        why: 'v-if로 파괴된 컴포넌트는 다시 켤 때 "새로 태어납니다". 이전 상태는 남지 않습니다. (참고: v-show는 숨기기만 해서 생애가 끝나지 않습니다)',
      },
    ],
    pitfalls: [
      {
        bad: 'onMounted에서 setInterval만 실행',
        good: 'onUnmounted에서 clearInterval로 정리',
        why: '컴포넌트가 사라져도 타이머는 계속 돕니다. 화면을 오갈수록 타이머가 쌓여 메모리 누수와 오작동이 발생합니다.',
      },
      {
        bad: 'setup 최상단에서 document.getElementById(...)',
        good: 'onMounted 안에서 접근',
        why: 'setup이 실행되는 시점에는 아직 화면이 그려지지 않아 요소를 찾을 수 없습니다(null).',
      },
      {
        bad: 'onMounted(async () => {...}) 안에서만 에러 처리 생략',
        good: 'try-catch로 감싸고 로딩·에러 상태를 함께 관리',
        why: '초기 데이터 로딩이 실패하면 화면이 빈 채로 멈춥니다. 사용자에게 상태를 알려줘야 합니다.',
      },
      {
        why: 'onUpdated 안에서 반응형 값을 바꾸면 다시 업데이트가 일어나 무한 루프에 빠질 수 있습니다.',
      },
    ],
    extensions: [
      'LifecycleChild.vue의 clearInterval 줄을 잠깐 지우고 껐다 켜기를 반복해 보세요. 꺼둔 컴포넌트의 타이머까지 계속 돌면서 로그가 겹쳐 쏟아집니다 — 이것이 메모리 누수입니다.',
      'onMounted에서 1초마다 증가하는 타이머를 만들고, onUnmounted를 지웠다 넣었다 하며 콘솔 로그가 어떻게 달라지는지 확인해 보세요.',
      '각 Hook에 console.log를 넣고 실행 순서를 직접 눈으로 확인해 보세요.',
      'onMounted에서 가짜 API(setTimeout)를 호출하고, 로딩 중에는 "불러오는 중..."을 보여 주세요.',
      'v-if로 컴포넌트를 껐다 켜면서 mounted와 unmounted가 반복 호출되는지 관찰해 보세요.',
      '창 크기 변경(resize) 이벤트를 onMounted에서 등록하고 onUnmounted에서 해제해 보세요.',
    ],
    practices: ['LifecyclePractice'],
    status: 'done',
  },
  {
    id: 8,
    chapterId: 4,
    label: 'Code Challenge 08',
    title: 'Props와 Emits',
    slidePage: '152쪽',
    studyRange: '137~151쪽',
    goal: '부모에서 자식으로는 Props, 자식에서 부모로는 Emits로 데이터를 전달합니다.',
    lecture: {
      intro:
        '컴포넌트를 나누면 데이터를 어떻게 주고받을지가 문제가 됩니다. Vue의 규칙은 단순합니다. 부모가 자식에게 줄 때는 Props(택배로 내려보내기), 자식이 부모에게 알릴 때는 Emits(손 들고 신호 보내기)입니다. 자식이 받은 Props를 직접 고치는 것은 금지입니다.',
      summary:
        'Vue의 데이터 흐름은 단방향입니다. 부모 → 자식은 Props(속성), 자식 → 부모는 Emits(이벤트)로만 전달합니다.',
      points: [
        'defineProps()로 받을 속성을 선언한다. type과 required를 명시하면 실수를 줄일 수 있다.',
        '**Props는 읽기 전용**이다. 자식이 직접 수정하면 안 된다.',
        '**부모 → 자식은 Props, 자식 → 부모는 Emits.** 반대 방향은 없다.',
        '부모는 자식 태그에 @이벤트명="핸들러"로 받는다.',
        '이벤트 이름은 kebab-case(update-query)를 권장한다.',
      ],
      syntax: [
        {
          code: `// 자식
const props = defineProps({ city: { type: Object, required: true } })
const emit  = defineEmits(['select-card'])
emit('select-card', props.city.id)

// 부모
<WeatherCard :city="item" @select-card="onSelect" />`,
          parts: [
            { token: 'defineProps({...})', role: '컴파일러 매크로. import 없이 쓸 수 있고 자식에서만 쓴다' },
            { token: 'city', role: '받을 속성 이름. 부모의 :city 와 이름이 같아야 한다' },
            { token: 'type · required', role: '검증 옵션. 잘못된 값이 오면 콘솔에 경고가 뜬다' },
            { token: 'defineEmits([...])', role: '자식이 올려보낼 이벤트 이름 목록을 선언' },
            { token: "emit('select-card', 값)", role: '1번째 인자는 이벤트 이름, 2번째부터는 함께 보낼 데이터' },
            { token: '@select-card="onSelect"', role: '부모가 받는 쪽. emit의 2번째 인자가 onSelect의 매개변수로 들어온다' },
          ],
          returns:
            'defineProps는 props 객체를, defineEmits는 emit 함수를 돌려준다. emit() 자체는 값을 돌려주지 않는다.',
          desc: '내려줄 때는 :prop, 올려받을 때는 @event.',
        },
      ],
    },
    tasks: ['부모에서 자식으로 Props 전달', '자식에서 부모로 Emits 이벤트 전달'],
    practiceGuide: [
      {
        practice: '데이터는 어느 쪽으로 흐르나 — Props ↓ / Emits ↑',
        do: '부모의 입력칸에 글자를 쳐 보세요.',
        see: '아래쪽 ↓ props 화살표가 초록으로 켜지고, 자식의 props.message가 따라 바뀝니다.',
        why: '부모가 값을 바꾸면 그 값이 자식으로 내려갑니다. 이것이 Props입니다. 방향은 항상 부모 → 자식 한 쪽뿐입니다.',
      },
      {
        do: '자식의 "부모에게 신호 보내기 (emit)" 버튼을 눌러 보세요.',
        see: '이번엔 ↑ emits 화살표가 파랗게 켜지고, 부모의 "받은 신호"가 채워집니다.',
        why: '자식이 부모에게 값을 전달하는 유일한 방법입니다. 자식이 부모 값을 직접 건드린 게 아니라 신호만 올려보낸 것입니다.',
      },
      {
        do: '아래 "주고받은 기록"을 보세요.',
        see: '↓ 내려감 / ↑ 올라감 이 번갈아 쌓입니다.',
        why: '두 방향이 각각 다른 문법(props / emit)으로 이루어진다는 점만 기억하면 절반은 끝난 셈입니다.',
      },

      {
        practice: 'Props는 읽기 전용 — 값의 주인은 부모다',
        do: '❌ "직접 바꾸기" 버튼을 눌러 보세요.',
        see: '빨간 문구로 "실패 — 값은 그대로 0 입니다"가 뜨고 숫자가 안 바뀝니다.',
        why: 'Props 객체는 읽기 전용이라 자식의 대입이 무시됩니다. 콘솔(F12)에는 target is readonly 경고가 찍힙니다.',
      },
      {
        do: '✅ "부모에게 요청" 버튼을 눌러 보세요.',
        see: '부모와 자식의 숫자가 함께 1 올라갑니다.',
        why: '자식은 emit으로 요청만 했고 실제로 count를 올린 것은 부모의 increase 함수입니다. 값을 바꾸는 주체는 언제나 그 값을 가진 쪽입니다.',
      },
      {
        do: '두 버튼을 번갈아 여러 번 눌러 보세요.',
        see: '❌ 쪽은 아무리 눌러도 숫자가 그대로입니다.',
        why: '"자식이 값을 못 바꾼다"가 규칙이 아니라 실제 동작임을 확인하는 부분입니다. 이 제약 덕분에 값이 어디서 바뀌었는지 항상 추적할 수 있습니다.',
      },

      {
        practice: 'Props & Emits — 부모와 자식의 대화',
        do: '초록 테두리(부모)와 파란 점선(자식) 안의 문장을 비교해 보세요.',
        see: '두 곳에 똑같이 "Parent 초기 메시지"가 적혀 있습니다.',
        why: '부모가 가진 message를 :parent-data로 내려보냈기 때문입니다. 자식은 그 값을 읽기만 합니다.',
      },
      {
        do: '"상위 컴포넌트로 갱신 요청 (Emit)"을 눌러 보세요.',
        see: '자식 안에서 눌렀는데 부모의 문장까지 함께 바뀝니다.',
        why: '자식은 값을 직접 고치지 않았습니다. emit("update-request", 새값)으로 신호만 보냈고, 실제로 message를 바꾼 것은 부모의 handleUpdateRequest 함수입니다.',
      },
      {
        do: '소스 코드(</> 아이콘)를 열어 자식의 sendNotification 함수를 보세요.',
        see: 'payload를 만들어 emit의 두 번째 인자로 넘기고 있습니다.',
        why: '이 값이 부모 핸들러의 매개변수(newValue)로 그대로 들어옵니다. 이것이 자식 → 부모로 데이터를 올려보내는 유일한 통로입니다.',
      },

      {
        practice: '형제끼리는 부모를 거쳐야 한다',
        do: '형제 A의 "안녕!" 버튼을 눌러 보세요.',
        see: '① A → 부모 emit 이 먼저 켜지고, 잠시 뒤 ② 부모 → B props 가 켜지면서 B의 말풍선이 채워집니다.',
        why: 'A와 B 사이에는 직접 연결된 선이 없습니다(가운데 ✕ 표시). 반드시 부모를 한 번 거쳐야 합니다.',
      },
      {
        do: '소스 코드(</> 아이콘)를 열어 SiblingA와 SiblingB를 확인해 보세요.',
        see: 'A에는 emit만, B에는 props만 있고 서로를 import한 곳이 없습니다.',
        why: '형제는 서로의 존재조차 모릅니다. 이 구조가 복잡해지면 그때 Pinia(6장) 같은 공용 저장소를 씁니다.',
      },
    ],
    pitfalls: [
      {
        bad: 'props.city = 새로운값  (자식에서)',
        good: "emit('update-city', 새로운값) 으로 부모에게 요청",
        why: 'Props는 읽기 전용입니다. 자식이 직접 고치면 경고가 뜨고, 부모가 다시 렌더링할 때 값이 되돌아갑니다.',
      },
      {
        bad: '<WeatherCard city="item" />',
        good: '<WeatherCard :city="item" />',
        why: '콜론을 빼면 "item"이라는 글자 그대로 전달됩니다. 데이터를 넘길 때는 반드시 v-bind(:)를 씁니다.',
      },
      {
        bad: "defineProps(['city'])",
        good: 'defineProps({ city: { type: Object, required: true } })',
        why: '타입과 필수 여부를 적어두면 잘못된 값이 들어왔을 때 콘솔에서 바로 알 수 있습니다.',
      },
      {
        bad: "emit('selectCard') / @selectCard",
        good: "emit('select-card') / @select-card",
        why: 'HTML 속성은 대소문자를 구분하지 않습니다. 이벤트 이름은 kebab-case로 통일하세요.',
      },
      {
        why: 'Props로 객체나 배열을 넘기면 참조가 공유됩니다. 자식이 내부 속성을 바꾸면 경고 없이 부모 데이터까지 바뀌니 주의하세요.',
      },
    ],
    extensions: [
      'PropsEmitsChild.vue에서 parentData를 직접 바꾸는 코드를 넣어 보세요(예: parentData = "테스트"). 콘솔에 Props 변경 경고가 뜨고 화면은 바뀌지 않습니다 — Props가 읽기 전용이라는 증거입니다.',
      '숫자와 증감 버튼을 가진 Counter 컴포넌트를 만들고, 값은 부모가 관리하도록 Props/Emits로 연결해 보세요.',
      'Props에 default 값을 지정하고, 부모가 값을 안 넘겼을 때 어떻게 되는지 확인해 보세요.',
      'validator 옵션으로 "양수만 허용"하는 Props를 만들고 음수를 넘겨 경고를 확인해 보세요.',
      'defineModel()을 찾아보고 v-model을 컴포넌트에 직접 쓰는 방법을 실험해 보세요.',
      '자식이 여러 이벤트(select · delete · edit)를 올리도록 만들고 부모에서 각각 처리해 보세요.',
    ],
    practices: [
      'PropsFlowPractice',
      'PropsReadonlyPractice',
      'PropsEmitsPractice',
      'SiblingTalkPractice',
    ],
    status: 'done',
  },
  {
    id: 24,
    chapterId: 4,
    label: '개념 정리',
    title: 'Provide & Inject — Props Drilling 건너뛰기',
    slidePage: '150~151쪽',
    studyRange: '150~151쪽',
    goal: '계층이 깊을 때 중간 컴포넌트를 건너뛰고 조상의 값을 후손이 직접 꺼내 쓰는 방법을 확인합니다.',
    lecture: {
      intro:
        '3층 건물에서 1층 사람이 3층 사람에게 물건을 전하려면 2층을 거쳐야 합니다. 그런데 2층 사람은 그 물건이 뭔지도 모르고 관심도 없는데 계속 받아서 올려야 하죠. 이게 **Props Drilling**입니다. provide/inject는 1층과 3층 사이에 **직통 엘리베이터**를 놓는 것입니다.',
      summary:
        'Props Drilling은 중간 컴포넌트들이 자기는 쓰지도 않는 데이터를 오직 아래로 전달하기 위해 받아야 하는 현상입니다. provide/inject는 중간 계층을 완전히 건너뛰고, 조상이 선언한 반응형 상태를 후손이 직접 결합해 사용하는 방식입니다.',
      points: [
        '**Props Drilling**: 상위 → 하위 → 최하위로 갈 때, 중간 컴포넌트가 필요 없는 값을 받아 아래로 토스하는 반복.',
        '조상은 `provide(키, 값)`으로 등록하고, 후손은 `inject(키)`로 꺼낸다.',
        '**중간 컴포넌트는 그 값의 존재조차 몰라도 된다.**',
        '같은 값이라도 층마다 이름이 다르다: 조부모 `themeColor` → 부모 `props.theme` → 자식 `props.theme`. **provide/inject는 이 중간 이름을 아예 거치지 않는다.**',
        'provide한 값이 ref면 **반응형이 그대로 유지**된다. 조상이 바꾸면 후손 화면도 바뀐다.',
        '키를 문자열로 주고받으므로 **오타가 나면 조용히 undefined**가 된다. inject의 두 번째 인자로 기본값을 주면 안전하다.',
        '교안 참고: **전역 상태 관리(Pinia)가 있어서 실무 사용 빈도는 높지 않다.** 개념만 알아두면 된다.',
      ],
      syntax: [
        {
          code: `// GrandParent.vue
import { ref, provide } from 'vue'

const themeColor = ref('dark-mode')

// 주입할 키(Key) 이름과 실제 데이터(Value)를 등록
provide('globalTheme', themeColor)`,
          parts: [
            { token: 'provide(...)', role: "Vue 내장 함수. 'vue'에서 import 한다" },
            { token: "'globalTheme'", role: '1번째 인자 — 키. 후손이 이 이름으로 찾는다 (내가 정한다)' },
            { token: 'themeColor', role: '2번째 인자 — 내려보낼 값. ref를 넣으면 반응형이 유지된다' },
          ],
          returns:
            '값을 돌려주지 않는다. setup이 실행되는 동안 등록만 해 둔다. 그래서 조건문이나 비동기 안에서 호출하면 안 된다.',
          desc: '교안 151쪽 — 조상 쪽 코드.',
        },
        {
          code: `// GrandChild.vue
import { inject } from 'vue'

// 상위 조상이 provide한 키 이름을 지정하여 직접 인젝션
const theme = inject('globalTheme')

// 조상이 없을 때를 대비해 기본값을 주는 것이 안전하다
const safe = inject('globalTheme', '(기본값)')`,
          parts: [
            { token: 'inject(...)', role: 'Vue 내장 함수. provide와 짝을 이룬다' },
            { token: "'globalTheme'", role: '1번째 인자 — 조상이 등록한 키와 철자가 같아야 한다' },
            { token: "'(기본값)'", role: '2번째 인자(선택) — 못 찾았을 때 쓸 값' },
          ],
          returns:
            'provide된 값을 그대로 돌려준다. ref를 넣었다면 ref가 나오므로 script에서는 .value가 필요하다(template은 자동 언래핑).',
          desc: '교안 151쪽 — 후손 쪽 코드. 중간 컴포넌트는 아무것도 하지 않는다.',
        },
      ],
    },
    tasks: [
      'Props Drilling이 무엇인지 이해',
      '조상에서 provide(키, 값)으로 등록',
      '후손에서 inject(키)로 꺼내 쓰기',
      '중간 컴포넌트가 값을 몰라도 되는 것 확인',
      'Pinia와의 역할 차이 파악',
    ],
    practiceGuide: [
      {
        practice: 'Provide & Inject — 중간을 건너뛰고 전달하기',
        do: '버튼을 누르기 전에, 세 층(조부모 → 부모 → 자식)에 적힌 변수명을 따라가 보세요.',
        see: 'A는 themeColor → props.theme → props.theme 로 이어지고, B는 부모 칸이 "props : 없음 (0개)" 입니다.',
        why: '같은 값이 층마다 이름을 바꿔 내려갑니다. A는 부모를 반드시 거쳐야 하지만, B는 자식이 inject(\'globalTheme\')으로 조부모에게서 바로 꺼냅니다.',
      },
      {
        do: '이제 "테마 바꾸기" 버튼을 누르고 **중간 카드**를 보세요.',
        see: 'A의 중간 카드만 주황색으로 번쩍입니다. B의 중간은 아무 반응이 없습니다.',
        why: 'A에서는 값이 중간을 통과해 지나갑니다. B에서는 조상 → 후손 직통이라 중간이 아예 관여하지 않습니다. 이것이 Props Drilling과 provide/inject의 결정적 차이입니다.',
      },
      {
        do: '최하위 카드 두 개를 보세요.',
        see: '색이 동시에 바뀝니다(어두운 카드 ↔ 밝은 카드).',
        why: '경로는 완전히 다른데 도착한 결과는 같습니다. provide에 ref를 넣었기 때문에 반응형이 그대로 유지됩니다.',
      },
      {
        do: '소스 코드(</> 아이콘)를 열어 InjectMid의 script를 보세요.',
        see: 'defineProps가 아예 없고 주석 한 줄만 있습니다.',
        why: '중간이 값을 전혀 모른다는 뜻입니다. 계층이 5단계면 A는 중간 4곳을 전부 고쳐야 하지만 B는 조상과 후손만 고치면 됩니다.',
      },
    ],
    pitfalls: [
      {
        bad: "provide('globalTheme', …) / inject('globalThem')",
        good: '키 문자열을 정확히 일치시킨다',
        why: '오타가 나면 에러가 아니라 조용히 undefined가 됩니다. 화면만 비어 보여서 원인 찾기가 어렵습니다.',
      },
      {
        bad: "inject('globalTheme')",
        good: "inject('globalTheme', '기본값')",
        why: '조상이 없는 곳에서 쓰이면 undefined가 됩니다. 두 번째 인자로 기본값을 주면 그런 상황에서도 화면이 깨지지 않습니다.',
      },
      {
        bad: 'provide를 조건문·setTimeout 안에서 호출',
        good: 'setup 최상단에서 바로 호출',
        why: 'provide는 컴포넌트가 만들어지는 동안에만 등록됩니다. 나중에 호출하면 후손이 찾지 못합니다.',
      },
      {
        bad: '후손이 inject한 값을 마음대로 수정',
        good: '조상이 값과 함께 "바꾸는 함수"도 provide',
        why: '누가 바꿨는지 추적할 수 없게 됩니다. Props가 읽기 전용인 것과 같은 이유입니다.',
      },
      {
        why: '앱 전체가 함께 쓰는 상태라면 provide/inject보다 Pinia(6장)가 낫습니다. Devtools 지원과 구조가 훨씬 명확합니다.',
      },
    ],
    extensions: [
      {
        practice: 'Provide & Inject — 중간을 건너뛰고 전달하기',
        text: 'InjectLeaf.vue의 inject 키를 일부러 틀리게 바꿔 보세요(예: globalThem). 기본값이 대신 나오고 콘솔에 injection 경고가 뜹니다.',
      },
      {
        practice: 'Provide & Inject — 중간을 건너뛰고 전달하기',
        text: '조상에서 값과 함께 toggle 함수도 provide하고, 후손이 그 함수를 호출해 테마를 바꾸도록 만들어 보세요.',
      },
      {
        practice: 'Provide & Inject — 중간을 건너뛰고 전달하기',
        text: '중간 계층을 하나 더 끼워 4단계로 만들어 보세요. A는 코드가 늘지만 B는 그대로인 것을 확인할 수 있습니다.',
      },
      {
        practice: 'Provide & Inject — 중간을 건너뛰고 전달하기',
        text: '6장 Pinia를 배운 뒤 같은 기능을 Store로 다시 만들어 보고, 어느 쪽이 읽기 쉬운지 비교해 보세요.',
      },
    ],
    practices: ['ProvideInjectPractice'],
    status: 'done',
  },
  {
    id: 9,
    chapterId: 4,
    label: 'Code Challenge 09',
    title: 'Slot',
    slidePage: '157쪽',
    studyRange: '153~156쪽',
    goal: '컴포넌트 안에 내용을 끼워 넣는 Slot의 세 가지 형태를 사용합니다.',
    lecture: {
      intro:
        'Props가 "값"을 넘기는 것이라면, Slot은 "화면 조각(HTML)"을 통째로 넘기는 것입니다. 액자를 하나 만들어 두고 사진만 바꿔 끼우는 셈이죠. 카드·모달·레이아웃처럼 껍데기는 같고 안쪽만 다른 UI를 만들 때 씁니다.',
      summary:
        'Slot은 컴포넌트에 "구멍"을 뚫어 두고 부모가 그 자리에 내용을 채워 넣게 하는 문법입니다. 껍데기는 재사용하고 알맹이만 바꿉니다.',
      points: [
        'Default Slot: <slot />에 부모가 넣은 내용이 그대로 들어간다.',
        'Named Slot: <slot name="header" />처럼 구멍에 이름을 붙여 여러 개를 만든다.',
        'Scoped Slot: 자식이 가진 데이터를 부모의 슬롯 내용에 넘겨준다.',
      ],
      syntax: [
        {
          code: `<!-- 자식: BaseCard.vue -->
<div class="card">
  <slot name="header" />
  <slot />
</div>

<!-- 부모 -->
<BaseCard>
  <template #header><h3>제목</h3></template>
  본문 내용
</BaseCard>`,
          parts: [
            { token: '<slot />', role: '이름 없는 기본 구멍. 부모가 그냥 넣은 내용이 여기로 들어온다' },
            { token: '<slot name="header" />', role: '이름 붙은 구멍. 여러 개를 만들 수 있다' },
            { token: 'header', role: '내가 정하는 이름. 부모의 #header 와 정확히 일치해야 한다' },
            { token: '<template #header>', role: '부모가 그 구멍을 채우는 문법. v-slot:header 의 축약형' },
          ],
          returns:
            'Slot은 값이 아니라 화면 조각(HTML)을 전달한다. 부모가 아무것도 안 넣으면 <slot> 태그 사이에 적어둔 기본 내용이 표시된다.',
          desc: '#header 는 v-slot:header 의 축약형이며 <template> 태그에만 붙일 수 있다.',
        },
      ],
    },
    tasks: ['Default Slot', 'Named Slot', 'Scoped Slot'],
    practiceGuide: [
      {
        practice: 'Slot — 껍데기는 두고 알맹이만 갈아 끼우기',
        do: '1번 영역의 카드 세 개를 비교해 보세요.',
        see: '테두리와 배경은 똑같은데 안쪽 내용만 다릅니다. 세 번째 카드에는 "기본 콘텐츠 영역입니다"가 나옵니다.',
        why: '같은 SlotDefaultChild를 세 번 썼기 때문입니다. 세 번째는 아무것도 안 넣어서 <slot> 태그 사이에 적어둔 기본값이 나온 것입니다.',
      },
      {
        do: '2번 영역에서 제목과 본문의 위치를 보세요.',
        see: '제목이 위, 본문이 아래로 정확히 나뉘어 있습니다.',
        why: '자식이 <slot name="header">와 이름 없는 <slot> 두 개의 구멍을 뚫어 뒀고, 부모가 #header로 어느 구멍에 넣을지 지정했기 때문입니다.',
      },
      {
        do: '3번 영역의 주황색 패널에 적힌 값을 보세요.',
        see: '"현재 서버 상태 정상"과 "150명"이 표시됩니다.',
        why: '이 값들은 부모가 아니라 자식이 가진 데이터입니다. 자식이 <slot :text="message" :count="userCount">로 넘겨줬고, 부모가 v-slot="slotBag"으로 받아 원하는 모양으로 그렸습니다.',
      },
      {
        do: '3번 영역의 두 번째 카드(내용을 안 넣은 것)를 보세요.',
        see: '"부모가 마크업을 주입하지 않았을 때의 디폴트 화면"이 나옵니다.',
        why: 'Scoped Slot도 기본값을 가질 수 있습니다. 부모가 채우지 않으면 자식이 준비해 둔 화면이 나옵니다.',
      },

      {
        practice: '더해보기 ① BaseCard 하나로 화면 3개',
        do: '카드 세 장의 **테두리와 구분선**을 비교해 보세요.',
        see: '세 장의 껍데기가 완전히 똑같습니다. 세 번째 카드에는 회색 글씨로 "header 구멍 (비어 있음)" 같은 안내가 보입니다.',
        why: '세 장 모두 같은 `SlotBaseCard.vue` 한 파일입니다. 껍데기를 고치고 싶으면 그 파일 한 곳만 고치면 세 장이 동시에 바뀝니다.',
      },
      {
        do: '두 번째 카드의 아래쪽을 보세요. footer만 비워 둔 카드입니다.',
        see: 'header와 본문은 채워졌는데 footer 자리에만 회색 기본 안내가 나옵니다.',
        why: '**구멍은 각각 따로 기본값을 가집니다.** 부모가 채운 구멍은 채운 대로, 안 채운 구멍은 기본값으로 나옵니다.',
      },
      {
        do: '맨 아래 "그럼 Props로 하면 안 되나?" 칸의 ❌와 ✅ 코드를 비교해 보세요.',
        see: '❌ 쪽은 `title="주간 리포트"` 처럼 **글자만** 넘기고, ✅ 쪽은 `<button @click>` 을 통째로 넘깁니다.',
        why: '**Props는 값, Slot은 화면 조각입니다.** 첫 카드 footer에는 버튼이 들어 있는데, 이건 Props로는 넘길 방법이 없습니다. 버튼 하나만 들어가도 Slot이어야 합니다.',
      },

      {
        practice: '더해보기 ② 같은 목록, 부모가 정하는 세 가지 모습',
        do: 'A · B · C 세 목록의 **항목 이름**을 비교해 보세요.',
        see: '세 목록 모두 "노트북 거치대 · 기계식 키보드 · USB-C 허브" 로 완전히 같습니다.',
        why: '데이터는 `SlotItemList.vue` 안에만 있습니다. 부모는 데이터를 하나도 갖고 있지 않습니다.',
      },
      {
        do: 'C 목록의 "기계식 키보드" 줄을 보세요.',
        see: '이름에 취소선이 그어지고 **품절** 배지가 붙어 있습니다. A와 B에는 그런 표시가 없습니다.',
        why: '재고가 0인지 판단한 것은 목록이 아니라 **부모**입니다. 목록은 `stock`이 무슨 뜻인지도 모릅니다. 그래서 같은 목록을 쇼핑몰에도 관리자 페이지에도 쓸 수 있습니다.',
      },
      {
        do: '소스 코드(</> 아이콘)를 열어 `SlotItemList.vue` 에 `stock` 이라는 글자가 몇 번 나오는지 세어 보세요.',
        see: '데이터 정의에 한 번 나올 뿐, **화면을 그리는 곳에는 한 번도 안 나옵니다.**',
        why: '이것이 Scoped Slot의 목적입니다. 자식은 데이터를 내밀기만 하고, 그 데이터로 무엇을 판단할지는 전부 부모 몫입니다.',
      },

      {
        practice: '더해보기 ③ 모달 하나로 창 두 개',
        do: '"삭제 확인창 열기"를 누르고, 닫은 뒤 "안내창 열기"를 눌러 보세요.',
        see: '덮이는 방식·가운데 정렬·✕ 버튼이 두 창 모두 똑같습니다.',
        why: '두 창 모두 같은 `SlotModal.vue` 입니다. 껍데기 로직(덮기·닫기)은 한 번만 만들면 됩니다.',
      },
      {
        do: '두 창의 **아래쪽 버튼 줄**을 비교해 보세요.',
        see: '확인창은 [취소] [삭제] 두 개, 안내창은 [닫기] 하나입니다.',
        why: '확인창은 `#actions` 를 직접 채웠고, **안내창은 채우지 않았습니다.** 그래서 SlotModal이 준비해 둔 기본 닫기 버튼이 나온 것입니다.',
      },
      {
        do: '확인창에서 [삭제]를 눌러 보세요.',
        see: '창이 닫히고 "삭제했습니다."가 표시됩니다.',
        why: '`@click="remove"` 는 **부모가 슬롯 안에 넣은 것**이라 부모의 함수가 그대로 실행됩니다. 모달은 삭제가 뭔지 전혀 모릅니다. Props로는 이런 동작을 넘길 수 없습니다.',
      },
    ],
    pitfalls: [
      {
        bad: '<slot name="header" /> 인데 부모는 <template #head>',
        good: '이름을 정확히 일치시킨다 (#header)',
        why: '이름이 다르면 조용히 아무것도 안 나옵니다. 에러가 없어서 찾기 어렵습니다.',
      },
      {
        bad: '<BaseCard></BaseCard>  (내용 없음)',
        good: '<slot>기본 내용</slot> 으로 대비',
        why: '부모가 아무것도 안 넣으면 빈 영역이 됩니다. slot 태그 사이에 기본값을 적어두면 안전합니다.',
      },
      {
        bad: 'Slot 안에서 자식의 데이터를 그냥 사용',
        good: '<slot :item="item" /> + <template #default="{ item }">',
        why: 'Slot 내용은 부모 범위에서 컴파일되므로 자식의 변수를 볼 수 없습니다. 넘겨줘야 쓸 수 있습니다(Scoped Slot).',
      },
      {
        why: '#header 는 v-slot:header 의 축약형입니다. #은 <template> 태그에만 붙일 수 있습니다.',
      },
    ],
    extensions: [
      'BaseCard에 #aside 구멍을 하나 더 뚫고, 부모가 채운 카드와 비운 카드를 나란히 두어 보세요.',
      '목록의 슬롯에 item 말고 index도 함께 넘겨(<slot :item :index />) 부모가 번호를 붙이게 해 보세요.',
      '모달의 #actions 버튼에서 emit을 올려, 어떤 버튼을 눌렀는지 부모가 알게 해 보세요.',
      'Named Slot 이름을 일부러 틀리게 써 보세요(#actions → #action). 에러 없이 조용히 기본값이 나오는 것을 확인하세요.',
      '슬롯 안에서 자식의 변수를 v-slot 없이 그냥 써 보세요. 왜 안 되는지 콘솔 에러로 확인해 보세요.',
    ],
    practices: ['SlotPractice', 'SlotBaseCardPractice', 'SlotListPractice', 'SlotModalPractice'],
    status: 'done',
  },

  /* ---------------- CH05 ---------------- */
  {
    id: 25,
    chapterId: 5,
    label: 'Code Challenge 22',
    title: 'Vue Router Basic',
    slidePage: '165쪽',
    studyRange: '160~165쪽',
    goal: '주소와 화면을 연결하는 라우터를 설정하고, RouterLink · RouterView로 화면을 바꿉니다.',
    lecture: {
      intro:
        '웹사이트를 **벽에 액자 하나 걸린 방**이라고 생각해 보세요. 옛날 방식은 다른 그림을 보려고 방을 통째로 부수고 새로 지었습니다(새로고침). Vue는 방은 그대로 두고 **액자 속 그림만 갈아 끼웁니다.** 그 갈아 끼우는 규칙을 적어 둔 안내판이 라우터입니다.',
      summary:
        'Vue는 최초 접속 시 HTML 하나만 내려받는 **SPA(Single Page Application)** 입니다. Vue Router는 브라우저의 URL 변화를 JavaScript가 가로채, 서버에 새 페이지를 요청하지 않고 **주소에 맞는 컴포넌트만 가상 DOM에서 교체**해 주는 공식 라이브러리입니다.',
      points: [
        '전통적인 웹은 페이지를 옮길 때마다 서버에 **새 HTML을 요청**해 화면 전체를 새로고침했다.',
        '설정은 3단계다 — ① `router/index.js`에 주소표 작성 → ② `main.js`에서 `app.use(router)` → ③ 화면에 `<RouterLink>`와 `<RouterView />` 배치.',
        'routes의 필수 속성은 **path(주소)** 와 **component(그 주소에 걸 컴포넌트)** 둘뿐이다. `name`은 코드에서 부를 별명, `redirect`는 강제로 보낼 경로다.',
        'component를 넣는 방법이 두 가지다. **정적 import**는 앱 시작 때 미리 싣고, **동적 import는 그 주소로 갈 때 싣는다(Lazy Loading).**',
        '**`<a href>`는 절대 쓰면 안 된다.** 브라우저를 강제로 새로고침시켜 메모리에 있던 반응형 데이터(ref, computed)를 전부 초기화한다.',
        'views 폴더는 **주소에 직접 연결되는 페이지**(`~View.vue`), components 폴더는 **여기저기 재사용하는 부품**이다.',
      ],
      syntax: [
        {
          code: `// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about',
      component: () => import('../views/AboutView.vue') },
  ],
})

export default router`,
          parts: [
            { token: 'createRouter({...})', role: "Vue Router 내장 함수. import { createRouter } from 'vue-router' 필요" },
            { token: 'history', role: '주소를 어떻게 관리할지. createWebHistory()는 /about 처럼 슬래시 주소를 쓴다' },
            { token: 'import.meta.env.BASE_URL', role: 'Vite가 넣어 주는 배포 기준 경로. 하위 경로에 배포해도 링크가 맞는다' },
            { token: 'path', role: '**필수**. 브라우저 주소' },
            { token: 'component', role: '**필수**. 그 주소에 걸 컴포넌트' },
            { token: 'name', role: '내가 정하는 별명. 주소가 바뀌어도 코드는 이 이름으로 부른다' },
            { token: "() => import('...')", role: '동적 import. 그 주소로 갈 때 비로소 파일을 받는다(Lazy Loading)' },
          ],
          returns:
            'Router 설정 객체를 돌려준다. export default 로 내보내면 main.js가 가져다 app.use()에 넘긴다.',
          desc: 'routes는 위에서부터 검사하므로 순서가 중요하다.',
        },
        {
          code: `// src/main.js
import router from './router'   // 폴더명만 쓰면 그 안의 index.js

const app = createApp(App)
app.use(router)                 // 앱에 라우터 장착
app.mount('#app')`,
          parts: [
            { token: "from './router'", role: "폴더 경로만 적으면 그 폴더의 index.js를 가리킨다" },
            { token: 'app.use(...)', role: '플러그인을 앱에 등록하는 메서드. 라우터·Pinia 모두 이걸로 붙인다' },
          ],
          returns: '돌려주는 값은 없다. 이 줄이 있어야 앱 전체가 주소를 인식하기 시작한다.',
          desc: 'app.mount() 보다 먼저 호출해야 한다.',
        },
        {
          code: `<!-- App.vue -->
<RouterLink to="/about">소개</RouterLink>

<RouterView />`,
          parts: [
            { token: '<RouterLink to="...">', role: '새로고침을 막고 주소만 바꾸는 전용 링크 태그' },
            { token: '<RouterView />', role: '주소에 맞는 컴포넌트가 놓이는 **빈 액자**' },
          ],
          returns:
            'RouterLink는 화면에 <a> 태그를 그리지만 클릭을 가로채 새로고침을 막는다. 현재 주소와 맞으면 router-link-active 클래스가 자동으로 붙는다.',
          desc: 'RouterView가 없으면 주소만 바뀌고 화면은 그대로다. 가장 흔한 실수다.',
        },
      ],
    },
    tasks: [
      'router/index.js에 routes 작성 (path + component)',
      'main.js에서 app.use(router)',
      'App.vue에 RouterLink · RouterView 배치',
      '한 페이지는 동적 import로 Lazy Loading 적용',
    ],
    practiceGuide: [
      {
        practice: '주소 → 화면, 라우터가 하는 일',
        do: '②번 주소창 아래의 `/about` 버튼을 눌러 보세요.',
        see: '①번 주소표에서 `/about` 줄이 초록으로 켜지고, ③번 액자 안의 글자가 "소개"로 바뀝니다.',
        why: '라우터는 **주소표를 위에서부터 훑어 맞는 줄을 찾고**, 그 줄의 컴포넌트를 액자(RouterView)에 끼웁니다. 이게 전부입니다.',
      },
      {
        do: '`/weather/seoul` 을 누른 뒤, 주소창에서 seoul을 **busan으로 고쳐** Enter를 쳐 보세요.',
        see: '주소표에서는 같은 줄(`/weather/:cityId`)이 계속 켜져 있는데, 아래 `route.params` 값만 바뀝니다.',
        why: '`:cityId`는 **빈칸**입니다. 도시가 45개여도 주소표는 한 줄이면 됩니다. 채워진 값은 컴포넌트에서 `route.params.cityId`로 꺼내 씁니다.',
      },
      {
        do: '주소창에 `/hello` 처럼 아무 주소나 쳐 보세요.',
        see: '액자 테두리가 주황으로 바뀌고 "없는 페이지"가 나옵니다.',
        why: '맨 마지막 `/:pathMatch(.*)*` 줄이 **나머지를 전부 받는 그물**입니다. 이게 없으면 하얀 화면만 뜹니다. **반드시 맨 마지막**에 둬야 합니다 — 위에 두면 모든 주소를 이게 먼저 낚아챕니다.',
      },
      {
        do: '④번에서 `+1 올리기`를 몇 번 누른 뒤, **RouterLink 로 이동** 버튼을 눌러 보세요.',
        see: '숫자가 그대로 남아 있습니다.',
        why: '화면만 갈아 끼웠으므로 메모리의 값은 유지됩니다.',
      },
      {
        do: '이번엔 숫자를 올린 뒤 **&lt;a href&gt; 로 이동** 버튼을 눌러 보세요.',
        see: '배경이 붉어지며 숫자가 **0으로 초기화**됩니다.',
        why: '`<a>` 태그는 브라우저를 강제로 새로고침시킵니다. **메모리에 있던 ref · computed가 전부 날아갑니다.** 교안이 `<a>`를 금지하는 이유가 이것입니다.',
      },
    ],
    pitfalls: [
      {
        bad: '<a href="/about">About</a>',
        good: '<RouterLink to="/about">About</RouterLink>',
        why: '새로고침이 일어나 반응형 데이터가 전부 초기화됩니다. 로그인 상태·장바구니가 날아갑니다.',
      },
      {
        bad: 'routes만 만들고 끝',
        good: 'App.vue에 <RouterView /> 배치',
        why: '액자가 없으면 주소만 바뀌고 화면은 그대로입니다. 에러도 안 나서 찾기 어렵습니다.',
      },
      {
        bad: "path: '/:pathMatch(.*)*' 를 배열 위쪽에 둠",
        good: '항상 배열 맨 마지막',
        why: 'routes는 위에서부터 검사합니다. 그물을 앞에 두면 모든 주소가 여기 걸려 404만 나옵니다.',
      },
      {
        bad: '모든 페이지를 정적 import',
        good: "자주 안 쓰는 화면은 () => import('...')",
        why: '첫 화면을 켤 때 안 쓰는 페이지까지 전부 받아옵니다. 페이지가 많아질수록 첫 로딩이 느려집니다.',
      },
      {
        why: '하위 경로(예: github.io/내프로젝트/)에 배포한다면 `createWebHistory(import.meta.env.BASE_URL)`처럼 BASE_URL을 꼭 넣어야 링크가 맞습니다. 또 서버가 그 주소를 파일로 찾아 404를 내므로, GitHub Pages라면 index.html을 404.html로도 올려 둬야 합니다.',
      },
    ],
    extensions: [
      'routes에 redirect를 넣어 보세요. `{ path: \'/home\', redirect: \'/\' }` 처럼 옛 주소를 새 주소로 넘길 때 씁니다.',
      '`useRoute()`로 `route.query`를 찍어 보세요. `/search?city=수원` 의 물음표 뒤 값이 여기 담깁니다.',
      '`useRouter()`로 `router.push()`와 `router.replace()`를 비교해 보세요. replace는 뒤로가기가 막힙니다.',
      'RouterLink에 붙는 `router-link-active`와 `router-link-exact-active`의 차이를 개발자 도구로 확인해 보세요.',
      'views 폴더와 components 폴더에 각각 파일을 하나씩 만들어, 무엇을 어디에 둘지 스스로 기준을 세워 보세요.',
    ],
    practices: ['RouterBasicPractice'],
    status: 'done',
  },

  {
    id: 26,
    chapterId: 5,
    label: 'Code Challenge 23',
    title: 'useRoute() · useRouter()',
    slidePage: '172쪽',
    studyRange: '166~172쪽',
    goal: '현재 페이지 정보를 읽고(useRoute), 코드로 페이지를 옮깁니다(useRouter).',
    lecture: {
      intro:
        '이름이 **한 글자 차이**라 가장 많이 헷갈립니다. `useRoute()`는 **지금 이 페이지가 어디인지 읽는 것**이고, `useRouter()`는 **페이지를 옮기는 리모컨**입니다. 읽기냐 동작이냐로 나누면 헷갈리지 않습니다.',
      summary:
        '둘 다 `<script setup>` 안에서 쓰는 **Composable 함수**입니다. useRoute()는 경로·파라미터·쿼리를 담은 **반응형 route 객체**를 돌려주고, useRouter()는 push · replace · go 같은 메서드를 가진 **router 인스턴스**를 돌려줍니다.',
      points: [
        '`useRoute()`가 주는 route 객체는 **반응형**이라 template과 script에서 바로 쓸 수 있다.',
        'route의 주요 속성 — **params**(동적 경로 값), **query**(물음표 뒤 값), **path**(순수 경로), **name**(라우트 이름).',
        '**Dynamic Route Matching** — 주소 뒤에 콜론을 붙여 변수화한다(`/weather/:cityId`). 도시가 45개여도 라우트는 한 줄이면 된다. 이 부분을 **동적 세그먼트**라 한다.',
        '동적 세그먼트는 **여러 개**(`/category/:categoryId/product/:productId`)도, **경로 중간**(`/user/:userId/posts`)에도 놓을 수 있다.',
        '**Query String**(`?search=수원&page=2`)은 라우터 설정에 미리 적어 두지 않아도 자유롭게 붙일 수 있다.',
        '`useRouter()`는 **Programmatic Navigation** — RouterLink 클릭이 아니라 **코드로** 페이지를 옮길 때 쓴다. 로그인 성공 후 이동 같은 경우다.',
        '**push는 기록을 쌓고(뒤로가기 가능), replace는 지금 기록을 덮어쓴다(뒤로가기 불가).** `go(n)`은 n단계만큼 앞뒤로 움직인다.',
      ],
      syntax: [
        {
          code: `<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()          // 지금 페이지 정보 (읽기)

console.log(route.path)           // '/weather/seoul'
console.log(route.params.cityId)  // 'seoul'
console.log(route.query.search)   // '수원'
</script>

<template>
  <p>도시: {{ route.params.cityId }}</p>
</template>`,
          parts: [
            { token: 'useRoute()', role: "Vue Router 내장 함수. import { useRoute } from 'vue-router' 필요" },
            { token: 'const route', role: '내가 정하는 이름. 관례상 route 라고 쓴다' },
            { token: 'route.params', role: '주소의 :빈칸에 채워진 값. /weather/:cityId → { cityId: \'seoul\' }' },
            { token: 'route.query', role: '물음표 뒤 값. /search?q=vue → { q: \'vue\' }' },
            { token: 'route.path', role: '쿼리를 뺀 순수 경로' },
          ],
          returns:
            '반응형 route 객체를 돌려준다. **읽기 전용**이다 — route.params.cityId = "busan" 처럼 직접 바꿀 수 없다. 주소를 바꾸려면 useRouter()를 써야 한다.',
          desc: 'route 객체는 반응형이라 주소가 바뀌면 화면도 따라 바뀐다.',
        },
        {
          code: `// router/index.js — 동적 세그먼트
{ path: '/weather/:cityId',  name: 'WeatherDetail' }        // 하나
{ path: '/category/:categoryId/product/:productId' }         // 여러 개
{ path: '/user/:userId/posts' }                              // 경로 중간`,
          parts: [
            { token: ':cityId', role: '내가 정하는 이름. 이 이름 그대로 route.params.cityId 로 꺼낸다' },
            { token: '/user/:userId/posts', role: '동적 세그먼트는 경로 중간에도 놓을 수 있다' },
          ],
          returns:
            '주소가 이 모양과 맞으면 콜론 자리의 값이 route.params 의 속성으로 들어간다.',
          desc: '도시마다 라우트를 45줄 쓰는 비효율을 막아 준다.',
        },
        {
          code: `<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()        // 페이지를 옮기는 리모컨 (동작)

router.push('/about')                                   // /about
router.push({ name: 'user', params: { id: 1 } })        // /user/1
router.push({ name: 'search', query: { q: 'vue' } })    // /search?q=vue
router.replace('/login')          // 기록을 덮어씀 (뒤로가기 불가)
router.go(-1)                     // 뒤로 한 칸
</script>`,
          parts: [
            { token: 'useRouter()', role: '라우터 인스턴스를 꺼내는 함수. route(단수 정보)와 헷갈리지 말 것' },
            { token: '.push(path)', role: '히스토리에 **쌓으며** 이동. 뒤로가기로 돌아올 수 있다' },
            { token: '.replace(path)', role: '지금 기록을 **덮어쓰며** 이동. 뒤로가기로 못 돌아온다' },
            { token: '.go(n)', role: 'n단계 앞뒤로. go(-1)은 뒤로가기, back()·forward()도 있다' },
            { token: '{ name, params, query }', role: '주소 문자열 대신 객체로도 넘길 수 있다. 주소가 바뀌어도 name은 그대로라 안전하다' },
          ],
          returns:
            'push · replace 는 Promise를 돌려준다(이동이 끝난 뒤 할 일이 있으면 await 할 수 있다). go 는 돌려주는 값이 없다.',
          desc: '로그인 성공 후 이동처럼 클릭이 아닌 상황에서 쓴다.',
        },
      ],
    },
    tasks: [
      '동적 세그먼트(:cityId) 라우트 등록',
      'useRoute()로 route.params · route.query 읽기',
      'useRouter()로 push · replace · go 사용',
      '주소에 이미 ?search=값이 있으면 그 값으로 화면 상태 복원',
    ],
    practiceGuide: [
      {
        practice: 'useRoute() 로 읽고, useRouter() 로 옮긴다',
        do: '`router.push({ name: \'WeatherDetail\', params: { cityId: \'seoul\' } })` 버튼을 누르세요.',
        see: '주소가 `/weather/seoul` 로 바뀌고, 위쪽 **route.params** 에 `{ "cityId": "seoul" }` 이 채워집니다.',
        why: '주소의 `:cityId` **빈칸에 들어간 값**이 params 입니다. 라우트는 한 줄인데 도시는 45개일 수 있는 이유입니다.',
      },
      {
        do: '`router.push({ name: \'Search\', query: { q: \'vue\' } })` 를 눌러 보세요.',
        see: '주소에 `?q=vue` 가 붙고 **route.query** 만 채워집니다. params 는 비어 있습니다.',
        why: '**params 는 주소의 일부**(빈칸)이고 **query 는 물음표 뒤 덤**입니다. query는 라우터 설정에 미리 적어 두지 않아도 됩니다.',
      },
      {
        do: '`/user/42/posts` 버튼을 눌러 보세요.',
        see: 'params에 `{ "userId": "42" }` 가 들어옵니다. 42가 **경로 한가운데**에 있는데도 잡힙니다.',
        why: '동적 세그먼트는 경로 끝이 아니라 **중간에도** 놓을 수 있습니다(Inline Dynamic Segment).',
      },
      {
        do: '히스토리 스택을 보면서 push 버튼을 두세 번 누른 뒤, `← router.go(-1)` 을 눌러 보세요.',
        see: '목록이 한 줄씩 쌓이고, go(-1)을 누르면 「지금」 표시가 위로 올라갑니다. 기록은 지워지지 않습니다.',
        why: '`push`는 **쌓기**입니다. 그래서 뒤로가기가 됩니다.',
      },
      {
        do: '마지막으로 `router.replace(\'/login\')` 을 누르고 스택을 보세요.',
        see: '줄이 늘지 않고 **마지막 줄이 /login 으로 바뀝니다.**',
        why: '`replace`는 **덮어쓰기**입니다. 로그인 후 이동에 replace를 쓰는 이유가 이것입니다 — 뒤로가기로 로그인 화면에 다시 돌아가면 곤란하니까요.',
      },
    ],
    pitfalls: [
      {
        bad: 'route.params.cityId = "busan"',
        good: "router.push({ name: 'WeatherDetail', params: { cityId: 'busan' } })",
        why: 'route는 읽기 전용입니다. 직접 바꿔도 주소는 그대로고 화면도 안 바뀝니다.',
      },
      {
        bad: 'const router = useRoute()',
        good: 'const route = useRoute() / const router = useRouter()',
        why: '이름이 한 글자 차이라 가장 많이 하는 실수입니다. router.push가 없다는 에러가 나면 이걸 의심하세요.',
      },
      {
        bad: 'onMounted(() => fetchCity(route.params.cityId))',
        good: 'watch(() => route.params.cityId, fetchCity, { immediate: true })',
        why: '/weather/seoul → /weather/busan 처럼 **같은 컴포넌트에서 파라미터만 바뀌면** 컴포넌트가 재사용되어 onMounted가 다시 불리지 않습니다.',
      },
      {
        bad: 'route.params.userId 를 숫자로 계산',
        good: 'Number(route.params.userId)',
        why: 'params와 query 값은 **항상 문자열**입니다. 42가 아니라 "42"입니다.',
      },
      {
        why: '주소에 담을지 화면 상태로 둘지 기준은 하나입니다 — **링크로 남에게 보내고 싶은가.** 검색어·선택한 도시는 주소에, 사이드바 접힘 같은 건 ref로 두면 됩니다.',
      },
    ],
    extensions: [
      '`router.push({ name: \'user\', params: { id: 1 }, query: { tab: \'info\' } })` 처럼 params와 query를 함께 넘겨 보세요.',
      '`router.back()` · `router.forward()` 를 go(-1) · go(1)과 비교해 보세요. 같은 동작의 다른 이름입니다.',
      '주소에 `?search=수원` 이 이미 있을 때, onMounted에서 그 값을 읽어 검색창을 복원해 보세요 (교안 169쪽).',
      '`router.push({ path: \'details\' })` 처럼 슬래시 없이 넘기면 상대 경로가 됩니다. 절대 경로와 어떻게 다른지 확인해 보세요.',
      '이 사이트의 최종 결과물 화면처럼, 선택한 도시를 `?city=` 쿼리에 넣어 링크로 공유되게 만들어 보세요.',
    ],
    practices: ['RouterNavigatePractice'],
    status: 'done',
  },

  {
    id: 27,
    chapterId: 5,
    label: 'Code Challenge 24',
    title: 'Navigation Guard · Catch-all',
    slidePage: '175쪽',
    studyRange: '173~175쪽',
    goal: '페이지 진입 전에 권한을 검사하고, 정의되지 않은 주소를 안전하게 받아냅니다.',
    lecture: {
      intro:
        'Navigation Guard는 **페이지 입장 전 검문소**입니다. 로그인해야 볼 수 있는 마이페이지에 비로그인 사용자가 들어오려 하면, 문 앞에서 막아 로그인 화면으로 돌려보냅니다. Catch-all은 그 반대편 — **어느 문에도 안 걸린 사람을 받아 주는 안내 데스크**입니다.',
      summary:
        'Guard는 특정 라우트로 **진입하기 직전에 가로채** 권한 검사나 리다이렉션 같은 로직을 실행합니다. 쓰는 위치에 따라 **전역 가드 · 라우터별 가드 · 컴포넌트 내 가드**로 나뉩니다.',
      points: [
        'Guard는 세 종류다 — **전역(Global)**, **라우터별(Per-route)**, **컴포넌트 내(In-component)**. 가장 많이 쓰는 것은 전역 가드다.',
        '전역 가드의 실행 시점은 셋이다. **beforeEach**(이동이 시작되기 직전) → **beforeResolve**(컴포넌트까지 다 준비된 직후) → **afterEach**(화면 전환이 끝난 뒤).',
        '**beforeEach** 는 접근 권한 통제에, **beforeResolve** 는 마지막 데이터 확인에, **afterEach** 는 분석 로그 전송처럼 뒷정리에 쓴다.',
        '가드는 `(to, from, next)` 를 받는다 — **to**는 가려는 곳, **from**은 지금 있는 곳, **next**는 통과를 허가하는 함수다.',
        '`next()` 는 통과, `next(\'/login\')` 는 다른 곳으로 강제 이동이다. **next를 부르지 않으면 화면이 멈춘 채로 남는다.**',
        '정의되지 않은 주소로 들어오면 Vue Router는 **에러를 던지지 않는다.** 그냥 매칭되는 컴포넌트를 못 찾아 `<RouterView/>` 자리가 **하얗게 비어 버린다.**',
        '그래서 **Catch-all Route**(`/:pathMatch(.*)*`)를 routes 배열 **가장 마지막**에 두어 나머지를 전부 받아 낸다.',
      ],
      syntax: [
        {
          code: `// router/index.js — 라우터 인스턴스 아래에 배치
router.beforeEach((to, from, next) => {
  const isAuthenticated = false   // 실제로는 쿠키나 localStorage 토큰 검사

  if (to.meta.isAuth && !isAuthenticated) {
    alert('로그인이 필요한 서비스입니다.')
    next('/')                     // 통과를 불허하고 강제 이동
  } else {
    next()                        // 일반 통과 허가
  }
})`,
          parts: [
            { token: 'router.beforeEach', role: '모든 라우트 전환에서 불리는 전역 가드. 라우터를 만든 뒤에 붙인다' },
            { token: 'to', role: '**이동할 목적지** route 객체. to.meta, to.params 를 여기서 본다' },
            { token: 'from', role: '**현재 출발지** route 객체' },
            { token: 'next', role: '이동을 허가하는 **종결 함수**. 부르지 않으면 화면이 멈춘다' },
            { token: 'to.meta.isAuth', role: 'routes에 meta: { isAuth: true } 로 적어 둔 표식. 이름은 내가 정한다' },
          ],
          returns:
            '돌려주는 값은 없다. next() 를 어떻게 부르느냐로 결과가 갈린다 — next()는 통과, next(경로)는 강제 이동, next(false)는 이동 취소.',
          desc: '최신 문법에서는 next 대신 경로를 return 해도 된다.',
        },
        {
          code: `// routes 에 표식 달기
{
  path: '/mypage',
  name: 'MyPage',
  component: () => import('../views/MyPageView.vue'),
  meta: { isAuth: true },        // 이 문은 잠겨 있다
}`,
          parts: [
            { token: 'meta', role: '라우트에 붙이는 메모장. 가드에서 to.meta 로 읽는다' },
            { token: 'isAuth', role: '내가 정하는 이름. requiresAuth 등 무엇이든 좋다' },
          ],
          returns: 'meta 자체는 아무 동작도 하지 않는다. 가드가 읽어 줘야 의미가 생긴다.',
          desc: '어느 문이 잠겼는지 routes 한 곳에 모아 두는 방식이다.',
        },
        {
          code: `const routes = [
  { path: '/', name: 'Home', component: HomeView },
  // ... 기타 정의된 라우트들 ...

  // 위 어디에도 안 걸린 모든 경로
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]`,
          parts: [
            { token: ':pathMatch', role: '내가 정하는 파라미터 이름. route.params.pathMatch 로 꺼낼 수 있다' },
            { token: '(.*)*', role: '슬래시를 포함한 **모든 문자**를 받는다는 정규식' },
          ],
          returns:
            '어디에도 매칭되지 않은 주소가 여기로 온다. 없으면 화면이 하얗게 빈다.',
          desc: '반드시 배열 맨 마지막. 위에 두면 모든 주소를 이게 먼저 낚아챈다.',
        },
      ],
    },
    tasks: [
      'routes에 meta: { isAuth: true } 표식 달기',
      'router.beforeEach로 비로그인 접근 차단',
      'next() 와 next(경로) 구분해서 사용',
      'Catch-all Route를 배열 맨 마지막에 배치',
    ],
    practiceGuide: [
      {
        practice: 'Navigation Guard — 페이지 입장 전 검문소',
        do: '**비로그인 상태**에서 자물쇠가 붙은 `/mypage` 를 눌러 보세요.',
        see: '화면은 `/login` 으로 갑니다. 검문 기록에 붉은 줄로 `next(\'/login\')` 이 남습니다.',
        why: '`to.meta.isAuth` 가 참인데 로그인이 안 됐으니 **문 앞에서 돌려보낸** 것입니다. 이것이 가드의 대표 용도입니다.',
      },
      {
        do: '`로그인하기` 를 누른 뒤 다시 `/mypage` 를 눌러 보세요.',
        see: '이번엔 통과해서 마이페이지가 뜨고, 기록에 `next() — 통과 허가` 가 초록으로 남습니다.',
        why: '같은 코드인데 결과가 다릅니다. 가드는 **주소가 아니라 상태를 보고** 판단합니다.',
      },
      {
        do: '검문 기록의 **순서**를 위에서 아래로 읽어 보세요(최근 것이 위입니다).',
        see: 'beforeEach → beforeResolve → afterEach 순입니다. 차단된 경우엔 beforeResolve가 **아예 나오지 않습니다.**',
        why: 'beforeEach에서 막히면 **컴포넌트를 준비할 필요조차 없기 때문**입니다. 그래서 권한 검사는 가장 앞인 beforeEach에서 합니다.',
      },
      {
        do: '`Catch-all Route 사용` 체크를 **끄고** `/unknown-page` 를 눌러 보세요.',
        see: '액자 안이 **하얗게 텅 빕니다.** 에러 메시지도 없습니다.',
        why: '교안이 짚는 부분입니다 — Vue Router는 없는 주소에 **에러를 던지지 않습니다.** 그냥 그릴 컴포넌트를 못 찾을 뿐이라 원인을 찾기 어렵습니다.',
      },
      {
        do: '체크를 다시 **켜고** `/unknown-page` 를 눌러 보세요.',
        see: '404 안내 화면이 대신 나옵니다.',
        why: '`/:pathMatch(.*)*` 가 나머지를 전부 받아 냈습니다. **배열 맨 마지막**에 있어야 다른 주소를 가로채지 않습니다.',
      },
    ],
    pitfalls: [
      {
        bad: "router.beforeEach((to, from, next) => { if (ok) next() })",
        good: 'if (ok) next() else next(\'/login\')',
        why: '어느 갈래에서든 next를 **반드시 한 번** 불러야 합니다. 안 부르면 화면이 그대로 멈춥니다. 에러도 안 나서 가장 찾기 어려운 버그입니다.',
      },
      {
        bad: "next('/login') 을 로그인 페이지에서도 실행",
        good: "if (to.path !== '/login') next('/login')",
        why: '로그인 페이지로 보내는 가드가 로그인 페이지에서도 돌면 **무한 리다이렉트**에 빠집니다.',
      },
      {
        bad: "Catch-all 을 routes 배열 위쪽에 배치",
        good: '항상 맨 마지막',
        why: 'routes는 위에서부터 검사합니다. 그물을 앞에 두면 모든 주소가 404로 갑니다.',
      },
      {
        bad: 'beforeEach 안에서 무거운 API 호출',
        good: '필요한 검사만 하고 통과시킨 뒤 화면에서 불러오기',
        why: '가드는 **모든 화면 이동마다** 실행됩니다. 여기가 느리면 앱 전체가 느려집니다.',
      },
      {
        why: '전역 가드로 모든 걸 처리하려 하지 마세요. 한 화면에만 필요한 검사는 **컴포넌트 내 가드**나 그 화면의 onMounted가 더 읽기 쉽습니다.',
      },
    ],
    extensions: [
      'meta에 `roles: [\'admin\']` 처럼 배열을 넣고, 사용자 역할과 비교하는 가드를 만들어 보세요.',
      'afterEach에서 `console.log(to.fullPath)` 를 찍어 방문 기록을 남겨 보세요. 실무에서 분석 도구를 붙이는 자리입니다.',
      '`beforeEnter` (라우터별 가드)를 한 라우트에만 붙여 전역 가드와 실행 순서를 비교해 보세요.',
      '차단할 때 `next(\'/login\')` 대신 `next({ name: \'Login\', query: { redirect: to.fullPath } })` 로 보내고, 로그인 후 원래 가려던 곳으로 돌려보내 보세요.',
      'Catch-all에서 `route.params.pathMatch` 를 찍어, 사용자가 뭘 잘못 입력했는지 화면에 보여 주세요.',
    ],
    practices: ['RouterGuardPractice'],
    status: 'done',
  },

  /* ---------------- CH06 ---------------- */
  {
    id: 10,
    chapterId: 6,
    label: 'Code Challenge 10',
    title: 'Pinia Store',
    slidePage: '190쪽',
    studyRange: '179~189쪽',
    goal: 'Pinia를 등록하고 Store를 만들어 여러 컴포넌트에서 공유합니다.',
    lecture: {
      intro:
        'Props와 Emits로 데이터를 넘기다 보면, 손자에게 값을 주려고 아들을 거쳐야 하는 상황이 생깁니다(Props Drilling). Pinia는 건물 로비의 공용 사물함입니다. 누구든 층수와 상관없이 바로 열어보고 넣을 수 있어서, 로그인 정보나 설정처럼 앱 전체가 쓰는 값을 담습니다.',
      summary:
        'Pinia는 여러 컴포넌트가 함께 쓰는 데이터를 담는 공용 사물함입니다. state(데이터) · getters(계산값) · actions(동작)로 구성됩니다.',
      points: [
        'main.js에서 app.use(createPinia())로 등록한다.',
        'stores/counter.js에서 defineStore()로 만든다. 이름은 use~Store 규칙을 따른다.',
        'state를 그냥 구조 분해하면 **반응성이 끊긴다. `storeToRefs()`로 감싼다.**',
        'actions는 state를 바꾸는 함수이며 this 없이 직접 접근한다.',
      ],
      syntax: [
        {
          code: `export const useCounterStore = defineStore('counter', {
  state:   () => ({ count: 0 }),
  getters: { double: (s) => s.count * 2 },
  actions: { increase() { this.count++ } },
})

const store = useCounterStore()
const { count } = storeToRefs(store)   // 반응성 유지`,
          parts: [
            { token: 'useCounterStore', role: '내가 정하는 이름. use~Store 관례를 따른다' },
            { token: 'defineStore(...)', role: 'Pinia 함수. 인자를 두 개 받는다' },
            { token: "'counter'", role: '1번째 인자 — 스토어의 고유 id. Devtools에 이 이름으로 표시된다' },
            { token: '{ state, getters, actions }', role: '2번째 인자 — 스토어 설계도' },
            { token: 'state: () => ({...})', role: '반드시 객체를 돌려주는 함수여야 한다' },
            { token: 'getters', role: 'computed에 해당. 1번째 매개변수로 state를 받는다' },
            { token: 'actions', role: '메서드. 여기서는 this로 state에 접근한다' },
            { token: 'storeToRefs(store)', role: 'state·getters를 반응성을 유지한 채 꺼내는 함수' },
          ],
          returns:
            'defineStore는 "스토어를 꺼내는 함수"를 돌려준다. 그래서 컴포넌트에서 useCounterStore() 처럼 한 번 더 호출해야 실제 스토어가 나온다.',
          desc: 'storeToRefs를 빼먹는 것이 가장 흔한 실수. actions는 그냥 store.increase 로 쓴다.',
        },
      ],
    },
    tasks: [
      'main.js에 Pinia 등록',
      'stores/counter.js에 Store 생성',
      'StoreCounter.vue에서 Store 사용',
      'Vue Devtools에서 Pinia 상태 확인',
    ],
    pitfalls: [
      {
        bad: 'const { count } = useCounterStore()',
        good: 'const { count } = storeToRefs(useCounterStore())',
        why: '그냥 구조 분해하면 값만 복사되어 반응성이 끊깁니다. 화면이 갱신되지 않는 원인 1위입니다.',
      },
      {
        bad: 'storeToRefs(store).increase',
        good: 'store.increase  (actions는 그대로)',
        why: 'storeToRefs는 state와 getters에만 씁니다. actions는 함수라 그냥 꺼내 써도 됩니다.',
      },
      {
        bad: "state: { count: 0 }",
        good: 'state: () => ({ count: 0 })',
        why: 'state는 반드시 객체를 돌려주는 함수여야 합니다. 그래야 인스턴스마다 값이 섞이지 않습니다.',
      },
      {
        bad: 'main.js에 app.use(createPinia()) 누락',
        good: 'createApp(App).use(createPinia()).mount("#app")',
        why: '등록하지 않으면 useStore 호출 시점에 "no active Pinia" 오류가 납니다.',
      },
      {
        why: '스토어 이름은 use로 시작하고 Store로 끝내는 관례(useCounterStore)를 지키면 협업할 때 헷갈리지 않습니다.',
      },
    ],
    extensions: [
      '다크모드 on/off를 Pinia로 관리하고, 여러 화면에서 동시에 반영되는지 확인해 보세요.',
      'getters로 "장바구니 총액"처럼 state에서 파생되는 값을 만들어 보세요.',
      'localStorage에 값을 저장했다가 새로고침 후 복원하는 로직을 action에 넣어 보세요.',
      'Vue Devtools의 Pinia 탭에서 state를 직접 수정하고 화면이 따라 바뀌는지 확인해 보세요.',
      '스토어를 두 개(예: authStore, configStore) 만들고 역할을 나눠 보세요.',
    ],
    practices: ['StoreCounterPractice'],
    status: 'done',
  },

  /* ---------------- CH07 ---------------- */
  {
    id: 11,
    chapterId: 7,
    label: 'Code Challenge 11',
    title: 'Axios와 날씨 API',
    slidePage: '208쪽',
    studyRange: '193~207쪽',
    goal: 'Axios로 OpenWeather API를 호출해 실제 데이터를 받아옵니다.',
    lecture: {
      intro:
        '지금까지 화면에 쓴 데이터는 전부 우리가 직접 적어둔 가짜였습니다. 이제 진짜 서버에 전화를 걸어 실제 날씨를 받아옵니다. Axios가 그 전화기입니다. 다만 전화는 즉시 끝나지 않으므로, 응답을 기다리는 동안 "불러오는 중" 화면을 보여주는 처리가 함께 필요합니다.',
      summary:
        'Axios는 서버와 JSON 데이터를 주고받는 HTTP 클라이언트입니다. fetch보다 편해서(JSON 자동 변환·에러 처리·인터셉터) 실무 표준으로 쓰입니다.',
      points: [
        'npm install axios 로 설치한다.',
        '**응답의 알맹이는 `res.data`** 안에 들어 있다.',
        'async/await + try-catch-finally 로 로딩·에러 상태를 함께 관리한다.',
        '**API Key는 소스에 직접 쓰지 말고 `.env`로 분리**한다. 과제 평가 항목이다.',
      ],
      syntax: [
        {
          code: `try {
  isLoading.value = true
  const res = await axios.get(url, { params: { q: city } })
  data.value = res.data          // 알맹이는 res.data
} catch (e) {
  error.value = e.message
} finally {
  isLoading.value = false
}`,
          parts: [
            { token: 'try / catch / finally', role: 'JavaScript 문법. 실패할 수 있는 코드를 감싼다' },
            { token: 'await', role: '응답이 올 때까지 기다린다. async 함수 안에서만 쓸 수 있다' },
            { token: 'axios.get(url, 설정)', role: '1번째 인자는 주소, 2번째는 옵션 객체' },
            { token: 'params: { q: city }', role: '쿼리스트링이 된다. ?q=서울 로 변환되어 붙는다' },
            { token: 'res.data', role: '응답의 알맹이. res 자체에는 status·headers도 함께 들어 있다' },
            { token: 'e.message', role: 'catch가 받는 에러 객체의 설명 문자열' },
          ],
          returns:
            'axios.get()은 Promise를 돌려주고, await를 붙이면 응답 객체(res)가 나온다. res 안에는 data · status · headers 등이 들어 있다.',
          desc: 'finally에서 로딩 해제 — 성공/실패 모두 실행된다.',
        },
      ],
    },
    tasks: [
      'Axios 설치',
      'OpenWeather 가입 및 API Key 발급',
      'Axios Weather 예제 작성',
      'Axios JSON Placeholder 예제 작성',
    ],
    pitfalls: [
      {
        bad: 'data.value = res',
        good: 'data.value = res.data',
        why: '응답 객체에는 status·headers 등이 함께 들어 있습니다. 실제 알맹이는 res.data입니다.',
      },
      {
        bad: "const KEY = 'abc123' 을 소스에 직접 작성",
        good: 'import.meta.env.VITE_API_KEY 로 분리 + .gitignore',
        why: 'API 키가 GitHub에 공개되면 남이 내 할당량을 쓰고 요금이 청구될 수 있습니다. 제출 평가 항목이기도 합니다.',
      },
      {
        bad: 'await 없이 axios.get(...) 결과를 바로 사용',
        good: 'const res = await axios.get(...)',
        why: 'await를 빼면 Promise 객체가 담겨 화면에 [object Promise]가 나옵니다.',
      },
      {
        bad: 'try만 쓰고 finally 생략',
        good: 'finally에서 isLoading = false',
        why: '요청이 실패했을 때 로딩 표시가 영원히 사라지지 않습니다. finally는 성공·실패 모두 실행됩니다.',
      },
      {
        why: 'OpenWeather API 키는 발급 직후 몇 십 분간 활성화되지 않을 수 있습니다. 401 오류가 나면 조금 기다렸다 다시 시도하세요.',
      },
    ],
    extensions: [
      '로딩 중 스피너, 실패 시 에러 메시지, 성공 시 데이터 — 세 가지 상태를 v-if로 나눠 보세요.',
      '검색어를 입력하면 도시 날씨를 불러오도록 만들고, 없는 도시를 입력했을 때 404 처리를 해 보세요.',
      'axios.create()로 baseURL과 timeout을 설정한 인스턴스를 만들어 보세요.',
      '여러 도시의 날씨를 Promise.all로 한꺼번에 불러와 보세요.',
      '응답 데이터를 그대로 쓰지 말고, 화면에 필요한 형태로 가공하는 함수를 따로 만들어 보세요.',
    ],
    practiceGuide: [
      {
        practice: 'Axios — 서버에서 날씨 받아오기',
        do: '"정상 응답"인 채로 axios.get() 을 보내 보세요.',
        see: '먼저 회색 스피너가 돌고, 0.6초 뒤 기온 카드로 바뀝니다.',
        why: '서버 응답은 즉시 오지 않습니다. 그 사이를 비워 두면 사용자는 앱이 멈춘 줄 압니다. 로딩·성공·실패 세 갈래를 모두 그려야 하는 이유입니다.',
      },
      {
        do: '"서버 오류(500)"로 바꾸고 다시 보내세요. 통신 기록을 함께 보세요.',
        see: '붉은 실패 화면이 뜨고, 기록에 error.response.status = 500 이 남습니다.',
        why: 'axios 는 2xx 가 아니면 catch 로 던집니다. 서버가 답을 준 실패라서 error.response 안에 상태 코드와 본문이 들어 있습니다.',
      },
      {
        do: '"응답 없음(timeout)"으로 바꾸고 보내 보세요.',
        see: '이번에는 기록에 "error.response 가 없다 — ECONNABORTED" 가 남습니다.',
        why: '실패는 두 갈래입니다. 서버가 거절한 실패에는 response 가 있고, 아예 닿지 못한 실패에는 없습니다. error.response.status 만 읽는 코드는 이 경우 또 다른 에러를 냅니다.',
      },
      {
        do: '어떤 모드로 실패시키든 통신 기록의 마지막 줄을 확인하세요.',
        see: '실패했을 때도 "finally — 로딩 종료" 가 반드시 찍힙니다.',
        why: 'isLoading 을 try 끝에서 끄면 실패했을 때 영원히 도는 스피너가 남습니다. 뒷정리는 finally 에서 합니다.',
      },
    ],
    practices: ['AxiosWeatherPractice'],
    status: 'done',
  },

  /* ---------------- CH08 ---------------- */
  {
    id: 12,
    chapterId: 8,
    label: 'Code Challenge 12',
    title: 'Element Plus — 회원가입 폼',
    slidePage: '225쪽',
    studyRange: '214~215쪽 · 218~219쪽 · 223쪽',
    goal: 'el-card·el-input·el-switch로 폼을 만들고 ElMessage로 검증 결과를 안내합니다.',
    lecture: {
      intro:
        '버튼 하나를 예쁘게 만들려면 CSS를 한참 써야 합니다. Element Plus는 이미 잘 만들어진 버튼·입력창·달력·표를 가져다 쓰는 것입니다. 이케아 가구처럼 조립만 하면 됩니다. 설치하고 main.js에 등록하면 <el-button> 같은 태그를 바로 쓸 수 있습니다.',
      summary:
        'Element Plus는 이미 만들어진 UI 컴포넌트 모음입니다. 설치 후 main.js에 등록하면 <el-> 태그를 바로 쓸 수 있습니다.',
      points: [
        'npm install element-plus 후 main.js에서 import + app.use(ElementPlus).',
        'CSS도 함께 import 해야 스타일이 적용된다.',
        'ElMessage는 태그가 아니라 함수로 호출하는 알림이다.',
      ],
      syntax: [
        {
          code: `import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

ElMessage.error('이메일 형식이 올바르지 않습니다.')`,
          parts: [
            { token: 'ElementPlus', role: '내가 정하는 이름(default import라 자유롭게 지을 수 있다)' },
            { token: "'element-plus/dist/index.css'", role: '스타일시트. 이 줄을 빼먹으면 디자인이 하나도 안 입혀진다' },
            { token: 'app.use(...)', role: 'Vue 플러그인 등록. main.js에서 한 번만 실행' },
            { token: 'ElMessage.error(...)', role: '태그가 아니라 함수. error·warning·success·info 네 종류' },
          ],
          returns:
            'app.use()는 app 객체를 그대로 돌려줘서 체이닝이 가능하다. ElMessage 계열은 알림 인스턴스를 돌려주지만 보통 쓰지 않는다.',
          desc: 'CSS import를 빼먹으면 스타일이 깨진다.',
        },
      ],
    },
    tasks: [
      'userForm에 email·agree 상태 만들기',
      '이메일에 @가 없으면 ElMessage.error 표시',
      '약관 미동의 시 ElMessage.warning 표시',
      '검증 성공 시 ElMessage.success 표시',
      'el-card · el-input · el-switch · el-button 사용',
    ],
    pitfalls: [
      {
        bad: "import ElementPlus from 'element-plus' 만 작성",
        good: "import 'element-plus/dist/index.css' 도 함께",
        why: 'CSS를 빼먹으면 컴포넌트는 동작하지만 스타일이 하나도 안 입혀져 깨져 보입니다. 가장 흔한 첫 실수입니다.',
      },
      {
        bad: '<ElMessage>오류</ElMessage>',
        good: "ElMessage.error('오류')",
        why: 'ElMessage는 태그가 아니라 script에서 호출하는 함수입니다.',
      },
      {
        bad: 'v-model 없이 el-input에 :value만',
        good: 'v-model="userForm.email"',
        why: 'Element Plus 컴포넌트도 v-model을 그대로 지원합니다. 굳이 직접 이벤트를 연결할 필요가 없습니다.',
      },
      {
        why: '전체 등록(app.use)은 편하지만 번들 용량이 커집니다. 실무에서는 쓰는 컴포넌트만 골라 등록하는 방식도 고려합니다.',
      },
    ],
    extensions: [
      'el-form의 rules 옵션으로 직접 짠 검증 로직을 대체해 보세요.',
      '비밀번호 확인 필드를 추가하고 두 값이 다르면 경고를 띄워 보세요.',
      'el-dialog로 가입 완료 팝업을 만들어 보세요.',
      '기존에 만든 날씨 검색창을 el-input + el-button으로 바꿔 보세요.',
      'el-loading을 API 호출 중에 표시해 보세요.',
    ],
    practiceGuide: [
      {
        practice: 'Element Plus — 회원가입 폼',
        do: '이메일을 비운 채로 "가입하기"를 눌러 보세요.',
        see: '화면 오른쪽 위에 붉은 알림이 잠깐 떴다 사라집니다. 아래 기록에는 error 로 남습니다.',
        why: 'ElMessage 는 템플릿에 태그로 적는 것이 아니라 import 해서 호출하는 함수입니다. 그래서 화면 어디에도 자리를 잡아 둘 필요가 없습니다.',
      },
      {
        do: '이메일에 @ 를 넣되 약관 스위치는 끈 채로 다시 누르세요.',
        see: '이번에는 주황색 warning 이 뜹니다. error 가 아닙니다.',
        why: '검증은 위에서부터 순서대로 걸립니다. 첫 관문을 통과해야 다음 관문의 메시지를 볼 수 있습니다.',
      },
      {
        do: '스위치를 켜고 userForm 상자를 보면서 눌러 보세요.',
        see: 'agree 가 false 에서 true 로 바뀌고, 초록 success 가 뜹니다.',
        why: 'el-switch 도 v-model 로 묶여 있어 클릭하는 순간 reactive 객체 안의 값이 바뀝니다. 화면 부품이 라이브러리 것이어도 상태 관리 방식은 그대로입니다.',
      },
    ],
    practices: ['ElementFormPractice'],
    status: 'done',
  },
  {
    id: 13,
    chapterId: 8,
    label: 'Code Challenge 13',
    title: 'Element Plus — 상품 수량과 별점',
    slidePage: '226쪽',
    studyRange: '216~221쪽',
    goal: 'el-input-number와 el-rate로 상품 UI를 구성합니다.',
    lecture: {
      intro:
        '수량 입력칸과 별점은 직접 만들면 은근히 손이 많이 갑니다(플러스/마이너스 버튼, 최솟값 제한, 별 채우기…). Element Plus는 el-input-number와 el-rate로 이걸 한 줄에 끝냅니다. v-model만 연결하면 됩니다.',
      summary: 'Basic·Form·Data 카테고리의 컴포넌트를 조합해 상품 카드를 만듭니다.',
      points: [
        'el-input-number는 v-model로 숫자 상태와 직접 연결된다.',
        'el-rate는 별점 값을 숫자로 관리한다.',
      ],
      syntax: [
        {
          code: `const productQuantity = ref(1)
const productRate = ref(4)

<el-input-number v-model="productQuantity" :min="1" />
<el-rate v-model="productRate" />`,
          parts: [
            { token: 'productQuantity', role: '내가 정하는 이름. 숫자로 초기화해야 한다' },
            { token: '<el-input-number>', role: 'Element Plus가 제공하는 컴포넌트 태그' },
            { token: 'v-model', role: '평범한 input과 똑같이 양방향 연결된다' },
            { token: ':min="1"', role: '콜론 필수. 없으면 문자열 "1"이 전달된다' },
          ],
          returns:
            '컴포넌트라서 값을 돌려주지 않는다. 대신 v-model로 연결된 ref 값이 사용자의 조작에 따라 갱신된다.',
          desc: 'Element Plus 컴포넌트도 v-model을 그대로 지원한다.',
        },
      ],
    },
    tasks: [
      'productQuantity 초깃값 1로 설정',
      'productRate 초깃값 4로 설정',
      'el-card · el-input-number 등으로 상품 UI 구성',
    ],
    pitfalls: [
      {
        bad: '<el-input-number v-model="qty" />  (최솟값 없음)',
        good: '<el-input-number v-model="qty" :min="1" />',
        why: '제한이 없으면 수량이 0이나 음수까지 내려갑니다. :min과 :max를 함께 지정하세요.',
      },
      {
        bad: 'const qty = ref("1")',
        good: 'const qty = ref(1)',
        why: 'el-input-number는 숫자를 다룹니다. 문자열로 초기화하면 계산할 때 문제가 생깁니다.',
      },
      {
        bad: ':min="1" 을 min="1" 으로 작성',
        good: ':min="1"',
        why: '콜론이 없으면 숫자 1이 아니라 문자열 "1"이 전달됩니다.',
      },
    ],
    extensions: [
      '수량 × 단가로 총액을 computed로 계산해 표시해 보세요.',
      'el-rate에 show-score와 텍스트 옵션을 붙여 "4.0점"까지 보여 주세요.',
      '상품 여러 개를 v-for로 카드 목록으로 만들어 보세요.',
      '재고보다 많은 수량을 고르면 경고를 띄우도록 watch를 붙여 보세요.',
    ],
    practiceGuide: [
      {
        practice: 'Element Plus — 상품 수량과 별점',
        do: '수량의 − 버튼을 계속 눌러 보세요.',
        see: '1 에서 멈추고 − 버튼이 회색으로 비활성화됩니다.',
        why: ':min="1" 한 줄이 하는 일입니다. 직접 만들었다면 입력값 검사·버튼 잠금·음수 방어를 모두 손으로 짜야 합니다.',
      },
      {
        do: '수량을 바꾸면서 아래 합계와 "지금 값" 상자를 함께 보세요.',
        see: '합계가 즉시 다시 계산되고, productQuantity 값도 같이 바뀝니다.',
        why: 'el-input-number 도 v-model 로 묶인 평범한 반응형 값입니다. computed 가 그 값을 보고 있으니 자동으로 다시 계산됩니다.',
      },
      {
        do: '별점을 3점, 5점으로 바꿔 보세요.',
        see: '별 옆의 설명 문구가 "괜찮아요", "최고예요"로 함께 바뀝니다.',
        why: 'show-text 를 켜고 texts 배열을 주면 점수에 맞는 문구를 골라 줍니다. 배열의 순서가 1점부터입니다.',
      },
    ],
    practices: ['ElementProductPractice'],
    status: 'done',
  },
  {
    id: 14,
    chapterId: 8,
    label: 'Code Challenge 14',
    title: 'Element Plus — 삭제 확인과 진행률',
    slidePage: '227쪽',
    studyRange: '220~223쪽',
    goal: 'ElMessageBox로 확인 창을 띄우고 el-progress로 진행률을 표시합니다.',
    lecture: {
      intro:
        '"정말 삭제하시겠습니까?" 창은 사용자의 대답을 기다려야 합니다. 언제 대답할지 모르니 Promise로 처리합니다. 확인을 누르면 then, 취소를 누르면 catch로 갈라집니다. 진행률 바는 setInterval로 숫자를 올리되, 끝나면 반드시 타이머를 꺼야 합니다.',
      summary:
        'ElMessageBox.confirm()은 Promise를 반환하므로 then/catch 또는 await로 사용자의 선택을 처리합니다.',
      points: [
        '확인은 then(또는 await 성공), 취소는 catch로 들어온다.',
        'setInterval로 만든 타이머는 100 도달 시 clearInterval로 반드시 정리한다.',
      ],
      syntax: [
        {
          code: `ElMessageBox.confirm('삭제하시겠습니까?')
  .then(() => ElMessage.success('삭제됨'))
  .catch(() => ElMessage.info('취소됨'))`,
          parts: [
            { token: 'ElMessageBox.confirm(...)', role: 'Element Plus 함수. 확인 창을 띄운다' },
            { token: "'삭제하시겠습니까?'", role: '1번째 인자 — 사용자에게 보여줄 메시지' },
            { token: '.then(...)', role: '사용자가 "확인"을 눌렀을 때 실행' },
            { token: '.catch(...)', role: '사용자가 "취소"를 눌렀을 때 실행. 생략하면 콘솔 에러' },
          ],
          returns:
            'Promise를 돌려준다. 확인이면 이행(resolve), 취소면 거부(reject)로 갈라진다. async 함수 안에서는 await + try-catch로도 쓸 수 있다.',
          desc: '취소도 catch로 잡아야 콘솔 에러가 안 난다.',
        },
      ],
    },
    tasks: [
      'ElMessageBox.confirm()으로 삭제 확인',
      '삭제·취소 결과를 ElMessage로 안내',
      'downloadProgress · isDownloading 반응형 상태 만들기',
      'setInterval로 진행률 20씩 증가',
      '100 도달 시 타이머 정리 및 완료 메시지',
    ],
    pitfalls: [
      {
        bad: 'ElMessageBox.confirm(...).then(...)  (catch 없음)',
        good: '.then(...).catch(...) 둘 다 작성',
        why: '취소는 "거부된 Promise"로 처리됩니다. catch가 없으면 콘솔에 Uncaught 오류가 찍힙니다.',
      },
      {
        bad: '100% 도달 후에도 setInterval 유지',
        good: 'clearInterval(timer)로 정리',
        why: '타이머가 계속 돌면서 값이 100을 넘어가고, 화면을 벗어나도 멈추지 않습니다.',
      },
      {
        bad: '다운로드 중에도 버튼을 계속 누를 수 있음',
        good: ':disabled="isDownloading"',
        why: '중복 실행되면 타이머가 여러 개 돌아 진행률이 두 배로 뜁니다.',
      },
      {
        why: 'let timer는 함수 밖 스코프에 두세요. onUnmounted에서도 정리하려면 접근할 수 있어야 합니다.',
      },
    ],
    extensions: [
      '진행률이 100%가 되면 el-progress의 status를 success로 바꿔 보세요.',
      '"취소" 버튼을 만들어 진행 중인 타이머를 중단해 보세요.',
      '삭제 확인을 async/await + try-catch 방식으로 바꿔 보세요.',
      '목록에서 항목을 삭제할 때 확인 창을 띄우고 실제로 배열에서 제거해 보세요.',
      'onUnmounted에서 타이머를 정리하고, 화면을 빠르게 오갈 때 문제가 없는지 확인해 보세요.',
    ],
    practiceGuide: [
      {
        practice: 'Element Plus — 삭제 확인과 진행률',
        do: '파일 하나의 "삭제"를 누르고, 뜬 창에서 <b>취소</b>를 눌러 보세요.',
        see: '파일은 그대로 남고, 기록에 "catch — 취소를 눌렀다" 가 찍힙니다.',
        why: 'ElMessageBox.confirm 은 Promise 를 돌려줍니다. 확인은 then, 취소는 catch 입니다. catch 를 빼먹으면 취소할 때마다 Unhandled Rejection 경고가 콘솔에 쌓입니다.',
      },
      {
        do: '이번에는 같은 파일을 삭제하고 "삭제"를 누르세요.',
        see: '목록에서 사라지고 기록에는 "then — 삭제됨" 이 찍힙니다.',
        why: '같은 함수인데 사용자의 선택에 따라 두 갈래로 갈라집니다. 확인창은 값을 돌려주는 게 아니라 어느 쪽 가지로 갈지를 정합니다.',
      },
      {
        do: '"다운로드 시작"을 누르고 막대가 100 에서 멈추는지 보세요.',
        see: '20씩 다섯 번 차오르고 100 에서 초록으로 바뀌며 멈춥니다.',
        why: 'setInterval 은 스스로 멈추지 않습니다. 100 에서 clearInterval 을 부르지 않으면 120, 140 으로 계속 올라가고 이 화면을 닫아도 뒤에서 계속 돕니다.',
      },
    ],
    practices: ['ElementConfirmPractice'],
    status: 'done',
  },

  /* ---------------- CH09 ---------------- */

  /*
   * 아래 다섯 장은 손으로 만들 것이 없는 읽기 카드다.
   * 교안 230~244쪽에서 코드 챌린지와 짝이 없는 내용만 모았다.
   * kind: 'reading' 은 "코드 챌린지 개수"에서 빼기 위한 표시다.
   */
  {
    id: 'r9-history',
    kind: 'reading',
    chapterId: 9,
    label: '읽기 자료',
    title: 'JavaScript 는 어떻게 지금 모습이 되었나',
    slidePage: '230~231쪽',
    goal: '왜 ES6 이후만 Modern JavaScript 라 부르는지, 최신 문법을 마음껏 써도 되는지 정리합니다.',
    lecture: {
      intro:
        'Vue 를 배우는데 왜 JavaScript 역사를 보나 싶겠지만, 이유가 하나 있습니다. 인터넷에서 코드를 검색하면 2010년대 코드와 지금 코드가 섞여 나옵니다. var 와 function 으로 짠 것, jQuery 로 짠 것, 그리고 우리가 배우는 것. 어느 시대 코드인지 구분할 수 있어야 무엇을 따라 쓸지 고를 수 있습니다.',
      summary:
        '2015년 ES6 한 번의 대규모 개편에서 지금 문법 대부분이 나왔습니다. 그 이후로는 매년 조금씩 추가되며, 이 시대를 통칭해 Modern JavaScript 라 부릅니다.',
      points: [
        '**1세대 (1995~1999)** — Netscape 가 브라우저에 동적 기능을 넣으려고 만들었다. IE 가 비슷하지만 다른 Jscript 를 실어서, 브라우저마다 코드가 다르게 도는 것을 막으려고 ECMA 가 표준을 정했다 (ECMAScript = ES).',
        '**2세대 (2000~2008)** — IE 독점으로 표준화(ES4)가 무산됐다. JavaScript 는 팝업창이나 띄우는 가벼운 스크립트 취급이었고, 브라우저별 차이를 메워 준 jQuery 가 시장을 지배했다.',
        '**3세대 (2009~2014)** — Chrome 의 V8 엔진이 공개되며 Node.js 가 태어났다. JavaScript 가 브라우저 밖 서버에서도 돌기 시작했다. use strict, forEach · map · filter 가 이때 들어왔다.',
        '**4세대 (2015~)** — ES6 가 문법을 혁신적으로 뜯어고쳤다. 이후로는 연례 소규모 업데이트가 정착했다.',
        'ES6(2015)~ES11(2020) 문법은 데스크톱·모바일 브라우저를 가리지 않고 **100% 네이티브로 지원**된다. ES12~ES15 도 96% 이상이다.',
        '**Babel** 은 최신 문법을 구형 브라우저용으로 번역한다. **Polyfill** 은 구형 엔진에 아예 없는 객체·메서드(Promise 등)를 JavaScript 로 직접 구현해 끼워 넣는다. 번역과 부품 제작의 차이다.',
      ],
    },
    pitfalls: [
      {
        why: '검색해서 나온 코드에 var 와 function() { } 이 보이면 2015년 이전 것일 가능성이 높습니다. 동작은 하지만 이 챕터에서 배우는 방식과 섞어 쓰면 일관성이 깨집니다.',
      },
      {
        why: 'jQuery(`$("#id")`)로 시작하는 예제는 Vue 와 사고방식이 정반대입니다. jQuery 는 화면을 직접 찾아가 고치고, Vue 는 데이터만 바꾸면 화면이 따라옵니다. 둘을 한 프로젝트에 섞으면 누가 화면을 바꿨는지 추적할 수 없게 됩니다.',
      },
    ],
    practices: [],
    practiceNote:
      '읽기만 하는 카드입니다. 우리가 쓰는 Vite 안에 Babel 과 Polyfill 이 이미 들어 있어서, 브라우저 호환성을 걱정하지 않고 최신 문법으로 코딩하면 됩니다.',
    status: 'done',
  },
  {
    id: 'r9-let-const',
    kind: 'reading',
    chapterId: 9,
    label: '읽기 자료',
    title: 'let & const — var 를 쓰지 않는 이유',
    slidePage: '232쪽',
    goal: '세 가지 선언 방식의 차이를 알고, 기본을 const 로 두는 습관을 만듭니다.',
    lecture: {
      intro:
        'var 는 같은 이름을 두 번 선언해도 조용히 넘어갑니다. 300줄짜리 파일에서 이름이 겹치면, 값이 이상해졌을 때 어디서 덮어썼는지 찾을 방법이 없습니다. let 과 const 는 그 자리에서 에러를 냅니다 — 불편한 것이 목적입니다.',
      summary:
        'const 를 기본으로 쓰고, 값이 바뀌어야 할 때만 let 으로 바꿉니다. var 는 쓰지 않습니다.',
      points: [
        '**스코프** — var 는 함수 단위, let·const 는 블록({}) 단위다. if 나 for 안에서 만든 var 는 밖에서도 보인다.',
        '**재선언** — var 는 가능(버그의 원인), let·const 는 불가능.',
        '**재할당** — var·let 은 가능, const 는 불가능.',
        '**호이스팅** — 셋 다 발생하지만 var 는 undefined 로 초기화되어 조용히 넘어가고, let·const 는 TDZ 로 인해 에러가 난다.',
        '**const 로 만든 배열에 push 는 된다.** const 가 막는 것은 재할당(=)이지 내용 변경이 아니다.',
      ],
      syntax: [
        {
          code: `var name = '철수'
var name = '영희'   // 조용히 덮어쓴다 → 출력: 영희

const name = '철수'
const name = '영희' // 에러: Identifier 'name' has already been declared

const name = '철수'
name = '영희'       // 에러: Assignment to constant variable

const list = []
list.push(1)        // 이것은 된다 — 재할당이 아니라 내용 변경`,
          parts: [
            { token: 'var', role: '구시대의 유산. 재선언·재할당이 모두 되어 추적이 어렵다' },
            { token: 'let', role: '재할당은 되고 재선언은 안 된다. 값이 바뀌는 변수에 쓴다' },
            { token: 'const', role: '재할당이 안 된다. 기본으로 이것을 쓴다' },
            { token: 'list.push(1)', role: '내용 변경이라 const 여도 허용된다' },
          ],
          returns: '선언문이라 돌려주는 값이 없다. 변수라는 이름표를 만드는 일만 한다.',
          desc: '무엇이 막히고 무엇이 되는가.',
        },
      ],
    },
    pitfalls: [
      {
        bad: 'const total = 0  // 이후 total += price',
        good: 'let total = 0',
        why: '누적하는 값에 const 를 쓰면 첫 덧셈에서 에러가 납니다. 반대로 절대 안 바뀌는 값에 let 을 쓰면 나중에 읽는 사람이 "이건 바뀌나 보다"라고 오해합니다.',
      },
      {
        bad: 'const user = { name: "철수" } 를 두고 "고칠 수 없다"고 생각하기',
        good: 'user.name = "영희" 는 된다',
        why: 'const 는 상자를 바꾸는 것을 막을 뿐, 상자 안의 물건을 바꾸는 것은 막지 않습니다. 객체와 배열에서 특히 헷갈리는 지점입니다.',
      },
    ],
    practices: [],
    practiceNote: '읽기만 하는 카드입니다. 이 챕터의 실습 코드는 전부 const 로 시작합니다.',
    status: 'done',
  },
  {
    id: 'r9-arrow',
    kind: 'reading',
    chapterId: 9,
    label: '읽기 자료',
    title: 'Arrow Function — 계속 보이던 => 의 정체',
    slidePage: '233쪽',
    goal: '함수를 선언하는 세 가지 방식을 구분하고, 화살표 함수를 값처럼 넘기는 법을 익힙니다.',
    lecture: {
      intro:
        '@click="() => reset()" 이나 map(item => item.name) 에서 매일 보던 그 화살표입니다. 특별한 문법이 아니라 function 이라는 단어를 지우고 => 를 넣은 것뿐입니다. 짧아서 콜백 자리에 쓰기 좋기 때문에 모던 프레임워크가 이것을 씁니다.',
      summary:
        '함수 선언 방식은 세 가지입니다. Vue 에서는 화살표 함수를 주로 쓰며, 한 줄이면 return 과 중괄호를 생략할 수 있습니다.',
      points: [
        '**Function Declaration** — `function foo() {}`. 함수 전체가 호이스팅되어 선언문 전에도 호출할 수 있다. 전통적인 유틸리티 함수에 쓴다.',
        '**Function Expression** — `const foo = function() {}`. 변수만 호이스팅되어 초기화 전 호출하면 에러가 난다.',
        '**Arrow Function** — `const foo = () => {}`. 변수만 호이스팅된다. 모던 프레임워크(Vue/React)와 비동기 콜백에 쓴다.',
        '코드가 한 줄이면 중괄호와 return 을 함께 생략할 수 있다: `const sum = (a, b) => a + b`',
        '매개변수가 하나면 소괄호도 생략 가능하다: `const pow = x => x * x`',
        '**화살표 함수 자체를 매개변수로 넘길 수 있다.** 함수도 값이기 때문이다.',
      ],
      syntax: [
        {
          code: `const calculate = (num1, num2, operation) => {
  return operation(num1, num2)   // 배달받은 함수를 여기서 대신 실행
}

const addResult = calculate(10, 5, (a, b) => a + b)      // 15
const multiplyResult = calculate(10, 5, (a, b) => a * b) // 50`,
          parts: [
            { token: 'operation', role: '식별자. 함수를 담는 매개변수 이름이다 (내가 정한 이름)' },
            { token: '(a, b) => a + b', role: '호출하는 쪽이 그때그때 만들어 넘기는 함수' },
            { token: 'operation(num1, num2)', role: '받은 함수를 실제로 실행하는 자리' },
          ],
          returns:
            'calculate 는 operation 이 돌려준 값을 그대로 돌려준다. 무엇이 돌아올지는 넘긴 함수가 정한다.',
          desc: '함수를 값처럼 넘기는 것 — map·filter·watch 가 전부 이 구조다.',
        },
      ],
    },
    pitfalls: [
      {
        bad: 'const sum = (a, b) => { a + b }',
        good: 'const sum = (a, b) => a + b',
        why: '중괄호를 쓰면 함수 본문이 되므로 return 을 적어야 합니다. 중괄호를 지우면 그 식의 결과가 자동으로 반환됩니다. 값이 undefined 로 나오는 흔한 원인입니다.',
      },
      {
        bad: 'const makeUser = () => { name: "철수" }',
        good: 'const makeUser = () => ({ name: "철수" })',
        why: '객체를 바로 돌려주려면 소괄호로 감싸야 합니다. 그러지 않으면 JavaScript 가 중괄호를 함수 본문으로 읽습니다.',
      },
      {
        bad: '@click="reset()" 을 @click="reset" 로 착각',
        good: '두 가지 모두 맞지만 뜻이 다르다',
        why: '`@click="reset"` 은 함수 자체를 넘기는 것이고 `@click="reset()"` 은 지금 실행한 결과를 넘기는 것입니다. 인자가 필요하면 `@click="() => reset(id)"` 처럼 화살표로 감쌉니다.',
      },
    ],
    practices: [],
    practiceNote:
      '읽기만 하는 카드입니다. 앞 챕터의 실습에서 이미 화살표 함수를 계속 써 왔습니다 — 이제 이름을 붙였을 뿐입니다.',
    status: 'done',
  },
  {
    id: 'r9-rest',
    kind: 'reading',
    chapterId: 9,
    label: '읽기 자료',
    title: 'Rest 문법 — Spread 와 같은 기호, 반대 방향',
    slidePage: '238쪽',
    goal: '... 이 언제 펼치는 것이고 언제 모으는 것인지 위치로 구분합니다.',
    lecture: {
      intro:
        '점 세 개(...)가 두 가지 뜻으로 쓰입니다. 같은 기호라 처음에는 헷갈리는데, 구분법은 간단합니다 — 값을 만드는 오른쪽에 있으면 펼치는 것(Spread), 값을 받는 왼쪽에 있으면 모으는 것(Rest)입니다.',
      summary:
        'Spread 는 뭉친 것을 낱개로 펼치고, Rest 는 낱개들을 하나로 모읍니다. 방향이 정반대입니다.',
      points: [
        '**구조 분해에서의 Rest** — 몇 개만 변수로 빼고 남은 속성을 한데 묶어 별도의 객체·배열로 보존한다.',
        '**함수 매개변수에서의 Rest** — 개수가 정해지지 않은 인자를 배열 하나로 받는다.',
        'Rest 는 반드시 **마지막 자리**에 와야 한다. 남은 것을 모으는 문법이라 뒤에 뭔가 더 올 수 없다.',
        '한 줄 안에 둘이 같이 나오기도 한다: `const merged = { ...base, ...extra }` 는 둘 다 Spread 다.',
      ],
      syntax: [
        {
          code: `const employee = {
  name: 'Graves', age: 35,
  role: 'Instructor', team: 'Edu-Tech', location: 'Seoul',
}

// name·age 만 꺼내고 나머지는 restInfo 에 담아라
const { name, age, ...restInfo } = employee
// restInfo → { role: 'Instructor', team: 'Edu-Tech', location: 'Seoul' }

// 함수 매개변수에서 — 앞 둘은 이름을 주고, 나머지는 배열로 수집
const printMedalList = (gold, silver, ...others) => {
  console.log(others)   // ['부산', '대구', '제주', '광주']
}
printMedalList('수원', '서울', '부산', '대구', '제주', '광주')`,
          parts: [
            { token: '...restInfo', role: '왼쪽(받는 자리)에 있으므로 Rest — 남은 속성을 모은다' },
            { token: '...others', role: '매개변수 자리의 Rest — 남은 인자를 배열로 받는다' },
            { token: '{ ...base, ...extra }', role: '오른쪽(만드는 자리)이면 Spread — 펼쳐서 흩뿌린다' },
          ],
          returns:
            'Rest 로 모은 것은 새 객체 또는 새 배열이다. 원본에서 잘라낸 것이 아니라 복사해 담은 것이라 원본은 그대로다.',
          desc: '위치로 구분한다.',
        },
      ],
    },
    pitfalls: [
      {
        bad: 'const [...rest, last] = arr',
        good: 'const [first, ...rest] = arr',
        why: 'Rest 는 마지막에만 올 수 있습니다. "남은 것"을 정의하는 문법이라, 뒤에 무언가 더 있으면 남은 것이 무엇인지 정할 수 없습니다.',
      },
      {
        why: '구조 분해 Rest 로 만든 객체는 얕은 복사입니다. 안쪽에 또 객체가 있으면 원본과 공유되므로, 그것을 고치면 원본도 함께 바뀝니다.',
      },
    ],
    practices: [],
    practiceNote:
      '읽기만 하는 카드입니다. Spread 쪽은 바로 아래 "불변성 복사와 기본값 방어" 실습에서 직접 눌러 볼 수 있습니다.',
    status: 'done',
  },
  {
    id: 'r9-methods',
    kind: 'reading',
    chapterId: 9,
    label: '읽기 자료',
    title: 'ES6 이후 늘어난 Array · Object 기능',
    slidePage: '241~244쪽',
    goal: '외울 목록이 아니라, 필요할 때 찾아볼 수 있게 무엇이 있는지만 훑습니다.',
    lecture: {
      intro:
        '이 카드는 외우는 곳이 아니라 찾아보는 곳입니다. 다만 하나만은 기억해 두면 좋습니다 — 2023년에 추가된 toSorted·toReversed 계열입니다. 원본을 뒤집어 버리던 옛 메서드와 달리 새 배열을 돌려주기 때문에, Vue 의 computed 안에서 반드시 이쪽을 써야 합니다.',
      summary:
        '배열에서는 find·includes·at·toSorted 를, 객체에서는 단축 속성명·Object.entries·Optional Chaining 을 자주 씁니다.',
      points: [
        '**find()** — 조건을 만족하는 최초의 *아이템 자체*를 준다 (없으면 undefined). **findIndex()** 는 *인덱스 숫자*를 준다 (없으면 -1).',
        '**includes()** — 특정 값이 있는지 true/false 만 준다. 구식 `indexOf(x) !== -1` 을 대체한다.',
        '**at(-1)** — 맨 뒤 요소를 `arr[arr.length - 1]` 없이 꺼낸다. 음수 인덱스를 지원한다.',
        '**toSorted() · toReversed() · toSpliced()** (ES14) — 원본을 보존하면서 정렬·반전된 **새 배열**을 돌려준다. sort() 는 원본을 뒤집는다.',
        '**단축 속성명** — `{ name: name }` 대신 `{ name }`. 변수명과 key 가 같을 때만.',
        '**계산된 속성명** — `{ [keyName]: value }`. 대괄호를 쳐서 변수 값을 key 이름으로 쓴다.',
        '**Object.entries()** — 객체를 `[[key, value], …]` 2차원 배열로 바꾼다. 배열이 되면 forEach·map 을 쓸 수 있다.',
      ],
      syntax: [
        {
          code: `const scoreBoard = { math: 90, english: 80, science: 100 }

// 객체를 [['math', 90], ['english', 80], …] 2차원 배열로 쪼갠다
Object.entries(scoreBoard).forEach(([subject, score]) => {
  console.log(\`과목: \${subject}, 점수: \${score}\`)
})

// 원본을 지키는 정렬
const sorted = cities.toSorted((a, b) => b.temp - a.temp)`,
          parts: [
            { token: 'Object.entries(...)', role: 'Object 내장 함수. 객체를 배열로 바꾼다' },
            { token: '([subject, score])', role: '배열 구조 분해. 한 쌍이 [키, 값] 두 칸이라 그대로 받는다' },
            { token: 'toSorted(...)', role: '원본을 두고 정렬된 새 배열을 돌려준다' },
          ],
          returns:
            'Object.entries 는 2차원 배열을, toSorted 는 정렬된 새 배열을 돌려준다. 둘 다 원본은 그대로 남는다.',
          desc: '객체를 순회하려면 일단 배열로 바꾼다.',
        },
      ],
    },
    pitfalls: [
      {
        bad: 'computed(() => cities.value.sort((a, b) => …))',
        good: 'computed(() => cities.value.toSorted((a, b) => …))',
        why: 'sort() 는 원본 배열을 직접 뒤집습니다. computed 안에서 원본을 고치면 그 변화가 다시 computed 를 깨우는 무한 루프가 나거나, 다른 화면의 순서까지 바뀝니다.',
      },
      {
        bad: 'const found = arr.find(x => x.id === 3).name',
        good: 'const found = arr.find(x => x.id === 3)?.name',
        why: 'find 는 못 찾으면 undefined 를 줍니다. 바로 점을 찍으면 TypeError 로 앱이 멈춥니다.',
      },
      {
        bad: 'if (arr.indexOf(city) > 0)',
        good: 'if (arr.includes(city))',
        why: 'indexOf 는 첫 번째 요소일 때 0 을 돌려주는데 0 은 falsy 라 조건이 거짓이 됩니다. `> 0` 이 아니라 `!== -1` 이어야 하고, 애초에 includes 를 쓰면 이 실수가 없습니다.',
      },
    ],
    practices: [],
    practiceNote:
      '읽기만 하는 카드입니다. 목록을 외우지 말고, 배열을 다루다 막힐 때 여기로 돌아와 훑어보세요.',
    status: 'done',
  },

  {
    id: 15,
    chapterId: 9,
    label: 'Code Challenge 15',
    title: '데이터 추출과 포맷팅',
    slidePage: '247쪽',
    studyRange: '234쪽 · 235쪽 · 241쪽',
    goal: '구조 분해 할당과 템플릿 리터럴로 데이터를 뽑아 문자열로 조립합니다.',
    lecture: {
      intro:
        '지금까지 Vue 코드에서 계속 보이던 낯선 문법들을 정리하는 챕터입니다. 구조 분해는 택배 상자에서 필요한 물건만 꺼내는 것이고, 템플릿 리터럴은 문자열 사이에 값을 끼워 넣는 문법입니다. 둘 다 알고 나면 코드가 훨씬 짧아집니다.',
      summary:
        '구조 분해 할당은 객체·배열에서 필요한 값만 골라 변수로 꺼내는 문법이고, 템플릿 리터럴은 백틱과 ${}로 문자열을 조립하는 문법입니다.',
      points: [
        '중첩 객체도 한 줄로 분해할 수 있다: const { grade, details: { score } } = raw',
        'includes()는 배열에 특정 값이 있는지 boolean으로 알려준다.',
        '템플릿 리터럴 안에서는 ${}로 표현식을 넣는다.',
      ],
      syntax: [
        {
          code: `const { grade, details: { score } } = rawData
const msg = \`등급: \${grade} / 점수: \${score}점\``,
          parts: [
            { token: 'const { grade }', role: '식별자. 객체의 grade 키와 이름이 같아야 꺼내진다' },
            { token: 'details: { score }', role: '중첩 분해. 콜론 뒤에 한 겹 더 들어간다 (details 변수는 안 생김)' },
            { token: '= rawData', role: '분해할 원본 객체' },
            { token: '`백틱`', role: '템플릿 리터럴. 작은따옴표가 아니다' },
            { token: '${grade}', role: '문자열 안에 값을 끼워 넣는 자리. 표현식도 가능' },
          ],
          returns:
            '구조 분해는 값을 복사해 새 변수를 만든다(원본은 그대로). 템플릿 리터럴은 조립된 문자열 하나를 만든다.',
          desc: '중첩 분해 + 템플릿 리터럴.',
        },
      ],
    },
    tasks: [
      "members.includes('박부산') 결과를 memberContainsPark에 저장",
      'rawData에서 grade와 details.score를 구조 분해로 한 줄 추출',
      '템플릿 리터럴로 결과 문자열 조립',
    ],
    pitfalls: [
      {
        bad: "'점수: ' + score + '점'",
        good: '`점수: ${score}점`',
        why: '+ 연결은 따옴표와 공백을 놓치기 쉽습니다. 템플릿 리터럴은 백틱(`)을 쓰며 작은따옴표가 아닙니다.',
      },
      {
        bad: 'const { details.score } = rawData',
        good: 'const { details: { score } } = rawData',
        why: '중첩 객체를 분해할 때는 콜론으로 한 단계 더 들어갑니다. 점 표기법은 쓸 수 없습니다.',
      },
      {
        bad: 'const { name } = undefined',
        good: 'const { name } = rawData ?? {}',
        why: '값이 없는 객체를 분해하면 TypeError로 앱이 멈춥니다.',
      },
      {
        why: 'includes()는 대소문자를 구분합니다. 검색 기능에 쓸 때는 양쪽을 toLowerCase()로 맞추세요.',
      },
    ],
    extensions: [
      '날씨 객체에서 도시명·기온·상태만 구조 분해로 꺼내 한 줄 요약 문자열을 만들어 보세요.',
      '배열 구조 분해로 [첫째, 둘째] = 배열 형태를 실험해 보세요.',
      '함수 매개변수에서 바로 구조 분해하는 형태(function f({ name, age }))를 써 보세요.',
      'map()과 템플릿 리터럴을 조합해 목록 문자열을 만들어 보세요.',
      '기본값 문법 const { unit = "C" } = config 를 실험해 보세요.',
    ],
    practiceGuide: [
      {
        practice: '데이터 추출 및 포맷팅',
        do: '"과제 1 가동" 버튼을 눌러 보세요.',
        see: '결과창 위에 memberContainsPark · grade · score 세 값이 각각 따로 나타납니다.',
        why: '결과 문자열 한 줄만 보면 무엇이 어디서 왔는지 알 수 없습니다. 조립되기 전의 낱개 값을 먼저 봐야 구조 분해가 무엇을 꺼냈는지 보입니다.',
      },
      {
        do: 'memberContainsPark 의 값이 왜 "박부산"이 아니라 true 인지 확인하세요.',
        see: '재료 칸의 박부산만 색이 다르게 칠해져 있습니다.',
        why: 'includes() 는 찾은 값을 돌려주는 게 아니라 "있느냐 없느냐"만 판정합니다. 값을 꺼내려면 find() 를 써야 합니다.',
      },
      {
        do: 'score 줄의 코드가 details.score 가 아니라 details: { score } 인 것을 보세요.',
        see: '값 95 가 number 색으로 표시됩니다. details 라는 변수는 만들어지지 않았습니다.',
        why: '중첩 분해에서 콜론은 "이름 바꾸기"가 아니라 "한 겹 더 들어가기"입니다. 그래서 껍데기인 details 는 변수로 남지 않습니다.',
      },
    ],
    practices: ['ModernExtractPractice'],
    status: 'done',
  },
  {
    id: 16,
    chapterId: 9,
    label: 'Code Challenge 16',
    title: '불변성 복사와 기본값 방어',
    slidePage: '248쪽',
    studyRange: '236~238쪽 · 245~246쪽',
    goal: '스프레드로 원본을 지키며 복사하고, ?. 와 ?? 로 안전하게 기본값을 씁니다.',
    lecture: {
      intro:
        '원본을 그대로 두고 복사본을 만드는 것이 불변성입니다. 원본을 직접 고치면 어디서 바뀌었는지 추적이 안 되고 Vue의 반응성도 놓치기 쉽습니다. 그리고 || 와 ?? 의 차이는 실무에서 "재고 0개"가 갑자기 기본값으로 바뀌는 버그로 자주 나타납니다.',
      summary:
        '스프레드(...)는 원본을 건드리지 않고 새 배열/객체를 만듭니다. ??는 null·undefined일 때만 기본값을 쓰므로 0이나 빈 문자열을 보존합니다.',
      points: [
        'push()는 원본을 바꾸지만 [...arr, item]은 새 배열을 만든다 — 반응성에 유리하다.',
        '**`||`는 0과 빈 문자열도 기본값으로 바꿔버린다. `??`는 그렇지 않다.**',
        '?. 는 중간 값이 없으면 에러 대신 undefined를 반환한다.',
      ],
      syntax: [
        {
          code: `const updated = [...cart, 'Orange']
const img   = product?.image ?? '이미지 준비중'
const stock = product.count ?? 0    // count가 0이면 0 유지`,
          parts: [
            { token: '[...cart, ...]', role: '스프레드. 기존 배열을 펼쳐 담고 뒤에 새 항목을 붙인다' },
            { token: '?.', role: 'Optional Chaining. 앞이 없으면 에러 대신 undefined' },
            { token: '??', role: 'Nullish 병합. 왼쪽이 null·undefined일 때만 오른쪽을 쓴다' },
            { token: 'product.count ?? 0', role: 'count가 0이어도 0이 유지된다. || 였다면 기본값으로 바뀐다' },
          ],
          returns:
            '스프레드는 새 배열/객체를 만들어 돌려준다(원본 불변, 단 한 겹만 복사). ??는 왼쪽 또는 오른쪽 값 하나를 돌려준다.',
          desc: '재고 0을 지키려면 || 가 아니라 ?? 를 쓴다.',
        },
      ],
    },
    tasks: [
      "스프레드로 기존 장바구니 뒤에 'Orange'를 추가한 새 배열 만들기",
      "?. 와 ?? 로 이미지가 없을 때 '이미지 준비중' 사용",
      '?? 로 재고 값 0이 기본값으로 바뀌지 않게 처리',
      '템플릿 리터럴로 결과 문자열 조립',
    ],
    pitfalls: [
      {
        bad: 'const stock = product.count || 0',
        good: 'const stock = product.count ?? 0',
        why: '|| 는 0과 빈 문자열도 falsy로 보고 기본값으로 바꿔버립니다. "재고 0개"가 사라지는 대표적인 버그입니다.',
      },
      {
        bad: 'cart.push("Orange")',
        good: 'const updated = [...cart, "Orange"]',
        why: 'push는 원본을 직접 바꿉니다. 새 배열을 만들면 변경 전후를 비교할 수 있고 예상치 못한 부작용이 줄어듭니다.',
      },
      {
        bad: 'const copy = { ...user }  후 copy.address.city 수정',
        good: '중첩 객체는 안쪽까지 따로 복사',
        why: '스프레드는 한 겹만 복사(얕은 복사)합니다. 안쪽 객체는 원본과 공유되어 함께 바뀝니다.',
      },
      {
        bad: 'product.image.url  (image가 없을 때)',
        good: 'product.image?.url ?? "준비중"',
        why: '중간 값이 없으면 TypeError로 앱이 멈춥니다. ?. 는 그 경우 undefined를 돌려줍니다.',
      },
    ],
    extensions: [
      '?? 와 || 를 각각 쓴 코드를 나란히 두고 값에 0, "", null을 넣어 결과를 비교해 보세요.',
      '객체 스프레드로 기존 설정에 일부만 덮어쓰는 { ...config, unit: "F" } 를 만들어 보세요.',
      '중첩 객체를 얕은 복사한 뒤 안쪽 값을 바꿔 원본까지 바뀌는지 직접 확인해 보세요.',
      'Rest 문법 const [first, ...rest] = arr 로 배열을 나눠 보세요.',
      'API 응답에 값이 빠져 있는 상황을 가정하고 ?. 와 ?? 로 방어 코드를 짜 보세요.',
    ],
    practiceGuide: [
      {
        practice: '불변성 복사 및 데이터 방어',
        do: '"과제 2 가동"을 누르고 원본 칸과 새 배열 칸을 비교하세요.',
        see: '오른쪽에는 Orange 가 늘었는데 왼쪽 currentCart 는 두 개 그대로입니다.',
        why: '스프레드는 기존 배열을 펼쳐 담아 새 배열을 만듭니다. 원본과 주소가 완전히 분리되어 한쪽을 고쳐도 다른 쪽이 따라 변하지 않습니다.',
      },
      {
        do: '아래 대조표에서 stock 줄을 보세요. 같은 0 에 || 와 ?? 를 각각 쓴 결과입니다.',
        see: 'stock 줄만 붉게 칠해져 있고, || 쪽은 99, ?? 쪽은 0 입니다.',
        why: '0 은 JavaScript 가 false 로 취급하는 Falsy 값이라 || 는 "값이 없다"고 판단해 기본값으로 덮어씁니다. ?? 는 null 과 undefined 만 없는 값으로 봅니다.',
      },
      {
        do: 'preview 줄도 함께 보세요. 이쪽은 색이 칠해져 있지 않습니다.',
        see: '|| 와 ?? 의 결과가 "이미지 준비중"으로 똑같습니다.',
        why: 'null 은 둘 다 없는 값으로 보기 때문입니다. 그래서 || 를 써도 티가 안 나는 자리가 있고, 그 경험 때문에 0 에서 방심하다 터집니다.',
      },
    ],
    practices: ['ModernImmutablePractice'],
    status: 'done',
  },
  {
    id: 17,
    chapterId: 9,
    label: 'Code Challenge 17',
    title: '비동기 연쇄 처리',
    slidePage: '249쪽',
    studyRange: '239~240쪽',
    goal: 'async/await로 비동기 호출을 순서대로 연결하고 try-catch로 실패를 처리합니다.',
    lecture: {
      intro:
        '서버 요청은 즉시 끝나지 않습니다. Promise는 "나중에 결과를 줄게"라는 약속이고, await는 "그 결과가 올 때까지 여기서 기다려"라는 뜻입니다. await 덕분에 비동기 코드를 위에서 아래로 읽히는 평범한 코드처럼 쓸 수 있습니다.',
      summary:
        'Promise는 나중에 도착할 값을 담은 약속이고, async/await는 그 약속을 동기 코드처럼 읽히게 만드는 문법입니다.',
      points: [
        'Promise 에는 세 가지 상태가 있다 — **Pending**(시작했지만 아직 성공도 실패도 아님), **Fulfilled**(성공, 값이 준비됨), **Rejected**(실패, 이유를 알 수 있음).',
        'ES6 이전에는 끝난 뒤 실행할 로직을 함수 인자로 넘기는 Callback 을 썼고, 그것이 겹겹이 쌓인 것이 Callback Hell 이다. Promise 는 그것을 펴기 위해 나왔다.',
        '`.then`(성공) · `.catch`(실패) · `.finally`(성공·실패 무관) 체인으로도 쓸 수 있다. async/await 는 같은 것을 위에서 아래로 읽히게 쓴 것이다.',
        'await는 async 함수 안에서만 쓸 수 있다. **async 함수는 항상 Promise 를 반환한다.**',
        '앞의 결과가 뒤의 입력이 되는 연쇄 호출에 특히 유용하다.',
        '에러는 try-catch로 잡는다. 잡지 않으면 Unhandled Rejection이 된다.',
      ],
      syntax: [
        {
          code: `try {
  const { uid }  = await fetchUserId()
  const { nick } = await fetchUserProfile(uid)
  result.value = \`동기화 성공: \${nick}님 환영합니다.\`
} catch {
  result.value = '통신 실패'
}`,
          parts: [
            { token: 'await', role: 'Promise가 끝날 때까지 기다린다. async 함수 안에서만 사용 가능' },
            { token: 'const { uid }', role: '구조 분해. 응답 객체에서 uid만 꺼낸다' },
            { token: 'fetchUserProfile(uid)', role: '앞 결과를 인자로 넘기는 연쇄 호출' },
            { token: 'try { } catch { }', role: '실패 처리. catch에 매개변수를 안 써도 된다' },
          ],
          returns:
            'await를 붙이면 Promise가 "풀린 값"이 나온다. async 함수 자체는 항상 Promise를 돌려주므로, 부르는 쪽에서도 await가 필요하다.',
          desc: '연쇄 호출 전체를 하나의 try로 감싼다.',
        },
      ],
    },
    tasks: [
      'fetchUserId()를 await하고 uid 추출',
      'fetchUserProfile(uid)를 이어서 호출하고 nick 추출',
      '전체 비동기 로직을 try-catch로 감싸기',
      "성공 시 '동기화 성공: [닉네임]님 환영합니다.' 표시",
      "실패 시 '통신 실패' 표시",
    ],
    pitfalls: [
      {
        bad: 'function load() { const r = await fetch() }',
        good: 'async function load() { const r = await fetch() }',
        why: 'await는 async 함수 안에서만 쓸 수 있습니다. 빠뜨리면 문법 오류가 납니다.',
      },
      {
        bad: 'const data = fetchUser()  (await 없음)',
        good: 'const data = await fetchUser()',
        why: 'await를 빼면 Promise 객체 자체가 담겨 화면에 [object Promise]가 출력됩니다.',
      },
      {
        bad: 'try-catch 없이 await 연속 호출',
        good: '전체를 하나의 try-catch로 감싸기',
        why: '중간에 하나라도 실패하면 Unhandled Rejection이 발생하고 이후 코드가 실행되지 않습니다.',
      },
      {
        bad: '독립적인 요청 3개를 await로 하나씩',
        good: 'await Promise.all([a(), b(), c()])',
        why: '서로 의존하지 않는 요청까지 순서대로 기다리면 시간이 3배로 걸립니다.',
      },
    ],
    extensions: [
      'setTimeout으로 2초 뒤 성공하는 가짜 API를 만들고 로딩 표시를 붙여 보세요.',
      '일부러 실패하는 함수를 만들어 catch 블록이 동작하는지 확인해 보세요.',
      'Promise.all과 순차 await의 실행 시간을 console.time으로 측정해 비교해 보세요.',
      '.then().catch() 체인으로 짠 코드를 async/await로 바꿔 보세요.',
      '재시도 로직(실패하면 한 번 더 호출)을 만들어 보세요.',
    ],
    practiceGuide: [
      {
        practice: '비동기 연쇄 파이프라인',
        do: '"과제 3 가동"을 누르고 결과가 나오기까지 화면을 지켜보세요.',
        see: '점선 상자 두 개가 왼쪽부터 차례로 실선이 되며 색이 찹니다. 800ms 가 걸립니다.',
        why: '앞 호출의 결과인 uid 가 뒤 호출의 인자이기 때문에 동시에 보낼 수 없습니다. await 가 그 순서를 강제합니다.',
      },
      {
        do: '진행 기록에서 "여기서 멈춰 기다린다"가 찍힌 뒤 값이 도착하는 순서를 확인하세요.',
        see: 'await 줄이 먼저 찍히고, 400ms 뒤에 uid 도착이 찍힙니다.',
        why: 'await 를 만나면 함수가 그 자리에서 멈춥니다. 멈춘 동안 브라우저는 다른 일을 합니다 — 화면이 얼지 않는 이유입니다.',
      },
      {
        do: '"두 번째 호출을 실패시키기"를 켜고 다시 가동해 보세요.',
        see: '첫 단계는 성공하지만 두 번째에서 붉은 줄이 뜨고 결과창이 "통신 실패"가 됩니다.',
        why: 'await 가 실패하면 그 아래 줄들은 실행되지 않고 곧바로 catch 로 뜁니다. try-catch 가 없으면 여기서 앱이 멈춥니다.',
      },
    ],
    practices: ['ModernAsyncPractice'],
    status: 'done',
  },

  /* ---------------- CH10 ---------------- */
  {
    id: 18,
    chapterId: 10,
    label: 'Code Challenge 18',
    title: 'ESLint',
    slidePage: '270쪽',
    studyRange: '252~258쪽',
    goal: '규칙을 설정하고 의도적으로 위반한 뒤, 에디터와 CLI에서 검출되는지 확인합니다.',
    lecture: {
      intro:
        'ESLint는 맞춤법 검사기입니다. 실행하기 전에 오타, 안 쓰는 변수, 위험한 문법을 미리 잡아줍니다. 특히 == 대신 === 를 쓰게 하는 규칙이 중요한데, ==는 "0"과 0을 같다고 판단해서 예상 밖의 버그를 만들기 때문입니다.',
      summary:
        'ESLint는 문법 오류와 위험한 작성 방식을 실행 전에 잡아내는 정적 분석 도구입니다. Prettier와 역할이 달라 함께 씁니다.',
      points: [
        'eqeqeq 규칙은 == 대신 ===를 강제한다. == 는 타입 변환 때문에 예상 밖의 결과를 낸다.',
        '에디터에는 물결선으로, 터미널에서는 npm run lint로 확인한다.',
        '확인이 끝나면 의도적으로 넣은 오류는 반드시 제거한다.',
      ],
      syntax: [
        {
          code: `rules: {
  'eqeqeq': ['error', 'always'],
  'no-console': 'off',
}`,
          parts: [
            { token: 'rules', role: 'ESLint 설정 객체의 키. 검사 규칙을 모아두는 곳' },
            { token: "'eqeqeq'", role: '규칙 이름. ESLint가 정한 것이라 철자를 정확히 써야 한다' },
            { token: "['error', 'always']", role: '1번째는 심각도, 2번째는 옵션' },
            { token: "'error' / 'warn' / 'off'", role: '심각도 3단계. error만 npm run lint를 실패시킨다' },
          ],
          returns:
            '설정이라 값을 돌려주지 않는다. 저장하면 에디터에 물결선이 뜨고, npm run lint 실행 시 오류 목록이 출력된다.',
          desc: 'eslint.config.js 의 rules 블록.',
        },
      ],
    },
    tasks: [
      "'eqeqeq': ['error', 'always'] 규칙 설정",
      "'no-console': 'off' 로 console.log 허용",
      '컴포넌트에 의도적으로 if (userAge == 20) 작성',
      '에디터 물결선과 npm run lint 오류 확인',
      '확인 후 의도적 오류 제거',
    ],
    pitfalls: [
      {
        bad: '의도적으로 넣은 오류를 그대로 두고 제출',
        good: '확인 후 반드시 제거',
        why: '최종 과제 평가 항목이 "ESLint Error 0개"입니다. 실습용 오류를 남기면 감점됩니다.',
      },
      {
        bad: 'if (userAge == 20)',
        good: 'if (userAge === 20)',
        why: '==는 타입을 자동 변환해 "20" == 20 을 참으로 봅니다. 의도치 않은 곳에서 조건이 통과합니다.',
      },
      {
        bad: '에디터에 물결선이 안 보이는데 그냥 진행',
        good: 'VS Code ESLint 확장 설치 여부 확인',
        why: '설정 파일이 있어도 확장이 없으면 에디터에는 표시되지 않습니다. npm run lint로도 확인하세요.',
      },
      {
        why: 'ESLint는 코드의 "문제"를, Prettier는 코드의 "모양"을 다룹니다. 경쟁 도구가 아니라 둘 다 씁니다.',
      },
    ],
    extensions: [
      'no-unused-vars 규칙을 켜고 안 쓰는 변수를 만들어 경고를 확인해 보세요.',
      'npm run lint -- --fix 로 자동 수정되는 항목과 안 되는 항목을 구분해 보세요.',
      'vue/multi-word-component-names 규칙을 찾아보고 왜 컴포넌트 이름을 두 단어로 짓는지 이해해 보세요.',
      '특정 줄만 검사에서 제외하는 // eslint-disable-next-line 을 써 보세요.',
    ],
    practices: [],
    status: 'todo',
  },
  {
    id: 19,
    chapterId: 10,
    label: 'Code Challenge 19',
    title: 'Prettier',
    slidePage: '271쪽',
    studyRange: '259~262쪽',
    goal: '정렬이 어긋난 코드를 넣고 npm run format으로 자동 정리되는 것을 확인합니다.',
    lecture: {
      intro:
        'Prettier는 코드 정돈 로봇입니다. 들여쓰기가 삐뚤빼뚤하든 따옴표가 섞여 있든, 저장 한 번이면 정해진 모양으로 맞춰줍니다. 팀 전체가 같은 규칙을 쓰면 "누가 공백만 바꿨는지" 같은 무의미한 충돌이 사라집니다.',
      summary:
        'Prettier는 코드의 "모양"만 자동 정리합니다. 들여쓰기·따옴표·세미콜론을 통일해 팀 협업 시 diff 충돌을 줄입니다.',
      points: [
        '저장 시 자동 포맷(formatOnSave)을 켜 두면 편하다.',
        '불필요한 백틱은 일반 따옴표로 바뀐다.',
        'ESLint(문제 검사)와 Prettier(모양 정리)는 경쟁 도구가 아니다.',
      ],
      syntax: [
        {
          code: `const     myRegion   = \`Suwon\` ;
const regionGreeting = \`웰컴 투 \${myRegion}\`;

// npm run format 실행 후 정렬 확인`,
          parts: [
            { token: 'const     myRegion', role: '과도한 공백. Prettier가 한 칸으로 정리한다' },
            { token: '`Suwon`', role: '값이 안 들어가는 백틱. 일반 따옴표로 바뀐다' },
            { token: ' ;', role: '세미콜론 앞 공백. 제거된다' },
            { token: '`웰컴 투 ${myRegion}`', role: '${}가 있으므로 백틱이 유지된다' },
          ],
          returns:
            '명령이라 값을 돌려주지 않는다. npm run format은 파일 자체를 덮어써서 저장한다(되돌리려면 Git 사용).',
          desc: '일부러 어긋나게 쓰고 실행해 본다.',
        },
      ],
    },
    tasks: [
      '정렬이 어긋난 코드를 컴포넌트에 작성',
      'npm run format 실행',
      '공백·세미콜론 변화 확인',
      '백틱이 따옴표로 바뀌는지 확인',
    ],
    pitfalls: [
      {
        bad: 'ESLint와 Prettier 설정이 서로 충돌',
        good: '역할 분리 (ESLint=문제, Prettier=모양)',
        why: '따옴표·세미콜론 규칙을 양쪽에 중복으로 걸면 저장할 때마다 서로 되돌리는 현상이 생깁니다.',
      },
      {
        bad: 'npm run format 후 확인 없이 커밋',
        good: '변경된 파일을 훑어보고 커밋',
        why: '포맷팅이 전체 파일을 건드리면 diff가 커집니다. 실제 로직 변경이 묻히지 않게 따로 커밋하세요.',
      },
      {
        why: '값이 들어가지 않는 문자열에 백틱을 쓰면 Prettier가 일반 따옴표로 바꿉니다. ${}가 있을 때만 백틱을 쓰세요.',
      },
    ],
    extensions: [
      'VS Code에서 formatOnSave를 켜고 저장만으로 정렬되는지 확인해 보세요.',
      '.prettierrc에 printWidth나 singleQuote 옵션을 바꿔보고 결과 차이를 비교해 보세요.',
      '일부러 한 줄을 아주 길게 쓰고 Prettier가 어디서 줄바꿈하는지 관찰해 보세요.',
      '.prettierignore로 특정 폴더를 제외해 보세요.',
    ],
    practices: [],
    status: 'todo',
  },
  {
    id: 20,
    chapterId: 10,
    label: 'Code Challenge 20',
    title: '환경변수',
    slidePage: '272쪽',
    studyRange: '263~267쪽',
    goal: '모드별 .env 파일을 만들고 import.meta.env로 읽어옵니다.',
    lecture: {
      intro:
        '개발할 때 쓰는 주소와 실제 서비스 주소는 다릅니다. 코드를 매번 고치는 대신, 주소나 API 키를 .env 파일에 따로 빼두고 상황에 맞게 갈아 끼웁니다. API 키를 소스에 직접 적지 않는 것이 핵심이며, 이는 과제 평가 항목이기도 합니다.',
      summary:
        'Vite는 VITE_ 접두사가 붙은 환경변수만 클라이언트 코드에 노출합니다. --mode 옵션으로 어떤 .env를 쓸지 고릅니다.',
      points: [
        'VITE_ 접두사가 없으면 import.meta.env에서 읽히지 않는다.',
        '.env 파일은 반드시 .gitignore에 넣어 Git에 올리지 않는다.',
        '환경변수는 빌드 시점에 값이 박히므로, 진짜 비밀키는 프론트에 두면 안 된다.',
      ],
      syntax: [
        {
          code: `# .env.staging
VITE_API_URL=https://api-stage.skcc.com

// 사용
console.log(import.meta.env.VITE_API_URL)

// package.json
"build:staging": "vite build --mode staging"`,
          parts: [
            { token: '.env.staging', role: '파일 이름. 뒤의 staging이 --mode 값과 정확히 같아야 한다' },
            { token: 'VITE_', role: '접두사. 이게 없으면 클라이언트 코드에 노출되지 않는다' },
            { token: 'API_URL', role: '내가 정하는 이름. 대문자+언더스코어가 관례' },
            { token: 'import.meta.env', role: 'Vite가 제공하는 환경변수 객체. process.env가 아니다' },
            { token: '--mode staging', role: '어떤 .env 파일을 쓸지 고르는 옵션' },
          ],
          returns:
            'import.meta.env.VITE_API_URL은 문자열을 돌려준다. 없는 변수를 읽으면 undefined가 나온다. 값은 빌드 시점에 코드에 그대로 박히므로 브라우저에서 확인할 수 있다.',
          desc: '모드 이름과 파일 확장자가 일치해야 한다.',
        },
      ],
    },
    tasks: [
      '.env.staging 생성 후 VITE_API_URL 설정',
      '.env.production 생성 후 VITE_API_URL 설정',
      '컴포넌트에서 import.meta.env.VITE_API_URL 출력',
      'package.json에 build:staging 스크립트 추가',
      'npm run build:staging 실행 후 적용 환경 확인',
    ],
    pitfalls: [
      {
        bad: 'API_URL=https://...',
        good: 'VITE_API_URL=https://...',
        why: 'VITE_ 접두사가 없으면 import.meta.env에서 읽히지 않고 undefined가 나옵니다. Vite가 의도적으로 막는 것입니다.',
      },
      {
        bad: '.env 파일을 Git에 커밋',
        good: '.gitignore에 .env* 추가',
        why: 'API 키가 공개 저장소에 올라가면 남이 내 할당량을 쓰고 요금이 청구됩니다. 최종 과제 평가 항목이기도 합니다.',
      },
      {
        bad: '결제 키·DB 비밀번호를 VITE_ 변수에 저장',
        good: '진짜 비밀키는 백엔드에 두기',
        why: 'VITE_ 변수는 빌드 시 코드에 그대로 박혀서, 브라우저 개발자도구에서 누구나 볼 수 있습니다. "숨긴 것"이 아니라 "분리한 것"일 뿐입니다.',
      },
      {
        bad: '.env를 고치고 화면만 새로고침',
        good: '개발 서버를 껐다 다시 실행',
        why: '환경변수는 서버가 시작될 때 읽힙니다. HMR로는 반영되지 않습니다.',
      },
      {
        why: '파일 이름과 --mode 값이 정확히 일치해야 합니다. --mode staging 은 .env.staging 을 찾습니다.',
      },
    ],
    extensions: [
      '.env.development와 .env.production을 만들고, dev와 build에서 각각 다른 값이 나오는지 확인해 보세요.',
      'import.meta.env.MODE와 .DEV, .PROD 값을 화면에 출력해 보세요.',
      'OpenWeather API 키를 .env로 옮기고, 소스에서 키 문자열을 완전히 제거해 보세요.',
      '.env.example 파일을 만들어 "어떤 변수가 필요한지"만 공유하는 방식을 실험해 보세요.',
      '빌드된 dist/assets의 JS 파일을 열어 VITE_ 값이 그대로 박혀 있는지 직접 확인해 보세요.',
    ],
    practices: [],
    status: 'todo',
  },
  {
    id: 21,
    chapterId: 10,
    label: 'Code Challenge 21',
    title: 'Build',
    slidePage: '273쪽',
    studyRange: '268~269쪽',
    goal: 'npm run build로 배포용 정적 파일을 생성하고 결과물을 확인합니다.',
    lecture: {
      intro:
        '개발 중인 코드는 여러 파일로 흩어져 있고 브라우저가 바로 읽지 못하는 문법도 섞여 있습니다. 빌드는 이것을 하나로 묶고 압축해서 "어디에 올려도 열리는 파일 뭉치"로 포장하는 과정입니다. 이삿짐을 박스에 싸는 것과 같고, 결과물은 dist/ 폴더에 나옵니다.',
      summary:
        '빌드는 개발용 소스를 브라우저가 바로 읽을 수 있는 정적 파일로 포장하는 과정입니다. 결과물은 dist/에 생성됩니다.',
      points: [
        '파일명에 붙는 해시는 브라우저 캐시를 무효화하기 위한 것이다.',
        'dist/는 소스가 아니므로 .gitignore 대상이지만, GitHub Pages 배포 방식에 따라 예외를 둘 수 있다.',
        'npm run preview로 빌드 결과를 로컬에서 미리 확인할 수 있다.',
      ],
      syntax: [
        {
          code: `npm run build     # dist/ 생성
npm run preview   # 빌드 결과 확인`,
          parts: [
            { token: 'npm run', role: 'package.json의 scripts에 적힌 명령을 실행한다' },
            { token: 'build', role: 'scripts.build → vite build. 소스를 dist/로 포장한다' },
            { token: 'preview', role: 'scripts.preview → 만들어진 dist/를 로컬 서버로 띄워 확인' },
            { token: 'dist/', role: '빌드 결과 폴더. 매번 새로 만들어지므로 직접 수정하면 안 된다' },
          ],
          returns:
            '값 대신 파일이 생긴다. dist/index.html 하나와 dist/assets/ 안에 해시가 붙은 js·css 파일이 나온다. 해시는 코드가 바뀔 때마다 달라져 브라우저 캐시를 무효화한다.',
          desc: 'dist/assets/ 안의 해시 파일명을 확인한다.',
        },
      ],
    },
    tasks: [
      'npm run build 실행',
      '프로젝트 루트에 dist/ 폴더 생성 확인',
      'dist/assets/에 해시 포함 JS 파일 생성 확인',
    ],
    pitfalls: [
      {
        bad: 'dist/ 안의 파일을 직접 수정',
        good: 'src/를 고치고 다시 빌드',
        why: 'dist는 매번 새로 만들어지는 결과물입니다. 직접 고친 내용은 다음 빌드에서 전부 사라집니다.',
      },
      {
        bad: '빌드만 하고 확인 없이 배포',
        good: 'npm run preview로 결과를 먼저 확인',
        why: '개발 서버에서는 잘 되다가 빌드 후에만 깨지는 경우가 있습니다(경로 문제, 환경변수 누락 등).',
      },
      {
        bad: 'GitHub Pages에 올렸는데 흰 화면',
        good: "vite.config.js에 base: '/저장소이름/' 설정",
        why: 'GitHub Pages는 하위 경로로 서비스되어, base가 기본값(/)이면 JS·CSS 경로를 못 찾습니다.',
      },
      {
        bad: '빌드 전 ESLint 오류를 방치',
        good: 'npm run lint로 Error 0개 확인 후 빌드',
        why: '최종 과제 평가 기준이 ESLint Error 0개입니다. 빌드는 lint 오류가 있어도 통과할 수 있어 따로 확인해야 합니다.',
      },
    ],
    extensions: [
      'npm run preview를 실행해 빌드 결과를 로컬에서 확인해 보세요.',
      'dist/assets의 파일명에 붙은 해시가 코드를 고칠 때마다 바뀌는지 확인하고, 왜 필요한지 생각해 보세요.',
      '빌드 전후의 파일 크기를 비교해 보세요. gzip 크기가 왜 더 중요한지 찾아보세요.',
      'GitHub Pages나 Netlify에 실제로 배포하고 시크릿 창에서 열어 보세요.',
      'vite.config.js에서 build.sourcemap을 켜고 dist에 무엇이 추가되는지 확인해 보세요.',
    ],
    practices: [],
    status: 'todo',
  },
]

/* ------------------------------------------------------------------ */
/* 3. 제출 과제 — 하나의 날씨 프로젝트로 누적된다                        */
/* ------------------------------------------------------------------ */

export const assignments = [
  {
    id: 1,
    chapterId: 2,
    title: '날씨 Mockup',
    slidePage: '98쪽',
    scope: '2장 Vue 문법 전체 · 40~97쪽',
    goal: 'Vue 문법만으로 정적인 날씨 대시보드 화면을 만듭니다.',
    requirements: [
      'weatherList 반응형 배열 만들기',
      'v-for로 도시별 날씨 카드 반복 출력',
      ':key에 도시의 id 연결',
      'v-if로 25℃ 이상이면 🔥 더움, 미만이면 ❄️ 선선함 표시',
      '한글 도시 검색 입력창을 :value와 @input으로 처리',
      '카드 클릭 시 상태바에 "{도시}이 선택되었습니다." 표시',
      '상세보기 버튼은 버블링 없이 window.alert 실행',
    ],
    // src/components/assignments/ 의 컴포넌트 이름. 과제 카드에서 바로 실행해 볼 수 있다.
    result: 'WeatherMockup',
    resultNote: '원본 프로젝트: weather-mockup/src/App.vue',
    status: 'done',
  },
  {
    id: 2,
    chapterId: 3,
    title: '날씨 컴포지션',
    slidePage: '126쪽',
    scope: '3장 Composition API 전체 · 100~125쪽',
    goal: 'computed와 watch로 검색 필터링과 변화 감시를 붙입니다.',
    requirements: [
      'searchQuery · selectedCityInfo · weatherList를 반응형 상태로 정의',
      'computed()로 filteredWeatherList 만들기',
      'watch()로 selectedCityInfo 감시 후 콘솔 기록',
      'watchEffect()로 searchQuery 변화 콘솔 기록',
      '검색어가 비면 원본 목록 표시',
      '검색 결과가 있으면 필터링된 목록 표시',
      '결과가 없으면 안내 문구 표시',
    ],
    result: 'WeatherComposition',
    resultNote: '검색·카드 클릭 시 콘솔(F12)에 watch·watchEffect 로그가 찍힙니다',
    status: 'done',
  },
  {
    id: 3,
    chapterId: 4,
    title: '날씨 컴포넌트 분리',
    slidePage: '158쪽',
    scope: '4장 Vue Component 전체 · 128~157쪽',
    goal: '기능은 그대로 두고 화면을 재사용 가능한 컴포넌트로 쪼갭니다.',
    requirements: [
      'WeatherParent.vue — 모든 반응형 데이터 유지',
      'BaseDashboardCard.vue — 공통 디자인과 <slot> 제공',
      'SearchBar.vue — 검색어 Props 수신, update-query 이벤트 전달',
      'WeatherCard.vue — 도시 객체 Props, select-card·click-detail 이벤트 전달',
      '각 컴포넌트 디자인을 <style scoped>로 분리',
    ],
    result: 'WeatherParent',
    resultNote: 'Open-Meteo API 로 받은 오늘 날씨 · 하위 컴포넌트는 src/components/weather/ 에 있습니다',

    /* 결과물 아래에 붙는 컴포넌트 구조 · 이벤트 흐름 설명 */
    anatomy: {
      intro:
        '화면은 하나지만 파일은 9개입니다. 날씨는 Open-Meteo API에서 실제로 받아옵니다. 받아온 데이터는 전부 부모가 쥐고 있고, 자식들은 받아서 그리기만 합니다. 자식이 무언가 하고 싶으면 직접 바꾸지 않고 부모에게 "이런 일이 생겼다"고 알립니다.',
      tree: [
        {
          name: 'WeatherParent',
          file: 'WeatherParent',
          role: '데이터의 주인 (부모)',
          owner: true,
          state: ['weatherList', 'searchQuery', 'selectedRegion', 'viewMode', 'favorites', 'hereId', 'detailCityId', 'isLoading', 'errorMessage'],
          note: 'onMounted에서 API를 부르고, 받아온 목록과 로딩·에러 상태를 전부 여기서만 관리합니다. 자식은 상태를 하나도 갖고 있지 않습니다.',
          children: [
            {
              name: 'weatherApi.js',
              file: 'weather/weatherApi',
              role: '데이터를 가져오는 곳 (컴포넌트 아님)',
              props: [],
              emits: [],
              note: '화면을 그리지 않습니다. 좌표 목록을 들고 Open-Meteo에 요청을 보내고, WMO 숫자 코드를 한글 날씨로 바꿔 돌려주기만 합니다. 화면과 통신을 파일부터 갈라 두면 API가 바뀌어도 컴포넌트는 손대지 않아도 됩니다.',
            },
            {
              name: 'BaseDashboardCard',
              file: 'weather/BaseDashboardCard',
              role: '공통 껍데기',
              props: [],
              emits: [],
              note: '<slot> 하나만 있습니다. 안에 무엇이 들어오는지 모르고, 테두리와 여백만 책임집니다.',
            },
            {
              name: 'SearchBar',
              file: 'weather/SearchBar',
              role: '검색 입력',
              props: [{ name: 'current-query', as: 'currentQuery', type: 'String', desc: '지금 검색어가 무엇인지' }],
              emits: [{ name: 'update-query', payload: '입력한 문자열', desc: '사용자가 타이핑할 때마다' }],
              note: 'searchQuery를 직접 바꾸지 않습니다. 바꾸는 건 부모가 합니다.',
            },
            {
              name: 'RegionTabs',
              file: 'weather/RegionTabs',
              role: '지역 선택 탭',
              props: [
                { name: 'regions', as: 'regions', type: 'Array', desc: '고를 수 있는 권역 목록 (시·도 17개를 8권역으로 묶은 것)' },
                { name: 'current', as: 'current', type: 'String', desc: '지금 선택된 지역' },
                { name: 'counts', as: 'counts', type: 'Object', desc: '지역별 도시 개수' },
              ],
              emits: [{ name: 'select-region', payload: '누른 지역 이름', desc: '탭을 눌렀을 때' }],
              note: '어느 탭이 눌린 상태인지도 자기가 기억하지 않습니다. current를 받아서 색만 칠하고, 눌리면 알리기만 합니다.',
            },
            {
              name: 'WeatherCard',
              file: 'weather/WeatherCard',
              role: '도시 카드 (여러 개)',
              props: [
                { name: 'city-item', as: 'cityItem', type: 'Object', desc: '도시 하나의 정보 (이름 · 기온 · 습도 · 날씨)' },
                { name: 'favorite', as: 'favorite', type: 'Boolean', desc: '별표를 쳤는지' },
                { name: 'here', as: 'here', type: 'Boolean', desc: '현재 위치와 가장 가까운 곳인지' },
              ],
              emits: [
                { name: 'select-card', payload: '선택 안내 문구', desc: '카드를 클릭했을 때' },
                { name: 'click-detail', payload: '도시명 · 날씨상태', desc: '시간별 버튼을 눌렀을 때' },
                { name: 'toggle-favorite', payload: '도시 id', desc: '별표를 눌렀을 때' },
              ],
              note: 'v-for로 45장이 만들어집니다. 별표가 켜졌는지조차 자기가 모릅니다 — favorite을 받아서 색만 칠하고, 눌리면 id를 올려보낼 뿐입니다.',
            },
            {
              name: 'HourlyDetail',
              file: 'weather/HourlyDetail',
              role: '시간별 날씨 (날짜 선택)',
              props: [{ name: 'city', as: 'city', type: 'Object', desc: '펼쳐서 볼 도시' }],
              emits: [{ name: 'close', payload: '없음', desc: '✕ 를 눌렀을 때' }],
              note: '지금까지의 자식들과 달리 자기 데이터를 직접 불러옵니다. 하루치 24시간 값은 이 화면에서만 쓰기 때문입니다. 목록 전체를 시간별로 받으면 응답이 수십 배가 되므로, 필요한 곳에서 필요할 때만 부르는 편이 낫습니다.',
            },
            {
              name: 'WeatherByStatus',
              file: 'weather/WeatherByStatus',
              role: '날씨별 지역 현황',
              props: [
                { name: 'list', as: 'list', type: 'Array', desc: '검색까지 걸러진 도시 목록' },
                { name: 'favorites', as: 'favorites', type: 'Array', desc: '별표 친 도시 id 목록' },
                { name: 'here-id', as: 'hereId', type: 'String', desc: '현재 위치 도시 id' },
              ],
              emits: [
                { name: 'select-card', payload: '선택 안내 문구', desc: '칩을 클릭했을 때' },
                { name: 'toggle-favorite', payload: '도시 id', desc: '별표를 눌렀을 때' },
              ],
              note: 'WeatherCard와 완전히 같은 목록을 받지만 날씨 기준으로 묶어 보여줍니다. 데이터를 그대로 두고 화면만 갈아 끼운 예입니다.',
            },
            {
              name: 'WeatherIcon',
              file: 'weather/WeatherIcon',
              role: '날씨 아이콘',
              under: 'WeatherCard',
              props: [{ name: 'status', as: 'status', type: 'String', desc: "'맑음' · '비' · '구름' 같은 날씨 글자" }],
              emits: [],
              note: '받은 글자에 어떤 단어가 들어 있는지 보고 아이콘 18종 중 하나를 고릅니다. 데이터도 이벤트도 없는 가장 단순한 컴포넌트이며, 부모의 status가 WeatherCard를 거쳐 한 칸 더 내려간 예입니다.',
            },
          ],
        },
      ],
      /* 사용자의 한 번의 행동이 어떤 경로로 화면을 바꾸는지 */
      flows: [
        {
          title: '화면이 처음 열리면',
          steps: [
            { who: 'WeatherParent', dir: 'own', label: 'onMounted(load)', desc: '화면이 붙는 순간 딱 한 번 실행된다.' },
            { who: 'weatherApi.js', dir: 'own', label: 'axios.get(open-meteo)', desc: '전국 45개 지역 좌표를 한 번의 요청으로 보낸다. 컴포넌트가 아니라 별도 파일이 맡는다.' },
            { who: 'WeatherParent', dir: 'own', label: 'weatherList = 받아온 배열', desc: '실패하면 errorMessage에 담아 화면에 다시 시도 버튼을 띄운다.' },
            { who: 'WeatherCard', dir: 'down', label: ':city-item 으로 45장 생성', desc: 'v-for가 배열을 보고 카드를 만든다. 데이터가 오면 화면은 알아서 따라온다.' },
          ],
        },
        {
          title: '지역 탭 "대구/경북"을 누르면',
          steps: [
            { who: 'RegionTabs', dir: 'up', label: "emit('select-region', '대구/경북')", desc: '탭은 자기가 눌렸다는 사실만 알린다.' },
            { who: 'WeatherParent', dir: 'own', label: "selectedRegion = '대구/경북'", desc: '어느 탭이 선택됐는지는 부모가 기억한다.' },
            { who: 'RegionTabs', dir: 'down', label: ':current 로 다시 내려감', desc: '그 값이 되돌아와 탭 색이 칠해진다. 탭은 스스로 색을 바꾸지 않았다.' },
            { who: 'WeatherCard', dir: 'down', label: '대구·포항·경주 등만 남음', desc: 'computed가 지역과 검색어를 함께 걸러 낸다.' },
          ],
        },
        {
          title: '검색창에 "수"를 입력하면',
          steps: [
            { who: 'SearchBar', dir: 'up', label: "emit('update-query', '수')", desc: '자식이 부모에게 알린다. 자식은 여기까지만 한다.' },
            { who: 'WeatherParent', dir: 'own', label: "searchQuery = '수'", desc: '값을 실제로 바꾸는 건 주인인 부모다.' },
            { who: 'WeatherParent', dir: 'own', label: 'filteredWeatherList 재계산', desc: 'computed가 searchQuery에 의존하므로 자동으로 다시 계산된다.' },
            { who: 'WeatherCard', dir: 'down', label: ':city-item 으로 새 목록 전달', desc: '이름에 \'수\'가 든 수원·여수·서산 등만 남는다. 카드는 아무것도 안 했는데 화면이 바뀐다.' },
          ],
        },
        {
          title: '별표를 누르면',
          steps: [
            { who: 'WeatherCard', dir: 'up', label: "emit('toggle-favorite', 'suwon')", desc: '카드는 자기가 별표 상태인지도 모른다. 눌렸다는 사실만 올린다.' },
            { who: 'WeatherParent', dir: 'own', label: 'favorites 배열에 추가/제거', desc: '기억하는 것도, 바꾸는 것도 부모다.' },
            { who: 'WeatherParent', dir: 'own', label: 'watch → localStorage 저장', desc: '새로고침해도 별표가 남는 이유. 브라우저에 적어 둔다.' },
            { who: 'WeatherCard', dir: 'down', label: ':favorite 로 되돌아옴 + 위로 정렬', desc: '별이 노랗게 차고 카드가 위로 올라간다. 카드가 스스로 한 일은 없다.' },
          ],
        },
        {
          title: '도시 카드를 클릭하면',
          steps: [
            { who: 'WeatherCard', dir: 'up', label: "emit('select-card', '서울을 선택했습니다')", desc: '카드는 문구만 만들어 올려보낸다.' },
            { who: 'WeatherParent', dir: 'own', label: 'selectedCityInfo = 받은 문구', desc: '부모가 자기 상태에 받아 넣는다.' },
            { who: 'WeatherParent', dir: 'own', label: 'watch가 감지 → 콘솔 출력', desc: '개발자 도구 Console에서 👁️‍🗨️ 로그를 확인할 수 있다.' },
            { who: '상태 바', dir: 'down', label: '맨 아래 줄 문구 교체', desc: '카드가 상태 바를 직접 만진 적은 한 번도 없다.' },
          ],
        },
      ],
      point:
        '카드를 눌러 맨 아래 상태 바가 바뀌는 것을 보세요. **카드와 상태 바는 서로를 전혀 모릅니다.** 둘 다 부모만 알고 있고, 부모를 거쳐 연결됩니다. 이것이 형제끼리 직접 대화하지 않는다는 규칙입니다.',
    },
    status: 'done',
  },
  {
    id: 4,
    chapterId: 5,
    title: 'Router 활용',
    slidePage: '176~177쪽',
    scope: '5장 Vue Router · 160~175쪽',
    goal: '메인·About·동적 상세·404 페이지를 라우터로 연결합니다.',
    requirements: [
      '라우터에 Lazy Loading 적용',
      '정의되지 않은 주소를 처리하는 Catch-all Route 추가',
      'App.vue에 <RouterLink> 내비게이션과 <RouterView> 배치',
      'WeatherHomeView.vue를 / 경로의 메인 화면으로',
      "상세보기의 alert()를 router.push('/weather/' + id)로 교체",
      'WeatherDetailView.vue에서 cityId로 도시 정보 조회',
      '도시 정보는 컴포넌트 Mount 시점에 선택',
      'WeatherAboutView.vue에 서비스 설명과 메인 이동',
      'NotFoundView.vue에 잘못된 주소 안내와 메인 이동',
    ],
    result: 'WeatherStackedApp',
    resultNote:
      '실제 라우터로 동작합니다 — 위 메뉴를 누르면 주소가 바뀌고, 그 주소를 그대로 복사해 보낼 수 있습니다',
    status: 'done',
  },
  {
    id: 5,
    chapterId: 6,
    title: '날씨 단위 Store',
    slidePage: '191쪽',
    scope: '6장 Pinia 전체 · 179~190쪽',
    goal: '섭씨·화씨 전환 상태를 Pinia Store로 전역 관리합니다.',
    requirements: [
      "state: unit — 단위 저장, 초깃값 'celsius'",
      'getter: unitSymbol — ℃ 또는 ℉ 반환',
      'action: toggleUnit — celsius ↔ fahrenheit 전환',
      'UnitToggler.vue에 단위 변경 버튼 만들기',
      'Navigation Bar 옆에 UnitToggler.vue 배치',
      '메인과 상세 화면에 단위 변경 적용',
      '변환식: (섭씨 × 9) / 5 + 32',
    ],
    result: 'WeatherStackedApp',
    resultNote:
      '내비게이션 바 오른쪽의 ℃ 버튼을 눌러 보세요 — 목록과 상세 화면의 기온이 함께 바뀝니다. 버튼과 화면은 서로를 모르고, 같은 Store 만 보고 있습니다',
    status: 'done',
  },
  {
    id: 6,
    chapterId: 7,
    title: '날씨 데이터 연동',
    slidePage: '209쪽',
    scope: '7장 Axios 전체 · 193~208쪽',
    goal: 'Mock Data를 OpenWeather API의 실제 응답으로 교체합니다.',
    requirements: [
      'Axios 라이브러리 설치',
      'OpenWeatherMap 가입 및 API Key 발급',
      'API Key를 .env의 VITE_ 변수로 분리',
    ],
    result: 'WeatherStackedApp',
    resultNote:
      '5단계 앱 그대로인데 목록만 Mock 에서 실제 API 응답으로 바뀌었습니다. 카드 위 배지가 지금 어느 제공자에서 받아 왔는지 알려 줍니다',
    note: 'Axios 인스턴스와 인터셉터로 교체 완료 — components/weather/weatherApi.js. 날씨 제공자는 OpenWeatherMap 대신 Open-Meteo를 씁니다(키가 필요 없고 CORS가 열려 있어 브라우저에서 바로 호출됩니다). 그래서 API Key를 .env로 분리하는 항목은 해당 사항이 없습니다. 교안 209쪽은 제목이 "날씨 데이터 연동"이지만 본문 요구사항이 191쪽 UnitToggler 과제와 겹쳐, 연동 범위는 강사 안내를 확인하세요.',
    status: 'done',
  },
  {
    id: 7,
    chapterId: 8,
    title: 'Element Plus 적용',
    slidePage: '228쪽',
    scope: '8장 UI 라이브러리 전체 · 211~227쪽',
    goal: '완성된 날씨 화면에 Element Plus 컴포넌트를 입힙니다.',
    requirements: ['기존 날씨 과제에 Element Plus 컴포넌트를 자유롭게 적용'],
    result: 'WeatherStackedApp',
    resultNote:
      '6단계 앱에서 검색창·새로고침·로딩·알림만 Element Plus 부품으로 바뀌었습니다. 날씨 카드는 직접 만든 것을 그대로 뒀습니다',
    note: '최종 결과물의 "조작 요소"에 적용했습니다 — 검색창 el-input(clearable), 보기 전환 el-segmented, 내 위치·새로고침 el-button(loading·circle), 첫 로딩 el-skeleton, 새로고침·위치 실패 알림 ElMessage. 날씨 카드와 배경 연출은 직접 만든 것을 그대로 두었습니다. 라이브러리 기본 색은 :deep() 으로 이 사이트의 디자인 토큰에 맞췄습니다.',
    status: 'done',
  },
  {
    id: 8,
    chapterId: 9,
    title: '메뉴와 API 확장',
    slidePage: '250쪽',
    scope: '9장 Modern JavaScript 전체 및 7장 Axios',
    goal: '메뉴를 추가하고 활용할 API를 늘려 기존 과제를 확장합니다.',
    requirements: ['메뉴 추가', '활용할 API 추가'],
    result: 'WeatherStackedApp',
    resultNote:
      '7단계 앱에 운세 메뉴가 하나 더 붙었습니다. 내비게이션에 홈·소개·운세가 나란히 섭니다',
    note: '메뉴 추가 — 날씨 외에 "운세(타로 78장)" 메뉴를 새로 만들었습니다(/final/tarot). API 추가 — Open-Meteo 가 막혔을 때를 대비해 노르웨이 기상청(MET Norway) 을 두 번째 제공자로 붙였고, 시간별 예보(/forecast?hourly=…)까지 호출 종류를 늘렸습니다. 구체적인 메뉴 수와 API 종류는 교안에 지정되어 있지 않습니다.',
    status: 'done',
  },
  {
    id: 9,
    chapterId: 10,
    title: '최종 완성과 배포',
    slidePage: '274쪽',
    scope: '교안 전체 · 특히 10장 252~273쪽',
    goal: '오류를 제거하고 API 키를 보호한 뒤 정적 배포까지 마칩니다.',
    requirements: [
      'ESLint로 점검해 Error 0개 만들기',
      'API Key를 환경변수로 분리',
      '.gitignore로 API Key와 환경 파일 보호',
      'npm run build로 dist/ 생성',
      'GitHub Pages에 정적 파일 배포',
    ],
    result: 'DeployReport',
    resultNote:
      '이 단계만 화면이 아니라 상태가 결과물입니다. 지금 보고 있는 페이지가 어떤 모드로 빌드됐고 키가 번들에 들어갔는지를 import.meta.env 에서 그때그때 읽어 보여 줍니다',
    note: 'ESLint 는 이 과제를 하면서 처음 설치했습니다 — eslint.config.js(Vue 3 규칙 + Prettier 와 역할 분리)와 lint · lint:check · format 스크립트를 넣었고, 오류 6건을 고쳐 Error 0개로 만들었습니다. 그 과정에서 EventPractice 의 색상 버튼이 핸들러만 남고 화면에서 빠져 있던 것도 함께 찾아 되살렸습니다. 키는 import.meta.env.VITE_OPENWEATHER_API_KEY 로 분리하고 .env* 를 .gitignore 에 넣었으며, 값이 없는 견본인 .env.example 만 일부러 추적합니다. 배포 명령은 키를 비운 채 빌드한 뒤 404.html 복사와 .nojekyll 생성까지 함께 합니다.',
    status: 'done',
  },
]

/* ------------------------------------------------------------------ */
/* 4. 제출 조건 · 평가 기준 (교안 5~6쪽)                                 */
/* ------------------------------------------------------------------ */

export const submissionRules = [
  '본인 GitHub 계정에 Public 저장소를 만들어 제출',
  '저장소 주소 예시: https://github.com/본인계정/inwoo-vue',
  '선택·권장: Vercel · Netlify · GitHub Pages 배포 URL 제출',
  '시크릿 창(⌘+Shift+N)에서 로그인 없이 저장소가 열리는지 확인',
]

export const gradingScale = [
  { score: '91~100', grade: 'Excellent', criteria: '기본 요구사항 완전 충족 + 추가 실습' },
  { score: '81~90', grade: 'Good', criteria: '기본 요구사항 완전 충족 + 개인 실습 흔적' },
  { score: '71~80', grade: 'Fair', criteria: '최소 요구사항 부분 충족 + 올바른 Public 저장소 제출' },
  { score: '61~70', grade: 'Poor', criteria: '핵심 기능 다수 누락 또는 비공개 저장소로 채점 불가' },
]

export const finalChecklist = [
  { title: '개발 서버 실행', detail: 'npm run dev로 Vue 앱이 정상 실행된다' },
  { title: '핵심 기능', detail: '날씨 검색, 선택, 상세보기가 동작한다' },
  { title: '컴포넌트 분리', detail: '컴포넌트가 역할별로 분리되어 있다' },
  { title: 'Router', detail: '메인 · About · 동적 상세 · Not Found가 동작한다' },
  { title: 'Pinia', detail: '섭씨·화씨 전환이 메인과 상세 화면에 반영된다' },
  { title: 'Axios', detail: '실제 API 연동 범위를 강사에게 확인했다' },
  { title: 'Element Plus', detail: '기존 화면에 UI 컴포넌트가 적용되어 있다' },
  { title: 'ESLint', detail: 'Error가 0개다' },
  { title: 'Prettier', detail: 'npm run format 포맷팅을 완료했다' },
  { title: 'API Key 보호', detail: '소스와 Git 기록에 키가 노출되지 않는다' },
  { title: 'Build', detail: 'npm run build가 성공하고 dist/가 생성된다' },
  { title: '저장소 공개', detail: 'GitHub 저장소가 Public이다' },
  { title: '시크릿 창 확인', detail: '로그인 없이 저장소를 열 수 있다' },
  { title: '배포 URL', detail: '가능하면 배포 URL도 제출한다' },
]

/* ------------------------------------------------------------------ */
/* 5. 파생 데이터 — 화면에서 바로 쓰는 헬퍼                              */
/* ------------------------------------------------------------------ */

/** 챕터 id로 해당 챕터의 챌린지 목록을 얻는다. */
export const challengesOf = (chapterId) => challenges.filter((c) => c.chapterId === chapterId)

/** 챕터 id로 해당 챕터의 과제 목록을 얻는다. */
export const assignmentsOf = (chapterId) => assignments.filter((a) => a.chapterId === chapterId)

/** 실습 컴포넌트가 하나라도 연결된 챌린지 수 */
export const liveChallengeCount = challenges.filter((c) => c.practices.length > 0).length

/**
 * 코드 챌린지 총 개수 (준비 실습 제외)
 *
 * kind: 'reading' 카드는 손으로 만들 것이 없는 읽기 자료라 여기서 뺀다.
 * 홈 화면의 "N개 코드 챌린지" 가 실제로 손을 움직이는 것의 수여야 하기 때문이다.
 */
export const codeChallengeCount = challenges.filter(
  (c) => c.kind !== 'reading' && c.id > 0,
).length

/** 완료한 과제 수 */
export const doneAssignmentCount = assignments.filter((a) => a.status === 'done').length
