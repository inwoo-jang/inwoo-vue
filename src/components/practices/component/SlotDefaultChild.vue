<template>
  <div class="base-card">
    <slot>
      <p>기본 콘텐츠 영역입니다.</p>
    </slot>
  </div>
</template>

<style scoped>
.base-card {
  margin-bottom: 10px;
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
}

.role {
  margin: 0 0 10px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
