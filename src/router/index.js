
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
    demos,
    routerText
  ]
})
export default router