<template>
  <div class="csa">
    <loading :active="isLoading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
    <div style="display: flex;">
      <DataTable :selection.sync="selectedProducts3" :autoLayout="true" :scrollable="true" :paginator="true" :rows="20" scrollHeight="60vh" :value="data" class="p-datatable-sm">
          <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
          <Column :headerStyle="'width:' +item.width +'%' " v-for="item in headers" :key="item.name" :field="item.name" :header="item.header"></Column>
          <Column headerStyle="width:14%">
              <template #body="slotProps">
                  <Button icon="pi pi-pencil" class="p-button-text" v-tooltip.top="'Editar'" @click="edit(slotProps)"/>
                  <Button icon="pi pi-trash" class="p-button-text" v-tooltip.top="'Excluir'" @click="edit(slotProps)"/>
              </template>
          </Column>
          <template #paginatorLeft>
            <Button type="button" icon="pi pi-refresh" class="p-button-text" />
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tooltip from 'primevue/tooltip'
import axios from 'axios'
import http from '../../router/http'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  data () {
    return {
      isLoading: false,
      data: [],
      selectedProducts3: []
    }
  },
  components: {
    Button,
    DataTable,
    Column
  },
  props: {
    headers: {
      type: Array,
      require: true
    },
    editMode: {
      type: Boolean,
      default: false
    },
    delMode: {
      type: Boolean,
      default: false
    },
    route: {
      type: Object
    }
  },
  methods: {
    getexplorer (route) {
      this.isLoading = true
      axios.post(http.url + 'explorer', route, { headers: { Authorization: sessionStorage.getItem('token') } }).then(res => {
        if (res.data.ret === 'success') {
          this.data = res.data.obj
        } else {
          this.$toast.add({ severity: 'error', summary: 'Falha', detail: res.data.motivo, life: 3000 })
        }
        this.isLoading = false
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Falha', detail: err, life: 3000 })
        this.isLoading = false
      })
    }
  },
  directives: {
    tooltip: Tooltip,
    loading: Loading
  }
}
</script>

<style lang="scss" scoped>
.p-datatable-sm{
  height: 74vh;
  font-size: 11px;
}
</style>
