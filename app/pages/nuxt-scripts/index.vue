<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="yaml">
en:
  title: "{'@'}nuxt/scripts"
  global:
    title: Loading Scripts Globally
    try: "Try {'@'}nuxt/scripts - loading script globally"
  demand:
    title: Loading Scripts on Demand
    try: "Try {'@'}nuxt/scripts - loading script on demand"
  back: "{'<'} Back to home page {'>'}"
zh-CN:
  title: "{'@'}nuxt/scripts"
  global:
    title: 全局加载脚本
    try: "尝试 {'@'}nuxt/scripts - 全局加载脚本"
  demand:
    title: 按需加载脚本
    try: "尝试 {'@'}nuxt/scripts - 按需加载脚本"
  back: "{'<'} 返回首页 {'>'}"
zh-TW:
  title: "{'@'}nuxt/scripts"
  global:
    title: 全局加載腳本
    try: "嘗試 {'@'}nuxt/scripts - 全局加載腳本"
  demand:
    title: 按需加載腳本
    try: "嘗試 {'@'}nuxt/scripts - 按需加載腳本"
  back: "{'<'} 返回首頁 {'>'}"
</i18n>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        {{ t('global.title') }}
      </H>
      <p>
        <NuxtLinkLocale to="/nuxt-scripts/global">
          <span>{{ t('global.try') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
    <section>
      <H level="2">
        {{ t('demand.title') }}
      </H>
      <p>
        <NuxtLinkLocale to="/nuxt-scripts/demand">
          <span>{{ t('demand.try') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
    <section>
      <p>
        <NuxtLinkLocale to="/">
          <span>{{ t('back') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
  </div>
</template>
