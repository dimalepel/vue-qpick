<script setup>
const props = defineProps(['open', 'product'])
const emit = defineEmits(['update:open'])

function closeModal() {
  emit('update:open', false)
}
</script>

<template>
  <Teleport to="body">
    <div v-if="props.open" class="modal-overlay">
      <div v-if="props.open" class="modal">
        <button class="modal__close" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="50px" height="50px">
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/>
          </svg>
        </button>
        <p class="modal__title">{{ props.product.title }}</p>
        <div class="product-details">
          <div class="product-details__image-wrapper">
            <img class="product-details__image" :src="props.product.image" alt="">
          </div>
          <div class="product-details__content">
            <div class="product-details__price">
              {{ product.price }} ₽
              <span class="product-details__price-sale" v-if="product.price_old">{{ product.price_old }} ₽</span>
            </div>
            <p class="product-details__rating">
              <img src="../assets/icon--star.svg" alt=""> {{ props.product.rating }}</p>
            <p v-if="props.product.description" class="product-details__description">{{ props.product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  max-width: 630px;
}
.product-details {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.product-details__image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 150px;
  margin-right: 16px;
}
.product-details__image {
  display: block;
}
.product-details__content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.product-details__price {
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 17px;
  line-height: 21px;
  font-weight: 600;
  color: #FFA542;
}
.product-details__price-sale {
  margin-left: 10px;
  font-size: 13px;
  line-height: 16px;
  color: #FFCE7F;
  text-align: center;
  text-decoration: line-through;
}
.product-details__rating {
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 17px;
  line-height: 21px;
  font-weight: 600;
  color: #838383;
}
.product-details__rating img {
  margin-right: 10px;
}
.product-details__description {
  margin-top: 10px;
  font-size: 16px;
  line-height: 18px;
}
@media (max-width: 575px) {
  .product-details {
    flex-direction: column;
  }
  .product-details__image-wrapper {
    width: 240px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }
}
</style>
