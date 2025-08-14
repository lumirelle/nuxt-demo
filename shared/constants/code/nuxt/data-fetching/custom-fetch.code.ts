export const Code = {
  plugin:
`export default defineNuxtPlugin({
  name: 'cfetch', // cfetch, Custom fetch
  setup: async (nuxtApp) => {
    const config = useRuntimeConfig()

    // Not type here
    const i18n: any = nuxtApp.$i18n

    // Custom headers
    const cookieToken = useCookie('token', {
      default: () => '',
    })
    const cookieLocale = useCookie('locale', {
      default: () => 'en',
    })
    const cookieZoneDiff = useCookie('zoneDiff', {
      default: () => \`\${new Date().getTimezoneOffset() / (-60)}\`,
    })
    const cookieClientIP = useCookie('clientIP', {
      default: () => '',
    })
    if (cookieClientIP.value === '') {
      cookieClientIP.value = await $fetch<string>('https://ip.ipipgo.com/ip') // This will update the cookie
    }

    const cfetch = $fetch.create({ // [!code focus:63]
      // Base URL
      baseURL: import.meta.dev
        ? '' // Use proxy in development, bypass CORS issues
        : (config.public.dockerWebBase ?? config.public.webBase), // Use Docker or API web base URL in production, CORS will be handled by Nginx

      // Timeout, 20s
      timeout: 20000,

      // Request interceptor
      // See https://github.com/unjs/ofetch#%EF%B8%8F-interceptors for more info
      async onRequest({ options }) {
        // Set user token
        if (cookieToken.value) {
          options.headers.set('Authorization', \`Bearer \${cookieToken.value}\`)
        }

        // Set user lang
        options.headers.set('lang', cookieLocale.value)

        // Set user timezone diff
        options.headers.set('zoneDiff', cookieZoneDiff.value)

        // Set user client IP
        options.headers.set('X-Forwarded-For', cookieClientIP.value)
        options.headers.set('X-Real-IP', cookieClientIP.value)
      },

      // Response interceptor
      // See https://github.com/unjs/ofetch#%EF%B8%8F-interceptors for more info
      async onResponseError({ response }) {
      // Invalid session token
        if (response.status === 401 || response.status === 110 || response.status === 111) {
        // Redirect to home page
          await nuxtApp.runWithContext(() => navigateTo('/'))
          const statusMessage = await response.text() || i18n.t('cfetch.errors.login-expired')
          ElMessage.error(statusMessage)
          throw showError({
            statusCode: response.status,
            statusMessage,
          })
        }
        // Too many requests
        else if (response.status === 429) {
          const statusMessage = await response.text() || i18n.t('cfetch.errors.too-many-requests')
          ElMessage.warning(statusMessage)
          throw showError({
            statusCode: response.status,
            statusMessage,
          })
        }
        // Account is locked or login by other people
        else if (response.status === 402 || response.status === 431) {
          await nuxtApp.runWithContext(() => navigateTo('/'))
          const statusMessage = await response.text() || i18n.t('cfetch.errors.account-locked')
          ElMessage.error(statusMessage)
          throw showError({
            statusCode: response.status,
            statusMessage,
          })
        }
      },
    })

    // Expose to useNuxtApp().$cfetch
    return {
      provide: {
        cfetch,
      },
    }
  },
})`,
  composable:
`import type { UseFetchOptions } from 'nuxt/app'

export function useCfetch<ResT>(
  url: string | (() => string),
  options?: UseFetchOptions<ResT>,
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$cfetch,
  })
}`,
  page:
`<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
})

// \`useCfetch\` will pass custom headers to server automatically // [!code focus:5]
const { data } = await useCfetch('/api/headers-cookies', {
  baseURL: '',
  method: 'get',
})

const stringifyData = computed(
  () =>
    JSON.stringify(data.value, null, 2)
      .replace(/("(?:lang|x-real-ip|x-forwarded-for|zonediff|zoneDiff|clientIP|locale|token|cookies)": [^\\n]*)(\\n)/g, '$1 // [!code focus] $2')
      .replace(/( {2}\\})(\\n)/, '$1 // [!code focus] $2'),
)

// \`$cfetch\` will pass custom headers to server automatically // [!code focus:4]
const manuallyData = ref({})

const { $cfetch } = useNuxtApp()

const stringifyManuallyData = computed(
  () => JSON.stringify(manuallyData.value, null, 2)
    .replace(/("(?:data|type|lowestPrice|maxDiscount|maxSend)": [^\\n]*)(\\n)/g, '$1 // [!code focus] $2')
    .replace(/( {2}\\],)(\\n)/, '$1 // [!code focus] $2'),
)

async function fetchData() {  // [!code focus:5]
  manuallyData.value = await $cfetch('/web/v2/website/getLowestPrice', {
    method: 'get',
  })
}
</script>

<template>
  <div>
    <section grid="~ auto-cols-580px justify-between">
      <div row="start-0 end-1" col="start-0 end-1">
        <H level="3">
          <code>useCfetch</code>
        </H>
        <ShikiJs :code="stringifyData" lang="json" /> // [!code focus]
      </div>
      <div row="start-0 end-1" col="start-1 end-2">
        <div flex justify-between> // [!code focus:9]
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
  </div>
</template>

<i18n lang="yaml">
en:
  fetch-dat: Fetch Data
zh-CN:
  fetch-data: 获取数据
zh-TW:
  fetch-data: 獲取數據
</i18n>`,
}

export default Code
