import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import http from '../../../router/http'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import Calendar from 'primevue/calendar'
export default {
  data () {
    return {
      isLoading: false,
      showModal: false,
      dynamic: {
        route: 'menu_fases',
        pagging: 1,
        filters: '',
        orders: ' id desc'
      },
      imagem: '',
      urlimage: http.urlimages,
      urlupload: http.urlUpload,
      fields: [
        {
          length: 5,
          field: 'id',
          header: 'ID'
        },
        {
          length: 95,
          field: 'descricao',
          header: 'Descricao'
        }
      ],
      form: {
      }
    }
  },
  components: {
    Dialog,
    InputText,
    Button,
    Loading,
    Calendar
  },
  mounted () {
    // this.onGetDynamic()
  },
  methods: {
    onGetById (id) {
      this.isLoading = true
      axios.get(http.url + 'usuario?id=' + id).then(res => {
        if (res.data.ret === 'success') {
          this.form = res.data.obj
        } else {
          this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: res.data.motivo, life: 3000 })
        }
        this.showModal = true
        this.isLoading = false
      }).catch(err => {
        this.isLoading = false
        this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: err, life: 3000 })
      })
    },
    onSave (form) {
      axios.post(http.url + 'fasescrecimento', form).then(res => {
        if (res.data.ret === 'success') {
          this.$toast.add({ severity: 'success', summary: 'Estufa+', detail: 'Salvo com sucesso!!!', life: 3000 })
        } else {
          this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: res.data.motivo, life: 3000 })
        }
        this.showModal = false
        this.onGetDynamic()
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: err, life: 3000 })
      })
    },
    onValidate () {
      if (this.form.descricao === '') {
        this.$toast.add({ severity: 'warn', summary: 'Estufa+', detail: 'Descricao não pode ficar em branco', life: 3000 })
      } else {
        this.onSave(this.form)
      }
    },
    onGetDynamic () {
      this.isLoading = true
      this.$refs.datagrid.getAll(this.dynamic)
      // this.isLoading = false
    },
    onDataSearch () {
      var dynamic = {
        route: 'expl_cidades',
        pagging: 1,
        filters: '',
        orders: ' id desc'
      }
      this.$refs.datasearch.getAll(dynamic, 'cidade', 0)
    },
    onDestroy (obj) {
      this.form.pessoa.endereco.cidade = obj.nome
      this.form.pessoa.endereco.uf = obj.uf
      this.form.pessoa.endereco.idcidade = obj.id
    },
    onUpdate(e){
      this.imagem = e
    }
  }
}
