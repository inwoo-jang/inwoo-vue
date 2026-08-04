/**
 * 과제 결과물 자동 등록소(Registry)
 * ------------------------------------------------------------------
 * 이 폴더에 `.vue` 파일을 추가하면 자동으로 등록된다.
 * practices/index.js와 같은 방식이다.
 *
 *   1) src/components/assignments/WeatherComposition.vue 파일 생성
 *   2) src/data/curriculum.js 의 해당 과제에 result: 'WeatherComposition' 추가
 *
 * 주의: 다른 프로젝트의 App.vue를 가져올 때는 전역 <style>을
 *       <style scoped>로 바꾸고 body / * 리셋을 제거해야 한다.
 *       그러지 않으면 이 사이트 전체 디자인이 깨진다.
 */

// 하위 폴더(weather/, router4/)의 결과물도 함께 등록한다
const modules = import.meta.glob('./**/*.vue', { eager: true })

/** { WeatherMockup: 컴포넌트, ... } */
export const assignmentComponents = Object.fromEntries(
  Object.entries(modules).map(([path, module]) => {
    // 폴더가 달라도 파일 이름으로 찾을 수 있게 한다
    const name = path.split('/').pop().replace('.vue', '')
    return [name, module.default]
  }),
)

/** 등록된 결과물 컴포넌트 이름 목록 */
export const assignmentResultNames = Object.keys(assignmentComponents).sort()

/** 이름으로 컴포넌트를 찾는다. 없으면 null. */
export const findAssignmentResult = (name) => assignmentComponents[name] ?? null

/* ------------------------------------------------------------------
 * 소스 코드 — 하위 폴더(weather/ 등)까지 함께 읽는다.
 * 최종 결과물에서 "이 컴포넌트 코드 보기"를 눌렀을 때 쓴다.
 * ------------------------------------------------------------------ */

/** 최상위 + 하위 폴더의 모든 .vue · .js 원문 (해부도의 "코드 보기"에서 쓴다) */
const sources = import.meta.glob(['./**/*.vue', './**/*.js'], {
  eager: true,
  query: '?raw',
  import: 'default',
})

/** { 'WeatherParent': '<script setup>...', 'weather/SearchBar': '...' } */
const assignmentSources = Object.fromEntries(
  Object.entries(sources).map(([path, code]) => [
    path.replace('./', '').replace(/\.(vue|js)$/, ''),
    code,
  ]),
)

/** { 'WeatherParent': 'src/components/assignments/WeatherParent.vue', ... } */
const assignmentPaths = Object.fromEntries(
  Object.keys(sources).map((path) => [
    path.replace('./', '').replace(/\.(vue|js)$/, ''),
    path.replace('./', 'src/components/assignments/'),
  ]),
)

/**
 * 이름으로 원본 코드를 찾는다.
 * 폴더를 생략해도 파일명만으로 찾을 수 있게 뒷부분 일치도 허용한다.
 *   findAssignmentSource('SearchBar') === findAssignmentSource('weather/SearchBar')
 */
const resolveKey = (name) =>
  assignmentSources[name] !== undefined
    ? name
    : Object.keys(assignmentSources).find((key) => key.endsWith(`/${name}`))

export const findAssignmentSource = (name) => assignmentSources[resolveKey(name)] ?? ''
export const findAssignmentPath = (name) => assignmentPaths[resolveKey(name)] ?? ''
