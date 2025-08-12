<script lang="ts" setup>
import { Code } from '#shared/constants/code/nuxt/data-fetching/shared.code'

const { t } = useI18n({
  useScope: 'local',
})

// Provide data
const { data } = useFetch('/api/time', {
  key: 'shared-time',
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
        server/api/time.get.ts
      </H>
      <ShikiJs :code="Code.time" lang="ts" />
    </section>
    <section>
      <H level="2">
        app/pages/nuxt/data-fetching/shared.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <section>
        <H level="3">
          <code>useFetch</code> & <code>useAsyncData</code>
        </H>
        <ShikiJs :code="stringifiedData" lang="json" />
      </section>
      <section>
        <H level="3">
          {{ t('result.component') }}
        </H>
        <SharedTime />
      </section>
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
  title: Nuxt Data Fetching Shared Usage
  back-home: "{'<'} Back to home page {'>'}"
  result:
    title: Result
    component: Shared Data Across Components

zh-CN:
  title: Nuxt 数据获取共享用法
  back-home: "{'<'} 返回首页 {'>'}"
  result:
    title: 结果
    component: 在组件之间共享数据

zh-TW:
  title: Nuxt 數據獲取共享用法
  back-home: "{'<'} 返回首頁 {'>'}"
  result:
    title: 結果
    component: 在組件之間共享數據
</i18n>
