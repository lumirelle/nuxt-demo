export const Code = {
  store: `
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
  })
  `,
  app: `
  <script setup lang="ts">
  // Initialize the store, equivalent to \`nuxtServerInit\` in Nuxt 2
  const initializingStore = useInitializingStore()

  const isStoreInitialized = ref(false)

  // Use Promise.all, support more stores initialization in the future
  Promise.all([
    callOnce('initializing', () => initializingStore.askQuestion),
  ])
    .then(() => {
      isStoreInitialized.value = true
    })

  watch(isStoreInitialized, (value) => {
    if (value) {
      ElMessage.success('Store initialized!')
    }
  })
  </script>
  `,
  page: `
  <script setup lang="ts">
  const initializingStore = useInitializingStore()
  </script>

  <template>
    <p>
      {{ initializingStore.answer }}
    </p>
  </template>
  `,
}
