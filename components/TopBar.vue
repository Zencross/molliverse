<template>
  <div class="flex items-center justify-between w-full py-4 bg-white shadow-md">
    <img
      v-if="close"
      class="w-6 h-6 ml-4"
      src="/img/close-24px.svg"
      alt="close"
      @click="onClickButton"
    />
    <img
      v-if="back"
      class="w-6 h-6 ml-4"
      src="/img/arrow-back-24px.svg"
      alt="close"
      @click="onClickButton"
    />
    <img
      v-if="person"
      class="w-5 h-5 ml-4"
      src="/img/person.svg"
      alt="person"
      @click="onClickButton"
    />
    <!-- <img src="/img/top-bar-logo.svg" class="h-6" alt="" /> -->
    <img src="/img/mollie-color.png" class="h-8 mt-1" alt="" />
    <div
      v-if="skip"
      class="pt-1 pr-4 montserrat-font"
      @click="onClickSkipButton"
    >
      SKIP
    </div>
    <img
      v-if="messager"
      class="w-6 h-6 mr-4"
      src="/img/messager.svg"
      alt="messager"
      @click="onClickMessager"
    />
    <div v-if="!skip && !messager" class="w-6 h-6 mr-4"></div>
  </div>
</template>

<script>
export default {
  props: {
    close: Boolean,
    back: Boolean,
    person: Boolean,
    skip: Boolean,
    messager: Boolean,
    rhsNothing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    onClickButton() {
      console.log("click btn");
      this.$emit("click");
    },
    onClickSkipButton() {
      this.$emit("skip");
    },
    onClickMessager() {
      this.$emit("clickMessager");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.montserrat-font {
  font-family: "Montserrat", sans-serif;
}
</style>
