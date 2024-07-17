import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from './i18n'

import { createPinia } from 'pinia'

const app = createApp(App)

const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    messages: messages
})
app.use(i18n)

const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')

