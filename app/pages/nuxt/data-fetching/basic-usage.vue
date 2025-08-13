<script lang="ts" setup>
import { Code } from '#shared/constants/code/nuxt/data-fetching/basic-usage.code'

definePageMeta({
  parent: '/',
})

const { t } = useI18n({
  useScope: 'local',
})

// Use `useFetch` & `useAsyncData` for server-side data fetching

// `useFetch` is a developer experience sugar of `useAsyncData` & `$fetch`
// This is nearly equivalent to `useAsyncData('staticMeal', () => $fetch('/api/time'))`
const { data } = useFetch('/api/time', {
  key: 'time',
  method: 'get',
})

const stringifiedData = computed(() => JSON.stringify(data.value, null, 2))

const { $api } = useNuxtApp()

function submit() {
  // Use `$fetch` for client-side data fetching
  $fetch('/api/submit', {
    method: 'post',
  }).then((res) => {
    ElMessage.success(res.message)
  }).catch((error) => {
    ElMessage.error(error.message)
  })

  // Use `$api` for client-side data fetching
  $api<{ message: string }>('/ipglobal-core/web/webMeal/queryWebLowMeal', {
    method: 'get',
  }).then((res) => {
    ElMessage.success(res.message)
  }).catch((error) => {
    ElMessage.error(error.message)
  })
}

const question = ref('')

function ask() {
  // Use `$fetch` for client-side data fetching
  $fetch('/api/ask', {
    method: 'get',
  }).then((res) => {
    ElMessage.success(res.message)
  }).catch((error) => {
    ElMessage.error(error.message)
  })
}
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        server/api/time.get.ts
      </H>
      <ShikiJs :code="Code.time" lang="ts" />
    </section>
    <section>
      <H level="2">
        server/api/sumbit.post.ts
      </H>
      <ShikiJs :code="Code.sumbit" lang="ts" />
    </section>
    <section>
      <H level="2">
        server/api/ask.get.ts
      </H>
      <ShikiJs :code="Code.ask" lang="ts" />
    </section>
    <section>
      <H level="2">
        app/pages/nuxt/data-fetching/basic-usage.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <section>
        <H level="3">
          <code>$fetch</code>
        </H>
        <div flex gap-4 h-100px>
          <div flex="~ 1 col" justify-between>
            <p>{{ t('click-submit') }}</p>
            <ElButton @click="submit">
              {{ t('submit') }}
            </ElButton>
          </div>
          <div flex="~ 1 col" justify-between>
            <p>{{ t('blur-ask') }}</p>
            <ElInput v-model="question" @blur="ask" />
          </div>
        </div>
      </section>
      <section>
        <H level="3">
          <code>useFetch</code> & <code>useAsyncData</code>
        </H>
        <ShikiJs :code="stringifiedData" lang="json" />
      </section>
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
  title: Nuxt Data Fetching Basic Usage
  back-home: "{'<'} Back to home page {'>'}"
  result:
    title: Result
  submit: Submit
  click-submit: If you click this submit button, you will get an equal share of both error and success.
  blur-ask: If you leave this input, you will get an equal share of both yes and no.

zh-CN:
  title: Nuxt 数据获取基础用法
  back-home: "{'<'} 返回首页 {'>'}"
  result:
    title: 结果
  submit: 提交
  click-submit: 如果您点击此提交按钮，您将获得错误和成功各自一半。
  blur-ask: 如果您离开此输入框，您将获得“是”和“否”各自一半。

zh-TW:
  title: Nuxt 數據獲取基礎用法
  back-home: "{'<'} 返回首頁 {'>'}"
  result:
    title: 結果
  submit: 提交
  click-submit: 如果您點擊此提交按鈕，您將獲得錯誤和成功各自一半。
  blur-ask: 如果您離開此輸入框，您將獲得“是”和“否”各自一半。
</i18n>
