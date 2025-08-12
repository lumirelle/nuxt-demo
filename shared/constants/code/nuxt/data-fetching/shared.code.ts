export const Code = {
  time:
`export default defineEventHandler(async () => {
  return new Date().toLocaleString()
})`,
  component:
`<script lang="ts" setup>
// This will shared the data from page
const { data } = useNuxtData('shared-time')
const stringifiedData = computed(() => JSON.stringify(data.value, null, 2))
</script>

<template>
  <div>
    <ShikiJs :code="stringifiedData" lang="json" />
  </div>
</template>`,
  page:
`<script lang="ts" setup>
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
      <SharedStaticMeal />
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  result:
    component: Shared Data Across Components

zh-CN:
  result:
    component: 在组件之间共享数据

zh-TW:
  result:
    component: 在組件之間共享數據
</i18n>`,
}

export default Code
