<script setup>
import { reactive, ref, watch } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// reactive로 선언한 빈 배열 (날씨 앱의 즐겨찾기 도시 리스트 모형)
const cityList = reactive(['서울', '수원'])

const logAuto = ref('대기 중...')
const logCopy = ref('대기 중...')

// 🟢 1) 변수명 그대로 넣기 (배열 추가/삭제 자동 추적)
watch(cityList, (newArr, oldArr) => {
  // newArr.length와 oldArr.length가 똑같이 늘어난 상태로 출력됩니다.
  logAuto.value = `[자동 감시] 배열 변동 발생! 옛날길이인척하는:${oldArr.length} / 현재길이:${newArr.length}`
})

// 🟢 2) 화살표 함수로 스냅샷(복사본)을 만들어 감시 (과거 배열 완벽 보존!)
watch(
  () => [...cityList],
  (newArr, oldArr) => {
    // 🔥 구조 분해 복사본을 감시하므로 과거 배열의 원본 데이터와 길이가 그대로 살아있습니다.
    logCopy.value = `[스냅샷 감시] 진짜 과거 길이:${oldArr.length} (데이터: ${oldArr}) ➡️ 바뀐 길이:${newArr.length}`
  },
)
</script>

<template>
  <section class="practice-card">
    <h2>
      reactive() 배열 감시 — 스냅샷 기법
      <ConceptHelp
        text="배열도 객체와 같은 함정이 있습니다. 변수명을 그대로 넘기면 이전 배열과 현재 배열이 같은 것을 가리켜 비교가 불가능합니다. 스프레드로 복사본을 만들어([...cityList]) 감시하면 과거 상태가 그대로 보존됩니다."
      />
    </h2>

    <div class="practice-area">
      <h3>즐겨찾기 도시 목록 (reactive 배열)</h3>
      <p>
        현재 등록된 도시: <strong>{{ cityList }}</strong>
      </p>
      <button @click="cityList.push('부산')">부산 추가 (push)</button>
      <button @click="cityList.pop()">최근 도시 삭제 (pop)</button>
    </div>

    <div class="monitor auto">
      <p class="monitor-title">👁️‍🗨️ 1) cityList 변수명 쌩으로 감시</p>
      <p>{{ logAuto }}</p>
      <small>※ 주의: 이전 배열과 현재 배열의 내용물·길이가 똑같이 동기화되어 버립니다.</small>
    </div>

    <div class="monitor target">
      <p class="monitor-title">🎯 2) () =&gt; [...cityList] 복사본 감시</p>
      <p>{{ logCopy }}</p>
      <small>※ 성공: 과거 배열에 들어있던 내용물이 지워지지 않고 정상 대조됩니다.</small>
    </div>
  </section>
</template>

<style scoped>
.monitor {
  margin-top: 14px;
  padding: 14px 16px;
  border: 1px solid;
  border-radius: 10px;
  font-weight: bold;
}

.monitor p {
  margin-bottom: 0;
  color: inherit;
}

.monitor-title {
  margin-top: 0;
}

.monitor small {
  display: block;
  margin-top: 8px;
  font-weight: normal;
  opacity: 0.85;
}

.auto {
  border-color: #ff7675;
  background: #fff5f5;
  color: #c0392b;
}

.target {
  border-color: #00b894;
  background: #e8f5e9;
  color: #27ae60;
}
</style>
