/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
// Import our custom CSS

import { registerPlugins } from "@/plugins";
import commonmixins from "./Mixins/commonmixins";

import "@/styles/settings.scss";
import "@/assets/scss/sidebar.scss";
import "@/assets/scss/admin.scss";
import "@/assets/scss/footer.scss";
import "@/assets/scss/header.scss";

import "@/assets/scss/global_styles.scss";
import "@/assets/scss/request.scss";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

app.mixin(commonmixins);

registerPlugins(app);

app.mount("#app");
