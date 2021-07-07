<template>
  <div>
    <Dialog class="p-dialog p-dialog-content p-dialog-title" header="Cadastro de Colaboradores" :visible.sync="show" :style="{width: resize + 'vw'}" :modal="true">
      <TabView class="hed">
          <TabPanel header="Principal">
            <div class="row" style=" height: 20vh;">
              <div class="col-sm-2">
                <div class="p-d-flex p-jc-center">
                  <img v-bind:src="form.foto" width="90" height="90" class="rounded-circle" alt="img">
                </div>
                <div class="p-d-flex p-jc-center">
                  <label for='selecao-arquivo' class="inputtype"><i class="pi pi-search" style="color: #0008ff;"></i></label>
                  <input id='selecao-arquivo'  @change="getImg"  accept="image/*" type='file'>
                  <label @click="form.foto=''" class="inputtype"><i class="pi pi-check" style="color: #f22c61;"></i></label>
                </div>
              </div>
              <div class="col-sm-10">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label for="1f" class="form-label" style="margin-bottom: 3px">Nome</label>
                      <input type="text"  :value="form.nome"  class="form-control"  id="1f">
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="mb-3">
                      <label for="cnpjcpf" class="form-label" style="margin-bottom: 3px">CNPJ/CPF</label>
                      <the-mask
                        type="text" v-model="form.cnpjcpf"
                        the-mask :mask="['###.###.###-##', '##.###.###/####-##']"
                        class="form-control" id="cnpjcpf"/>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label for="2f" class="form-label" style="margin-bottom: 3px">RG/IE</label>
                      <input type="text" v-model="form.rgie" class="form-control"  id="2f">
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="mb-3">
                      <label for="3f" class="form-label" style="margin-bottom: 3px">Nascimento/Criação</label>
                      <input type="date" v-model="form.datanasciment" class="form-control"  id="3f">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Endereços">
            <div class="row">
              <div class="col-sm-3">
                <div class="mb-3">
                  <label for="4f" class="form-label" style="margin-bottom: 3px">Cep</label>
                  <div class="input-group">
                    <input id="4f" type="text" class="form-control"  aria-label="Input group example" >
                    <button @click="verifica()" type="button" class="btn btn-outline-secondary"><i class="pi pi-search" style="color: #0008ff;"></i></button>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <input-datasearch :ky="form.endereco.idcidade" name="Cidade" :values="form.endereco.cidade" :headers="['id', 'nome', 'uf']" title="cidades" route="expl_cidades" @rsKey="form.endereco.idcidade = $event" @rsValue="form.endereco.cidade = $event"/>
              </div>
              <div class="col-sm-6">
                <div class="mb-3">
                  <label for="5f" class="form-label" style="margin-bottom: 3px">Endereço</label>
                  <input type="text"  :value="form.endereco.endereco"  class="form-control"  id="5f">
                </div>
              </div>
              <div class="col-sm-3">
                <div class="mb-3">
                  <label for="6f" class="form-label" style="margin-bottom: 3px">Numero</label>
                  <input type="text"  :value="form.endereco.endereco"  class="form-control"  id="6f">
                </div>
              </div>
            </div>
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
          cidade: '',
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
    verifica () {
      console.log(this.form.endereco)
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
