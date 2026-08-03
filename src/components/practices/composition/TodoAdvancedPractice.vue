<script setup>
import { computed, nextTick, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const todos = ref([
  { id: 1, title: '장보기', done: false },
  { id: 2, title: 'Vue 복습하기', done: true },
])
const newTitle = ref('')
let nextId = 3

/* ── 1) 추가 ─────────────────────────────────────────────── */
const addTodo = () => {
  const title = newTitle.value.trim()
  // 버튼을 :disabled로 잠가도 Enter로는 들어올 수 있으니 검사는 남겨둔다
  if (!title) return

  todos.value.push({ id: nextId, title, done: false })
  nextId++
  newTitle.value = ''
}

const toggleTodo = (todo) => {
  todo.done = !todo.done
}

const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

/* ── 2) 제목 수정 ─────────────────────────────────────────── */
// 지금 수정 중인 항목의 id. null이면 아무것도 수정 중이 아니다.
const editingId = ref(null)
// 수정 중인 값. 원본과 분리해야 Esc로 되돌릴 수 있다.
const editingTitle = ref('')
// 입력창 DOM을 담아둘 자리 (포커스를 주기 위해)
const editInput = ref(null)

const startEdit = async (todo) => {
  editingId.value = todo.id
  editingTitle.value = todo.title

  // 이 시점에는 입력창이 아직 화면에 없다. 다 그려질 때까지 기다린 뒤 포커스.
  await nextTick()
  editInput.value?.focus()
}

const confirmEdit = (todo) => {
  // Enter로 확정하면 입력창이 사라지며 blur가 한 번 더 들어올 수 있다. 중복 실행 차단.
  if (editingId.value === null) return

  const title = editingTitle.value.trim()
  if (title) todo.title = title // 비어 있으면 원래 제목을 유지
  editingId.value = null
}

const cancelEdit = () => {
  editingId.value = null // 고치던 값은 버린다
}

/* ── 3) 필터와 집계 (computed) ────────────────────────────── */
const showOnlyRemaining = ref(false)

// 화면에 실제로 그릴 목록
const visibleTodos = computed(() =>
  showOnlyRemaining.value ? todos.value.filter((todo) => !todo.done) : todos.value,
)

const remainingCount = computed(() => todos.value.filter((todo) => !todo.done).length)

// 이미 계산된 computed를 재사용하면 filter를 한 번 덜 돈다
const doneCount = computed(() => todos.value.length - remainingCount.value)
</script>

<template>
  <section class="practice-card">
    <h2>
      할 일 목록 응용 2 — 잠금 · 수정 · 필터
      <ConceptHelp
        text="세 가지를 얹었습니다. ① :disabled로 빈 입력일 때 버튼 잠그기 ② 제목을 클릭해 인라인 수정(수정 중 상태를 ref로 관리) ③ computed로 필터와 집계를 옮기기. computed는 CC06에서 정식으로 배우지만 여기서 미리 써 봅니다."
      />
    </h2>

    <!-- 입력 -->
    <div class="todo-input">
      <input
        v-model="newTitle"
        type="text"
        placeholder="할 일을 입력하고 Enter"
        @keyup.enter="addTodo"
      />
      <button :disabled="!newTitle.trim()" @click="addTodo">추가</button>
    </div>

    <!-- 필터 -->
    <label class="filter">
      <input v-model="showOnlyRemaining" type="checkbox" />
      남은 일만 보기
    </label>

    <!-- 목록 -->
    <ul v-if="visibleTodos.length" class="todo-list">
      <li v-for="todo in visibleTodos" :key="todo.id" :class="{ done: todo.done }">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />

        <!-- 수정 중일 때: 입력창 -->
        <input
          v-if="editingId === todo.id"
          :ref="(el) => el && (editInput = el)"
          v-model="editingTitle"
          class="edit-input"
          @keyup.enter="confirmEdit(todo)"
          @keyup.esc="cancelEdit"
          @blur="confirmEdit(todo)"
        />

        <!-- 평소: 글자. 클릭하면 수정 모드로 -->
        <span v-else class="title" title="클릭하면 제목을 고칠 수 있습니다" @click="startEdit(todo)">
          {{ todo.title }}
        </span>

        <button @click="removeTodo(todo.id)">삭제</button>
      </li>
    </ul>

    <!-- 빈 화면은 두 가지 의미를 구분해야 한다 -->
    <p v-else-if="todos.length" class="empty">
      🎉 남은 일이 없습니다. 필터를 끄면 완료한 항목을 볼 수 있어요.
    </p>
    <p v-else class="empty">아직 할 일이 없습니다. 위에서 하나 추가해 보세요.</p>

    <!-- 집계 -->
    <div v-if="todos.length" class="todo-foot">
      <span>
        전체 <b>{{ todos.length }}</b> · 남은 일 <b>{{ remainingCount }}</b> · 완료
        <b>{{ doneCount }}</b>
      </span>
      <span class="hint">제목을 클릭 → 수정 · Enter 확정 · Esc 취소</span>
    </div>
  </section>
</template>

<style scoped>
.todo-input {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.todo-input input {
  flex: 1;
  max-width: 320px;
}

.filter {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 14px;
  color: #5f7a8c;
  font-size: 13px;
  cursor: pointer;
}

.todo-list {
  display: grid;
  gap: 7px;
  margin: 0 0 14px;
  padding: 0;
  list-style: none;
}

.todo-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border: 1px solid #e0eaf1;
  border-radius: 8px;
  background: #fbfdfe;
}

.todo-list .title {
  margin-right: auto;
  color: #37505f;
  font-size: 14px;
  cursor: pointer;
}

.todo-list .title:hover {
  text-decoration: underline dotted;
}

.edit-input {
  margin-right: auto;
  padding: 5px 8px;
  border: 1px solid #8fb9d8;
  border-radius: 6px;
  font-size: 14px;
}

.todo-list li.done {
  background: #f4f7f9;
}

.todo-list li.done .title {
  color: #9fb0bc;
  text-decoration: line-through;
}

.empty {
  padding: 18px;
  border: 1px dashed #dbe6ee;
  border-radius: 8px;
  color: #9ab0bf;
  font-size: 13.5px;
  text-align: center;
}

.todo-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid #eef3f6;
  color: #6b8497;
  font-size: 13px;
}

.todo-foot b {
  color: #1f5b81;
}

.hint {
  color: #9ab0bf;
  font-size: 12px;
}
</style>
