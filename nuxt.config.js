export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Svelte Guides',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The how tos, whos who and what\'s new in Svelte, Sapper, Routify, Elder.js, and soon Svelte-Kit.abs' },
      // Open Graph
      { hid: 'og:title', property: 'og:title', content: 'Svelte Guides' },
      { hid: 'og:description', property: 'og:description', content: 'The how tos, whos who and what\'s new in Svelte, Sapper, Routify, Elder.js, and soon Svelte-Kit.abs' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: '/icon.png' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Svelte Guides Image from Many Pixels' },
      // Twitter Card
      { hid: 'twitter:title', name: 'twitter:title', content: 'Svelte Guides' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'The how tos, whos who and what\'s new in Svelte, Sapper, Routify, Elder.js, and soon Svelte-Kit.abs' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/icon.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'icons/favicon-32x32.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
