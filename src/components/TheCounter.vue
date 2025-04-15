<script setup>
import { useCartStore } from '@/stores/useCartStore'

const cart = useCartStore()

const { counter, id } = defineProps(['counter', 'id'])
</script>

<template>
  <div class="counter">
    <button class="counter__button" @click="cart.updateCartItem(id, 'down')">
      <svg width="14" height="2" viewBox="0 0 14 2" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H14V2H0V0Z"/>
      </svg>
    </button>
    <span class="counter__value">{{ counter }}</span>
    <button class="counter__button" @click="cart.updateCartItem(id, 'up')">
      <svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.20557 6V0H8.20557V6H14.2056V8H8.20557V14H6.20557V8H0.205566V6H6.20557Z"/>
      </svg>
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
  cursor: pointer;
  border: 1px solid #FFCE7F;
}
.counter__button svg {
  fill: #ffffff;
}
.counter__button:hover {
  background-color: #ffffff;
}
.counter__button:hover svg {
  fill: #FFA542;
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
