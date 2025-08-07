<script setup lang="ts">
import type { Locale } from '#i18n'

const { locale, locales } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const visible = ref(false)

nextTick(() => {
  visible.value = true
})

function handleChange(code: Locale) {
  navigateTo(switchLocalePath(code))
}
</script>

<template>
  <ElSelect v-show="visible" v-model="locale" min-w-100px @change="handleChange">
    <ElOption v-for="i in locales" :key="i.code" :label="i.name" :value="i.code" />
  </ElSelect>
</template>
