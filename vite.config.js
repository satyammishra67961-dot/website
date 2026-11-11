import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deployment base path.
// Repository name: webb-makerr  ->  https://<username>.github.io/webb-makerr/
// If you rename the repository, update BASE_PATH below to '/<new-repo-name>/'.
// For a root user site (username.github.io), use '/'.
const BASE_PATH = '/webb-makerr/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
  },
})
