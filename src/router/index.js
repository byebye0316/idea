import {createRouter, createWebHistory} from 'vue-router'
// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'
import home from "@/components/home.vue"
import home2 from "@/components/hometwo.vue"
// import { useRouter, useRoute } from 'vue-router'
//
// const allrouter = useRouter()
const routes = [
    {path: '/', name: 'Home', component: home},
    {path: '/error', name: 'error', component: home2},
    {
        path: '/login', name: 'Login', component: () => import('@/components/HelloWorld.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach(async (to, from) => {
        if (!router.hasRoute(to.name)) return {name: 'error'}
        const token = localStorage.getItem('token')
        if (to.name !== 'Login' && !token) return {name: 'Login'};
    }
)
export default router
