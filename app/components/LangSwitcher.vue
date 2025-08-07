<script setup lang="ts">
import type { Locale } from '#i18n'

const { locale, locales, setLocale } = useI18n()

const visible = ref(false)

nextTick(() => {
  visible.value = true
})

function handleChange(code: Locale) {
  setLocale(code)
}
</script>

<template>
  <!-- CAUTION: DO NOT USE `v-model` here, it will change `locale` directly & missing the cookie update & other side effects -->
  <ElSelect v-show="visible" :model-value="locale" min-w-100px @change="handleChange">
    <ElOption v-for="i in locales" :key="i.code" :label="i.name" :value="i.code" />
  </ElSelect>
</template>
