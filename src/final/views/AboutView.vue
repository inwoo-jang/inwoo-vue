<script setup>
import { useRouter } from 'vue-router'
import BaseDashboardCard from '../../components/assignments/weather/BaseDashboardCard.vue'
import UiIcon from '../../components/assignments/weather/UiIcon.vue'
import { link } from '../routes'

/**
 * 서비스 소개 — /final/about
 * 주소에 직접 연결되는 정적 페이지다.
 *
 * 다른 화면과 같은 껍데기(BaseDashboardCard)를 쓴다.
 * 그래야 홈에서 넘어와도 판의 너비와 여백이 그대로다.
 */
const router = useRouter()

/** 홈으로 (push) */
const goHome = () => router.push(link('home'))

const ROUTES = [
  ['/final', '홈 — 오늘 한눈에'],
  ['/final/weather', '날씨 — 전국 도시의 지금 날씨'],
  ['/final/weather/:cityId', '도시 상세 — 시간별 예보까지'],
  ['/final/tarot', '운세 — 오늘의 타로 한 장'],
  ['/final/about', '이 화면'],
  ['그 밖의 주소', '안내 화면(Catch-all)'],
]
</script>

<template>
  <BaseDashboardCard>
    <h3><UiIcon name="city" :size="19" /> 이 서비스는</h3>

    <p class="lede">
      하루를 여는 화면입니다. <b>날씨</b>는 전국 주요 도시를 지역별로도 날씨별로도 볼 수 있고,
      도시를 고르면 습도 · 권역 · 좌표와 시간별 예보까지 확인할 수 있습니다. 값은 Open-Meteo 에서
      10분마다 새로 받아옵니다. <b>운세</b>는 타로 78장 중 한 장을 뽑아 오늘의 힌트를 건넵니다.
    </p>

    <dl class="routes">
      <div v-for="[path, note] in ROUTES" :key="path">
        <dt><code>{{ path }}</code></dt>
        <dd>{{ note }}</dd>
      </div>
    </dl>

    <ul class="notes">
      <li>주소를 그대로 복사해 보내면 상대에게도 같은 화면이 열립니다.</li>
      <li>즐겨찾기와 밝기 설정은 이 브라우저에 저장됩니다.</li>
      <li>서버가 답하지 않으면 마지막으로 받아 둔 값을 먼저 보여 줍니다.</li>
    </ul>

    <button type="button" @click="goHome">← 홈으로 돌아가기</button>
  </BaseDashboardCard>
</template>

<style scoped>
h3 {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 0 14px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.lede b {
  color: var(--ink);
  font-weight: 700;
}

.lede {
  max-width: 68ch;
  margin: 0 0 20px;
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.85;
}

.routes {
  display: grid;
  gap: 1px;
  margin: 0 0 20px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--line);
}

.routes > div {
  display: grid;
  grid-template-columns: minmax(0, 240px) minmax(0, 1fr);
  gap: 14px;
  align-items: baseline;
  padding: 11px 14px;
  background: var(--surface);
}

dt code {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 12px;
  overflow-wrap: anywhere;
}

dd {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.notes {
  margin: 0 0 22px;
  padding-left: 18px;
  color: var(--muted);
}

.notes li {
  margin-bottom: 7px;
  font-size: 13px;
  line-height: 1.7;
}

button {
  padding: 9px 15px;
  border: 1px solid var(--accent-line);
  border-radius: 999px;
  color: var(--accent);
  background: var(--accent-tint);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}

button:hover {
  border-color: var(--accent);
}

@media (max-width: 620px) {
  .routes > div {
    grid-template-columns: minmax(0, 1fr);
    gap: 4px;
  }
}
</style>
