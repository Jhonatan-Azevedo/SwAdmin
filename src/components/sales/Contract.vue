<template>
  <section>
    <h3>Contratos</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">LEAD</th>
          <th scope="col">SERVIÇO</th>
          <th scope="col">DATA INÍCIO</th>
          <th scope="col">DATA FINAL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dataItem in data" :key="dataItem.id">
          <td>{{ dataItem.id }}</td>
          <td>{{ dataItem.lead.name }}</td>
          <td>{{ dataItem.service.service }}</td>
          <td>{{ dataItem.init_date }}</td>
          <td>{{ dataItem.end_date }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin.js";

export default {
  name: "Contracts",

  mixins: [ApiMixin],
  created() {
    this.getDataApi(
      "http://localhost:3000/contracts?_expand=lead&_expand=service"
    );
  },
};
</script>