<template>
  <div :class="{ 'nav-item': true, active: active, activeMenu: !activeMenu }">
    <VIcon>{{ link.icon }}</VIcon>
    <p v-if="activeMenu" class="nav-item-p">{{ link.name }}</p>
  </div>
</template>

<script>
import { toRaw } from "vue";

export default {
  name: "NavItems",
  data: () => {
    return { active: false };
  },
  props: ["link", "activeMenu"],
  watch: {
    $route() {
      this.changeUrl();
    },
  },
  mounted() {
    this.changeUrl();
  },
  methods: {
    changeUrl() {
      const path = toRaw(this.link).path;
      const location = window.location.pathname;

      this.active = false;

      if (location === path) this.active = true;
    },
  },
};
</script>

<style scoped>
.nav-item {
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  padding: 15px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  transition: 0.3s;
}

.nav-item i {
  margin-top: -1px;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.active {
  transition: 0.3s;
  background: rgba(255, 255, 255, 0.1);
}

.activeMenu {
  transition: 0.3s;
  padding: 10px;
  width: fit-content;
}

.activeMenu i {
  transition: 0.3s;
  font-size: 28px;
}
</style>
