<script setup lang="ts">
import axios from './util/axios.js'
import {useUserStore} from './store'
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
<!--  <Home></Home>-->
  <RouterView></RouterView>
</template>
<style scoped lang="scss">
//@import "@/assets/hue.css";
//
//.back {
//  background-image: url("./assets/bghome.png");
//  background-repeat: no-repeat;
//  background-size: cover;
//  background-position: center;
//}
</style>