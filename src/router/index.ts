import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView_fr from '../views/HomeView_fr.vue'
import HomeView_en from '../views/HomeView_en.vue'
import HomeView_zh from '../views/HomeView_zh.vue'
import ResetView_fr from '../views/ResetView_fr.vue'

function getBrowserLang(): string {
    return navigator.language || navigator['language'] || 'en'
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: () => {
                let result = '/en'
                const browserLang = getBrowserLang().toLowerCase()
                if (browserLang.startsWith('fr')) {
                    result = '/fr'
                }
                return result
            }
        },
        {
            path: '/en',
            name: 'home_en',
            component: HomeView_en
        },
        {
            path: '/fr',
            name: 'home_fr',
            component: HomeView_fr
        },
        {
            path: '/zh',
            name: 'home_zh',
            component: HomeView_zh
        },
        {
            path: '/reset_pass/:username/:token',
            name: 'reset',
            component: ResetView_fr
        }   
    ]
})

export default router