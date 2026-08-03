<script setup>
import { ref } from 'vue'
import CodeWindow from './CodeWindow.vue'
import { findAssignmentSource, findAssignmentPath } from '../assignments'
import { renderEmphasis } from '../../utils/highlight'

/**
 * 결과물 아래에 붙는 해부도.
 * "화면 하나 = 파일 4개"가 어떻게 맞물려 도는지, 특히 이벤트가 오가는 경로를 보여준다.
 */
defineProps({
  anatomy: { type: Object, required: true },
})

/** 이름에 확장자가 이미 있으면 그대로, 없으면 컴포넌트이므로 .vue를 붙인다 */
const fileLabel = (name) => (name.includes('.') ? name : `${name}.vue`)

// 코드 새 창
const openFile = ref('')
const showCode = (file) => (openFile.value = file)
const closeCode = () => (openFile.value = '')
</script>

<template>
  <div class="anatomy">
    <p class="intro">{{ anatomy.intro }}</p>

    <!-- ── 1. 컴포넌트 구조 ── -->
    <p class="section">컴포넌트 구조</p>

    <div v-for="root in anatomy.tree" :key="root.name" class="tree">
      <!-- 부모 -->
      <div class="node owner">
        <div class="node-head">
          <code class="node-name">{{ fileLabel(root.name) }}</code>
          <span class="node-role">{{ root.role }}</span>
          <button type="button" class="code-link" @click="showCode(root.file)">코드 보기</button>
        </div>

        <p v-if="root.state?.length" class="state">
          <span class="state-label">가진 데이터</span>
          <code v-for="item in root.state" :key="item">{{ item }}</code>
        </p>
        <p class="node-note">{{ root.note }}</p>

        <!-- 자식들 -->
        <ul class="children">
          <li
            v-for="child in root.children"
            :key="child.name"
            class="node child"
            :class="{ nested: child.under }"
          >
            <p v-if="child.under" class="under">
              <span aria-hidden="true">↳</span> {{ child.under }} 안에서 쓰입니다
            </p>
            <div class="node-head">
              <code class="node-name">{{ fileLabel(child.name) }}</code>
              <span class="node-role">{{ child.role }}</span>
              <button type="button" class="code-link" @click="showCode(child.file)">
                코드 보기
              </button>
            </div>

            <!-- 받는 것 / 올리는 것 -->
            <div class="wires">
              <div class="wire down">
                <p class="wire-head"><span aria-hidden="true">↓</span> 받는다 (props)</p>
                <p v-if="!child.props.length" class="none">없음</p>
                <ul v-else>
                  <li v-for="prop in child.props" :key="prop.name">
                    <code>:{{ prop.name }}</code>
                    <span class="as">→ {{ prop.as }} ({{ prop.type }})</span>
                    <span class="wire-desc">{{ prop.desc }}</span>
                  </li>
                </ul>
              </div>

              <div class="wire up">
                <p class="wire-head"><span aria-hidden="true">↑</span> 올린다 (emits)</p>
                <p v-if="!child.emits.length" class="none">없음</p>
                <ul v-else>
                  <li v-for="ev in child.emits" :key="ev.name">
                    <code>@{{ ev.name }}</code>
                    <span class="as">{{ ev.payload }}</span>
                    <span class="wire-desc">{{ ev.desc }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <p class="node-note">{{ child.note }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- ── 2. 이벤트 흐름 ── -->
    <p class="section">이벤트가 오가는 길</p>

    <div class="flows">
      <div v-for="flow in anatomy.flows" :key="flow.title" class="flow">
        <p class="flow-title">{{ flow.title }}</p>
        <ol class="steps">
          <li v-for="(step, i) in flow.steps" :key="i" :class="step.dir">
            <span class="arrow" aria-hidden="true">
              {{ step.dir === 'up' ? '↑' : step.dir === 'down' ? '↓' : '●' }}
            </span>
            <span class="who">{{ step.who }}</span>
            <code class="what">{{ step.label }}</code>
            <span class="step-desc">{{ step.desc }}</span>
          </li>
        </ol>
      </div>
    </div>

    <p class="point" v-html="renderEmphasis(anatomy.point)"></p>

    <CodeWindow
      v-if="openFile"
      :path="findAssignmentPath(openFile)"
      :code="findAssignmentSource(openFile)"
      @close="closeCode"
    />
  </div>
</template>

<style scoped>
.anatomy {
  padding-top: 4px;
}

.intro {
  margin: 0 0 20px;
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.85;
}

.section {
  margin: 0 0 10px;
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

/* ── 구조 ── */
.node {
  border-radius: 12px;
}

.node.owner {
  padding: 14px 16px;
  border: 2px solid var(--accent-line);
  background: var(--paper);
}

.node-head {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: center;
  margin-bottom: 8px;
}

.node-name {
  padding: 3px 9px;
  border-radius: 6px;
  color: var(--accent);
  background: var(--accent-tint);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.node-role {
  color: var(--muted);
  font-size: 12px;
}

.code-link {
  margin-left: auto;
  padding: 4px 11px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: var(--surface);
  color: var(--slate);
  cursor: pointer;
  font-size: 11.5px;
  font-weight: 700;
}

.code-link:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.state {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  margin: 0 0 8px;
}

.state-label {
  color: var(--faint);
  font-size: 11px;
  font-weight: 700;
}

.state code,
.node-note code {
  padding: 2px 7px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.node-note {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.75;
}

/* 자식 목록 — 왼쪽 선으로 소속을 보여준다 */
.children {
  margin: 14px 0 0;
  padding: 0 0 0 16px;
  border-left: 2px dashed var(--line-strong);
  list-style: none;
}

.children > li + li {
  margin-top: 10px;
}

.node.child {
  padding: 12px 14px;
  border: 1px solid var(--line);
  background: var(--surface);
}

/* 손자 — 한 단계 더 들어간 것을 들여쓰기로 보여준다 */
.node.child.nested {
  margin-left: 18px;
  border-style: dashed;
}

.under {
  margin: 0 0 8px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
}

/* 받는 것 / 올리는 것 */
.wires {
  display: grid;
  gap: 8px;
  margin-bottom: 10px;
}

.wire {
  padding: 9px 12px;
  border-radius: 9px;
}

.wire.down {
  background: var(--accent-tint);
}

.wire.up {
  background: var(--signal-tint);
}

.wire-head {
  margin: 0 0 6px;
  font-size: 11.5px;
  font-weight: 800;
}

.wire.down .wire-head {
  color: var(--accent);
}

.wire.up .wire-head {
  color: var(--signal);
}

.wire ul {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.wire li {
  display: grid;
  gap: 2px;
}

.wire code {
  justify-self: start;
  padding: 2px 7px;
  border-radius: 5px;
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 700;
}

.wire .as {
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 11px;
}

.wire-desc {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
}

.none {
  margin: 0;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

/* ── 이벤트 흐름 ── */
.flows {
  display: grid;
  gap: 12px;
  margin-bottom: 18px;
}

.flow {
  padding: 14px 16px;
  border: 1px solid var(--slate-line);
  border-radius: 12px;
  background: var(--surface);
}

.flow-title {
  margin: 0 0 12px;
  color: var(--ink);
  font-size: 13.5px;
  font-weight: 800;
}

.steps {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: step;
}

.steps li {
  display: grid;
  grid-template-columns: 20px minmax(0, auto) minmax(0, 1fr);
  gap: 4px 10px;
  align-items: baseline;
  padding: 9px 12px;
  border-radius: 9px;
  background: var(--paper);
}

/* 방향을 색으로 — 올라가면 주황, 내려가면 초록, 부모 내부 처리는 회색 */
.steps li.up {
  box-shadow: inset 3px 0 0 var(--signal);
}

.steps li.down {
  box-shadow: inset 3px 0 0 var(--accent);
}

.steps li.own {
  box-shadow: inset 3px 0 0 var(--slate);
}

.arrow {
  font-size: 13px;
  font-weight: 800;
  text-align: center;
}

.steps li.up .arrow {
  color: var(--signal);
}

.steps li.down .arrow {
  color: var(--accent);
}

.steps li.own .arrow {
  color: var(--slate);
}

.who {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 700;
  white-space: nowrap;
}

.what {
  font-family: var(--font-mono);
  font-size: 11.5px;
  overflow-wrap: anywhere;
}

.step-desc {
  grid-column: 2 / -1;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.65;
}

.point {
  margin: 0;
  padding: 13px 16px;
  border-left: 3px solid var(--accent);
  border-radius: 0 10px 10px 0;
  background: var(--accent-tint);
  color: var(--ink-soft);
  font-size: 13px;
  line-height: 1.8;
}

@media (min-width: 720px) {
  .wires {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }

  .flows {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}
</style>

<!-- v-html로 주입되는 강조라 scoped 밖에 둔다 -->
<style>
.anatomy mark {
  padding: 0 2px;
  border-radius: 3px;
  color: inherit;
  background: linear-gradient(transparent 58%, var(--surface) 58%);
  box-shadow: inset 0 -1px 0 var(--accent);
  font-weight: 700;
}
</style>
