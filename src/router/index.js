import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'
import Cart from '../views/TheCart.vue'
import Favorites from '../views/TheFavorites.vue'
import Order from "@/views/TheOrder.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/favorites', component: Favorites },
  { path: '/order', component: Order },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
