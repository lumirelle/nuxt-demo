<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="yaml">
en:
  title: Welcome to Nuxt 4
  modules:
    title: "Nuxt Modules"
    nuxtScripts:
      title: "{'@nuxt/scripts'}"
      description: "{'Try @nuxt/scripts'}"
    elementPlus:
      title: "{'@element-plus/nuxt'}"
      description: "{'Try @element-plus/nuxt'}"
zh-CN:
  title: 欢迎使用 Nuxt 4
  modules:
    title: "Nuxt 模块"
    nuxtScripts:
      title: "{'@nuxt/scripts'}"
      description: "{'尝试 @nuxt/scripts'}"
    elementPlus:
      title: "{'@element-plus/nuxt'}"
      description: "{'尝试 @element-plus/nuxt'}"
zh-TW:
  title: 歡迎使用 Nuxt 4
  modules:
    title: "Nuxt 模組"
    nuxtScripts:
      title: "{'@nuxt/scripts'}"
      description: "{'嘗試 @nuxt/scripts'}"
    elementPlus:
      title: "{'@element-plus/nuxt'}"
      description: "{'嘗試 @element-plus/nuxt'}"
</i18n>

<template>
  <div>
    <div>
      <MyH level="1">
        {{ t('title') }}
      </MyH>
    </div>
    <MyH level="2">
      {{ t('modules.title') }}
    </MyH>
    <MyH level="3">
      {{ t('modules.nuxtScripts.title') }}
    </MyH>
    <p>
      <NuxtLinkLocale to="/nuxt-scripts">
        <span>{{ t('modules.nuxtScripts.description') }}</span>
      </NuxtLinkLocale>
    </p>
    <MyH level="3">
      {{ t('modules.elementPlus.title') }}
    </MyH>
    <p>
      <NuxtLinkLocale to="/element-plus">
        <span>{{ t('modules.elementPlus.description') }}</span>
      </NuxtLinkLocale>
    </p>
  </div>
</template>
