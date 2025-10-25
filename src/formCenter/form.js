// src/utils/loadFormComponent.js
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
// 自动导入 formCenter 下的所有 index.vue 文件
const formModules = import.meta.glob('@/formCenter/**/index.vue');
/**
 * 动态加载 formCenter 下子目录的 index.vue 组件
 * @returns {object} { dynamicForm, loadComponent }
 */
export function useDynamicForm() {
    const route = useRoute();
    const router = useRouter();
    const dynamicForm = ref(null);
    const loadComponent = async () => {
        const { formKey } = route.params;
        if (!formKey) {
            console.warn("⚠️ 缺少 formKey 参数");
            dynamicForm.value = null;
            return;
        }
        // 构建目标路径
        const targetPath = `/src/formCenter/${formKey}/index.vue`;
        console.log("尝试加载路径：", targetPath);
        if (formModules[targetPath]) {
            try {
                const module = await formModules[targetPath]();
                dynamicForm.value = module.default;
                console.log("✅ 成功加载组件：", targetPath);
            } catch (err) {
                console.error("❌ 组件加载失败：", err);
                dynamicForm.value = null;
            }
        } else {
            console.warn("🚫 未找到匹配组件：", targetPath);
            router.push({
                name:"NotFound"
            })
            dynamicForm.value = null;
        }
    };
    // 监听路由变化
    watch(() => route.params.formKey, loadComponent, { immediate: true });
    return { dynamicForm, loadComponent };
}
