export default defineEventHandler(async (event) => {
  const res = `${new Date().getTimezoneOffset() / (-60)}`
  setCookie(event, 'zoneDiff', res)
  return res
})
