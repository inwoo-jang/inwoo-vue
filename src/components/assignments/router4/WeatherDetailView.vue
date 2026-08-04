<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '../../../stores/configStore'
import BaseDashboardCard from '../weather/BaseDashboardCard.vue'
import WeatherIcon from '../weather/WeatherIcon.vue'
import UiIcon from '../weather/UiIcon.vue'
import { findMockCity } from './mockCities'
import { backdropStatus } from './backdropState'

/**
 * 과제 4 — 도시 상세 (/weather/:cityId)
 *
 * 주소의 :cityId 자리에 들어온 값을 useRoute()로 읽어,
 * Mount 시점에 Mock Data에서 해당 도시를 고른다.
 */
const route = useRoute()
const router = useRouter()

const city = ref(null)

onMounted(() => {
  city.value = findMockCity(route.params.cityId)
  // 보고 있는 도시의 날씨로 배경을 바꾼다
  if (city.value) backdropStatus.value = city.value.status
})

/** 아이콘 받침 색조 — 메인 카드와 같은 규칙 */
const tone = computed(() => {
  const status = city.value?.status ?? ''
  if (status.includes('맑')) return 'warm'
  if (status.includes('비') || status.includes('눈')) return 'cool'
  return 'neutral'
})

/**
 * 과제 5 — 메인 화면과 똑같은 Store 를 본다.
 * 메인에서 화씨로 바꾸고 상세로 들어와도 화씨가 그대로 유지되는 이유다.
 */
const { unit, unitSymbol } = storeToRefs(useConfigStore())

/** 교안 191쪽 — 화씨 환산식 (섭씨 × 9) / 5 + 32 */
const displayTemp = computed(() => {
  const celsius = city.value?.temp ?? 0
  return unit.value === 'celsius' ? celsius : Math.round((celsius * 9) / 5 + 32)
})

/** 교안 172쪽 handleGoBack — 1단계 이전 주소 기록으로 */
const goBack = () => router.go(-1)
</script>

<template>
  <BaseDashboardCard>
    <template v-if="city">
      <header class="head">
        <div class="icon-tile" :class="tone">
          <WeatherIcon :status="city.status" :size="34" />
        </div>
        <div class="title">
          <p class="eyebrow">
            {{ city.region }} · <code>{{ route.params.cityId }}</code>
          </p>
          <h3>{{ city.name }}</h3>
          <p class="status">{{ city.status }}</p>
        </div>
        <p class="temp">{{ displayTemp }}<span class="unit">{{ unitSymbol }}</span></p>
      </header>

      <dl class="observation">
        <div><dt>습도</dt><dd>{{ city.humidity }}<i>%</i></dd></div>
        <div><dt>풍속</dt><dd>{{ city.wind }}<i>m/s</i></dd></div>
        <div><dt>기압</dt><dd>{{ city.pressure }}<i>hPa</i></dd></div>
        <div><dt>가시거리</dt><dd>{{ city.visibility }}<i>km</i></dd></div>
        <div><dt>미세먼지</dt><dd>{{ city.dust }}</dd></div>
        <div><dt>일출 · 일몰</dt><dd class="small">{{ city.sunrise }} · {{ city.sunset }}</dd></div>
      </dl>

      <footer class="foot">
        <p v-if="route.query.from" class="from">
          <span class="tag">route.query</span>
          <code>{{ route.query }}</code>
        </p>
        <button type="button" @click="goBack">← 이전 화면으로</button>
      </footer>
    </template>

    <!-- 주소에 없는 도시 코드가 들어온 경우 -->
    <div v-else class="missing">
      <UiIcon name="empty" :size="24" />
      <p><code>{{ route.params.cityId }}</code> 에 해당하는 도시가 없습니다.</p>
      <button type="button" @click="goBack">← 이전 화면으로</button>
    </div>
  </BaseDashboardCard>
</template>

<style scoped>
.head {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  margin-bottom: 18px;
}

.icon-tile {
  display: grid;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  place-items: center;
}

.icon-tile.warm {
  background: #fdf2d5;
}

.icon-tile.cool {
  background: #e5eff9;
}

.icon-tile.neutral {
  background: #edf0f3;
}

.eyebrow {
  margin: 0 0 3px;
  color: var(--faint);
  font-size: 11.5px;
}

.eyebrow code,
.from code {
  font-family: var(--font-mono);
}

h3 {
  margin: 0 0 2px;
  color: var(--ink);
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.status {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.temp {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.unit {
  margin-left: 2px;
  color: var(--faint);
  font-size: 15px;
  font-weight: 500;
}

.observation {
  display: grid;
  gap: 8px;
  margin: 0;
  grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
}

.observation > div {
  padding: 12px 15px;
  border-radius: 13px;
  background: var(--paper);
}

dt {
  margin-bottom: 4px;
  color: var(--faint);
  font-size: 11.5px;
}

dd {
  display: flex;
  gap: 4px;
  align-items: baseline;
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 17px;
  font-weight: 700;
}

dd i {
  color: var(--faint);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
}

dd.small {
  font-size: 14px;
}

.foot {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-top: 16px;
}

.from {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 0;
  padding: 7px 13px;
  border-radius: 999px;
  background: var(--paper);
  font-size: 12px;
}

.tag {
  color: var(--faint);
  font-size: 10.5px;
  font-weight: 700;
}

.foot button,
.missing button {
  margin-left: auto;
  padding: 9px 15px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
}

.foot button:hover,
.missing button:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.missing {
  display: grid;
  gap: 12px;
  padding: 30px 0;
  justify-items: center;
  color: var(--faint);
  text-align: center;
}

.missing p {
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
}

.missing button {
  margin: 0;
}

@media (max-width: 480px) {
  .head {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .temp {
    grid-column: 2;
  }
}
</style>
