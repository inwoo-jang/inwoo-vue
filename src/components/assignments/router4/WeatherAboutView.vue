<script setup>
import { useRoute, useRouter } from 'vue-router'

/**
 * 과제 4 — 서비스 소개 (/about)
 * 주소에 직접 연결되는 정적 페이지다.
 */
const route = useRoute()
const router = useRouter()

/** 교안 172쪽 handleGoHome — 메인으로 (push) */
const goHome = () => {
  router.push({ name: 'a4-home', params: { stageId: route.params.stageId ?? '4' } })
}
</script>

<template>
  <div class="about">
    <h3>이 서비스는</h3>
    <p>
      전국 주요 도시의 날씨를 한 화면에서 보여 주는 대시보드입니다. 도시를 고르면 습도 · 풍속 ·
      기압 같은 상세 관측값을 확인할 수 있습니다.
    </p>

    <ul>
      <li>메인 화면은 <code>/</code>, 상세는 <code>/weather/:cityId</code> 로 이어집니다.</li>
      <li>주소를 그대로 복사해 보내면 같은 화면이 열립니다.</li>
      <li>없는 주소로 들어오면 안내 페이지가 대신 나옵니다.</li>
    </ul>

    <button type="button" @click="goHome">← 메인 대시보드로 돌아가기</button>
  </div>
</template>

<style scoped>
.about {
  padding: 22px 24px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}

h3 {
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 18px;
  font-weight: 700;
}

p {
  margin: 0 0 14px;
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.8;
}

ul {
  margin: 0 0 18px;
  padding-left: 18px;
  color: var(--muted);
}

li {
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 1.7;
}

code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: var(--paper);
  font-family: var(--font-mono);
  font-size: 0.92em;
}

button {
  padding: 9px 15px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  background: var(--accent-tint);
  color: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}
</style>
