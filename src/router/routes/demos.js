export default  {
    path: '/demo',
    name: 'demo',
    children: [
      {
        path: '/demo/rain',
        name: 'rain',
        component: () => import('../../views/blblDemo/rain.vue')
      }
    ]
  }