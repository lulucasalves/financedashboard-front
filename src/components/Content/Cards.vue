<template>
  <div class="cards">
    <div v-for="content of contents" :key="content.icon" class="card">
      <p class="title">{{ content.title }}</p>
      <div class="value-div">
        <VIcon>{{ content.icon }}</VIcon>
        <p class="value">{{ content.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsComponent",
  data: () => {
    return {
      contents: [
        { title: "Profit", value: "R$ 4.392,21", icon: "mdi-cash-multiple" },
        { title: "Expenses", value: "R$ 1.890,54", icon: "mdi-cash-remove" },
        { title: "Clients", value: "170", icon: "mdi-account-supervisor" },
        { title: "Products", value: "34", icon: "mdi-dropbox" },
      ],
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 25%;
  border-right: 1px solid rgba(255,255,255,0.1);
}

.card:last-child{
    border: none;
}

.title {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    opacity: 0.8;
    margin-bottom: 5px;
}

.value-div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.value-div i {
  font-size: 44px;
  margin-top: -2px;
  opacity: 0.9;
}

.value {
    font-size: 26px;
    font-weight: 500;
}
</style>
