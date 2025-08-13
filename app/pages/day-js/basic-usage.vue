<script setup lang="ts">
import { Code } from '#shared/constants/code/day-js/basic-usage.code'

definePageMeta({
  parent: '/',
})

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
        app/plugins/dayjs.ts
      </H>
      <ShikiJs :code="Code.plugins" lang="ts" />
    </section>
    <section>
      <H level="2">
        app/pages/day-js/basic-usage.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <!-- NOTE: Don't use `$dayjs()` directly, or will get a hydration error -->
      <I18nT keypath="result.parse" tag="p">
        <template #parsed>
          <span>{{ $dayjs('2018-04-04T16:00:00.000Z').format('YYYY-MM-DD HH:mm:ss') }}</span>
        </template>
      </I18nT>
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
  title: Day.js Basic Usage
  result:
    title: Result
    parse: 'Date parsed as: {parsed}'
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Day.js 基本使用
  result:
    title: 结果
    parse: '日期解析为: {parsed}'
  back-home: "{'<'} 返回首页 {'>'}"

zh-TW:
  title: Day.js 基本使用
  result:
    title: 結果
    parse: '日期解析為: {parsed}'
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
