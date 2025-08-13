export const Code = {
  time:
`export default defineEventHandler(async () => {
  return new Date().toLocaleString()
})`,
  component:
`<script lang="ts" setup>
// This will shared the data from page // [!code focus]
const { data } = useNuxtData('shared-time') // [!code focus]
const stringifiedData = computed(() => JSON.stringify(data.value, null, 2)) // [!code focus]
</script>

<template>
  <div>
    <ShikiJs :code="stringifiedData" lang="json" /> // [!code focus]
  </div>
</template>`,
  page:
`<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
})

// Provide data // [!code focus]
const { data } = useFetch('/api/time', { // [!code focus]
  key: 'shared-time', // [!code focus]
  method: 'get', // [!code focus]
}) // [!code focus]

const stringifiedData = computed(() => JSON.stringify(data.value, null, 2)) // [!code focus]
</script>

<template>
  <div>
    <!-- Page -->
    <section>
      <H level="3">
        {{ t('result.page') }}
      </H>
      <ShikiJs :code="stringifiedData" lang="json" /> // [!code focus]
    </section>
    <!-- Component -->
    <section>
      <H level="3">
        {{ t('result.component') }}
      </H>
      <SharedTime /> // [!code focus]
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  result:
    page: Data From Page
    component: Shared Data Across Components

zh-CN:
  result:
    page: 来自页面的数据
    component: 在组件之间共享数据

zh-TW:
  result:
    page: 來自頁面的數據
    component: 在組件之間共享數據
</i18n>`,
}

export default Code
