<template>
  <VApp :theme="theme">
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>

<script lang="ts">
import Template from "@/components/Template.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["theme"]),
  },
  components: { Template },
};
</script>
