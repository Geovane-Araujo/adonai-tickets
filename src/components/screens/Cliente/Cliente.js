import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import util from '../../../util/Util'
import Avatar from 'primevue/avatar'

export default {
  data () {
    return {
      resize: 60,
      show: false,
      ds: {
        title: '',
        headers: []
      },
      form: {
        add: true,
        edit: false,
        dele: false,
        id: '',
        nome: '',
        foto: 'https://cdn.pixabay.com/photo/2017/04/21/17/11/head-2249339_960_720.jpg',
        cnpjcpf: '',
        rgie: '',
        endereco: {
          add: true,
          edit: false,
          dele: false,
          id: '',
          endereco: '',
          bairro: '',
          complemento: '',
          numero: '',
          cep: '',
          idcidade: '',
          cidade: '',
          idpessoa: ''
        },
        telefone: [
          {
            id: '',
            telefone: '',
            tipo: 1
          },
          {
            id: '',
            telefone: '',
            tipo: 2
          }
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
    openModal () {
      this.resize = util.onResize(this.resize)
      this.show = true
    },
    getImg (e) {
      var file = e.target.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = e => {
        this.form.foto = e.target.result
      }
    },
    openDatasearch (route) {
      var params = {
        route: '',
        extraparams: ''
      }
      var explorer = {
        filters: '',
        paging: 1,
        orders: 'ORDER BY ID DESC',
        router: ''
      }
      if (route === 1) {
        params.route = 1
        explorer.router = 'expl_cidades'
        this.ds.headers = ['id', 'nome', 'uf']
        this.ds.title = 'Cidades'
      }
      this.$refs.expl.dataSearchOuther(explorer, params)
    },
    destroy (data, params) {
      if (params.route === 1) {
        this.form.endereco.cidade = data.nome
        this.form.endereco.idcidade = data.id
      }
    }
  },
  components: {
    Dialog,
    Button,
    TabView,
    TabPanel,
    Avatar
  }
}
