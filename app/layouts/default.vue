<!-- This is an example of dark mode & UnoCSS & layout structure -->

<script setup lang="ts">
const isDark = useDark()
</script>

<template>
  <div>
    <header backdrop-blur border-b border-solid border-default>
      <div flex flex-row justify-between items-center max-w-1200px mx-auto py-1 px-4>
        <p text-5 font-bold>
          Nuxt 4 Demo
        </p>
        <ElSwitch v-model="isDark" :active-value="true" :inactive-value="false" :active-icon="ElIconMoon" :inactive-icon="ElIconSunny" inline-prompt />
      </div>
    </header>
    <div max-w-1200px mx-auto>
      <slot />
      <ElBacktop />
    </div>
  </div>
</template>
