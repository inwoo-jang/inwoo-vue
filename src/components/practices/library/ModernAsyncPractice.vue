<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 249쪽 Code Challenge — 비동기 연쇄 파이프라인 (Async/Await).
 *
 * 교안 코드는 400ms 씩 두 번 기다린 뒤 결과 한 줄만 남긴다.
 * 그 800ms 동안 무슨 일이 일어나는지가 async/await 의 전부이므로,
 * 단계마다 기록을 남기고 실패 스위치를 붙여 catch 로도 떨어뜨려 본다.
 */

/** 실시간 화면 출력을 위한 Vue 상태값 (교안의 수정 금지 부분) */
const result3 = ref('')

const logs = ref([])
const running = ref(false)
const shouldFail = ref(false)

/** 가상의 백엔드 API (교안의 수정 금지 부분 — Promise 반환형 화살표 함수) */
const fetchUserId = () => new Promise((res) => setTimeout(() => res({ uid: 777 }), 400))

const fetchUserProfile = (uid) =>
  new Promise((res, rej) =>
    setTimeout(() => {
      // 실패 스위치가 켜져 있으면 여기서 거부한다 — catch 로 가는 길을 보려고 붙였다
      if (shouldFail.value) rej(new Error('프로필 서버 응답 없음'))
      else res({ uid, nick: 'Graves' })
    }, 400),
  )

const add = (text, tone = 'plain') => logs.value.push({ id: logs.value.length, text, tone })

const runTask3 = async () => {
  running.value = true
  logs.value = []
  result3.value = '데이터 동기화 중...'

  try {
    add('await fetchUserId() — 여기서 멈춰 기다린다', 'wait')
    const idResult = await fetchUserId()

    // 1. 결과 객체에서 uid 를 구조 분해로 뽑아낸다
    const { uid } = idResult
    add(`uid 도착: ${uid}`, 'ok')

    add(`await fetchUserProfile(${uid}) — 앞 결과를 인자로 넘겨 연쇄 호출`, 'wait')
    const profile = await fetchUserProfile(uid)

    // 2. 최종 결과 객체에서 nick 을 뽑아낸다
    const { nick } = profile
    add(`nick 도착: ${nick}`, 'ok')

    result3.value = `동기화 성공: ${nick}님 환영합니다.`
  } catch (error) {
    // 3. 비동기 통신 중 발생할 수 있는 에러를 여기서 잡는다
    add(`catch 로 떨어짐 — ${error.message}`, 'fail')
    result3.value = '통신 실패'
  } finally {
    running.value = false
  }
}
</script>

<template>
  <section class="practice-card">
    <h2>
      과제 3 — 비동기 연쇄 파이프라인 (Async/Await)
      <ConceptHelp
        text="async는 이 함수 안에서 비동기 처리를 하겠다는 선언이고, await는 그 작업이 끝날 때까지 다음 줄로 넘어가지 말라는 명령입니다. async 함수는 항상 Promise를 반환합니다. .then/.catch 대신 try/catch로 에러를 잡습니다."
      />
    </h2>

    <!-- 실행 -->
    <div class="area">
      <div class="run">
        <button type="button" class="go" :disabled="running" @click="runTask3">
          {{ running ? '통신 중…' : '과제 3 가동' }}
        </button>
        <label class="switch">
          <input v-model="shouldFail" type="checkbox" :disabled="running" />
          <span>두 번째 호출을 실패시키기 <small>catch 로 가는 길 보기</small></span>
        </label>
      </div>
    </div>

    <!-- 파이프라인 -->
    <div class="area">
      <h3>두 번의 기다림 <small>각 400ms</small></h3>
      <div class="pipe">
        <div class="stage" :class="{ done: logs.some((l) => l.text.includes('uid 도착')) }">
          <code>fetchUserId()</code>
          <span>{ uid: 777 }</span>
        </div>
        <span class="link" aria-hidden="true">→</span>
        <div class="stage" :class="{ done: logs.some((l) => l.text.includes('nick 도착')) }">
          <code>fetchUserProfile(uid)</code>
          <span>{ uid, nick }</span>
        </div>
      </div>
      <p class="hint-line">
        앞 호출의 결과(<code>uid</code>)가 뒤 호출의 인자가 됩니다. 그래서 동시에 못 하고 순서대로
        기다립니다.
      </p>
    </div>

    <!-- 진행 기록 -->
    <div v-if="logs.length" class="area">
      <h3>진행 기록</h3>
      <ul class="logs">
        <li v-for="log in logs" :key="log.id" :class="log.tone">
          <span class="dot" aria-hidden="true" />
          <span>{{ log.text }}</span>
        </li>
      </ul>
    </div>

    <!-- 결과창 -->
    <div class="area">
      <h3>결과창 3</h3>
      <div class="console" :class="{ empty: !result3 }">
        {{ result3 || '가동 버튼을 누르면 통신 결과가 여기 찍힙니다.' }}
      </div>
    </div>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

h3 small {
  color: var(--faint);
  font-size: 11px;
  font-weight: 500;
}

.area + .area {
  margin-top: 20px;
}

/* 실행 */
.run {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.go {
  padding: 10px 20px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
}

.go:disabled {
  opacity: 0.55;
  cursor: progress;
}

.switch {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--muted);
  cursor: pointer;
  font-size: 12.5px;
}

.switch small {
  color: var(--faint);
  font-size: 11px;
}

/* 파이프라인 */
.pipe {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
}

.stage {
  display: grid;
  gap: 5px;
  padding: 14px 16px;
  border: 1px dashed var(--line-strong);
  border-radius: 10px;
  background: var(--paper);
  transition: all 0.3s ease;
}

/* 도착한 단계만 실선으로 굳는다 */
.stage.done {
  border-style: solid;
  border-color: var(--accent);
  background: var(--accent-tint);
}

.stage code {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.stage.done code {
  color: var(--accent);
}

.stage span {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.link {
  color: var(--faint);
  font-size: 18px;
}

.hint-line {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.hint-line code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

/* 기록 */
.logs {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.logs li {
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.6;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--line-strong);
}

.logs li.wait .dot {
  background: var(--slate);
}

.logs li.ok .dot {
  background: var(--accent);
}

.logs li.fail {
  background: var(--signal-tint);
  color: var(--signal);
}

.logs li.fail .dot {
  background: var(--signal);
}

/* 결과창 */
.console {
  padding: 15px 18px;
  border-radius: 10px;
  color: #e8e8e8;
  background: #2b2b2b;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.7;
}

.console.empty {
  color: #8a8a8a;
}

@media (max-width: 640px) {
  .pipe {
    grid-template-columns: 1fr;
  }

  .link {
    justify-self: center;
    transform: rotate(90deg);
  }
}
</style>
