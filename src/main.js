import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import DataTable from './components//DataTable/DataTable.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import VueTheMask from 'vue-the-mask'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/scss/app.scss'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/fluent-light/theme.css'
import './globalcomponents'

Vue.config.productionTip = false
Vue.component('datatable', DataTable)
Vue.use(PrimeVue, { ripple: true })
Vue.use(ToastService)
Vue.use(VueTheMask)
/* Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts) */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
