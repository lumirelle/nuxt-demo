export const Code = {
  config:
`export default defineNuxtConfig({
  nitro: {
    storage: {
      cache: {
        driver: 'lru-cache',
        // Options provided to lru-cache constructor
        ttl: 1000 * 60 * 5,
        max: 100,
      },
    },
    devStorage: {
      cache: {
        driver: 'lru-cache',
        // Options provided to lru-cache constructor
        ttl: 1000 * 60 * 5,
        max: 100,
      },
    },
  },
})`,
  time:
`export default defineCachedEventHandler(
  async () => {
    return new Date().toLocaleString()
  },
  {
    name: 'cached-time',
  },
)`,
  page:
`<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
})

// Provide data
const { data } = useFetch('/api/time', {
  key: 'cached-time',
  method: 'get',
})

const stringifiedData = computed(() => JSON.stringify(data.value, null, 2))
</script>

<template>
  <div>
    <section>
      <H level="3">
        app/pages/nuxt/data-fetching/cached-1.vue & app/pages/nuxt/data-fetching/cached-2.vue
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
    component: Cached Data In Nitro (Server)

zh-CN:
  result:
    component: 在 Nitro（服务器）中缓存数据

zh-TW:
  result:
    component: 在 Nitro（伺服器）中緩存數據
</i18n>`,
}

export default Code
