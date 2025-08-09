<script setup lang="ts">
import { Code } from '#shared/constants/highlight-js/basic-usage.code'

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
        shared/constants/highlight-js/basic-usage.code.ts
      </H>
      <HighlightJs :code="Code.code" language="js" />
    </section>
    <section>
      <H level="2">
        app/components/HighlightJs.vue
      </H>
      <HighlightJs :code="Code.component" />
    </section>
    <section>
      <H level="2">
        app/pages/highlight-js/basic-usage.vue
      </H>
      <HighlightJs :code="Code.page" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <section>
        <p>
          {{ t('result.xml') }}
        </p>
        <HighlightJs :code="Code.xml" language="xml" />
      </section>
      <section>
        <p>
          {{ t('result.javascript') }}
        </p>
        <HighlightJs :code="Code.javascript" language="javascript" />
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
  title: Highlight.js Basic Usage
  result:
    title: Result
    xml: This is an XML code block.
    javascript: This is a JavaScript code block.
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Highlight.js 基本使用
  result:
    title: 结果
    xml: "这是一个 XML 代码块。"
    javascript: "这是一个 JavaScript 代码块。"
  back-home: "{'<'} 返回首页 {'>'}"

zh-TW:
  title: Highlight.js 基本使用
  result:
    title: 結果
    xml: "這是一個 XML 代碼塊。"
    javascript: "這是一個 JavaScript 代碼塊。"
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
