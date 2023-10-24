import { createApp } from 'vue'
import App from './App.vue'


import Antd from 'ant-design-vue';//ant-design
import 'ant-design-vue/dist/reset.css';//ant-design携带css文件


import { createPinia } from 'pinia' //测试pinia
import store from './store'


import router from './router' //路由

const app = createApp(App)
app.use(router).use(createPinia()).use(store).use(Antd).mount('#indexApp')