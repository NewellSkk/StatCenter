import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // When a request starts with '/api', it will be forwarded to the backend server.
      '/api': {
        target: 'http://localhost:8000',  // Backend server URL
        changeOrigin: true,
        secure: false,  // If you're not using HTTPS, set this to false
        rewrite: (path) => path.replace(/^\/api/, ''),  // Optionally rewrite the URL
      },
    },
  },
})
