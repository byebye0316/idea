<script setup>
import { useDynamicForm } from "./form.js";
// 获取动态路由
const { dynamicForm } = useDynamicForm();
</script>

<template>
  <component v-if="dynamicForm" :is="dynamicForm"/>
  <RouterView></RouterView>
</template>
