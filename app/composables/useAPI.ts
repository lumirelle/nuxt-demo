import type { UseFetchOptions } from 'nuxt/app'

export function useAPI<ResT>(
  url: string | (() => string),
  options?: UseFetchOptions<ResT>,
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}
