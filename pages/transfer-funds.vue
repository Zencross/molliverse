<template>
  <div class="min-h-screen">
    <SimpleTopBar :title="'Transfer'" :backLink="'/wallet'" />
    <!-- Body -->
    <div class="flex flex-col items-center w-full h-screen bg-gray-100">
      

      <!-- To Address -->
      <div
        class="flex justify-between w-full px-4 py-4 bg-white shadow-sm item-center"
      >
        <div
          class="flex items-center justify-center h-full text-sm font-hairline text-center"
        >
          Asset
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
          <input type="number" class="px-1 mr-2 text-right bg-gray-100" v-model="amountToTransfer"></input>
          <div class="mr-4">{{ tokenToTransfer }}</div>
          <div class="italic all-token-text-color" @click="onClickTransferAllToken">All</div>
        </div>
      </div>

      <!-- Token Balance -->
      <div class="flex items-center w-full mt-3 ml-8 text-gray-600 text-xxs">
        <span>Balance: {{ tokenBalance }} {{ tokenToTransfer }}</span>
      </div>
    </div>
    <SimpleBottomBar
      :title="'Confirm Transfer'"
      @buttonClick=""
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
      tokenToTransfer: "POP",   //POP, ETH, USDT, AVAX
      tokenBalance: 0,
      amountToTransfer: 0,
    };
  },
  computed: {
    
  },
  methods: {
    onClickConfirmTransfer() {
      if(this.tokenBalance > 0 && this.amountToTransfer <= this.tokenBalance){
          this.tokenBalance = this.tokenBalance - this.amountToTransfer;
          if(this.tokenToTransfer == "POP"){
              this.$store.commit('setPopBalance', this.tokenBalance);
          }else if(this.tokenToTransfer == "ETH"){
            this.$store.commit('setEthBalance', this.tokenBalance);
          }else if(this.tokenToTransfer == "USDT"){
              this.$store.commit('setUsdtBalance', this.tokenBalance);
          }else if(this.tokenToTransfer == "AVAX"){
              this.$store.commit('setAvaxBalance', this.tokenBalance);
          }
        this.amountToSend = 0;
        console.log("Sent");
        this.$router.push("/send-funds-successful");
      }else{
          console.log("Insufficient balance");
      }
    },
    onClickTransferAllToken() {
        this.amountToTransfer = this.tokenBalance;
    }
  },
  mounted() {
      switch (this.tokenToTransfer) {
        case "POP":
          this.tokenBalance = this.$store.state.popBalance;
          break;
        case "ETH":
          this.tokenBalance = this.$store.state.ethBalance;
          break;
        case "USDT":
          this.tokenBalance = this.$store.state.usdtBalance;
          break;
        case "AVAX":
          this.tokenBalance = this.$store.state.avaxBalance;
          break;
        default:
          break;
      }
  }
};
</script>

<style></style>
