import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deployment.
// Using a RELATIVE base ('./') makes all asset paths resolve correctly
// no matter what the repository is called, so the site works at:
//   https://<username>.github.io/website/
// and would keep working even if the repo were renamed later.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1500,
  },
})
