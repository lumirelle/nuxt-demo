<script setup lang="ts">
const { locale, locales } = useI18n()

const visible = ref(false)

nextTick(() => {
  visible.value = true
})
</script>

<template>
  <ElSelect v-show="visible" v-model="locale" min-w-100px>
    <ElOption v-for="i in locales" :key="i.code" :label="i.name" :value="i.code" :hidden="i.code === locale" />
  </ElSelect>
</template>
