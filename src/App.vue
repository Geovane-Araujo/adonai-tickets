<template>
  <div id="app">
    <router-view/>
    <Toast position="top-left"/>
  </div>
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
body{
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
  font-size: 12px;
}
</style>
