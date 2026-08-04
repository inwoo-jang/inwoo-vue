/**
 * 단계별 결과물이 "쌓이는" 규칙을 여기 한 곳에 적어 둔다.
 * ------------------------------------------------------------------
 * 이 사이트의 /project 는 과제를 하나씩 쌓아 올린 앱을 단계별로 보여 준다.
 * 그래서 각 단계는 "그 단계에서 새로 배운 것"만 더해진 이전 단계여야 한다.
 *
 *   4단계  라우터로 도는 앱 (홈 · 소개 · 상세 · 없는 주소)
 *   5단계  + 섭씨/화씨 토글            (Pinia)
 *   6단계  + Mock 대신 실제 API        (Axios)
 *   7단계  + 조작 요소를 Element Plus 로
 *   8단계  + 운세 메뉴와 늘어난 API
 *
 * 단계마다 앱을 통째로 복사하면 같은 코드가 다섯 벌이 된다.
 * 그래서 "몇 단계부터 켜지는가"만 여기서 정하고, 화면은 이 값을 보고 그린다.
 * 코드를 읽는 사람은 이 표 하나로 무엇이 언제 늘어났는지 알 수 있다.
 */
export const STAGE_STEPS = [
  { from: 5, key: 'unitToggle', label: '섭씨/화씨 토글', chapter: 'CH06 Pinia' },
  { from: 6, key: 'liveApi', label: '실제 날씨 API', chapter: 'CH07 Axios' },
  { from: 7, key: 'elementPlus', label: 'Element Plus 조작 요소', chapter: 'CH08 UI 라이브러리' },
  { from: 8, key: 'fortune', label: '운세 메뉴 · API 확장', chapter: 'CH09 Modern JS' },
]

/** 주소의 :stageId 를 숫자로. 없으면 라우터 과제가 시작된 4단계로 본다. */
export const stageNumber = (stageId) => {
  const parsed = Number(stageId)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 4
}

/**
 * 이 단계에서 켜져 있는 기능들.
 *   featuresOf(6) → { unitToggle: true, liveApi: true, elementPlus: false, fortune: false }
 */
export const featuresOf = (stageId) => {
  const stage = stageNumber(stageId)
  return Object.fromEntries(STAGE_STEPS.map((step) => [step.key, stage >= step.from]))
}

/** 이 단계에서 "새로" 켜진 것 (단계 머리에 '이번에 추가된 것'으로 보여 준다) */
export const addedAt = (stageId) => {
  const stage = stageNumber(stageId)
  return STAGE_STEPS.find((step) => step.from === stage) ?? null
}
