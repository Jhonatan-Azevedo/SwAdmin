<template>
  <section>
    <div class="row">
      <h5 class="col-11">{{ data.id }} - {{ data.name }}</h5>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input type="text" class="form-control-plaintext" :value="data.id" />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Nome</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="data.name" />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Telefone</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="data.phoneNumber" />
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-orange">Atualizar</button>
      </div>
      <div class="col-6 text-end">
        <button class="btn btn-secondary" @click="voltar()">
          <i class="bi bi-arrow-left"></i> Voltar
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin.js";
export default {
  name: "Lead",

  mixins: [ApiMixin],
  created() {
    this.getDataApi(`http://localhost:3000/leads/${this.$route.params.id}`);
  },

  methods: {
    voltar() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>