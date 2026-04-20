export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: 'Design System — Sygecom',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;600&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/primeicons@7.0.0/primeicons.css',
        },
      ],
    },
  },

  css: [
    '~/assets/css/global.css',
  ],

  typescript: {
    strict: true,
  },

  compatibilityDate: '2024-11-01',
})
