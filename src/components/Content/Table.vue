<template>
  <div class="table">
    <p class="title">Últimas vendas</p>
    <table cellspacing="0">
      <thead>
        <tr>
          <th>Id</th>
          <th>Client</th>
          <th>Product</th>
          <th>Shipping</th>
          <th>Price</th>
          <th>Date</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="content of contents" :key="content.id">
          <td>{{ content.id }}</td>
          <td>{{ content.client }}</td>
          <td :title="content.product">
            {{
              content.product.length > 15
                ? `${content.product.slice(0, 15)}...`
                : content.product
            }}
          </td>
          <td>{{ content.shipping }}</td>
          <td>{{ content.price }}</td>
          <td>{{ content.date }}</td>
          <td>{{ content.review }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  data: () => {
    return {
      contents: [
        {
          id: "#0002",
          client: "Gabriela Silva",
          product: "Enchanted Mirror",
          shipping: "R$ 12,50",
          price: "R$ 99.90",
          date: "25/11/2023",
          review: "4.5 Stars",
        },
        {
          id: "#0003",
          client: "Ricardo Santos",
          product: "Whispering Wind Chimes",
          shipping: "R$ 8,20",
          price: "R$ 79.99",
          date: "26/11/2023",
          review: "4 Stars",
        },
        {
          id: "#0004",
          client: "Isabela Oliveira",
          product: "Eternal Sunshine Lamp",
          shipping: "R$ 15.00",
          price: "R$ 129.99",
          date: "27/11/2023",
          review: "4.8 Stars",
        },
        {
          id: "#0005",
          client: "Lucas Pereira",
          product: "Black Box",
          shipping: "R$ 10.75",
          price: "R$ 89.99",
          date: "28/11/2023",
          review: "4.2 Stars",
        },
        {
          id: "#0006",
          client: "Carolina Lima",
          product: "Dream Catcher Kit",
          shipping: "R$ 14.20",
          price: "R$ 119.99",
          date: "29/11/2023",
          review: "4.7 Stars",
        },
        {
          id: "#0007",
          client: "Fernando Oliveira",
          product: "Timeless Pocket Watch",
          shipping: "R$ 11.50",
          price: "R$ 99.50",
          date: "30/11/2023",
          review: "4.9 Stars",
        },
        {
          id: "#0008",
          client: "Amanda Costa",
          product: "Enchanted Forest Puzzle",
          shipping: "R$ 9.80",
          price: "R$ 69.99",
          date: "01/12/2023",
          review: "4.3 Stars",
        },
        {
          id: "#0009",
          client: "Raphael Santos",
          product: "Crystal Clear Water Bottle",
          shipping: "R$ 7.90",
          price: "R$ 49.99",
          date: "02/12/2023",
          review: "4.6 Stars",
        },
        {
          id: "#0010",
          client: "Mariana Silva",
          product: "Starry Night Blanket",
          shipping: "R$ 13.40",
          price: "R$ 109.99",
          date: "03/12/2023",
          review: "4.4 Stars",
        },
      ],
    };
  },
};
</script>

<style scoped>
.table {
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin-top: 30px;
}

table {
  width: 100%;
}

thead th {
  width: 14.28%;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

tbody td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

tbody tr:last-child td {
  border: none;
}

.title {
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
