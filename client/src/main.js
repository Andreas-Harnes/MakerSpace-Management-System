import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Nav from './components/nav'
import login from './components/login'
import register from './components/register'
import header from './components/header'
import body from './components/body'
import footer from './components/footer'

// import header from './components/header'
import test from './components/test'
import forgotten_password from './components/forgotten_password'
import faq from './components/faq'
import tos from './components/tos'
import privacy_policy from './components/privacy_policy'
import settings from './components/settings'
import item from './components/item'

//tell vue to use bootstrap
Vue.use(BootstrapVue)

// tell vue to use the router
Vue.use(VueRouter)

//d efine your routes
const routes = [
  { path: '/', component: body },
  { path: '/header', component: header },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/test' , component: test},
  { path: '/forgotten' , component: forgotten_password},
  { path: '/faq' , component: faq},
  { path: '/privacy' , component: privacy_policy},
  { path: '/tos' , component: tos},
  { path: '/settings' , component: settings},
  { path: '/item' , component: item},
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

// new Vue({
//   store,
//   render: h => h(footer),
//   router
// }).$mount('#footer')