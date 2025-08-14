# Nuxt 4 Demo

## 架构

基础框架：

- [Nuxt 4](https://nuxt.com/docs/4.x/getting-started/introduction)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Pinia](https://pinia.vuejs.org/zh/getting-started/) (Nuxt 模块: [@pinia/nuxt](https://nuxt.com/modules/pinia))
- [VueRouter](https://router.vuejs.org/zh/introduction.html)
- [VueI18n](https://vue-i18n.intlify.dev/zh/guide/introduction.html) (Nuxt 模块: [@nuxtjs/i18n](https://i18n.nuxtjs.org/docs/getting-started))

UI 库和 CSS 框架：

- [Element Plus](https://element-plus.org/zh-CN/guide/design.html) (Nuxt 模块: [@element-plus/nuxt](https://nuxt.com/modules/element-plus))
- [UnoCSS](https://unocss.dev/guide/) (Nuxt 模块: [@unocss/nuxt](https://nuxt.com/modules/unocss))

工具库：

- [VueUse](https://vueuse.org/zh/) (Nuxt 模块: [@vueuse/nuxt](https://nuxt.com/modules/vueuse))
- 代码高亮：
  - [Highlight.js](https://highlightjs.org/) (Vue 插件: [highlightjs-vue-plugin](https://github.com/lumirelle/highlightjs-vue-plugin))
  - [Shiki](https://shiki.style/guide/) (Nuxt 模块: [nuxt-shiki](https://github.com/pi0/nuxt-shiki))
- [Bignumber.js](https://mikemcl.github.io/bignumber.js/)
- [Day.js](https://day.js.org/)
- [ECharts](https://echarts.apache.org/zh/index.html) (Nuxt 模块: [nuxt-echarts](https://echarts.nuxt.dev/getting-started))
- [Swiper.js](https://swiperjs.com/get-started) (Nuxt 模块: [nuxt-swiper](https://github.com/cpreston321/nuxt-swiper))
- [Nuxt QRCode](https://qrcode.s94.dev/)

TODO: Below

- TODO: [Nuxt GTag](https://nuxt.com/modules/gtag)
- TODO: [Nuxt SEO](https://nuxt.com/modules/seo)
- TODO: MD5 & SHA256 (寻找加密包)
- TODO: XLSX

优化：

- [Nuxt Scripts](https://nuxt.com/modules/scripts)
- TODO: [Nuxt SVGO](https://nuxt.com/modules/nuxt-svgo)

开发体验：

- [Nuxt Test Utils](https://nuxt.com/modules/test-utils)
- [Nuxt Typed Router](https://nuxt.com/modules/typed-router)

## Nuxt 4

Nuxt 4 相比 Nuxt 2 提供了许多功能，包括：

- 丰富的模块支持
  - `@nuxt/image` 用于图片优化
  - `@nuxt/scripts` 用于第三方脚本加载
  - `@nuxt/seo` 用于更好的 SEO
  - ...
- 性能改进
  - 使用 Vite 替代 Webpack
  - 使用 Nitro 替代 Connect
  - 使用 Vue 3 替代 Vue 2
  - ...
- SEO 友好（感谢 `@nuxt/seo` 和 Nuxt 4 本身）
- 更好的开发体验
  - 完全类型化，让您编写代码时减少文档查阅
  - Nuxt 开发工具面板集成了许多插件和模块
  - ...
- 清晰的文件结构
  - 所有与应用端相关的代码都在 `app` 目录中
  - 所有与服务器端相关的代码都在 `server` 目录中
  - ...
- ...

阅读入门指南请点击[这里](https://nuxt.com/docs/4.x/getting-started/introduction)。

### 项目依赖

感谢 [vercel/nft](https://github.com/vercel/nft), 现在我们可以将所有依赖项放入 `devDependencies` 中。

请在 [这里](https://github.com/nuxt/nuxt/discussions/10400) 查看相关讨论。

### 客户端和服务器端

在 `/app` 文件夹下，代码将在**客户端和服务器端**都执行。例如：

_app/pages/index.vue_

```html
<script lang="ts" setup>
  // `useI18n` 将在**客户端和服务器端**都执行
  // 在服务器端，它使用 cookie 来检测语言环境
  // 在客户端，它使用 cookie 来检测语言环境，如果 cookie 为空，它将检测浏览器的语言并保存到 cookie 中
  const { t } = useI18n({
    useScope: 'local',
  })

  // `useFetch` 将在**客户端和服务器端**都执行
  // 但它默认使用 `import.meta.server` 和 `options.server = true` 来仅在服务器端运行数据获取逻辑
  const { data } = await useFetch('/api/data')
</script>
```

### 水合错误

如果您使用 Nuxt 4 的 SSR 渲染模式，您必须了解水合错误：**水合错误**。

水合错误是由服务器渲染的 HTML 和客户端渲染的 HTML 之间的不匹配引起的。

更多信息请参考[官方文档](https://nuxt.com/docs/4.x/guide/best-practices/hydration)。

下面是一些常见的水合错误情况。

#### 无效的 HTML 嵌套结构

最常见的情况是无效的 HTML 嵌套结构，例如您在 `p` 标签内放置了一个 `div`：

<!-- 使用 `xml` 而不是 `html` 来避免 prettier 的错误 -->

```xml
<p><div>hi</div></p>
```

如果您使用 prettier，您会得到这样的错误：

> 解析错误：意外的结束标签 "p"。当标签已经被另一个标签关闭时可能会发生这种情况。更多信息请参见 https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags

原因是 HTML 标准不允许这样做，浏览器会将代码重新排列如下：

```xml
<p></p>
<div>hi</div>
<p></p>
```

所以您应该真正了解 **HTML 的嵌套结构规则**，无论您是否使用 SSR 渲染。

以下是一些基本规则：

- [交互式内容](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content)不应该嵌套在任何其他交互式内容中。
- `h1` ~ `h6` 只能包含[短语内容](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content)。
- `label` 和 `p` 只能接受[短语内容](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content)，除了自身。
- [空元素](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)不能包含任何内容，它们必须通过自闭合标签关闭。

更多详细信息，您可以从 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) 找到特定元素的**技术摘要**。

#### 渲染期间使用不同的数据

另一种常见情况是在渲染期间使用不同的数据。

例如，您使用 `@vueuse/core` 中的 `useDark` 直接控制您的 Vue SFC 模板，您会得到水合错误。

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

您的服务器渲染的 HTML 如下：

```html
<div>
  <p>Light</p>
</div>
```

而您的客户端渲染的 HTML 如下：

```html
<div>
  <p>Dark</p>
</div>
```

在水合过程中，它们会产生冲突。

因此，如果您使用 SSR 渲染，您不应该让您的 HTML 结构依赖于基于客户端的数据，如 LocalStorage、浏览器 API 等。

### 数据获取

Nuxt 4 使用 `ofetch` 来提供更好的数据获取体验。它是一个轻量级且强大的 fetch 包装器，支持自动重试、请求取消等功能。

Nuxt 4 提供了三种获取数据的方式：`$fetch`、`useFetch`、`useAsyncData`。

请注意，`useFetch` 和 `useAsyncData` 设计为仅在服务器端获取数据，以避免冗余的数据获取操作并防止在数据获取完成之前进行导航。

更多信息请参考 [`useFetch` 和 `useAsyncData` 的必要性](https://nuxt.com/docs/4.x/getting-started/data-fetching#the-need-for-usefetch-and-useasyncdata)。

请注意，仅使用 `$fetch` 不会提供网络调用去重和导航阻止功能。建议将 $fetch 用于客户端交互（基于事件）或在获取初始组件数据时与 useAsyncData 结合使用。

更多信息请参考 [`$fetch`](https://nuxt.com/docs/4.x/getting-started/data-fetching#fetch)。

因此，Nuxt 提供了[懒加载](https://nuxt.com/docs/4.x/getting-started/data-fetching#lazy)、[数据选择](https://nuxt.com/docs/4.x/getting-started/data-fetching#minimize-payload-size)、[缓存和重新获取](https://nuxt.com/docs/4.x/getting-started/data-fetching#caching-and-refetching)等功能。

#### CORS

在 Nuxt 中，我们可以根据源条件将请求分为两种：**跨域**和**同域**。

例如，当我们向**Nuxt 服务器 API 或路由**发送请求时，我们正在进行 `Same-Origin` 请求，因为请求来自前端服务器 http://0.0.0.0:82（本演示），并发送到 http://0.0.0.0:82/api 或 http://0.0.0.0:82/route/path。

顺便说一下，确定同源的规则是：协议 + 主机 + 端口（例如，在 `http://0.0.0.0:82` 中，`http` 是协议，`0.0.0.0` 是主机，`82` 是端口）。如果它们相同，我们就是在进行**同域**请求。

`$fetch` 在底层使用原生 `fetch`，原生 `fetch` 的默认行为是向请求添加安全头，如 `Accept`，而 `Cookies` 只会在请求是**同域**时添加。

如果我们只是进行**简单请求**（只包含默认头并使用 `GET` 方法的请求），一切都会正常工作。但如果我们想向请求添加自定义头或使用 `POST` 方法，浏览器会为我们静默地做另一件事：那就是 `CORS`，跨域资源共享。

当我们向**具有不同源的其他服务器**发送请求且此请求不是简单请求时，浏览器会发送预检请求（使用 `OPTIONS` 方法）。如果远程服务器没有正确处理预检请求，例如，接受预检请求并返回头：`Access-Control-Allow-Origin: https://your.front-end.com` 和 `Access-Control-Allow-Methods: <METHOD_THE_ACTUAL_REQUEST_USED>` 等，实际请求将被浏览器阻止。

在边缘情况下，您会发现使用 `$fetch` 向远程服务器发送请求并获得成功响应，但如果使用可能添加一些自定义头并使请求超出"简单"范围的自定义 fetch 实例发送请求，则会出错。

请注意，CORS 只发生在您的浏览器中，因此您可以创建代理来避免这种情况：

- （开发环境推荐）在您的 Nuxt 服务器上创建代理端点，如 `/api/foo`，它将使用 `$fetch` 为我们调用远程服务器 `/backend/foo`，**无限制**，并将响应返回给我们
- （生产环境推荐）或使用 Nginx 代理

在本文档中，我们只讨论如何在开发环境中创建代理。

有两种创建代理的方式：

<table>
<tr><td width="400px" valign="top">

一对一代理

_server/api/foo.get.ts_

```ts
export default defineEventHandler((event) => {
  return await $fetch('https://a.remote-server.com/api/foo')
})
```

```html
<script lang="ts" setup>
  // 只需调用 Nuxt 服务器 API
  const { data } = await useFetch('/api/foo')
</script>

<template>
  <div>数据是: {{ data }}</div>
</template>
```

</td><td width="600px"><br>

前缀路径代理

_nuxt.config.ts_

```ts
export default defineNuxtConfig({
  nitro: {
    devProxy: {
      '/remote-api': {
        target: 'https://a.remote-server.com/api',
        changeOrigin: true
        // 注意，前缀 `/remote-api` 在转发请求时会被移除
      }
    }
  }
})
```

```html
<script lang="ts" setup>
  // 只需调用以 `/remote-api` 开头的代理 API
  const { data } = await useFetch('/remote-api/foo')
</script>

<template>
  <div>数据是: {{ data }}</div>
</template>
```

</td></tr>
</table>

#### 传递客户端头

参考章节 [CORS](#cors)，我们知道客户端请求会向请求应用默认头，我们可以通过自定义自己的 fetch 实例来自定义头。

因此，本章的重点是讨论如何在服务器端请求中传递客户端头。

默认情况下，`useFetch` 使用 `useRequestFetch` 来代理头和 cookie（除了不打算转发的头，如 `host`）。

因此，唯一不会传递客户端头的情况是使用带有自定义逻辑的 `useAsyncData`：

```ts
const { data } = await useAsyncData(() => $fetch('/api/foo'))
```

最简单的方法是使用 `useRequestFetch`，这个 fetch 实例是一个带有传递头的自定义实例：

```ts
const requestFetch = useRequestFetch()
const { data } = await useAsyncData(() => requestFetch('/api/foo'))
```

或者您可以实现自己的 fetch 实例。更多信息请参见 [Nuxt 文档 -- 自定义 Fetch](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch)。

有一个最佳实践可以简化这些问题：

- 对于常见情况使用 `useFetch`
- 对于自定义头和其他自定义情况使用自定义 fetch
- 对于非数据获取逻辑使用 `useAsyncData`，例如本地函数返回的 promise...
- 如果上述所有解决方案都不能满足您的需求，也许您应该创建一个高度自定义的 fetch 实例...

当然，在将头代理到外部 API 之前要非常小心，只包含您需要的头。并非所有头都可以安全地绕过，可能会引入不必要的行为。以下是不应该代理的常见头列表：

- `host`、`accept`
- `content-length`、`content-md5`、`content-type`
- `x-forwarded-host`、`x-forwarded-port`、`x-forwarded-proto`
- `cf-connecting-ip`、`cf-ray`

#### 缓存和重新获取（跨组件共享）

默认情况下，`useFetch` 和 `useAsyncData` 使用键来防止重新获取相同的数据，它支持跨组件共享数据。

```ts
const { data } = await useFetch('/api/foo') // 在这种情况下，键是提供的 URL
const { data } = await useFetch('/api/foo', { key: 'foo' }) // 在这种情况下，键是 'foo'

const { data } = await useAsyncData(() => $fetch('/api/bar')) // 在这种情况下，键是 '<filename>-<linenumber>'
const { data } = await useAsyncData('bar', () => $fetch('/api/bar')) // 在这种情况下，键是 'bar'
```

您可以通过使用相同的键在组件之间共享状态。

请注意，共享状态要求提供给组合式函数的以下选项必须一致：

- `handler` 函数
- `deep` 选项
- `transform` 函数
- `pick` 数组
- `getCachedData` 函数
- `default` 值

因为这些选项会产生不同的数据。如果您需要独立实例，请使用不同的键。

在组件中，使用 `useNuxtData` 来访问共享数据：

```ts
const { data: foo } = useNuxtData('foo')
```

您可以通过组合式函数暴露的函数刷新、清除缓存数据，或通过提供 `watch` 数组快速刷新数据：

```ts
const { data, refresh, clear } = await useFetch('/api/foo', { key: 'foo' })

// 这将重新获取数据
function doRefresh() {
  refresh()
}

// 这将清除数据（仅清除键 'foo' 下的数据）
function doClear() {
  clear()
}

const id = ref(1)
// 数据将在 id 更改后重新获取
const { data: watchData } = await useFetch('/api/foo', { key: 'foo', watch: [id] })
```

更多信息请参考 [Nuxt 文档](https://nuxt.com/docs/4.x/getting-started/data-fetching#caching-and-refetching)。

#### 在 Nitro 中缓存

如果您想在服务器中缓存数据（是的，那就是 Nitro！）。您应该使用 Nitro 提供的能力：[KV 存储](#kv-storage) 和 [缓存](#cache)。

简而言之，您应该使用 Nitro `api` 或带有 `event handler` 的 `route` 来**代理您的数据获取**，然后在事件处理程序中添加缓存逻辑。

之前：

_app/pages/foo.vue_

```ts
const { data } = await useFetch('/backend/endpoint/foo', { key: 'foo' }) // 直接使用后端端点
```

之后：

_app/pages/foo.vue_

```ts
const { data } = await useFetch('/api/foo', { key: 'foo' }) // 改用 Nitro 端点
```

_server/api/foo.ts_

```ts
export default defineCachedEventHandler(() => {
  return $fetch('/backend/endpoint/foo', { // 在 Nitro 端点中使用后端端点，就像代理一样
    method: 'get',
    // ...
  })
}, {
  name: 'foo'
})
```

#### 自定义数据获取

目前，Nuxt 没有提供更清洁的方式来让我们创建自定义获取器，请参见 <https://github.com/nuxt/nuxt/issues/14736>。

要查看当前解决方案，请按照 [Nuxt 文档](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch) 中的说明。

## Nitro

Nuxt 4 使用 Nitro 作为其服务器引擎，它提供了一种强大而灵活的方式来处理服务器端渲染、API 路由等。Nitro 设计为轻量级和高效，使其成为现代 Web 应用程序的绝佳选择。

### KV 存储

Nitro 提供了与 `unstorage` 集成的内置存储层，可以抽象文件系统、数据库或任何其他数据源。

更多信息请参考 [Nitro 文档](https://nitro.build/guide/storage)。

### 缓存

Nitro 提供了构建在存储层之上的缓存系统。内置的 KV 存储名为 `cache` 在底层使用。

请注意，此缓存系统基于 `h3` 提供的 `event handler`。

[事件处理程序](https://v1.h3.dev/guide/event-handler) 是一个函数，它将绑定到路由，并在路由器为传入请求匹配路由时执行。

**简而言之，事件处理程序提供了在 Nitro 上创建服务器路由/端点的能力，您可以在服务器端和客户端请求它们。然后，您可以在事件处理程序中 `$fetch` 数据并返回它们。**

_server/api/ask.get.ts_（通过文件名扩展创建带有 `get` 方法的端点）

```ts
export default defineEventHandler(() => {
  return $fetch('/backend/endpoint', {
    method: 'get',
    // ...
  })
})
```

在上述情况下，我们位于 `<BASE_URL>/api/ask` 的端点只是后端端点的代理，并具有缓存能力。

通过使用 `defineCachedEventHandler` 和 `defineCachedFunction`，您可以缓存事件处理程序和函数的结果（这些是其中的一部分，并在多个处理程序中重复使用）

更多用法请参考 [h3 文档](https://v1.h3.dev/guide)。

### 代理

更多信息请参见章节 [CORS](#cors)。

## Nuxt 模块

Nuxt 模块提供了许多功能，如自动导入、类型生成、开发工具集成等。

更多信息请参见 [Nuxt 模块页面](https://nuxt.com/modules)。

## Vue 3

无需多说...

## Vue 插件

Pinia、Vue Router 和 Vue I18n。

### Vue I18n

遗憾的是，目前 SFC 中的 i18n 自定义块不支持类型安全：[官方注释](https://vue-i18n.intlify.dev/guide/advanced/typescript.html#type-safe-resources-in-usei18n)。

本演示使用 Nuxt 团队提供的官方 Nuxt 模块，它为开发人员提供了丰富的 API 和组件，用于处理带有语言环境的路由跳转、语言环境更改、基于 cookie 的语言环境等方面。

本演示使用 Vue SFC 中的 `<i18n>` 块来存储**组件级别**的 i18n 文本，使用全局语言环境文件（`i18n/*.yaml`）来存储**公共**i18n 文本。

在我看来，将**组件级别**的 i18n 文本直接放入将要使用的 SFC 中，比将它们放入遥远的文件夹中要好得多，即使这些文件夹是"命名模块"。

#### 为什么我更喜欢将组件级别的 i18n 文本直接放入 SFC 中？

想象一下，当您收到更新某些 i18n 文本的请求时，您必须找出旧文本在哪里使用，甚至执行一些兼容性任务。

module1 下的旧文本：

_i18n/module1/en.json_

```json
{
  "old-text-1": "这是一个旧句子。"
}
```

**module1** 下使用旧文本的页面：

_app/pages/module1/page1.vue_

```html
<script lang="ts" setup>
  const { t } = useI18n()
</script>

<template>
  <div>{{ t('module1.old-text-1') }}</div>
</template>
```

**module2** 下**意外**使用 **module1** 旧文本的另一个页面：

_app/pages/module2/page2.vue_

```html
<script lang="ts" setup>
  const { t } = useI18n()
</script>

<template>
  <div>{{ t('module1.old-text-1') }}</div>
</template>
```

现在您应该保留旧文本或将其从 module1 移动到 module2，然后添加新文本：

保留旧文本：

_i18n/module1/en.json_

```json
{
  "old-text-1": "这是一个旧句子。",
  "new-text-1": "这是一个新句子。"
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

将其从 module1 移动到 module2

_i18n/module1/en.json_

```json
{
  "new-text-1": "这是一个新句子。"
}
```

_i18n/module2/en.json_

```json
{
  "old-text-1": "这是一个旧句子。"
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

它们都太麻烦了。

所以最佳实践是"不要将**组件级别**的 i18n 文本放入**公共**位置"。

就是这样！

## UI 库和 CSS 框架

### Element Plus

它可能不是最好的，但绝对不是错误的选择。

本演示使用 Element Plus 提供的官方 Nuxt 模块，它提供了自定义 UI 组件颜色、语言环境等方面的能力。

### UnoCSS

UnoCSS 是一个原子化 CSS 框架，比纯 Tailwind CSS 具有更好的性能。

原子化 CSS 可以减少 CSS 文件的大小，特别是对于大型项目。

UnoCSS 有与 Tailwind CSS 和其他 CSS 框架兼容的预设。

本演示使用 `presetWind3` 和 `presetAttributify` 预设，与 Tailwind CSS 3 和 attributify 原子化 CSS 类兼容，并添加一些自定义规则以使用 Element Plus 的 CSS 变量。

详细配置请参见[这里](uno.config.ts)。

Attributify 让您可以像 HTML 属性一样编写 CSS 类，这可以避免语义化和非语义化类的混合。

使用 attributify 之前：

```html
<div class="flex flex-row justify-between items-center max-w-1200px mx-auto py-1 px-4">
  <p class="text-5 font-bold">Nuxt 4 Demo</p>
</div>
```

使用 attributify 之后：

```html
<div flex="~ row" justify-between items-center max-w-1200px mx-auto p="y-1 x-4">
  <p text-5 font-bold>Nuxt 4 Demo</p>
</div>
```

例如下面，`page-header` 和 `page-title` 是通常在 JS 中使用的语义化类，对于开发人员来说，在这么多其他非语义化类中找到它们是很烦人的。

```html
<div class="flex flex-row justify-between items-center max-w-1200px mx-auto py-1 px-4 page-header">
  <p class="text-5 font-bold page-title">Nuxt 4 Demo</p>
</div>
```

## 工具库

### Vue Use

Vue Use 为 Vue Composition API 提供了丰富的工具。

例如，`useClipboard` 可以帮助您将文本复制到剪贴板，`useCookie` 可以帮助您管理 cookie。

所以我们不再需要 `clipboard` 和 `cookie-universal-nuxt` 包了。

### 代码高亮

在 Nuxt 中有两种常见的代码高亮选择：Highlight.js 和 Shiki。

#### Highlight.js（传统）

Highlight.js 是一个传统的代码块语法高亮器。

它支持多种语言，您可以在 Vue 3 中使用它。

本演示使用 [Highlight Js Vue Plugin](https://github.com/lumirelle/highlightjs-vue-plugin)，它提供了使用 Highlight.js 的基本 Vue 组件包装，并实现了一个带有一些默认预设的[组件](app/components/HighlightJs.vue)。

#### Shiki（推荐）

现代、智能、比 Highlight.js 更强大，比 Highlight.js 稍微复杂一些。

本演示使用 [Nuxt Shiki](https://github.com/pi0/nuxt-shiki)，它提供了使用 Shiki 的基本 Vue 组件包装，并实现了一个带有一些默认预设的[组件](app/components/ShikiJs.vue)。

### BigNumber.js

大数字支持，避免在计算价格等时出现精度问题。

本演示实现了一个[工具](shared/utils/bignumber.ts)，其中包含 `BigNumber` 或 `number` 之间的一些数学运算。

### Day.js

日期操作，Element Plus 也依赖它。

本演示实现了一个[插件](app/plugins/dayjs.ts)，以便将 Day.js 添加到 Nuxt 应用中。

### ECharts

在页面中添加图表的最佳选择。

默认情况下，ECharts 在浏览器中渲染，如果您更喜欢在服务器上渲染（SSR 模式）以获得更好的 FCP 或其他原因，您应该先阅读 [ECharts SSR 指南](https://echarts.apache.org/handbook/en/how-to/cross-platform/server/)。

然后，`nuxt-echarts` 提供不同的组件来处理不同的情况：

- `<VChart>`：Vue 中简单而强大的 ECharts 包装器，与 [`Vue-ECharts`](https://github.com/ecomfe/vue-echarts) 相同，在浏览器中渲染。
- `<VChartIsland>`：在服务器上渲染 ECharts，在底层使用 `<NuxtIsland>`，无 JS，非交互式（SVG）。
- `<VChartServer>`：`<VChartIsland>` 的包装器，因此允许客户端注入，仍然无 JS，非交互式（SVG）。
- `<VChartLight>`：在底层使用 `<VChartServer>` 在服务器端渲染 ECharts，服务器渲染的 SVG 通过 [ECharts 轻量级客户端运行时](https://echarts.apache.org/handbook/en/how-to/cross-platform/server/#lightweight-client-runtime) 进行水合，支持简单交互。
- `<VChartFull>`：为您的 Nuxt 应用带来完整的 ECharts 功能（与 `<VChart>` 相同）和 SSR，将在服务器上渲染图表，然后在浏览器中挂载后在客户端渲染。稍微有点重。

总结：

完整功能且仅客户端：`<VChart>`
无交互且服务器端渲染：`<VChartServer>`
简单交互且服务器端渲染：`<VChartLight>`
完整功能且服务器端渲染：`<VChartFull>`

更多用法请阅读 [ECharts 指南](https://echarts.apache.org/handbook/en/get-started) 和 [Nuxt ECharts 指南](https://echarts.nuxt.dev/getting-started)。

### Swiper.js

在页面中实现自定义轮播的最佳选择。

请注意，`Nuxt Swiper` 使用 `Swiper.js` 作为基础，使用其**Web 组件**，它们使用 kebab-case 命名约定，而 Vue 使用 PascalCase 命名约定。

如果您想了解如何在 Vue.js 中使用 Web 组件，请参考这里的文档：[Vue.js Web 组件](https://vuejs.org/guide/extras/web-components.html)

Can I Use 显示，在中国使用的浏览器中，85.54% 支持 Web 组件。在不支持的浏览器中，8.99% 是 IE 浏览器。也就是说，在大多数情况下，我们不需要担心 Web 组件的兼容性。

以下是来自 Can I Use 的结果：

- [自定义元素 (V1) 兼容性](https://caniuse.com/custom-elementsv1)
- [Shadow DOM (V1) 兼容性](https://caniuse.com/shadowdomv1)

### Nuxt QRCode

一个提供生成和读取二维码支持的 Nuxt 模块。

对于生成二维码，使用组件 `<Qrcode>` 和组合式函数 `useQrcode()`。

对于读取二维码，使用组件 `<QrcodeStream>`、`<QrcodeCapture>` 和 `<QrcodeDropZone>`（这里没有演示，因为这些用例相当不常见）。如果您真的需要使用它们，请参考[文档](https://qrcode.s94.dev/read/qrcode-stream)。

### LRU 缓存

Nuxt 提供了由 `nitro` 驱动的内置数据缓存支持，我们不需要使用像 `lru-cache` 这样的外部库来实现自己的缓存。
