<template>
  <div class="absolute bottom-0 w-full bg-white shadow-2xl rounded-t-xl">
    <!-- Question -->
    <div class="flex items-center justify-center px-6 pt-8 pb-4">
      <p class="text-center montserrat-font">
        Looks like you guys want to play a game :)<br />
        Here are some good suggestions!
      </p>
    </div>

    <!-- Button Groups -->
    <div class="flex flex-col w-full">
      <div class="flex w-full justify-evenly">
        <button
          class="w-1/2 h-16 mx-4 mt-4 mb-2 text-white rounded-xl bg-brandPurple"
        >
          Would you rather?
        </button>
        <button
          @click="onClickGame('Never have I ever')"
          class="w-1/2 h-16 mx-4 mt-4 mb-2 text-white rounded-xl bg-modalBtnOrange"
        >
          Never have I ever
        </button>
      </div>
      <div class="flex w-full justify-evenly">
        <button
          class="w-1/2 h-16 mx-4 mt-4 mb-2 text-white rounded-xl bg-modalBtnGreen"
        >
          Two truths & one lie
        </button>
        <button
          class="w-1/2 h-16 mx-4 mt-4 mb-2 text-white rounded-xl bg-modalBtnBlue"
        >
          20 Questions
        </button>
      </div>
    </div>

    <!-- No Thanks -->
    <div
      @click="onClickNoThanks"
      class="mx-4 mt-4 mb-6 text-center text-gray-600 underline"
    >
      No thanks
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showGameModal: true
    };
  },
  methods: {
    onClickNoThanks() {
      this.$emit("close-modal");
    },
    onClickGame(game) {
      this.showGameModal = false;
      this.$emit("start-game", game);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.montserrat-font {
  font-family: "Montserrat", sans-serif;
}

.box-shadow:after {
  content: "";
  position: absolute;
  width: 100%;
  bottom: 1px;
  z-index: -1;
  transform: scale(0.9);
  box-shadow: 9px 0px 0px 0px #000000;
}
</style>
