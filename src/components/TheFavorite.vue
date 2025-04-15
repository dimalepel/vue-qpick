<script setup>
import ProductItem from "@/components/ProductItem.vue";
import {useFavoriteStore} from "@/stores/useFavoriteStore";
import {storeToRefs} from "pinia";

const favorite = useFavoriteStore()

const { favoriteProducts } = storeToRefs(favorite)
</script>

<template>
  <main class="main">
    <h1 class="page-title">Избранное</h1>
    <ul v-if="favoriteProducts.length > 0" class="product-list">
      <ProductItem v-for="product in favoriteProducts" :key="product.id" :product="product"/>
    </ul>
    <p v-else>Список пуст</p>
  </main>
</template>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
</style>
