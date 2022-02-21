<template>
  <div
    id="sticky-buy-bar"
    class="fixed inset-x-0 bottom-0 flex justify-center w-full py-4 bg-white"
  >
    <button
      class="w-10/12 py-4 text-white bg-black rounded-md"
      @click="onClickButton"
      :class="[
        validation == true && validationState != true
          ? 'opacity-50'
          : 'opacity-100'
      ]"
    >
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    forwardLink: String,
    validation: { type: Boolean, default: false },
    validationState: Boolean
  },
  data() {
    return {};
  },
  methods: {
    onClickButton() {
      //   this.$router.push(this.forwardLink);
      this.$emit("buttonClick");
    }
  }
};
</script>

<style>
#sticky-buy-bar {
  box-shadow: 0 -4px 4px -2px rgb(0 0 0 / 0.1), 0 -2px 6px -1px rgb(0 0 0 / 0.1);
}
</style>
