import { defineNuxtPlugin } from '#app';
import Particles from "vue3-particles";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Particles.js plugin loaded! ✅"); // Debugging log
  nuxtApp.vueApp.use(Particles);
});