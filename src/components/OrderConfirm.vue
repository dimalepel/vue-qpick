<script setup>
import axios from 'axios'
import { ref } from 'vue'

const props = defineProps(['open', 'cart', 'cost'])
const emit = defineEmits(['update:open', 'order-confirmed'])

const name = ref('')
const phone = ref('')
const address = ref('')
const cardNumber = ref('')
const cardName = ref('')
const cardDate = ref('')
const cardCVV = ref('')
const success = ref(false)

const errors = ref({})
const orderId = ref(0)

function closeModal() {
  emit('update:open', false)
}

const validateForm = () => {
  const newErrors = {}

  if (!name.value.trim()) newErrors.name = true
  if (!phone.value.trim()) newErrors.phone = true
  if (!address.value.trim()) newErrors.address = true
  if (!cardNumber.value.trim() || !/^\d{16}$/.test(cardNumber.value.replace(/\s+/g, ''))) newErrors.cardNumber = true
  if (!cardName.value.trim()) newErrors.cardName = true
  if (!cardDate.value.trim() || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDate.value)) newErrors.cardDate = true
  if (!cardCVV.value.trim() || !/^\d{3}$/.test(cardCVV.value)) newErrors.cardCVV = true

  errors.value = newErrors

  return Object.keys(newErrors).length === 0
}

const confirmOrder = async () => {
  if (!validateForm()) {
    return
  }

  try {
    const response = await axios.post('https://f6c4889c93430217.mokky.dev/orders', {
      id: Date.now(),
      name: name.value,
      phone: phone.value,
      address: address.value,
      cardNumber: cardNumber.value,
      cardName: cardName.value,
      cardDate: cardDate.value,
      cardCVV: cardCVV.value,
      cart: props.cart,
      cost: props.cost

    })
    console.log('Ответ от сервера:', response.data)
    console.log('Id заказа:', response.data.id)
    orderId.value = response.data.id;
    emit('order-confirmed')
    success.value = true
  } catch (error) {
    console.error('Ошибка при отправке:', error)
    success.value = false
  }
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
        <div v-if="orderId > 0">
          <p class="modal__title">Спасибо за заказ!</p>
          <p>Ваш заказ №{{ orderId }} оформлен. В ближайшее время с Вами свяжется менеджер.</p>
          <router-link to="/" class="modal__button modal__button--margin-top">Продолжить покупки</router-link>
        </div>
        <div v-else>
          <p class="modal__title">Введите Ваши данные</p>
          <form class="form" @submit.prevent="confirmOrder">
            <label class="form__item">
              <span class="form__label">Ваше имя</span>
              <input :class="{ 'input--error': errors.name }" class="form__input" type="text" v-model="name">
            </label>
            <label class="form__item">
              <span class="form__label">Номер телефона</span>
              <input :class="{ 'input--error': errors.phone }" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (___) ___-__-__" class="form__input" type="text" v-model="phone">
            </label>
            <label class="form__item">
              <span class="form__label">Адрес доставки</span>
              <input :class="{ 'input--error': errors.address }" class="form__input" type="text" v-model="address">
            </label>
            <label class="form__item">
              <span class="form__label">Номер карты</span>
              <input :class="{ 'input--error': errors.cardNumber }" v-mask="'#### #### #### ####'" placeholder="0000 0000 0000 0000" class="form__input" type="text" v-model="cardNumber">
            </label>
            <label class="form__item">
              <span class="form__label">Имя на карте</span>
              <input @input="cardName = $event.target.value.toUpperCase()" :class="{ 'input--error': errors.cardName }" class="form__input" type="text" v-model="cardName">
            </label>
            <div class="form__row">
              <label class="form__item">
                <span class="form__label">Срок действия</span>
                <input :class="{ 'input--error': errors.cardDate }" v-mask="'##/##'" placeholder="MM/YY" class="form__input" type="text" v-model="cardDate">
              </label>
              <label class="form__item">
                <span class="form__label">CVV</span>
                <input :class="{ 'input--error': errors.cardCVV }" v-mask="'###'" class="form__input" type="text" v-model="cardCVV">
              </label>
            </div>
            <button class="modal__button" type="submit">Оплатить {{ props.cost }} ₽</button>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.form__item {
  display: block;
  margin-bottom: 10px;
}
.form__label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
}
.form__input {
  display: block;
  width: 100%;
  padding: 6px;
  font-size: 16px;
  line-height: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
}
.form__row {
  display: flex;
  justify-content: space-between;
}
.form__row .form__item {
  width: calc(50% - 8px);
}
.form__button:hover {
  background-color: #FFCE7F;
}
.input--error {
  border-color: #DF6464;
}
</style>
