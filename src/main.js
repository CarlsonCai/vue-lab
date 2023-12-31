import { createApp } from 'vue'
import App from './App.vue'
import customDirective from '@/directive'
import '@/assets/styles/index.sass'

const app = createApp(App)
app.use(customDirective)
app.mount('#app')
