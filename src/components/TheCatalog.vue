<script setup>
import ProductItem from '@/components/ProductItem.vue'
import {onMounted, ref, watch} from 'vue'
import axios from "axios";
import {useFavoriteStore} from "@/stores/useFavoriteStore.js";
import {storeToRefs} from "pinia";

const allProducts = ref([])
//const products = ref([])

const products = [
  {
    id: 1,
    image: '../images/pic--byz-s852i.png',
    title: 'Apple BYZ S852I',
    category: 'Наушники',
    price: 2927,
    price_old: 3527,
    rating: 4.7,
  },
  {
    id: 2,
    image: '../images/pic--apple-earpods.png',
    title: 'Apple EarPods',
    category: 'Наушники',
    price: 2327,
    rating: 4.5,
  },
  {
    id: 3,
    image: '../images/pic--apple-earpods-box.png',
    title: 'Apple EarPods',
    category: 'Наушники',
    price: 2327,
    rating: 4.5,
  },
  {
    id: 4,
    image: '../images/pic--byz-s852i.png',
    title: 'Apple BYZ S852I',
    category: 'Наушники',
    price: 2927,
    rating: 4.7,
  },
  {
    id: 5,
    image: '../images/pic--apple-earpods.png',
    title: 'Apple EarPods',
    category: 'Наушники',
    price: 2327,
    rating: 4.5,
  },
  {
    id: 6,
    image: '../images/pic--apple-earpods-box.png',
    title: 'Apple BYZ S852I',
    category: 'Наушники',
    price: 2327,
    rating: 4.7,
  },
  {
    id: 7,
    image: '../images/pic--apple-airpods.png',
    title: 'Apple AirPods',
    category: 'Беспроводные наушники',
    price: 9527,
    rating: 4.7,
  },
  {
    id: 8,
    image: '../images/pic--gerlax.png',
    title: 'GERLAX GH-04',
    category: 'Беспроводные наушники',
    price: 6527,
    rating: 4.7,
  },
  {
    id: 9,
    image: '../images/pic--borofone.png',
    title: 'BOROFONE BO4',
    category: 'Беспроводные наушники',
    price: 7527,
    rating: 4.7,
  },
]

const favorite = useFavoriteStore()

const { favoriteProducts } = storeToRefs(favorite)

// onMounted(async () => {
//   try {
//     const res = await axios.get('https://f6c4889c93430217.mokky.dev/items')
//     products.value = res.data
//   } catch (err) {
//     console.log(err)
//   }
// })
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
