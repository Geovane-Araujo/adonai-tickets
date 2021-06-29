<template>
  <div>
    <div class="row">
    </div>
    <div class="table-responsive table-overflow">
      <DataTable :scrollable="true" :paginator="true" :rows="10" scrollHeight="50vh" :value="produtos" class="p-datatable-sm">
          <Column field="id" header="Code"></Column>
          <Column field="nome" header="Name"></Column>
          <Column field="idade" header="Category"></Column>
          <Column field="funcao" header="Quantity"></Column>
          <template #paginatorLeft>
            <Button type="button" icon="pi pi-refresh" class="p-button-text" />
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
// import Paginator from 'primevue/paginator'
// import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
export default {
  data () {
    return {
      produtos: [
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        },
        {
          id: 1,
          nome: 'Geovae',
          idade: 25,
          funcao: 'Dev'
        }
      ]
    }
  },
  components: {
    // Paginator,
    // InputText,
    Button,
    DataTable,
    Column
  }
}
</script>

<style lang="scss" scoped>
.table-overflow {
  max-height:76vh;
  overflow-y:auto;
}
thead, tbody{
  display: block;
}
tbody{
  overflow-y: scroll;
  height: 58vh;
}
.table th,
.table td {
  padding: 5px;
  width:20%;
}
</style>
