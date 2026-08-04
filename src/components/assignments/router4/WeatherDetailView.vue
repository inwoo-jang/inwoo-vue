<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { findMockCity } from './mockCities'

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
})

/** 교안 172쪽 handleGoBack — 1단계 이전 주소 기록으로 */
const goBack = () => router.go(-1)
</script>

<template>
  <div class="detail">
    <template v-if="city">
      <header class="head">
        <div>
          <p class="eyebrow">
            {{ city.region }} · <code>{{ route.params.cityId }}</code>
          </p>
          <h3>{{ city.name }}</h3>
          <p class="status">{{ city.status }} · {{ city.temp }}°C</p>
        </div>
        <button type="button" @click="goBack">← 이전 화면으로</button>
      </header>

      <dl class="observation">
        <div><dt>습도</dt><dd>{{ city.humidity }}%</dd></div>
        <div><dt>풍속</dt><dd>{{ city.wind }} m/s</dd></div>
        <div><dt>기압</dt><dd>{{ city.pressure }} hPa</dd></div>
        <div><dt>가시거리</dt><dd>{{ city.visibility }} km</dd></div>
        <div><dt>미세먼지</dt><dd>{{ city.dust }}</dd></div>
        <div><dt>일출 · 일몰</dt><dd>{{ city.sunrise }} · {{ city.sunset }}</dd></div>
      </dl>

      <p v-if="route.query.from" class="from">
        <span class="tag">route.query</span>
        <code>{{ route.query }}</code>
      </p>
    </template>

    <!-- 주소에 없는 도시 코드가 들어온 경우 -->
    <div v-else class="missing">
      <p><code>{{ route.params.cityId }}</code> 에 해당하는 도시가 없습니다.</p>
      <button type="button" @click="goBack">← 이전 화면으로</button>
    </div>
  </div>
</template>

<style scoped>
.detail {
  padding: 20px 22px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}

.head {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 18px;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--faint);
  font-size: 11.5px;
}

.eyebrow code,
.from code {
  font-family: var(--font-mono);
}

h3 {
  margin: 0 0 4px;
  color: var(--ink);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.status {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.head button,
.missing button {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
}

.head button:hover,
.missing button:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.observation {
  display: grid;
  gap: 8px;
  margin: 0;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.observation > div {
  padding: 12px 14px;
  border-radius: 11px;
  background: var(--paper);
}

dt {
  margin-bottom: 4px;
  color: var(--faint);
  font-size: 11.5px;
}

dd {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 700;
}

.from {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 16px 0 0;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  font-size: 12px;
}

.tag {
  color: var(--faint);
  font-size: 10.5px;
  font-weight: 700;
}

.missing {
  padding: 24px 0;
  text-align: center;
}

.missing p {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 13.5px;
}
</style>
