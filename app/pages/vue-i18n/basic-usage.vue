<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Code } from '~/constants/vue-i18n/basic-usage.code'

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        .vscode/settings.json
      </H>
      <HighlightJs :code="Code.settings" />
    </section>
    <section>
      <H level="2">
        app/components/LangSwitcher.vue
      </H>
      <HighlightJs :code="Code.switcher" />
    </section>
    <section>
      <H level="2">
        app/pages/vue-i18n/basic-usage.vue
      </H>
      <HighlightJs :code="Code.page" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <p>{{ t('i18n-text') }}</p>
      <p>{{ t('switch-lang') }}</p>
      <LangSwitcher />
    </section>
    <section>
      <NuxtLinkLocale to="/">
        <span>{{ t('back-home') }}</span>
      </NuxtLinkLocale>
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Vue I18n Basic Usage
  i18n-text: This is a i18n text.
  switch-lang: Or you can switch the language by the selector below.
  result:
    title: Result
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Vue I18n 基本使用
  i18n-text: 这是一个 i18n 文本。
  switch-lang: 或者你可以通过下面的选择器切换语言。
  result:
    title: 结果
  back-home: "{'<'} 返回首頁 {'>'}"

zh-TW:
  title: Vue I18n 基本使用
  i18n-text: 這是一個 i18n 文本。
  switch-lang: 或者你可以通過下面的選擇器切換語言。
  result:
    title: 結果
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
