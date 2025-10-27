<script setup lang="ts">
import Home from '@/components/Home/index.vue'
import Login from '@/components/Login/index.vue'
import error from '@/components/error.vue'
import Node from '@/components/Nodes/index.vue'
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

const route = useRoute()
let dynamicComp = ref('')
watch(() => route.name, (n) => {
  console.log(!n)
  // dynamicComp.value = n === 'Login' ? Login : (n === 'Home' || !n) ? Home : error
  dynamicComp.value=Home
}, {immediate: true})

</script>

<template>
<!--  <div style="height: 500px">-->
<!--    <Node></Node>-->
<!--流程节点测试 v-flow-->
<!--  </div>-->
  <Component :is="dynamicComp"></Component>
</template>
