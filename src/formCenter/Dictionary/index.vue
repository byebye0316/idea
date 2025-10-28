<script setup>
import LeftTable from "./comp/LeftTable.vue"
import RightData from "@/formCenter/Dictionary/comp/RightData.vue";
import {onMounted, ref, watch} from "vue";
import axios from "@/util/axios.js";

let tableData = ref([])
let tableIndex = ref(0)
let initTable = async () => {
  const {data} = await axios.get('/api/tree')
  tableData.value = data
}
let leftData = ref([])
let rightData = ref([])
watch([tableIndex, tableData], ([v, data]) => {
  if (!data || data.length === 0) return;
  leftData.value = data

  rightData.value = data[v].children
  console.log(v, leftData.value, rightData.value)

}, {immediate: true})
onMounted(() => {
  initTable()
})
</script>


<template>
  <div class="flex  w-full  h-full gap-x-10 ">
    <div class="flex-1 min-w-0 h-full ">
        <LeftTable :tableData="leftData"></LeftTable>
    </div>
    <div class="flex-1 min-w-0 h-full ">
      <right-data :tableData="rightData"></right-data>
    </div>
  </div>
</template>

<style scoped>

</style>