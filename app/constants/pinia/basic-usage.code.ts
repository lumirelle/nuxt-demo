export const Code = {
  store:
`export const useBasicStore = defineStore('basic', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    negativeCount: state => -state.count,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
  },
})`,
  page:
`<script setup lang="ts">
const store = useBasicStore()
</script>

<template>
  <div>
    <p mb-2>
      This count value is getting from store state: {{ store.count }}!
    </p>
    <p mb-2>
      This is double count from store getter: {{ store.doubleCount }}!
    </p>
    <p mb-2>
      This is triple count from store getter: {{ store.tripleCount }}!
    </p>
    <p mb-2>
      This is negative count from store getter: {{ store.negativeCount }}!
    </p>
    <p mb-6>
      They will changed while you click at the buttons below.
    </p>
    <div flex gap-2>
      <ElButton @click="store.increment()">
        Increment
      </ElButton>
      <ElButton @click="store.decrement()">
        Decrement
      </ElButton>
      <ElButton @click="store.reset()">
        Reset
      </ElButton>
    </div>
  </div>
</template>`,
}

export default Code
