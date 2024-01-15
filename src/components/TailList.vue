<script lang="ts" setup>
import Tail from './Tail.vue'
import { useStore } from '@/stores/store'

const store = useStore()
</script>
<template>
  <ul class="tailList">
    <Tail v-for="tail in store.tails" :tail="tail" :key="tail.id" />
  </ul>
</template>

<style scoped lang="scss">
.tailList {
  display: flex;
  flex-wrap: wrap;
}
</style>
