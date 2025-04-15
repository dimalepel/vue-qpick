<script setup>
import TheCounter from "@/components/TheCounter.vue";

const { product } = defineProps(['product'])
const emit = defineEmits(['removeItemCart'])

const removeFromCart = (id) => {
  console.log(id)
  emit('removeItemCart', id)
}
</script>

<template>
  <li class="cart-item">
    <button class="cart-item__remove" @click="removeFromCart(product.id)">
      <img src="../assets/icon--remove.svg" alt="">
    </button>
    <div class="cart-item__content-wrapper">
      <a href="#" class="cart-item__image-wrapper">
        <img :src="product.item.image" alt="">
      </a>
      <div class="cart-item__content">
        <h2 class="cart-item__title">
          <a href="#">{{ product.item.title }}</a>
        </h2>
        <div class="cart-item__price">{{ product.item.price }} ₽</div>
      </div>
    </div>
    <div class="cart-item__summary">
      <TheCounter :counter="product.qty" :id="product.id"/>
      <span class="cart-item__summary-price">{{ product.item.price * product.qty }} ₽</span>
    </div>
  </li>
</template>

<style scoped>
  .cart-item {
    position: relative;
    padding: 18px 30px 15px 18px;
    margin-bottom: 30px;
    background-color: #ffffff;
    border-radius: 30px;
    filter: drop-shadow(0 0 20px rgba(0, 0, 0, .1));
  }
  .cart-item__remove {
    position: absolute;
    top: 18px;
    right: 28px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .cart-item__content {
    flex-grow: 1;
  }
  .cart-item__content-wrapper {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
  .cart-item__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 146px;
    height: 136px;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  .cart-item__content-wrapper img {
    display: block;
    max-width: 100%;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .cart-item__title {
    margin-bottom: 12px;
  }
  .cart-item__title a {
    font-size: 17px;
    line-height: 21px;
    font-weight: 500;
    color: #1C1C27;
    text-decoration: none;
  }
  .cart-item__price {
    font-size: 15px;
    line-height: 18px;
    font-weight: 600;
    color: #AAAAAA;
  }
  .cart-item__summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 12px;
  }
  .cart-item__summary-price {
    font-size: 15px;
    line-height: 18px;
    font-weight: 600;
    color: #1C1C27;
  }
  @media (max-width: 575px) {
    .cart-item__content-wrapper {
      flex-direction: column;
    }
    .cart-item__image-wrapper {
      margin-right: 0;
    }
    .cart-item__content {
      width: 100%;
      margin-bottom: 16px;
    }
    .cart-item__summary {
      padding-left: 0;
    }
  }
</style>
