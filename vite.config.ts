import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  root: './website',
  base: repositoryName ? `/${repositoryName}/` : './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
