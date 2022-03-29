<template>
  <div class="min-h-screen">
    <!-- Simple Top Bar -->
    <SimpleTopBar :title="'Purchase a Reward'" :backLink="'/user-profile'" />

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
        <div class="text-4xl font-bold">
          {{ popSpendingBalance.toFixed(4) }}
        </div>
        <div class="flex items-center">
          <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8 mr-1" />
          $POP
        </div>
      </div>

      <!-- Buy Reward Window -->
      <h1 class="mb-2">You are about to purchase the following reward:</h1>
      <div
        class="flex flex-col items-center w-11/12 mb-4 border-2 border-black rounded-md "
      >
        <div class="flex justify-start w-full px-4 pt-5 pb-1">
          <img :src="rewardIcon" class="w-16 h-16" alt="" />
        </div>
        <div class="flex items-center justify-between w-full px-4 pb-3">
          <div class="font-bold">{{ rewardItemName }}</div>
          <div class="px-3 py-1 text-xs bg-gray-400 rounded-2xl">App</div>
        </div>
        <div class="flex items-center justify-start w-full px-4 pb-5">
          <button class="flex items-center px-5 py-3 bg-black rounded-full">
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
            {{ (popSpendingBalance - rewardItemPrice).toFixed(4) }}
          </div>
          <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8 mr-1" />
          $POP
        </div>
      </div>
    </div>

    <!-- Bottom Sticky Bar -->
    <SimpleBottomBar
      :title="'Purchase Reward'"
      @buttonClick="onClickPurchaseButton"
    />
    <!-- <div
      id="sticky-buy-bar"
      class="fixed inset-x-0 bottom-0 flex justify-center w-full py-4 "
    >
      <button
        class="w-10/12 py-4 text-white bg-black rounded-md"
        @click="onClickPurchaseButton"
      >
        Purchase Reward
      </button>
    </div> -->
  </div>
</template>

<script>
import SimpleTopBar from "~/components/SimpleTopBar.vue";
import SimpleBottomBar from "~/components/SimpleBottomBar.vue";
export default {
  components: { SimpleTopBar, SimpleBottomBar },
  data() {
    return {
      showBuySuccessScreen: false,
    };
  },
  computed: {
    popSpendingBalance() {
      return this.$store.state.popSpendingBalance;
    },
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
    },
    rewardToBuy() {
      return this.$store.state.rewardToBuy;
    },
  },
  methods: {
    onClickPurchaseButton() {
      if (this.popSpendingBalance - this.rewardItemPrice >= 0) {
        // Send item price to master wallet
        console.log("Buy Successful");
        this.$router.push("/purchase-reward-successful");
        this.$store.commit(
          "setPopSpendingBalance",
          this.popSpendingBalance - this.rewardItemPrice
        );
      } else {
        // Not enough balance error
        console.log("Insufficient balance");
      }
    },
  },
  async mounted() {},
};
</script>

<style>
#total-earnings-bar {
  background-image: linear-gradient(#ecffd4, #fbd2ee);
}
</style>
