import dayjs from 'dayjs'
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
})
