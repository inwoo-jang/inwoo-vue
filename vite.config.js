import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages는 https://inwoo-jang.github.io/inwoo-vue/ 처럼 하위 경로로 서비스된다.
  // 개발 중에는 루트여야 하므로 빌드할 때만 하위 경로를 붙인다.
  base: command === 'build' ? '/inwoo-vue/' : '/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
