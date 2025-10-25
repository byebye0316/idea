<script setup>
import MenuItem from "./MenuItem.vue"
import {onMounted, ref} from "vue";
import axios from "@/util/axios.js";

let activeIndex = ref('')
let isCollapse = ref(false)
let handleSelect = (v) => {
  console.log(v)
}
let menuData=ref([])
let getMenuList=async ()=>{
  const {data}=await axios.get('/api/menus')
  menuData.value=data
}
onMounted(()=>{
  getMenuList()
})
</script>

<template>
  <el-container class="h-screen whiteNoise back">
    <el-header>
     <el-button @click="isCollapse=!isCollapse">侧栏收缩</el-button>
    </el-header>

    <el-container>
      <el-aside>
        <el-menu
            :collapse="isCollapse"
            router
            :default-active="activeIndex"
            class="el-menu-demo"
            @select="handleSelect"
        >
          <MenuItem
              v-for="item in menuData"
              :key="item.name"
              :item="item"
          />
        </el-menu>
      </el-aside>

      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>

  </el-container>
</template>

<style scoped>
* {
  --el-aside-width: max-content;
  --el-header-height:auto
}

.el-menu-demo.el-menu--collapse {
  width: max-content;
}
</style>