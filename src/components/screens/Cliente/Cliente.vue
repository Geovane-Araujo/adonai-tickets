<template>
  <div>
    <Dialog class="p-dialog p-dialog-content p-dialog-title" header="Cadastro de Colaboradores" :visible.sync="show" :style="{width: resize + 'vw'}" :modal="true">
      <TabView class="hed">
          <TabPanel header="Principal">
            <div class="row">
              <div class="col-sm-2" style="padding: 10px;">
                <div class="p-d-flex p-jc-center">
                  <Avatar :image="form.foto" size="xlarge" shape="circle"/>
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
              <div class="col-sm-3">
                <div class="mb-3">
                  <label for="res" class="form-label" style="margin-bottom: 3px">Telefone Residencial</label>
                  <the-mask
                    type="text" v-model="form.telefone[0].telefone"
                    the-mask :mask="['(##)####-####']"
                    class="form-control" id="res"/>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="mb-3">
                  <label for="cel" class="form-label" style="margin-bottom: 3px">Telefone Celular</label>
                  <the-mask
                    type="text" v-model="form.telefone[1].telefone"
                    the-mask :mask="['(##)####-####']"
                    class="form-control" id="cel"/>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-3">
                  <label for="9f" class="form-label" style="margin-bottom: 3px">Email</label>
                  <input type="text" v-model="form.email" class="form-control"  id="9f">
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Endereço">
            <div class="row">
              <div class="col-sm-3">
                <div class="mb-3">
                  <label for="4f" class="form-label" style="margin-bottom: 3px">Cep</label>
                  <div class="input-group">
                    <input id="4f" type="text" v-model="form.endereco.cep" class="form-control"  aria-label="Input group example" >
                    <button type="button" class="btn btn-outline-secondary"><i class="pi pi-search" style="color: #0008ff;"></i></button>
                  </div>
                </div>
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
                  <input type="text"  :value="form.endereco.numero"  class="form-control"  id="6f">
                </div>
              </div>
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="7f" class="form-label" style="margin-bottom: 3px">Bairro</label>
                  <input type="text"  :value="form.endereco.bairro"  class="form-control"  id="7f">
                </div>
              </div>
              <div class="col-sm-3">
                <div class="mb-3">
                  <label for="8f" class="form-label" style="margin-bottom: 3px">Complemento</label>
                  <input type="text"  :value="form.endereco.complemento"  class="form-control"  id="8f">
                </div>
              </div>
              <div class="col-sm-5">
                <div class="mb-3">
                  <label for="10f" class="form-label" style="margin-bottom: 3px">Cidade</label>
                  <div class="input-group">
                    <input id="10f" type="text" :value="form.endereco.cidade" class="form-control"  aria-label="Input group example" >
                    <button @click="openDatasearch(1)" type="button" class="btn btn-outline-secondary"><i class="pi pi-search" style="color: #0008ff;"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
      </TabView>
      <template #footer>
          <Button label="Salvar" icon="pi pi-check" class="p-button-text p-button-success"/>
          <Button label="Cancelar" icon="pi pi-times" class="p-button-text p-button-danger" @click="show=false"/>
      </template>
    </Dialog>
    <datasearch :title="ds.title" :cabecalho="ds.headers" :destroy="destroy" ref="expl"/>
  </div>
</template>

<script src="./Cliente.js">
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
