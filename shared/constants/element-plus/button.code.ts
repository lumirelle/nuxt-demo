export const Code = {
  elButton:
`<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p><ElButton>{{ t('button') }}</ElButton></p>
  </div>
</template>

<i18n lang="yaml">
en:
  button: Click me
zh-CN:
  button: 点击我
zh-TW:
  button: 點擊我
</i18n>`,
  lazyElButton:
`<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p><LazyElButton>{{ t('button') }}</LazyElButton></p>
  </div>
</template>

<i18n lang="yaml">
en:
  button: Click me
zh-CN:
  button: 点击我
zh-TW:
  button: 點擊我
</i18n>`,
}

export default Code
