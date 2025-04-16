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
      <svg width="21" height="17" viewBox="0 0 21 17" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z"/>
      </svg>
    </button>
    <div class="cart-item__content-wrapper">
      <div class="cart-item__image-wrapper">
        <img :src="product.item.image" alt="">
      </div>
      <div class="cart-item__content">
        <h2 class="cart-item__title">{{ product.item.title }}</h2>
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
.cart-item__remove svg {
  fill: #DF6464;
}
.cart-item__remove:hover svg {
  fill: #FFA542;
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
.cart-item__title {
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
