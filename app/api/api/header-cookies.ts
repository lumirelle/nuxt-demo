/**
 * Use API example
 * @returns Response data
 */
export async function useHeaderCookiesApi(key?: string) {
  // Commonly cases, use `useFetch` directly
  const { data: headerCookies } = await useFetch('/api/cookies', {
    key,
    method: 'GET',
  })
  return {
    headerCookies,
  }
}
