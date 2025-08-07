<script lang="ts" setup>
import { Code } from '~/constants/unocss/basic-usage.code'

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
        unocss.config.ts
      </H>
      <HighlightJs :code="Code.config" />
    </section>
    <section>
      <H level="2">
        app/pages/unocss/basic-usage.vue
      </H>
      <HighlightJs :code="Code.page" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <p>{{ t('result.p1') }}</p>
      <p class="text-8 color-red">
        {{ t('result.p2') }}
      </p>
      <p class="bg-blue">
        {{ t('result.p3') }}
      </p>
      <p text-8 color-green>
        {{ t('result.p4') }}
      </p>
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
  title: UnoCSS Basic Usage
  result:
    title: Result
    p1: This page is styled with UnoCSS.
    p2: This sentence has font size 2rem, color red.
    p3: This sentence has background color blue.
    p4: Different of sentences above, this sentence uses attributify syntax.
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: UnoCSS 基本使用
  result:
    title: 结果
    p1: 这个页面使用了 UnoCSS 进行样式处理。
    p2: 这句话的字体大小为 2rem，颜色为红色。
    p3: 这句话的背景颜色为蓝色。
    p4: 与以上句子不同，这句话使用了属性化语法。
  back-home: "{'<'} 返回首页 {'>'}"

zh-TW:
  title: UnoCSS 基本使用
  result:
    title: 結果
    p1: 這個頁面使用了 UnoCSS 進行樣式處理。
    p2: 這句話的字體大小為 2rem，顏色為紅色。
    p3: 這句話的背景顏色為藍色。
    p4: 與以上句子不同，這句話使用了屬性化語法。
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
