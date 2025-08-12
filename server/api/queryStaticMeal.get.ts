import type { StaticMeal } from '#shared/schemas/queryStaticMeal'

export default defineEventHandler(async () => {
  return await $fetch<StaticMeal>('https://test-ipglobal.cd.xiaoxigroup.net/web/ipglobal-core/web/webMeal/queryStaticMeal')
})
