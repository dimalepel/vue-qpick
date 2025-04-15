import { defineStore } from 'pinia'
import {ref, watch} from 'vue'

export const useFavoriteStore = defineStore('favorite', () => {
  const favoriteProducts = ref([])

  const savedFavorite = sessionStorage.getItem('favorite')

  if (savedFavorite) {
    try {
      favoriteProducts.value = JSON.parse(savedFavorite)
    } catch (e) {
      console.error('Ошибка при парсинге корзины из sessionStorage', e)
    }
  }

  const updateSessionFavorite = () => {
    sessionStorage.setItem('favorite', JSON.stringify(favoriteProducts.value))
  }

  const addToFavorite = (product) => {
    const existing = favoriteProducts.value.find(entry => entry.id === product.id)

    if (existing) {
      favoriteProducts.value = favoriteProducts.value.filter(entry => entry.id !== product.id)
    } else {
      let addedProduct = {
        ...product,
        favorite: true,
      }
      favoriteProducts.value.push(addedProduct);
    }

    updateSessionFavorite();
  }

  watch(favoriteProducts, (newFavorite) => {
    sessionStorage.setItem('favorite', JSON.stringify(newFavorite))
  }, { deep: true })

  const totalQty = () => {
    return favoriteProducts.value.length;
  }

  return {
    favoriteProducts,
    addToFavorite,
    totalQty
  }
})
