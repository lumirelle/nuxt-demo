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
          <I18nT keypath="nuxt.more-info" tag="p">
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
          <I18nT keypath="vue.more-info" tag="p">
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
        <I18nT keypath="pinia.more-info" tag="p">
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
        <I18nT keypath="pinia.basic-usage.desc" tag="p">
          <template #states>
            <code>states</code>
          </template>
          <template #getters>
            <code>getters</code>
          </template>
          <template #actions>
            <code>actions</code>
          </template>
        </I18nT>
        <p>
          <NuxtLinkLocale to="/pinia/basic-usage">
            <span>{{ t('pinia.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
      <section>
        <H level="3">
          {{ t('pinia.initializing.title') }}
        </H>
        <p>
          {{ t('pinia.initializing.desc') }}
        </p>
        <p>
          <NuxtLinkLocale to="/pinia/initializing">
            <span>{{ t('pinia.initializing.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <section>
      <H level="2">
        {{ t('vue-router.title') }}
      </H>
      <section>
        <p>
          <I18nT keypath="vue-router.more-info" tag="p">
            <template #link>
              <NuxtLinkLocale to="https://router.vuejs.org/installation.html" external target="_blank">
                <span>Vue Router</span>
              </NuxtLinkLocale>
            </template>
          </I18nT>
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
            <span>{{ t('nuxt-modules.element-plus.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
      <section>
        <H level="3">
          {{ t('nuxt-modules.nuxt-scripts.title') }}
        </H>
        <p>
          <NuxtLinkLocale to="/nuxt-scripts">
            <span>{{ t('nuxt-modules.nuxt-scripts.try') }}</span>
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
        desc: A demo of using Pinia store with {states}, {getters}, and {actions} in a page.
        try: Try basic usage of Pinia
      initializing:
        title: Initializing Usage (Equivalent to `nuxtServerInit` in Nuxt 2)
        desc: A demo of using Pinia store and initializing it while app initializing.
        try: Try initializing usage of Pinia

    vue-router:
      title: Vue Router
      more-info: See {link} documentation for more information.

    nuxt-modules:
      title: Nuxt Modules
      nuxt-scripts:
        title: "{'@'}nuxt/scripts"
        try: "Try {'@'}nuxt/scripts"
      element-plus:
        title: "{'@'}element-plus/nuxt"
        try: "Try {'@'}element-plus/nuxt"

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
        desc: 使用 Pinia Store 的 {states}、{getters} 和 {actions}。
        try: 尝试 Pinia 的基本使用
      initializing:
        title: 初始化使用（等价于 Nuxt 2 的 `nuxtServerInit`）
        desc: 使用 Pinia Store 并在应用初始化时初始化。
        try: 尝试 Pinia 的初始化使用

    vue-router:
      title: Vue Router
      more-info: 查看 {link} 文档了解更多信息。

    nuxt-modules:
      title: Nuxt 模块
      nuxt-scripts:
        title: "{'@'}nuxt/scripts"
        try: "尝试 {'@'}nuxt/scripts"
      element-plus:
        title: "{'@'}element-plus/nuxt"
        try: "尝试 {'@'}element-plus/nuxt"

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
        desc: 使用 Pinia Store 的 {states}、{getters} 和 {actions}。
        try: 嘗試 Pinia 的基本使用
      initializing:
        title: 初始化使用（等價於 Nuxt 2 的 `nuxtServerInit`）
        desc: 使用 Pinia Store 並在應用初始化時初始化。
        try: 嘗試 Pinia 的初始化使用

    vue-router:
      title: Vue Router
      more-info: 查看 {link} 文檔了解更多信息。

    nuxt-modules:
      title: Nuxt 模組
      nuxt-scripts:
        title: "{'@'}nuxt/scripts"
        try: "嘗試 {'@'}nuxt/scripts"
      element-plus:
        title: "{'@'}element-plus/nuxt"
        try: "嘗試 {'@'}element-plus/nuxt"
  </i18n>
