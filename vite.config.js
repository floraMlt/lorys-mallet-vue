import {plugin as mdPlugin, Mode} from 'vite-plugin-markdown';

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    mdPlugin({ 
      mode: [Mode.HTML, Mode.VUE] 
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
