import { defineStore } from 'pinia'
import {ref, watch} from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartProducts = ref([])

  const savedCart = sessionStorage.getItem('cart')

  if (savedCart) {
    try {
      cartProducts.value = JSON.parse(savedCart)
    } catch (e) {
      console.error('Ошибка при парсинге корзины из sessionStorage', e)
    }
  }

  const updateSessionCart = () => {
    sessionStorage.setItem('cart', JSON.stringify(cartProducts.value))
  }

  const addToCart = (product) => {
    const existing = cartProducts.value.find(entry => entry.item.id === product.id)

    if (existing) {
      existing.qty += 1
    } else {
      cartProducts.value.push({
        id: Date.now(),
        item: product,
        qty: 1
      })
    }
    //sessionStorage.setItem('cart', JSON.stringify(cartProducts.value))
    updateSessionCart()
  }

  watch(cartProducts, (newCart) => {
    sessionStorage.setItem('cart', JSON.stringify(newCart))
  }, { deep: true })

  const totalQty = () => {
    return cartProducts.value.reduce((sum, product) => sum + product.qty, 0)
  }

  const totalSum = () => {
    return cartProducts.value.reduce((sum, product) => sum + (product.qty * product.item.price), 0)
  }

  const removeItemCart = (id) => {
    cartProducts.value = cartProducts.value.filter(product => product.id !== id)
    //sessionStorage.setItem('cart', JSON.stringify(cartProducts.value))
    updateSessionCart()
  }

  const updateCartItem = (id, action = 'down') => {
    const product = cartProducts.value.find(p => p.id === id)
    if (!product) return

    if (action === 'down') {
      if (product.qty <= 1) {
        removeItemCart(id)
        return
      }
      product.qty -= 1
    } else {
      product.qty += 1
    }

    //sessionStorage.setItem('cart', JSON.stringify(cartProducts.value))
    updateSessionCart()
  }

  return {
    cartProducts,
    addToCart,
    totalQty,
    totalSum,
    removeItemCart,
    updateCartItem
  }
})
