<template>
  <div
    class="flex flex-col items-center w-11/12 p-4 bg-white border-2 border-black rounded-2xl"
  >
    <img src="/img/insufficient-coin-512w.png" alt="" />
    <h1 class="text-2xl font-bold">Not enough $POP!</h1>
    <div class="w-10/12 mt-2 text-center">
      You don't have sufficient $POP tokens to make this transaction.
    </div>
    <div class="flex items-center w-11/12 mt-6 justify-evenly">
      <button
        class="w-5/12 px-4 py-4 text-black bg-gray-300 rounded-lg"
        @click="onClickBack"
      >
        Back
      </button>
      <button
        class="w-5/12 px-4 py-4 text-white bg-black rounded-lg"
        @click="onClickGoToWallet"
      >
        Go to Wallet
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickBack() {
      this.$emit("back");
      console.log("emit back");
    },
    onClickGoToWallet() {
      this.$emit("goToWallet");
      console.log("emit goToWallet");
    }
  }
};
</script>

<style></style>
