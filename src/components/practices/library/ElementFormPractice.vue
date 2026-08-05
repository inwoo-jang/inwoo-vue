<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 225쪽 Code Challenge — Element Plus 회원가입 폼.
 *
 * el-input · el-switch 는 태그로 쓰지만 ElMessage 는 태그가 아니라 함수다.
 * 이 차이가 이 챕터에서 가장 자주 걸리는 지점이라, 화면에도 그대로 적어 뒀다.
 */

const userForm = reactive({
  email: '',
  agree: false,
})

/** 어떤 검증이 걸렸는지 눈에 남겨 둔다. 알림은 3초면 사라지기 때문이다 */
const history = ref([])

const record = (type, text) =>
  history.value.unshift({ id: history.value.length, type, text })

const submit = () => {
  // 순서가 중요하다. 이메일부터 보고, 통과하면 약관을 본다
  if (!userForm.email.includes('@')) {
    ElMessage.error('올바른 이메일 형식이 아닙니다.')
    record('error', 'ElMessage.error — @ 가 없다')
    return
  }

  if (!userForm.agree) {
    ElMessage.warning('약관에 동의해야 가입할 수 있습니다.')
    record('warning', 'ElMessage.warning — 약관 미동의')
    return
  }

  ElMessage.success(`${userForm.email} 님, 가입이 완료되었습니다.`)
  record('success', 'ElMessage.success — 통과')
}

const reset = () => {
  userForm.email = ''
  userForm.agree = false
  history.value = []
}
</script>

<template>
  <section class="practice-card">
    <h2>
      Element Plus — 회원가입 폼
      <ConceptHelp
        text="el-input·el-switch는 템플릿에 태그로 쓰는 컴포넌트이고, ElMessage는 태그가 아니라 import해서 호출하는 함수입니다. 화면 오른쪽 위에 잠깐 떴다 사라지는 알림을 띄웁니다. success·warning·error·info 네 종류가 있습니다."
      />
    </h2>

    <div class="area">
      <el-card shadow="never" class="form-card">
        <template #header>
          <span class="card-title">회원가입</span>
        </template>

        <div class="field">
          <label for="ep-email">이메일</label>
          <el-input
            id="ep-email"
            v-model="userForm.email"
            placeholder="you@example.com"
            clearable
          />
        </div>

        <div class="field row">
          <label for="ep-agree">약관 동의</label>
          <el-switch id="ep-agree" v-model="userForm.agree" />
          <span class="state">{{ userForm.agree ? '동의함' : '동의 안 함' }}</span>
        </div>

        <div class="actions">
          <el-button type="primary" @click="submit">가입하기</el-button>
          <el-button @click="reset">초기화</el-button>
        </div>
      </el-card>
    </div>

    <!-- 지금 상태 -->
    <div class="area">
      <h3>userForm <small>reactive 객체 안이 이렇게 바뀐다</small></h3>
      <pre class="state-box">{{ { email: userForm.email, agree: userForm.agree } }}</pre>
    </div>

    <!-- 알림 기록 -->
    <div class="area">
      <h3>알림 기록 <small>화면 알림은 3초면 사라지므로 여기 남긴다</small></h3>
      <ul v-if="history.length" class="history">
        <li v-for="item in history" :key="item.id" :class="item.type">
          <span class="tag">{{ item.type }}</span>
          <span>{{ item.text }}</span>
        </li>
      </ul>
      <p v-else class="hint">
        빈 칸으로 한 번, <code>@</code> 없이 한 번, 약관을 끈 채로 한 번 — 세 갈래를 모두 눌러
        보세요.
      </p>
    </div>

    <p class="note">
      <b>ElMessage 는 태그가 아닙니다.</b> 템플릿에 <code>&lt;el-message /&gt;</code> 를 적는 것이
      아니라 <code>import { ElMessage } from 'element-plus'</code> 로 가져와 함수처럼 호출합니다.
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

.form-card {
  max-width: 460px;
}

.card-title {
  font-size: 14.5px;
  font-weight: 700;
}

.field {
  display: grid;
  gap: 7px;
  margin-bottom: 16px;
}

.field.row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.field label {
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 600;
}

.state {
  color: var(--faint);
  font-size: 12px;
}

.actions {
  display: flex;
  gap: 8px;
}

.state-box {
  margin: 0;
  padding: 13px 16px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 12px;
}

/* 기록 */
.history {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.history li {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink-soft);
  font-size: 12.5px;
}

.tag {
  padding: 3px 0;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 700;
  text-align: center;
}

.history li.success .tag {
  color: var(--on-accent);
  background: var(--accent);
}

.history li.warning .tag {
  color: var(--slate);
  background: var(--surface);
}

.history li.error .tag {
  color: #fff;
  background: var(--signal);
}

.hint {
  margin: 0;
  padding: 16px 0;
  color: var(--faint);
  font-size: 12.5px;
  text-align: center;
}

.hint code,
.note code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
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

/* 라이브러리 기본 색을 이 사이트 토큰에 맞춘다 */
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

:deep(.el-switch.is-checked .el-switch__core) {
  border-color: var(--accent);
  background-color: var(--accent);
}
</style>
