<template>
<div>
  <div class="home">
    <Sidebar :side="side"/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/SideBar/NavBar.vue'

export default {
  name: 'Home',
  data () {
    return {
      side: {
        home: {
          show: true,
          route: '/dashboard'
        },
        mensagens: {
          show: false,
          msg: []
        },
        alert: {
          show: true,
          msg: [
            {
              id: 1,
              title: 'Olá sou um alerta',
              route: '',
              body: 'Dia 15 de Abril'
            }
          ]
        },
        config: {
          show: true,
          route: '/dashboard'
        },
        menu: [
          {
            nome: 'DashBoard',
            icon: 'far fa-chart-bar',
            route: '/dashboard',
            type: 0,
            show: false
          },
          {
            nome: 'Atendimentos',
            icon: 'far fa-calendar-alt',
            route: '/atendimentos',
            type: 0,
            show: false
          },
          {
            nome: 'Cadastros',
            icon: 'far fa-address-card',
            type: 1,
            show: true,
            sub: [
              {
                nome: 'Clientes',
                icon: 'far fa-chart-bar',
                route: '/clientes'
              },
              {
                nome: 'Atendentes',
                icon: 'far fa-chart-bar',
                route: '',
                show: true
              },
              {
                nome: 'Status',
                icon: 'far fa-chart-bar',
                route: '/',
                show: true
              }
            ]
          }
        ]
      }
    }
  },
  components: {
    Sidebar
  },
  mounted () {
    console.log('Teste Debug')
  }
}
</script>
