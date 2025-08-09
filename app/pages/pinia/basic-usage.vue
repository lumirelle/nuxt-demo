<script setup lang="ts">
import { Code } from '#shared/constants/pinia/basic-usage.code'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  useScope: 'local',
})

const store = useBasicStore()
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        app/stores/basic.ts
      </H>
      <ShikiJs :code="Code.store" lang="ts" />
    </section>
    <section>
      <H level="2">
        app/pages/pinia/basic-usage.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <p>
        {{ t('result.count', { count: store.count }) }}
      </p>
      <p>
        {{ t('result.double-count', { count: store.doubleCount }) }}
      </p>
      <p>
        {{ t('result.triple-count', { count: store.tripleCount }) }}
      </p>
      <p>
        {{ t('result.negative-count', { count: store.negativeCount }) }}
      </p>
      <p>
        {{ t('result.changed') }}
      </p>
      <div flex gap-2 mt-6>
        <ElButton @click="store.increment()">
          {{ t('result.buttons.increment') }}
        </ElButton>
        <ElButton @click="store.decrement()">
          {{ t('result.buttons.decrement') }}
        </ElButton>
        <ElButton @click="store.reset()">
          {{ t('result.buttons.reset') }}
        </ElButton>
      </div>
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
  title: Pinia Basic Usage
  result:
    title: Result
    count: 'This count value is getting from store state: {count}!'
    double-count: 'This is double count from store getter: {count}!'
    triple-count: 'This is triple count from store getter: {count}!'
    negative-count: 'This is negative count from store getter: {count}!'
    changed: 'They will changed while you click at the buttons below.'
    buttons:
      increment: Increment
      decrement: Decrement
      reset: Reset
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Pinia 基本使用
  result:
    title: 结果
    count: '这个计数值是从 store 状态中获取的: {count}!'
    double-count: '这个是 double 计数值从 store 中获取的: {count}!'
    triple-count: '这个是 triple 计数值从 store 中获取的: {count}!'
    negative-count: '这个是 negative 计数值从 store 中获取的: {count}!'
    changed: '当你点击下面的按钮时，它们将会改变。'
    buttons:
      increment: 增加
      decrement: 减少
      reset: 重置
  back-home: "{'<'} 返回首頁 {'>'}"

zh-TW:
  title: Pinia 基本使用
  result:
    title: 結果
    count: '這個計數值是從 store 狀態中獲取的: {count}!'
    double-count: '這個是 double 計數值從 store 中獲取的: {count}!'
    triple-count: '這個是 triple 計數值從 store 中獲取的: {count}!'
    negative-count: '這個是 negative 計數值從 store 中獲取的: {count}!'
    changed: '當你點擊下面的按鈕時，它們將會改變。'
    buttons:
      increment: 增加
      decrement: 减少
      reset: 重置
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
