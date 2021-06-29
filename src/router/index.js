import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DashBoard from '../views/DashBoard.vue'
import Atendimentos from '../views/Atendimentos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'DashBoard', params: { name: 'DashBoard' } },
    children: [
      {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard
      },
      {
        path: '/atendimentos',
        name: 'Atendimentos',
        component: Atendimentos
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
