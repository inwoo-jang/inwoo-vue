<template>
  <div class="base-card">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
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
