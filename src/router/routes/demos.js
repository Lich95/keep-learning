export default  {
    path: '/demo',
    name: 'demo',
    children: [
      {
        path: '/demo/rain',
        name: 'rain',
        component: () => import('../../views/blblDEMO/rain.vue')
      },{
        path: '/demo/mobileNav',
        name: 'mobileNav',
        component: () => import('../../views/blblDEMO/mobileNav.vue')
      },
    ]
  }