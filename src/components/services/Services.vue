<template>
  <section>
    <h3>Serviços</h3>
    <hr />
    <div class="row">
      <div class="col mb-2" v-for="service in data" :key="service.id">
        <div class="card" style="width: 11rem">
          <img class="card-img-top" :src="`/img/${service.icon}`" alt="" />
          <div class="card-body text-center">
            <router-link :to="{ name: 'service', params: { id: service.id } }">
              <p class="card-text">
                {{ service.service }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <router-view class="mt-3"></router-view>
    <router-view class="mt-3" name="options"></router-view>
    <router-view class="mt-3" name="indicators"></router-view>
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