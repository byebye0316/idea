<script setup>
import * as echarts from "echarts";
import {onBeforeUnmount, onMounted, useTemplateRef, watch} from "vue";

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
    required:true
  },
  width: {
    type: String,
    default: () => '100vw'
  },
  height: {
    type: String,
    default: () => '100vh'
  }
})
let echart = null
watch(() => props.options, (newOption) => {
  echart?.setOption(newOption)
}, {deep: true})
const chart = useTemplateRef('chart')
const initChart = () => {
  echart = echarts.init(chart.value)
  echart.setOption(props.options)
  window.addEventListener('resize', echart.resize)
}
onBeforeUnmount(() => {
  window.removeEventListener('resize', echart.resize)
  echart?.dispose()
})
onMounted(() => {
  initChart()
})
</script>

<template>
  <div ref="chart" :style="{width:width,height:height}">

  </div>
</template>

<style scoped>

</style>