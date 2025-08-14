export const Code = {
  config:
`export default defineNuxtConfig({
  echarts: {
    // Enable both canvas and svg renderer
    renderer: ['canvas', 'svg'],
    // Add charts you want below, which is used by \`<VChart>\`
    charts: ['BarChart', 'LineChart', 'PieChart', 'MapChart'],
    // Add components you want below, which is used by \`<VChart>\`
    components: [
      'DatasetComponent',
      'GridComponent',
      'TooltipComponent',
      'ToolboxComponent',
      'LegendComponent',
      'GeoComponent',
      'VisualMapComponent',
    ],
    // Add features you want below, which is used by \`<VChart>\`
    features: ['LabelLayout', 'UniversalTransition'],
  },

  build: {
    // echarts-liquidfill is not ESM friendly // [!code highlight:2]
    transpile: ['echarts-liquidfill'],
  },
})`,
  page:
`<script lang="ts" setup>
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

function onClickLite(params: ECSSRClientEventParams) {
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
    <section w-full h-400px>
      <H level="3">
        VChartLite
      </H>
      <!-- We have to specify the \`height\` and \`width\` property in \`init-options\` for SSR. --> // [!code highlight]
      <VChartLight :option="option" :init-options="{ height: 400, width: 1200 }" @click="onClickLite" /> // [!code highlight]
    </section>
  </div>
</template>`,
}
