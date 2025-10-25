import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store'
const baseRoutes = [
    { path: '/login', name: 'Login', component: () => import('@/components/Login/index.vue') },
    { path: '/FormCenter/:type/:formKey', name: 'FormCenter', component: () => import('@/formCenter/index.vue') },
    { path: '/error', name: 'NotFound', component: () => import('@/components/error.vue') },
]
const router = createRouter({
    history: createWebHistory(),
    routes: baseRoutes,
})

// ✅ 避免重复添加动态路由
let isDynamicAdded = false

router.beforeEach(async (to, from, next) => {
    // const token = localStorage.getItem('token')
    // const userStore = useUserStore()
    //
    // // 未登录且非 login 页面
    // if (!token && to.name !== 'Login') {
    //     return next({ name: 'Login' })
    // }
    //
    // // 已登录但未挂载动态路由
    // if (token && !isDynamicAdded) {
    //     const routes = await userStore.getDynamicRoutes()
    //     routes.forEach((r) => router.addRoute(r))
    //     isDynamicAdded = true
    //     return next({ ...to, replace: true }) // 重新进入，确保新路由生效
    // }
    if (to.path==='/') return next()
    // 没有匹配的路由 → 404
    if (!router.hasRoute(to.name)) {
        return next({ name: 'NotFound' })
    }

    next()
})

export default router
