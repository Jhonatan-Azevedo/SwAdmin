<template>
  <section class="card">
    <div class="card-header bg-orange text-white">
      {{ data.service }}
    </div>

    <div class="card-body">
      <p class="card-text">{{ data.description }}</p>
    </div>
  </section>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin.js";
export default {
  name: "Service",

  mixins: [ApiMixin],
  created() {
    this.getDataApi(`http://localhost:3000/services/${this.$route.params.id}`);
  },

  beforeRouteUpdate(to, from, next) {
    if (to.params.id != undefined)
      this.getDataApi(`http://localhost:3000/services/${to.params.id}`);

    next();
  },
};
</script>

<style lang="scss" scoped>
</style>