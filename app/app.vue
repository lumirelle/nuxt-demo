<script setup lang="ts">
import { en, zhCn, zhTw } from 'element-plus/es/locale'

const { locale } = useI18n()

// Auto switch Element Plus locale by current locale
const elLocale = computed(() => {
  return locale.value === 'zh-CN' ? zhCn : locale.value === 'zh-TW' ? zhTw : en
})

// Initialize the store, equivalent to `nuxtServerInit` in Nuxt 2
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

<template>
  <!-- `NuxtPage` let you can switch between different pages by routes -->
  <!-- Wrap `NuxtPage` with `NuxtLayout` let you can use different layout structure in different pages -->
  <!-- Wrap `ElConfigProvider` to use Element Plus locale -->
  <ElConfigProvider :locale="elLocale">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>
