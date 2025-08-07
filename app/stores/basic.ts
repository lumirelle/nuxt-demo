export const useBasicStore = defineStore('basic', {
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
})
