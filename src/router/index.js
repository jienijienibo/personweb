import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/welcome.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome
  }
]

const router = new VueRouter({
  routes
})

export default router
