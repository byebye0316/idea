<script setup>
import { useDynamicForm } from "./form.js";
import {isRef, onMounted, shallowRef, watch} from "vue";
import {useRoute} from "vue-router";
// 获取动态路由
const route=useRoute()
const { dynamicForm,loadComponent } = useDynamicForm();
let form=shallowRef()
watch(()=>route.params.formKey,loadComponent,{immediate:true})

</script>

<template>
  <component  :is="dynamicForm"/>
</template>
