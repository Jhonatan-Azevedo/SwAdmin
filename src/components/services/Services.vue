<template>
  <section>
    <h3>Serviços</h3>
    <hr />
    <div class="row">
      <div class="col" v-for="service in data" :key="service.id">
        <div class="card" style="width: 11rem">
          <img class="card-img-top" :src="`/img/${service.icon}`" alt="" />
          <div class="card-body text-center">
            <p class="card-text">
              {{ service.service }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin.js";

export default {
  name: "Services",

  mixins: [ApiMixin],
  created() {
    this.getDataApi("http://localhost:3000/services");
  },
};
</script>