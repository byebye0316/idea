<script setup>
import MenuItem from "./MenuItem.vue"
import {ref} from "vue";

let activeIndex = ref('')
let isCollapse = ref(false)
const menuData = ref([
  {
    name: 'root',
    label: '一级菜单',
    icon: 'Menu',
    children: [
      {
        name: 'level2',
        label: '二级菜单',
        icon: 'Setting',
        children: [
          {
            name: 'level3',
            label: '三级菜单',
            children: [
              {
                name: 'level4',
                label: '四级菜单',
                children: [
                  {
                    name: 'level5',
                    label: '五级菜单',
                    children: [
                      {
                        name: 'level6',
                        label: '六级菜单',
                        children: [
                          {
                            name: 'level7',
                            label: '七级菜单',
                            children: [
                              {
                                name: 'level8',
                                label: '八级菜单（最深层）',
                                path: '/login',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'other',
    label: '一级菜单 2',
    icon: 'House',
    children: [
      {
        name: 'other-sub',
        label: '二级菜单 2',
        path: '/error',
      },
    ],
  },
])
let handleSelect = (v) => {
  console.log(v)
}
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