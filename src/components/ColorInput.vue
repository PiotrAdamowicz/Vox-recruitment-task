<script setup lang="ts">
import { reactive, ref } from 'vue'
import Button from './Button.vue'

const { colorInput } = defineProps<{ colorInput: string; formActive: boolean }>()
</script>

<template>
  <form class="changeColorForm">
    <label class="colorInputLabel" for="coloInput">Wybierz nowy kolor:</label>
    <input
      type="color"
      :value="colorInput"
      @input="$emit('update:colorInput', $event.target.value)"
      name="colorInput"
      id="colorInput"
    />
  </form>
</template>
<style scoped lang="scss">
.changeColorForm {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.76);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  transform: scale(1);
  transition: ease-in-out 0.3s;
}
.clsoeBtn {
  position: absolute;
  top: 0;
  left: 0;
}
.colorInputLabel {
  color: black;
  padding: 0.5rem;
  font-size: 0.8rem;
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
