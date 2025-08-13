<script setup lang="ts">
import { Code } from '#shared/constants/code/bignumber-js/basic-usage.code'
import { BigNumber } from 'bignumber.js'

definePageMeta({
  parent: '/',
})

const { t } = useI18n({
  useScope: 'local',
})

const num1 = new BigNumber(43210) // '43210'
const num2 = new BigNumber('4.321e+4') // '43210'
const num3 = new BigNumber('-735.0918e-430') // '-7.350918e-428'
const num4 = new BigNumber('123412421.234324', 5) // '607236.557696'
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        shared/utils/bignumber.ts
      </H>
      <p v-for="i in 2" :key="i">
        {{ t(`utils.p${i}`) }}
      </p>
      <ShikiJs :code="Code.utils" lang="ts" />
    </section>
    <section>
      <H level="2">
        app/pages/bignumber-js/basic-usage.vue
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <p>Number 1: {{ num1 }}, {{ num1.toString() === '43210' ? 'Correct' : 'Error' }}</p>
      <p>Number 2: {{ num2 }}, {{ num2.toString() === '43210' ? 'Correct' : 'Error' }}</p>
      <p>Number 3: {{ num3 }}, {{ num3.toString() === '-7.350918e-428' ? 'Correct' : 'Error' }}</p>
      <p>Number 4: {{ num4 }}, {{ num4.toString() === '607236.557696' ? 'Correct' : 'Error' }}</p>
      <p>Number 1 * Number 2: {{ bigMultiply(num1, num2) }}, {{ bigMultiply(num1, num2).toString() === '1867104100' ? 'Correct' : 'Error' }}</p>
      <p style="overflow-wrap: anywhere;">
        Number 3 + Number 4: {{ bigAdd(num3, num4) }}, {{ bigAdd(num3, num4).toString() === '607236.55769599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992649082' ? 'Correct' : 'Error' }}
      </p>
      <p>Number 1 / Number 2: {{ bigDivide(num1, num2) }}, {{ bigDivide(num1, num2).toString() === '1' ? 'Correct' : 'Error' }}</p>
      <p>Number 4 ^ 2: {{ bigPow(num4, 2) }}, {{ bigPow(num4, 2).toString() === '368736237002.487536828416' ? 'Correct' : 'Error' }}</p>
      <p>Number 1 toFixed(2): {{ bigToFixed(num1, 2) }}, {{ bigToFixed(num1, 2).toString() === '43210.00' ? 'Correct' : 'Error' }}</p>
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
  title: Bignumber.js Basic Usage
  utils:
    p1: This is a utility function for big number operations.
    p2: These function are auto-imported by Nuxt.
  result:
    title: Result
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Bignumber.js 基本使用
  utils:
    p1: 这是一个用于大数字运算的工具函数。
    p2: 这些函数是由 Nuxt 自动导入的。
  result:
    title: 结果
  back-home: "{'<'} 返回首页 {'>'}"

zh-TW:
  title: Bignumber.js 基本使用
  utils:
    p1: 這是一個用於大數字運算的工具函數。
    p2: 這些函數是由 Nuxt 自動導入的。
  result:
    title: 結果
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
