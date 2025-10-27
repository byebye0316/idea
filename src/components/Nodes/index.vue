<!-- Flowchart.vue -->
<script setup>
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'

const nodes = ref([
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },
  { id: '2', label: 'Node 2', position: { x: 100, y: 100 }, draggable: false,   // 禁止拖拽
    selectable: false,},
  { id: '3', label: 'Node 3', position: { x: 400, y: 100 } },
  { id: '4', label: 'Node 4', position: { x: 400, y: 200 } },
])

const edges = ref([
  { id: 'e1-2', source: '1', target: '2', type: 'step' ,markerEnd: { type: 'arrowclosed' } ,stepType: 'rect'  },
  { id: 'e1-3', source: '1', target: '3',type: 'step' ,markerEnd: { type: 'arrowclosed' }   ,stepType: 'rect' },
  { id: 'e1-4', source: '2', target: '4',type: 'step'  ,markerEnd: { type: 'arrowclosed' } ,stepType: 'rect'  },
  { id: 'e1-5', source: '3', target: '4',type: 'step'  ,markerEnd: { type: 'arrowclosed' } ,stepType: 'rect'  },
])
</script>

<template>
  <VueFlow v-model:nodes="nodes" v-model:edges="edges"></VueFlow>
</template>
<!--<style>-->
<!--/* import the necessary styles for Vue Flow to work */-->
<!--@import '@vue-flow/core/dist/style.css';-->

<!--/* import the default theme, this is optional but generally recommended */-->
<!--@import '@vue-flow/core/dist/theme-default.css';-->
<!--</style>-->