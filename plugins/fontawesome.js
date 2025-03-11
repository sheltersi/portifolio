import { library } from "@fortawesome/fontawesome-svg-core";
// Import required icons
import { faGithub, faLinkedin, faSquareXTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineNuxtPlugin((nuxtApp) => {
  // Add icons to library
library.add(faGithub, faXTwitter, faLinkedin, faEnvelope, faSquareXTwitter);

  console.log("Fontawesome.js plugin loaded! ✅"); // Debugging log
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
