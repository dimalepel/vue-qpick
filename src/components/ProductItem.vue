<script setup>
import { useCartStore } from '@/stores/useCartStore'
import {useFavoriteStore} from "@/stores/useFavoriteStore.js";
const { product } = defineProps(['product'])
const cart = useCartStore()
const favorite = useFavoriteStore()

const addToCart = () => {
  cart.addToCart(product)
}

const addToFavorite = () => {
  favorite.addToFavorite(product)
}
</script>

<template>
  <li class="product-item">
    <button :class="['product-item__favorite', product.favorite ? 'product-item__favorite--active' : '']" @click="addToFavorite">
      <svg width="23" height="20" viewBox="0 0 23 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4867 1.65429C14.0706 -0.627558 18.0635 -0.551821 20.5528 1.90098C23.0409 4.35487 23.1267 8.2629 20.8124 10.812L11.4845 20L2.15892 10.812C-0.155442 8.2629 -0.068543 4.34837 2.41851 1.90098C4.90996 -0.548575 8.89519 -0.630804 11.4867 1.65429ZM18.9952 3.42979C17.3452 1.80469 14.6833 1.73869 12.9563 3.26425L11.4878 4.56044L10.0183 3.26533C8.2858 1.73761 5.62935 1.80469 3.97498 3.43195C2.33601 5.04407 2.25351 7.62455 3.76379 9.32971L11.4856 16.937L19.2075 9.3308C20.7189 7.62455 20.6364 5.04732 18.9952 3.42979Z"/>
      </svg>
    </button>
    <a href="#" class="product-item__image-wrapper">
      <img class="product-item__image" :src="product.image" alt="">
    </a>
    <div class="product-item__content">
      <h3 class="product-item__title">
        <a href="#">{{ product.title }}</a>
      </h3>
      <div class="product-item__price">
        {{ product.price }} ₽
        <span class="product-item__price-sale" v-if="product.price_old">3527 ₽</span>
      </div>
    </div>
    <div class="product-item__content product-item__content--last">
          <span class="product-item__rating">
            <img src="../assets/icon--star.svg" alt="">4.7</span>
      <button class="product-item__buy" type="button" @click="addToCart">Купить</button>
    </div>
  </li>
</template>

<style scoped>
.product-item {
  position: relative;
  width: calc((100% / 3) - 30px);
  margin: 15px;
  padding: 25px 20px 30px;
  border-radius: 30px;
  background-color: #ffffff;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, .1));
}
.product-item__favorite {
  position: absolute;
  top: 18px;
  right: 28px;
  padding-left: 0;
  padding-right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.product-item__favorite:hover svg,
.product-item__favorite--active svg {
  fill: #FFA542;
}
.product-item__image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  margin-bottom: 40px;
}
.product-item__image {
  max-width: 100%;
}
.product-item__content {
  display: flex;
  justify-content: space-between;
}
.product-item__content:not(.product-item__content--last) {
  margin-bottom: 25px;
}
.product-item__title a {
  font-size: 17px;
  line-height: 21px;
  font-weight: 600;
  color: #1C1C27;
  text-decoration: none;
}
.product-item__title a:hover {
  color: #FFA542;
}
.product-item__price {
  position: relative;
  margin-left: 16px;
  font-size: 17px;
  line-height: 21px;
  font-weight: 600;
  color: #FFA542;
  white-space: nowrap;
}
.product-item__price-sale {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  font-size: 13px;
  line-height: 16px;
  color: #FFCE7F;
  text-align: center;
  text-decoration: line-through;
}
.product-item__rating {
  display: flex;
  align-items: center;
  font-size: 17px;
  line-height: 21px;
  font-weight: 600;
  color: #838383;
}
.product-item__rating img {
  margin-right: 10px;
}
.product-item__buy {
  font-family: inherit;
  font-size: 17px;
  line-height: 21px;
  font-weight: 600;
  color: #000000;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.product-item__buy:hover {
  color: #FFA542;
}
@media (max-width: 768px) {
  .product-item {
    width: calc(50% - 30px);
  }
}
@media (max-width: 575px) {
  .product-item {
    width: calc(100% - 30px);
  }
}
</style>
