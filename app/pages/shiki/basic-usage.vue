<script setup lang="ts">
import { Code } from '#shared/constants/code/shiki/basic-usage.code'

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
        nuxt.config.ts
      </H>
      <ShikiJs :code="Code.config" lang="ts" />
    </section>
    <section>
      <H level="2">
        app/assets/styles/_shiki.scss
      </H>
      <ShikiJs :code="Code.styles" lang="scss" />
    </section>
    <section>
      <H level="2">
        app/components/ShikiJs.vue
      </H>
      <ShikiJs :code="Code.component" lang="vue" />
    </section>
    <section>
      <H level="2">
        shared/constants/code/shiki/basic-usage.code.ts
      </H>
      <ShikiJs :code="Code.code" lang="ts" />
    </section>
    <section>
      <H level="2">
        app/pages/shiki/basic-usage.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <section>
        <p>
          {{ t('result.xml') }}
        </p>
        <ShikiJs :code="Code.xml" lang="xml" />
      </section>
      <section>
        <p>
          {{ t('result.javascript') }}
        </p>
        <ShikiJs :code="Code.javascript" lang="js" />
      </section>
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
  title: Shiki Basic Usage
  result:
    title: Result
    xml: This is an XML code block.
    javascript: This is a JavaScript code block.
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Shiki 基本使用
  result:
    title: 结果
    xml: "这是一个 XML 代码块。"
    javascript: "这是一个 JavaScript 代码块。"
  back-home: "{'<'} 返回首页 {'>'}"

zh-TW:
  title: Shiki 基本使用
  result:
    title: 結果
    xml: "這是一個 XML 代碼塊。"
    javascript: "這是一個 JavaScript 代碼塊。"
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
