export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const inspectItems: string[] = ['webBase', 'dockerWebBase', 'proxyWebBase']
  for (const item of inspectItems) {
    if (runtimeConfig.public[item]) {
      // eslint-disable-next-line no-console
      console.info(`[Runtime Config] ${item}: ${runtimeConfig.public[item]}`)
    }
    else {
      console.warn(`[Runtime Config] ${item} is not set!`)
    }
  }
})
