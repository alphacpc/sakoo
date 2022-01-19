import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Single from '../pages/Single.vue';
import Auth from '../pages/auth/Login.vue';
import Favorite from '../pages/Favorite';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/single',
    name: 'Single',
    component: Single
  },
  {
    path: '/auth',
    name: 'Login',
    component: Auth
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
