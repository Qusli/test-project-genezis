<script setup lang="ts">

</script>

<template>
  <div class="success">
    <div class="success-modal">
      <h1>Успешно создано</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "color";

.success {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;

  &-modal {
    border: 2px solid color.$success;
    border-radius: 10px;
    padding: 20px 32px;
    background-color: white;
    margin-top: 20px;

    h1 {
      font-family: "Open Sans", sans-serif;
      font-size: 24px;
      font-weight: 500;
      color: color.$success;
    }
  }
}
</style>