export const Code = {
  settings:
`{
  // ...

  "i18n-ally.autoDetection": false,
  "i18n-ally.localesPaths": ["locales", "pages", "components", "app/i18n/locales", "app/pages", "app/components"],
  "i18n-ally.enabledFrameworks": ["vue", "vue-sfc"],
  "i18n-ally.namespace": true,
  // If your i18n modules are under \`modules\` folder, or you don't need to use custom path matcher
  // "i18n-ally.pathMatcher": "modules/{namespaces}/{locale}.json",
  "i18n-ally.keystyle": "nested"

  // ...
}`,
  switcher:
`<script setup lang="ts">
import type { Locale } from '#i18n'

const { locale, locales, setLocale } = useI18n()

const visible = ref(false)

nextTick(() => {
  visible.value = true
})

function handleChange(code: Locale) {
  setLocale(code)
}
</script>

<template>
  <!-- CAUTION: DO NOT USE \`v-model\` here, it will change \`locale\` directly & missing the cookie update & other side effects -->
  <ElSelect v-show="visible" :model-value="locale" min-w-100px @change="handleChange">
    <ElOption v-for="i in locales" :key="i.code" :label="i.name" :value="i.code" />
  </ElSelect>
</template>`,
  page:
`<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <p>{{ t('i18n-text') }}</p>
  <p>{{ t('switch-lang') }}</p>
  <LangSwitcher />
</template>

<i18n lang="yaml">
  en:
    i18n-text: This is a i18n text.
    switch-lang: Or you can switch the language by the selector below.

  zh-CN:
    i18n-text: 这是一个 i18n 文本。
    switch-lang: 或者你可以通过下面的选择器切换语言。

  zh-TW:
    i18n-text: 這是一個 i18n 文本。
    switch-lang: 或者你可以通過下面的選擇器切換語言。
</i18n>`,
}

export default Code
