import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/addition',
      name: 'addition',
      component: () => import('../views/AdditionView.vue')
    },
    {
      path: '/multiplication',
      name: 'multiplication',
      component: () => import('../views/MultiplicationView.vue')
    },
    {
      path: '/subtraction',
      name: 'subtraction',
      component: () => import('../views/SubtractionView.vue')
    },
    {
      path: '/division',
      name: 'division',
      component: () => import('../views/DivisionView.vue')
    }
  ]
})

export default router
