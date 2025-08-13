<script setup lang="ts">
import { Code } from '#shared/constants/code/pinia/initializing.code'
import { useI18n } from 'vue-i18n'

definePageMeta({
  parent: '/',
})

const { t } = useI18n({
  useScope: 'local',
})

const initializingStore = useInitializingStore()
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <I18nT keypath="description.nuxt2" tag="p">
        <template #code>
          <code>nuxtServerInit</code>
        </template>
      </I18nT>
      <I18nT keypath="description.nuxt3" tag="p">
        <template #code>
          <code>callOnce</code>
        </template>
        <template #file>
          <code>app/app.vue</code>
        </template>
      </I18nT>
    </section>
    <section>
      <H level="2">
        app/stores/initializing.ts
      </H>
      <ShikiJs :code="Code.store" lang="ts" />
    </section>
    <section>
      <H level="2">
        app/app.vue
      </H>
      <ShikiJs :code="Code.app" lang="vue" />
    </section>
    <section>
      <H level="2">
        app/pages/pinia/initializing.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <p>
        {{ initializingStore.answer }}
      </p>
    </section>
    <section>
      <NuxtLinkLocale to="/">
        <span>{{ t('back-home') }}</span>
      </NuxtLinkLocale>
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Pinia Initializing Usage (Equivalent to `nuxtServerInit` in Nuxt 2)
  description:
    nuxt2: In Nuxt 2, we use {code} to initialize the store.
    nuxt3: In Nuxt 3, we use {code} in {file} to initialize the store instead.
  result:
    title: Result
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Pinia 初始化使用（等价于 Nuxt 2 的 `nuxtServerInit`）
  description:
    nuxt2: 在 Nuxt 2 中，我们使用 {code} 来初始化 store。
    nuxt3: 在 Nuxt 3 中，我们在 {file} 中使用 {code} 来初始化 store。
  result:
    title: 结果
  back-home: "{'<'} 返回首頁 {'>'}"

zh-TW:
  title: Pinia 初始化使用（等價於 Nuxt 2 的 `nuxtServerInit`）
  description:
    nuxt2: 在 Nuxt 2 中，我們使用 {code} 來初始化 store。
    nuxt3: 在 Nuxt 3 中，我們在 {file} 中使用 {code} 來初始化 store。
  result:
    title: 結果
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
