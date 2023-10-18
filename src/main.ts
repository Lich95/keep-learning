import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'


import router from './router'
const app = createApp(App)

// 使用路由实例
app.use(router).use(Antd).mount('#app')