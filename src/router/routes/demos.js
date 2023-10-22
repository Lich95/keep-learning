export default  {
    path: '/demo',
    name: 'demo',
    children: [
      {
        path: '/demo/rain',
        name: 'rain',
        component: () => import('../../views/blblDemo/rain.vue')
      },{
        path: '/demo/mobileNav',
        name: 'mobileNav',
        component: () => import('../../views/blblDemo/mobileNav.vue')
      },
    ]
  }