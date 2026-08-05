<script setup>
/**
 * 게임 미리보기 그림
 *
 * 목록에 이모지를 놓으면 어느 게임이든 비슷해 보인다.
 * 그래서 게임 안에서 실제로 보게 될 물건(룰렛판 · 추첨기)을 작게 그려 둔다.
 * 그림 파일을 쓰지 않고 CSS 로만 그린다 — 어느 크기에서도 안 뭉개진다.
 */
defineProps({
  /** 'roulette' | 'lotto' */
  kind: { type: String, required: true },
})

/** 룰렛판 색 — 실제 원판과 같은 색을 쓴다 */
const wheelTones = ['#ff8f5e', '#ffc247', '#4fc2a3', '#4fa8e8', '#9b7ff0', '#ff7fa8']
const slice = 360 / wheelTones.length
const wheel = `conic-gradient(from 0deg, ${wheelTones
  .map((tone, i) => `${tone} ${i * slice}deg ${(i + 1) * slice}deg`)
  .join(', ')})`

/** 추첨기 안 공 — 각도와 거리를 손으로 잡아 둔다 */
const drumBalls = [
  { tone: '#f5bf35', x: 30, y: 34 },
  { tone: '#3d8fdd', x: 62, y: 30 },
  { tone: '#e8564c', x: 44, y: 55 },
  { tone: '#4b525c', x: 70, y: 60 },
  { tone: '#3fa870', x: 24, y: 62 },
]
</script>

<template>
  <span class="preview" aria-hidden="true">
    <!-- 룰렛 -->
    <template v-if="kind === 'roulette'">
      <span class="wheel" :style="{ background: wheel, '--slice': `${slice}deg` }">
        <span class="spokes" />
        <span class="hub" />
      </span>
      <span class="pin" />
    </template>

    <!-- 로또 추첨기 -->
    <template v-else>
      <span class="drum">
        <span
          v-for="(ball, i) in drumBalls"
          :key="i"
          class="ball"
          :style="{ background: ball.tone, left: `${ball.x}%`, top: `${ball.y}%` }"
        />
        <span class="shine" />
      </span>
      <span class="chute" />
    </template>
  </span>
</template>

<style scoped>
.preview {
  position: relative;
  display: block;
  flex: none;
  width: 62px;
  height: 62px;
}

/* ── 룰렛 ── */
.wheel {
  position: absolute;
  inset: 4px 0 0;
  border-radius: 50%;
  box-shadow:
    0 0 0 2.5px #fff,
    0 0 0 4.5px #2b3038,
    0 4px 10px rgb(40 46 56 / 0.22);
}

.spokes {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: repeating-conic-gradient(
    from 0deg,
    rgb(255 255 255 / 0.9) 0deg 1.2deg,
    transparent 1.2deg var(--slice)
  );
}

.hub {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-radius: 50%;
  background: #2b3038;
  transform: translate(-50%, -50%);
}

.pin {
  position: absolute;
  top: -1px;
  left: 50%;
  width: 0;
  height: 0;
  border-top: 9px solid #2b3038;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  transform: translateX(-50%);
}

/* ── 추첨기 ── */
.drum {
  position: absolute;
  inset: 0 0 8px;
  overflow: hidden;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #fdfefe, #dfe7ee 62%, #c3ced9);
  box-shadow:
    inset 0 -5px 9px rgb(90 110 130 / 0.3),
    0 0 0 3px #2b3038,
    0 4px 10px rgb(40 46 56 / 0.22);
}

.ball {
  position: absolute;
  width: 13px;
  height: 13px;
  margin: -6.5px 0 0 -6.5px;
  border-radius: 50%;
  box-shadow:
    inset 0 -1.5px 3px rgb(0 0 0 / 0.22),
    inset 0 1.5px 3px rgb(255 255 255 / 0.35);
}

.shine {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(55% 38% at 30% 16%, rgb(255 255 255 / 0.85), transparent 70%);
}

.chute {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 18px;
  height: 10px;
  border-radius: 0 0 5px 5px;
  background: linear-gradient(#2b3038, #3c434e);
  transform: translateX(-50%);
}
</style>
