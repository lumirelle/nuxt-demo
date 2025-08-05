<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="yaml">
en:
  title: "{'@nuxt/scripts'}"
  global: "{'Try @nuxt/scripts - global script'}"
  demand: "{'Try @nuxt/scripts - load script on demand'}"
  back: Back to home
zh-CN:
  title: "{'@nuxt/scripts'}"
  global: "{'尝试 @nuxt/scripts - 全局脚本'}"
  demand: "{'尝试 @nuxt/scripts - 按需加载脚本'}"
  back: 返回首页
zh-TW:
  title: "{'@nuxt/scripts'}"
  global: "{'嘗試 @nuxt/scripts - 全局腳本'}"
  demand: "{'嘗試 @nuxt/scripts - 按需加載腳本'}"
  back: 返回首頁
</i18n>

<template>
  <div>
    <MyH level="1">
      {{ t('title') }}
    </MyH>
    <p>
      <NuxtLinkLocale to="/nuxt-scripts/global">
        <span>{{ t('global') }}</span>
      </NuxtLinkLocale>
    </p>
    <p>
      <NuxtLinkLocale to="/nuxt-scripts/demand">
        <span>{{ t('demand') }}</span>
      </NuxtLinkLocale>
    </p>
    <p>
      <NuxtLinkLocale to="/">
        <span>{{ t('back') }}</span>
      </NuxtLinkLocale>
    </p>
  </div>
</template>
