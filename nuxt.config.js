export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Boilerplate',
    titleTemplate: '%s - Nuxt Js',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/global'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#styleresources
    '@nuxtjs/style-resources',
    // [Optional]: https://www.npmjs.com/package/@nuxtjs/fontawesome
    '@nuxtjs/fontawesome',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
  ],

  // Tailwind configuration: https://tailwindcss.nuxtjs.org/setup/
  tailwindcss: {
    exposeConfig: false,
    viewer: false,
    config: {},
  },

  // Style Resource module configuration
  styleResources: {
    scss: ['./assets/scss/vars/*.scss', './assets/scss/abstracts/_mixins.scss'],
  },

  // Fontawesome module configuration
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faHome', 'faHeart'],
    },
  },

  // OptimizedImages module configuration
  optimizedImages: {
    optimizeImages: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://www.npmjs.com/package/nuxt-helmet
    'nuxt-helmet',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Web Font Loader module configuration
  webfontloader: {
    google: {
      families: [
        'Quicksand:300,400,600,700',
        'Fredoka One:400',
        'Baloo Chettan 2:500,600,700',
      ],
    },
  },

  // Sitemap module configuration
  sitemap: {
    hostname: `${process.env.APP_URL}`,
    gzip: true,
  },

  // Robots module configuration
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },

  // Helmet module configuration
  helmet: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Telemetry configuration: https://github.com/nuxt/telemetry
  telemetry: false,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-server
  server: {
    host: `${process.env.SERVER_HOST}`, // default: localhost
    port: process.env.SERVER_PORT, // default: 3000
    timing: false,
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-cli
  cli: {
    badgeMessages: [`Application running on ${process.env.APP_MODE}`],
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config/
  publicRuntimeConfig: {
    appURL: `${process.env.APP_URL}`,
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config/
  privateRuntimeConfig: {
    axios: {
      https: `${process.env.NODE_ENV}` !== 'development',
      baseURL: `${process.env.API_URL}`,
    },
  },

  // Modifying the loading indicator for spa  - https://nuxtjs.org/docs/2.x/features/loading
  loadingIndicator: {
    name: 'chasing-dots',
    color: '#158876',
    background: '#f3f5f4',
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-transition#the-layouttransition-property
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-transition#the-layouttransition-property
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
}
