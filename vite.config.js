import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePages } from 'vite-pages'
import { VitePluginSitemap } from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePages(),
    VitePluginSitemap({
      hostname: 'https://catalystsafrica.org', // Your site URL
      changefreq: 'weekly',
      priority: 0.7,
      exclude: ['/404'] // Example of excluding routes
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
