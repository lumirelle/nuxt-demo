export const Code = {
  global:
`<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
})

function handleClick() { // [!code focus:6]
  // Using JSConfetti, which is loaded globally in \`nuxt.config.ts\`,
  // We can access it from the window object,
  const confetti = new window.JSConfetti()
  confetti.addConfetti({ emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"] })
}
</script>

<i18n lang="yaml">
en:
  description4: Click me to trigger confetti
zh-CN:
  description4: 点击我触发烟花效果
zh-TW:
  description4: 點擊我觸發煙花效果
</i18n>

<template>
  <button @click="handleClick"> // [!code focus:3]
    {{ t("description4") }}
  </button>
</template>`,
}

export default Code
