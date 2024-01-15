<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'
import ColorInput from './ColorInput.vue'

const { tail } = defineProps<TailType>()
export interface TailType {
  tail: InnerTailType
}
export interface InnerTailType {
  color: string
  id: number
  formActive: boolean
}
const currentColor = ref(tail.color)

function changeColorHandler(tail: InnerTailType) {
  console.log(tail)
  tail.formActive = !tail.formActive
}
</script>
<template>
  <li class="tail" :style="{ backgroundColor: currentColor }">
    <Button text="Zmień" @clickHandler="changeColorHandler(tail)" />
    <Button text="Usuń" @clickHandler="$emit('removeHandler'), tail" />
    <ColorInput
      v-if="tail.formActive"
      v-model:colorInput="currentColor"
      @blur="$emit('onblure', tail)"
    />
  </li>
</template>

<style scoped lang="scss">
.tail {
  /* width: 100px; */
  height: fit-content;
  background-color: red;
  display: inline-block;
  margin: 1rem;
  border-radius: 15px;
  position: relative;
}
</style>
