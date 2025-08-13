<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
})

const { data } = await useFetch('/api/mock-login', {
  method: 'get',
})

const stringifyData = JSON.stringify(data.value, null, 2)
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <ShikiJs :code="stringifyData" lang="json" />
    </section>
    <section>
      <NuxtLinkLocale to="/">
        <span>{{ t('back-home') }}</span>
      </NuxtLinkLocale>
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Custom Fetch Example
  back-home: "{'<'} Back to home page {'>'}"
zh-CN:
  title: 自定义获取示例
  back-home: "{'<'} 返回首页 {'>'}"
zh-TW:
  title: 自定義獲取示例
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
