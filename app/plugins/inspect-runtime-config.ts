import { consola } from 'consola'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  if (!runtimeConfig.public.apiBase) {
    consola.error('API base URL is not set in runtime config')
  }
  else {
    consola.info('API base URL is set in runtime config', runtimeConfig.public.apiBase)
  }
  if (!runtimeConfig.public.dockerBase) {
    consola.info('Docker base URL is not set in runtime config')
  }
  else {
    consola.info('Docker base URL is set in runtime config', runtimeConfig.public.dockerBase)
  }
})
