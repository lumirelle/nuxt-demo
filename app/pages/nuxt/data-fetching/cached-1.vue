<script lang="ts" setup>
import { Code } from '#shared/constants/code/nuxt/data-fetching/cached.code'

definePageMeta({
  parent: '/',
})

const { t } = useI18n({
  useScope: 'local',
})

// Fetch data from Nitro (Server)
const { data } = useFetch('/api/cached-time', {
  key: 'cached-time',
  method: 'get',
})

const stringifiedData = computed(() => JSON.stringify(data.value, null, 2))
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <section>
        <H level="3">
          <code>Cached Time</code>
        </H>
        <ShikiJs :code="stringifiedData" lang="json" />
      </section>
    </section>
    <section>
      <H level="2">
        <i>nuxt.config.ts</i>
      </H>
      <ShikiJs :code="Code.config" lang="ts" />
    </section>
    <section>
      <H level="2">
        <i>server/api/cached-time.get.ts</i>
      </H>
      <ShikiJs :code="Code.time" lang="ts" />
    </section>
    <section>
      <H level="2">
        <i>app/pages/nuxt/data-fetching/cached-1.vue & app/pages/nuxt/data-fetching/cached-2.vue</i>
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
  title: Nuxt Data Fetching Cached Usage
  back-home: "{'<'} Back to home page {'>'}"
  result:
    title: Result
    component: Cached Data In Nitro (Server)

zh-CN:
  title: Nuxt 数据获取缓存用法
  back-home: "{'<'} 返回首页 {'>'}"
  result:
    title: 结果
    component: 在 Nitro（服务器）中缓存数据

zh-TW:
  title: Nuxt 數據獲取緩存用法
  back-home: "{'<'} 返回首頁 {'>'}"
  result:
    title: 結果
    component: 在 Nitro（伺服器）中緩存數據
</i18n>
