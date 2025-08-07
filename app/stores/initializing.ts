export const useInitializingStore = defineStore('initializing', {
  state: () => ({
    answer: 'no',
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

      $fetch<Response>('https://yesno.wtf/api')
        .then(({ answer, forced }) => {
          this.answer = answer
          this.forced = forced
        })
        .catch(() => {
          this.answer = 'invalid'
          this.forced = false
        })
    },
  },
})
