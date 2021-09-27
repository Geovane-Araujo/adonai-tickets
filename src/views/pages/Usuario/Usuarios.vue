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
      <Dialog :style="{width: '45vw'}" header="Cadastros De Usuarios" v-model:visible="showModal" :modal="true">
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
            <div class="col-sm-3">
              <div class="p-fluid p-field">
                <label >Telefone</label>
                <InputText v-model="form.pessoa.telefone[0].fone" type="text"/>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="p-fluid p-field">
                <label >Telefone Celular</label>
                <InputText v-model="form.pessoa.telefone[1].fone" type="text"/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="p-fluid p-field">
                <label >Telefone Email</label>
                <InputText v-model="form.pessoa.email[0].email" type="text"/>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="p-fluid p-field">
                <label >Cep</label>
                <InputText v-model="form.pessoa.endereco.cep" type="text"/>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="p-fluid p-field">
                <label >Endereço</label>
                <InputText v-model="form.pessoa.endereco.endereco" type="text"/>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="p-fluid p-field">
                <label >Numero</label>
                <InputText v-model="form.pessoa.endereco.numero" type="text"/>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-fluid p-field">
                <label >Bairro</label>
                <InputText v-model="form.pessoa.endereco.bairro" type="text"/>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-fluid p-field">
                <label >Complemento</label>
                <InputText v-model="form.pessoa.endereco.complemento" type="text"/>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-fluid p-field">
                <label >Cidade</label>
                  <div class="p-inputgroup">
                    <InputText  v-model="form.pessoa.endereco.cidade" type="text" />
                    <Button @click="onDataSearch" icon="pi pi-search"/>
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
    <div class="datasearch">
      <datasearch-ticket :onDestroy="onDestroy" ref="datasearch"/>
    </div>
  </div>
</template>

<script src="./Usuarios.js">
</script>

<style lang="scss" scoped>
.left{
  width: 20%;
}
.rigth{
  width: 80%;
}
</style>