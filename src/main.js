import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueParticlesBg from 'particles-bg-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueParticlesBg)
Vue.config.productionTip = false

new Vue({ 
  router,
  store,
  render: h => h(App),
}).$mount('#app')
