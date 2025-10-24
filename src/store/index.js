import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import axios from "../util/axios.js";

export const useUserStore = defineStore('user', () => {
    // 登录信息与缓存的动态路由
    const userInfo = useStorage('userInfo', {})
    const dynamicRoutes = useStorage('dynamicRoutes', [])
    const token = useStorage('token', '')

    // 递归加载动态路由
    function addDynamicRoutes(routes) {
        return routes.map((item) => {
            const route = { ...item }
            if (item.children && item.children.length > 0) {
                route.children = addDynamicRoutes(item.children)
            } else {
                // ✅ 异步组件导入
                route.component = () => import(`@/components/${item.name}.vue`)
            }
            return route
        })
    }

    // 获取或恢复动态路由
    async function getDynamicRoutes() {
        // 如果本地已有缓存，直接返回
        if (dynamicRoutes.value && dynamicRoutes.value.length > 0) {
            return dynamicRoutes.value
        }

        // 否则请求后端
        const res = await axios.get('/api/user/route',{ params: {id: userInfo.value.userId} })
        const routes = addDynamicRoutes(res)
        dynamicRoutes.value = routes
        return routes
    }

    // 清除登录信息和缓存
    function clearUserData() {
        userInfo.value = {}
        dynamicRoutes.value = []
    }

    return {
        token,
        userInfo,
        dynamicRoutes,
        getDynamicRoutes,
        clearUserData,
    }
})
