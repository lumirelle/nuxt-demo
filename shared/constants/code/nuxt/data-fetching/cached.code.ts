export const Code = {
  config:
`export default defineNuxtConfig({
  nitro: {
    storage: {
      // Override the default options of cache storage // [!code focus]
      cache: { // [!code focus]
        driver: 'lru-cache', // [!code focus]
        // Options provided to lru-cache constructor // [!code focus]
        ttl: 1000 * 60 * 5, // [!code focus]
        max: 100, // [!code focus]
      }, // [!code focus]
    },
    // Override the default options of cache storage in dev mode // [!code focus]
    devStorage: {
      cache: { // [!code focus]
        driver: 'lru-cache', // [!code focus]
        // Options provided to lru-cache constructor // [!code focus]
        ttl: 1000 * 60 * 5, // [!code focus]
        max: 100, // [!code focus]
      }, // [!code focus]
    },
  },
})`,
  time:
`// This is a cached event handler // [!code focus]
export default defineCachedEventHandler( // [!code focus]
  async () => {
    return new Date().toLocaleString()
  },
  // Cache options // [!code focus]
  { // [!code focus]
    name: 'cached-time', // [!code focus]
    // If not provided, will act as the non-cached event handler // [!code focus]
    maxAge: 1000 * 60 * 5, // [!code focus]
  }, // [!code focus]
) // [!code focus]`,
  page:
`<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
})

// Fetch data from Nitro (Server) // [!code focus]
const { data } = useFetch('/api/time', { // [!code focus]
  key: 'cached-time', // [!code focus]
  method: 'get', // [!code focus]
}) // [!code focus]

const stringifiedData = computed(() => JSON.stringify(data.value, null, 2)) // [!code focus]
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
