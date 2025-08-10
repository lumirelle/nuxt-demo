# Nuxt 4 Demo

## Architecture

Basic Framework:

- [Nuxt 4](https://nuxt.com/docs/4.x/getting-started/introduction)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Pinia](https://pinia.vuejs.org/zh/getting-started/) (Nuxt Module: [@pinia/nuxt](https://nuxt.com/modules/pinia))
- [VueRouter](https://router.vuejs.org/zh/introduction.html)
- [VueI18n](https://vue-i18n.intlify.dev/zh/guide/introduction.html) (Nuxt Module: [@nuxtjs/i18n](https://i18n.nuxtjs.org/docs/getting-started))

UI Library & CSS Framework:

- [Element Plus](https://element-plus.org/zh-CN/guide/design.html) (Nuxt Module: [@element-plus/nuxt](https://nuxt.com/modules/element-plus))
- [UnoCSS](https://unocss.dev/guide/) (Nuxt Module: [@unocss/nuxt](https://nuxt.com/modules/unocss))

Utilities:

- [VueUse](https://vueuse.org/zh/) (Nuxt Module: [@vueuse/nuxt](https://nuxt.com/modules/vueuse))
- Code highlight:
  - [Highlight.js](https://highlightjs.org/) (Vue Plugin: [highlightjs-vue-plugin](https://github.com/lumirelle/highlightjs-vue-plugin))
  - [Shiki](https://shiki.style/guide/) (Nuxt Module: [nuxt-shiki](https://github.com/pi0/nuxt-shiki))
- [Bignumber.js](https://mikemcl.github.io/bignumber.js/)
- [Day.js](https://day.js.org/)
- [ECharts](https://echarts.apache.org/zh/index.html) (Nuxt Module: [nuxt-echarts](https://echarts.nuxt.dev/getting-started))
- [Swiper.js](https://swiperjs.com/get-started) (Nuxt Module: [nuxt-swiper](https://github.com/cpreston321/nuxt-swiper))

TODO: Below

- [Nuxt QRCode](https://qrcode.s94.dev/)
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

### Hydration Errors

Something you must know about hydration errors if you are using SSR rendering mode of Nuxt 4: **Hydration errors**.

Hydration errors are caused by the mismatch between the server-rendered HTML and the client-rendered HTML.

There are some common cases of hydration errors below.

#### Invalid HTML Nesting Structure

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

#### Different Data Used During Render

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

This demo uses the official Nuxt module provided by Nuxt Team, which provides plenty of apis & components for developers to maniplate route jumping with locale, locale changing, cookie based locale, and other aspects.

This demo uses `<i18n>` block in Vue SFC to store **component level** i18n text, use global locale files (`i18n/*.yaml`) to store **public** i18n text.

In my opinion, put **component level** i18n text directly into the SFC where they will be used is much better than put them into the folders far away, even though these folders are "named modules".

#### Why I prefer to put component level i18n text into SFC directly?

Just imagine that, when you receive a request to update some i18n text, you have to figure out where the old text is used, and even perform some compatibility tasks.

The old text under module1:

_i18n/module1/en.json_

```json
{
  "old-text-1": "This is an old sentence."
}
```

A page under **module1** who is using the old text:

_app/pages/module1/page1.vue_

```html
<script lang="ts" setup>
  const { t } = useI18n()
</script>

<template>
  <div>{{ t('module1.old-text-1') }}</div>
</template>
```

Another page under **module2** who is using the old text of **module1** **by accident**:

_app/pages/module2/page2.vue_

```html
<script lang="ts" setup>
  const { t } = useI18n()
</script>

<template>
  <div>{{ t('module1.old-text-1') }}</div>
</template>
```

Now you should reserve the old text or move it from module1 to module2, then add new text:

Reserve the old text:

_i18n/module1/en.json_

```json
{
  "old-text-1": "This is an old sentence.",
  "new-text-1": "This is a new sentence."
}
```

_app/pages/module1/page1.vue_

```html
<script lang="ts" setup>
  const { t } = useI18n()
</script>

<template>
  <div>{{ t('module1.new-text-1') }}</div>
</template>
```

Move it from module1 to module2

_i18n/module1/en.json_

```json
{
  "new-text-1": "This is a new sentence."
}
```

_i18n/module2/en.json_

```json
{
  "old-text-1": "This is an old sentence."
}
```

_app/pages/module1/page1.vue_

```html
<script lang="ts" setup>
  const { t } = useI18n()
</script>

<template>
  <div>{{ t('module1.new-text-1') }}</div>
</template>
```

_app/pages/module2/page2.vue_

```html
<script lang="ts" setup>
  const { t } = useI18n()
</script>

<template>
  <div>{{ t('module2.old-text-1') }}</div>
</template>
```

They are both too troublesome.

So the best practice is "Do not put the **component level** i18n text into **public** place".

That's it!

## UI Library & CSS Framework

### Element Plus

It may not be the best, but it must not be a wrong choice.

This demo uses the official Nuxt module provided by Element Plus, which provides the ability to custom the color, locale and other aspects of UI components.

### UnoCSS

UnoCSS is a atomic CSS framework has great performance than pure Tailwind CSS.

Atomic CSS can reduce the size of the CSS file, especially for a large project.

UnoCSS has presets compatible with Tailwind CSS & other CSS frameworks.

This demo use `presetWind3` & `presetAttributify` presets, compatible with Tailwind CSS 3 & attributify atomic css classes, and add some custom rules in order to use the css variables from Element Plus.

See the detail config [here](uno.config.ts).

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

### Code Highlight

There are two common choice for highlighting codes in Nuxt: Highlight.js and Shiki.

#### Highlight.js (Legacy)

Highlight.js is a legacy syntax highlighter for code blocks.

It supports many languages, and you can use it with Vue 3.

This demo uses [Highlight Js Vue Plugin](https://github.com/lumirelle/highlightjs-vue-plugin) which provide a basic Vue component wrap of using Highlight.js, and implements a [component](app/components/HighlightJs.vue) with some default presets.

#### Shiki (Recommended)

Modern, intelligent, strong than Highlight.js, and a little bit complex than Highlight.js.

This demo uses [Nuxt Shiki](https://github.com/pi0/nuxt-shiki) which provide a basic Vue component wrap of using Shiki, and implements a [component](app/components/ShikiJs.vue) with some default presets.

### BigNumber.js

Big number support, avoid precision issue while calculating price, and so on.

This demo implements a [util](shared/utils/bignumber.ts) which contains some math operations between `BigNumber` or `number`.

### Day.js

Date maniplation, Element Plus dependents on it too.

This demo implements a [plugin](app/plugins/dayjs.ts) in order to add Day.js to Nuxt App.

### ECharts

The best choice of adding charts to your page.

By default, ECharts rendering on the browser, if you prefer rendering on the server (SSR Mode) for better FCP or other reasons, you should read through [ECharts SSR Guide](https://echarts.apache.org/handbook/en/how-to/cross-platform/server/) first.

Then, `nuxt-echarts` provides different components to handle different situations:

- `<VChart>`: A simple and powerful ECharts wrapper in Vue, the same as [`Vue-ECharts`](https://github.com/ecomfe/vue-echarts), rendering on the browser.
- `<VChartIsland>`: Rendering ECharts on server, uses `<NuxtIsland>` under the hood, no JS, non-interactive (SVG).
- `<VChartServer>`: A wrapper around `<VChartIsland>`, so allow client-side injection, still no JS, non-interactive (SVG).
- `<VChartLight>`: Uses `<VChartServer>` underhood to render ECharts on server side, The SVG rendered by the server is hydrated with [ECharts lightweight client runtime](https://echarts.apache.org/handbook/en/how-to/cross-platform/server/#lightweight-client-runtime), support simple interactions.
- `<VChartFull>`: Brings full ECharts functionality (The same as `<VChart>`) to your Nuxt app with SSR, will render a chart on the server then on the client once mounted in the browser. A little bit too heavy.

TL;DR:

Full Functionality & Client Only: `<VChart>`
Non Interactions & Server Side Rendering: `<VChartServer>`
Simple Interactions & Server Side Rendering: `<VChartLight>`
Full Functionality & Server Side Rendering: `<VChartFull>`

Read through [ECharts Guide](https://echarts.apache.org/handbook/en/get-started) & [Nuxt ECharts Guide](https://echarts.nuxt.dev/getting-started) for futher usage.

### Swiper.js

The best choice to implement custom swiper in your page.

Notice that, `Nuxt Swiper` utilizes `Swiper.js` as its foundation using its **web components**, they use the kebab-case naming convention vs the PascalCase naming convention that Vue uses.

If you want to learn how to use web components in Vue.js please refer to the docs here: [Vue.js Web Components](https://vuejs.org/guide/extras/web-components.html)

[Can I Use](https://caniuse.com/?search=web%20components) shows that web components are supported in 85.54% of browsers used in China. Among unsupported browsers, 8.99% are the IE browser. That's to say, we don't need to worry about web components compatibility in most cases.
