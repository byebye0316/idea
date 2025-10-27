<script setup>
import {onMounted, ref} from "vue";

let tableData = ref([])
// 禁用行
let selectable = (row) => {

}
//选中行
let handleSelectionChange = (val) => {

}
let initTable = () => {
  //todo:调接口获取table数据
  tableData.value = [{
    key: 'testKey',
    name: 'testName'
  }]
}
let rowControl = (row, type) => {

}

onMounted(() => {
  initTable()
})
</script>

<template>
  <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" :selectable="selectable" width="55"/>
    <el-table-column prop="key" label="键值" width="180"/>
    <el-table-column prop="name" label="名称" width="180"/>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button text type="primary" @click="rowControl(scope.row,'edit')">编辑</el-button>
        <el-button text type="danger" @click="rowControl(scope.row,'del')">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<style scoped>

</style>