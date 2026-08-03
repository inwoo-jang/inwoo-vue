<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// 할 일 목록. 빈 배열로 시작하며, 항목은 { id, title, done } 모양의 객체다.
const todos = ref([])

// 입력창과 양방향으로 묶일 값
const newTitle = ref('')

// 화면에 표시하지 않는 값이라 ref로 감쌀 필요가 없다.
// (ref로 감싸면 .value를 계속 붙여야 해서 오히려 번거롭다)
let nextId = 1

// 추가 — 빈 문자열이나 공백만 입력한 경우는 막는다
const addTodo = () => {
  const title = newTitle.value.trim()
  if (!title) return

  todos.value.push({ id: nextId, title, done: false })
  nextId++
  newTitle.value = '' // 입력창 비우기
}

// 완료 토글 — 배열 안 객체의 속성을 직접 바꿔도 ref가 감지한다
const toggleTodo = (todo) => {
  todo.done = !todo.done
}

// 삭제 — filter로 "그 항목만 빠진 새 배열"을 만들어 통째로 갈아 끼운다
const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

// 완료된 항목 일괄 삭제
const clearDone = () => {
  todos.value = todos.value.filter((todo) => !todo.done)
}
</script>

<template>
  <section class="practice-card">
    <h2>
      할 일 목록 — ref 배열 응용
      <ConceptHelp
        text="ref([])에 객체를 담아 목록을 관리하는 연습입니다. 추가는 push, 삭제는 filter로 새 배열을 만들어 교체합니다. 배열 안 객체의 속성(done)을 직접 바꿔도 ref가 변화를 감지해 화면이 갱신됩니다."
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
      <button @click="addTodo">추가</button>
    </div>

    <!-- 목록 -->
    <ul v-if="todos.length" class="todo-list">
      <li v-for="todo in todos" :key="todo.id" :class="{ done: todo.done }">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />
        <span class="title">{{ todo.title }}</span>
        <button class="remove" @click="removeTodo(todo.id)">삭제</button>
      </li>
    </ul>

    <!-- 목록이 비었을 때 -->
    <p v-else class="empty">아직 할 일이 없습니다. 위에서 하나 추가해 보세요.</p>

    <!-- 요약 — computed 없이 템플릿 표현식만으로 계산 -->
    <div v-if="todos.length" class="todo-foot">
      <span>
        전체 <b>{{ todos.length }}</b> ·
        남은 일 <b>{{ todos.filter((todo) => !todo.done).length }}</b> ·
        완료 <b>{{ todos.filter((todo) => todo.done).length }}</b>
      </span>
      <button @click="clearDone">완료한 항목 지우기</button>
    </div>
  </section>
</template>

<style scoped>
.todo-input {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.todo-input input {
  flex: 1;
  max-width: 320px;
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
}

/* 완료된 항목은 흐리게 + 취소선 */
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
</style>
