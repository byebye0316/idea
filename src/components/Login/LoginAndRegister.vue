<script setup>
import {computed, ref} from "vue";
import Login from "@/components/Login/Login.vue";
import Register from "@/components/Login/Register.vue";

let handleClick = () => {
}
let activeName = ref('Login')
let activeComps = {
  Login, Register
}
let activeComp = computed(() => {
  return activeComps[activeName.value]
})
</script>

<template>
    <div class="min-w-[500px] bg-sky-500/50 shadow-sky-500/50 rounded-md shadow-lg p-10">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="登录" name="Login"></el-tab-pane>
        <el-tab-pane label="注册" name="Register"></el-tab-pane>
      </el-tabs>
      <Component :is="activeComp" :key="activeName"></Component>
    </div>
</template>

<style scoped>

</style>