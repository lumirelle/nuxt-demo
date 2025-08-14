import process from 'node:process'
import { defineOrganization } from 'nuxt-schema-org/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* -------------------------------------------------------------------------- */
  /*                                 Application                                */
  /* -------------------------------------------------------------------------- */

  app: {
    head: {
      title: 'Nuxt Demo',
    },
  },

  css: [
    '@/assets/styles/public.scss',
  ],

  devtools: { enabled: true },

  // These config will auto-overridden by .env variables
  runtimeConfig: {
    // Private keys are only available on the server
    // ...

    // Public keys that are exposed to the client
    public: {
      // Base urls to `/web`
      webBase: '',
      dockerWebBase: '',
      proxyWebBase: '',

      // Google Tag Manager id
      scripts: {
        googleTagManager: {
          id: '',
        },
      },
    },
  },

  /* -------------------------------------------------------------------------- */
  /*                               Server                                       */
  /* -------------------------------------------------------------------------- */

  nitro: {
    storage: {
      // Override the default options of cache storage
      cache: {
        driver: 'lru-cache',
        // Options provided to lru-cache constructor
        ttl: 1000 * 60 * 5,
        max: 100,
      },
    },
    // Override the default options of cache storage in dev mode
    devStorage: {
      cache: {
        driver: 'lru-cache',
        // Options provided to lru-cache constructor
        ttl: 1000 * 60 * 5,
        max: 100,
      },
    },

    // Proxy remote server to local (`<target>/xxx` => `/web/xxx`), avoid CORS.
    devProxy: {
      // All request start with `/web`, such as `/web/foo` will be replaced to `<target>/foo`, `/web` will be removed
      '/web': {
        target: process.env.NUXT_PUBLIC_PROXY_WEB_BASE,
        changeOrigin: true,
      },
    },
  },

  compatibilityDate: '2025-08-14',

  /* -------------------------------------------------------------------------- */
  /*                                    Build                                   */
  /* -------------------------------------------------------------------------- */

  build: {
    // echarts-liquidfill is not ESM friendly
    transpile: ['echarts-liquidfill'],
  },

  vite: {
    build: {
      target: 'es2015',
    },
  },

  /* -------------------------------------------------------------------------- */
  /*                                   Modules                                  */
  /* -------------------------------------------------------------------------- */

  modules: [
    // Color mode
    '@nuxtjs/color-mode',
    // Element Plus auto import & theme & variables override support
    '@element-plus/nuxt',
    // UnoCSS
    '@unocss/nuxt',
    // i18n
    '@nuxtjs/i18n',

    // Third party scripts loading, better performance & stronger feature
    // Support Google Tag Manager too
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/fonts',

    // SEO, robots.txt, sitemap.xml and so on
    '@nuxtjs/seo',

    // Pinia
    '@pinia/nuxt',
    // Vue Use
    '@vueuse/nuxt',

    // Shiki, code highlighting
    'nuxt-shiki',
    // Swiper.js
    'nuxt-swiper',
    // ECharts components, themes, init options, ssr support and so on
    'nuxt-echarts',
    // Generating and reading QRCodes.
    'nuxt-qrcode',

    // Typed route path, improve your DX
    'nuxt-typed-router',
    // ESLint integration in Nuxt devtools
    '@nuxt/eslint',
    // Test utils, unit test & e2e test support
    '@nuxt/test-utils',

    // TODO: Pending triage below
    'nuxt-svgo',
  ],

  /* ------------------------------- UI Modules ------------------------------- */

  colorMode: {
    // Compatible with UnoCSS & Element Plus
    classSuffix: '',
    // Default color mode preference is below, you don't need provide them explicitly
    preference: 'system',
    fallback: 'light',
  },

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
        '': '#E2E8F0',
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

  i18n: {
    locales: [
      // FIXME: Should specify file manually
      { code: 'en', name: 'English', file: 'en.yaml' },
      { code: 'zh-CN', name: '简体中文', file: 'zh-CN.yaml' },
      { code: 'zh-TW', name: '繁體中文', file: 'zh-TW.yaml' },
    ],
    // NOTE: I18n will detect the browser language by default
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      cookieKey: 'locale',
    },
  },

  /* ----------------------------- Resources Modules ---------------------------- */

  scripts: {
    // Example to load third party script globally
    globals: {
      jsConfetti: ['https://cdn.jsdelivr.net/npm/js-confetti@0.12.0/dist/js-confetti.browser.js', {
        bundle: true,
        trigger: 'onNuxtReady',
      }],
    },

    registry: {
      // Load id from runtime config
      googleTagManager: true,
    },
  },

  /* ------------------------------- SEO Modules ------------------------------ */

  // Default sitemap setting
  // For futher usage, please refer to https://nuxtseo.com/docs/sitemap/guides/loc-data
  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
    },
  },

  ogImage: {
    enabled: false,
  },

  schemaOrg: {
    // Basic example
    identity: defineOrganization({
      name: 'TechCorp Solutions',
      logo: '/logo.png',
    }),
  },

  /* ---------------------------- Component Modules --------------------------- */

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

  /* ------------------------------- DX Modules ------------------------------- */

  eslint: {
    config: {
      // By default, `@nuxt/eslint` will install the JS, TS and Vue plugins with their recommended rules,
      // Which may override your config preset. Setting `standalone` option to `false` will disable this behavior.
      // See https://eslint.nuxt.com/packages/module#custom-config-presets for more information.
      standalone: false,
    },
  },
})
