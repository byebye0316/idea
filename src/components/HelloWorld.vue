<script setup>
import {useTestStore} from "../store/index.js";

const testStore = useTestStore()

</script>

<template>
  <h1>{{ testStore.name }}</h1>
  <h1>{{ testStore.number }}</h1>
  <el-button @click="testStore.number++">click</el-button>

</template>

<style scoped>

</style>