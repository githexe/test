import { createApp } from 'vue'
import App from './App.vue'
import { I18n } from './config/language'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(I18n)
app.use(pinia)

app.mount('#app')