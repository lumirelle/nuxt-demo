export const Code = {
  config:
`export default defineNuxtConfig({
  i18n: {
    locales: [
      // FIXME: Should specify file manually // [!code focus:4]
      { code: 'en', name: 'English', file: 'en.yaml' },
      { code: 'zh-CN', name: '简体中文', file: 'zh-CN.yaml' },
      { code: 'zh-TW', name: '繁體中文', file: 'zh-TW.yaml' },
    ],
    // NOTE: I18n will detect the browser language by default
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      cookieKey: 'locale',
    },
  },
})`,
  switcher:
`<script setup lang="ts">
import type { Locale } from '#i18n'

const { locale, locales, setLocale } = useI18n() // [!code focus]

const visible = ref(false)

nextTick(() => {
  visible.value = true
})

function handleChange(code: Locale) { // [!code focus:3]
  setLocale(code)
}
</script>

<template>
  <!-- CAUTION: DO NOT USE \`v-model\` here, it will change \`locale\` directly & missing the cookie update & other side effects --> // [!code focus:4]
  <ElSelect v-show="visible" :model-value="locale" min-w-100px @change="handleChange">
    <ElOption v-for="i in locales" :key="i.code" :label="i.name" :value="i.code" />
  </ElSelect>
</template>`,
  page:
`<script setup lang="ts">
const { t } = useI18n() // By default, \`useScope\` is \`global\` // [!code focus]
</script>

<template>
  <p>{{ t('plugin.api.error.account-locked') }}</p> // [!code focus:3]
  <p>{{ t('plugin.api.error.login-expired') }}</p>
  <p>{{ t('plugin.api.error.too-many-requests') }}</p>
  <LangSwitcher mt-4 />
</template>`,
}

export default Code
