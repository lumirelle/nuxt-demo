export default defineNuxtPlugin(async () => {
  const runtimeConfig = useRuntimeConfig()

  // const { session } = useUserSession()

  const cookieLocale = useCookie('locale')

  const cookieZoneDiff = useCookie('zoneDiff')

  const cookieClientIP = useCookie('clientIP')

  const api = $fetch.create({
    // Base URL
    baseURL: import.meta.client ? runtimeConfig.public.apiBase : runtimeConfig.public.dockerBase ?? runtimeConfig.public.apiBase,

    // Timeout, 20s
    timeout: 20000,

    // Request interceptor
    // See https://github.com/unjs/ofetch#%EF%B8%8F-interceptors for more info
    async onRequest({ options }) {
      // Set user token
      // if (session.value?.token) {
      // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
      // options.headers.set('Authorization', `Bearer ${session.value?.token}`)
      // }

      // Set user lang
      if (cookieLocale.value) {
        options.headers.set('lang', cookieLocale.value)
      }
      else {
        options.headers.set('lang', 'en')
      }

      // Set user timezone diff
      if (cookieZoneDiff.value) {
        options.headers.set('zoneDiff', cookieZoneDiff.value)
      }
      else {
        const zoneDiff = await $fetch('/api/zone-diff') ?? '' // This will set cookie to browser
        options.headers.set('zoneDiff', zoneDiff)
      }

      // Set user client IP
      if (cookieClientIP.value) {
        options.headers.set('X-Forwarded-For', cookieClientIP.value)
        options.headers.set('X-Real-IP', cookieClientIP.value)
      }
      else {
        const clientIP = await $fetch('/api/ip') ?? '' // This will set cookie to browser
        options.headers.set('X-Forwarded-For', clientIP)
        options.headers.set('X-Real-IP', clientIP)
      }
    },

    // Response interceptor
    // See https://github.com/unjs/ofetch#%EF%B8%8F-interceptors for more info
    async onResponseError({ response }) {
      // Invalid session token
      if (response.status === 401 || response.status === 110 || response.status === 111) {
        // TODO: Pending verification
        // await nuxtApp.runWithContext(() => navigateTo('/login'))
        ElMessage.error('Login expired, please log in again')
      }
      // Too many requests
      else if (response.status === 429) {
        ElMessage.warning('Too many requests, please try again later')
      }
      // Account is locked or login by other people
      else if (response.status === 402 || response.status === 431) {
        // await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})
