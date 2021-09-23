import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Dashboard' },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/pages/Dashboard.vue')
      },
      {
        path: '/atendimento',
        name: 'Atendimento',
        component: () => import('../views/pages/Atendimentos.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
