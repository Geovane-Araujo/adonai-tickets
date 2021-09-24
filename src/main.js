import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import tbl from './components/datatable/DataTable.vue'
import VueParticles from 'vue-particles'

import 'primevue/resources/themes/luna-pink/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/scss/app.scss'
import './assets/scss/icons.scss'

const app = createApp(App)

app.use(PrimeVue, {ripple: true})
app.use(ToastService)
app.use(VueParticles)
app.component('table-ticket', tbl)
app.use(store)
app.use(router)
app.mount('#app')
