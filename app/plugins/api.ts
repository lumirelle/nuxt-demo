export default defineNuxtPlugin({
  name: 'api',
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
      default: () => `${new Date().getTimezoneOffset() / (-60)}`,
    })
    const cookieClientIP = useCookie('clientIP', {
      default: () => '',
    })
    if (cookieClientIP.value === '') {
      cookieClientIP.value = await $fetch<string>('https://ip.ipipgo.com/ip') // This will update the cookie
    }

    const api = $fetch.create({
      // Base URL
      baseURL: import.meta.client ? config.public.apiBase : config.public.dockerBase ?? config.public.apiBase,

      // Timeout, 20s
      timeout: 20000,

      // Request interceptor
      // See https://github.com/unjs/ofetch#%EF%B8%8F-interceptors for more info
      async onRequest({ options }) {
        // Set user token
        if (cookieToken.value) {
          options.headers.set('Authorization', `Bearer ${cookieToken.value}`)
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
          const statusMessage = await response.text() || i18n.t('api.errors.login-expired')
          ElMessage.error(statusMessage)
          throw showError({
            statusCode: response.status,
            statusMessage,
          })
        }
        // Too many requests
        else if (response.status === 429) {
          const statusMessage = await response.text() || i18n.t('api.errors.too-many-requests')
          ElMessage.warning(statusMessage)
          throw showError({
            statusCode: response.status,
            statusMessage,
          })
        }
        // Account is locked or login by other people
        else if (response.status === 402 || response.status === 431) {
          await nuxtApp.runWithContext(() => navigateTo('/'))
          const statusMessage = await response.text() || i18n.t('api.errors.account-locked')
          ElMessage.error(statusMessage)
          throw showError({
            statusCode: response.status,
            statusMessage,
          })
        }
      },
    })

    // Expose to useNuxtApp().$api
    return {
      provide: {
        api,
      },
    }
  },
})
