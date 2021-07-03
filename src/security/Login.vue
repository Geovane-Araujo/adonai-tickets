<template>
  <div class="login">
    <div class="cardlogin">
      <div class="mb-3 img">
        <img src="../assets/img/avatar.png" alt="">
      </div>
      <div class="mb-3">
        <label for="cnpjcpf" class="form-label" style="margin-bottom: 3px">CNPJ/CPF</label>
        <the-mask
          type="text"
          the-mask :mask="['###.###.###-##', '##.###.###/####-##']"
          class="form-control" id="cnpjcpf"/>
      </div>
      <div class="mb-3">
        <label for="cnpjcpf" class="form-label" style="margin-bottom: 3px">Usuário</label>
        <input type="text" class="form-control"  id="cnpjcpf">
      </div>
      <div class="mb-3">
        <label for="isenha" class="form-label" style="margin-bottom: 3px">Senha</label>
        <input type="password" class="form-control" id="isenha">
      </div>
      <div class="mb-2">
        <button type="button" class="btn btn-light w-100">Login</button>
      </div>
      <div class="mb-0">
        <button type="button" class="btn btn-dark w-100">Esqueci minha Senha</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.login{
  background-color: brown;
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
  background-color: antiquewhite;
  border-radius: 10px;
}
.img{
  text-align: center;
}
</style>
