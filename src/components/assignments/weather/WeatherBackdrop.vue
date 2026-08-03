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

    <!-- 비: 굵기와 속도가 다른 빗줄기 세 겹 -->
    <template v-if="['rain', 'rain-heavy', 'drizzle', 'storm'].includes(scene.effect)">
      <div class="rain-layer a" />
      <div class="rain-layer b" />
      <div class="rain-layer c" />
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

    <!-- 번개: 가끔 화면 전체가 번쩍인다 -->
    <div v-if="['storm', 'lightning'].includes(scene.effect)" class="flash" />

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
.rain-layer {
  position: absolute;
  inset: -30% 0 0;
  background-repeat: repeat;
}

.rain-layer.a {
  background-image: repeating-linear-gradient(
    102deg,
    transparent 0 9px,
    rgb(150 180 210 / 55%) 9px 10px,
    transparent 10px 22px
  );
  animation: rain-fall 0.62s linear infinite;
}

.rain-layer.b {
  background-image: repeating-linear-gradient(
    99deg,
    transparent 0 15px,
    rgb(170 195 220 / 40%) 15px 16px,
    transparent 16px 34px
  );
  animation: rain-fall 0.95s linear infinite;
}

.rain-layer.c {
  background-image: repeating-linear-gradient(
    105deg,
    transparent 0 24px,
    rgb(120 155 190 / 30%) 24px 25px,
    transparent 25px 52px
  );
  animation: rain-fall 1.45s linear infinite;
}

/* 이슬비는 가늘고 느리게, 호우는 굵고 빠르게 */
.fx-drizzle .rain-layer {
  opacity: 0.45;
  animation-duration: 1.7s;
}

.fx-rain-heavy .rain-layer.a {
  animation-duration: 0.42s;
}

.fx-rain-heavy .rain-layer.b {
  animation-duration: 0.6s;
}

@keyframes rain-fall {
  to {
    transform: translateY(34%);
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
.flash {
  position: absolute;
  background: rgb(255 255 255 / 90%);
  inset: 0;
  opacity: 0;
  animation: flash 9s linear infinite;
}

.fx-lightning .flash {
  animation-duration: 6s;
}

/* 번쩍 · 잠깐 쉬고 한 번 더 · 그리고 긴 정적 */
@keyframes flash {
  0%,
  100% {
    opacity: 0;
  }
  2% {
    opacity: 0.75;
  }
  3.5% {
    opacity: 0;
  }
  5% {
    opacity: 0.45;
  }
  6.5% {
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
