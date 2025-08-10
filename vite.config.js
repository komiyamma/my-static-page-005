/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/', // default
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
