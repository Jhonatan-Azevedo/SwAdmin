<template>
  <section class="w-100 h-100 bg-light">
    <div class="container text-end bg-light p-2">
      <button
        type="button"
        class="btn text-secondary mx-2"
        @click="$router.push('/home')"
      >
        <i class="bi bi-arrow-left"></i> Voltar
      </button>
    </div>
    <div
      class="h-100 d-flex justify-content-center align-items-center bg-white"
    >
      <h5>Página não encontrada :(</h5>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
section {
  height: 100vh;
  overflow: hidden;
}
</style>