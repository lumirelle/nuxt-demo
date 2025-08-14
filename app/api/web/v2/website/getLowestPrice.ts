/**
 * Use API example
 * @returns Response data
 */
export async function useGetLowesetPriceApi(key?: string) {
  // With custom headers, use `useCfetch`
  const { data: headerCookies } = await useCfetch('/v2/website/getLowestPrice', {
    key,
    method: 'GET',
  })
  return {
    headerCookies,
  }
}
