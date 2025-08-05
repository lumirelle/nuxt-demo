<!-- This is an example of `@nuxtjs/color-mode` & `@unocss/nuxt` & layout of Nuxt 4 -->

<template>
  <div>
    <!-- UnoCSS attributify syntax, if it's conflict with the element attributes, you can add `un-` prefix to avoid it -->
    <!-- For example, `flex` => `un-flex` -->
    <header backdrop-blur border="b solid default">
      <div flex="~ row" justify-between items-center max-w-1200px mx-auto p="y-1 x-4">
        <p text-5 font-bold>
          Nuxt 4 Demo
        </p>
        <!-- `@nuxtjs/color-mode` -->
        <!-- 1. The color schema is auto-detected in the client side -->
        <!-- If we use `useDark` from `@vueuse/core` directly, it will get hydration error -->
        <!-- Because the result is always `false` in the server side, but auto-detected in the client side (maybe get 'true') -->
        <!-- 2. It's better to use `@nuxtjs/color-mode` module with out of box SSR support -->
        <!-- We just need to wrap the element using `$colorMode.preference` with `ColorScheme` component to avoid flashing -->
        <!-- See https://color-mode.nuxtjs.org/#caveats for more details -->
        <ColorScheme>
          <ElSwitch v-model="$colorMode.preference" active-value="dark" inactive-value="light" :active-icon="ElIconMoon" :inactive-icon="ElIconSunny" inline-prompt />
        </ColorScheme>
      </div>
    </header>
    <div max-w-1200px mx-auto>
      <slot />
      <ElBacktop />
    </div>
  </div>
</template>
