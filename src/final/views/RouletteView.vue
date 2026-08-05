<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import BaseDashboardCard from '../../components/weather/BaseDashboardCard.vue'
import { useAuthStore } from '../../stores/authStore'
import { useRecordStore } from '../../stores/recordStore'
import { MAX_ITEMS, MIN_ITEMS, defaultSet, rouletteSets, sliceTones } from '../data/rouletteSets'
import { link } from '../routes'

/**
 * 룰렛 — /final/games/roulette
 *
 * 돌리는 순서가 중요하다.
 *   ① 결과를 먼저 정하고  ② 그 칸이 바늘에 오도록 각도를 계산해  ③ 돌린다
 * 돌린 뒤에 각도를 읽어 결과를 정하면, 애니메이션이 끊기거나 브라우저가
 * 프레임을 건너뛸 때 화면과 결과가 어긋난다.
 */
const items = ref([...defaultSet.items])
const activeSetId = ref(defaultSet.id)
const draft = ref('')

const slice = computed(() => 360 / Math.max(items.value.length, 1))
const canSpin = computed(() => items.value.length >= MIN_ITEMS)

/** 칸 색은 이웃끼리 겹치지 않게 돌려 쓴다 */
const toneOf = (index) => sliceTones[index % sliceTones.length]

/**
 * 원판 그리기.
 * conic-gradient 는 "몇 도부터 몇 도까지 무슨 색" 을 그대로 적으면 되므로
 * 칸을 그리려고 캔버스를 쓸 필요가 없다.
 */
const wheelBackground = computed(() => {
  if (!items.value.length) return 'var(--surface-sunken)'
  const stops = items.value.map((_, i) => {
    const from = (i * slice.value).toFixed(3)
    const to = ((i + 1) * slice.value).toFixed(3)
    return `${toneOf(i)} ${from}deg ${to}deg`
  })
  return `conic-gradient(from 0deg, ${stops.join(', ')})`
})

/* ── 돌리기 ────────────────────────────────────────────────────── */
const angle = ref(0)
const isSpinning = ref(false)
const winner = ref('')

const spin = () => {
  if (isSpinning.value || !canSpin.value) return

  // ① 결과를 먼저 정한다
  const index = Math.floor(Math.random() * items.value.length)

  /*
   * ② 그 칸이 위쪽 바늘에 오도록 각도를 정한다.
   *    칸 i 의 한가운데는 i*slice + slice/2 이고, 바늘은 0도(12시)에 있으므로
   *    원판을 그 각도만큼 되돌려야 한다. 칸 안에서 조금 흔들어 매번 같은
   *    자리에 멈추지 않게 한다.
   */
  const center = index * slice.value + slice.value / 2
  const jitter = (Math.random() - 0.5) * slice.value * 0.6
  const turns = 5 + Math.floor(Math.random() * 3) // 5~7바퀴

  // 지금까지 돈 각도에서 이어서 더 돈다 (뒤로 감기지 않게)
  const current = angle.value
  const target = Math.ceil(current / 360) * 360 + turns * 360 + (360 - center - jitter)

  isSpinning.value = true
  winner.value = ''
  angle.value = target

  // ③ 멈춘 뒤에 결과를 보여 준다
  window.setTimeout(() => {
    winner.value = items.value[index]
    isSpinning.value = false
    savedId.value = 0
  }, 4200)
}

/* ── 항목 편집 ─────────────────────────────────────────────────── */
const useSet = (set) => {
  if (isSpinning.value) return
  activeSetId.value = set.id
  items.value = [...set.items]
  winner.value = ''
}

const addItem = () => {
  const text = draft.value.trim()
  if (!text || isSpinning.value) return
  if (items.value.length >= MAX_ITEMS) {
    ElMessage.warning(`항목은 ${MAX_ITEMS}개까지만 넣을 수 있어요.`)
    return
  }
  if (items.value.includes(text)) {
    ElMessage.warning('이미 있는 항목이에요.')
    return
  }
  items.value = [...items.value, text]
  activeSetId.value = ''
  draft.value = ''
  winner.value = ''
}

const removeItem = (index) => {
  if (isSpinning.value) return
  items.value = items.value.filter((_, i) => i !== index)
  activeSetId.value = ''
  winner.value = ''
}

/** 전체 삭제 — 되돌릴 수 없으니 비어 있으면 아무 일도 하지 않는다 */
const clearAll = () => {
  if (isSpinning.value || !items.value.length) return
  items.value = []
  activeSetId.value = ''
  winner.value = ''
  ElMessage.success({ message: '항목을 모두 지웠어요.', duration: 1400 })
}

/* ── 기록 남기기 ───────────────────────────────────────────────── */
const auth = useAuthStore()
const { isLoggedIn } = storeToRefs(auth)
const recordStore = useRecordStore()
const { isSaving } = storeToRefs(recordStore)

const savedId = ref(0)

const save = async () => {
  if (!winner.value) return
  const saved = await recordStore.add({
    kind: 'game',
    type: '룰렛',
    reading: `${items.value.length}개 중에서 "${winner.value}" 이(가) 나왔어요.`,
    meta: {
      gameId: 'roulette',
      result: winner.value,
      // 나중에 기록에서 "무엇들 중에 골랐는지" 를 보여 주려고 함께 남긴다
      items: items.value,
    },
  })
  if (!saved) {
    ElMessage.error(recordStore.errorMessage)
    return
  }
  savedId.value = saved.id
  ElMessage.success({ message: 'My 에 저장했어요!', duration: 1600 })
}
</script>

<template>
  <BaseDashboardCard>
    <div class="roulette">
      <header class="head">
        <div>
          <p class="eyebrow">GAME · ROULETTE</p>
          <h3>돌려서 정하기</h3>
        </div>
        <RouterLink class="quit" :to="link('games')">게임 목록</RouterLink>
      </header>

      <!-- ── 원판 ── -->
      <div class="stage">
        <span class="pin" aria-hidden="true" />
        <div
          class="wheel"
          :class="{ spinning: isSpinning }"
          :style="{ background: wheelBackground, transform: `rotate(${angle}deg)` }"
        >
          <!-- 글자는 원판과 함께 돌아야 하므로 안쪽에 얹는다 -->
          <span
            v-for="(item, i) in items"
            :key="`${item}-${i}`"
            class="label"
            :style="{ transform: `rotate(${i * slice + slice / 2}deg)` }"
          >
            <b :style="{ transform: `rotate(90deg)` }">{{ item }}</b>
          </span>

          <span v-if="!items.length" class="empty-wheel">항목을 넣어 주세요</span>
        </div>

        <div class="hub">
          <button type="button" :disabled="!canSpin || isSpinning" @click="spin">
            {{ isSpinning ? '도는 중' : 'START' }}
          </button>
        </div>
      </div>

      <!-- ── 결과 ── -->
      <section v-if="winner" class="result" aria-live="polite">
        <p class="result-label">오늘의 선택</p>
        <p class="result-name">{{ winner }}</p>

        <div class="result-acts">
          <button type="button" class="again" :disabled="isSpinning" @click="spin">
            다시 돌리기
          </button>

          <button
            v-if="isLoggedIn && !savedId"
            type="button"
            class="save"
            :disabled="isSaving"
            @click="save"
          >
            {{ isSaving ? '저장 중…' : 'My 에 저장' }}
          </button>
          <RouterLink v-else-if="savedId" class="saved" :to="link('records')">
            저장 완료 · My 에서 보기 →
          </RouterLink>
          <RouterLink v-else class="saved ghost" :to="link('login')">로그인하고 저장</RouterLink>
        </div>
      </section>

      <!-- ── 세트 고르기 ── -->
      <section class="sets">
        <p class="section-label">미리 만들어 둔 세트</p>
        <div class="set-list">
          <button
            v-for="set in rouletteSets"
            :key="set.id"
            type="button"
            :class="{ on: activeSetId === set.id }"
            :disabled="isSpinning"
            @click="useSet(set)"
          >
            <span aria-hidden="true">{{ set.emoji }}</span> {{ set.title }}
          </button>
        </div>
      </section>

      <!-- ── 직접 넣기 ── -->
      <section class="editor">
        <div class="editor-head">
          <p class="section-label">
            항목 <b>{{ items.length }}</b> / {{ MAX_ITEMS }}
          </p>
          <button
            type="button"
            class="clear"
            :disabled="!items.length || isSpinning"
            @click="clearAll"
          >
            전체 삭제
          </button>
        </div>

        <form class="add" @submit.prevent="addItem">
          <el-input
            v-model="draft"
            size="large"
            placeholder="직접 넣을 항목을 적어 주세요"
            maxlength="14"
            :disabled="isSpinning || items.length >= MAX_ITEMS"
            @keyup.enter="addItem"
          />
          <button type="submit" :disabled="!draft.trim() || isSpinning">추가</button>
        </form>

        <ul v-if="items.length" class="chips">
          <li v-for="(item, i) in items" :key="`${item}-${i}`">
            <span class="dot" :style="{ background: toneOf(i) }" aria-hidden="true" />
            {{ item }}
            <button type="button" :disabled="isSpinning" aria-label="지우기" @click="removeItem(i)">
              ×
            </button>
          </li>
        </ul>

        <p v-else class="empty">
          항목이 없습니다. 위에서 세트를 고르거나 직접 넣어 주세요.
        </p>

        <p v-if="items.length === 1" class="warn">항목이 하나면 돌릴 수 없어요. 하나 더 넣어 주세요.</p>
      </section>
    </div>
  </BaseDashboardCard>
</template>

<style scoped>
.roulette {
  display: grid;
  gap: 18px;
}

.head {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  justify-content: space-between;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
}

h3 {
  margin: 0;
  color: var(--ink);
  font-size: 20px;
}

.quit {
  flex: none;
  padding: 6px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}

.quit:hover {
  border-color: var(--slate);
  color: var(--slate);
}

/* ── 원판 ── */
.stage {
  position: relative;
  justify-self: center;
  width: min(320px, 82vw);
  aspect-ratio: 1 / 1;
}

.wheel {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow:
    0 0 0 8px color-mix(in srgb, var(--surface) 90%, transparent),
    0 14px 34px rgb(40 46 56 / 0.22);
  /* 멈출 때 천천히 잦아들도록 — 뒤로 튕기지 않는 곡선 */
  transition: transform 4.2s cubic-bezier(0.16, 0.84, 0.24, 1);
}

/* 칸 이름 — 원판 중심에서 바깥으로 뻗은 줄 위에 얹는다 */
.label {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 50%;
  height: 0;
  transform-origin: 0 0;
}

.label b {
  display: block;
  width: 78px;
  margin-left: 30%;
  color: #fff;
  font-size: 12.5px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  text-shadow: 0 1px 4px rgb(0 0 0 / 0.35);
  transform-origin: 50% 50%;
  overflow-wrap: anywhere;
}

.empty-wheel {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: var(--faint);
  font-size: 13px;
}

/* 위쪽 바늘 */
.pin {
  position: absolute;
  top: -6px;
  left: 50%;
  z-index: 2;
  width: 0;
  height: 0;
  border-right: 11px solid transparent;
  border-bottom: 20px solid var(--ink);
  border-left: 11px solid transparent;
  transform: translateX(-50%);
  filter: drop-shadow(0 2px 4px rgb(0 0 0 / 0.25));
}

/* 가운데 버튼 */
.hub {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
}

.hub button {
  width: 86px;
  height: 86px;
  border: 5px solid #fff;
  border-radius: 50%;
  background: var(--ink);
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.06em;
  box-shadow: 0 6px 18px rgb(30 34 42 / 0.3);
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.hub button:hover:not(:disabled) {
  transform: scale(1.06);
}

.hub button:disabled {
  cursor: default;
  opacity: 0.55;
}

/* ── 결과 ── */
.result {
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(
    120deg,
    color-mix(in srgb, var(--slate) 14%, transparent),
    color-mix(in srgb, var(--accent) 10%, transparent)
  );
  text-align: center;
}

.result-label {
  margin: 0;
  color: var(--slate);
  font-size: 12px;
  font-weight: 700;
}

.result-name {
  margin: 0;
  color: var(--ink);
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.result-acts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 6px;
}

.result-acts button,
.result-acts .saved {
  padding: 10px 18px;
  border: 0;
  border-radius: 999px;
  background: var(--surface);
  color: var(--ink-soft);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.result-acts .save {
  background: var(--accent);
  color: var(--on-accent);
}

.result-acts .saved {
  background: var(--accent-tint);
  color: var(--accent);
}

.result-acts .saved.ghost {
  background: transparent;
  box-shadow: inset 0 0 0 1px var(--line);
  color: var(--muted);
}

.result-acts button:hover,
.result-acts .saved:hover {
  opacity: 0.88;
}

/* ── 세트 ── */
.section-label {
  margin: 0 0 8px;
  color: var(--faint);
  font-size: 12px;
  font-weight: 700;
}

.section-label b {
  color: var(--ink-soft);
}

.set-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.set-list button {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
}

.set-list button:hover:not(:disabled) {
  border-color: var(--slate);
  color: var(--slate);
}

.set-list button.on {
  border-color: transparent;
  background: color-mix(in srgb, var(--slate) 16%, transparent);
  color: var(--slate-deep);
}

/* ── 편집 ── */
.editor {
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

.editor-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.clear {
  padding: 5px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
}

.clear:hover:not(:disabled) {
  border-color: var(--danger);
  color: var(--danger);
}

.clear:disabled {
  cursor: default;
  opacity: 0.4;
}

.add {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.add button {
  flex: none;
  padding: 0 20px;
  border: 0;
  border-radius: 10px;
  background: var(--ink);
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
}

.add button:disabled {
  cursor: default;
  opacity: 0.4;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.chips li {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  padding: 7px 8px 7px 12px;
  border-radius: 999px;
  background: var(--surface-sunken);
  color: var(--ink-soft);
  font-size: 12.5px;
  font-weight: 600;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.chips button {
  display: grid;
  width: 18px;
  height: 18px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: rgb(0 0 0 / 0.07);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  line-height: 1;
}

.chips button:hover:not(:disabled) {
  background: var(--danger-tint);
  color: var(--danger);
}

.empty,
.warn {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
}

.warn {
  margin-top: 8px;
  color: var(--signal);
}

@media (prefers-reduced-motion: reduce) {
  .wheel {
    transition-duration: 0.8s;
  }
}
</style>
