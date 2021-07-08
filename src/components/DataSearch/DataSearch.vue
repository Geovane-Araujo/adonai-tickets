<template>
    <div class="cargodts">
      <loading class="loading" :active="openloading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
      <Dialog :header="title" :visible.sync="openDatasearch" :style="{width: '40vw'}" :modal="true">
          <div class="mb-3">
            <label for="ds2f" class="form-label" style="margin-bottom: 3px">Buscar</label>
            <input type="text" v-model="contexto" @keyup="getexplorer(contexto)" class="form-control"  id="ds2f">
          </div>
          <DataTable selectionMode="single" @row-select="onRowSelect" :selection.sync="itens" :scrollable="true" :paginator="true" :rows="20" scrollHeight="200px" :value="data" class="p-datatable-sm">
            <Column headerStyle="width: 2rem" bodyStyle="height:5px;" v-for="itcabe in cabecalho" :field="itcabe" :header="itcabe" :key="itcabe.ID"></Column>
          </DataTable>
        <template #footer>
          <Button label="Cancelar" @click="openDatasearch=false" class="p-button-raised p-button-success p-button-text button"/>
        </template>
      </Dialog>
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'
import http from '../../router/http'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

export default {
  name: 'datasearch',
  data () {
    return {
      openloading: false,
      data: [],
      itens: [],
      resize: 40,
      contexto: '',
      params: ''
    }
  },
  methods: {
    dataSearch (explorer) {
      this.onResize()
      this.openloading = true
      this.openDatasearch = true
      axios.post(http.url + 'explorer', explorer, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') } }).then(res => {
        if (res.data.ret === 'success') {
          this.data = res.data.obj
        } else {
          this.$toast.add({ severity: 'error', summary: 'Falha', detail: res.data.motivo, life: 3000 })
        }
        this.openloading = false
        this.openDatasearch = true
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Falha', detail: err, life: 3000 })
      })
    },
    dataSearchOuther (explorer, params) {
      this.onResize()
      this.openloading = true
      this.openDatasearch = true
      axios.post(http.url + 'explorer', explorer, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') } }).then(res => {
        if (res.data.ret === 'success') {
          this.data = res.data.obj
          this.params = params
        } else {
          this.$toast.add({ severity: 'error', summary: 'Falha', detail: res.data.motivo, life: 3000 })
        }
        this.openloading = false
        this.openDatasearch = true
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Falha', detail: err, life: 3000 })
      })
    },
    getexplorer (crit) {
      if (this.criterio === '') {
        this.criterio = this.cabecalho[1]
      }
      if (crit.length > 2 || crit === '') {
        this.onRoute()
        this.expl.criterios = ' AND ' + this.criterio + ' iLike unaccent(\'%' + crit + '%\') ORDER BY ID DESC'
        axios.post(http.url + 'aexplorer', this.expl, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') } }).then(res => {
          if (res.data.ret === 'success') {
            this.registros = res.data.obj
            this.totalRows = res.data.totalRows
          } else {
            this.$toast.add({ severity: 'error', summary: 'Falha', detail: res.data.motivo, life: 3000 })
          }
        }).catch(err => {
          this.$toast.add({ severity: 'error', summary: 'Falha', detail: err, life: 3000 })
        })
      }
    },
    onPage (event) {
      event.page += 1
      // this.expl.pagina = event.page
      // this.dataSearch(this.expl)
    },
    onRowSelect (event) {
      this.openDatasearch = false
      if (this.params !== '') {
        this.destroy(event.data, this.params)
      } else {
        if (event.data.descricao !== undefined) {
          this.destroy(event.data.descricao, event.data.id)
        } else {
          this.destroy(event.data.nome, event.data.id)
        }
      }
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.resize = 100
      } else {
        this.resize = 100
      }
    }
  },
  components: {
    Dialog,
    Button,
    DataTable,
    Column,
    Loading
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cabecalho: {
      type: Array,
      required: true
    },
    explorerflex: {
      type: Object
    },
    newchurch: {
      type: String,
      default: ''
    },
    openDatasearch: {
      type: Boolean,
      default: false
    },
    destroy: Function
  }
}
// <input-datasearch :ky="form.endereco.idcidade" name="Cidade" :values="form.endereco.cidade" :headers="['id', 'nome', 'uf']" title="cidades" route="expl_cidades" @rsKey="form.endereco.idcidade = $event" @rsValue="form.endereco.cidade = $event"/>
</script>

<style lang="scss" scoped>
.p-dialog{
  overflow: auto;
}
.p-datatable-sm{
  font-size: 11px;
}
.datasearch {
  height: 100vh;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  margin: 5px;
}
#loading {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 9999;
  left: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.7);
}
</style>
