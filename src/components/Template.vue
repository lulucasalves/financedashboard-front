<template>
  <div class="container">
    <NavDiv />
    <Content />
  </div>
</template>

<script>
import NavDiv from "./Nav/NavDiv.vue";
import Content from "./Content/Content.vue";

export default {
  name: "TemplateComponent",
  components: { NavDiv, Content },
};
</script>

<style scoped>
.container {
  display: flex;
  overflow: hidden;
  max-height: 100vh;
}
</style>
