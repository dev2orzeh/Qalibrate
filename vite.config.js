import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api/odoo': {
        target: 'https://orzehcrm.odoo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/odoo/, '')
      }
    },
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/src/assets/**', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp']
    }
  }
})

