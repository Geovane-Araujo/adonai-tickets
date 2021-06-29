import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import DataTable from './components/DataTable.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/scss/app.scss'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'

Vue.config.productionTip = false
Vue.component('datatable-adonai', DataTable)
Vue.use(PrimeVue, { ripple: true })
Vue.use(ToastService)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
