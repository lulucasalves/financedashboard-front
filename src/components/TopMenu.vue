<template>
  <VAppBar>
    <VAppBarNavTitle class="w-100 app-bar d-flex align-center">
      <VBtn class="button-menu" icon>
        <VIcon>mdi-menu</VIcon>
      </VBtn>
      <p class="title">Dashboard</p>
      <p>test</p>
    </VAppBarNavTitle>
  </VAppBar>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["theme"]),
  },
  methods: {
    ...mapActions(["changeTheme"]),
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      this.changeTheme(newTheme); // Chama a ação "count" definida no store
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/TopMenu.scss";
</style>
