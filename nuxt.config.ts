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
    '@element-plus/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-echarts',
    'nuxt-gtag',
    'nuxt-qrcode',
    'nuxt-svgo',
    'nuxt-swiper',
    'nuxt-typed-router',
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

  image: {
    // To enable image optimization on an external website, specify which domains are allowed to be optimized.
    // See https://image.nuxt.com/get-started/configuration#domains for more information.
    domains: [
      'https://www.ipipgo.com',
    ],
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
    classSuffix: '',
  },

  vite: {
    build: {
      target: 'es2015',
    },
  },
})
