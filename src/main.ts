import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import router from './router'
const app = createApp(App)

// 使用路由实例
app.use(router).mount('#app')