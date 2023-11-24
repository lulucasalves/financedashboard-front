<template>
  <div
    @click="navigate(link.path)"
    class="nav-item"
    v-for="link in links"
    :key="link.name"
  >
    <NavItem :link="link" :activeMenu="active" />
  </div>
</template>

<script>
import links from "../../routes";
import NavItem from "./NavItem.vue";

export default {
  props: ["active"],
  name: "NavItems",
  data: () => ({
    links,
  }),
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
  components: { NavItem },
};
</script>

<style scoped></style>
