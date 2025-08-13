export const useInitializingStore = defineStore('initializing', {
  state: () => ({
    answer: '',
    forced: false,
  }),
  getters: {
    isYes: state => state.answer === 'yes',
  },
  actions: {
    async askQuestion() {
      interface Response {
        answer: 'yes' | 'no'
        forced: boolean
      }

      const { answer, forced } = await $fetch<Response>('https://yesno.wtf/api')
      this.answer = answer
      this.forced = forced
    },
  },
})
