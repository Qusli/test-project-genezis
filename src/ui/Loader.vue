<script setup lang="ts">

</script>

<template>
    <div class="loader"></div>
</template>

<style scoped lang="scss">
  .loader {
    width: 23px;
    height: 23px;
    border: 3px solid white;
    border-radius: 100%;
    border-bottom-color: transparent;
    animation: rotation  1s linear infinite;
  }

  @keyframes rotation  {
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
</style>