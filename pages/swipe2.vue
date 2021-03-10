<template>
  <div class="fixed w-full h-full">
    <Vue2InteractDraggable
      :interact-max-rotation="15"
      :interact-out-of-sight-x-coordinate="800"
      :interact-x-threshold="200"
      :interact-lock-y-axis="true"
      class="flex justify-center mt-20"
    >
      <div class="w-1/2 h-48 bg-red-500"></div>
    </Vue2InteractDraggable>
  </div>
</template>

<script>
import { Vue2InteractDraggable } from "vue2-interact";

export default {
  components: { Vue2InteractDraggable },
  data() {
    return {};
  }
};
</script>

<style></style>
