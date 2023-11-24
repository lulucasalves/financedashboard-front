<template>
  <div class="donnut">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "BarContent",
  components: {
    Bar,
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Number of Sales",
            backgroundColor: "#039BE5",
            data: [40, 20, 12, 39, 10, 40, 39, 62, 40, 20, 12, 11],
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
  width: 60%;
  border-radius: 16px;
}
</style>
