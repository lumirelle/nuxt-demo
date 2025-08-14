import type { UseFetchOptions } from 'nuxt/app'

export function useCfetch<ResT>(
  url: string | (() => string),
  options?: UseFetchOptions<ResT>,
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$cfetch,
  })
}
