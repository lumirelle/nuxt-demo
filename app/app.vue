<script setup lang="ts">
import { en, zhCn, zhTw } from 'element-plus/es/locale'

const { locale } = useI18n()

// Auto switch Element Plus locale by current locale
const elLocale = computed(() => {
  return locale.value === 'zh-CN' ? zhCn : locale.value === 'zh-TW' ? zhTw : en
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
