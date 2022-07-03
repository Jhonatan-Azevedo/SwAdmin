<template>
  <section>
    <h3>Leads</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NOME</th>
          <th scope="col">TELEFONE</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dataItem in data" :key="dataItem.id">
          <td>{{ dataItem.id }}</td>
          <td>{{ dataItem.name }}</td>
          <td>{{ dataItem.phoneNumber }}</td>
          <td>
            <router-link
              :to="`leads/${dataItem.id}`"
              class="btn btn-sm btn-orange"
            >
              <i class="bi bi-pencil-square" style="cursor: pointer"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin.js";

export default {
  name: "Leads",

  mixins: [ApiMixin],
  created() {
    this.getDataApi("http://localhost:3000/leads");
  },
};
</script>