<script setup>
import { inject } from 'vue'

// 부모를 거치지 않고 조상이 등록한 키로 직접 꺼낸다.
// 두 번째 인자는 조상이 없을 때 쓸 기본값이다.
const theme = inject('globalTheme', '(주입된 값 없음)')
</script>

<template>
  <!-- 중간을 건너뛰고 받은 값을 그대로 화면에 적용한다 -->
  <div class="level" :class="theme">
    <p class="role">자식 (Child)</p>
    <p class="named">
      <span class="name">inject('globalTheme') :</span>
      <span class="value">{{ theme }}</span>
    </p>
  </div>
</template>

<style scoped>
.level {
  padding: 14px 16px;
  border: 1px dashed var(--slate-line);
  border-radius: 10px;
  background: var(--surface);
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.role {
  margin: 0 0 10px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* 이 층에서 이 값을 부르는 이름 */
.named {
  display: grid;
  gap: 3px;
  margin: 0;
  font-family: var(--font-mono);
  font-size: 12px;
}

.named .name {
  opacity: 0.7;
  font-size: 11px;
  white-space: nowrap;
}

.named .value {
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
}

/* 주입받은 값이 실제로 화면에 적용된다 */
.level.dark-mode {
  border-style: solid;
  border-color: #2b3648;
  background: #1b2130;
  color: #cdd7e3;
}

.level.dark-mode .role {
  color: #7f93a8;
}

.level.dark-mode .value {
  color: #7ef0be;
}

.level.light-mode {
  border-style: solid;
  border-color: #e3d9b8;
  background: #fdf8e7;
  color: #6b5a2e;
}

.level.light-mode .role {
  color: #a08c5a;
}

.level.light-mode .value {
  color: #8a6d1f;
}
</style>
