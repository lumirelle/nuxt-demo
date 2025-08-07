<script setup lang="ts">
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
      <p>
        <NuxtLinkLocale to="/element-plus/button">
          <span>{{ t('button') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
    <section>
      <H level="2">
        ElDatePicker (Day.js)
      </H>
      <p>
        <NuxtLinkLocale to="/element-plus/date-picker">
          <span>{{ t('datePicker') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
    <section>
      <p>
        <NuxtLinkLocale to="/">
          <span>{{ t('back') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
  </div>
</template>

<i18n lang="yaml">
  en:
    title: "{'@element-plus/nuxt'}"
    button: "{'Try @element-plus/nuxt - Button'}"
    datePicker: "{'Try @element-plus/nuxt - DatePicker'}"
    back: "{'<'} Back to home page {'>'}"
  zh-CN:
    title: "{'@element-plus/nuxt'}"
    button: "{'尝试 @element-plus/nuxt - Button'}"
    datePicker: "{'尝试 @element-plus/nuxt - DatePicker'}"
    back: "{'<'} 返回首頁 {'>'}"
  zh-TW:
    title: "{'@element-plus/nuxt'}"
    button: "{'嘗試 @element-plus/nuxt - Button'}"
    datePicker: "{'嘗試 @element-plus/nuxt - DatePicker'}"
    back: "{'<'} 返回首頁 {'>'}"
  </i18n>
