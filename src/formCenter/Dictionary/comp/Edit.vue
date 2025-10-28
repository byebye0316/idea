<script setup>

import {useTemplateRef} from "vue";

const data = defineModel('data', {
  type: Object,
  default: () => ({
    name: '',
    key: ''
  })
})
// let name = computed(() => props.data.name,)
const content = useTemplateRef('content')
//todo 双向绑定校验出错


</script>

<template>
  <el-form ref="content" :model="data">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="名称" prop="name" required>
          <el-input v-model="data.name" autocomplete="off"/>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="键值" prop="key" required>
          <el-input v-model="data.key" autocomplete="off"/>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>


</template>

<style scoped>

</style>