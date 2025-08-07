export const Code = {
  config:
`import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    // \`presetWind3\` provides the same rules as Tailwind CSS 3
    presetWind3(),
    // \`presetAttributify\` let you can write CSS classes like HTML attributes
    presetAttributify(),
  ],
  // Custom rules here, with the magic of \`presetAttributify\` ~
  // This is an example of generating custom rules with Element Plus theme variables
  rules: [
    ['bg-default', {
      'background-color': 'var(--el-bg-color)',
    }],
    [/bg-\((.*)\)/, ([, c]) => ({
      'background-color': \`var(\${c})\`,
    })],
    ['border-default', {
      'border-color': 'var(--el-border-color)',
    }],
    [/border-\((.*)\)/, ([, c]) => ({
      'border-color': \`var(\${c})\`,
    })],
  ],
})`,
  page:
`<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
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
  </div>
</template>

<i18n lang="yaml">
en:
  result:
    p1: This page is styled with UnoCSS.
    p2: This sentence has font size 2rem, color red.
    p3: This sentence has background color blue.
    p4: Different of sentences above, this sentence uses attributify syntax.

zh-CN:
  result:
    p1: 这个页面使用了 UnoCSS 进行样式处理。
    p2: 这句话的字体大小为 2rem，颜色为红色。
    p3: 这句话的背景颜色为蓝色。
    p4: 与以上句子不同，这句话使用了属性化语法。

zh-TW:
  result:
    p1: 這個頁面使用了 UnoCSS 進行樣式處理。
    p2: 這句話的字體大小為 2rem，顏色為紅色。
    p3: 這句話的背景顏色為藍色。
    p4: 與以上句子不同，這句話使用了屬性化語法。
</i18n>`,
}

export default Code
