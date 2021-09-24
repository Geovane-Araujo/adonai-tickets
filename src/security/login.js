import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import Password from 'primevue/password'
import axios from 'axios'
import http from '../router/http'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
      showLoading: false,
      form: {
        doc: '00000000000000',
        nome: 'admin',
        senha: '1234',
        token: ''
      }
    }
  },
  components: {
    Button,
    Loading,
    InputText,
    InputMask,
    Password
  },
  methods: {
    async login () {
      this.showLoading = true
      await axios.post(http.url + 'login', this.form).then(res => {
        if (res.data.ret === 'success') {
          sessionStorage.setItem('token', res.data.obj.token)
          sessionStorage.setItem('user', res.data.obj.nome)
          this.$router.push('dashboard')
        } else {
          this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: res.data.motivo, life: 3000 })
        }
        this.showLoading = false
      }).catch(err => {
        this.showLoading = false
        this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: err, life: 3000 })
      })
    }
  }
}
