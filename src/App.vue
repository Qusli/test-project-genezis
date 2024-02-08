<script setup lang="ts">
import MainTop from "@/modules/MainTop";
import EntitiesList from "@/modules/EntitiesList";
</script>

<template>
<main class="main">
  <section class="container">
    <MainTop />
    <EntitiesList />
  </section>
</main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;

  .container {
    width: 1170px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:50px;
    padding-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
