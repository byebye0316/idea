<script setup>
import Login from "@/components/Login/index.vue";
import TimeSvg from "@/components/TimeSvg.vue";
</script>

<template>
  <el-container class="h-screen">
    <el-main >

      <div class="flex justify-center items-center h-full">
<!--        <div class="ml-auto bg-red-500 ">img</div>-->
        <Login class="ml-auto"></Login>
      </div>
    </el-main>

  </el-container>
  <TimeSvg :height="'200px'" :width="'300px'" class="fixed right-0 top-0"></TimeSvg>

</template>

<style scoped>

</style>