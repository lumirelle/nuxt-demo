<script setup lang="ts">
import { ref } from 'vue'

import { Code } from '~/constants/element-plus/date-picker.code'

const date = ref<Date | null>(null)

const { t } = useI18n({
  useScope: 'local',
})

function handleChange(date: Date | null) {
  ElMessage.success(t('success', { date: date?.toLocaleString() }))
}
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        ElDatePicker
      </H>
      <HighlightJs :code="Code.elDatePicker" />
    </section>
    <section>
      <p><ElDatePicker v-model="date" type="datetime" @change="handleChange" /></p>
    </section>
    <section>
      <p>
        <NuxtLinkLocale to="/element-plus">
          <span>{{ t('back') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  title: "{'@'}element-plus/nuxt - DatePicker"
  back: "{'<'} Back to try {'@'}element-plus/nuxt {'>'}"
  success: 'You pick the date: {date}'
zh-CN:
  title: "{'@'}element-plus/nuxt - DatePicker"
  back: "{'<'} 返回尝试 {'@'}element-plus/nuxt {'>'}"
  success: '您选择了日期: {date}'
zh-TW:
  title: "{'@'}element-plus/nuxt - DatePicker"
  back: "{'<'} 返回嘗試 {'@'}element-plus/nuxt {'>'}"
  success: '您選擇了日期: {date}'
</i18n>
