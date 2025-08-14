export const Code = {
  elDatePicker:
`<script setup lang="ts">
import { ref } from 'vue'

const date = ref<Date | null>(null) // [!code focus]

const { t } = useI18n({
  useScope: 'local',
})

function handleChange(date: Date | null) { // [!code focus:3]
  ElMessage.success(t('success', { date: date?.toLocaleString() }))
}
</script>

<template>
  <div>
    <p><ElDatePicker v-model="date" type="datetime" @change="handleChange" /></p> // [!code focus]
  </div>
</template>

<i18n lang="yaml">
en:
  success: 'You pick the date: {date}'
zh-CN:
  success: '您选择了日期: {date}'
zh-TW:
  success: '您選擇了日期: {date}'
</i18n>`,
}

export default Code
