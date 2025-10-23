<script setup>
import {useDraggable} from "@vueuse/core";
import {UseActiveElement} from "@vueuse/components"
import {useTemplateRef} from "vue";

const el = useTemplateRef('el')
//鼠标位置
// const {x, y} = useMouse()

//活动元素
// const activeElement = useActiveElement()

//页面是否最小
// const visibility = useDocumentVisibility()
// watch(visibility,()=>{
//   console.log(visibility.value)
// })

//拖放元素
// const {x, y, style} = useDraggable(el, {
//   initialValue: {
//     x: 0, y: 0
//   }
// })

</script>

<template>
  <UseActiveElement v-slot="{ element }">
    <div ref="el" :style="style" style="position: fixed;">
      Drag me! I am at {{ x }}, {{ y }},style:{{style}}
    </div>
    Active element is {{ element.dataset.id }}
    <h1 data-id="h1">X: {{ x }}</h1>
    <h1 data-id="h2">Y: {{ y }}</h1>
    <p>当前聚焦元素：{{ element?.dataset?.id || '无' }}</p>
    <p>{{ visibility }}</p>
    <input data-id="input1" placeholder="输入框1"/>
    <input data-id="input2" placeholder="输入框2"/>
  </UseActiveElement>
</template>

<style scoped>

</style>