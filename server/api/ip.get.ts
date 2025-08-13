export default defineEventHandler(async (event) => {
  const res = await $fetch<string>('https://ip.ipipgo.com/ip')
  setCookie(event, 'clientIP', res, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
  })
  return res
})
