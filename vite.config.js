import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a relative base so the build works on any static host
  // (GitHub Pages project sites, Netlify, a subfolder, etc.)
  base: './',
})
