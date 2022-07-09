<template>
  <section>
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">ID Contrato:</label>
            <input
              type="text"
              class="form-control"
              v-model="searchForm.id_like"
            />
          </div>
          <div class="col-6">
            <label class="form-label">Data início:</label>
            <div class="input-group">
              <input
                type="date"
                class="form-control"
                v-model="searchForm.init_date_gte"
              />
              <input
                type="date"
                class="form-control"
                v-model="searchForm.end_date_lte"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-orange" @click="searchContract()">
          Pesquisar
        </button>
      </div>
    </div>

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

  data() {
    return {
      paramsURL: "_expand=lead&_expand=service",
      searchForm: {
        id_like: "",
        init_date_gte: "",
        end_date_lte: "",
      },
    };
  },

  mixins: [ApiMixin],
  created() {
    const queryParams = new URLSearchParams(this.$route.query).toString();
    const url = `http://localhost:3000/contracts?${this.paramsURL}&${queryParams}`;
    this.getDataApi(url);
  },

  beforeRouteUpdate(to, from, next) {
    const queryParams = new URLSearchParams(to.query).toString();
    const url = `http://localhost:3000/contracts?${this.paramsURL}&${queryParams}`;
    this.getDataApi(url);

    next();
  },

  methods: {
    searchContract() {
      const queryParams = new URLSearchParams({
        ...this.searchForm,
      }).toString();

      const url = `http://localhost:3000/contracts?${this.paramsURL}&${queryParams}`;

      this.getDataApi(url);
    },
  },
};
</script>