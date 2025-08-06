<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="yaml">
en:
  title: "{'@nuxt/image'}"
  back: Back to home
zh-CN:
  title: "{'@nuxt/image'}"
  back: 返回首页
zh-TW:
  title: "{'@nuxt/image'}"
  back: 返回首頁
</i18n>

<template>
  <div>
    <MyH level="1">
      {{ t('title') }}
    </MyH>
    <div>
      <NuxtImg src="/images/avatar.png" alt="Avatar" />
    </div>
    <p>
      <NuxtLinkLocale to="/">
        <span>{{ t('back') }}</span>
      </NuxtLinkLocale>
    </p>
  </div>
</template>
