// // https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";

// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true },
//   css: [
//     '~/assets/css/main.css'
//   ],
//   plugins: ["~/plugins/vue-particles.client.js"],
//   vite: {
//     plugins: [
//       tailwindcss(),
//     ],
//     css: {
//       preprocessorOptions: {
//         scss: {
//           additionalData: `@import '~/assets/css/variables.scss';` // This will globally inject the SCSS variables
//         }
//       }
//     }
//   },
  
  
// })

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  plugins: ["~/plugins/vue-particles.client.js",
    "~/plugins/fontawesome.js"
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '~/assets/css/variables.scss';` // This will globally inject the SCSS variables
        }
      }
    }
  },

});

