import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],optimizeDeps: {
    include: ['your-dependency'], // Replace with the actual dependency name
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
