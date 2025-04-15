<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import {ref, provide, onMounted} from 'vue'

const cartProducts = ref([])

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

  sessionStorage.setItem('cart', JSON.stringify(cartProducts.value))
}

onMounted(() => {
  const savedCart = sessionStorage.getItem('cart')
  if (savedCart) {
    try {
      cartProducts.value = JSON.parse(savedCart)
    } catch (e) {
      console.error('Ошибка при парсинге корзины из sessionStorage', e)
    }
  }

  // Предоставляем cartProducts и addToCart всем потомкам
  provide('cartProducts', cartProducts)
  provide('addToCart', addToCart)
})
</script>

<template>
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<style scoped>

</style>
