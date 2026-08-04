import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * Code Challenge 10 — 교안 190쪽의 Counter Store.
 *
 * Setup Store 형식이다. defineStore 의 두 번째 인자로 함수를 넘기면
 * 그 안은 <script setup> 과 똑같이 쓸 수 있다.
 *
 *   ref()      → state
 *   computed() → getters
 *   function   → actions
 *
 * 마지막에 return 한 것만 바깥에서 쓸 수 있다.
 */
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
