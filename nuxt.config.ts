import { existsSync, readFileSync } from "fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components/UI/', '~/components'],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      link: [
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', rel: 'stylesheet', integrity:"sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==", referrerpolicy: 'no-referrer', crossorigin:'anonymous' }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    vue: {
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    },
  },
})
