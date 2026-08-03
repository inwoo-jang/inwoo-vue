<script setup>
import { ref } from 'vue'

/**
 * 목록 컴포넌트.
 * "무엇을 반복할지"(데이터·v-for)는 내가 책임지고,
 * "각 항목을 어떻게 그릴지"는 부모에게 통째로 맡긴다.
 */
const items = ref([
  { id: 1, name: '노트북 거치대', price: 32000, stock: 12 },
  { id: 2, name: '기계식 키보드', price: 89000, stock: 0 },
  { id: 3, name: 'USB-C 허브', price: 45000, stock: 3 },
])
</script>

<template>
  <ul class="list">
    <li v-for="item in items" :key="item.id">
      <!-- 항목 하나를 통째로 부모에게 넘긴다. 부모가 v-slot으로 받아 원하는 모양으로 그린다 -->
      <slot :item="item">
        <span class="fallback">{{ item.name }} (부모가 그리는 방법을 정하지 않음)</span>
      </slot>
    </li>
  </ul>
</template>

<style scoped>
.list {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.list li {
  padding: 9px 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--surface);
}

.fallback {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}
</style>
