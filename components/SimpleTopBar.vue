<template>
  <div
    class="flex items-center justify-between w-full py-4 shadow-md select-none disable-dbl-tap-zoom"
    :class="[darkMode ? 'bg-black text-white' : 'bg-white text-black']"
  >
    <img
      v-if="darkMode"
      class="w-6 h-6 ml-4 disable-dbl-tap-zoom"
      src="/img/back-arrow-tilted-white.svg"
      alt="close"
      @click="onClickBackButton"
    />
    <img
      v-if="!darkMode"
      class="w-6 h-6 ml-4 disable-dbl-tap-zoom"
      src="/img/back-arrow-tilted.svg"
      alt="close"
      @click="onClickBackButton"
    />
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <div class="w-6 h-6"></div>
  </div>
</template>

<script>
export default {
  props: { title: String, backLink: String, darkMode: Boolean },
  data() {
    return {};
  },
  methods: {
    onClickBackButton() {
      this.$router.push(this.backLink);
    }
  }
};
</script>

<style></style>
