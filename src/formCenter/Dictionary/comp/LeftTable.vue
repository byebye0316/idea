<script setup>
import {computed, onMounted, ref, useTemplateRef} from "vue";
import Dialog from "@/components/Dialog/index.vue"
import Add from "@/formCenter/Dictionary/comp/Add.vue";
import Edit from "@/formCenter/Dictionary/comp/Edit.vue";
import Del from "@/formCenter/Dictionary/comp/Del.vue";
const dialogTitle = "业务字典"
defineProps({
  tableData:{
    type:Array,
    default:()=>[]
  }
})
let dialogVisible = ref(false)
let closeDialog = () => {
}
// 禁用行
let selectable = (row) => {
  return true
}
//选中行
let handleSelectionChange = (val) => {

}
let dialogData = ref({})
let rowControl = (row, types) => {
  type.value = types
  dialogData.value = row
  dialogVisible.value = true
}
const dialogContent = {
  edit: Edit,
  add: Add,
  del: Del
}
const children = useTemplateRef('children')
let type = ref('')
let currentDialog = computed(() => {
  return dialogContent[type.value]
})
defineExpose({
  validate: () => children.value?.validate()
})

</script>

<template>
   <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" height="100%">
     <el-table-column type="selection" :selectable="selectable" width="55" align="center"/>
     <el-table-column prop="key" label="键值" width="180" align="center"/>
     <el-table-column prop="name" label="名称" width="180" align="center"/>
     <el-table-column label="操作" align="center">
       <template #default="scope">
         <el-button text type="primary" @click="rowControl(scope.row,'edit')">编辑</el-button>
         <el-button text type="danger" @click="rowControl(scope.row,'del')">删除</el-button>
       </template>
     </el-table-column>
   </el-table>
   <Dialog
       :type="type"
       :title="dialogTitle"
       v-model:dialog-visible="dialogVisible"
       @handleClose="closeDialog">
     <Component
         ref="children"
         :is="currentDialog"
         v-model:data="dialogData"
     >

     </Component>

   </Dialog>

</template>

<style scoped>

</style>