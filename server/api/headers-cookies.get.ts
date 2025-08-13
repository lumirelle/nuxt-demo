export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  const headers = getHeaders(event)
  return {
    headers,
    cookies,
  }
})
