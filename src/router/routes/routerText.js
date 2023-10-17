const routerTextIndex = () => import('../../views/router-text/index.vue')

export default {
  path: '/routerTest',
  name: 'routerTextIndex',
  component: routerTextIndex,
  children: [
    {
      path: '',
      name: 'routerIndex',
      component: () => import('../../views/router-text/children/page1.vue')
    },
    {
      path: 'page2',
      name: 'routerPage2',
      component: () => import('../../views/router-text/children/page2.vue')
    },
    {
      path: 'page3/:id',
      name: 'routerPage3',
      component: () => import('../../views/router-text/children/page3.vue')
    }
  ]
}