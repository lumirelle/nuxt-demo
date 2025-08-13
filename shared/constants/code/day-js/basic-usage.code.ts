export const Code = {
  plugins:
`import dayjs from 'dayjs'
import En from 'dayjs/locale/en'
import ZhCn from 'dayjs/locale/zh-cn'
import ZhWt from 'dayjs/locale/zh-tw'

export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()
  const locale = nuxtApp.$i18n.locale
  const locales: Record<typeof locale.value, any> = {
    'en': En,
    'zh-CN': ZhCn,
    'zh-TW': ZhWt,
  }
  dayjs.locale(locales[locale.value])

  return {
    provide: {
      dayjs,
    },
  }
})`,
  page:
`<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <!-- NOTE: Don't use \`$dayjs()\` directly, or will get a hydration error -->
    <I18nT keypath="result.parse" tag="p">
      <template #parsed>
        <span>{{ $dayjs('2018-04-04T16:00:00.000Z').format('YYYY-MM-DD HH:mm:ss') }}</span>
      </template>
    </I18nT>
  </div>
</template>

<i18n lang="yaml">
en:
  result:
    parse: 'Date parsed as: {parsed}'

zh-CN:
  result:
    parse: '日期解析为: {parsed}'

zh-TW:
  result:
    parse: '日期解析為: {parsed}'
</i18n>`,
}

export default Code
