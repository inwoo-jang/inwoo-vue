/**
 * 실습 컴포넌트 자동 등록소(Registry)
 * ------------------------------------------------------------------
 * 교안 챕터별로 폴더를 나눠 둔다. (skala-vue 작업 폴더와 같은 구조)
 *
 *   practices/
 *   ├── basic/        2장 Vue 문법
 *   ├── composition/  3장 Composition API
 *   ├── component/    4장 Vue Component
 *   └── library/      6~9장 Pinia · Axios · Element Plus · Modern JS
 *
 * 규칙은 두 가지뿐이다.
 *   1) 챕터 폴더 안에 `~Practice.vue` 이름으로 만들면 자동 등록된다.
 *   2) curriculum.js 의 practices 배열에 파일명(확장자·폴더 제외)만 적는다.
 *
 * 자식 컴포넌트(LifecycleChild.vue 처럼 Practice로 끝나지 않는 파일)는
 * 같은 폴더에 나란히 둬도 실습 목록에 잡히지 않는다.
 */

const modules = import.meta.glob('./*/*Practice.vue', { eager: true })

/** 파일 경로에서 등록 이름만 뽑는다: './composition/RefStatePractice.vue' → 'RefStatePractice' */
const nameOf = (path) => path.split('/').pop().replace('.vue', '')

/** { ReactivityPractice: 컴포넌트, ... } */
export const practiceComponents = Object.fromEntries(
  Object.entries(modules).map(([path, module]) => [nameOf(path), module.default]),
)

/** { ReactivityPractice: 'src/components/practices/basic/ReactivityPractice.vue', ... } */
export const practicePaths = Object.fromEntries(
  Object.entries(modules).map(([path]) => [
    nameOf(path),
    path.replace('./', 'src/components/practices/'),
  ]),
)

/** 등록된 실습 컴포넌트 이름 목록 */
export const practiceNames = Object.keys(practiceComponents).sort()

/** 이름으로 컴포넌트를 찾는다. 없으면 null. */
export const findPractice = (name) => practiceComponents[name] ?? null

/** 이름으로 파일 경로를 찾는다. 코드 창 제목에 쓴다. */
export const findPracticePath = (name) => practicePaths[name] ?? ''

/**
 * 같은 파일들을 "원본 텍스트"로도 한 번 더 읽어둔다.
 * ?raw 쿼리를 붙이면 Vite가 컴파일하지 않고 파일 내용을 문자열로 준다.
 */
const sources = import.meta.glob('./*/*Practice.vue', {
  eager: true,
  query: '?raw',
  import: 'default',
})

/** { ReactivityPractice: '<script setup>...', ... } */
export const practiceSources = Object.fromEntries(
  Object.entries(sources).map(([path, code]) => [nameOf(path), code]),
)

/** 이름으로 원본 코드를 찾는다. 없으면 빈 문자열. */
export const findPracticeSource = (name) => practiceSources[name] ?? ''
