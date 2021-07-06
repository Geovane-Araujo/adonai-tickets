<template>
  <div class="mb-3">
    <label for="2f" class="form-label" style="margin-bottom: 3px">{{ name }}</label>
    <div class="input-group">
      <input id="2f" type="text" v-model="value" class="form-control"  aria-label="Input group example" >
      <button type="button" class="btn btn-outline-secondary"><i class="pi pi-search" style="color: #0008ff;"></i></button>
    </div>
    <datasearch :title="title"
    :cabecalho="headers"
    :form="form"
    :destroy="destroy"
    ref="expl"/>
  </div>
</template>

<script>
export default {
  name: 'inputdatasearch',
  data () {
    return {
      explorerflex: {
        filters: '',
        paging: 1,
        orders: 'ORDER BY ID DESC',
        router: 'mnu_cliente'
      }
    }
  },
  methods: {
    datasearch () {
      this.explorerflex.router = this.route
      this.explorerflex.orders = 'ORDER BY ID DESC'
      // this.$refs.expl.dataSearch(this.explorerflex)
    },
    destroy (value, key) {
      this.value = value
      this.key = key
    }
  },
  props: {
    route: {
      type: String
    },
    value: {
      type: String
    },
    key: {
      type: Object
    },
    name: {
      type: String
    },
    headers: {
      type: Array
    },
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
