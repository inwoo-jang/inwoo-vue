<script setup>
import { ref } from 'vue'
import axios from 'axios'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 208쪽 Code Challenge — Axios 로 날씨 API 호출하기.
 *
 * 교안은 OpenWeather 실키를 쓰지만 여기서는 가짜 서버를 컴포넌트 안에 둔다.
 * 이 사이트는 이미 실키로 429(Too Many Requests)와 키 노출을 겪었고,
 * 무엇보다 학습에서 봐야 할 것은 날씨 값이 아니라 "실패했을 때 무슨 일이 나는가"다.
 * 진짜 서버로는 500 이나 타임아웃을 마음대로 일으켜 볼 수 없다.
 *
 * axios 인스턴스에 가짜 어댑터를 끼웠으므로, 호출하는 쪽 코드
 * (axios.get → try/catch/finally) 는 실제 API 를 쓸 때와 완전히 같다.
 */

/** 응답을 지연시켜 로딩 상태가 눈에 보이게 한다 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const FAKE_DB = {
  Seoul: { name: '서울', temp: 27.3, humidity: 62, desc: '구름 조금' },
  Busan: { name: '부산', temp: 24.8, humidity: 78, desc: '흐림' },
  Jeju: { name: '제주', temp: 26.1, humidity: 71, desc: '가끔 비' },
}

/** 다음 호출에서 서버가 어떻게 굴 것인지 */
const mode = ref('ok')

const MODES = [
  { value: 'ok', label: '정상 응답', hint: '200' },
  { value: 'slow', label: '느린 응답', hint: '2.5초' },
  { value: 'notfound', label: '없는 도시', hint: '404' },
  { value: 'server', label: '서버 오류', hint: '500' },
  { value: 'timeout', label: '응답 없음', hint: 'timeout' },
]

/**
 * axios 인스턴스 — baseURL·timeout·params 를 여기서 한 번만 정한다.
 * adapter 를 바꾸면 네트워크로 나가지 않고 이 함수가 대신 응답한다.
 */
const api = axios.create({
  baseURL: 'https://api.example.com/data/2.5',
  timeout: 2000,
})

api.defaults.adapter = async (config) => {
  const city = config.params?.q ?? ''

  if (mode.value === 'slow') await sleep(2500)
  else await sleep(600)

  if (mode.value === 'timeout') await sleep(10000)

  if (mode.value === 'server') {
    // axios 는 2xx 가 아니면 reject 한다. error.response 에 서버가 준 것이 들어 있다
    return Promise.reject(
      Object.assign(new Error('Request failed with status code 500'), {
        response: { status: 500, data: { message: 'internal server error' } },
        config,
      }),
    )
  }

  const found = FAKE_DB[city]
  if (mode.value === 'notfound' || !found) {
    return Promise.reject(
      Object.assign(new Error('Request failed with status code 404'), {
        response: { status: 404, data: { cod: '404', message: 'city not found' } },
        config,
      }),
    )
  }

  return {
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
    data: {
      name: found.name,
      main: { temp: found.temp, humidity: found.humidity },
      weather: [{ description: found.desc }],
    },
  }
}

const city = ref('Seoul')
const weather = ref(null)
const errorMessage = ref('')
const isLoading = ref(false)
const elapsed = ref(0)
const logs = ref([])

const add = (text, tone = 'plain') => logs.value.push({ id: logs.value.length, text, tone })

/**
 * 교안의 getWeather 와 같은 모양이다.
 * try 에서 성공을, catch 에서 실패를, finally 에서 성공·실패 무관한 뒷정리를 한다.
 */
const getWeather = async () => {
  isLoading.value = true
  weather.value = null
  errorMessage.value = ''
  logs.value = []
  elapsed.value = 0

  const startedAt = performance.now()
  add(`GET /weather?q=${city.value} — 보냈다. 응답을 기다린다`, 'wait')

  try {
    const response = await api.get('/weather', {
      params: { q: city.value, units: 'metric', appid: '<API_KEY>' },
    })

    // 서버가 준 것은 response 가 아니라 response.data 다 — 가장 자주 틀리는 지점
    weather.value = {
      city: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      desc: response.data.weather[0].description,
    }
    add(`${response.status} ${response.statusText} — response.data 도착`, 'ok')
  } catch (error) {
    // 실패는 두 갈래다. 서버가 답을 준 실패와, 아예 답이 없는 실패
    if (error.response) {
      errorMessage.value = `서버가 ${error.response.status} 로 거절했습니다.`
      add(`error.response.status = ${error.response.status}`, 'fail')
      add(`error.response.data = ${JSON.stringify(error.response.data)}`, 'fail')
    } else {
      errorMessage.value = '서버가 응답하지 않습니다. 네트워크를 확인해 주세요.'
      add(`error.response 가 없다 — ${error.code ?? error.message}`, 'fail')
    }
  } finally {
    // 로딩 표시는 여기서 끈다. try 끝에서 끄면 실패했을 때 영원히 도는 화면이 된다
    isLoading.value = false
    elapsed.value = Math.round(performance.now() - startedAt)
    add(`finally — 로딩 종료 (${elapsed.value}ms)`, 'done')
  }
}
</script>

<template>
  <section class="practice-card">
    <h2>
      Axios — 서버에서 날씨 받아오기
      <ConceptHelp
        text="Axios는 브라우저에서 서버에 HTTP 요청을 보내는 라이브러리입니다. axios.get()은 Promise를 돌려주므로 await로 기다립니다. 서버가 준 값은 response가 아니라 response.data에 들어 있습니다. 2xx가 아니면 catch로 떨어지고, 서버가 답을 준 실패는 error.response에 담깁니다."
      />
    </h2>

    <p class="lead">
      실제 OpenWeather 대신 <b>가짜 서버</b>를 붙였습니다. 키도 네트워크도 필요 없고, 대신 실패를
      마음대로 일으켜 볼 수 있습니다. 호출하는 쪽 코드는 진짜 API 와 똑같습니다.
    </p>

    <!-- 요청 만들기 -->
    <div class="area">
      <h3>요청</h3>
      <div class="request">
        <label>
          <span class="lb">도시 (params.q)</span>
          <select v-model="city">
            <option value="Seoul">Seoul</option>
            <option value="Busan">Busan</option>
            <option value="Jeju">Jeju</option>
            <option value="Atlantis">Atlantis (DB에 없음)</option>
          </select>
        </label>

        <label>
          <span class="lb">서버가 이렇게 굴게</span>
          <div class="modes">
            <button
              v-for="m in MODES"
              :key="m.value"
              type="button"
              class="mode"
              :class="{ on: mode === m.value }"
              @click="mode = m.value"
            >
              {{ m.label }}
              <small>{{ m.hint }}</small>
            </button>
          </div>
        </label>
      </div>

      <pre class="url">GET https://api.example.com/data/2.5/weather?q={{ city }}&amp;units=metric</pre>

      <button type="button" class="go" :disabled="isLoading" @click="getWeather">
        {{ isLoading ? '불러오는 중…' : 'axios.get() 보내기' }}
      </button>
    </div>

    <!-- 화면 세 가지 상태 -->
    <div class="area">
      <h3>화면 <small>로딩 · 성공 · 실패 세 갈래를 모두 그려야 한다</small></h3>

      <div v-if="isLoading" class="panel loading">
        <span class="spinner" aria-hidden="true" />
        <p>불러오는 중입니다…</p>
      </div>

      <div v-else-if="errorMessage" class="panel error">
        <p class="e-title">불러오지 못했습니다</p>
        <p class="e-body">{{ errorMessage }}</p>
        <button type="button" class="retry" @click="getWeather">다시 시도</button>
      </div>

      <div v-else-if="weather" class="panel ok">
        <p class="w-city">{{ weather.city }}</p>
        <p class="w-temp">{{ weather.temp }}<span>℃</span></p>
        <p class="w-desc">{{ weather.desc }} · 습도 {{ weather.humidity }}%</p>
      </div>

      <div v-else class="panel idle">
        <p>아직 요청하지 않았습니다. 위 버튼을 눌러 보세요.</p>
      </div>
    </div>

    <!-- 통신 기록 -->
    <div v-if="logs.length" class="area">
      <h3>통신 기록</h3>
      <ul class="logs">
        <li v-for="log in logs" :key="log.id" :class="log.tone">
          <span class="dot" aria-hidden="true" />
          <span>{{ log.text }}</span>
        </li>
      </ul>
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

.lead {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.area + .area {
  margin-top: 20px;
}

/* 요청 */
.request {
  display: grid;
  gap: 12px;
  margin-bottom: 12px;
}

.request label {
  display: grid;
  gap: 7px;
}

.lb {
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.request select {
  padding: 9px 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--surface);
  color: var(--ink);
  font: inherit;
  font-size: 13px;
}

.modes {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mode {
  display: grid;
  gap: 2px;
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  text-align: left;
}

.mode small {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 10.5px;
}

.mode.on {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
  font-weight: 700;
}

.mode.on small {
  color: var(--accent);
}

.url {
  margin: 0 0 12px;
  padding: 11px 14px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
  overflow-x: auto;
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

/* 결과 패널 */
.panel {
  display: grid;
  gap: 8px;
  padding: 26px 20px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
  text-align: center;
}

.panel.idle {
  color: var(--faint);
  font-size: 13px;
}

.panel.loading {
  justify-items: center;
  color: var(--muted);
  font-size: 13px;
}

.spinner {
  width: 22px;
  height: 22px;
  border: 2px solid var(--line);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation-duration: 3s;
  }
}

.panel.error {
  border-color: var(--signal);
  background: var(--signal-tint);
}

.e-title {
  margin: 0;
  color: var(--signal);
  font-size: 14.5px;
  font-weight: 700;
}

.e-body {
  margin: 0;
  color: var(--signal);
  font-size: 13px;
}

.retry {
  justify-self: center;
  margin-top: 4px;
  padding: 7px 16px;
  border: 1px solid var(--signal);
  border-radius: 999px;
  color: var(--signal);
  background: transparent;
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
}

.panel.ok {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.w-city {
  margin: 0;
  color: var(--accent);
  font-size: 14px;
  font-weight: 700;
}

.w-temp {
  margin: 0;
  color: var(--ink);
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.w-temp span {
  font-size: 20px;
}

.w-desc {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
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
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.6;
  word-break: break-all;
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
</style>
