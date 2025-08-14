/* eslint-disable no-console */
export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const inspectItems: (string | string[])[] = ['webBase', 'dockerWebBase', 'proxyWebBase', ['scripts', 'googleTagManager', 'id']]
  for (const item of inspectItems) {
    // Support nested config
    if (Array.isArray(item)) {
      let config: any = runtimeConfig.public
      for (let i = 0; i < item.length; i++) {
        const key = item[i]
        if (key && config[key]) {
          config = config[key]
        }
        else {
          console.warn(`[Runtime Config] ${item.join('.')} is not set!`)
          break
        }
      }
      if (config) {
        console.info(`[Runtime Config] ${item.join('.')}: ${config}`)
      }
    }
    else if (runtimeConfig.public[item]) {
      console.info(`[Runtime Config] ${item}: ${runtimeConfig.public[item]}`)
    }
    else {
      console.warn(`[Runtime Config] ${item} is not set!`)
    }
  }
})
