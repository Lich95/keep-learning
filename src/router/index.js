
import { createRouter, createWebHistory } from 'vue-router'

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
      path: '/demo',
      name: 'demo',
      children: [
        {
          path: '/demo/rain',
          name: 'rain',
          component: () => import('../views/blblDemo/rain.vue')
        }
      ]
    },
  ]
})
export default router