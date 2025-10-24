import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
// 创建 axios 实例
const router = useRouter()
const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '', // 环境变量配置接口前缀
    timeout: 10000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 可以在这里加 token
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        if(response.code==401){
            router.push({
                name:'login'
            })
        }
        // 直接返回 data，方便调用
        return response.data
    },
    error => {
        // 全局错误处理
        console.error('请求错误', error)
        return Promise.reject(error)
    }
)

export default service
