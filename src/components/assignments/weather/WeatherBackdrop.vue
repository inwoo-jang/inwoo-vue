<script setup>
import { computed, ref, watch } from 'vue'

/**
 * 날씨 배경.
 * ------------------------------------------------------------------
 * 사진 한 장을 그대로 깔지 않는다. 사진은 "무대"만 맡고,
 * 그 위에 날씨에 맞는 움직이는 층을 겹쳐 장면을 만든다.
 *
 *   사진(느린 확대) + 효과층(비 · 눈 · 안개 · 구름 · 햇살 · 번개) + 어둡게 덮개
 *
 * 눈과 안개는 사진이 없어서 흐린 하늘 사진 위에 효과층만으로 만들어 냈다.
 */
const props = defineProps({
  /** 한글 날씨 문자열. 없으면 기본 배경 */
  status: { type: String, default: '' },
})

/**
 * 사진은 필요할 때 한 장씩 불러온다.
 * eager로 8장(약 2MB)을 한꺼번에 받으면 첫 화면이 눈에 띄게 느려진다.
 */
const loaders = Object.fromEntries(
  Object.entries(import.meta.glob('../../../assets/photos/*.jpg', { import: 'default' })).map(
    ([path, load]) => [path.split('/').pop().replace('.jpg', ''), load],
  ),
)

const cache = {}

const loadPhoto = async (name) => {
  if (!cache[name]) cache[name] = await loaders[name]?.()
  return cache[name]
}

/**
 * 날씨 → { photo: 배경 사진, effect: 겹칠 움직임 }
 * 위에서부터 검사하므로 좁은 말이 먼저 와야 한다.
 */
const SCENES = [
  ['뇌우', { photo: 'storm', effect: 'storm' }],
  ['번개', { photo: 'lightning', effect: 'lightning' }],
  ['폭설', { photo: 'overcast', effect: 'snow-heavy' }],
  ['눈보라', { photo: 'overcast', effect: 'snow-heavy' }],
  ['싸락눈', { photo: 'overcast', effect: 'snow' }],
  ['눈', { photo: 'overcast', effect: 'snow' }],
  ['한파', { photo: 'overcast', effect: 'snow' }],
  ['소나기', { photo: 'rain', effect: 'rain' }],
  ['호우', { photo: 'rain', effect: 'rain-heavy' }],
  ['이슬비', { photo: 'rain', effect: 'drizzle' }],
  ['어는 비', { photo: 'rain', effect: 'rain' }],
  ['비', { photo: 'rain', effect: 'rain' }],
  ['안개', { photo: 'overcast', effect: 'fog' }],
  ['미세먼지', { photo: 'overcast', effect: 'fog' }],
  ['흐림', { photo: 'overcast', effect: 'clouds-slow' }],
  ['구름조금', { photo: 'partly-cloudy', effect: 'clouds' }],
  ['구름많', { photo: 'cloudy', effect: 'clouds' }],
  ['구름', { photo: 'cloudy', effect: 'clouds' }],
  ['대체로 맑', { photo: 'mostly-sunny', effect: 'sun-clouds' }],
  ['맑', { photo: 'sunny', effect: 'sun' }],
]

const DEFAULT_SCENE = { photo: 'partly-cloudy', effect: 'clouds' }

const scene = computed(() => {
  if (!props.status) return DEFAULT_SCENE
  const found = SCENES.find(([word]) => props.status.includes(word))
  return found ? found[1] : DEFAULT_SCENE
})

/**
 * 사진을 겹 두 개로 번갈아 깔고 투명도만 바꿔 부드럽게 넘긴다.
 * <Transition>은 out-in 도중 상태가 엉키는 경우가 있어 직접 관리한다.
 */
const layers = ref(['', ''])
const front = ref(0)

// 늦게 도착한 사진이 나중에 고른 사진을 덮어쓰지 않도록 순번을 확인한다
let requestId = 0

watch(
  () => scene.value.photo,
  async (name) => {
    const id = ++requestId
    const url = await loadPhoto(name)
    if (!url || id !== requestId) return
    if (layers.value[front.value] === url) return
    const back = 1 - front.value
    layers.value[back] = url
    front.value = back
  },
  { immediate: true },
)

/**
 * 빗방울을 낱개로 만든다.
 * 줄무늬를 통째로 밀면 "사선 무늬가 미끄러지는" 느낌만 나고 비처럼 보이지 않는다.
 * 길이 · 속도 · 굵기 · 시작 시각을 흩어 놓아야 쏟아지는 것처럼 보인다.
 *
 * 값은 규칙적인 수식으로 흩는다. Math.random을 쓰면 다시 그릴 때마다 튀어서
 * 애니메이션이 끊겨 보인다.
 */
const makeDrops = (count, { minDur, maxDur, minLen, maxLen }) =>
  Array.from({ length: count }, (_, i) => {
    const a = ((i * 37) % 100) / 100 // 가로 위치
    const b = ((i * 61) % 100) / 100 // 속도
    const c = ((i * 83) % 100) / 100 // 길이
    const d = ((i * 29) % 100) / 100 // 시작 시각
    return {
      left: a * 104 - 2,
      dur: minDur + b * (maxDur - minDur),
      len: minLen + c * (maxLen - minLen),
      delay: -d * maxDur,
      opacity: 0.3 + c * 0.55,
      width: c > 0.72 ? 2 : 1.3,
    }
  })

const RAIN = makeDrops(120, { minDur: 0.5, maxDur: 0.95, minLen: 42, maxLen: 110 })
const RAIN_HEAVY = makeDrops(190, { minDur: 0.34, maxDur: 0.6, minLen: 60, maxLen: 150 })
const DRIZZLE = makeDrops(80, { minDur: 1.3, maxDur: 2.1, minLen: 14, maxLen: 34 })

const drops = computed(() => {
  if (scene.value.effect === 'rain-heavy') return RAIN_HEAVY
  if (scene.value.effect === 'drizzle') return DRIZZLE
  return RAIN
})

/** 어두운 사진 위에서는 글자가 잘 보이도록 덮개를 더 진하게 */
const isDark = computed(() =>
  ['storm', 'lightning', 'rain-heavy', 'rain'].includes(scene.value.effect),
)
</script>

<template>
  <div class="backdrop" :class="[`fx-${scene.effect}`, { dark: isDark }]" aria-hidden="true">
    <!-- 사진은 천천히 확대되며 살아 있는 느낌만 준다 -->
    <div
      v-for="(url, i) in layers"
      :key="i"
      class="photo"
      :class="{ on: i === front }"
      :style="url ? { backgroundImage: `url(${url})` } : null"
    />

    <!-- ── 효과층 ── -->

    <!-- 햇살: 은은한 빛무리 + 아주 느리게 도는 빛살 -->
    <template v-if="scene.effect === 'sun' || scene.effect === 'sun-clouds'">
      <div class="glow" />
      <div class="rays" />
    </template>

    <!-- 구름: 크고 부드러운 덩어리가 옆으로 흐른다 -->
    <template
      v-if="['clouds', 'clouds-slow', 'sun-clouds', 'fog', 'overcast'].includes(scene.effect)"
    >
      <div class="cloud-layer a" />
      <div class="cloud-layer b" />
    </template>

    <!-- 비: 빗방울을 낱개로 뿌리고, 바닥에는 물안개를 깐다 -->
    <template v-if="['rain', 'rain-heavy', 'drizzle', 'storm'].includes(scene.effect)">
      <div class="rain">
        <span
          v-for="(d, i) in drops"
          :key="i"
          class="drop"
          :style="{
            left: d.left + '%',
            height: d.len + 'px',
            width: d.width + 'px',
            opacity: d.opacity,
            animationDuration: d.dur + 's',
            animationDelay: d.delay + 's',
          }"
        />
      </div>
      <div class="mist" />
    </template>

    <!-- 눈: 크기가 다른 눈송이가 흔들리며 내린다 -->
    <template v-if="['snow', 'snow-heavy'].includes(scene.effect)">
      <div class="snow-layer a" />
      <div class="snow-layer b" />
      <div class="snow-layer c" />
    </template>

    <!-- 안개: 뿌연 띠가 좌우로 천천히 밀린다 -->
    <template v-if="scene.effect === 'fog'">
      <div class="fog-layer a" />
      <div class="fog-layer b" />
    </template>

    <!-- 번개: 하늘이 번쩍인 뒤 갈래가 잠깐 그어진다 -->
    <template v-if="['storm', 'lightning'].includes(scene.effect)">
      <div class="flash" />
      <svg
        v-for="n in 2"
        :key="n"
        class="bolt"
        :class="n === 1 ? 'a' : 'b'"
        viewBox="0 0 200 300"
        preserveAspectRatio="xMidYMin meet"
      >
        <!-- 바깥 후광 -->
        <path
          d="M96 0 78 96 112 88 66 210"
          fill="none"
          stroke="#bfe0ff"
          stroke-width="11"
          stroke-linejoin="round"
          stroke-linecap="round"
          opacity="0.55"
        />
        <!-- 몸통 -->
        <path d="M96 0 78 96 112 88 66 210 90 128 58 138Z" fill="#f2f9ff" />
        <!-- 하얗게 타는 심지 -->
        <path
          d="M96 0 78 96 112 88 66 210"
          fill="none"
          stroke="#fff"
          stroke-width="2.4"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <!-- 잔가지 -->
        <path
          d="M84 62 46 104M104 108 142 142M74 150 44 188"
          fill="none"
          stroke="#eaf5ff"
          stroke-width="2.2"
          stroke-linecap="round"
        />
      </svg>
    </template>

    <!-- 글자가 읽히도록 덮는 층 -->
    <div class="veil" />
  </div>
</template>

<style scoped>
.backdrop {
  position: absolute;
  z-index: 0;
  overflow: hidden;
  inset: 0;
  pointer-events: none;
}

/* ── 사진 ── */
.photo {
  position: absolute;
  background-position: center;
  background-size: cover;
  inset: 0;
  opacity: 0;
  transition: opacity 0.9s ease;
  animation: drift 40s ease-in-out infinite alternate;
}

.photo.on {
  opacity: 1;
}

@keyframes drift {
  from {
    transform: scale(1.06) translate(0, 0);
  }
  to {
    transform: scale(1.14) translate(-1.5%, -1%);
  }
}

/* ── 덮개 — 카드 글씨가 읽히도록 ── */
.veil {
  position: absolute;
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 22%),
    rgb(255 255 255 / 38%) 45%,
    rgb(255 255 255 / 52%)
  );
  inset: 0;
}

.backdrop.dark .veil {
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 34%),
    rgb(255 255 255 / 50%) 45%,
    rgb(255 255 255 / 62%)
  );
}

/* ── 햇살 ── */
.glow {
  position: absolute;
  top: -18%;
  right: -8%;
  width: 46%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(255 236 160 / 85%), rgb(255 236 160 / 0%) 68%);
  animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.55;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.12);
  }
}

.rays {
  position: absolute;
  top: -60%;
  right: -30%;
  width: 110%;
  aspect-ratio: 1;
  background: conic-gradient(
    from 0deg,
    rgb(255 244 200 / 0%) 0deg,
    rgb(255 244 200 / 30%) 10deg,
    rgb(255 244 200 / 0%) 20deg,
    rgb(255 244 200 / 0%) 45deg,
    rgb(255 244 200 / 24%) 55deg,
    rgb(255 244 200 / 0%) 65deg,
    rgb(255 244 200 / 0%) 360deg
  );
  animation: spin 90s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ── 구름 ── */
.cloud-layer {
  position: absolute;
  width: 220%;
  inset: 0 auto 0 0;
  background-repeat: repeat-x;
}

.cloud-layer.a {
  background-image:
    radial-gradient(ellipse 220px 90px at 12% 26%, rgb(255 255 255 / 70%), transparent 70%),
    radial-gradient(ellipse 300px 110px at 45% 18%, rgb(255 255 255 / 55%), transparent 72%),
    radial-gradient(ellipse 190px 80px at 76% 32%, rgb(255 255 255 / 62%), transparent 70%);
  animation: slide-left 70s linear infinite;
}

.cloud-layer.b {
  background-image:
    radial-gradient(ellipse 260px 95px at 25% 55%, rgb(255 255 255 / 42%), transparent 72%),
    radial-gradient(ellipse 200px 78px at 62% 66%, rgb(255 255 255 / 36%), transparent 70%);
  animation: slide-left 110s linear infinite;
}

.fx-clouds-slow .cloud-layer.a {
  animation-duration: 130s;
}

.fx-clouds-slow .cloud-layer.b {
  animation-duration: 190s;
}

@keyframes slide-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* ── 비 ── */
.rain {
  position: absolute;
  inset: -14% 0 0;
}

/* 빗방울 하나. 위는 투명하고 아래로 갈수록 진해야 떨어지는 물줄기로 보인다 */
.drop {
  position: absolute;
  top: -12%;
  border-radius: 999px;
  background: linear-gradient(
    to bottom,
    rgb(214 232 246 / 0%),
    rgb(214 232 246 / 75%) 45%,
    rgb(236 246 255 / 95%)
  );
  animation-name: drop-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

/* 바람에 조금 기울어 떨어진다 */
@keyframes drop-fall {
  from {
    transform: translate3d(0, -20%, 0);
  }
  to {
    transform: translate3d(-90px, 125vh, 0);
  }
}

/* 바닥에 튀어 오르는 물안개 */
.mist {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 26%;
  background: linear-gradient(to top, rgb(226 238 248 / 55%), transparent);
  animation: mist-breathe 4.5s ease-in-out infinite;
}

@keyframes mist-breathe {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.9;
  }
}

/* 이슬비는 흐릿하게, 호우는 더 기울고 빠르게 */
.fx-drizzle .drop {
  filter: blur(0.4px);
}

.fx-drizzle .mist {
  opacity: 0.4;
}

.fx-rain-heavy .drop {
  animation-name: drop-fall-hard;
}

@keyframes drop-fall-hard {
  from {
    transform: translate3d(0, -20%, 0);
  }
  to {
    transform: translate3d(-150px, 130vh, 0);
  }
}

/* ── 눈 (사진이 없어 효과층으로 만든 장면) ── */
.snow-layer {
  position: absolute;
  inset: -20% 0 0;
  background-repeat: repeat;
}

.snow-layer.a {
  background-image:
    radial-gradient(circle 3px at 12% 8%, rgb(255 255 255 / 92%), transparent),
    radial-gradient(circle 2px at 38% 22%, rgb(255 255 255 / 80%), transparent),
    radial-gradient(circle 3px at 68% 12%, rgb(255 255 255 / 88%), transparent),
    radial-gradient(circle 2px at 88% 30%, rgb(255 255 255 / 78%), transparent);
  background-size: 260px 260px;
  animation: snow-fall 11s linear infinite;
}

.snow-layer.b {
  background-image:
    radial-gradient(circle 2px at 22% 40%, rgb(255 255 255 / 70%), transparent),
    radial-gradient(circle 4px at 55% 60%, rgb(255 255 255 / 85%), transparent),
    radial-gradient(circle 2px at 80% 48%, rgb(255 255 255 / 66%), transparent);
  background-size: 340px 340px;
  animation:
    snow-fall 17s linear infinite,
    sway 7s ease-in-out infinite alternate;
}

.snow-layer.c {
  background-image:
    radial-gradient(circle 5px at 34% 70%, rgb(255 255 255 / 62%), transparent),
    radial-gradient(circle 4px at 72% 84%, rgb(255 255 255 / 55%), transparent);
  background-size: 430px 430px;
  animation:
    snow-fall 24s linear infinite,
    sway 11s ease-in-out infinite alternate-reverse;
}

.fx-snow-heavy .snow-layer {
  animation-duration: 7s;
  opacity: 1;
}

@keyframes snow-fall {
  to {
    background-position-y: 130%;
  }
}

@keyframes sway {
  from {
    transform: translateX(-16px);
  }
  to {
    transform: translateX(16px);
  }
}

/* ── 안개 (사진이 없어 효과층으로 만든 장면) ── */
.fog-layer {
  position: absolute;
  width: 200%;
  inset: 0 auto 0 0;
  filter: blur(2px);
}

.fog-layer.a {
  background: linear-gradient(
    180deg,
    transparent 4%,
    rgb(238 242 245 / 82%) 30%,
    transparent 52%,
    rgb(238 242 245 / 70%) 78%,
    transparent 96%
  );
  animation: slide-left 55s linear infinite;
}

.fog-layer.b {
  background: linear-gradient(
    180deg,
    rgb(246 248 250 / 55%) 10%,
    transparent 40%,
    rgb(246 248 250 / 62%) 66%,
    transparent 92%
  );
  animation: slide-left 85s linear infinite reverse;
}

/* ── 번개 ── */
/* 하늘 전체가 번쩍 — 짧고 불규칙하게 두 번 치는 것이 실제와 가깝다 */
.flash {
  position: absolute;
  background: radial-gradient(
    ellipse 80% 60% at 40% 0%,
    rgb(255 255 255 / 95%),
    rgb(214 234 255 / 60%) 55%,
    transparent 80%
  );
  inset: 0;
  opacity: 0;
  animation: flash 9s linear infinite;
}

/* 갈래는 섬광과 같은 박자로 잠깐만, 대신 아주 밝게 */
.bolt {
  position: absolute;
  opacity: 0;
  filter: drop-shadow(0 0 6px rgb(255 255 255 / 95%))
    drop-shadow(0 0 22px rgb(150 205 255 / 90%)) drop-shadow(0 0 52px rgb(120 185 255 / 70%));
  animation: bolt 9s linear infinite;
  will-change: opacity;
}

.bolt.a {
  top: -3%;
  left: 22%;
  width: 27%;
  height: 76%;
}

/* 두 번째 갈래는 반대쪽에서 시차를 두고 친다 */
.bolt.b {
  top: 2%;
  right: 16%;
  left: auto;
  width: 19%;
  height: 58%;
  animation-delay: 4.9s;
  transform: scaleX(-1);
}

.fx-lightning .flash,
.fx-lightning .bolt {
  animation-duration: 6.5s;
}

.fx-lightning .bolt.b {
  animation-delay: 3.4s;
}

@keyframes flash {
  0%,
  100% {
    opacity: 0;
  }
  1.4% {
    opacity: 0.85;
  }
  2.2% {
    opacity: 0.12;
  }
  2.9% {
    opacity: 0.7;
  }
  4.6% {
    opacity: 0;
  }
  /* 두 번째 갈래(4.9s ≒ 54%)와 같은 순간에 하늘도 번쩍인다 */
  53.5% {
    opacity: 0;
  }
  54.4% {
    opacity: 0.7;
  }
  55.2% {
    opacity: 0.1;
  }
  56% {
    opacity: 0.5;
  }
  57.6% {
    opacity: 0;
  }
}

@keyframes bolt {
  0%,
  100% {
    opacity: 0;
  }
  0.9% {
    opacity: 1;
  }
  1.4% {
    opacity: 0.1;
  }
  1.8% {
    opacity: 1;
  }
  2.3% {
    opacity: 0.25;
  }
  2.8% {
    opacity: 0.95;
  }
  3.3% {
    opacity: 0.15;
  }
  3.7% {
    opacity: 0.7;
  }
  4.6% {
    opacity: 0;
  }
}

/* 움직임을 줄여 달라고 설정한 사용자에게는 정지 화면으로 */
@media (prefers-reduced-motion: reduce) {
  .backdrop * {
    animation: none !important;
  }
}
</style>
