import { createApp } from 'vue'
import App from './App.vue'
import customDirective from '@/directive'
import { pinia } from '@/store'
import '@/assets/styles/index.sass'

const app = createApp(App)
app.use(pinia)
app.use(customDirective)
app.mount('#app')
