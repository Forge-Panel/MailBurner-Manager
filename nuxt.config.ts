// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: false,

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/test-utils',
    'vuetify-nuxt-module',
    '@vueuse/nuxt'
  ],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo/forge_logo_dark.svg' }
      ]
    }
  },

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      },
      icons: {
        defaultSet: 'unocss-mdi'
      }
    }
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'nl', name: 'Nederlands', file: 'nl.json' },
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  runtimeConfig: {
    public: {
      version: '0.1'
    }
  }
})