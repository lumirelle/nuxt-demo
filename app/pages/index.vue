<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>

    <section>
      <H level="2">
        {{ t('nuxt.title') }}
      </H>
      <section>
        <p>
          <I18nT keypath="nuxt.more-info">
            <template #link>
              <NuxtLinkLocale to="https://nuxt.com/docs/4.x/getting-started/introduction" external target="_blank">
                <span>Nuxt 4</span>
              </NuxtLinkLocale>
            </template>
          </I18nT>
        </p>
      </section>
    </section>

    <section>
      <H level="2">
        {{ t('vue.title') }}
      </H>
      <section>
        <p>
          <I18nT keypath="vue.more-info">
            <template #link>
              <NuxtLinkLocale to="https://vuejs.org/guide/introduction.html" external target="_blank">
                <span>Vue 3</span>
              </NuxtLinkLocale>
            </template>
          </I18nT>
        </p>
      </section>
    </section>

    <section>
      <H level="2">
        {{ t('pinia.title') }}
      </H>
      <section>
        <I18nT keypath="pinia.more-info">
          <template #link>
            <NuxtLinkLocale to="https://pinia.vuejs.org/zh/introduction.html" external target="_blank">
              <span>Pinia</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('pinia.basic-usage.title') }}
        </H>
        <p>
          <NuxtLinkLocale to="/pinia/basic-usage">
            <span>{{ t('pinia.basic-usage.description') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
      <section>
        <H level="3">
          {{ t('pinia.initializing.title') }}
        </H>
        <p>
          <NuxtLinkLocale to="/pinia/initializing">
            <span>{{ t('pinia.initializing.description') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <section>
      <H level="2">
        {{ t('nuxt-modules.title') }}
      </H>
      <section>
        <H level="3">
          {{ t('nuxt-modules.element-plus.title') }}
        </H>
        <p>
          <NuxtLinkLocale to="/element-plus">
            <span>{{ t('nuxt-modules.element-plus.description') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
      <section>
        <H level="3">
          {{ t('nuxt-modules.nuxt-scripts.title') }}
        </H>
        <p>
          <NuxtLinkLocale to="/nuxt-scripts">
            <span>{{ t('nuxt-modules.nuxt-scripts.description') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>
  </div>
</template>

<i18n lang="yaml">
  en:
    title: Welcome to Nuxt 4

    nuxt:
      title: Nuxt 4
      more-info: See {link} documentation for more information.

    vue:
      title: Vue 3
      more-info: See {link} documentation for more information.

    pinia:
      title: Pinia
      more-info: See {link} documentation for more information.
      basic-usage:
        title: Basic Usage
        description: Try basic usage of Pinia
      initializing:
        title: Initializing Usage (Equivalent to `nuxtServerInit` in Nuxt 2)
        description: Try initializing usage of Pinia

    nuxt-modules:
      title: Nuxt Modules
      nuxt-scripts:
        title: "{'@'}nuxt/scripts"
        description: "Try {'@'}nuxt/scripts"
      element-plus:
        title: "{'@'}element-plus/nuxt"
        description: "Try {'@'}element-plus/nuxt"

  zh-CN:
    title: 欢迎使用 Nuxt 4

    nuxt:
      title: Nuxt 4
      more-info: 查看 {link} 文档了解更多信息。

    vue:
      title: Vue 3
      more-info: 查看 {link} 文档了解更多信息。

    pinia:
      title: Pinia
      basic-usage:
        title: 基本使用
        description: 尝试 Pinia 的基本使用
      initializing:
        title: 初始化使用（等價於 Nuxt 2 的 `nuxtServerInit`）
        description: 尝试 Pinia 的初始化使用

    nuxt-modules:
      title: Nuxt 模块
      nuxt-scripts:
        title: "{'@'}nuxt/scripts"
        description: "尝试 {'@'}nuxt/scripts"
      element-plus:
        title: "{'@'}element-plus/nuxt"
        description: "尝试 {'@'}element-plus/nuxt"

  zh-TW:
    title: 歡迎使用 Nuxt 4

    nuxt:
      title: Nuxt 4
      more-info: 查看 {link} 文檔了解更多信息。

    vue:
      title: Vue 3
      more-info: 查看 {link} 文檔了解更多信息。

    pinia:
      title: Pinia
      basic-usage:
        title: 基本使用
        description: 嘗試 Pinia 的基本使用
      initializing:
        title: 初始化使用（等價於 Nuxt 2 的 `nuxtServerInit`）
        description: 嘗試 Pinia 的初始化使用

    nuxt-modules:
      title: Nuxt 模組
      nuxt-scripts:
        title: "{'@'}nuxt/scripts"
        description: "嘗試 {'@'}nuxt/scripts"
      element-plus:
        title: "{'@'}element-plus/nuxt"
        description: "嘗試 {'@'}element-plus/nuxt"
  </i18n>
