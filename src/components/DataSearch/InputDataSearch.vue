<template>
  <div class="mb-3">
    <div>
      <label for="dsff" class="form-label" style="margin-bottom: 3px">{{ name }}</label>
      <div class="input-group">
        <input id="dsff" type="text" v-model="model" class="form-control"  aria-label="Input group example" >
        <button type="button" @click="datasearch()" class="btn btn-outline-secondary"><i class="pi pi-search" style="color: #0008ff;"></i></button>
      </div>
    </div>
    <div>
      <datasearch :title="title" :cabecalho="headers" :destroy="destroy" ref="expl"/>
    </div>
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
      },
      model: '',
      keyy: ''
    }
  },
  methods: {
    datasearch () {
      this.explorerflex.router = this.route
      this.explorerflex.orders = 'ORDER BY ID DESC'
      this.$refs.expl.dataSearch(this.explorerflex)
    },
    destroy (values, ky) {
      this.model = values
      this.$emit('rsKey', ky)
      this.$emit('rsValue', values)
    }
  },
  props: {
    route: {
      type: String
    },
    values: {
      type: String
    },
    ky: {
      type: Number
    },
    name: {
      type: String
    },
    headers: {
      type: Array
    },
    title: {
      type: String
    },
    rsKey: Function,
    rsValue: Function
  }
}
</script>

<style lang="scss" scoped>

</style>
