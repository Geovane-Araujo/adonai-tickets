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
            },
            {
              id: 2,
              title: 'Olá sou um alerta',
              route: '',
              body: 'Dia 19 de Abril'
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
            route: '/',
            type: 0,
            show: false
          },
          {
            nome: 'Agenda',
            icon: 'far fa-calendar-alt',
            route: '/',
            type: 0,
            show: false
          },
          {
            nome: 'Cadastros',
            icon: 'far fa-address-card',
            route: '',
            type: 1,
            show: false,
            sub: [
              {
                nome: 'Pessoas',
                icon: 'far fa-chart-bar',
                route: ''
              },
              {
                nome: 'Produtos',
                icon: 'far fa-chart-bar',
                route: '',
                show: true
              },
              {
                nome: 'Tabelas',
                icon: 'far fa-chart-bar',
                route: '/',
                show: true
              }
            ]
          },
          {
            nome: 'Financeiro',
            icon: 'far fa-money-bill-alt',
            route: '/',
            show: true,
            type: 1,
            sub: [
              {
                nome: 'Caixas',
                icon: 'far fa-chart-bar',
                route: '',
                show: true
              },
              {
                nome: 'Receitas',
                icon: 'far fa-chart-bar',
                route: '/',
                show: false
              },
              {
                nome: 'Despesas',
                icon: 'far fa-chart-bar',
                route: '/',
                show: false
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
