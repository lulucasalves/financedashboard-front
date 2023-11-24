<template>
  <div class="donnut">
    <p class="title">5 best-selling products</p>
    <div><Doughnut :data="data" :options="options" /></div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "DonnutContent",
  components: {
    Doughnut,
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 0,
        borderWidth: 0,
      },
      data: {
        labels: [
          "Enchanted Mirror",
          "Timeless Pocket Watch",
          "Starry Night Blanket",
          "Dream Catcher Kit",
          "Black Box",
        ],
        datasets: [
          {
            backgroundColor: [
              "#0F4C81",
              "#FF6F61",
              "#939597",
              "#955251",
              "#88B04B",
            ],
            data: [22, 33, 24, 27, 32],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.donnut {
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  width: 40%;
  border-radius: 16px;
}

.title {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
}
</style>
