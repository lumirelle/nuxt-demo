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
        {{ t('button.title') }}
      </H>
      <p>
        <NuxtLinkLocale to="/element-plus/button">
          <span>{{ t('button.try') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
    <section>
      <H level="2">
        {{ t('datePicker.title') }}
      </H>
      <p>
        <NuxtLinkLocale to="/element-plus/date-picker">
          <span>{{ t('datePicker.try') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
    <section>
      <H level="2">
        {{ t('configure.title') }}
      </H>
      <p>
        <NuxtLinkLocale to="/element-plus/configure">
          <span>{{ t('configure.try') }}</span>
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
    button:
      title: Button
      try: "{'Try @element-plus/nuxt - Button'}"
    datePicker:
      title: DatePicker (Based on Day.js)
      try: "{'Try @element-plus/nuxt - DatePicker'}"
    configure:
      title: Configure Element Plus
      try: Try dark theme & variables override
    back: "{'<'} Back to home page {'>'}"
  zh-CN:
    title: "{'@element-plus/nuxt'}"
    button:
      title: Button
      try: "{'尝试 @element-plus/nuxt - Button'}"
    datePicker:
      title: DatePicker (基于 Day.js)
      try: "{'尝试 @element-plus/nuxt - DatePicker'}"
    configure:
      title: "配置 Element Plus"
      try: 尝试暗色主题 & 覆盖变量
    back: "{'<'} 返回首頁 {'>'}"
  zh-TW:
    title: "{'@element-plus/nuxt'}"
    button:
      title: Button
      try: "{'嘗試 @element-plus/nuxt - Button'}"
    datePicker:
      title: DatePicker (基於 Day.js)
      try: "{'嘗試 @element-plus/nuxt - DatePicker'}"
    configure:
      title: "配置 Element Plus"
      try: 嘗試暗色主題 & 覆蓋變數
    back: "{'<'} 返回首頁 {'>'}"
  </i18n>
