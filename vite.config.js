import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
    vitePluginCompression()
  ],
  base: '/portfolio/',
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          particles: ['tsparticles'],
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})