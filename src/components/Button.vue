<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
<template>
  <button @click="$emit('clickHandler')" class="addBtn">{{ text }}</button>
</template>
<style lang="scss" scoped>
.addBtn {
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  border: 0;
  transition: ease-in 0.15s;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.95);
  }
}
</style>
