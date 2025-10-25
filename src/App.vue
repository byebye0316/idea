<script setup lang="ts">
import Home from '@/components/Home/index.vue'
import Login from '@/components/Login/index.vue'
import error from '@/components/error.vue'
import {useRoute} from "vue-router";
import {computed, ref, watch} from "vue";
const route=useRoute()
let dynamicComp=ref('')
watch(()=>route.name,(n)=>{
  dynamicComp.value=n==='Login'?Login:(n==='Home'||!n)?Home:error
}, { immediate: true })
</script>

<template>
  <Component :is="dynamicComp"></Component>
</template>
