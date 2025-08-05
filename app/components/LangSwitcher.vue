<script setup lang="ts">
const { locale, locales } = useI18n()
</script>

<template>
  <ElSelect v-model="locale" min-w-100px>
    <ElOption v-for="i in locales" :key="i.code" :label="i.name" :value="i.code" :hidden="i.code === locale" />
  </ElSelect>
</template>
