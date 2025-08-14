export const Code = {
  config:
`export default defineNuxtConfig({
  nitro: {
    storage: {
      // Override the default options of cache storage // [!code focus:7]
      cache: {
        driver: 'lru-cache',
        // Options provided to lru-cache constructor
        ttl: 1000 * 60 * 5,
        max: 100,
      },
    },
    devStorage: {
      // Override the default options of cache storage in dev mode // [!code focus:7]
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
`// This is a cached event handler // [!code focus:2]
export default defineCachedEventHandler(
  async () => {
    return new Date().toLocaleString()
  },
  // Cache options // [!code focus:7]
  {
    name: 'cached-time',
    // If not provided, will act as the non-cached event handler
    maxAge: 1000 * 60 * 5,
  },
)`,
  page:
`<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
})

// Fetch data from Nitro (Server) // [!code focus:7]
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
        <i>app/pages/nuxt/data-fetching/cached-1.vue & app/pages/nuxt/data-fetching/cached-2.vue</i>
      </H>
      <ShikiJs :code="stringifiedData" lang="json" /> // [!code focus]
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
