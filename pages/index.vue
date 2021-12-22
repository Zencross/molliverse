<template>
  <div class="-mt-8">
    <splash2 />
  </div>
</template>

<script>
import Splash2 from "../components/Splash2";

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 300ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
