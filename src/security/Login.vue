<template>
  <div class="login">
    <loading :active="isLoading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
    <div class="cardlogin">
      <div class="mb-3 img">
        <img src="../assets/img/avatar.png" alt="">
      </div>
      <div class="mb-3">
        <label for="cnpjcpf" class="form-label" style="margin-bottom: 3px">CNPJ/CPF</label>
        <the-mask
          type="text" v-model="form.cnpj"
          the-mask :mask="['###.###.###-##', '##.###.###/####-##']"
          class="form-control" id="cnpjcpf"/>
      </div>
      <div class="mb-3">
        <label for="cnpjcpf" class="form-label" style="margin-bottom: 3px">Usuário</label>
        <input type="text" v-model="form.login" class="form-control"  id="cnpjcpf">
      </div>
      <div class="mb-3">
        <label for="isenha" class="form-label" style="margin-bottom: 3px">Senha</label>
        <input type="password" v-model="form.senha" class="form-control" id="isenha">
      </div>
      <div class="mb-2">
        <button type="button" @click="login(form)" class="btn btn-light w-100">Login</button>
      </div>
      <div class="mb-0">
        <button type="button" class="btn btn-dark w-100">Esqueci minha Senha</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import http from '../router/http'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
      isLoading: false,
      form: {
        cnpj: '',
        login: '',
        senha: ''
      }
    }
  },
  methods: {
    login (form) {
      this.isLoading = true
      axios.post(http.url + 'login', form).then(res => {
        if (res.data.ret === 'success') {
          sessionStorage.setItem('token', res.data.token)
          this.$router.push({ name: 'DashBoard' })
        } else {
          this.$toast.add({ severity: 'error', summary: 'Falha', detail: res.data.motivo, life: 3000 })
        }
        this.isLoading = false
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Falha', detail: err, life: 3000 })
        this.isLoading = false
      })
    },
    to () {
      // this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 })
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
.login{
  background-image: url('../assets/img/paisagem.jpg');
  height: 100vh;
  width: 100vw;
  display: flex;
  vertical-align: middle;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.cardlogin{
  padding: 10px;
  width: 400px;
  background-color:#F7F7F7;
  border-radius: 10px;
}
.img{
  text-align: center;
}
</style>
