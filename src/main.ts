import { registerPlugins } from "@/plugins";

import { createApp } from "vue";
import { store } from "@/store/vuex";
import router from "@/plugins/routes";

import App from "./App.vue";

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(store);
app.mount("#app");
