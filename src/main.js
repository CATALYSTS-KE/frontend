import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { register } from 'swiper/element/bundle'
const app = createApp(App)

app.use(router)

// register Swiper custom elements
register()
app.mount('#app')
