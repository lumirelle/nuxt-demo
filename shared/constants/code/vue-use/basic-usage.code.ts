export const Code = {
  page:
`<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

// "x" and "y" are refs // [!code focus:2]
const { x, y } = useMouse()

// Will cleanup automatically while component unmounted // [!code focus:13]
const isMouseMoving = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null
useEventListener('mousemove', () => {
  isMouseMoving.value = true
  // Reset the timer to false after 300ms
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    isMouseMoving.value = false
  }, 300)
})
</script>

<template>
  <div>
    <I18nT keypath="result.mouse" tag="p">
      <template #x> // [!code focus:6]
        <span>{{ x }}</span>
      </template>
      <template #y>
        <span>{{ y }}</span>
      </template>
    </I18nT>
    <I18nT keypath="result.mouse-moving" tag="p">
      <template #moving> // [!code focus:3]
        <span>{{ isMouseMoving }}</span>
      </template>
    </I18nT>
  </div>
</template>

<i18n lang="yaml">
en:
  result:
    mouse: "Your Mouse position is at: x: {x}, y: {y}"
    mouse-moving: "Is mouse moving? {moving}"

zh-CN:
  result:
    mouse: "您的鼠标位置在: x: {x}, y: {y}"
    mouse-moving: "鼠标是否在移动? {moving}"

zh-TW:
  result:
    mouse: "您的滑鼠位置在: x: {x}, y: {y}"
    mouse-moving: "滑鼠是否在移動? {moving}"
</i18n>`,
}

export default Code
