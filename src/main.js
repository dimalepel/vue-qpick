import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import TheMask from 'vue-the-mask'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(TheMask)
  .mount('#app')
