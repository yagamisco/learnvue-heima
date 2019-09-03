import Vue from 'vue'
import app from './App.vue'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router'

Vue.component(Header.name, Header)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Swipe.name, Swipe)

new Vue({
  render: h => h(app),
  router: router
}).$mount('#app')
