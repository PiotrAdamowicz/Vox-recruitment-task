import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomColor } from '@/utils/utils'
import type { InnerTailType } from '@/components/Tail.vue'

export const useStore = defineStore('state', () => {
  const tails = ref([
    { color: 'red', id: 1, formActive: false },
    { color: 'blue', id: 2, formActive: false },
    { color: 'purple', id: 3, formActive: false }
  ])
  function addTail() {
    console.log('Add Tail')
    const id = Math.random() * new Date()
    const color = randomColor()

    tails.value.push({
      color,
      id,
      formActive: false
    })
  }
  function removeTail(tail: InnerTailType) {
    const { id } = tail

    tails.value = tails.value.filter((item) => id !== item.id)
  }
  function onBlur(id: number) {
    const idx = tails.value.findIndex((item) => item.id == id)
    tails.value[idx].formActive = false
  }

  return { tails, addTail, removeTail, onBlur }
})
