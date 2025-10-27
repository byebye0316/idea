<script setup>
import { useDynamicForm } from "./form.js";
import {isRef, onMounted} from "vue";
// 获取动态路由
const { dynamicForm } = useDynamicForm();
onMounted(()=>{
  console.log("dynamicForm",isRef(dynamicForm))
})
</script>

<template>
  <component v-if="dynamicForm" :is="dynamicForm"/>
  <RouterView></RouterView>
</template>
