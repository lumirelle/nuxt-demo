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
    <MyH level="1">
      {{ t('title') }}
    </MyH>
    <MyH level="2">
      ElButton
    </MyH>
    <HighlightJs :code="Code.elButton" />
    <p><ElButton>{{ t('button') }}</ElButton></p>
    <MyH level="2">
      LazyElButton
    </MyH>
    <HighlightJs :code="Code.lazyElButton" />
    <p><LazyElButton>{{ t('button') }}</LazyElButton></p>
    <p>
      <NuxtLinkLocale to="/element-plus">
        <span>{{ t('back') }}</span>
      </NuxtLinkLocale>
    </p>
  </div>
</template>
