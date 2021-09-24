import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import before from './beforeeach'

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
      },
      {
        path: '/usuarios',
        name: 'Usuarios',
        component: () => import('../views/pages/Usuarios.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../security/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(before)

export default router
