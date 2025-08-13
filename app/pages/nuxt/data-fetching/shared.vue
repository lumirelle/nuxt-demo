<script lang="ts" setup>
import { Code } from '#shared/constants/code/nuxt/data-fetching/shared.code'

definePageMeta({
  parent: '/',
})

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
        {{ t('result.title') }}
      </H>
      <!-- Page -->
      <section>
        <H level="3">
          {{ t('result.page') }}
        </H>
        <ShikiJs :code="stringifiedData" lang="json" />
      </section>
      <!-- Component -->
      <section>
        <H level="3">
          {{ t('result.component') }}
        </H>
        <SharedTime />
      </section>
    </section>
    <section>
      <H level="2">
        <i>server/api/time.get.ts</i>
      </H>
      <ShikiJs :code="Code.time" lang="ts" />
    </section>
    <section>
      <H level="2">
        <i>app/pages/nuxt/data-fetching/shared.vue</i>
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        <i>app/components/SharedTime.vue</i>
      </H>
      <ShikiJs :code="Code.component" lang="vue" />
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
    page: Data From Page
    component: Shared Data Across Components

zh-CN:
  title: Nuxt 数据获取共享用法
  back-home: "{'<'} 返回首页 {'>'}"
  result:
    title: 结果
    page: 来自页面的数据
    component: 在组件之间共享数据

zh-TW:
  title: Nuxt 數據獲取共享用法
  back-home: "{'<'} 返回首頁 {'>'}"
  result:
    title: 結果
    page: 來自頁面的數據
    component: 在組件之間共享數據
</i18n>
