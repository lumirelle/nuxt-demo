<script setup lang="ts">
import { Code } from '~/constants/element-plus/button.code'

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
      <H level="2">
        ElButton
      </H>
      <HighlightJs :code="Code.elButton" />
    </section>
    <section>
      <p><ElButton>{{ t('button') }}</ElButton></p>
    </section>
    <section>
      <H level="2">
        LazyElButton
      </H>
      <HighlightJs :code="Code.lazyElButton" />
    </section>
    <section>
      <p><LazyElButton>{{ t('button') }}</LazyElButton></p>
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
