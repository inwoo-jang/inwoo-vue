import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  /*
   * 배포처마다 사는 자리가 다르다.
   *   GitHub Pages : https://inwoo-jang.github.io/inwoo-vue/  → 하위 경로
   *   Vercel       : https://<프로젝트>.vercel.app/            → 루트
   *   개발 서버     : http://localhost:5173/                   → 루트
   *
   * Vercel 은 빌드할 때 VERCEL 환경변수를 넣어 주므로 그걸로 가른다.
   *
   * preview 는 command 가 'serve' 지만 빌드 결과물을 그대로 띄우는 것이라
   * 빌드와 같은 base 를 써야 한다. 아니면 자산 주소가 어긋나 빈 화면이 된다.
   */
  base: (command === 'build' || isPreview) && !process.env.VERCEL ? '/inwoo-vue/' : '/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
