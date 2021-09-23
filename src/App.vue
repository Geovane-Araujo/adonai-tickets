<template>
  <router-view/>
  <Toast position="top-left" group="tl"/>
</template>
<script>
import Toast from 'primevue/toast'
export default {
  components: {
    Toast
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic&display=swap');
html{
  font-size: 11px;
}
*{
  margin: 0px;
  padding: 0px;
}
body{
  font-size: 12px;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  background-image: url('./assets/img/background/fundo2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
#app {
  font-family: 'IBM Plex Sans Arabic', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
