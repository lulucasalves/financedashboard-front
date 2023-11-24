<template>
  <div class="content">
    <h1 class="title">Dashboard</h1>
    <Cards />
    <Graphs />
    <Table />
  </div>
</template>

<script>
import Cards from "./Cards.vue";
import Graphs from "./Graphs.vue";
import Table from "./Table.vue";

export default {
  name: "ContentComponent",
  components: { Cards, Graphs, Table },
};
</script>

<style scoped>
.content {
  width: 100%;
  padding: 40px;
  overflow: scroll;
  flex-grow: 1;
}

.title {
  font-size: 28px;
}
</style>
