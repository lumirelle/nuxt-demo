<script lang="ts" setup>
import { Code } from '#shared/constants/code/nuxt/data-fetching/custom-fetch.code'

definePageMeta({
  parent: '/',
})

const { t } = useI18n({
  useScope: 'local',
})

// `useCfetch` will pass custom headers to server automatically
const { data } = await useCfetch('/api/headers-cookies', {
  baseURL: '',
  method: 'get',
})

const stringifyData = computed(
  () =>
    JSON.stringify(data.value, null, 2)
      .replace(/("(?:lang|x-real-ip|x-forwarded-for|zonediff|zoneDiff|clientIP|locale|token|cookies)": [^\n]*)(\n)/g, '$1 // [!code focus] $2')
      .replace(/( {2}\})(\n)/, '$1 // [!code focus] $2'),
)

// `$cfetch` will pass custom headers to server automatically
const manuallyData = ref({})

const { $cfetch } = useNuxtApp()

const stringifyManuallyData = computed(
  () => JSON.stringify(manuallyData.value, null, 2)
    .replace(/("(?:data|type|lowestPrice|maxDiscount|maxSend)": [^\n]*)(\n)/g, '$1 // [!code focus] $2')
    .replace(/( {2}\],)(\n)/, '$1 // [!code focus] $2'),
)

async function fetchData() {
  manuallyData.value = await $cfetch('/web/v2/website/getLowestPrice', {
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
          <code>useCfetch</code>
        </H>
        <ShikiJs :code="stringifyData" lang="json" />
      </div>
      <div row="start-0 end-1" col="start-1 end-2">
        <div flex justify-between>
          <H level="3">
            <code>$cfetch</code>
          </H>
          <ElButton @click="fetchData">
            {{ t('fetch-data') }}
          </ElButton>
        </div>
        <ShikiJs :code="stringifyManuallyData" lang="json" />
      </div>
    </section>
    <section>
      <H level="3">
        <i>app/plugins/cfetch.ts</i>
      </H>
      <ShikiJs :code="Code.plugin" lang="ts" />
    </section>
    <section>
      <H level="3">
        <i>app/composables/useCfetch.ts</i>
      </H>
      <ShikiJs :code="Code.composable" lang="ts" />
    </section>
    <section>
      <H level="3">
        <i>app/pages/nuxt/data-fetching/custom-fetch.vue</i>
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
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
