<script setup lang="ts">
import { Code } from '#shared/constants/vue-use/basic-usage.code'

const { t } = useI18n({
  useScope: 'local',
})

// "x" and "y" are refs
const { x, y } = useMouse()

// Will cleanup automatically while component unmounted
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
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        app/pages/vue-use/basic-usage.vue
      </H>
      <HighlightJs :code="Code.page" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <I18nT keypath="result.mouse" tag="p">
        <template #x>
          <span>{{ x }}</span>
        </template>
        <template #y>
          <span>{{ y }}</span>
        </template>
      </I18nT>
      <I18nT keypath="result.mouse-moving" tag="p">
        <template #moving>
          <span>{{ isMouseMoving }}</span>
        </template>
      </I18nT>
    </section>
    <section>
      <NuxtLinkLocale to="/">
        <span>{{ t('back-home') }}</span>
      </NuxtLinkLocale>
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Vue Use Basic Usage
  result:
    title: Result
    mouse: "Your Mouse position is at: x: {x}, y: {y}"
    mouse-moving: "Is mouse moving? {moving}"
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Vue Use 基本使用
  result:
    title: 结果
    mouse: "您的鼠标位置在: x: {x}, y: {y}"
    mouse-moving: "鼠标是否在移动? {moving}"
  back-home: "{'<'} 返回首页 {'>'}"

zh-TW:
  title: Vue Use 基本使用
  result:
    title: 結果
    mouse: "您的滑鼠位置在: x: {x}, y: {y}"
    mouse-moving: "滑鼠是否在移動? {moving}"
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>
