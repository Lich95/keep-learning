import { defineConfig } from 'vite'
import {resolve,dirname } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server:{
    port:7106,
    open:true,
    hmr:true,
    proxy:{
      // './api':{
      //   target:'http://1.1.1.1:', //目标地址
      //   changeOrigin:true,
      //   rewrite:(path)=>path.replace(/^\/api/,'')
      // }
    }
  },
  build:{
    rollupOptions:{
      input: {
        main: './index.html', // 用你的主文件路径替换
        mainApp: './indexApp.html', // 用你的主文件路径替换
      },
    }
  }
})
