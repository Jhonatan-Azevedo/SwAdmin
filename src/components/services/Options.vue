<template>
  <section>
    <h5>Opções</h5>
    <p>Recuperando opções {{ id }}</p>
  </section>
</template>

<script>
export default {
  name: "Options",
  props: ["id"],
};
</script>

<style>
section {
  height: auto !important;
}
</style>
