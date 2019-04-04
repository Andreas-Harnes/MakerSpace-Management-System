import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Nav from './components/nav'
import Login from './components/login'
import Register from './components/register'
import Header from './components/header'
import body from './components/body'
import header from './components/header'
import test from './components/test'

//tell vue to use bootstrap
Vue.use(BootstrapVue)

// tell vue to use the router
Vue.use(VueRouter)

//d efine your routes
const routes = [
  { path: '/', component: Nav },
  { path: '/header', component: Header },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/body' , component: body},
  { path: '/test' , component: test}
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')

new Vue({
  store,
  render: h => h(header),
  router
}).$mount('#header')