import path from "path";
import fs from "fs";

export default {
  server: {
    host: "0.0.0.0",
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "server.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "server.crt"))
    }
  },
  ssr: false,
  publicRuntimeConfig: {
    imageUploadAPI: process.env.IMAGE_UPLOAD_API,
    videoUploadAPI: process.env.VIDEO_UPLOAD_API
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Mollie",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "/lib/deepar.js", defer: true }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css",
    "~/assets/css/styles.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["nuxt-user-agent", "@nuxtjs/apollo", "@nuxtjs/axios"],

  apollo: {
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      query: {
        loadingKey: "loading",
        fetchPolicy: "network-only"
      },
      $query: {
        loadingKey: "loading",
        fetchPolicy: "network-only"
      }
    },
    clientConfigs: {
      default: {
        httpEndpoint: process.env.API_URL || "http://localhost:8080/graphql"
      }
    }
  },

  axios: {
    // proxy: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
