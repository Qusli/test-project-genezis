<script setup lang="ts">
import {Entity} from "@/type/Entity";
defineProps<{
  item: Entity
}>();
</script>

<template>
  <li class="entity">
    <header class="entity-header">
      <p class="entity-header-id">{{item.id}}</p>
      <h1 class="entity-header-title">{{item.name}}</h1>
    </header>
    <p class="entity-type">{{item.type}}</p>
  </li>
</template>

<style scoped lang="scss">
@use "color";

.entity {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 32px;
  box-shadow: rgb(0, 0, 0, 0.25) 0 1px 4px 1px;
  border-radius: 10px;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: rgb(1, 153, 214, 0.5) 0 1px 4px 1px;
  }

  h1, p {
    font-family: "Open Sans", sans-serif;
    cursor: default;
  }

  h1 {
    font-weight: 500;
    font-size: 22px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
  }

  &-header {
    display: flex;
    align-items: center;
    gap: 30px;
  }
}
</style>