<script lang="ts" setup>
import { Code } from '#shared/constants/code/e-charts/basic-usage.code'

definePageMeta({
  parent: '/',
})

const { t } = useI18n({
  useScope: 'local',
})

const option = ref<ECOption>({
  dataset: {
    dimensions: ['Product', '2015', '2016', '2017'],
    source: [
      {
        Product: 'Matcha Latte',
        2015: 54,
        2016: 42,
        2017: 23,
      },
    ],
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }],
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
        app/pages/e-charts/basic-usage.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <section w-full h-400px>
        <H level="3">
          VChart
        </H>
        <VChart :option="option" />
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
  title: ECharts Basic Usage
  result:
    title: Result
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: ECharts 基础用法
  result:
    title: 结果
  back-home: "{'<'} 返回首页 {'>'}"

zh-TW:
  title: ECharts 基礎用法
  result:
    title: 結果
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
