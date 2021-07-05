import Vue from 'vue'
import App from './App.vue'
import './components/components'

Vue.prototype.$hub = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
