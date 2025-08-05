<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="yaml">
en:
  title: "{'@element-plus/nuxt'}"
  button: "{'Try @element-plus/nuxt - Button'}"
  datePicker: "{'Try @element-plus/nuxt - DatePicker'}"
  back: Back to home
zh-CN:
  title: "{'@element-plus/nuxt'}"
  button: "{'尝试 @element-plus/nuxt - Button'}"
  datePicker: "{'尝试 @element-plus/nuxt - DatePicker'}"
  back: 返回首页
zh-TW:
  title: "{'@element-plus/nuxt'}"
  button: "{'嘗試 @element-plus/nuxt - Button'}"
  datePicker: "{'嘗試 @element-plus/nuxt - DatePicker'}"
  back: 返回首頁
</i18n>

<template>
  <div>
    <MyH level="1">
      {{ t('title') }}
    </MyH>
    <p>
      <NuxtLinkLocale to="/element-plus/button">
        <span>{{ t('button') }}</span>
      </NuxtLinkLocale>
    </p>
    <p>
      <NuxtLinkLocale to="/element-plus/date-picker">
        <span>{{ t('datePicker') }}</span>
      </NuxtLinkLocale>
    </p>
    <p>
      <NuxtLinkLocale to="/">
        <span>{{ t('back') }}</span>
      </NuxtLinkLocale>
    </p>
  </div>
</template>
