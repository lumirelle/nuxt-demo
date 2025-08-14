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
- [Nuxt QRCode](https://qrcode.s94.dev/)
- [Nuxt Scripts](https://scripts.nuxt.com/docs/getting-started)

TODO: Below

- TODO: [Nuxt SEO](https://nuxt.com/modules/seo)
- TODO: MD5 & SHA256 (Finding crypto package)
- TODO: XLSX

Optimizations:

- TODO: [Nuxt SVGO](https://nuxt.com/modules/nuxt-svgo)

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

### Project Dependencies

Thanks to [vercel/nft](https://github.com/vercel/nft), now we can put all dependencies int `devDependencies`.

See discussions [here](https://github.com/nuxt/nuxt/discussions/10400).

### Client & Server

Under the `/app` folder, the code will be executed **both client & server**. For example:

_app/pages/index.vue_

```html
<script lang="ts" setup>
  // `useI18n` will be executed **both client & server**
  // On server, it uses cookie to detect the locale
  // On client, it uses cookie to detect the locale, if cookie is empty, it will detect the browser's language and save it to cookie
  const { t } = useI18n({
    useScope: 'local',
  })

  // `useFetch` will be executed **both client & server**
  // But it use `import.meta.server` and `options.server = true` by default to run the data fetching logic only on server
  const { data } = await useFetch('/api/data')
</script>
```

### Hydration Errors

Something you must know about hydration errors if you are using SSR rendering mode of Nuxt 4: **Hydration errors**.

Hydration errors are caused by the mismatch between the server-rendered HTML and the client-rendered HTML.

Please refer to the [official documentation](https://nuxt.com/docs/4.x/guide/best-practices/hydration) for more information.

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

### Data Fetching

Nuxt 4 uses `ofetch` to provide a better data fetching experience. It is a lightweight and powerful fetch wrapper that supports features like automatic retries, request cancellation, and more.

Nuxt 4 provides three ways to fetch data: `$fetch`, `useFetch`, `useAsyncData`.

Notice that, `useFetch` & `useAsyncData` are designed to fetch data only on the server, in order to avoid redundant data fetching actions and prevent navigation until data fetching is completed.

Refer to [The need of `useFetch` and `useAsyncData`](https://nuxt.com/docs/4.x/getting-started/data-fetching#the-need-for-usefetch-and-useasyncdata) for more information.

Beware that using only `$fetch` will not provide network calls de-duplication and navigation prevention. It is recommended to use $fetch for client-side interactions (event-based) or combined with useAsyncData when fetching the initial component data.

Refer to [`$fetch`](https://nuxt.com/docs/4.x/getting-started/data-fetching#fetch) for more information.

As this, Nuxt provides the abilities of [lazy fetching](https://nuxt.com/docs/4.x/getting-started/data-fetching#lazy), [picking data](https://nuxt.com/docs/4.x/getting-started/data-fetching#minimize-payload-size), [caching and refetchin](https://nuxt.com/docs/4.x/getting-started/data-fetching#caching-and-refetching), and so on.

#### CORS

In Nuxt, there are two kinds of requests we can group them by the origin condition: **Cross-Origin** and **Same-Origin**.

For example, when we send a request to **Nuxt server API or route**, we are doing the `Same-Origin` request, because the request is coming from or front-end server at http://0.0.0.0:82 (This demo), and just send to http://0.0.0.0:82/api or http://0.0.0.0:82/route/path.

By the way, the rule for determining the same origin is: protocol + host + port (For example, in `http://0.0.0.0:82`, `http` is `protocol`, `0.0.0.0` is host, `82` is port). If they are the same, we are making the **Same-Origin** request.

`$fetch` uses native `fetch` underhook, the default behavior of native `fetch` is adding safety headers like `Accept` to request, and `Cookies` will just been added when the request is **Same-Origin**.

If we are just doing **simple request** (A request that just contains default headers and uses `GET` method), every thing just works fine. But if we want to add custom headers to our request or use `POST` method, the browser will do anthor thing for us silently: That's `CORS`, Cross Origin Resources Sharing.

When we send a request to **Other server with different origin** and this request isn't a simple request, browser will send a preflight request (uses `OPTIONS` method). If the remote server doesn't handle the preflight request correctly, for example, accept the preflight request and return with headers: `Access-Control-Allow-Origin: https://your.front-end.com` & `Access-Control-Allow-Methods: <METHOD_THE_ACTUAL_REQUEST_USED>` and so on, the actual request will be blocked by browser.

On the edge case, you will find that you send a request with `$fetch` to remote server and get success response, but get error if you send request with your custom fetch instance which may adds some custom headers and lets the request out of "simple".

Notice that, CORS just happended on your browser, so you can create a proxy to avoid this:

- (Development recommended) Create a proxy endpoint on your Nuxt server like `/api/foo`, it will call the remote server `/backend/foo` with `$fetch` for us, with **NO LIMITATION**, and response the response to us
- (Production recommended) Or use Nginx proxy

In this document, we just discussion how to create a proxy in development environment.

There are two ways to create the proxy:

<table>
<tr><td width="400px" valign="top">

One to One Proxy

_server/api/foo.get.ts_

```ts
export default defineEventHandler((event) => {
  return await $fetch('https://a.remote-server.com/api/foo')
})
```

```html
<script lang="ts" setup>
  // Just call the Nuxt server API
  const { data } = await useFetch('/api/foo')
</script>

<template>
  <div>Data is: {{ data }}</div>
</template>
```

</td><td width="600px"><br>

Prefixed Path Proxy

_nuxt.config.ts_

```ts
export default defineNuxtConfig({
  nitro: {
    devProxy: {
      '/remote-api': {
        target: 'https://a.remote-server.com/api',
        changeOrigin: true
        // Notice that, the prefix `/remote-api` will be removed when forwarding the request
      }
    }
  }
})
```

```html
<script lang="ts" setup>
  // Just call the proxy API started with `/remote-api`
  const { data } = await useFetch('/remote-api/foo')
</script>

<template>
  <div>Data is: {{ data }}</div>
</template>
```

</td></tr>
</table>

#### Pass Client Headers

Refer to chapter [CORS](#cors), we know that client-side request will apply the default headers to request, and we can customize headers by customizing our own fetch instance.

So, the key point of this chapter is discussion how to pass client headers in server-side request.

By default, `useFetch` uses `useRequestFetch` to proxy headers and cookies (with the exception of headers not meant to be forwarded, like `host`).

So, the only case will not pass client headers left are using `useAsyncData` with custom logic:

```ts
const { data } = await useAsyncData(() => $fetch('/api/foo'))
```

The simplest way is using `useRequestFetch`, this fetch instance is a custom one with headers passed:

```ts
const requestFetch = useRequestFetch()
const { data } = await useAsyncData(() => requestFetch('/api/foo'))
```

Or you can implement your own fetch instance. See [Nuxt Document -- Custom Fetch](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch) for more information.

There is a best practice to follow which can simplify these problem:

- Use `useFetch` for commonly cases
- Use custom fetch for custom headers and other custom cases
- Use `useAsyncData` for not data feching logic, such as a promise returned by a local funcion...
- If all the solutions above can't not satisfied your need, maybe you should just create anthor heavily custom fetch instance...

Of course, be very careful before proxying headers to an external API and just include headers that you need. Not all headers are safe to be bypassed and might introduce unwanted behavior. Here is a list of common headers that are NOT to be proxied:

- `host`, `accept`
- `content-length`, `content-md5`, `content-type`
- `x-forwarded-host`, `x-forwarded-port`, `x-forwarded-proto`
- `cf-connecting-ip`, `cf-ray`

#### Caching and Refetching (Share Across Components)

By default, `useFetch` and `useAsyncData` use keys to prevent refetching the same data, it supports sharing data across components.

```ts
const { data } = await useFetch('/api/foo') // In this case, key is the provided URL
const { data } = await useFetch('/api/foo', { key: 'foo' }) // In this case, key is 'foo'

const { data } = await useAsyncData(() => $fetch('/api/bar')) // In this case, key is '<filename>-<linenumber>'
const { data } = await useAsyncData('bar', () => $fetch('/api/bar')) // In this case, key is 'bar'
```

You can share state across components by using the same key.

Notice that, share state requires the following options provided to composable must be consistent:

- `handler` function
- `deep` option
- `transform` function
- `pick` array
- `getCachedData` function
- `default` value

Because these options will results different data. If you need independent instances, please use different keys.

In components, use `useNuxtData` to access the shared data:

```ts
const { data: foo } = useNuxtData('foo')
```

You can refresh, clear the cached data by exposed functions from composables, or quick refreshing data by providing `watch` array:

```ts
const { data, refresh, clear } = await useFetch('/api/foo', { key: 'foo' })

// This will refetching the data
function doRefresh() {
  refresh()
}

// This will clear the data (Only the data under the key 'foo')
function doClear() {
  clear()
}

const id = ref(1)
// Data will refetching after id changed
const { data: watchData } = await useFetch('/api/foo', { key: 'foo', watch: [id] })
```

Please refer to [Nuxt document](https://nuxt.com/docs/4.x/getting-started/data-fetching#caching-and-refetching) for more information.

#### Caching in Nitro

If you want to caching data in server (Yes, that's Nitro!). You should use the ability provided by Nitro: [KV Storage](#kv-storage) & [Cache](#cache).

In short, you should **proxy your data fetching** with Nitro `api` or `route` with `event handler`, then add the caching logic in the event handler.

Before:

_app/pages/foo.vue_

```ts
const { data } = await useFetch('/backend/endpoint/foo', { key: 'foo' }) // Use backend endpoint directly
```

After:

_app/pages/foo.vue_

```ts
const { data } = await useFetch('/api/foo', { key: 'foo' }) // Use Nitro endpoint instead
```

_server/api/foo.ts_

```ts
export default defineCachedEventHandler(() => {
  return $fetch('/backend/endpoint/foo', { // Use backend endpoint in Nitro endpoint, like a proxy
    method: 'get',
    // ...
  })
}, {
  name: 'foo'
})
```

#### Custom Data Fetching

Currently, Nuxt does not provide a cleaner way to let us create a custom fetcher, see <https://github.com/nuxt/nuxt/issues/14736>.

To see the current solution, follow the [Nuxt Document](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch) here.

## Nitro

Nuxt 4 uses Nitro as its server engine, which provides a powerful and flexible way to handle server-side rendering, API routes, and more. Nitro is designed to be lightweight and efficient, making it a great choice for modern web applications.

### KV Storage

Nitro provides a built-in storage layer integration with `unstorage` that can abstract filesystem or database or any other data source.

Please refer to [Nitro Document](https://nitro.build/guide/storage) for more information.

### Cache

Nitro provides a caching system built on top of the storage layer. The built-in KV storage named `cache` is used underhood.

Notice that, this caching system is based on `event handler` provided by `h3`.

An [event handler](https://v1.h3.dev/guide/event-handler) is a function that will be bound to a route and executed when the route is matched by the router for an incoming request.

**In short, event handler provides the ability to create server routes / endpoints on Nitro, an you can request them on both server-side & client-side. Then, you can `$fetch` data and return them on event handlers.**

_server/api/ask.get.ts_ (Create a endpoint with `get` method by file name extensions)

```ts
export default defineEventHandler(() => {
  return $fetch('/backend/endpoint', {
    method: 'get',
    // ...
  })
})
```

In the case above, our endpoint located at `<BASE_URL>/api/ask` just a proxy of backend endpoint and with the ability of caching.

By using `defineCachedEventHandler` & `defineCachedFunction`, you can caching the result of event handler & functions (which are part of one, and reusing it in multiple handlers)

For further usage, please refer to [h3 Document](https://v1.h3.dev/guide).

### Proxy

See chapter [CORS](#cors) for more information.

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

Can I Use shows that web components are supported in 85.54% of browsers used in China. Among unsupported browsers, 8.99% are the IE browser. That's to say, we don't need to worry about web components compatibility in most cases.

Here are the results from Can I Use:

- [Custom Element (V1) Compatibility](https://caniuse.com/custom-elementsv1)
- [Shadow DOM (V1) Compatibility](https://caniuse.com/shadowdomv1)

### Nuxt QRCode

A Nuxt module that provides support for generating and reading QRCodes.

For generating QRCodes, use the component `<Qrcode>` & composable `useQrcode()`.

For reading QRCodes, use the component `<QrcodeStream>` & `<QrcodeCapture>` & `<QrcodeDropZone>` (No demos here, because of these use cases are quit unusual). If you really need to use them, please refer to the [documentation](https://qrcode.s94.dev/read/qrcode-stream).

### LRU Cache

Nuxt provide built-in support for data caching which is powered by `nitro`, we don't need to use external libraries like `lru-cache` to implement caching ourselves.

### Nuxt Scripts

Loading third party scripts, built-in support for Google Tag Manager and other [registries](https://scripts.nuxt.com/scripts).

See [Nuxt Scripts](https://scripts.nuxt.com/docs/getting-started) for more information.
