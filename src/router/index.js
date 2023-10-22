
import { createRouter, createWebHistory } from 'vue-router'

import routerText from './routes/routerText.js'
import demos from './routes/demos.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/three',
      component: () => import('../views/three/index.vue')
    },
    {
      path: '/ts',
      component: () => import('../views/ts/index.vue')
    },
    {
      path: '/vuexTest',
      component: () => import('../views/vuex_pinia/vuex.vue')
    },
    {
      path: '/piniaTest',
      component: () => import('../views/vuex_pinia/pinia.vue')
    },
    demos,
    routerText
  ]
})
export default router