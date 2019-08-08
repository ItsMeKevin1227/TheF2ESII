import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import 'element-ui/lib/theme-chalk/index.css'
import { InputNumber, Select, Option } from 'element-ui'
import '@/icons'

Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Option)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
