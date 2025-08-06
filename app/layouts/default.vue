<!-- This is an example of `@nuxtjs/color-mode` & `@unocss/nuxt` & layout of Nuxt 4 -->

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="yaml">
  en:
    popover:
      lang: "{'This is a @nuxtjs/i18n example'}"
      colorMode: "{'This is a @nuxtjs/color-mode example'}"
  zh-CN:
    popover:
      lang: "{'这是一个 @nuxtjs/i18n 的示例'}"
      colorMode: "{'这是一个 @nuxtjs/color-mode 的示例'}"
  zh-TW:
    popover:
      lang: "{'這是一個 @nuxtjs/i18n 的示例'}"
      colorMode: "{'這是一個 @nuxtjs/color-mode 的示例'}"
</i18n>

<template>
  <div>
    <!-- UnoCSS attributify syntax, if it's conflict with the element attributes, you can add `un-` prefix to avoid it -->
    <!-- For example, `flex` => `un-flex` -->
    <header backdrop-blur border="b solid default">
      <div flex="~ row" justify-between items-center max-w-1200px mx-auto p="y-1 x-4">
        <p text-5 font-bold>
          Nuxt 4 Demo
        </p>
        <div flex="~ row" items-center gap-4>
          <ElPopover :visible="true" :content="t('popover.lang')" placement="left-end" width="200">
            <template #reference>
              <LangSwitcher />
            </template>
          </ElPopover>
          <!-- `@nuxtjs/color-mode` -->
          <!-- 1. The color schema is auto-detected in the client side -->
          <!-- If we use `useDark` from `@vueuse/core` directly, it will get hydration error -->
          <!-- Because the result is always `false` in the server side, but auto-detected in the client side (maybe get 'true') -->
          <!-- 2. It's better to use `@nuxtjs/color-mode` module with out of box SSR support -->
          <!-- We just need to wrap the element using `$colorMode.preference` with `ColorScheme` component to avoid flashing -->
          <!-- See https://color-mode.nuxtjs.org/#caveats for more details -->
          <ColorScheme>
            <ElPopover :visible="true" :content="t('popover.colorMode')" placement="right-end" width="200">
              <template #reference>
                <ElSwitch v-model="$colorMode.preference" active-value="dark" inactive-value="light" :active-icon="ElIconMoon" :inactive-icon="ElIconSunny" inline-prompt />
              </template>
            </ElPopover>
          </ColorScheme>
        </div>
      </div>
    </header>
    <div max-w-1200px mx-auto>
      <slot />
      <ElBacktop />
    </div>
  </div>
</template>
