import Vue from 'vue'
import App from './App.vue'
import './components/components'
import 'bootstrap'
import jQuery from 'jquery'
window.$ = jQuery;

Vue.prototype.$hub = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
