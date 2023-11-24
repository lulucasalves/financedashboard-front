<template>
  <div class="graphs">
    <DonnutContent />
    <BarContent />
  </div>
</template>

<script>
import DonnutContent from "./ChartDonnut.vue";
import BarContent from "./ChartBar.vue";
export default {
  name: "GraphContent",
  components: { DonnutContent, BarContent },
};
</script>

<style scoped>
.graphs {
  margin-top: 50px;
  display: flex;
  gap: 30px;
}
</style>
