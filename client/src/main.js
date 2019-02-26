import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'

import Nav from './components/nav'
import Login from './components/login'
import Register from './components/register'

//tell vue to use the router
Vue.use(VueRouter)

//define your routes
const routes = [
  {path: '/', component: Nav},
  {path: '/login', component: Login},
  {path: '/register', component: Register}
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

