import Vue from 'vue'
import app from './App.vue'
import { Header } from 'mint-ui'
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header)

new Vue({
  render: h => h(app)
}).$mount('#app')
