<script setup lang="ts">
import { ref } from 'vue'

const date = ref<Date | null>(null)

function handleChange(date: Date | null) {
  ElMessage.success(`You pick the date: ${date?.toLocaleDateString()}`)
}
</script>

<template>
  <div>
    <MyH level="1">
      @element-plus/nuxt - DatePicker
    </MyH>
    <MyH level="2">
      DatePicker
    </MyH>
    <p><ElDatePicker v-model="date" type="datetime" @change="handleChange" /></p>
    <p>
      <NuxtLink to="/element-plus">
        <span>Back to try @element-plus/nuxt</span>
      </NuxtLink>
    </p>
  </div>
</template>
