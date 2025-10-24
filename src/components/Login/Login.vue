<script setup>
import {ref, useTemplateRef} from "vue";

let ruleFormRef = useTemplateRef('ruleFormRef')
let ruleForm = ref({})
let rules = ref({})
let submitForm = (ruleFormRef) => {

}
let resetForm = (ruleFormRef) => {

}
</script>

<template>
  <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
  >
    <el-form-item label="UserName" prop="pass">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
::v-deep .el-form-item__label{
  color: #090909;
}
</style>