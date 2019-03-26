const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/common.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~/plugins/axios.js",
      ssr: true
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true,
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    // 代理
    '/api/': {
      target: 'http://m.zhizuobiao.com/api',
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['axios'],
    extend(config, ctx) {
    }
  }
}
