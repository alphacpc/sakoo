import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';
import Cart from '../views/Cart.vue';
import Favorites from '../views/Favorites.vue';
import Auth from '../views/auth/Login.vue';
import Signup from '../views/auth/Signup.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component: Favorites
  },
  {
    path: '/panier',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/:name',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/auth',
    name: 'Login',
    component: Auth
  },
  {
    path: '/inscription',
    name: 'Signup',
    component: Signup
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
