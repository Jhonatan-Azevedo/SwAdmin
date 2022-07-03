<template>
  <section>
    <router-view />
  </section>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.btn-orange {
  background-color: orange !important;
  border-color: orange !important;
  color: #fff !important;
  font-weight: 600;
  transition: 0.2s;
}

.btn-orange:hover {
  opacity: 0.7;
}

.btn-outline-orange {
  background-color: #fff;
  border-color: orange;
  color: orange;
  font-weight: 600;
  transition: 0.2s;
}

.btn-outline-orange:hover {
  background-color: orange;
  color: #fff;
}

.text-orange {
  color: orange !important;
}
</style>
