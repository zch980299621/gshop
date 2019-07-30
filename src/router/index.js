import Vue from 'vue'
import VueRouter from 'vue-router'
import Miste from '../pages/Miste/Miste.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    { path: '/msite', component: Miste,meta:{ showFooter: true} },
    { path: '/order', component: Order },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search },
    { path: '/', redirect: '/msite' },
    { path: '/login', component: Login }
  ]
})
