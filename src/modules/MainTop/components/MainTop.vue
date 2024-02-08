<script setup lang="ts">
import Button from "@/ui/Button.vue";
import DropDown from "@/ui/DropDown.vue";
import {useDropDownStore} from "@/store/DropDownEntity";
import {useButtonStore} from "@/store/Button";
import {Ref, ref} from "vue";
import {useEntitiesStore} from "@/store/Entitites";
import SuccessModal from "@/ui/SuccessModal.vue";
import ErrorModal from "@/ui/ErrorModal.vue";
let storeDropDown = useDropDownStore();
let storeButton = useButtonStore();
let storeEntities = useEntitiesStore();
let value: Ref<string> = ref(storeDropDown.$state.dropDownEntities[0].value);
</script>

<template>
  <article class="main-top">
    <div class="main-top-left">
      <DropDown
          :items="storeDropDown.$state.dropDownEntities"
          v-model:value="value"
      />
      <Button
          :disabled="value === 'none' || storeButton.$state.load"
          :load="storeButton.$state.load"
          @click="storeEntities.createEntity(value)"
      >Создать</Button>
    </div>
  </article>
  <success-modal v-if="storeEntities.$state.success" />
  <error-modal v-if="storeEntities.$state.error" />
</template>

<style scoped lang="scss">
.main-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-left {
    display: flex;
    align-items: center;
    gap: 22px;
  }
}
</style>