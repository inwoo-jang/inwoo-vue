# 실습 · 과제 이어붙이기 가이드

이 프로젝트는 **`src/data/curriculum.js` 하나만 고치면 모든 화면이 따라 바뀌도록** 만들어져 있습니다.
새로운 실습이나 과제를 붙일 때 View 파일(`src/views/*.vue`)은 건드리지 않습니다.

---

## 전체 구조

```text
src/
├── data/
│   └── curriculum.js          ← 모든 내용의 단일 소스 (여기만 고치면 됨)
├── components/
│   ├── ConceptHelp.vue        ← 물음표 버튼 (개념 툴팁)
│   ├── ui/                    ← 화면 뼈대 (건드릴 일 거의 없음)
│   │   ├── ChallengeCard.vue      챌린지 카드 (강의내용 + 연습항목 + 실습)
│   │   ├── LectureBrief.vue       "관련 강의 내용" 접이식 패널
│   │   └── CodeSnippet.vue        코드 블록
│   └── practices/             ← 실습 컴포넌트 (교안 챕터별 폴더)
│       ├── index.js               자동 등록소 (수정 불필요)
│       ├── basic/                 2장 Vue 문법
│       ├── composition/           3장 Composition API
│       ├── component/             4장 Vue Component
│       └── library/               6~9장 Pinia · Axios · Element Plus · Modern JS
└── views/                     ← 페이지 (건드릴 일 거의 없음)
```

데이터가 화면으로 흘러가는 경로:

```text
curriculum.js
    └── challenges[]  ──→ LearningView ──→ ChallengeCard
                                              ├── LectureBrief   (lecture)
                                              ├── 연습 항목       (tasks)
                                              └── 실습 컴포넌트   (practices)
    └── assignments[] ──→ AssignmentsView
    └── finalChecklist ─→ SubmissionCheckView
```

---

## 1. 새 실습 붙이기 (2단계)

### ① 실습 컴포넌트 파일 만들기

**해당 챕터 폴더 안에** `~Practice.vue` 이름으로 만듭니다.
이 규칙만 지키면 `index.js`가 자동으로 등록합니다. import 문을 쓸 필요가 없습니다.

| 교안 챕터 | 넣을 폴더 |
|---|---|
| 2장 Vue 문법 | `practices/basic/` |
| 3장 Composition API | `practices/composition/` |
| 4장 Vue Component | `practices/component/` |
| 6~9장 Pinia · Axios · Element Plus · Modern JS | `practices/library/` |

> 이 구조는 실제 과제 작업 폴더(`skala-workspace/skala-vue`)와 같습니다.
> 그쪽에서 만든 실습을 그대로 복사해 넣기 좋게 맞춰 두었습니다.

```vue
<!-- src/components/practices/library/RouterPractice.vue -->
<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const current = ref('/home')
</script>

<template>
  <!-- 바깥은 반드시 .practice-card 로 감싼다 (공통 스타일이 적용됨) -->
  <section class="practice-card">
    <h2>
      실습 9 — RouterLink 동작 확인
      <ConceptHelp text="RouterLink는 페이지를 새로고침하지 않고 주소만 바꿉니다." />
    </h2>

    <p>현재 경로: {{ current }}</p>
    <button @click="current = '/home'">홈</button>
    <button @click="current = '/about'">소개</button>
  </section>
</template>
```

**스타일 규칙**

| 클래스 | 용도 |
|---|---|
| `.practice-card` | 실습 하나를 감싸는 최상위 `<section>` — 카드 테두리·배경이 자동 적용 |
| `.practice-area` | 한 카드 안에서 주제를 여러 개로 나눌 때 사용 — 사이에 구분선이 생김 |

`button`, `input`, `select` 등은 공통 스타일이 자동으로 입혀지므로 따로 CSS를 쓰지 않아도 됩니다.
특별한 디자인이 필요할 때만 `<style scoped>`를 추가하세요.

### ② curriculum.js에서 챌린지에 연결

```js
{
  id: 22,
  chapterId: 5,
  label: 'Code Challenge 22',
  title: 'Router 기본',
  slidePage: '176쪽',
  studyRange: '160~175쪽',
  goal: 'RouterLink와 RouterView로 페이지를 전환합니다.',
  lecture: { summary: '...', points: ['...'], syntax: [{ code: '...', desc: '...' }] },
  tasks: ['라우터 설치', '경로 정의'],
  practices: ['RouterPractice'],   // ← 파일명(확장자 제외)을 그대로
  status: 'todo',
},
```

저장하면 HMR로 즉시 화면에 나타납니다.

> 실습을 여러 개 연결하려면 배열에 이어 쓰면 됩니다.
> 예: `practices: ['HtmlTextPractice', 'BindPractice', 'ForPractice']`
>
> 이름을 잘못 쓰면 카드에 `⚠ 파일을 찾지 못한 실습: ...` 안내가 뜨므로 오타를 바로 알 수 있습니다.

---

## 2. 실습이 없는 챌린지

두 가지 경우를 구분합니다.

### ① 나중에 실습을 붙일 예정

`practices: []` 로 두면 파란 실습 패널에 "실습 준비 중" 안내가 뜹니다.
나중에 컴포넌트를 만들어 이름만 넣으면 바로 연결됩니다.

### ② 애초에 조작할 화면이 없는 단계

개발환경 설치처럼 **실습 화면이 존재할 수 없는 단계**는 `practiceNote`를 씁니다.
파란 실습 패널 대신 회색 한 줄 안내가 표시됩니다.

```js
practices: [],
practiceNote: '이 단계는 설치와 프로젝트 생성으로 끝납니다. 조작할 실습 화면은 없습니다.',
```

> `practices`에 항목이 하나라도 있으면 `practiceNote`는 무시되고 실습이 표시됩니다.

---

## 3. 새 과제 추가하기

`curriculum.js`의 `assignments` 배열에 항목을 추가합니다.

```js
{
  id: 10,
  chapterId: 10,          // 이 챕터의 학습 화면 하단에 자동으로 링크됨
  title: '성능 최적화',
  slidePage: '275쪽',
  scope: '10장 전체',
  goal: '번들 크기를 줄이고 로딩 속도를 개선합니다.',
  requirements: [
    '라우터 Lazy Loading 적용',
    '이미지 최적화',
  ],
  note: '선택 과제입니다.',   // 선택 — 있으면 주황색 안내 박스로 표시
  status: 'todo',            // 'done' | 'todo' | 'final'
},
```

추가하면 아래가 **자동으로** 반영됩니다.

- 제출 과제 페이지의 타임라인과 진행률
- 홈 화면의 `n / m` 진행률과 통계
- 해당 챕터 학습 화면 하단의 "이 챕터의 제출 과제" 링크

---

## 4. 필드 레퍼런스

### chapters

| 필드 | 설명 |
|---|---|
| `id` | 챕터 번호. `challenges`·`assignments`의 `chapterId`와 연결 |
| `code` | 화면에 표시할 코드 (예: `CH05`) |
| `title` / `subtitle` | 제목과 부제 |
| `slides` | 교안 페이지 범위 (예: `160~177쪽`) |
| `summary` | 챕터 한 줄 소개 |
| `topics` | 상단 키워드 칩 배열 |
| `orientation` | **(선택) 챕터 길잡이.** 문법이 여러 개라 예외처럼 보이는 챕터에만 넣는다. 챌린지 목록 위에 **기본 펼침**으로 표시 |

#### `orientation` — 챕터를 시작하기 전에 읽는 지도

문법 개수가 많아 "예외가 많다"고 느껴지는 챕터에서, **관통하는 규칙이 하나뿐임**을 먼저 잡아 주는 자리다.
현재 CH04(Vue Component)에만 있다. 다른 챕터도 필요하면 같은 형태로 추가하면 자동 표시된다.

```js
orientation: {
  rule: '데이터는 위에서 아래로만 흐른다.',   // 가장 큰 글자 한 줄
  lead: '...',                                 // 왜 이 규칙 하나로 충분한지
  cargo: [                                     // 같은 파이프의 다른 화물
    { name: 'props', payload: '값 (문자열 · 숫자 · 객체)', dir: '아래로' },
    { name: 'emit',  payload: '신호 (값이 아님)',          dir: '위로' },
  ],
  why: '...',                                  // 왜 이렇게 불편하게 만드는지 (**강조** 가능)
  priority: [                                  // 다 똑같이 중요하지 않다는 것을 분명히
    { name: 'props + emit', weight: '90%', when: '거의 항상', level: 'core' },
    { name: 'scoped slot',  weight: '드묾', when: '남이 쓸 컴포넌트를 만들 때', level: 'low' },
  ],
  keep: '...',                                 // 마지막에 남길 한 문장 (**강조** 가능)
}
```

- `dir`이 `'위로'`면 주황(↑), 그 외는 초록(↓)으로 표시된다.
- `level`: `'core'`(강조 배경) · `'mid'`(보통) · `'low'`(흐리게).
- `why` / `keep`은 `**형광펜**`과 `` `코드` `` 표기를 쓸 수 있다.

### challenges

| 필드 | 설명 |
|---|---|
| `id` | 고유 번호. 앵커(`#challenge-3`)로도 쓰임 |
| `chapterId` | 소속 챕터 |
| `label` | 카드 상단 라벨 (예: `Code Challenge 03`) |
| `title` / `goal` | 제목과 목표 한 줄 |
| `slidePage` | 문제가 나온 교안 쪽수 |
| `studyRange` | 풀기 전에 볼 학습 범위 |
| `lecture.intro` | **초보자용 도입부.** 비유로 개념을 먼저 잡아주는 한 문단. 초록 "쉽게 말하면" 블록으로 표시 |
| `lecture.summary` | 관련 강의 내용 요약 문단 |
| `lecture.points` | 핵심 포인트 목록 |
| `lecture.syntax` | `{ code, desc, parts, returns }` 배열 — 문법 코드 블록 |
| `tasks` | 연습 항목 체크리스트 (✓ 불릿, 클릭 불가) |
| `pitfalls` | **조심할 점.** `{ bad, good, why }` 배열. 주황색 접이식 |
| `practiceGuide` | **실습 확인 가이드.** `{ practice, do, see, why }` 배열. 실습 옆 고정 사이드바로 표시. `do`/`see`/`why` 모두 `**형광펜**`·`` `코드` `` 표기 가능 |
| `practices` | 연결할 실습 컴포넌트 이름 배열 |
| `practiceNote` | 실습이 존재할 수 없는 단계의 안내 문구 (위 2-② 참고) |
| `extensions` | **심화 응용 제안.** 문자열 배열. 해당 실습 가이드 그룹 아래에 접이식으로 표시 |
| `status` | `'done'` \| `'todo'` — 카드 우측 배지에 표시 |

### 문법 블록 — `lecture.syntax[]`

코드만 보여주지 말고 **각 조각이 무슨 역할인지**와 **무엇을 돌려주는지**까지 적습니다.
초보자가 "어디까지가 내가 정한 이름이고 어디부터가 Vue 문법인지" 구분하지 못하는 것을 막기 위함입니다.

```js
{
  code: `const double = computed(() => count.value * 2)`,
  parts: [
    { token: 'const double',  role: '내가 정하는 이름(식별자). 계산 결과를 담을 변수' },
    { token: 'computed(...)', role: "Vue 내장 함수. 'vue'에서 import 해야 쓸 수 있다" },
    { token: 'count.value',   role: '의존성. 이 값이 바뀔 때만 다시 계산된다' },
  ],
  returns: 'ref 객체를 돌려준다. script에서는 double.value, template에서는 {{ double }}로 읽는다.',
  desc: '화살표 함수에 중괄호가 없으면 그 식의 결과가 곧 return 값이다.',
}
```

- `token`은 **코드에 실제로 등장하는 문자열 그대로** 씁니다 (화면에서 코드와 대조하며 읽음)
- `role`은 `내가 정하는 이름(식별자)` / `Vue 내장 함수` / `N번째 인자` 를 명확히 구분합니다
- `returns`는 돌려주는 값이 없으면 "값을 돌려주지 않는다"고 명시합니다
- `parts` · `returns`는 선택 항목입니다. 없으면 코드와 `desc`만 표시됩니다

### 조심할 점 — `pitfalls[]`

```js
pitfalls: [
  {
    bad:  '@click="handleClick()"',
    good: '@click="handleClick"',
    why:  '괄호를 붙이면 렌더링 시점에 즉시 실행됩니다.',
  },
  { why: '코드 대조가 필요 없으면 why만 써도 됩니다.' },
]
```

### 실습 확인 가이드 — `practiceGuide[]`

실습 화면 **오른쪽에 스크롤을 따라오는 사이드바**로 표시됩니다.
콘솔을 보면서 단계를 따라갈 수 있도록 만든 구조라, 순서대로 조작 흐름을 적습니다.

```js
practiceGuide: [
  {
    do:  '"dummy 증가"를 3번 눌러 보세요.',        // 무엇을 조작할지
    see: '콘솔에 일반 함수 로그만 3번 찍힙니다.',   // 무엇이 보여야 하는지
    why: 'dummy는 computed의 의존성이 아니라서…',   // 왜 그런지 (선택)
  },
]
```

- `practices`가 비어 있으면 표시되지 않습니다 (조작할 화면이 없으므로)
- 화면 너비 1100px 미만에서는 사이드바가 실습 위쪽으로 자동 이동합니다

> **접힘 규칙**: 강의 내용 · 조심할 점 · 심화 응용은 **모두 접힌 상태가 기본**입니다.
> 확인 가이드만 사이드바라서 펼친 상태로 시작합니다.

### assignments

| 필드 | 설명 |
|---|---|
| `id` | 과제 번호 (타임라인의 원 안 숫자) |
| `chapterId` | 소속 챕터 |
| `title` / `goal` | 제목과 목표 |
| `slidePage` / `scope` | 교안 쪽수와 적용 범위 |
| `requirements` | 요구사항 체크리스트 |
| `note` | 선택 — 주의사항 안내 박스 |
| `result` | 완성한 결과물 컴포넌트 이름. "결과물 보기"로 바로 실행된다 |
| `resultNote` | 선택 — 원본 프로젝트 경로 등 부가 설명 |
| `status` | `'done'` \| `'todo'` \| `'final'` |

### 과제 결과물 붙이기

완성한 과제를 과제 카드에서 **바로 실행해 볼 수 있게** 붙일 수 있습니다.
실습과 같은 자동 등록 방식입니다.

1. `src/components/assignments/` 에 `.vue` 파일을 만든다 (자동 등록)
2. `curriculum.js` 의 해당 과제에 `result: '파일명'` 을 넣는다

```js
{
  id: 2,
  title: '날씨 컴포지션',
  result: 'WeatherComposition',
  resultNote: '원본 프로젝트: weather-composition/src/App.vue',
}
```

### 과제 4부터 — 컴포넌트가 여러 개일 때

과제 3처럼 **파일이 여러 개로 쪼개진 결과물**은 하위 컴포넌트를 한 단계 아래 폴더에 넣습니다.

```text
src/components/assignments/
├── WeatherParent.vue        ← 결과물로 등록되는 진입점 (이것만 최상위)
└── weather/                 ← 하위 컴포넌트는 여기에
    ├── BaseDashboardCard.vue
    ├── SearchBar.vue
    └── WeatherCard.vue
```

**최상위에 두면 안 되는 이유**: 등록소가 `assignments/*.vue`를 훑기 때문에,
`SearchBar.vue`까지 독립된 결과물로 잡혀 "결과물 보기" 목록이 지저분해집니다.

과제 4(Router)처럼 새 단계를 붙일 때는:

1. 진입점을 `assignments/` 최상위에, 나머지는 하위 폴더에 넣는다
2. `curriculum.js` 의 그 과제에 `result: '진입점파일명'` 과 `status: 'done'` 을 적는다
3. 끝. **제출 과제**의 "결과물 보기"와 **최종 결과물**의 단계 탭에 자동으로 나타난다

> 라우터가 들어가는 과제 4부터는 `createRouter`를 그대로 쓰면 이 사이트의 주소(`#/learning` 등)와
> 충돌합니다. 결과물 안에서만 화면을 바꾸려면 `ref`로 현재 화면 이름을 들고
> `<component :is>` 로 전환하는 방식이 안전합니다.

---

> ⚠️ **다른 프로젝트의 `App.vue`를 가져올 때 반드시 확인할 것**
>
> 대부분의 `App.vue`는 전역 `<style>`에 `body`, `*`, `button`, `input` 리셋을 갖고 있습니다.
> 그대로 붙이면 **이 사이트 전체 디자인이 깨집니다.** 아래 두 가지를 꼭 처리하세요.
>
> - `<style>` → `<style scoped>`
> - `body { ... }`, `* { ... }` 같은 전역 리셋 제거, 태그 선택자(`button`)는 클래스로 한정(`.weather-card button`)
>
> 현재 등록된 `WeatherMockup.vue`가 이 변환의 예시입니다.

---

## 5. 자주 하는 실수

| 증상 | 원인 |
|---|---|
| 실습이 화면에 안 나옴 | 파일명이 `~Practice.vue`로 끝나지 않음 |
| 실습이 화면에 안 나옴 | 챕터 폴더 안이 아니라 `practices/` 바로 아래에 둠 |
| `ConceptHelp를 찾을 수 없음` | import 경로가 `'../ConceptHelp.vue'` (한 단계 더 올라가야 함 → `'../../ConceptHelp.vue'`) |
| `⚠ 파일을 찾지 못한 실습` | `practices` 배열의 이름과 파일명이 다름 (대소문자 포함) |
| 실습 카드에 테두리가 없음 | 최상위 요소에 `.practice-card` 클래스가 없음 |
| 진행률이 안 바뀜 | `status` 값을 `'done'`으로 바꾸지 않음 |

---

## 6. 실습에 딸린 자식 컴포넌트

`LifecycleChild.vue`처럼 실습 하나에만 쓰이는 자식은 **같은 챕터 폴더에 나란히** 둡니다.
등록소는 `~Practice.vue`로 끝나는 파일만 훑기 때문에 실습 목록에는 잡히지 않습니다.

```text
practices/component/
├── LifecyclePractice.vue      ← 실습으로 등록됨
├── LifecycleChild.vue         ← 등록 안 됨 (자식)
├── ComponentRegistrationPractice.vue
└── BaseButton.vue             ← 등록 안 됨 (자식)
```
