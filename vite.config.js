import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSitemap } from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSitemap({
      hostname: 'https://catalystsafrica.org', // Your site URL
      routes: [
        '/',
        '/who-we-are',
        '/what-we-do',
        '/updates',
        '/resources',
        '/join-us',
        '/contact-us',
        '/privacy-policy',
        '/test'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
