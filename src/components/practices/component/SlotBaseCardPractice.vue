<script setup>
import ConceptHelp from '../../ConceptHelp.vue'
import SlotBaseCard from './SlotBaseCard.vue'

/**
 * 더해보기 ① header · body · footer 세 구멍짜리 BaseCard 하나로 화면 3개를 만든다.
 * 세 카드 모두 같은 파일(SlotBaseCard.vue)이다. 다른 건 부모가 채워 넣은 내용뿐이다.
 */
</script>

<template>
  <section class="practice-card">
    <h2>
      더해보기 ① BaseCard 하나로 화면 3개
      <ConceptHelp
        text="아래 세 카드는 전부 같은 SlotBaseCard.vue 파일입니다. 테두리·모서리·구분선이 똑같은 이유죠. 다른 것은 부모가 header·body·footer 세 구멍에 무엇을 넣었는지뿐입니다. 껍데기를 한 번만 만들어 두고 화면마다 알맹이만 갈아 끼우는 것이 Slot의 목적입니다."
      />
    </h2>

    <p class="explain">
      세 카드 모두 <b>같은 파일</b>입니다. 껍데기를 고치고 싶으면
      <code>SlotBaseCard.vue</code> 한 곳만 고치면 세 개가 동시에 바뀝니다.
    </p>

    <div class="deck">
      <!-- 1. 세 구멍 모두 채운 경우 -->
      <div class="case">
        <p class="case-label">구멍 3개 모두 채움</p>
        <SlotBaseCard>
          <template #header><b>주간 리포트</b></template>

          <p class="line">이번 주 방문자가 12% 늘었습니다.</p>

          <template #footer>
            <button type="button">자세히</button>
          </template>
        </SlotBaseCard>
      </div>

      <!-- 2. footer를 비워 기본값이 나오는 경우 -->
      <div class="case">
        <p class="case-label">footer만 비움</p>
        <SlotBaseCard>
          <template #header><b>공지</b></template>

          <p class="line">금요일 18시에 배포가 있습니다.</p>
        </SlotBaseCard>
      </div>

      <!-- 3. 아무것도 안 채운 경우 -->
      <div class="case">
        <p class="case-label">아무것도 안 채움</p>
        <SlotBaseCard />
      </div>
    </div>

    <!-- 더해보기 ⑤ Props로는 불가능하고 Slot이어야만 하는 상황 -->
    <div class="verdict">
      <p class="verdict-title">그럼 Props로 하면 안 되나?</p>
      <div class="verdict-grid">
        <div class="side bad">
          <p class="side-head">❌ Props로 시도</p>
          <pre><code>&lt;BaseCard title="주간 리포트" /&gt;</code></pre>
          <p class="side-why">
            제목 <b>글자</b>는 넘길 수 있습니다. 그런데 위 첫 카드의 footer에는
            <b>&lt;button&gt; 태그</b>가 들어 있습니다. Props로 버튼을 넘기려면 문자열로
            <code>"&lt;button&gt;"</code>을 보내야 하는데, 그건 화면이 아니라 그냥 글자입니다.
          </p>
        </div>
        <div class="side good">
          <p class="side-head">✅ Slot이어야만 하는 이유</p>
          <pre><code>&lt;template #footer&gt;
  &lt;button @click="..."&gt;자세히&lt;/button&gt;
&lt;/template&gt;</code></pre>
          <p class="side-why">
            <b>태그·이벤트·컴포넌트</b>가 통째로 들어갑니다. 넘기는 것이 값이 아니라 화면 조각이기
            때문입니다. <b>버튼 하나만 들어가도 Props로는 안 됩니다.</b>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.explain {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.explain code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.92em;
}

.deck {
  display: grid;
  gap: 12px;
}

.case-label {
  margin: 0 0 6px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
}

.line {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.6;
}

/* Props vs Slot 판정 */
.verdict {
  margin-top: 18px;
  padding: 14px 16px;
  border: 1px solid var(--slate-line);
  border-radius: 12px;
  background: var(--slate-tint);
}

.verdict-title {
  margin: 0 0 12px;
  color: var(--slate);
  font-size: 13.5px;
  font-weight: 800;
}

.verdict-grid {
  display: grid;
  gap: 12px;
}

.side {
  padding: 12px 14px;
  border-radius: 10px;
  background: var(--surface);
}

.side-head {
  margin: 0 0 8px;
  font-size: 12.5px;
  font-weight: 800;
}

.side.bad .side-head {
  color: var(--signal);
}

.side.good .side-head {
  color: var(--accent);
}

.side pre {
  overflow-x: auto;
  margin: 0 0 8px;
  padding: 9px 11px;
  border-radius: 7px;
  background: var(--paper);
}

.side code {
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.65;
  white-space: pre;
}

.side-why {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.75;
}

.side-why code {
  padding: 1px 4px;
  border-radius: 3px;
  background: var(--paper);
}

@media (min-width: 700px) {
  .deck {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }

  .verdict-grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}
</style>
