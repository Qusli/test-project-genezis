<script setup lang="ts">
import {DropDownEntity} from "@/type/DropDownEntity";
import {ref} from "vue";
/* props */
let props = defineProps<{
  items: Array<DropDownEntity>
  value: string
}>();
/* emit */
let emit = defineEmits(["update:value"]);
/* state */
let open = ref(false);
function selected(index: number) {
  emit("update:value", props.items[index].value)
  let start = props.items[0];
  props.items[0] = props.items[index];
  props.items[index] = start;
}
</script>

<template>
  <div class="dropdown" >
    <ul
        :class="open ? 'dropdown-list open' : 'dropdown-list'"
        @click="open ? open = false : open = true"
    >
      <li
          v-for="(item, index) in items"
          :key="index"
          @click="index == 0 ? null : selected(index)"
          class="dropdown-list-item"
      >{{item.title}}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  width: 430px;
  height: 45px;
  position: relative;
  display: flex;
  align-self: center;
  justify-content: space-between;

  &-list {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    border-radius: 10px;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: rgb(0, 0, 0, 0.25) 0 1px 4px 1px;
    background-color: white;
    transition: height .3s;

    &-item {
      cursor: pointer;
      padding-left: 18px;
      padding-right: 18px;
      transition: background-color .3s;

      &:not(:nth-child(1)):hover {
        background-color: #b4b4b4;
      }

      &:not(:nth-child(1)) {
        padding-top: 4px;
        padding-bottom: 4px;
      }
    }

    &.open {
      height: auto;
    }
  }

  &::after {
    content: url("../assets/svg/arrow.svg");
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    margin-right: 18px;
    pointer-events: none;
  }

}
</style>