<!-- MenuItem.vue -->
<template>
  <!-- 有子节点 -->
  <el-sub-menu v-if="item.children && item.children.length" :index="item.name">
    <template #title>{{ item.label }}</template>

    <!-- 递归调用自身 -->
    <MenuItem
        v-for="child in item.children"
        :key="child.name"
        :item="child"
    />
  </el-sub-menu>

  <!-- 没有子节点 -->
  <el-menu-item v-else :index="item.path" :route="item.path">
    {{ item.label +item.path}}
  </el-menu-item>
</template>

<script setup>
// import MenuItem from "./MenuItem.vue"

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
