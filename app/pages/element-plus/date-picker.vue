<script setup lang="ts">
import { ref } from 'vue'

const date = ref<Date | null>(null)

function handleChange(date: Date | null) {
  ElMessage.success(`You pick the date: ${date?.toLocaleDateString()}`)
}
</script>

<template>
  <div>
    <h1>@element-plus/nuxt - DatePicker</h1>
    <h2>DatePicker</h2>
    <p><ElDatePicker v-model="date" type="datetime" @change="handleChange" /></p>
    <p>
      <NuxtLink to="/element-plus">
        Back to try @element-plus/nuxt
      </NuxtLink>
    </p>
  </div>
</template>
