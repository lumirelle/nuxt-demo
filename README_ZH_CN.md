# Nuxt 4 演示项目

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

待办事项：

- [Nuxt GTag](https://nuxt.com/modules/gtag)
- 待办: MD5 & SHA256 (寻找加密包)
- 待办: XLSX

优化：

- [Nuxt Scripts](https://nuxt.com/modules/scripts)
- [Nuxt SVGO](https://nuxt.com/modules/nuxt-svgo)

开发体验：

- [Nuxt Test Utils](https://nuxt.com/modules/test-utils)
- [Nuxt Typed Router](https://nuxt.com/modules/typed-router)

## Nuxt 4

Nuxt 4 相比 Nuxt 2 提供了更多功能，包括：

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
- SEO 友好 (感谢 `@nuxt/seo` 和 Nuxt 4 本身)
- 更好的开发体验
  - 完全类型化，让你写代码时减少查阅文档
  - Nuxt 开发工具面板集成了许多插件和模块
  - ...
- 清晰的文件结构
  - 所有与应用端相关的代码都在 `app` 目录中
  - 所有与服务器端相关的代码都在 `server` 目录中
  - ...
- ...

阅读入门指南请点击[这里](https://nuxt.com/docs/4.x/getting-started/introduction)。

### 水合错误

如果你使用 Nuxt 4 的 SSR 渲染模式，你必须了解水合错误：**水合错误**。

水合错误是由服务器渲染的 HTML 和客户端渲染的 HTML 不匹配引起的。

更多信息请参考[官方文档](https://nuxt.com/docs/4.x/guide/best-practices/hydration)。

以下是一些常见的水合错误情况。

#### 无效的 HTML 嵌套结构

最常见的情况是无效的 HTML 嵌套结构，比如你在 `p` 标签内放置了一个 `div`：

<!-- 使用 `xml` 而不是 `html` 来避免 prettier 的错误 -->

```xml
<p><div>hi</div></p>
```

如果你使用 prettier，你会得到这样的错误：

> 解析错误：意外的结束标签 "p"。当标签已经被另一个标签关闭时可能会发生这种情况。更多信息请参见 https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags

原因是 HTML 标准不允许这样做，浏览器会将代码解析为：

```xml
<p></p>
<div>hi</div>
<p></p>
```

所以你应该真正了解 **HTML 的嵌套结构规则**，无论你是否使用 SSR 渲染。

以下是一些基本规则：

- [交互式内容](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content)不应该嵌套在任何其他交互式内容中。
- `h1` ~ `h6` 只能包含[短语内容](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content)。
- `label` 和 `p` 只能接受[短语内容](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content)，除了它们自己。
- [空元素](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)不能包含任何内容，它们必须通过自闭合标签关闭。

更多详细信息，你可以从 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) 找到特定元素的**技术摘要**。

#### 渲染期间使用不同的数据

另一个常见情况是在渲染期间使用不同的数据。

例如，你直接使用 `@vueuse/core` 中的 `useDark` 来控制你的 Vue SFC 模板，你会得到水合错误。

```html
<script setup>
  import { useDark } from '@vueuse/core'

  const isDark = useDark()
</script>

<template>
  <div v-if="isDark">
    <p>深色</p>
  </div>
  <div v-else>
    <p>浅色</p>
  </div>
</template>
```

你的服务器渲染的 HTML 如下：

```html
<div>
  <p>浅色</p>
</div>
```

而你的客户端渲染的 HTML 如下：

```html
<div>
  <p>深色</p>
</div>
```

在水合过程中，它们会产生冲突。

所以如果你使用 SSR 渲染，你不应该让你的 HTML 结构依赖于基于客户端的数据，比如 LocalStorage、浏览器 API 等。

### 数据获取

Nuxt 4 使用 `ofetch` 提供更好的数据获取体验。它是一个轻量级且强大的 fetch 包装器，支持自动重试、请求取消等功能。

因此，我们不再需要使用 `axios` 和实现我们自己的 axios 插件。

Nuxt 4 提供了三种获取数据的方式：`$fetch`、`useFetch`、`useAsyncData`。

注意，`useFetch` 和 `useAsyncData` 设计为仅在服务器上获取数据，以避免冗余的数据获取操作并防止在数据获取完成之前进行导航。

更多信息请参考 [`useFetch` 和 `useAsyncData` 的必要性](https://nuxt.com/docs/4.x/getting-started/data-fetching#the-need-for-usefetch-and-useasyncdata)。

注意，仅使用 `$fetch` 不会提供网络调用去重和导航阻止。建议将 $fetch 用于客户端交互（基于事件）或与 useAsyncData 结合使用来获取初始组件数据。

更多信息请参考 [`$fetch`](https://nuxt.com/docs/4.x/getting-started/data-fetching#fetch)。

因此，Nuxt 提供了[懒加载](https://nuxt.com/docs/4.x/getting-started/data-fetching#lazy)、[数据选择](https://nuxt.com/docs/4.x/getting-started/data-fetching#minimize-payload-size)、[缓存和重新获取](https://nuxt.com/docs/4.x/getting-started/data-fetching#caching-and-refetching)等功能。

#### 传递客户端请求头

在服务器上调用 `useFetch` 时，Nuxt 将使用 `useRequestFetch` 自动代理客户端请求头和 cookie（除了不应该转发的请求头，如 `host`）。

如果你想在使用 `$fetch` 时达到相同的行为，你应该手动使用代理，例如：

```ts
const requestFetch = useRequestFetch()
async function doFetchHeaders() {
  const { data } = await requestFetch('/api/submit') // 这**会**将请求头传递给端点 `/api/submit`
}

async function doFetch() {
  const { data } = await $fetch('/api/submit') // 这**不会**将请求头传递给端点 `/api/submit`
}
```

或者你可以通过 `useRequestHeaders` 指定要包含在请求中的自定义请求头：

```ts
const headers = useRequestHeaders(['cookies'])
async function doFetchWithHeaders() {
  const { data } = await $fetch('/api/submit', { headers })
}
```

在将请求头代理到外部 API 之前要非常小心，只包含你需要的请求头。并非所有请求头都可以安全地绕过，可能会引入不必要的行为。以下是不应该代理的常见请求头列表：

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

你可以通过使用相同的键来跨组件共享状态。

注意，共享状态要求提供给组合式函数的以下选项必须一致：

- `handler` 函数
- `deep` 选项
- `transform` 函数
- `pick` 数组
- `getCachedData` 函数
- `default` 值

因为这些选项会导致不同的数据。如果你需要独立实例，请使用不同的键。

在组件中，使用 `useNuxtData` 访问共享数据：

```ts
const { data: foo } = useNuxtData('foo')
```

你可以通过组合式函数暴露的函数刷新、清除缓存数据，或通过提供 `watch` 数组快速刷新数据：

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

#### Nitro 中的缓存

如果你想在服务器中缓存数据（是的，那就是 Nitro！）。你应该使用 Nitro 提供的能力：[KV 存储](#kv-存储) 和 [缓存](#缓存)。

简而言之，你应该**通过 Nitro `api` 或 `route` 与 `event handler` 代理你的数据获取**，然后在事件处理程序中添加缓存逻辑。

之前：

_app/pages/foo.vue_

```ts
const { data } = await useFetch('/backend/endpoint/foo', { key: 'foo' }) // 直接使用后端端点
```

之后：

_app/pages/foo.vue_

```ts
const { data } = await useFetch('/api/foo', { key: 'foo' }) // 使用 Nitro 端点替代
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

请参考 [Nuxt 文档](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch)。

## Nitro

Nuxt 4 使用 Nitro 作为其服务器引擎，它提供了一种强大而灵活的方式来处理服务器端渲染、API 路由等。Nitro 设计为轻量级和高效，使其成为现代 Web 应用程序的绝佳选择。

### KV 存储

Nitro 提供了与 `unstorage` 集成的内置存储层，可以抽象文件系统或数据库或任何其他数据源。

更多信息请参考 [Nitro 文档](https://nitro.build/guide/storage)。

### 缓存

Nitro 提供了基于存储层构建的缓存系统。内置的 KV 存储名为 `cache`。

注意，这个缓存系统基于 `h3` 提供的 `event handler`。

[事件处理程序](https://v1.h3.dev/guide/event-handler)是一个函数，它将绑定到路由，并在路由器为传入请求匹配路由时执行。

**简而言之，事件处理程序提供了在 Nitro 上创建服务器路由/端点的能力，你可以在服务器端和客户端请求它们。然后，你可以在事件处理程序中 `$fetch` 数据并返回它们。**

_server/api/ask.get.ts_ (通过文件名扩展创建带有 `get` 方法的端点)

```ts
export default defineEventHandler(() => {
  return $fetch('/backend/endpoint', {
    method: 'get',
    // ...
  })
})
```

在上述情况下，我们位于 `<BASE_URL>/api/ask` 的端点只是后端端点的代理，并具有缓存能力。

通过使用 `defineCachedEventHandler` 和 `defineCachedFunction`，你可以缓存事件处理程序和函数的结果（它们是其中的一部分，并在多个处理程序中重复使用）

更多用法请参考 [h3 文档](https://v1.h3.dev/guide)。

## Nuxt 模块

Nuxt 模块提供了许多功能，如自动导入、类型生成、开发工具集成等。

更多信息请参见 [Nuxt 模块页面](https://nuxt.com/modules)。

## Vue 3

没什么可说的...

## Vue 插件

Pinia、Vue Router 和 Vue I18n。

### Vue I18n

遗憾的是，目前 SFC 中的 i18n 自定义块不支持类型安全：[官方注释](https://vue-i18n.intlify.dev/guide/advanced/typescript.html#type-safe-resources-in-usei18n)。

这个演示使用了 Nuxt 团队提供的官方 Nuxt 模块，它为开发人员提供了丰富的 API 和组件来操作基于语言环境的路由跳转、语言环境更改、基于 cookie 的语言环境等方面。

这个演示使用 Vue SFC 中的 `<i18n>` 块来存储**组件级别**的 i18n 文本，使用全局语言环境文件 (`i18n/*.yaml`) 来存储**公共**的 i18n 文本。

在我看来，将**组件级别**的 i18n 文本直接放入将要使用的 SFC 中，比将它们放入远离的文件夹中要好得多，即使这些文件夹是"命名模块"。

#### 为什么我更喜欢将组件级别的 i18n 文本直接放入 SFC？

想象一下，当你收到更新某些 i18n 文本的请求时，你必须找出旧文本在哪里使用，甚至执行一些兼容性任务。

module1 下的旧文本：

_i18n/module1/en.json_

```json
{
  "old-text-1": "This is an old sentence."
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

现在你应该保留旧文本或将其从 module1 移动到 module2，然后添加新文本：

保留旧文本：

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

将其从 module1 移动到 module2

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

它们都太麻烦了。

所以最佳实践是"不要将**组件级别**的 i18n 文本放入**公共**位置"。

就是这样！

## UI 库和 CSS 框架

### Element Plus

它可能不是最好的，但绝对不是一个错误的选择。

这个演示使用了 Element Plus 提供的官方 Nuxt 模块，它提供了自定义 UI 组件颜色、语言环境等方面的能力。

### UnoCSS

UnoCSS 是一个原子化 CSS 框架，比纯 Tailwind CSS 有更好的性能。

原子化 CSS 可以减少 CSS 文件的大小，特别是对于大型项目。

UnoCSS 有与 Tailwind CSS 和其他 CSS 框架兼容的预设。

这个演示使用 `presetWind3` 和 `presetAttributify` 预设，与 Tailwind CSS 3 和 attributify 原子化 CSS 类兼容，并添加一些自定义规则以使用来自 Element Plus 的 CSS 变量。

详细配置请参见[这里](uno.config.ts)。

Attributify 让你像 HTML 属性一样编写 CSS 类，这可以避免语义和非语义类的混合。

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

例如下面，`page-header` 和 `page-title` 是通常在 JS 中使用的语义类，对于开发人员来说，在这么多其他非语义类中找到它们是很烦人的。

```html
<div class="flex flex-row justify-between items-center max-w-1200px mx-auto py-1 px-4 page-header">
  <p class="text-5 font-bold page-title">Nuxt 4 Demo</p>
</div>
```

## 工具库

### Vue Use

Vue Use 为 Vue Composition API 提供了丰富的工具。

例如，`useClipboard` 可以帮助你将文本复制到剪贴板，`useCookie` 可以帮助你管理 cookie。

所以我们不再需要 `clipboard` 和 `cookie-universal-nuxt` 包。

### 代码高亮

在 Nuxt 中有两种常见的代码高亮选择：Highlight.js 和 Shiki。

#### Highlight.js (传统)

Highlight.js 是代码块的传统语法高亮器。

它支持多种语言，你可以将其与 Vue 3 一起使用。

这个演示使用了 [Highlight Js Vue Plugin](https://github.com/lumirelle/highlightjs-vue-plugin)，它提供了使用 Highlight.js 的基本 Vue 组件包装，并实现了一个带有一些默认预设的[组件](app/components/HighlightJs.vue)。

#### Shiki (推荐)

现代、智能、比 Highlight.js 更强大，比 Highlight.js 稍微复杂一些。

这个演示使用了 [Nuxt Shiki](https://github.com/pi0/nuxt-shiki)，它提供了使用 Shiki 的基本 Vue 组件包装，并实现了一个带有一些默认预设的[组件](app/components/ShikiJs.vue)。

### BigNumber.js

大数字支持，避免计算价格时的精度问题等。

这个演示实现了一个[工具](shared/utils/bignumber.ts)，其中包含 `BigNumber` 或 `number` 之间的一些数学运算。

### Day.js

日期操作，Element Plus 也依赖它。

这个演示实现了一个[插件](app/plugins/dayjs.ts)以便将 Day.js 添加到 Nuxt 应用中。

### ECharts

在页面中添加图表的最佳选择。

默认情况下，ECharts 在浏览器中渲染，如果你更喜欢在服务器上渲染（SSR 模式）以获得更好的 FCP 或其他原因，你应该先阅读 [ECharts SSR 指南](https://echarts.apache.org/handbook/en/how-to/cross-platform/server/)。

然后，`nuxt-echarts` 提供不同的组件来处理不同的情况：

- `<VChart>`：Vue 中简单而强大的 ECharts 包装器，与 [`Vue-ECharts`](https://github.com/ecomfe/vue-echarts) 相同，在浏览器中渲染。
- `<VChartIsland>`：在服务器上渲染 ECharts，在底层使用 `<NuxtIsland>`，无 JS，非交互式（SVG）。
- `<VChartServer>`：围绕 `<VChartIsland>` 的包装器，所以允许客户端注入，仍然无 JS，非交互式（SVG）。
- `<VChartLight>`：在底层使用 `<VChartServer>` 在服务器端渲染 ECharts，服务器渲染的 SVG 通过 [ECharts 轻量级客户端运行时](https://echarts.apache.org/handbook/en/how-to/cross-platform/server/#lightweight-client-runtime)进行水合，支持简单交互。
- `<VChartFull>`：为你的 Nuxt 应用带来完整的 ECharts 功能（与 `<VChart>` 相同）和 SSR，将在服务器上渲染图表，然后在浏览器中挂载后在客户端渲染。稍微有点重。

简而言之：

完整功能和仅客户端：`<VChart>`
非交互和服务器端渲染：`<VChartServer>`
简单交互和服务器端渲染：`<VChartLight>`
完整功能和服务器端渲染：`<VChartFull>`

更多用法请阅读 [ECharts 指南](https://echarts.apache.org/handbook/en/get-started) 和 [Nuxt ECharts 指南](https://echarts.nuxt.dev/getting-started)。

### Swiper.js

在页面中实现自定义轮播的最佳选择。

注意，`Nuxt Swiper` 使用 `Swiper.js` 作为其基础，使用其**Web 组件**，它们使用 kebab-case 命名约定，而 Vue 使用 PascalCase 命名约定。

如果你想了解如何在 Vue.js 中使用 Web 组件，请参考这里的文档：[Vue.js Web 组件](https://vuejs.org/guide/extras/web-components.html)

Can I Use 显示 Web 组件在中国使用的浏览器中有 85.54% 的支持率。在不支持的浏览器中，8.99% 是 IE 浏览器。也就是说，在大多数情况下我们不需要担心 Web 组件的兼容性。

以下是 Can I Use 的结果：

- [自定义元素 (V1) 兼容性](https://caniuse.com/custom-elementsv1)
- [Shadow DOM (V1) 兼容性](https://caniuse.com/shadowdomv1)

### Nuxt QRCode

一个提供生成和读取二维码支持的 Nuxt 模块。

对于生成二维码，使用组件 `<Qrcode>` 和组合式函数 `useQrcode()`。

对于读取二维码，使用组件 `<QrcodeStream>`、`<QrcodeCapture>` 和 `<QrcodeDropZone>`（这里没有演示，因为这些用例相当不常见）。如果你真的需要使用它们，请参考[文档](https://qrcode.s94.dev/read/qrcode-stream)。

### LRU 缓存

Nuxt 提供了由 `nitro` 提供支持的数据缓存内置支持，我们不需要使用像 `lru-cache` 这样的外部库来实现我们自己的缓存。
