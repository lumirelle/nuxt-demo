<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Code } from '~/constants/pinia/basic-usage.code'

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
      <HighlightJs :code="Code.basic['app/stores/basic.ts']" />
    </section>
    <section>
      <H level="2">
        app/pages/pinia/basic-usage.vue
      </H>
      <HighlightJs :code="Code.basic['app/pages/pinia/basic-usage.vue']" />
    </section>
    <section>
      <H level="2">
        Result
      </H>
      <p>
        This count value is getting from store state: {{ store.count }}!
      </p>
      <p>
        This is double count from store getter: {{ store.doubleCount }}!
      </p>
      <p>
        This is triple count from store getter: {{ store.tripleCount }}!
      </p>
      <p>
        This is negative count from store getter: {{ store.negativeCount }}!
      </p>
      <p>
        They will changed while you click at the buttons below.
      </p>
      <div flex gap-2 mt-6>
        <ElButton @click="store.increment()">
          Increment
        </ElButton>
        <ElButton @click="store.decrement()">
          Decrement
        </ElButton>
        <ElButton @click="store.reset()">
          Reset
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
    back-home: "{'<'} Back to home page {'>'}"

  zh-CN:
    title: Pinia 基本使用
    back-home: "{'<'} 返回首頁 {'>'}"

  zh-TW:
    title: Pinia 基本使用
    back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
