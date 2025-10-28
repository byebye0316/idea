<script setup>
import Login from "@/components/Login/LoginAndRegister.vue";
import TimeSvg from "@/components/Login/TimeSvg.vue";
</script>

<template>
  <el-container class="h-screen whiteNoise back" >
    <el-main >

      <div class="flex justify-center items-center">
        <!--        <div class="ml-auto bg-red-500 ">img</div>-->
        <Login class="ml-auto"></Login>
      </div>
    </el-main>

  </el-container>
  <TimeSvg :height="'200px'" :width="'300px'" class="fixed right-0 top-0"></TimeSvg>

</template>

<style scoped>
@import "@/assets/hue.css";

.back {
  background-image: url("../../assets/bghome.png");
  background-repeat: no-repeat; /* 不重复 */
  background-size: cover; /* 铺满整个区域 */
  background-position: center;
}
</style>