<script setup>
import ProductItem from '@/components/ProductItem.vue'
import {onMounted, ref, watch} from 'vue'
import axios from "axios";
import {useFavoriteStore} from "@/stores/useFavoriteStore.js";
import {storeToRefs} from "pinia";

const allProducts = ref([])
const products = ref([])

const favorite = useFavoriteStore()

const { favoriteProducts } = storeToRefs(favorite)

onMounted(async () => {
  try {
    const res = await axios.get('https://f6c4889c93430217.mokky.dev/items')
    products.value = res.data
  } catch (err) {
    console.log(err)
  }
})
watch([products, favoriteProducts], () => {
  allProducts.value = products.value.reduce((acc, product) => {
    const foundCategory = acc.find(item => item.category === product.category);
    const find = favoriteProducts.value.find(p => p.id === product.id)

    let updateProduct = product;

    if (find) {
      updateProduct = {
        ...find,
        favorite: true,
      }
    }

    if (foundCategory) {
      foundCategory.products.push(updateProduct);
    } else {
      acc.push({
        id: acc.length + 1,
        category: product.category,
        products: [updateProduct]
      });
    }
    return acc;
  }, []);
}, {deep: true})
</script>

<template>
  <main class="main">
    <div v-if="allProducts.length === 0" class="loader">
      Загрузка...
    </div>
    <div v-else>
      <div v-for="group in allProducts" :key="group.id">
        <h2 class="category-title">{{ group.category }}</h2>
        <ul class="product-list">
          <ProductItem v-for="product in group.products" :key="product.id" :product="product"/>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
.category-title {
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #838383;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
</style>
