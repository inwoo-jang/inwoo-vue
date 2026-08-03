<script setup>
/**
 * 구멍 세 개짜리 껍데기.
 * 이 파일은 "카드가 어떻게 생겼는지"만 알고, 안에 무엇이 들어오는지는 전혀 모른다.
 */
</script>

<template>
  <div class="base-card">
    <!-- 부모가 #header를 안 채우면 이 줄이 대신 나온다 -->
    <div class="slot-zone head">
      <slot name="header">
        <span class="fallback">header 구멍 (비어 있음)</span>
      </slot>
    </div>

    <div class="slot-zone body">
      <slot>
        <span class="fallback">기본 구멍 (비어 있음)</span>
      </slot>
    </div>

    <div class="slot-zone foot">
      <slot name="footer">
        <span class="fallback">footer 구멍 (비어 있음)</span>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.base-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
}

.slot-zone {
  padding: 12px 14px;
}

.head {
  border-bottom: 1px solid var(--line);
  background: var(--paper);
}

.foot {
  border-top: 1px solid var(--line);
  background: var(--paper);
}

.body {
  min-height: 58px;
}

/* 채워지지 않은 구멍임을 눈에 보이게 */
.fallback {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}
</style>
