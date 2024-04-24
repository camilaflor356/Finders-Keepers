import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Homepage.vue'
import FindersKeepers from '../Pages/FindersKeepers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/finderskeepers',
      name: 'FindersKeepers',
      component: FindersKeepers
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
