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
    // echarts-liquidfill is not ESM friendly // [!code highlight]
    transpile: ['echarts-liquidfill'], // [!code highlight]
  },
})`,
  page:
`<script lang="ts" setup>
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
    <section w-full h-400px>
      <H level="3">
        VChart
      </H>
      <VChart :option="option" />
    </section>
  </div>
</template>`,
}
