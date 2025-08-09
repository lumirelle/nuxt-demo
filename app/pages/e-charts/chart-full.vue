<script lang="ts" setup>
import { Code } from '#shared/constants/e-charts/chart-full.code'

import * as ECharts from 'echarts/core'
import usaJson from '~/assets/data/map/USA.json'

const { t } = useI18n({
  useScope: 'local',
})

ECharts.registerMap('USA', usaJson as any, {
  'Alaska': {
    left: -131,
    top: 25,
    width: 15,
  },
  'Hawaii': {
    left: -110,
    top: 28,
    width: 5,
  },
  'Puerto Rico': {
    left: -76,
    top: 26,
    width: 2,
  },
})

const option: ECOption = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    showDelay: 0,
    transitionDuration: 0.2,
    className: 'echarts-tooltip',
  },
  visualMap: {
    left: 'right',
    min: 500000,
    max: 38000000,
    inRange: {
      color: [
        '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026',
      ],
    },
    text: ['High', 'Low'],
    calculable: true,
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {},
    },
  },
  series: [
    {
      name: 'USA PopEstimates',
      type: 'map',
      roam: true,
      map: 'USA',
      emphasis: {
        label: {
          show: true,
        },
      },
      data: [
        { name: 'Alabama', value: 4822023 },
        { name: 'Alaska', value: 731449 },
        { name: 'Arizona', value: 6553255 },
        { name: 'Arkansas', value: 2949131 },
        { name: 'California', value: 38041430 },
        { name: 'Colorado', value: 5187582 },
        { name: 'Connecticut', value: 3590347 },
        { name: 'Delaware', value: 917092 },
        { name: 'District of Columbia', value: 632323 },
        { name: 'Florida', value: 19317568 },
        { name: 'Georgia', value: 9919945 },
        { name: 'Hawaii', value: 1392313 },
        { name: 'Idaho', value: 1595728 },
        { name: 'Illinois', value: 12875255 },
        { name: 'Indiana', value: 6537334 },
        { name: 'Iowa', value: 3074186 },
        { name: 'Kansas', value: 2885905 },
        { name: 'Kentucky', value: 4380415 },
        { name: 'Louisiana', value: 4601893 },
        { name: 'Maine', value: 1329192 },
        { name: 'Maryland', value: 5884563 },
        { name: 'Massachusetts', value: 6646144 },
        { name: 'Michigan', value: 9883360 },
        { name: 'Minnesota', value: 5379139 },
        { name: 'Mississippi', value: 2984926 },
        { name: 'Missouri', value: 6021988 },
        { name: 'Montana', value: 1005141 },
        { name: 'Nebraska', value: 1855525 },
        { name: 'Nevada', value: 2758931 },
        { name: 'New Hampshire', value: 1320718 },
        { name: 'New Jersey', value: 8864590 },
        { name: 'New Mexico', value: 2085538 },
        { name: 'New York', value: 19570261 },
        { name: 'North Carolina', value: 9752073 },
        { name: 'North Dakota', value: 699628 },
        { name: 'Ohio', value: 11544225 },
        { name: 'Oklahoma', value: 3814820 },
        { name: 'Oregon', value: 3899353 },
        { name: 'Pennsylvania', value: 12763536 },
        { name: 'Rhode Island', value: 1050292 },
        { name: 'South Carolina', value: 4723723 },
        { name: 'South Dakota', value: 833354 },
        { name: 'Tennessee', value: 6456243 },
        { name: 'Texas', value: 26059203 },
        { name: 'Utah', value: 2855287 },
        { name: 'Vermont', value: 626011 },
        { name: 'Virginia', value: 8185867 },
        { name: 'Washington', value: 6897012 },
        { name: 'West Virginia', value: 1855413 },
        { name: 'Wisconsin', value: 5726398 },
        { name: 'Wyoming', value: 576412 },
        { name: 'Puerto Rico', value: 3667084 },
      ],
    },
  ],
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
        app/pages/e-charts/chart-full.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <section w-full h-400px>
        <H level="3">
          VChartFull
        </H>
        <!-- We have to specify the `height` and `width` property in `init-options` for SSR. -->
        <VChartFull :option="option" :init-options="{ height: 400, width: 1200 }" />
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
