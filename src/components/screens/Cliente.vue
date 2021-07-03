<template>
  <div>
    <Dialog class="p-dialog p-dialog-content p-dialog-title" header="Cadastro de Clientes" :visible.sync="show" :style="{width: '60vw'}" :modal="true">
      sdds
      <template #footer>
          <Button label="Salvar" icon="pi pi-check" class="p-button-text p-button-success"/>
          <Button label="Cancelar" icon="pi pi-times" class="p-button-text p-button-danger" @click="show=false"/>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    openModal () {
      this.show = true
    }
  },
  components: {
    Dialog,
    Button
  }
}
</script>

<style lang="scss" scoped>
.p-dialog-title{
  font-size: 13px;
}
.p-dialog-content{
  font-size: 13px;
}
.p-button-text{
  font-size: 13px;
}
</style>
