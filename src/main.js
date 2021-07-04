import Vue from 'vue'
import App from './App.vue'
import './components/components'

const feather = require('feather-icons');
feather.replace();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
