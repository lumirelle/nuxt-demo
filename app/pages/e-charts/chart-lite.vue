<script lang="ts" setup>
import type { ECSSRClientEventParams } from 'echarts/ssr/client/types/index.js'
import { Code } from '#shared/constants/e-charts/chart-lite.code'

const { t } = useI18n({
  useScope: 'local',
})

const option = ref({
  backgroundColor: 'transparent',
  legend: {
    top: '5%',
    left: 'center',
    selected: {
      'Search Engine': true,
      'Direct': true,
      'Email': true,
      'Union Ads': true,
      'Video Ads': true,
    },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['30%', '70%'],
      roseType: 'angle',
      itemStyle: {
        borderRadius: [20, 5, 5, 10],
      },
      label: {
        show: false,
      },
      data: [
        { value: 800, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 400, name: 'Video Ads' },
      ],
    },
  ],
})

function onClick(params: ECSSRClientEventParams) {
  if (params.ssrType === 'legend' && params.dataIndex !== undefined) {
    const key = Object.keys(option.value.legend.selected)[params.dataIndex] as keyof typeof option.value.legend.selected
    if (key) {
      // toggle display of the series
      option.value.legend.selected[key] = !option.value.legend.selected[key]
    }
  }
}
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
        app/pages/e-charts/chart-lite.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <section w-full h-400px>
        <H level="3">
          VChartLight
        </H>
        <!-- We have to specify the `height` and `width` property in `init-options` for SSR. -->
        <VChartLight :option="option" :init-options="{ height: 400, width: 1200 }" @click="onClick" />
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
