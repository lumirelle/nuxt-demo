<script setup lang="ts">
import { Code } from '#shared/constants/element-plus/configure.code'

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
      <p>
        {{ t('p1') }}
      </p>
    </section>
    <section>
      <ShikiJs :code="Code.nuxtConfig" lang="ts" />
    </section>
    <section>
      <p>
        <NuxtLinkLocale to="/element-plus">
          <span>{{ t('back') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  title: 'Configure Element Plus'
  back: "{'<'} Back to try {'@'}element-plus/nuxt {'>'}"
  p1: You can import dark theme & override variables in your `nuxt.config.ts`
zh-CN:
  title: '配置 Element Plus'
  back: "{'<'} 返回尝试 {'@'}element-plus/nuxt {'>'}"
  p1: 你可以在 `nuxt.config.ts` 中导入暗色主题 & 覆盖变量
zh-TW:
  title: '配置 Element Plus'
  back: "{'<'} 返回嘗試 {'@'}element-plus/nuxt {'>'}"
  p1: 你可以在 `nuxt.config.ts` 中導入暗色主題 & 覆蓋變數
</i18n>
