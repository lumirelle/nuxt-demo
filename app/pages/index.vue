<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>

    <!-- Nuxt -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('nuxt.title') }}
      </H>
      <section>
        <I18nT keypath="nuxt.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://nuxt.com/docs/4.x/getting-started/introduction" external target="_blank">
              <span>Nuxt 4</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('nuxt.data-fetching.title') }}
        </H>
        <I18nT keypath="nuxt.data-fetching.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://nuxt.com/docs/4.x/getting-started/data-fetching" external target="_blank">
              <span>Nuxt Data Fetching</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
        <section>
          <H level="4">
            {{ t('nuxt.data-fetching.basic-usage.title') }}
          </H>
          <p>
            <NuxtLinkLocale to="/nuxt/data-fetching/basic-usage">
              <span>{{ t('nuxt.data-fetching.basic-usage.try') }}</span>
            </NuxtLinkLocale>
          </p>
        </section>
        <section>
          <H level="4">
            {{ t('nuxt.data-fetching.shared.title') }}
          </H>
          <p>
            {{ t('nuxt.data-fetching.shared.p1') }}
          </p>
          <p>
            <NuxtLinkLocale to="/nuxt/data-fetching/shared">
              <span>{{ t('nuxt.data-fetching.shared.try') }}</span>
            </NuxtLinkLocale>
          </p>
        </section>
        <section>
          <H level="4">
            {{ t('nuxt.data-fetching.cached.title') }}
          </H>
          <p>
            <NuxtLinkLocale to="/nuxt/data-fetching/cached-1">
              <span>{{ t('nuxt.data-fetching.cached.try-1') }}</span>
            </NuxtLinkLocale>
          </p>
          <p>
            <NuxtLinkLocale to="/nuxt/data-fetching/cached-2">
              <span>{{ t('nuxt.data-fetching.cached.try-2') }}</span>
            </NuxtLinkLocale>
          </p>
        </section>
        <section>
          <H level="4">
            {{ t('nuxt.data-fetching.custom.title') }}
          </H>
          <p>
            <NuxtLinkLocale to="/nuxt/data-fetching/custom-fetch">
              <span>{{ t('nuxt.data-fetching.custom.try') }}</span>
            </NuxtLinkLocale>
          </p>
        </section>
      </section>
    </section>

    <!-- Vue -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('vue.title') }}
      </H>
      <section>
        <I18nT keypath="vue.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://vuejs.org/guide/introduction.html" external target="_blank">
              <span>Vue 3</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
    </section>

    <!-- Pinia -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('pinia.title') }}
      </H>
      <section>
        <I18nT keypath="pinia.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://pinia.vuejs.org/zh/introduction.html" external target="_blank">
              <span>Pinia</span>
            </NuxtLinkLocale>
          </template>
          <template #link2>
            <NuxtLinkLocale to="https://nuxt.com/modules/pinia" external target="_blank">
              <span>@pinia/nuxt</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('pinia.basic-usage.title') }}
        </H>
        <I18nT keypath="pinia.basic-usage.desc" tag="p">
          <template #states>
            <code>states</code>
          </template>
          <template #getters>
            <code>getters</code>
          </template>
          <template #actions>
            <code>actions</code>
          </template>
        </I18nT>
        <p>
          <NuxtLinkLocale to="/pinia/basic-usage">
            <span>{{ t('pinia.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
      <section>
        <H level="3">
          {{ t('pinia.initializing.title') }}
        </H>
        <p>
          {{ t('pinia.initializing.desc') }}
        </p>
        <p>
          <NuxtLinkLocale to="/pinia/initializing">
            <span>{{ t('pinia.initializing.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- Vue Router -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('vue-router.title') }}
      </H>
      <section>
        <I18nT keypath="vue-router.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://router.vuejs.org/installation.html" external target="_blank">
              <span>Vue Router</span>
            </NuxtLinkLocale>
          </template>
          <template #link1>
            <NuxtLinkLocale to="https://nuxt.com/docs/4.x/getting-started/routing" external target="_blank">
              <span>Nuxt Routing</span>
            </NuxtLinkLocale>
          </template>
          <template #link2>
            <NuxtLinkLocale to="https://nuxt.com/docs/4.x/api/utils/define-page-meta" external target="_blank">
              <span>Page Meta in Nuxt</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
    </section>

    <!-- Vue I18n -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('vue-i18n.title') }}
      </H>
      <section>
        <I18nT keypath="vue-i18n.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://vue-i18n.intlify.dev/guide/introduction.html" external target="_blank">
              <span>Vue I18n</span>
            </NuxtLinkLocale>
          </template>
          <template #link2>
            <NuxtLinkLocale to="https://i18n.nuxtjs.org/docs/getting-started" external target="_blank">
              <span>@nuxtjs/i18n</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('vue-i18n.global.title') }}
        </H>
        <p>
          <NuxtLinkLocale to="/vue-i18n/global">
            <span>{{ t('vue-i18n.global.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
      <section>
        <H level="3">
          {{ t('vue-i18n.basic-usage.title') }}
        </H>
        <p>
          {{ t('vue-i18n.basic-usage.desc') }}
        </p>
        <p>
          <NuxtLinkLocale to="/vue-i18n/basic-usage">
            <span>{{ t('vue-i18n.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- Element Plus -->
    <section>
      <H level="2">
        {{ t('element-plus.title') }}
      </H>
      <I18nT keypath="element-plus.more-info" tag="p">
        <template #link>
          <NuxtLinkLocale to="https://element-plus.org/zh-CN/guide/design.html" external target="_blank">
            <span>Element Plus</span>
          </NuxtLinkLocale>
        </template>
        <template #link2>
          <NuxtLinkLocale to="https://nuxt.com/modules/element-plus" external target="_blank">
            <span>@element-plus/nuxt</span>
          </NuxtLinkLocale>
        </template>
      </I18nT>
      <p v-for="i in 2" :key="i">
        {{ t(`element-plus.p${i}`) }}
      </p>
      <p>
        <NuxtLinkLocale to="/element-plus">
          <span>{{ t('element-plus.try') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>

    <!-- UnoCSS -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('unocss.title') }}
      </H>
      <section>
        <I18nT keypath="unocss.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://unocss.dev/guide/" external target="_blank">
              <span>UnoCSS</span>
            </NuxtLinkLocale>
          </template>
          <template #link2>
            <NuxtLinkLocale to="https://nuxt.com/modules/unocss" external target="_blank">
              <span>@unocss/nuxt</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('unocss.basic-usage.title') }}
        </H>
        <I18nT keypath="unocss.basic-usage.desc" tag="p">
          <template #preset1>
            <code>presetWind3</code>
          </template>
          <template #preset2>
            <code>presetAttributify</code>
          </template>
        </I18nT>
        <p>
          <NuxtLinkLocale to="/unocss/basic-usage">
            <span>{{ t('unocss.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- Vue Use -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('vue-use.title') }}
      </H>
      <section>
        <I18nT keypath="vue-use.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://vueuse.org/guide/" external target="_blank">
              <span>Vue Use</span>
            </NuxtLinkLocale>
          </template>
          <template #link2>
            <NuxtLinkLocale to="https://nuxt.com/modules/vueuse" external target="_blank">
              <span>@vueuse/nuxt</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('vue-use.basic-usage.title') }}
        </H>
        <p>{{ t('vue-use.basic-usage.desc') }}</p>
        <p>
          <NuxtLinkLocale to="/vue-use/basic-usage">
            <span>{{ t('vue-use.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- HighlightJS -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('highlight-js.title') }}
      </H>
      <section>
        <I18nT keypath="highlight-js.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://highlightjs.org/#usage" external target="_blank">
              <span>Highlight.js</span>
            </NuxtLinkLocale>
          </template>
          <template #link2>
            <NuxtLinkLocale to="https://github.com/lumirelle/highlightjs-vue-plugin" external target="_blank">
              <span>highlightjs-vue-plugin</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('highlight-js.basic-usage.title') }}
        </H>
        <p>{{ t('highlight-js.basic-usage.desc') }}</p>
        <p>
          <NuxtLinkLocale to="/highlight-js/basic-usage">
            <span>{{ t('highlight-js.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- Shiki -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('shiki.title') }}
      </H>
      <section>
        <I18nT keypath="shiki.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://shiki.style/guide/" external target="_blank">
              <span>Shiki</span>
            </NuxtLinkLocale>
          </template>
          <template #link2>
            <NuxtLinkLocale to="https://github.com/pi0/nuxt-shiki" external target="_blank">
              <span>nuxt-shiki</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('shiki.basic-usage.title') }}
        </H>
        <I18nT keypath="shiki.basic-usage.desc" tag="p">
          <template #nuxt-module>
            <code>nuxt-shiki</code>
          </template>
        </I18nT>
        <p>
          <NuxtLinkLocale to="/shiki/basic-usage">
            <span>{{ t('shiki.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- Bignumber.JS -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('bignumber-js.title') }}
      </H>
      <section>
        <I18nT keypath="bignumber-js.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://mikemcl.github.io/bignumber.js/" external target="_blank">
              <span>Bignumber.js</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('bignumber-js.basic-usage.title') }}
        </H>
        <p>{{ t('bignumber-js.basic-usage.desc') }}</p>
        <p>
          <NuxtLinkLocale to="/bignumber-js/basic-usage">
            <span>{{ t('bignumber-js.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- Day.JS -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('day-js.title') }}
      </H>
      <section>
        <I18nT keypath="day-js.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://day.js.org/docs/en/installation/installation" external target="_blank">
              <span>Day.js</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('day-js.basic-usage.title') }}
        </H>
        <p>{{ t('day-js.basic-usage.desc') }}</p>
        <p>
          <NuxtLinkLocale to="/day-js/basic-usage">
            <span>{{ t('day-js.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- ECharts -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('e-charts.title') }}
      </H>
      <section>
        <I18nT keypath="e-charts.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://echarts.apache.org/handbook/en/get-started/" external target="_blank">
              <span>ECharts</span>
            </NuxtLinkLocale>
          </template>
          <template #link2>
            <NuxtLinkLocale to="https://echarts.nuxt.dev/getting-started" external target="_blank">
              <span>nuxt-echarts</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('e-charts.basic-usage.title') }}
        </H>
        <p>{{ t('e-charts.basic-usage.desc') }}</p>
        <p>
          <NuxtLinkLocale to="/e-charts/basic-usage">
            <span>{{ t('e-charts.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
      <section>
        <H level="3">
          {{ t('e-charts.chart-lite.title') }}
        </H>
        <p>{{ t('e-charts.chart-lite.desc') }}</p>
        <p>
          <NuxtLinkLocale to="/e-charts/chart-lite">
            <span>{{ t('e-charts.chart-lite.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
      <section>
        <H level="3">
          {{ t('e-charts.chart-full.title') }}
        </H>
        <p>{{ t('e-charts.chart-full.desc') }}</p>
        <p>
          <NuxtLinkLocale to="/e-charts/chart-full">
            <span>{{ t('e-charts.chart-full.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- Swiper.js -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('swiper-js.title') }}
      </H>
      <section>
        <I18nT keypath="swiper-js.more-info" tag="p">
          <template #link>
            <NuxtLinkLocale to="https://swiperjs.com/get-started" external target="_blank">
              <span>Swiper.js</span>
            </NuxtLinkLocale>
          </template>
          <template #link2>
            <NuxtLinkLocale to="https://github.com/cpreston321/nuxt-swiper" external target="_blank">
              <span>nuxt-swiper</span>
            </NuxtLinkLocale>
          </template>
        </I18nT>
      </section>
      <section>
        <H level="3">
          {{ t('swiper-js.basic-usage.title') }}
        </H>
        <p>{{ t('swiper-js.basic-usage.desc') }}</p>
        <p>
          <NuxtLinkLocale to="/swiper-js/basic-usage">
            <span>{{ t('swiper-js.basic-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
      <section>
        <H level="3">
          {{ t('swiper-js.advanced-usage.title') }}
        </H>
        <p>{{ t('swiper-js.advanced-usage.desc') }}</p>
        <p>
          <NuxtLinkLocale to="/swiper-js/advanced-usage">
            <span>{{ t('swiper-js.advanced-usage.try') }}</span>
          </NuxtLinkLocale>
        </p>
      </section>
    </section>

    <!-- Nuxt Scripts -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('nuxt-scripts.title') }}
      </H>
      <p>
        <NuxtLinkLocale to="/nuxt-scripts">
          <span>{{ t('nuxt-scripts.try') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>

    <!-- Nuxt QRCode -->
    <section border-b="1px solid [var(--el-border-color)]">
      <H level="2">
        {{ t('nuxt-qrcode.title') }}
      </H>
      <section>
        <H level="3">
          {{ t('nuxt-qrcode.basic-usage.title') }}
        </H>
        <NuxtLinkLocale to="/nuxt-qrcode/basic-usage">
          <span>{{ t('nuxt-qrcode.basic-usage.try') }}</span>
        </NuxtLinkLocale>
      </section>
      <section>
        <H level="3">
          {{ t('nuxt-qrcode.composable.title') }}
        </H>
        <NuxtLinkLocale to="/nuxt-qrcode/composable">
          <span>{{ t('nuxt-qrcode.composable.try') }}</span>
        </NuxtLinkLocale>
      </section>
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Welcome to Nuxt 4

  nuxt:
    title: Nuxt 4
    more-info: See {link} documentation for more information.
    data-fetching:
      title: Data Fetching
      more-info: See {link} documentation for more information.
      basic-usage:
        title: Basic Usage
        try: Try basic usage of Nuxt Data Fetching
      shared:
        title: Shared Data
        p1: Shared page data with components.
        try: Try shared data across components (even pages)
      cached:
        title: Cached Data
        try-1: Try caching data on the server (LRU Cache)
        try-2: Try fetching data again, see if data changed
      custom:
        title: Custom Fetch
        try: Try custom fetch with API

  vue:
    title: Vue 3
    more-info: See {link} documentation for more information.

  pinia:
    title: Pinia
    more-info: See {link} and {link2} documentation for more information.
    basic-usage:
      title: Basic Usage
      desc: A demo of using Pinia store with {states}, {getters}, and {actions} in a page.
      try: Try basic usage of Pinia
    initializing:
      title: Initializing Usage (Equivalent to `nuxtServerInit` in Nuxt 2)
      desc: A demo of using Pinia store and initializing it while app initializing.
      try: Try initializing usage of Pinia

  vue-router:
    title: Vue Router
    more-info: See {link}, {link1} and {link2} documentation for more information.

  vue-i18n:
    title: Vue I18n
    more-info: See {link} and {link2} documentation for more information.
    basic-usage:
      title: Basic Usage
      desc: A demo of using Vue I18n with local scope (yaml) and VSCode I18n extension settings (i18n ally).
      try: Try basic usage of Vue I18n
    global:
      title: Global Usage
      try: Try global usage of Vue I18n

  element-plus:
    title: Element Plus
    more-info: See {link} and {link2} documentation for more information.
    p1: This Nuxt module provides auto-import for Element Plus components, styles, directives, icons and more.
    p2: It also support customizing theme, variables and more in `nuxt.config.ts`
    try: Try usages of Element Plus

  unocss:
    title: UnoCSS
    more-info: See {link} and {link2} documentation for more information.
    basic-usage:
      title: Basic Usage
      desc: A demo of using UnoCSS with {preset1} and {preset2}.
      try: Try basic usage of UnoCSS

  vue-use:
    title: Vue Use
    more-info: See {link} and {link2} documentation for more information.
    basic-usage:
      title: Basic Usage
      desc: Vue Use is a collection of utilities based on Vue Composition API.
      try: Try basic usage of Vue Use

  highlight-js:
    title: Highlight.js (Legacy)
    more-info: See {link} and {link2} documentation for more information.
    basic-usage:
      title: Basic Usage
      desc: A demo of using Highlight.js with syntax highlighting in a page (Support dark mode).
      try: Try basic usage of Highlight.js

  shiki:
    title: Shiki (Recommended than Highlight.js)
    more-info: See {link} and {link2} documentation for more information.
    basic-usage:
      title: Basic Usage
      desc: A demo of using Shiki for syntax highlighting in a page (Support dark mode), integrated with {nuxt-module}.
      try: Try basic usage of Shiki

  bignumber-js:
    title: Bignumber.js
    more-info: See {link} documentation for more information.
    basic-usage:
      title: Basic Usage
      desc: A demo of using Bignumber.js for arbitrary-precision decimal arithmetic.
      try: Try basic usage of Bignumber.js

  day-js:
    title: Day.js
    more-info: See {link} documentation for more information.
    basic-usage:
      title: Basic Usage
      desc: A demo of using Day.js for date manipulation.
      try: Try basic usage of Day.js

  e-charts:
    title: ECharts
    more-info: See {link} and {link2} documentation for more information.
    basic-usage:
      title: Basic Usage (VChart, Client Rendering)
      desc: A demo of using VChart for data visualization.
      try: Try basic usage of VChart
    chart-lite:
      title: VChartLite, Server-Side Rendering, Simple Interactive
      desc:  A demo of using VChartLite for data visualization.
      try: Try basic usage of VChartLite
    chart-full:
      title: VChartFull, Server-Side Rendering, Full Interactive
      desc:  A demo of using VChartFull for data visualization.
      try: Try basic usage of VChartFull

  swiper-js:
    title: Swiper.js
    more-info: See {link} and {link2} documentation for more information.
    basic-usage:
      title: Basic Usage
      desc: A demo of using Swiper.js with default options.
      try: Try basic usage of Swiper.js
    advanced-usage:
      title: Advanced Usage
      desc:  A demo of using Swiper.js with advanced options.
      try: Try advanced usage of Swiper.js

  nuxt-scripts:
    title: "{'@'}nuxt/scripts"
    try: "Try {'@'}nuxt/scripts"

  nuxt-qrcode:
    title: nuxt-qrcode
    basic-usage:
      title: Nuxt QRCode Basic Usage
      try: Try basic usage of nuxt-qrcode
    composable:
      title: Nuxt QRCode Composable Usage
      try: Try composable usage of nuxt-qrcode

zh-CN:
  title: 欢迎使用 Nuxt 4

  nuxt:
    title: Nuxt 4
    more-info: 查看 {link} 文档了解更多信息。
    data-fetching:
      title: 数据获取
      more-info: 查看 {link} 文档了解更多信息。
      basic-usage:
        title: 基本使用
        try: 尝试 Nuxt 数据获取的基本用法
      shared:
        title: 数据共享
        p1: 将页面数据共享给组件
        try: 尝试在组件之间共享数据
      cached:
        title: 数据缓存
        try-1: 尝试在服务端缓存数据（LRU Cache）
        try-2: 尝试再次获取数据，看看它是否改变
      custom:
        title: 自定义获取
        try: 尝试使用 API 进行自定义获取

  vue:
    title: Vue 3
    more-info: 查看 {link} 文档了解更多信息。

  pinia:
    title: Pinia
    more-info: 查看 {link} 和 {link2} 文档了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Pinia Store 的 {states}、{getters} 和 {actions}。
      try: 尝试 Pinia 的基本使用
    initializing:
      title: 初始化使用（等价于 Nuxt 2 的 `nuxtServerInit`）
      desc: 使用 Pinia Store 并在应用初始化时初始化。
      try: 尝试 Pinia 的初始化使用

  vue-router:
    title: Vue Router
    more-info: 查看 {link}，{link1} 和 {link2} 文档了解更多信息。

  vue-i18n:
    title: Vue I18n
    more-info: 查看 {link} 和 {link2} 文档了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Vue I18n 的 local scope (yaml) 和 VSCode I18n 扩展设置 (i18n ally)。
      try: 尝试 Vue I18n 的基本使用
    global:
      title: 全局使用
      try: 尝试 Vue I18n 的全局使用

  element-plus:
    title: Element Plus
    more-info: 查看 {link} 和 {link2} 文档了解更多信息。
    p1: 这个 Nuxt 模块提供了 Element Plus 组件、样式、指令、图标等的自动导入。
    p2: 它还支持在 `nuxt.config.ts` 中自定义主题、变量等。
    try: 尝试 Element Plus 的基本使用

  unocss:
    title: UnoCSS
    more-info: 查看 {link} 和 {link2} 文档了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 UnoCSS 的 {preset1} 和 {preset2} 的演示。
      try: 尝试 UnoCSS 的基本使用

  vue-use:
    title: Vue Use
    more-info: 查看 {link} 和 {link2} 文档了解更多信息。
    basic-usage:
      title: 基本使用
      desc: Vue Use 是基于 Vue Composition API 的一组实用工具集合。
      try: 尝试 Vue Use 的基本使用

  highlight-js:
    title: Highlight.js (Legacy)
    more-info: 查看 {link} 和 {link2} 文档了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Highlight.js 在页面中进行语法高亮的演示（支持暗黑模式）。
      try: 尝试 Highlight.js 的基本使用

  shiki:
    title: Shiki（比 Highlight.js 更推荐）
    more-info: 查看 {link} 和 {link2} 文档了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Shiki 在页面中进行语法高亮的演示（支持暗黑模式），由 {nuxt-module} 集成。
      try: 尝试 Shiki 的基本使用

  bignumber-js:
    title: Bignumber.js
    more-info: 查看 {link} 文档了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Bignumber.js 进行任意精度小数运算的演示。
      try: 尝试 Bignumber.js 的基本使用

  day-js:
    title: Day.js
    more-info: 查看 {link} 文档了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Day.js 进行日期处理的演示。
      try: 尝试 Day.js 的基本使用

  e-charts:
    title: ECharts
    more-info: 查看 {link} 和 {link2} 文档了解更多信息。
    basic-usage:
      title: 基本使用 (VChart, 客户端渲染)
      desc: 使用 VChart 进行数据可视化的演示。
      try: 尝试 VChart 的基本使用
    chart-lite:
      title: VChartLite，服务端渲染，简单交互
      desc: 使用 VChartLite 进行数据可视化的演示。
      try: 尝试 VChartLite 的基本使用
    chart-full:
      title: VChartFull，服务端渲染，完整交互
      desc: 使用 VChartFull 进行数据可视化的演示。
      try: 尝试 VChartFull 的基本使用

  swiper-js:
    title: Swiper.js
    more-info: 查看 {link} 和 {link2} 文档了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Swiper.js 默认选项的演示。
      try: 尝试 Swiper.js 的基本使用
    advanced-usage:
      title: 高级用法
      desc: 使用 Swiper.js 高级选项的演示。
      try: 尝试 Swiper.js 的高级用法

  nuxt-scripts:
    title: "{'@'}nuxt/scripts"
    try: "尝试 {'@'}nuxt/scripts"

  nuxt-qrcode:
    title: nuxt-qrcode
    basic-usage:
      title: Nuxt QRCode 基本用法
      try: 尝试 nuxt-qrcode 的基本用法
    composable:
      title: Nuxt QRCode Composable 用法
      try: 尝试 nuxt-qrcode 的 Composable 用法

zh-TW:
  title: 歡迎使用 Nuxt 4

  nuxt:
    title: Nuxt 4
    more-info: 查看 {link} 文檔了解更多信息。
    data-fetching:
      title: 數據獲取
      more-info: 查看 {link} 文檔了解更多信息。
      basic-usage:
        title: 基本使用
        try: 嘗試 Nuxt 數據獲取的基本用法。
      shared:
        title: 共享數據
        p1: 將頁面數據共享給組件。
        try: 嘗試在組件之間共享數據（甚至頁面）
      cached:
        title: 數據緩存
        try-1: 嘗試在服務端緩存數據（LRU Cache）
        try-2: 嘗試再次獲取數據，看看它是否改變
      custom:
        title: 自定义获取
        try: 尝试使用 API 进行自定义获取

  vue:
    title: Vue 3
    more-info: 查看 {link} 文檔了解更多信息。

  pinia:
    title: Pinia
    more-info: 查看 {link} 和 {link2} 文檔了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Pinia Store 的 {states}、{getters} 和 {actions}。
      try: 嘗試 Pinia 的基本使用
    initializing:
      title: 初始化使用（等價於 Nuxt 2 的 `nuxtServerInit`）
      desc: 使用 Pinia Store 並在應用初始化時初始化。
      try: 嘗試 Pinia 的初始化使用

  vue-router:
    title: Vue Router
    more-info: 查看 {link}，{link1} 和 {lin2} 文檔了解更多信息。

  vue-i18n:
    title: Vue I18n
    more-info: 查看 {link} 和 {link2} 文檔了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Vue I18n 的 local scope (yaml) 和 VSCode I18n 擴展設置 (i18n ally)。
      try: 嘗試 Vue I18n 的基本使用
    global:
      title: 全局使用
      try: 嘗試 Vue I18n 的全局使用

  element-plus:
    title: Element Plus
    more-info: 查看 {link} 和 {link2} 文檔了解更多信息。
    p1: 這個 Nuxt 模組提供了 Element Plus 組件、樣式、指令、圖標等的自動導入。
    p2: 它還支持在 `nuxt.config.ts` 中自定義主題、變量等。
    try: 嘗試 Element Plus 的基本使用

  unocss:
    title: UnoCSS
    more-info: 查看 {link} 和 {link2} 文檔了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 UnoCSS 的 {preset1} 和 {preset2} 的演示。
      try: 嘗試 UnoCSS 的基本使用

  vue-use:
    title: Vue Use
    more-info: 查看 {link} 和 {link2} 文檔了解更多信息。
    basic-usage:
      title: 基本使用
      desc: Vue Use 是基於 Vue Composition API 的一組實用工具集合。
      try: 嘗試 Vue Use 的基本使用

  highlight-js:
    title: Highlight.js (Legacy)
    more-info: 查看 {link} 和 {link2} 文檔了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Highlight.js 在頁面中進行語法高亮的演示（支持暗黑模式）。
      try: 嘗試 Highlight.js 的基本使用

  shiki:
    title: Shiki（比 Highlight.js 更推荐）
    more-info: 查看 {link} 和 {link2} 文檔了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Shiki 在頁面中進行語法高亮的演示（支持暗黑模式），由 {nuxt-module} 集成。
      try: 嘗試 Shiki 的基本使用

  bignumber-js:
    title: Bignumber.js
    more-info: 查看 {link} 文檔了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Bignumber.js 進行任意精度小數運算的演示。
      try: 嘗試 Bignumber.js 的基本使用

  day-js:
    title: Day.js
    more-info: 查看 {link} 文檔了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Day.js 進行日期處理的演示。
      try: 嘗試 Day.js 的基本使用

  e-charts:
    title: ECharts
    more-info: 查看 {link} 和 {link2} 文檔了解更多信息。
    basic-usage:
      title: 基本使用 (VChart, 客戶端渲染)
      desc: 使用 VChart 進行數據可視化的演示。
      try: 嘗試 VChart 的基本使用
    chart-lite:
      title: VChartLite，服务端渲染，简单交互
      desc: 使用 VChartLite 進行數據可視化的演示。
      try: 嘗試 VChartLite 的基本使用
    chart-full:
      title: VChartFull，服务端渲染，完整交互
      desc: 使用 VChartFull 進行數據可視化的演示。
      try: 嘗試 VChartFull 的基本使用

  swiper-js:
    title: Swiper.js
    more-info: 查看 {link} 和 {link2} 文檔了解更多信息。
    basic-usage:
      title: 基本使用
      desc: 使用 Swiper.js 默認選項的演示。
      try: 嘗試 Swiper.js 的基本使用
    advanced-usage:
      title: 高級用法
      desc: 使用 Swiper.js 高級選項的演示。
      try: 嘗試 Swiper.js 的高級用法

  nuxt-scripts:
    title: "{'@'}nuxt/scripts"
    try: "嘗試 {'@'}nuxt/scripts"

  nuxt-qrcode:
    title: nuxt-qrcode
    basic-usage:
      title: Nuxt QRCode 基本用法
      try: 嘗試 nuxt-qrcode 的基本用法
    composable:
      title: Nuxt QRCode Composable 用法
      try: 嘗試 nuxt-qrcode 的 Composable 用法
</i18n>
