<template>
  <TopMenu />
  <slot />
</template>

<script lang="ts">
import TopMenu from "./TopMenu.vue";

export default {
  components: { TopMenu },
};
</script>
