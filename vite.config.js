import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Use a function instead of object for manualChunks to be compatible with Vite 8+
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'framer-motion'
          if (id.includes('lucide-react')) return 'lucide'
        },
      },
    },
  },
})