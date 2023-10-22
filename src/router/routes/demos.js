export default  {
    path: '/demo',
    name: 'demo',
    children: [
      {
        path: '/demo/rain',
        name: 'rain',
        component: () => import('../../views/blblDemo/rain.vue')
      },
      {
        path: '/demo/menuStyle',
        name: 'menuStyle',
        component: () => import('../../views/blblDemo/menuInteractive.vue')
      },
    ]
  }