<template>
  <div class="home">
    <SideBar :menuitens="menuitens"/>
  </div>
</template>

<script>
import SideBar from '../components/SideBar/SideBar.vue'
export default {
  name: 'Home',
  data () {
    return {
      menuitens: [
        {
          label: 'Dashboard',
          icon: 'ad ad-chart',
          route: 'dashboard',
        },
        {
          label: 'Atendimentos',
          icon: 'ad ad-sell',
          route: 'Atendimento',
        },
        {
          label: 'Cadastros',
          icon: 'ad ad-person',
          route: '',
          sub: [
            {
              label: 'Clientes',
              icon: '',
              subroute: ''
            },
            {
              label: 'Fornecedores',
              icon: '',
              subroute: ''
            }
          ]
        },
        {
          label: 'Relatórios',
          icon: 'ad ad-report',
          route: '',
        },
        {
          label: 'Configurações',
          icon: 'ad ad-settings',
          route: '',
          sub: [
            {
              label: 'Empresa',
              icon: '',
              subroute: ''
            },
            {
              label: 'Usuários',
              icon: '',
              subroute: 'Usuarios'
            }
          ]
        }
      ]
    }
  },
  components: {
    SideBar
  }
}
</script>
