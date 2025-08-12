<script lang="ts" setup>
// This will shared the data from page
const { data } = useNuxtData('shared-time')
const stringifiedData = computed(() => JSON.stringify(data.value, null, 2))
</script>

<template>
  <div>
    <ShikiJs :code="stringifiedData" lang="json" />
  </div>
</template>
