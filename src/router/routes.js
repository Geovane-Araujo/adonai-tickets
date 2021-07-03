import Home from '../views/Home.vue'
import DashBoard from '../views/DashBoard.vue'
import Atendimentos from '../views/Atendimentos.vue'
import Login from '../security/Login.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default routes
