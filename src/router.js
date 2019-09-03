import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './components/tabbar/homeComponent'
import ShopComponent from './components/tabbar/shopComponent'
import SearchComponent from './components/tabbar/searchComponent'
import MemberComponent from './components/tabbar/memberComponent'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: HomeComponent },
    { path: '/member', component: MemberComponent },
    { path: '/search', component: SearchComponent },
    { path: '/shopcart', component: ShopComponent }
  ],
  linkActiveClass: 'mui-active'
})
