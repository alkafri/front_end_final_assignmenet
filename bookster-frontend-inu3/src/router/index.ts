/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file contains all necessary routers.
*/

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signUp.vue')
  },
  {
    path: '/booklistguest',
    name: 'booklistguest',
    component: () => import( '../views/bookList.vue')
  },
  {
    path: '/booklistuser',
    name: 'booklistuser',
    component: () => import('../views/bookListUser.vue')
  },
  {
    path: '/booklistadmin',
    name: 'booklistadmin',
    component: () => import('../views/bookListAdmin.vue')
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
