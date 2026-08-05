<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 227쪽 Code Challenge — 삭제 확인창과 진행률.
 *
 * 두 가지가 한 화면에 있는 이유가 있다.
 * ElMessageBox 는 "확인은 then, 취소는 catch" 라는 Promise 갈래를 보여 주고,
 * el-progress 는 setInterval 을 반드시 정리해야 한다는 것을 보여 준다.
 * 둘 다 안 지키면 조용히 새는 코드가 된다 — 화면에는 아무 표시도 안 난다.
 */

const items = ref(['월간 보고서.pdf', '회의록.docx', '예산안.xlsx'])
const downloadProgress = ref(0)
const isDownloading = ref(false)

/** setInterval 이 돌려준 번호. 이걸 들고 있어야 나중에 멈출 수 있다 */
let timer = null

const logs = ref([])
const add = (text, tone = 'plain') => logs.value.push({ id: logs.value.length, text, tone })

/**
 * 교안의 handleDelete 와 같은 모양이다.
 * ElMessageBox.confirm 은 Promise 를 돌려준다 — 확인은 then, 취소는 catch 다.
 */
const handleDelete = (name) => {
  ElMessageBox.confirm(`'${name}' 을(를) 정말 삭제하시겠습니까?`, '삭제 확인', {
    confirmButtonText: '삭제',
    cancelButtonText: '취소',
    type: 'warning',
  })
    .then(() => {
      items.value = items.value.filter((item) => item !== name)
      ElMessage.success('삭제되었습니다.')
      add(`then — '${name}' 삭제됨`, 'ok')
    })
    .catch(() => {
      // catch 를 빼먹으면 취소할 때마다 Unhandled Promise Rejection 경고가 뜬다
      ElMessage.info('삭제를 취소했습니다.')
      add('catch — 취소를 눌렀다', 'plain')
    })
}

const startDownload = () => {
  if (isDownloading.value) return

  isDownloading.value = true
  downloadProgress.value = 0
  add('setInterval 시작 — 300ms 마다 20씩', 'wait')

  timer = setInterval(() => {
    downloadProgress.value += 20

    if (downloadProgress.value >= 100) {
      downloadProgress.value = 100

      // 여기서 멈추지 않으면 100 을 넘어 계속 돌면서 값을 밀어 올린다
      clearInterval(timer)
      timer = null

      isDownloading.value = false
      ElMessage.success('다운로드가 완료되었습니다.')
      add('clearInterval — 100 도달, 타이머 정리', 'ok')
    }
  }, 300)
}

const resetAll = () => {
  clearInterval(timer)
  timer = null
  downloadProgress.value = 0
  isDownloading.value = false
  items.value = ['월간 보고서.pdf', '회의록.docx', '예산안.xlsx']
  logs.value = []
}

/**
 * 실습을 접거나 다른 챕터로 옮겨 가도 타이머는 살아 있다.
 * 컴포넌트가 사라질 때 반드시 정리한다.
 */
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section class="practice-card">
    <h2>
      Element Plus — 삭제 확인과 진행률
      <ConceptHelp
        text="ElMessageBox.confirm()은 확인·취소 버튼이 있는 모달을 띄우고 Promise를 돌려줍니다. 확인을 누르면 then, 취소를 누르면 catch로 갑니다. el-progress는 percentage에 0~100 숫자를 주면 막대가 찹니다. setInterval로 값을 올릴 때는 100에서 clearInterval로 반드시 멈춰야 합니다."
      />
    </h2>

    <!-- 삭제 확인 -->
    <div class="area">
      <h3>ElMessageBox <small>확인은 then, 취소는 catch</small></h3>
      <el-card shadow="never">
        <ul v-if="items.length" class="files">
          <li v-for="name in items" :key="name">
            <span class="f-name">{{ name }}</span>
            <el-button type="danger" size="small" plain @click="handleDelete(name)">
              삭제
            </el-button>
          </li>
        </ul>
        <p v-else class="all-gone">파일을 모두 지웠습니다. 아래 초기화로 되돌릴 수 있습니다.</p>
      </el-card>
      <p class="hint-line">
        확인도 눌러 보고 <b>취소도 눌러 보세요.</b> 취소 쪽이 catch 로 간다는 것이 이 문법의
        전부입니다.
      </p>
    </div>

    <!-- 진행률 -->
    <div class="area">
      <h3>el-progress <small>setInterval 은 반드시 멈춰야 한다</small></h3>
      <el-card shadow="never">
        <el-progress
          :percentage="downloadProgress"
          :status="downloadProgress === 100 ? 'success' : undefined"
          :stroke-width="14"
        />
        <div class="dl-actions">
          <el-button type="primary" :loading="isDownloading" @click="startDownload">
            {{ isDownloading ? '다운로드 중…' : '다운로드 시작' }}
          </el-button>
          <el-button @click="resetAll">초기화</el-button>
        </div>
      </el-card>
    </div>

    <!-- 기록 -->
    <div v-if="logs.length" class="area">
      <h3>기록</h3>
      <ul class="logs">
        <li v-for="log in logs" :key="log.id" :class="log.tone">
          <span class="dot" aria-hidden="true" />
          <span>{{ log.text }}</span>
        </li>
      </ul>
    </div>

    <p class="note">
      <b>타이머는 스스로 멈추지 않습니다.</b> 100 에서
      <code>clearInterval</code> 을 부르지 않으면 값이 120, 140 으로 계속 올라가고, 이 실습을 닫아도
      뒤에서 계속 돕니다. 그래서
      <code>onBeforeUnmount</code> 에서도 한 번 더 정리합니다.
    </p>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

h3 small {
  color: var(--faint);
  font-size: 11px;
  font-weight: 500;
}

.area + .area {
  margin-top: 20px;
}

.files {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.files li {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 9px 4px;
}

.files li + li {
  border-top: 1px solid var(--line);
}

.f-name {
  color: var(--ink-soft);
  font-size: 13px;
}

.all-gone {
  margin: 0;
  padding: 14px 0;
  color: var(--faint);
  font-size: 12.5px;
  text-align: center;
}

.hint-line {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.dl-actions {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

/* 기록 */
.logs {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.logs li {
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink-soft);
  font-size: 12.5px;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--line-strong);
}

.logs li.wait .dot {
  background: var(--slate);
}

.logs li.ok .dot {
  background: var(--accent);
}

.note {
  margin: 20px 0 0;
  padding: 13px 16px;
  border: 1px dashed var(--accent);
  border-radius: 10px;
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.8;
}

.note code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

:deep(.el-card) {
  border-color: var(--line);
  border-radius: 12px;
  background: var(--surface);
}

:deep(.el-button--primary) {
  --el-button-bg-color: var(--accent);
  --el-button-border-color: var(--accent);
  --el-button-hover-bg-color: var(--accent);
  --el-button-hover-border-color: var(--accent);
}
</style>
