<template>
  <v-app theme="dark">
    <v-main>
      <TemplateComponent />
    </v-main>
  </v-app>
</template>

<script>
import TemplateComponent from "./components/Template.vue";

export default {
  name: "App",

  components: {
    TemplateComponent,
  },

  data: () => ({
    //
  }),
};
</script>
