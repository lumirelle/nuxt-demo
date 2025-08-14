<script setup lang="ts">
import { Code } from '#shared/constants/code/element-plus/button.code'

definePageMeta({
  parent: '/element-plus',
})

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section flex="~ gap-4">
      <div>
        <section>
          <H level="2">
            ElButton
          </H>
          <p><ElButton>{{ t('button') }}</ElButton></p>
          <ShikiJs :code="Code.elButton" lang="vue" />
        </section>
      </div>
      <div>
        <section>
          <H level="2">
            LazyElButton
          </H>
          <p><LazyElButton>{{ t('button') }}</LazyElButton></p>
          <ShikiJs :code="Code.lazyElButton" lang="vue" />
        </section>
      </div>
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
  title: "{'@'}element-plus/nuxt - Button"
  button: Click me
  back: "{'<'} Back to try {'@'}element-plus/nuxt {'>'}"
zh-CN:
  title: "{'@'}element-plus/nuxt - Button"
  button: 点击我
  back: "{'<'} 返回尝试 {'@'}element-plus/nuxt {'>'}"
zh-TW:
  title: "{'@'}element-plus/nuxt - Button"
  button: 點擊我
  back: "{'<'} 返回嘗試 {'@'}element-plus/nuxt {'>'}"
</i18n>
