<template>
<transition>
  <div class="datasearch">
      <Dialog  :header="title" :visible.sync="openDatasearch" :style="{width: resize+'vw'}" :modal="true">
        <b-form-input class="mr-sm-2" placeholder="Buscar" v-model="contexto"  @keyup="getexplorer(contexto)"></b-form-input>
        <DataTable
        class="p-datatable-sm"
        scrollHeight="200px"
        :scrollable="true"
        style="font-size:14px;"
        :value="registros"
        :paginator="true"
        :rows="15"
        :selection.sync="select"
        selectionMode="single"
        dataKey="ID"
        @row-select="onRowSelect"
        paginatorTemplate=""
        columnResizeMode="fit">
          <Column headerStyle="width: 2rem" bodyStyle="height:5px;" v-for="itcabe in cabecalho" :field="itcabe" :header="itcabe" :key="itcabe.ID"></Column>
          <template style="font-size:14px;" #paginatorLeft>
            <Paginator @page="onPage($event)" class="p-paginator-success" :rows="15" :totalRecords="totalRows"></Paginator>
          </template>
      </DataTable>
        <template #footer>
          <Button label="Cancelar"  @click="openDatasearch=false" class="p-button-raised p-button-success p-button-text button"/>
        </template>
      </Dialog>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import http from '../../router/http'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Paginator from 'primevue/paginator'

export default {
  name: 'datasearch',
  data () {
    return {
      openloading: false,
      registros: [],
      resize: 40,
      params: '',
      r: false,
      l: false,
      pagina: 1,
      contexto: '',
      criterio: '',
      extraparams: '',
      totalRows: 200,
      expl: {
        route: '',
        pagina: 1,
        criterios: ''
      }
    }
  },
  methods: {
    dataSearch (criterios, params, extraparams) {
      this.onResize()
      this.openloading = true
      axios.post(http.url + 'aexplorer', criterios, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') } }).then(res => {
        if (res.data.ret === 'success') {
          this.registros = res.data.obj
          this.expl = criterios
          this.pagina = criterios.pagina
          this.params = params
          this.extraparams = extraparams
          this.openloading = false
          this.totalRows = res.data.totalRows
          this.validate(criterios.pagina, this.registros.length)
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
    validate (paging, length) {
      if (paging === 1) {
        this.r = true
      }
      if (length < 15) {
        this.l = true
      }
    },
    onRoute () {
      if (this.expl.route === 'exp_municipio') {
        this.criterio = 'municipio.nome'
      }
    },
    onPage (event) {
      event.page += 1
      this.expl.pagina = event.page
      this.dataSearch(this.expl, this.params, this.extraparams)
    },
    /* onSelectRsgister (cabecalho) {
      this.criterio = cabecalho
      this.$toastr.success(cabecalho + ' selecionado', 'Sistema Diz:', util.toast)
    }, */
    onRowSelect (event) {
      this.openDatasearch = false
      this.destroy(event.data, this.params, this.extraparams)
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.resize = 100
      } else {
        this.resize = 40
      }
    }
  },
  components: {
    Dialog,
    Button,
    DataTable,
    Column,
    Paginator
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
    form: {
      type: Object,
      required: true
    },
    openDatasearch: {
      type: Boolean,
      default: false
    },
    newchurch: {
      type: String,
      default: ''
    },
    destroy: Function
  }
}
</script>

<style lang="scss" scoped>
.datasearch {
  border-radius: 10px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  margin: 5px;
  overflow:auto;
}
#overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1000;
  left: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.7);
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
