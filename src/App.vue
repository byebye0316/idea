<script  setup lang="ts">
import type {MaybeElement} from '@vueuse/core'
import {reactify, useAnimate} from '@vueuse/core'
import {reactive, useTemplateRef} from 'vue'
import YAML from 'yaml'
// import axios, {Axios} from "axios";
import axios from '../util/axios.js'



const stringify = reactify(
    (input: any) => YAML.stringify(input, (k, v) => {
      if (typeof v === 'function') {
        return undefined
      }
      return v
    }, {
      singleQuote: true,
      flowCollectionPadding: false,
    }),
)

const el = useTemplateRef<MaybeElement>('el')

const {
  play,
  pause,
  reverse,
  finish,
  cancel,
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
} = useAnimate(
    el,
    [
      {clipPath: 'circle(20% at 0% 30%)'},
      {clipPath: 'circle(20% at 50% 80%)'},
      {clipPath: 'circle(20% at 100% 30%)'},
    ],
    {
      duration: 3000,
      iterations: 5,
      direction: 'alternate',
      easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
    },
)

const text = stringify(reactive({
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
}))

let data =async ()=>{
  await axios.post("/api/user/login", {
    username: 'system',
    password: '123456789'
  })
}
let data1 =async ()=>{
  await axios.post("/api/user/add", {
    username: 'systemadd',
    password: '123456789'
  })
}
let data2 =async ()=>{
  await axios.get("/api/user/info",{
    params:{
      username:'systemadd'
    }
  })
}
console.log(data(),data1(),data2())
</script>

<template>
  <div>
    <div class="flex items-center justify-center w-full h-60">
      <p ref="el" class="text-5xl! text-$vp-c-brand font-800">
        VueUse useAnimate
      </p>
    </div>
    <div>
      <el-button v-if="playState === 'running'" @click="pause">
        pause
      </el-button>
      <el-button v-else @click="play">
        play
      </el-button>
      <el-button @click="reverse">
        reverse
      </el-button>
      <el-button @click="finish">
        finish
      </el-button>
      <el-button @click="cancel">
        cancel
      </el-button>
    </div>
    <pre class="code-block">{{ text }}</pre>
  </div>
  <router-view></router-view>
</template>