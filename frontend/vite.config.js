import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://project-backend-sage.vercel.app/",  //whenerever we visit /api it will be prefixed with http://localhost:5000
      }
    }
  }
})
