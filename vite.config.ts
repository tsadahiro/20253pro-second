import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/20253pro-second/', // ★ GitHubリポジトリ名に置き換えてください
  build: {
    outDir: 'docs', // 出力先を 'docs' に変更
  },
})
