<script setup lang="ts">
import { Code } from '#shared/constants/code/vue-i18n/global.code'
import { useI18n } from 'vue-i18n'

definePageMeta({
  parent: '/',
})

const { t } = useI18n() // By default, `useScope` is `global`
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <p>{{ t('plugin.api.error.account-locked') }}</p>
      <p>{{ t('plugin.api.error.login-expired') }}</p>
      <p>{{ t('plugin.api.error.too-many-requests') }}</p>
      <LangSwitcher mt-4 />
    </section>
    <section>
      <H level="2">
        <i>nuxt.config.ts</i>
      </H>
      <ShikiJs :code="Code.config" lang="ts" />
    </section>
    <section>
      <H level="2">
        <i>app/components/LangSwitcher.vue</i>
      </H>
      <ShikiJs :code="Code.switcher" lang="vue" />
    </section>
    <section>
      <H level="2">
        <i>app/pages/vue-i18n/basic-usage.vue</i>
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
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
  title: Vue I18n Global Usage
  result:
    title: Result
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Vue I18n 全局使用
  result:
    title: 结果
  back-home: "{'<'} 返回首頁 {'>'}"

zh-TW:
  title: Vue I18n 全局使用
  result:
    title: 結果
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
