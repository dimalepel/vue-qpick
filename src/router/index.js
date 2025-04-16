import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'
import Cart from '../views/TheCart.vue'
import Favorites from '../views/TheFavorites.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/favorites', component: Favorites },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
