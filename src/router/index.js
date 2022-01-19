import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';
import Cart from '../views/Cart.vue';
import Favorites from '../views/Favorites.vue';
import Auth from '../views/auth/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favories',
    name: 'Favories',
    component: Favorites
  },
  {
    path: '/panier',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/auth',
    name: 'Login',
    component: Auth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
