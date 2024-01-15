<script lang="ts" setup>
import Tail from './Tail.vue'
import { useStore } from '@/stores/store'
import draggable from 'vuedraggable'

const store = useStore()
</script>
<template>
  <draggable v-model="store.tails" tag="ul" group="tails" item-key="id">
    <template #item="{ element: tail }">
      <Tail :tail="tail" :key="tail.id" />
    </template>
  </draggable>
</template>

<style scoped lang="scss">
.tailList {
  display: flex;
  flex-wrap: wrap;
}
</style>
