<script lang="ts" setup>
definePageMeta({
  parent: '/',
})

const { t } = useI18n({
  useScope: 'local',
})

// `useAPI` will pass custom headers to server automatically
const { data } = await useAPI('/api/headers-cookies', {
  baseURL: '/',
  method: 'get',
})

const stringifyData = computed(
  () =>
    JSON.stringify(data.value, null, 2)
      .replace(/("(?:lang|x-real-ip|x-forwarded-for|zonediff|zoneDiff|clientIP|locale|token|cookies)": [^\n]*)(\n)/g, '$1 // [!code focus] $2')
      .replace(/( {2}\})(\n)/, '$1 // [!code focus] $2'),
)

// `$api` will pass custom headers to server automatically
const manuallyData = ref({})

const { $api } = useNuxtApp()

const stringifyManuallyData = computed(
  () => JSON.stringify(manuallyData.value, null, 2)
    .replace(/("(?:lang|x-real-ip|x-forwarded-for|zonediff|zoneDiff|clientIP|locale|token|cookies)": [^\n]*)(\n)/g, '$1 // [!code focus] $2')
    .replace(/( {2}\})(\n)/, '$1 // [!code focus] $2'),
)

async function fetchData() {
  manuallyData.value = await $api('/api', {
    baseURL: 'https://yesno.wtf',
    method: 'get',
  })
}
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section grid="~ auto-cols-580px justify-between">
      <div row="start-0 end-1" col="start-0 end-1">
        <H level="3">
          <code>useAPI</code>
        </H>
        <ShikiJs :code="stringifyData" lang="json" />
      </div>
      <div row="start-0 end-1" col="start-1 end-2">
        <div flex justify-between>
          <H level="3">
            <code>$api</code>
          </H>
          <ElButton @click="fetchData">
            {{ t('fetch-data') }}
          </ElButton>
        </div>
        <ShikiJs :code="stringifyManuallyData" lang="json" />
      </div>
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
  fetch-dat: Fetch Data
zh-CN:
  title: 自定义获取示例
  back-home: "{'<'} 返回首页 {'>'}"
  fetch-data: 获取数据
zh-TW:
  title: 自定義獲取示例
  back-home: "{'<'} 返回首頁 {'>'}"
  fetch-data: 獲取數據
</i18n>
