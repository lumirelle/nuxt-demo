# Nuxt 4 Demo

## Architecture

Basic Framework:

- [Nuxt 4](https://nuxt.com/docs/4.x/getting-started/introduction)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Pinia](https://pinia.vuejs.org/zh/getting-started/)
- [VueRouter](https://router.vuejs.org/zh/introduction.html)
- [VueI18n](https://vue-i18n.intlify.dev/zh/guide/introduction.html)

UI Library:

- [Element Plus](https://element-plus.org/zh-CN/guide/design.html)

CSS Framework:

- [UnoCSS](https://unocss.dev/guide/)

Utilities:

- [VueUse](https://vueuse.org/zh/)
- [Highlight.js](https://highlightjs.org/)
- [Bignumber.js](https://mikemcl.github.io/bignumber.js/)
- TODO: Below
- [Day.js](https://day.js.org/)
- [ECharts](https://echarts.apache.org/zh/index.html)
- [Nuxt Swiper](https://nuxt.com/modules/swiper)
- [Nuxt QRCode](https://nuxt.com/modules/qrcode)
- [Nuxt GTag](https://nuxt.com/modules/gtag)
- TODO: MD5 & SHA256 (Finding crypto package)
- TODO: LRU Cache
- TODO: XLSX

Optimizations:

- [Nuxt Scripts](https://nuxt.com/modules/scripts)
- [Nuxt SVGO](https://nuxt.com/modules/nuxt-svgo)

DX:

- [Nuxt Test Utils](https://nuxt.com/modules/test-utils)
- [Nuxt Typed Router](https://nuxt.com/modules/typed-router)

## Nuxt 4

Nuxt 4 provides a lot of features than Nuxt 2, including:

- Plenty of modules support
  - `@nuxt/image` for image optimization
  - `@nuxt/scripts` for third party scripts loading
  - `@nuxt/seo` for better SEO
  - ...
- Performance improvements
  - Using Vite instead of Webpack
  - Using Nitro instead of Connect
  - Using Vue 3 instead of Vue 2
  - ...
- SEO friendly (Thanks to `@nuxt/seo` & Nuxt 4 itself)
- Better DX
  - Fully typed, let you write code with less document
  - Nuxt devtools panel integrated many plugins & modules
  - ...
- Clearly file structure
  - All codes related to application side are in `app` directory
  - All codes related to server side are in `server` directory
  - ...
- ...

Reading the getting started guide [here](https://nuxt.com/docs/4.x/getting-started/introduction).

## Hydration Errors

Something you must know about hydration errors if you are using SSR rendering mode of Nuxt 4: **Hydration errors**.

Hydration errors are caused by the mismatch between the server-rendered HTML and the client-rendered HTML.

There are some common cases of hydration errors below.

### Invalid HTML Nesting Structure

The most cases are invalid HTML nesting structure, such as you put a `div` inside a `p` tag:

<!-- Using `xml` instead of `html` to avoid the error from prettier -->

```xml
<p><div>hi</div></p>
```

If you use prettier, you will get an error like this:

> Parsing error: Unexpected closing tag "p". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags

The reason is HTML Standard does not allow you to do like this, and the browser will reserve the code as below:

```xml
<p></p>
<div>hi</div>
<p></p>
```

So you should really know about **the nesting structure rules of HTML**, what ever you are using SSR rendering or not.

Here are some basic rules:

- [Interactive content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content) should not be nested in any other interactive content.
- `h1` ~ `h6` can only contain [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
- `label` & `p` can only accept [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content) except itself.
- [Void elements](https://developer.mozilla.org/en-US/docs/Glossary/Void_element) can not contain any content, they must be closed by a self-closing tag.

For more details, you can find the specific element's **Technical Summary** from [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements).

### Different Data Used During Render

Another common case is using different data during render.

For example, you use `useDark` from `@vueuse/core` to control your Vue SFC template directly, you will get a hydration error.

```html
<script setup>
  import { useDark } from '@vueuse/core'

  const isDark = useDark()
</script>

<template>
  <div v-if="isDark">
    <p>Dark</p>
  </div>
  <div v-else>
    <p>Light</p>
  </div>
</template>
```

Your server-rendered HTML is as below:

```html
<div>
  <p>Light</p>
</div>
```

And your client-rendered HTML is as below:

```html
<div>
  <p>Dark</p>
</div>
```

During the hydration process, they will cause a confliction.

So you should not let your HTML structure depend on the client-based data, such as LocalStorage, Browser API, etc, if you are using SSR rendering.

## Nuxt Modules

Nuxt modules provide a lot of abilities, such as auto-importing, type generation, devtools integration, etc.

See [Nuxt Modules Page](https://nuxt.com/modules) for more information.

## Vue 3

Noting to say...

## Vue Addons

Pinia & Vue Router & Vue I18n.

### Vue I18n

It's pity that type safety is not supported for i18n custom blocks in SFC currently: [Official Annotation](https://vue-i18n.intlify.dev/guide/advanced/typescript.html#type-safe-resources-in-usei18n).

## Element Plus

It may not be the best, but it must not be a wrong choice.

## UnoCSS

UnoCSS is a atomic CSS framework has great performance than pure Tailwind CSS.

Atomic CSS can reduce the size of the CSS file, especially for a large project.

UnoCSS has presets compatible with Tailwind CSS & other CSS frameworks.

This demo use `presetWind3` & `presetAttributify` presets, compatible with Tailwind CSS 3 & attributify atomic css classes.

Attributify let you write CSS classes like HTML attributes, which can avoid the mixing of semantic & non-semantic classes.

Before attributify:

```html
<div class="flex flex-row justify-between items-center max-w-1200px mx-auto py-1 px-4">
  <p class="text-5 font-bold">Nuxt 4 Demo</p>
</div>
```

After attributify:

```html
<div flex="~ row" justify-between items-center max-w-1200px mx-auto p="y-1 x-4">
  <p text-5 font-bold>Nuxt 4 Demo</p>
</div>
```

For example below, `page-header` & `page-title` are semantic classes which are commonly used in JS, and it's annoying for developers to find them with so many other non-semantic classes.

```html
<div class="flex flex-row justify-between items-center max-w-1200px mx-auto py-1 px-4 page-header">
  <p class="text-5 font-bold page-title">Nuxt 4 Demo</p>
</div>
```

## Utilities

### Vue Use

Vue Use provide plenty of utilities for Vue Composition API.

For example, `useClipboard` can help you copy text to clipboard, `useCookie` can help you manage cookies.

So we don't need `clipboard` & `cookie-universal-nuxt` packages any more.

### Highlight.js

Highlight.js is a syntax highlighter for code blocks.

It supports many languages, and you can use it with Vue 3.

This demo use [HighlightJsVuePlugin](https://github.com/highlightjs/vue-plugin) to highlight code blocks.
