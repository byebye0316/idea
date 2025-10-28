<script setup>
import {computed, nextTick, useTemplateRef} from "vue";

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
  },
  type: {
    type: String,
    default: () => 'add',
    required: true
  }
})
let handleClose = (v) => {
  showDialog.value = false
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
    emits('update:dialogVisible', v)
  }
})
const content = useTemplateRef('content')
let confirm = async () => {
  //todo 校验逻辑
  if (props.type === 'del') {
    //删除逻辑
  }
  if (props.type === 'edit') {
    //删除逻辑
  }
  showDialog.value = false

}
</script>

<template>
  <el-dialog
      ref="content"
      v-model="showDialog"
      :title="title"
      :width="width"
      :before-close="handleClose"
  >
    <slot name="default"></slot>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="confirm">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>