<script setup lang="ts">
const { colorInput, tail } = defineProps<{ colorInput: string; tail: InnerTailType }>()
import { useStore } from '@/stores/store'
import type { InnerTailType } from './Tail.vue'
import Button from './Button.vue'

const store = useStore()
</script>

<template>
  <form
    @submit="$event.preventDefault()"
    v-show="tail.formActive"
    class="changeColorForm"
    :class="{ showForm: tail.formActive }"
    @blur="store.onBlur(tail.id)"
  >
    <h1>Zmień kolor</h1>
    <label class="colorInputLabel" for="coloInput">Kolor: {{ tail.color }}</label>
    <div class="formBtns">
      <input
        type="color"
        :value="colorInput"
        @input="$emit('update:colorInput', $event.target.value)"
        name="colorInput"
        id="colorInput"
      />
      <Button @clickHandler="store.onBlur(tail.id)" text="zamknij" />
    </div>
  </form>
</template>
<style scoped lang="scss">
.formBtns {
  display: flex;
  align-items: center;
}
.changeColorForm {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgb(109, 108, 114);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  transform: scale(0);
  transition: ease-in-out 0.3s;
}
.showForm {
  transform: scale(1);
}
.clsoeBtn {
  position: absolute;
  top: 0;
  left: 0;
}
.colorInputLabel {
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
}
#colorInput {
  padding: 5px;
  height: 48px;
  width: 48px;
  border: 0;
  border-radius: 5px;
  margin: 1rem;
  display: inline-block;
}
.colorForm {
  display: flex;
}
</style>
