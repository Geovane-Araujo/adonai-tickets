<template>
  <div style="margin-top: 15px">
    <h4>Clientes</h4>
    <div class="table">
      <Button label="Adicionar" icon="pi pi-check" class="p-button-text p-button-info" @click="open()"/>
      <datatable ref="table" :route="route" :headers="headers"></datatable>
    </div>
    <form-cliente ref="show"></form-cliente>
  </div>
</template>

<script>
import Button from 'primevue/button'
export default {
  data () {
    return {
      route: {
        filters: '',
        paging: 1,
        orders: 'ORDER BY ID DESC',
        router: 'mnu_cliente'
      },
      headers: [
        {
          width: 10,
          name: 'id',
          header: 'ID'
        },
        {
          width: 40,
          name: 'nome',
          header: 'Nome'
        },
        {
          width: 20,
          name: 'endereco',
          header: 'Endereco'
        },
        {
          width: 20,
          name: 'bairro',
          header: 'Bairro'
        },
        {
          width: 20,
          name: 'numero',
          header: 'numero'
        },
        {
          width: 20,
          name: 'cidade',
          header: 'Cidade'
        },
        {
          width: 10,
          name: 'uf',
          header: 'Uf'
        }
      ]
    }
  },
  mounted () {
    this.$refs.table.getexplorer(this.route)
  },
  methods: {
    // estes 3 metodos tm que existir em todos os arquivos .vue
    open () {
      this.$refs.show.openModal()
    },
    getById (id) {
    },
    destroy (params) {
    }
  },
  components: {
    Button
  }
}
</script>
<style lang="scss" scoped>
.table{
  height: 74vh;
}
.p-button-text{
  font-size: 13px;
}
</style>
