import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    //component: HomeView
    component: () => import('../views/Login.vue')
  },
  {
    path: '/booklistguest',
    name: 'booklistguest',
    component: () => import( '../views/bookList.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signUp.vue')
  },
  {
    path: '/booklistuser',
    name: 'booklistuser',
    component: () => import('../views/bookListUser.vue')
  },
  {
    path: '/useradmin',
    name: 'useradmin',
    component: () => import('../views/userAdmin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
