<template>
  <div class="h-screen">
    <!-- Simple Top Bar -->
    <div
      class="flex items-center justify-between w-full py-4 bg-white shadow-md select-none disable-dbl-tap-zoom"
    >
      <img
        class="w-6 h-6 ml-4 disable-dbl-tap-zoom"
        src="/img/back-arrow-tilted.svg"
        alt="close"
        @click="onClickBackButton"
      />
      <h1 class="text-xl font-bold">Purchase a Reward</h1>
      <div class="w-6 h-6"></div>
    </div>

    <!-- Container -->
    <div class="flex flex-col items-center w-full">
      <!-- Total Earnings Bar -->
      <div
        id="total-earnings-bar"
        class="flex items-center w-11/12 py-4 my-8 rounded-md justify-evenly"
      >
        <div class="text-xl font-thin">
          Total<br />
          Earnings:
        </div>
        <div class="text-4xl font-bold">{{ popEarnings }}</div>
        <div class="flex items-center">
          <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8 mr-1" />
          $POP
        </div>
      </div>

      <!-- Buy Reward Window -->
      <h1 class="mb-2">You are about to purchase the following reward:</h1>
      <div
        class="flex flex-col items-center w-11/12 mb-4 border-2 border-black rounded-md"
      >
        <div class="flex justify-start w-full px-4 pt-5 pb-1">
          <img :src="rewardIcon" class="w-16 h-16" alt="" />
        </div>
        <div class="flex items-center justify-between w-full px-4 pb-3">
          <div class="font-bold">{{ rewardItemName }}</div>
          <div class="px-3 py-1 text-xs bg-gray-400 rounded-2xl">App</div>
        </div>
        <div class="flex items-center justify-start w-full px-4 pb-5">
          <button
            class="flex items-center px-5 py-3 bg-black rounded-full"
            @click="onClickBuyRewardButton()"
          >
            <div class="mr-3 text-lg text-white">{{ rewardItemPrice }}</div>
            <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8" />
          </button>
        </div>
      </div>

      <!-- Remaining POP Balance -->
      <div class="flex items-center justify-between w-11/12">
        <div>
          Remaining <br />
          Balance:
        </div>

        <div class="flex items-center">
          <div class="mr-2 text-4xl font-bold">
            {{ popEarnings - rewardItemPrice }}
          </div>
          <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8 mr-1" />
          $POP
        </div>
      </div>
    </div>

    <div
      id="sticky-buy-bar"
      class="fixed inset-x-0 bottom-0 flex justify-center w-full py-4 "
    >
      <button class="w-10/12 py-4 text-white bg-black rounded-md">
        Purchase Reward
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      popEarnings: this.$store.state.popEarnings,
      rewardToBuy: this.$store.state.rewardToBuy
    };
  },
  computed: {
    rewardIcon() {
      return `/img/swipe-${this.$store.state.rewardToBuy}-btn-512w.png`;
    },
    rewardItemName() {
      switch (this.rewardToBuy) {
        case "superlike":
          return "Super Likes x 10";
          break;
        case "undo":
          return "Undo's x 10";
          break;
        case "like":
          return "Swipes x 10";
          break;
        case "reveal":
          return "See who liked you x 2";
          break;
        default:
          break;
      }
    },
    rewardItemPrice() {
      switch (this.rewardToBuy) {
        case "superlike":
          return "20";
          break;
        case "undo":
          return "20";
          break;
        case "like":
          return "20";
          break;
        case "reveal":
          return "20";
          break;
        default:
          break;
      }
    }
  },
  methods: {
    onClickBackButton() {
      this.$router.push("/user-profile");
    }
  },
  async mounted() {}
};
</script>

<style>
#total-earnings-bar {
  background-image: linear-gradient(#ecffd4, #fbd2ee);
}

#sticky-buy-bar {
  box-shadow: 0 -4px 4px -2px rgb(0 0 0 / 0.1), 0 -2px 6px -1px rgb(0 0 0 / 0.1);
}
</style>
