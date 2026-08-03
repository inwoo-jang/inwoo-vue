/**
 * Vue SFC 문법 강조기
 * ------------------------------------------------------------------
 * 외부 라이브러리 없이 동작하는 가벼운 토크나이저다.
 * 소스 코드를 읽기 좋게 색으로 나누는 용도이며, 컴파일러가 아니다.
 *
 * 안전성: 토큰의 텍스트는 전부 escapeHtml()을 거친 뒤에만 HTML로 조립한다.
 *         그래서 결과를 v-html로 넣어도 스크립트가 실행되지 않는다.
 */

/** JavaScript 예약어 */
const KEYWORDS = new Set([
  'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
  'do', 'switch', 'case', 'default', 'break', 'continue', 'new', 'delete',
  'typeof', 'instanceof', 'in', 'of', 'import', 'export', 'from', 'as',
  'async', 'await', 'try', 'catch', 'finally', 'throw', 'class', 'extends',
  'this', 'null', 'undefined', 'true', 'false', 'void', 'yield',
])

/** Vue가 제공하는 함수 — 눈에 띄게 구분한다 */
const VUE_API = new Set([
  'ref', 'reactive', 'computed', 'watch', 'watchEffect', 'toRefs', 'toRef',
  'unref', 'isRef', 'shallowRef', 'readonly', 'nextTick',
  'onMounted', 'onUnmounted', 'onBeforeMount', 'onBeforeUnmount',
  'onUpdated', 'onBeforeUpdate', 'onErrorCaptured',
  'defineProps', 'defineEmits', 'defineExpose', 'defineModel',
  'createApp', 'defineStore', 'storeToRefs', 'provide', 'inject',
  'useRoute', 'useRouter', 'createPinia', 'createRouter',
])

const escapeHtml = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

/**
 * 강의 내용의 **중요한 부분**을 형광펜으로 칠한다.
 * 데이터에 **별표 두 개**로 감싸 두면 <mark>로 바뀐다.
 * 백틱으로 감싼 `코드`는 인라인 코드로 표시한다.
 *
 * 안전성: 먼저 전부 이스케이프한 뒤 우리가 만든 태그만 다시 넣는다.
 */
export const renderEmphasis = (text) => {
  if (!text) return ''
  return escapeHtml(String(text))
    .replace(/\*\*([^*]+)\*\*/g, '<mark>$1</mark>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
}

const wrap = (cls, text) => `<span class="tok-${cls}">${escapeHtml(text)}</span>`

/**
 * 순서가 중요하다. 주석과 문자열을 먼저 잡아야
 * 그 안에 들어 있는 다른 문법이 잘못 강조되지 않는다.
 */
const TOKEN = new RegExp(
  [
    '(<!--[\\s\\S]*?-->)', // 1 HTML 주석
    '(/\\*[\\s\\S]*?\\*/)', // 2 블록 주석
    '(//[^\\n]*)', // 3 한 줄 주석
    '(`(?:\\\\[\\s\\S]|[^`\\\\])*`)', // 4 템플릿 리터럴
    "('(?:\\\\[\\s\\S]|[^'\\\\\\n])*')", // 5 작은따옴표 문자열
    '("(?:\\\\[\\s\\S]|[^"\\\\\\n])*")', // 6 큰따옴표 문자열
    '(</?[A-Za-z][\\w.-]*)', // 7 HTML/컴포넌트 태그
    '(\\s(?:v-[\\w:.\\-\\[\\]]+|[@:#][\\w.\\-\\[\\]]+))', // 8 디렉티브·바인딩 속성
    '(\\b\\d+(?:\\.\\d+)?\\b)', // 9 숫자
    '([A-Za-z_$][\\w$]*)', // 10 식별자
  ].join('|'),
  'g',
)

/** 소스 문자열 → 색이 입혀진 HTML 문자열 */
export const highlightVue = (code) => {
  if (!code) return ''

  let out = ''
  let last = 0

  for (const m of code.matchAll(TOKEN)) {
    out += escapeHtml(code.slice(last, m.index))
    last = m.index + m[0].length

    const [full, htmlComment, blockComment, lineComment, tpl, sq, dq, tag, attr, num, ident] = m

    if (htmlComment || blockComment || lineComment) out += wrap('comment', full)
    else if (tpl || sq || dq) out += wrap('string', full)
    else if (tag) out += wrap('tag', full)
    else if (attr) out += full.slice(0, 1) + wrap('attr', full.slice(1))
    else if (num) out += wrap('number', full)
    else if (ident) {
      if (KEYWORDS.has(ident)) out += wrap('keyword', full)
      else if (VUE_API.has(ident)) out += wrap('api', full)
      else out += escapeHtml(full)
    } else out += escapeHtml(full)
  }

  return out + escapeHtml(code.slice(last))
}
