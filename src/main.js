import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueParticlesBg from 'particles-bg-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueParticlesBg)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

new Vue({ 
  router,
  store,
  render: h => h(App),
}).$mount('#app')
