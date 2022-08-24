import { createRouter, createWebHashHistory } from 'vue-router'

//router/index.js
const routes = [
  { name: '首頁', path: '/', component: () => import('../pages/Home.vue')},
  { name: '關於', path: '/about', component: () => import('../pages/About.vue')}  
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes //路由表
})

export default router