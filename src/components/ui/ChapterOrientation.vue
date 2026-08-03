<script setup>
import { ref } from 'vue'
import { renderEmphasis } from '../../utils/highlight'

/**
 * 챕터를 시작하기 전에 읽는 지도.
 * 문법이 여러 개라 예외가 많아 보일 때, 실제 규칙은 하나뿐임을 먼저 잡아준다.
 */
defineProps({
  orientation: { type: Object, required: true },
})

// 실습을 시작하기 전에 한 번은 보라는 뜻으로 이것만 기본 펼침이다.
const isOpen = ref(true)
</script>

<template>
  <section class="orientation" :class="{ closed: !isOpen }">
    <button
      class="orientation-toggle"
      type="button"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <span class="marker" aria-hidden="true">🧭</span>
      <span class="toggle-title">시작하기 전에 — 규칙은 하나뿐입니다</span>
      <span class="chevron" aria-hidden="true">{{ isOpen ? '−' : '+' }}</span>
    </button>

    <div v-show="isOpen" class="orientation-body">
      <p class="rule">{{ orientation.rule }}</p>
      <p class="lead">{{ orientation.lead }}</p>

      <!-- 네 문법을 "같은 파이프의 다른 화물"로 한 줄에 세운다 -->
      <ul class="cargo">
        <li v-for="item in orientation.cargo" :key="item.name">
          <code class="name">{{ item.name }}</code>
          <span class="payload">{{ item.payload }}</span>
          <span class="dir" :class="item.dir === '위로' ? 'up' : 'down'">
            <span aria-hidden="true">{{ item.dir === '위로' ? '↑' : '↓' }}</span>
            {{ item.dir }}
          </span>
        </li>
      </ul>

      <p class="why" v-html="renderEmphasis(orientation.why)"></p>

      <!-- 다 똑같이 중요하지 않다는 것을 분명히 해 준다 -->
      <p class="priority-label">실제로 쓰는 비중</p>
      <ul class="priority">
        <li v-for="item in orientation.priority" :key="item.name" :class="item.level">
          <span class="p-name">{{ item.name }}</span>
          <span class="p-weight">{{ item.weight }}</span>
          <span class="p-when">{{ item.when }}</span>
        </li>
      </ul>

      <p class="keep">
        <span class="keep-label">이것만은</span>
        <span v-html="renderEmphasis(orientation.keep)"></span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.orientation {
  margin-bottom: 20px;
  border: 1px solid var(--accent-line);
  border-radius: 14px;
  background: var(--surface);
}

.orientation-toggle {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border: 0;
  border-radius: inherit;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.orientation-toggle:hover {
  background: var(--accent-tint);
}

.marker {
  font-size: 16px;
}

.toggle-title {
  color: var(--accent);
  font-size: 14.5px;
  font-weight: 800;
}

.chevron {
  margin-left: auto;
  color: var(--muted);
  font-size: 18px;
  line-height: 1;
}

.orientation-body {
  padding: 0 18px 20px;
}

/* 규칙 한 줄 — 이 카드에서 가장 큰 글자 */
.rule {
  margin: 0 0 12px;
  padding: 14px 16px;
  border-left: 4px solid var(--accent);
  border-radius: 0 10px 10px 0;
  background: var(--accent-tint);
  color: var(--accent);
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.lead {
  margin: 0 0 16px;
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.8;
}

/* 화물표 */
.cargo {
  display: grid;
  gap: 7px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
}

.cargo li {
  display: grid;
  grid-template-columns: 148px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

.cargo .name {
  padding: 3px 8px;
  border-radius: 6px;
  color: var(--accent);
  background: var(--accent-tint);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
  text-align: center;
}

.cargo .payload {
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.6;
}

.cargo .dir {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 700;
  white-space: nowrap;
}

.cargo .dir.down {
  color: var(--accent);
  background: var(--accent-tint);
}

.cargo .dir.up {
  color: var(--signal);
  background: var(--signal-tint);
}

.why {
  margin: 0 0 18px;
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.85;
}

/* 우선순위 */
.priority-label {
  margin: 0 0 8px;
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.priority {
  display: grid;
  gap: 6px;
  margin: 0 0 18px;
  padding: 0;
  list-style: none;
}

.priority li {
  display: grid;
  grid-template-columns: 148px 56px minmax(0, 1fr);
  gap: 12px;
  align-items: baseline;
  padding: 9px 14px;
  border-radius: 9px;
  background: var(--paper);
}

/* 지금 확실히 해야 할 것과 나중에 봐도 되는 것을 색으로 갈라 준다 */
.priority li.core {
  border: 1px solid var(--accent-line);
  background: var(--accent-tint);
}

.priority li.low {
  opacity: 0.72;
}

.p-name {
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.priority li.core .p-name {
  color: var(--accent);
}

.p-weight {
  color: var(--slate);
  font-size: 12.5px;
  font-weight: 800;
}

.p-when {
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.6;
}

/* 마지막에 남길 한 문장 */
.keep {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: baseline;
  margin: 0;
  padding: 13px 16px;
  border: 1px dashed var(--accent);
  border-radius: 10px;
  color: var(--ink);
  font-size: 14px;
  line-height: 1.75;
}

.keep-label {
  padding: 3px 9px;
  border-radius: 20px;
  color: var(--on-accent);
  background: var(--accent);
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .cargo li,
  .priority li {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .cargo .name,
  .cargo .dir {
    justify-self: start;
  }
}
</style>

<!-- v-html로 주입되는 강조라 scoped 밖에 둔다 -->
<style>
.orientation mark {
  padding: 0 2px;
  border-radius: 3px;
  color: inherit;
  background: linear-gradient(transparent 58%, var(--accent-tint) 58%);
  box-shadow: inset 0 -1px 0 var(--accent-line);
  font-weight: 700;
}

.orientation .keep code,
.orientation .why code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--accent);
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 0.9em;
}
</style>
