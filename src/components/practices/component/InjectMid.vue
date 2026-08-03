<script setup>
import InjectLeaf from './InjectLeaf.vue'

// props가 하나도 없다. 이 컴포넌트는 theme의 존재조차 모른다.
// 그래서 값이 바뀌어도 여기서는 아무 일도 일어나지 않는다.
</script>

<template>
  <div class="level">
    <p class="role">부모 (Parent)</p>

    <p class="hold">
      <span class="name">props :</span>
      <span class="none">없음 (0개)</span>
    </p>
    <p class="desc">😌 값이 지나가는지도 모른다. 조용하다.</p>

    <InjectLeaf />
  </div>
</template>

<style scoped>
.level {
  padding: 14px 16px;
  border: 1px dashed var(--slate-line);
  border-radius: 10px;
  background: var(--surface);
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.role {
  margin: 0 0 10px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* 이 컴포넌트가 값을 쥐고 있는지 보여주는 칸 */
.hold {
  display: grid;
  gap: 3px;
  margin: 0 0 6px;
  padding: 9px 11px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--paper);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.hold .name {
  color: var(--faint);
  font-size: 11px;
  white-space: nowrap;
}

.hold .data {
  color: var(--signal);
  font-weight: 700;
}

.hold .none {
  color: var(--faint);
}

.desc {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 12px;
}

.level .level {
  margin-top: 0;
}
</style>
