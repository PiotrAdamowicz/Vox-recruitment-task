import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { randomColor } from '@/utils/utils'
import type { InnerTailType, TailType } from '@/components/Tail.vue'

export const useStore = defineStore('state', () => {
  const tails: Ref<TailType> = ref([])
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

    tails.value = tails.value.filter((item: InnerTailType) => id !== item.id)
  }
  function onBlur(id: number) {
    const idx = tails.value.findIndex((item: InnerTailType) => item.id == id)
    tails.value[idx].formActive = false
  }

  return { tails, addTail, removeTail, onBlur }
})
