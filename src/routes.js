import TemplateComponent from "./components/Template.vue";

const routes = [
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
];

export default routes;
