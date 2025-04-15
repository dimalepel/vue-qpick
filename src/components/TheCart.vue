<script setup>
import CartItem from "@/components/CartItem.vue";
import { useCartStore } from '@/stores/useCartStore'
import {onMounted, ref, watch} from "vue";
import {storeToRefs} from "pinia";

const cartSum = ref(0)

const cart = useCartStore()

const { cartProducts } = storeToRefs(cart)

onMounted(() => {
  cartSum.value = cart.totalSum();
})

watch(cartProducts,() => {
    cartSum.value = cart.totalSum()
  },
  { deep: true }
)
</script>

<template>
  <main class="main">
    <h1 class="page-title">Корзина</h1>
    <div v-if="cartProducts.length > 0" class="cart">
      <ul class="cart__products">
        <CartItem v-for="product in cartProducts" :key="product.id" :product="product" @removeItemCart="cart.removeItemCart"/>
      </ul>
      <aside class="cart__summary">
        <div class="cart__summary-row">
          ИТОГО <span class="cart__summary-summ">₽ {{ cartSum }}</span>
        </div>
        <router-link class="cart__button" to="/order">Перейти к оформлению</router-link>
      </aside>
    </div>
    <p v-else >Ваша корзина пуста</p>
  </main>
</template>

<style scoped>
.cart {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.cart__products {
  width: 57%;
  max-width: 630px;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}
.cart__summary {
  width: 30%;
  max-width: 320px;
  background-color: #ffffff;
  border-radius: 30px;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, .1));
}
.cart__summary-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
  color: #000000;
}
.cart__button {
  display: block;
  width: 100%;
  padding: 22px 14px;
  font-size: 17px;
  line-height: 21px;
  font-weight: 600;
  color: #ffffff;
  background-color: #101010;
  text-align: center;
  border-radius: 20px;
  border: none;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
}
.cart__button:hover {
  background-color: #FFCE7F;
}
@media (max-width: 991px) {
  .cart__summary {
    width: 100%;
    margin-left: 16px;
    flex-grow: 1;
  }
}
@media (max-width: 768px) {
  .cart {
    flex-direction: column;
  }
  .cart__products {
    width: 100%;
    max-width: 100%;
  }
  .cart__summary {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
