import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createRouter, createWebHistory } from "vue-router";
import TemplateComponent from "./components/Template.vue";

loadFonts();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      icon: "mdi-chart-line-variant",
      component: TemplateComponent,
    },
    {
      path: "/sales",
      name: "Sales",
      icon: "mdi-shopping",
      component: TemplateComponent,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: "mdi-file-document",
      component: TemplateComponent,
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: "mdi-bell-ring",
      component: TemplateComponent,
    },
    {
      path: "/statistics",
      name: "Statistics",
      icon: "mdi-chart-pie",
      component: TemplateComponent,
    },
  ],
});

createApp(App).use(vuetify).use(router).mount("#app");
