export default defineEventHandler(async () => {
  return await $fetch('https://test-ipglobal.cd.xiaoxigroup.net/web/ipglobal-core/web/webMeal/queryStaticMeal')
})
