export const Code = {
  store:
`export const useInitializingStore = defineStore('initializing', {
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
})`,
  app:
`<script setup lang="ts">
// Initialize the store, equivalent to \`nuxtServerInit\` in Nuxt 2
const initializingStore = useInitializingStore()

const isStoreInitialized = ref(false)

// Use Promise.all, support more stores initialization in the future
Promise.all([
  // \`callOnce\` should call the async store actions directly
  callOnce('initializing', initializingStore.askQuestion),
])
  .then(() => {
    isStoreInitialized.value = true
  })

watch(isStoreInitialized, (value) => {
  if (value) {
    ElNotification.success('Store initialized!')
  }
})
</script>`,
  page:
`<script setup lang="ts">
const initializingStore = useInitializingStore()
</script>

<template>
  <p>
    {{ initializingStore.answer }}
  </p>
</template>`,
}

export default Code
