import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cursos from '../views/Cursos.vue'
import Carreira from '../views/Carreira.vue'
import Perfil from '../views/Perfil.vue'
import Api from '../views/Api.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Carreira',
    name: 'Carreira',
    component: Carreira
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/Cursos',
    name: 'Cursos',
    component: Cursos
  },
  {
    path: '/Api',
    name: 'Api',
    component: Api
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
