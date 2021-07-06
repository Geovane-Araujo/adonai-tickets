<template>
  <div>
    <Dialog class="p-dialog p-dialog-content p-dialog-title" header="Cadastro de Clientes" :visible.sync="show" :style="{width: resize + 'vw'}" :modal="true">
      <TabView class="hed">
          <TabPanel header="Principal">
            <div class="row" style=" height: 20vh;">
              <div class="col-sm-2">
                <div class="p-d-flex p-jc-center">
                  <img :src="form.foto" width="90" height="90" class="rounded-circle" alt="img">
                </div>
                <div class="p-d-flex p-jc-center">
                  <label for='selecao-arquivo' class="inputtype"><i class="pi pi-search" style="color: #0008ff;"></i></label>
                  <input id='selecao-arquivo'  @change="getImg"  accept="image/*" type='file'>
                  <label @click="form.foto=''" class="inputtype"><i class="pi pi-check" style="color: #f22c61;"></i></label>
                </div>
              </div>
              <div class="col-sm-10">
                <div class="row">
                  <div class="col-sm-7">
                    <div class="mb-3">
                      <label for="1" class="form-label" style="margin-bottom: 3px">Nome</label>
                      <input type="text" v-model="form.nome" class="form-control"  id="1">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Endereços">
          </TabPanel>
          <TabPanel header="Telefones/Emails">
          </TabPanel>
      </TabView>
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
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import util from '../../util/Util'
export default {
  data () {
    return {
      resize: 60,
      show: false,
      form: {
        add: true,
        edit: false,
        dele: false,
        id: '',
        nome: '',
        foto: '',
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
          idpessoa: ''
        },
        telefone: [
          {
            id: '',
            telefone: '',
            tipo: ''
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
      console.log(this.resize)
      this.show = true
    },
    getImg (e) {
      var file = e.target.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = e => {
        this.form.foto = e.target.result
      }
    }
  },
  components: {
    Dialog,
    Button,
    TabView,
    TabPanel
  }
}
</script>

<style lang="scss" scoped>
.hed{
  font-size: 13px;
}
.disp{
  display: flex;
}
.p-dialog-title{
  font-size: 13px;
}
.p-dialog-content{
  font-size: 13px;
}
.p-button-text{
  font-size: 13px;
}
input[type='file'] {
  display: none
}
.inputtype {
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  height: 20px;
  width: 30px;
}
</style>
