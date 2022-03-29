<template>
  <div class="min-h-screen">
    <SimpleTopBar :title="'Send to'" :backLink="'/wallet'" />
    <!-- Body -->
    <div class="flex flex-col items-center w-full h-screen bg-gray-100">
      <!-- Token Icon -->
      <div class="flex items-center justify-center py-10">
        <img :src="tokenIconURL" alt="token" class="w-12 h-12" />
      </div>
      <!-- To Address -->
      <div
        class="flex justify-between w-full px-4 py-4 bg-white shadow-sm item-center"
      >
        <div
          class="flex items-center justify-center h-full text-sm font-hairline text-center"
        >
          To Address
        </div>
        <img src="/img/scan-icon-512w.png" alt="" class="w-6 h-6 mr-1" />
      </div>
      <!-- Send Amount -->
      <div
        class="flex justify-between w-full px-4 py-4 mt-1 bg-white shadow-sm item-center"
      >
        <div
          class="flex items-center justify-center h-full text-sm font-hairline text-center"
        >
          Amount
        </div>
        <div class="flex text-sm">
          <input type="number" class="px-1 mr-2 text-right bg-gray-100" v-model="amountToSend"></input>
          <div class="mr-4">{{ tokenToSend }}</div>
          <div class="italic all-token-text-color" @click="onClickSendAllToken">All</div>
        </div>
      </div>
      <!-- Token Balance -->
      <div class="flex items-center w-full mt-3 ml-8 text-gray-600 text-xxs">
        <span>Balance: {{ tokenBalance }} {{ tokenToSend }}</span>
      </div>
    </div>
    <SimpleBottomBar
      :title="'Confirm Transfer'"
      @buttonClick="onClickConfirmTransfer"
    />
  </div>
</template>

<script>
import SimpleTopBar from "~/components/SimpleTopBar.vue";
import SimpleBottomBar from "~/components/SimpleBottomBar.vue";
export default {
  components: { SimpleTopBar, SimpleBottomBar },
  data() {
    return {
      tokenToSend: this.$store.state.tokenToSend, //POP, ETH, USDT, AVAX
      tokenBalance: 0,
      amountToSend: 0,
    };
  },
  computed: {
    tokenIconURL() {
      switch (this.tokenToSend) {
        case "POP":
          return "/img/pop_coin_512w.png";
          break;
        case "ETH":
          return "/img/wallet-eth-icon-w512.png";
          break;
        case "USDT":
          return "/img/wallet-usdt-icon-w512.png";
          break;
        case "AVAX":
          return "/img/wallet-avax-icon-w512.png";
          break;
        default:
          break;
      }
    },
  },
  methods: {
    onClickConfirmTransfer() {
      if (
        this.tokenBalance > 0 &&
        this.amountToSend > 0 &&
        this.amountToSend <= this.tokenBalance
      ) {
        this.tokenBalance = (this.tokenBalance - this.amountToSend).toFixed(4);
        if (this.tokenToSend == "POP") {
          this.$store.commit("setPopWalletBalance", this.tokenBalance);
        } else if (this.tokenToSend == "ETH") {
          this.$store.commit("setEthWalletBalance", this.tokenBalance);
        } else if (this.tokenToSend == "USDT") {
          this.$store.commit("setUsdtWalletBalance", this.tokenBalance);
        } else if (this.tokenToSend == "AVAX") {
          this.$store.commit("setAvaxWalletBalance", this.tokenBalance);
        }
        this.amountToSend = 0;
        console.log("Sent");
        this.$router.push("/send-funds-successful");
      } else {
        console.log("Insufficient balance");
      }
    },
    onClickSendAllToken() {
      this.amountToSend = this.tokenBalance;
    },
  },
  mounted() {
    switch (this.tokenToSend) {
      case "POP":
        this.tokenBalance = this.$store.state.popWalletBalance;
        break;
      case "ETH":
        this.tokenBalance = this.$store.state.ethWalletBalance;
        break;
      case "USDT":
        this.tokenBalance = this.$store.state.usdtWalletBalance;
        break;
      case "AVAX":
        this.tokenBalance = this.$store.state.avaxWalletBalance;
        break;
      default:
        break;
    }
  },
};
</script>

<style>
.all-token-text-color {
  color: #8056e8;
}
</style>
