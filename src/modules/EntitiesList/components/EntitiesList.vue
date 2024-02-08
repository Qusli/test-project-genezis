<script setup lang="ts">
import {Entity} from "@/components/EntitiesList";
import {useEntitiesStore} from "@/store/Entitites";
let storeEntities = useEntitiesStore();
/* Добавление контактов, сделок и команий */
storeEntities.getAllEntities();
</script>

<template>
  <ul class="entities-list">
    <Entity
        v-for="item in storeEntities.$state.entities"
        :key="item.id"
        :item="item"
    />
  </ul>
</template>

<style scoped lang="scss">
.entities-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 50px;
}
</style>