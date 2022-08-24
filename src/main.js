import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入路由实例
import router from './router/router.js'
// 引入pinia 实例
import pinia from './pinia/pinia.js'

createApp(App).use(pinia).use(router).mount('#app')