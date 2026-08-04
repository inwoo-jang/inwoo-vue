# inwoo-vue — Vue Learning Lab

SKALA Full-stack Engineering · Frontend Framework (Vue.js) 과정의 **학습 · 실습 · 제출 과제 통합 사이트**입니다.
교안(`Full-stack Engineering_3.Frontend-framework_Vue.js_강병호_0729.pdf`, 276쪽)의 코드 챌린지와 과제를
한 화면에서 학습하고 바로 실행해 볼 수 있게 구성했습니다.

## 화면 구성

| 경로 | 화면 | 내용 |
|---|---|---|
| `#/` | 홈 | 커리큘럼 개요와 진행률 |
| `#/learning` | 학습 & 챌린지 | 챕터별 코드 챌린지 — **관련 강의 내용 → 연습 항목 → 실습 화면** |
| `#/assignments` | 제출 과제 | 날씨 프로젝트로 누적되는 단계별 과제와 요구사항 |
| `#/project` | 단계별 결과물 | 과제가 한 겹씩 쌓이는 과정 — 단계를 골라 그때의 앱을 그대로 실행 |
| `#/final` | **최종 결과물** | 다 쌓아 완성한 서비스 — 홈 · 날씨 · 운세 |
| `#/checklist` | 제출 점검 | 최종 체크리스트 · 제출 조건 · 평가 기준 |

### 최종 결과물 (`/final`)

과정이 아니라 완성품이다. 그래서 학습 화면 안에 끼워 넣지 않고 자기 주소를 갖는다.

| 경로 | 화면 |
|---|---|
| `/final` | 홈 — 오늘 한눈에 |
| `/final/weather` | 날씨 — 전국 도시 오늘 현황 (지역별 · 날씨별) |
| `/final/weather/:cityId` | 도시 상세 — 시간별 예보 (과거 90일 ~ 미래 14일) |
| `/final/tarot` | 운세 — 타로 세 장으로 보는 오늘 (AI 해석) |

껍데기(`src/final/index.vue`)가 메뉴를 그리고, 그 안의 `<RouterView />` 자리에
`src/final/routes.js` 가 정한 화면이 들어온다.
날씨 부품은 제출 과제에서 만든 `components/assignments/weather/` 를 그대로 가져다 쓴다 —
과제로 만든 것이 그대로 완성품의 부품이 된다.

## 프로젝트 구조

```text
src/
├── data/curriculum.js        모든 내용의 단일 소스 (챕터 · 챌린지 · 과제 · 체크리스트)
├── components/
│   ├── ui/                   화면 뼈대 (ChallengeCard · LectureBrief · CodeSnippet)
│   ├── practices/            실습 컴포넌트 — 파일을 넣으면 자동 등록
│   └── ConceptHelp.vue       개념 설명 툴팁
├── stores/                   Pinia Store (counter · configStore)
├── views/                    페이지 5개
└── assets/main.css           전역 스타일 · 디자인 토큰
```

## 실습 · 과제 추가하기

새 실습이나 과제를 붙일 때는 **`src/data/curriculum.js`만 수정**하면 됩니다.
View 파일은 건드리지 않습니다.

자세한 방법과 필드 레퍼런스는 **[docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md)** 를 참고하세요.

요약하면:

1. `src/components/practices/` 에 `~Practice.vue` 파일을 만든다 (자동 등록됨)
2. `curriculum.js` 의 해당 챌린지 `practices` 배열에 파일명을 넣는다

## 실행

```sh
npm install     # 패키지 설치
npm run dev     # 개발 서버 → http://localhost:5173
npm run build   # 배포용 빌드 → dist/
npm run preview # 빌드 결과 미리보기
```

## 권장 개발 환경

- **VS Code 확장**: [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) · ESLint · Prettier (Vetur는 비활성화)
- **브라우저 확장**: [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- **참고**: [Vite Configuration Reference](https://vite.dev/config/)

## 배포

`npm run deploy` 를 실행하면 빌드 결과(`dist`)가 `gh-pages` 브랜치로 올라가고
https://inwoo-jang.github.io/inwoo-vue/ 에 반영됩니다.

> GitHub Actions 워크플로를 쓰지 않는 이유: 현재 로그인 토큰에 `workflow` 권한이 없어
> `.github/workflows/` 를 푸시할 수 없습니다. 나중에 `gh auth refresh -s workflow` 로
> 권한을 추가하면 Actions 방식으로 바꿔도 됩니다.
