// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      title: 'Nuxt Demo',
    },
  },

  css: [
    '@/assets/styles/public.scss',
  ],

  devtools: { enabled: true },

  modules: [
    // Element Plus auto import & theme & variables override support
    '@element-plus/nuxt',
    // ESLint integration in Nuxt devtools
    '@nuxt/eslint',
    // Third party scripts loading, better performance & stronger feature
    '@nuxt/scripts',
    // Test utils, unit test & e2e test support
    '@nuxt/test-utils',
    // Color mode
    '@nuxtjs/color-mode',
    // i18n
    '@nuxtjs/i18n',
    // TODO: SEO
    '@nuxtjs/seo',
    // Pinia
    '@pinia/nuxt',
    // UnoCSS
    '@unocss/nuxt',
    // Vue Use
    '@vueuse/nuxt',
    // Shiki, code highlighting
    'nuxt-shiki',
    // Typed route path, improve your DX
    'nuxt-typed-router',
    // ECharts components, themes, init options, ssr support and so on
    'nuxt-echarts',

    // TODO: Pending triage below
    'nuxt-gtag',
    'nuxt-qrcode',
    'nuxt-svgo',
    'nuxt-swiper',
  ],

  elementPlus: {
    // Enable dark mode
    themes: ['dark'],

    // Import Element Plus SCSS & override the default variables
    importStyle: 'scss',
    themeChalk: {
      '$colors': {
        primary: {
          base: '#00c16a',
        },
      },
      '$bg-color': {
        '': '#f6f6f7',
        'page': '#fff',
      },
      '$border-color': {
        '': '#1D293D',
      },
      'dark': {
        '$colors': {
          primary: {
            base: '#00dc82',
          },
        },
        '$bg-color': {
          '': '#161618',
          'page': '#1B1B1F',
        },
        '$border-color': {
          '': '#1D293D',
        },
      },
    },
  },

  eslint: {
    config: {
      // By default, `@nuxt/eslint` will install the JS, TS and Vue plugins with their recommended rules,
      // Which may override your config preset. Setting `standalone` option to `false` will disable this behavior.
      // See https://eslint.nuxt.com/packages/module#custom-config-presets for more information.
      standalone: false,
    },
  },

  scripts: {
    // Example to load third party script globally
    globals: {
      jsConfetti: ['https://cdn.jsdelivr.net/npm/js-confetti@0.12.0/dist/js-confetti.browser.js', {
        bundle: true,
        trigger: 'onNuxtReady',
      }],
    },
  },

  colorMode: {
    // Compatible with UnoCSS & Element Plus
    classSuffix: '',
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'zh-CN', name: '简体中文' },
      { code: 'zh-TW', name: '繁體中文' },
    ],
    // NOTE: I18n will detect the browser language by default
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },

  shiki: {
    bundledThemes: [
      'vitesse-light',
      'vitesse-dark',
    ],
    defaultTheme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    bundledLangs: [
      'vue',
      'html',
      'xml',
      'js',
      'ts',
      'css',
      'scss',
      'json',
      'yaml',
    ],
    // Do not set transformers here, it will not take effects.
  },

  echarts: {
    // Enable both canvas and svg renderer
    renderer: ['canvas', 'svg'],
    // Add charts you want below, which is used by `<VChart>`
    charts: ['BarChart', 'LineChart', 'PieChart', 'MapChart'],
    // Add components you want below, which is used by `<VChart>`
    components: [
      'DatasetComponent',
      'GridComponent',
      'TooltipComponent',
      'ToolboxComponent',
      'LegendComponent',
      'GeoComponent',
      'VisualMapComponent',
    ],
    // Add features you want below, which is used by `<VChart>`
    features: ['LabelLayout', 'UniversalTransition'],
  },

  build: {
    // echarts-liquidfill is not ESM friendly
    transpile: ['echarts-liquidfill'],
  },

  vite: {
    build: {
      target: 'es2015',
    },
  },
})
