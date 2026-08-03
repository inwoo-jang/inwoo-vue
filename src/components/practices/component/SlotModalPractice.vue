<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'
import SlotModal from './SlotModal.vue'

/**
 * 더해보기 ③ 같은 모달 껍데기로 성격이 다른 창 두 개를 만든다.
 * 삭제 확인창과 안내창은 버튼 구성부터 다르지만, 모달 파일은 하나다.
 */
const openConfirm = ref(false)
const openNotice = ref(false)
const result = ref('')

const remove = () => {
  result.value = '삭제했습니다.'
  openConfirm.value = false
}
</script>

<template>
  <section class="practice-card">
    <h2>
      더해보기 ③ 모달 하나로 창 두 개
      <ConceptHelp
        text="모달 껍데기(어둡게 덮기·가운데 띄우기·닫기)는 어느 창이든 똑같습니다. 다른 건 제목·내용·버튼뿐이죠. 그래서 그 세 곳만 Named Slot으로 열어 두면, 모달 파일 하나로 확인창·안내창·입력창을 전부 만들 수 있습니다."
      />
    </h2>

    <p class="explain">
      아래 두 버튼은 <b>같은 SlotModal.vue</b>를 엽니다. 껍데기는 같고
      <code>#title</code> · 본문 · <code>#actions</code> 세 구멍만 다릅니다.
    </p>

    <!-- 모달이 이 영역 안에서만 덮이도록 기준점을 준다 -->
    <div class="stage">
      <div class="buttons">
        <button type="button" @click="openConfirm = true">삭제 확인창 열기</button>
        <button type="button" @click="openNotice = true">안내창 열기</button>
      </div>

      <p v-if="result" class="result">{{ result }}</p>

      <!-- 모달이 닫혀 있을 때 무대가 비어 보이지 않게 -->
      <p v-if="!openConfirm && !openNotice" class="hint">
        위 버튼을 눌러 보세요. 모달은 <b>이 점선 안에서만</b> 열립니다.
      </p>

      <!-- 1. 버튼 두 개짜리 확인창 -->
      <SlotModal :open="openConfirm" @close="openConfirm = false">
        <template #title><b>정말 삭제할까요?</b></template>

        <p>삭제한 항목은 되돌릴 수 없습니다.</p>

        <template #actions>
          <button type="button" @click="openConfirm = false">취소</button>
          <button type="button" class="danger" @click="remove">삭제</button>
        </template>
      </SlotModal>

      <!-- 2. #actions를 안 채워 기본 버튼이 나오는 안내창 -->
      <SlotModal :open="openNotice" @close="openNotice = false">
        <template #title><b>배포 안내</b></template>

        <p>금요일 18시에 서비스가 잠시 중단됩니다.</p>
      </SlotModal>
    </div>

    <p class="note">
      안내창은 <code>#actions</code>를 <b>채우지 않았습니다</b>. 그래서 SlotModal이 준비해 둔 기본
      <b>닫기</b> 버튼 하나만 나옵니다. 구멍마다 기본값을 넣어 두면 부모가 매번 다 채우지 않아도
      됩니다.
    </p>
  </section>
</template>

<style scoped>
.explain,
.note {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.75;
}

.note {
  margin: 14px 0 0;
  padding: 12px 14px;
  border-left: 3px solid var(--accent);
  border-radius: 0 9px 9px 0;
  background: var(--accent-tint);
  color: var(--ink-soft);
}

.explain code,
.note code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 0.92em;
}

/* 모달이 화면 전체가 아니라 이 안에서만 덮이게 하는 기준점 */
.stage {
  position: relative;
  min-height: 190px;
  padding: 16px;
  border: 1px dashed var(--line-strong);
  border-radius: 12px;
  background: var(--paper);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.result {
  margin: 12px 0 0;
  color: var(--accent);
  font-size: 13px;
  font-weight: 700;
}

.hint {
  display: grid;
  min-height: 110px;
  margin: 12px 0 0;
  color: var(--faint);
  font-size: 12.5px;
  place-items: center;
  text-align: center;
}

.danger {
  border-color: var(--signal);
  color: var(--signal);
}
</style>
