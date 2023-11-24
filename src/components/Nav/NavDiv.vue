<template>
  <div class="navigationDrawer" style="width: fit-content">
    <div :class="{ active: active, 'side-menu': true }">
      <div @click="setActive" class="menu-state">
        <VIcon>mdi-chevron-{{ active ? "left" : "right" }}</VIcon>
      </div>
      <h1 v-if="active" class="title">Finances</h1>
      <div :class="{ 'nav-items': true, 'active-items': !active }">
        <NavItems :active="active" />
      </div>
    </div>
  </div>
</template>

<script>
import NavItems from "./NavItems.vue";

export default {
  name: "NavDiv",
  data: () => {
    return {
      active: true,
    };
  },
  components: { NavItems },
  methods: {
    setActive() {
      this.active = this.active === true ? false : true;
    },
  },
};
</script>

<style scoped>
.navigationDrawer {
  height: 100vh;
  background: rgba(255, 255, 255, 0.01);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}
.side-menu {
  position: relative;
  padding: 20px;
  padding-top: 70px;
  width: 100px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.active {
  transition: 0.3s;
  width: 250px;
  display: block;
}

.menu-state {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  padding: 5px;
  border-radius: 100px;
  transition: 0.3s;
}

.menu-state:hover {
  background: rgba(255, 255, 255, 0.1);
}
.title {
  font-size: 24px;
  cursor: default;
}

.nav-items {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.3s;
}

.active-items {
  transition: 0.3s;
  gap: 20px;
}
</style>
