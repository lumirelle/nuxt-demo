import type dayjs from 'dayjs'

declare module '#app' {
  interface NuxtApp extends PluginInjection {
  }
}
interface PluginInjection {
  $dayjs: typeof dayjs
}
declare module 'vue' {
  interface ComponentCustomProperties extends PluginInjection {
  }
}
export {}
