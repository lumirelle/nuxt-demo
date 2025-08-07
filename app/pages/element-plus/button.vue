<script setup lang="ts">
import Code from '~/constants/element-plus/button.code'

const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="yaml">
en:
  title: "{'@element-plus/nuxt - Button'}"
  button: Click me
  back: "{'Back to try @element-plus/nuxt'}"
zh-CN:
  title: "{'@element-plus/nuxt - Button'}"
  button: 点击我
  back: "{'返回尝试 @element-plus/nuxt'}"
zh-TW:
  title: "{'@element-plus/nuxt - Button'}"
  button: 點擊我
  back: "{'返回嘗試 @element-plus/nuxt'}"
</i18n>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <H level="2">
      ElButton
    </H>
    <HighlightJs :code="Code.elButton" />
    <p><ElButton>{{ t('button') }}</ElButton></p>
    <H level="2">
      LazyElButton
    </H>
    <HighlightJs :code="Code.lazyElButton" />
    <p><LazyElButton>{{ t('button') }}</LazyElButton></p>
    <p>
      <NuxtLinkLocale to="/element-plus">
        <span>{{ t('back') }}</span>
      </NuxtLinkLocale>
    </p>
  </div>
</template>
