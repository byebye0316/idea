<script setup lang="ts">
import axios from './util/axios.js'
import {useUserStore} from './store'
import Home from "@/components/Home.vue";

const userStore = useUserStore()
// let route = useRouter();
let login = async (formdata) => {
  const {data, code} = await axios.post('api/user/login', {
    username: formdata.username,
    password: formdata.password
  })
  if (code == 200) {
    userStore.token = data.token
    userStore.userInfo = data
    userStore.dynamicRoutes = []
    await userStore.getDynamicRoutes()
  }
}


</script>

<template>
  <div class="whiteNoise back">
    <Home></Home>
  </div>
  <!--<el-button @click="login" type="primary">点击登录</el-button>-->
  <!--  <RouterView></RouterView>-->
</template>
<style>
@import "@/assets/hue.css";

.back {
  background-image: url("./assets/bghome.png");
  background-repeat: no-repeat; /* 不重复 */
  background-size: cover; /* 铺满整个区域 */
  background-position: center;
}
</style>