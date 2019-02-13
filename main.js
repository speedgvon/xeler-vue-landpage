import Vue from 'vue'
import App from './App.vue'
import './assets/estilos/bootstrap.css'
import './assets/estilos/font-awesome.min.css'

const $ = require('jquery')
const jQuery = require('jquery')
window.$ = $
window.jQuery = jQuery
import './assets/estilos/style.css'
// eslint-disable-next-line
let bootstrap = require('bootstrap')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
