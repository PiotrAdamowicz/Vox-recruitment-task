<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button.vue'
import TailList from './components/TailList.vue'
import { type InnerTailType } from './components/Tail.vue'
import { useStore } from './stores/store'

const store = useStore()
</script>

<template>
  <header class="header">
    <h1 class="title">Tiles App</h1>
    <Button @clickHandler="store.addTail" class="addBtn" text="Dodaj kafelek" />
  </header>
  <main clas="main">
    <TailList :tails="store.tails" />
  </main>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}
.main {
  padding: 1rem;
}
.addBtn {
  font-size: 1rem;
}
</style>
