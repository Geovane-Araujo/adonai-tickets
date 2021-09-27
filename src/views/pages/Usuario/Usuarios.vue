<template>
  <div class="fasecrecimento">
    <loading class="loading" :active="isLoading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
    <div style="margin-bottom: 20px">
      <p class="title-page">Cadastros De Usuarios</p>
    </div>
    <div class="grid">
      <table-ticket classname="fases_crecimento" :onGetById="onGetById" :columns="fields" ref="datagrid"/>
    </div>
    <div>
      <Dialog :style="{width: '40vw'}" header="Cadastros De Usuarios" v-model:visible="showModal" :modal="true">
          <div class="row">
            <div class="col-sm-3">
              <div class="p-col-12 p-md-4">
                <circle-avatar :url_local_image="urlimage" :url_local_upload="urlupload" v-on:update="onUpdate($event)" :imagem="imagem"/>
              </div>
            </div>
            <div class="col-sm-9 row">
              <div class="col-sm-7">
                <div class="p-fluid p-field">
                  <label >Nome</label>
                  <InputText v-model="form.pessoa.nome" type="text"/>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="p-fluid p-field">
                  <label >Data Nascimento</label>
                  <Calendar v-model="form.pessoa.datanascimento" dateFormat="dd/mm/yy" :monthNavigator="true" :yearNavigator="true" yearRange="1960:2022"/>
                </div>
              </div>
              <div class="col-sm-7">
                <div class="p-fluid p-field">
                  <label >Login</label>
                  <InputText v-model="form.login" type="text"/>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="p-fluid p-field">
                  <label >Senha</label>
                  <InputText v-model="form.senha" type="text"/>
                </div>
              </div>
            </div>
          </div>
        <template #footer>
          <Button label="Salvar" @click="onValidate"/>
          <Button label="Calcelar" @click="showModal=false" autofocus/>
      </template>
      </Dialog>
    </div>
  </div>
</template>

<script>
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
    onUpdate(e){
      this.imagem = e
    }
  }
}
</script>

<style lang="scss" scoped>
.left{
  width: 20%;
}
.rigth{
  width: 80%;
}
</style>