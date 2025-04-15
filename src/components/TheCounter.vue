<script setup>
import { useCartStore } from '@/stores/useCartStore'

const cart = useCartStore()

const { counter, id } = defineProps(['counter', 'id'])

</script>

<template>
  <div class="counter">
    <button class="counter__button" @click="cart.updateCartItem(id, 'down')">
      <img src="../assets/icon--minus.svg" alt="">
    </button>
    <input class="counter__value" type="text" :value="counter">
    <button class="counter__button">
      <img src="../assets/icon--plus.svg" alt="" @click="cart.updateCartItem(id, 'up')">
    </button>
  </div>
</template>

<style scoped>
  .counter {
    display: flex;
    align-items: center;
  }
  .counter__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #FFCE7F;
    border-radius: 100%;
    border: none;
    cursor: pointer;
  }
  .counter__value {
    width: 60px;
    font-family: inherit;
    font-size: 17px;
    line-height: 21px;
    font-weight: 600;
    color: #000000;
    text-align: center;
    border: none;
  }
</style>
