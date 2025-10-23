import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {useStorage} from '@vueuse/core'

export const useTestStore = defineStore('storeTest', () => {
    const number = useStorage('token', 0)
    const name = ref('test')
    return {number, name}
});
