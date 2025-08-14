<script lang="ts" setup>
definePageMeta({
  parent: '/',
})

const { t } = useI18n({
  useScope: 'local',
})

const { proxy } = useScriptGoogleTagManager()

// Example to push data to dataLayer
// Noop in development, ssr
// Just works in production, client
proxy.dataLayer.push({ event: 'conversion-step', value: 1 })
function sendConversion() {
  proxy.dataLayer.push({ event: 'conversion', value: 1 })
}
</script>

<template>
  <div>
    <H level="2">
      {{ t('title') }}
    </H>
    <p>
      {{ t('p') }}
    </p>
    <ElButton mt-4 @click="sendConversion">
      {{ t('send-conversion') }}
    </ElButton>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Google Tag Manager Basic Usage
  p: Notice that, this just works in production & client side.
  send-conversion: Send Conversion
zh-CN:
  title: Google Tag Manager 基本使用
  p: 注意，这只在生产环境和客户端有效。
  send-conversion: 发送转化
zh-TW:
  title: Google Tag Manager 基本使用
  p: 注意，這隻在生產環境和客戶端有效。
  send-conversion: 發送轉化
</i18n>
