<script setup>
import {computed} from "vue";

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: () => false
  },
  width: {
    type: String,
    default: () => '60vw'
  },
  title: {
    type: String,
    default: () => ''
  }
})
let handleClose = (v) => {
  emits('handleClose', v)
}
const emits = defineEmits(
    ['handleClose', 'update:dialogVisible']
)
const showDialog = computed({
  get() {
    return props.dialogVisible
  },
  set(v) {
    console.log(v)
    emits('update:dialogVisible', v)
  }
})
</script>

<template>
  <el-dialog
      v-model="showDialog"
      :title="title"
      :width="width"
      :before-close="handleClose"
  >
    <slot name="default"></slot>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="showDialog = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>