<script setup>
defineProps({
  tableData: {
    type: Array,
    default: () => []
  }
})
// 禁用行
let selectable = (row) => {
  return true

}
//选中行
let handleSelectionChange = (val) => {

}

let rowControl = (row, type) => {
}


</script>

<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      row-key="id" default-expand-all
      :tree-props="{ children: 'children' }"
      height="100%"
      :default-sort="{ prop: 'sort', order: 'descending' }">
    <el-table-column type="selection" :selectable="selectable" sortable  width="55" align="center"/>
    <el-table-column prop="sort" label="键值" width="180" align="center"/>
    <el-table-column prop="name" label="名称" width="180" align="center"/>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button text type="primary" @click="rowControl(scope.row,'edit')">编辑</el-button>
        <el-button text type="primary" @click="rowControl(scope.row,'add')">添加子节点</el-button>
        <el-button text type="danger" @click="rowControl(scope.row,'del')">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<style scoped>

</style>