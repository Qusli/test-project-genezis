<script setup lang="ts">
import Loader from "@/ui/Loader.vue";
import {Button} from "@/type/Button";
/* props */
withDefaults(defineProps<Button>(), {
  load: false
});
</script>

<template>
<button type="button" :class="load ? 'load' : ''" >
    <slot v-if="!load"></slot>
    <Loader v-else-if="load"/>
</button>
</template>

<style scoped lang="scss">
@use "color";

button {
  padding: 10px 28px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
  background-color: color.$primary;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: all .3s;
  cursor: pointer;

  &:hover:enabled {
    color: color.$primary;
    background-color: transparent;
    border: 2px solid color.$primary;
  }

  &:disabled {
    color: #424242;
    background-color: #B4B4B4;
    cursor: not-allowed;
  }

  &.load:hover,
  &.load:disabled {
    color: white;
    background-color: color.$primary;
    border: 2px solid transparent;
  }
}
</style>