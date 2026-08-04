<script setup>
import { ref } from 'vue'
import BaseDashboardCard from '../weather/BaseDashboardCard.vue'
import { tarotCards, cardBack } from '../../../final/data/tarotCards'

/**
 * 8단계에서 늘어난 메뉴 — 운세.
 *
 * 날씨 하나뿐이던 서비스에 두 번째 메뉴가 붙었다는 것을 보여 주는 자리다.
 * 세 장 스프레드와 AI 해석까지 붙은 완성형은 최종 결과물(/final/tarot)에 있다.
 */
const picked = ref(null)

const draw = () => {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)]
  picked.value = { card, reversed: Math.random() >= 0.5 }
}
</script>

<template>
  <BaseDashboardCard>
    <h3><span aria-hidden="true">✶</span> 오늘의 카드</h3>

    <div class="tarot" :style="{ '--card-back': `url(${cardBack})` }">
      <div class="frame">
        <img
          v-if="picked"
          :src="picked.card.image"
          :alt="`${picked.card.name} 타로 카드`"
          :class="{ reversed: picked.reversed }"
        />
        <div v-else class="back" aria-hidden="true"></div>
      </div>

      <div class="copy">
        <template v-if="picked">
          <p class="muted">
            {{ picked.card.arcana }} · {{ picked.card.number }}
            {{ picked.reversed ? '· 역방향' : '' }}
          </p>
          <h4>{{ picked.card.name }}</h4>
          <p>{{ picked.card.message }}</p>
        </template>
        <template v-else>
          <p class="muted">78장 중 한 장</p>
          <h4>카드를 뽑아 보세요</h4>
          <p>날씨 말고도 볼거리를 하나 더 붙였습니다. 이번 단계에서 늘어난 메뉴입니다.</p>
        </template>

        <button type="button" class="draw" @click="draw">
          {{ picked ? '다시 뽑기' : '카드 뽑기' }}
        </button>
      </div>
    </div>
  </BaseDashboardCard>
</template>

<style scoped>
h3 {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 0 16px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

h4 {
  margin: 0 0 6px;
  color: var(--ink);
  font-size: 20px;
  font-weight: 700;
}

.tarot {
  display: grid;
  grid-template-columns: minmax(120px, 160px) 1fr;
  gap: 22px;
  align-items: center;
}

.frame {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 1144 / 1919;
  border-radius: 12px;
  box-shadow: 0 12px 24px #17132530;
}

.frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.frame img.reversed {
  transform: rotate(180deg);
}

.back {
  width: 100%;
  height: 100%;
  border: 3px solid #e7c978;
  background: var(--card-back) center / 100% 100% no-repeat;
}

.copy p {
  margin: 0 0 6px;
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.7;
}

.muted {
  color: var(--muted);
  font-size: 12.5px;
}

.draw {
  margin-top: 14px;
  padding: 9px 16px;
  border: 0;
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 520px) {
  .tarot {
    grid-template-columns: 1fr;
  }

  .frame {
    max-width: 180px;
  }
}
</style>
