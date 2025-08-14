export const Code = {
  demand:
`<script setup lang="ts">
const mouseOverEl = ref<HTMLElement | null>(null) // [!code focus:18]

const { onLoaded } = useScriptNpm({
  packageName: "js-confetti",
  file: "dist/js-confetti.browser.js",
  version: "0.12.0",
  scriptOptions: {
    use() {
      return { JSConfetti: window.JSConfetti }
    },
    trigger: useScriptTriggerElement({ trigger: "mouseover", el: mouseOverEl })
  }
})

onLoaded(({ JSConfetti }) => {
  const confetti = new JSConfetti()
  confetti.addConfetti({ emojis: ["L", "O", "A", "D", "E", "D"] })
})

function refresh() {
  window.location.reload()
}

const { t } = useI18n({
  useScope: "local",
})
</script>

<i18n lang="yaml">
en:
  description: This script is loaded from npm, you can also loaded from CDN by using {code}
zh-CN:
  description: 此脚本从 npm 加载，您也可以使用 {code} 从 CDN 加载。
zh-TW:
  description: 此腳本從 npm 加載，您也可以使用 {code} 從 CDN 加載。
</i18n>

<template>
  <p><span ref="mouseOverEl" underline hover="text-red">{{ t("trigger") }}</span></p> // [!code focus:4]
  <ElButton @click="refresh">
    {{ t("refreshButton") }}
  </ElButton>
</template>`,
}

export default Code
