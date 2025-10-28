<script setup lang="ts">
import Home from '@/components/Home/index.vue'
import {useRoute} from "vue-router";
import {ref, useTemplateRef, watch} from "vue";
const route = useRoute()
let options = ref({
  title: {text: 'ECharts 示例'},
  tooltip: {},
  xAxis: {data: ['A', 'B', 'C', 'D', 'E']},
  yAxis: {},
  series: [{type: 'bar', data: [5, 20, 36, 10, 10]}]
})
let dynamicComp = ref('')
watch(() => route.name, (n) => {
  console.log(!n)
  // dynamicComp.value = n === 'Login' ? Login : (n === 'Home' || !n) ? Home : error
  dynamicComp.value = Home
}, {immediate: true})
const chart = useTemplateRef('chart')

</script>

<template>
  <!--  <div style="height: 500px">-->
  <!--    <Node></Node>-->
  <!--流程节点测试 v-flow-->
  <!--  </div>-->
  <Component :is="dynamicComp"></Component>
</template>
