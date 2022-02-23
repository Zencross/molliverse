<template>
  <div class="min-h-screen">
    <SimpleTopBar :title="'Transfer'" :backLink="'/wallet'" />
    <!-- Body -->
    <div class="flex flex-col items-center w-full h-screen bg-gray-100">
      
      <!-- From Wallet to Spending -->
      <div v-if="transferDirection == 'wallet-to-spending'" class="flex items-center w-11/12 px-4 my-6 bg-white border-2 border-black rounded-2xl">
          <div class="flex flex-col w-full">
              <div class="flex items-center w-full py-4">
                  <span class="mr-4 text-sm">From:</span>
                  <img src="/img/wallet-icon-512w.png" alt="wallet" class="w-6 h-6 mr-2">
                  <span class="text-lg font-bold">Wallet</span>
              </div>
              <div class="flex items-center w-full">
                <hr class="w-full border-t-2">
                <button class="w-10 h-10 ml-3" @click="toggleTransferDirection"><img src="/img/transfer-toggle-w512.png" class="" alt=""></button>
              </div>
              <div class="flex items-center w-full py-4">
                  <span class="mr-4 text-sm">To:</span>
                  <img src="/img/spending-icon-512w.png" alt="wallet" class="w-6 h-6 mr-2">
                  <span class="text-lg font-bold">Spending</span>
              </div>
          </div>
      </div>

      <!-- From Spending to Wallet -->
      <div v-if="transferDirection == 'spending-to-wallet'" class="flex items-center w-11/12 px-4 my-6 bg-white border-2 border-black rounded-2xl">
          <div class="flex flex-col w-full">
              <div class="flex items-center w-full py-4">
                  <span class="mr-4 text-sm">From:</span>
                  <img src="/img/spending-icon-512w.png" alt="wallet" class="w-6 h-6 mr-2">
                  <span class="text-lg font-bold">Spending</span>
              </div>
              <div class="flex items-center w-full">
                <hr class="w-full border-t-2">
                <button class="w-10 h-10 ml-3" @click="toggleTransferDirection"><img src="/img/transfer-toggle-w512.png" class="" alt=""></button>
              </div>
              <div class="flex items-center w-full py-4">
                  <span class="mr-4 text-sm">To:</span>
                  <img src="/img/wallet-icon-512w.png" alt="wallet" class="w-6 h-6 mr-2">
                  <span class="text-lg font-bold">Wallet</span>
              </div>
          </div>
      </div>

      <!-- Asset to transfer -->
      <div
        class="flex justify-between w-full px-4 py-4 bg-white shadow-sm item-center"
      >
        <div
          class="flex items-center justify-center text-sm font-hairline text-center"
        >
          Asset
        </div>
        <div class="flex text-sm">
          <div class="mr-4">{{ tokenToTransfer }}</div>
          <div class="flex items-center justify-center" @click="showTokenSelector=true">
            <img src="/img/expand-arrow-512w.png" alt="" class="w-3 h-3 mr-2" />
          </div>
        </div>
      </div>

      <!-- Transfer Amount -->
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
        </div>
      </div>

      <!-- Token Balance -->
      <div class="flex items-center w-full mt-3 ml-8 text-gray-600 text-xxs">
        <span>Balance: {{ tokenBalance }} {{ tokenToTransfer }}</span>
      </div>
    </div>

    <!-- Token Selector Modal -->
    <transition name="fade">
      <div v-if="showTokenSelector">
        <div
          class="absolute top-0 bottom-0 left-0 right-0 z-20 w-full bg-black opacity-50"
          @click="showTokenSelector = false"
        ></div>

        <div
          class="fixed inset-x-0 bottom-0 z-30 w-full bg-white shadow-xl rounded-t-xl"
        >
          <!-- Title -->
          <div class="pt-4 pb-2 font-semibold text-center text-black text">
            Select token
          </div>

          <!-- Token List -->
          <div class="flex flex-col items-center w-full mb-8">
            <!-- POP -->
            <div
              class="flex items-center justify-between w-11/12 px-4 py-4 mt-2 bg-white border-2 border-black rounded-lg"
              @click="onClickSelectPOP"
            >
              <img src="/img/pop_coin_512w.png" class="w-12 h-12" alt="pop" />
              <div class="text-lg font-bold">$POP</div>
            </div>

            <!-- ETH -->
            <div
              class="flex items-center justify-between w-11/12 px-4 py-4 mt-4 bg-white border-2 border-black rounded-lg"
              @click="onClickSelectETH"
            >
              <img
                src="/img/wallet-eth-icon-w512.png"
                class="w-12 h-12"
                alt="eth"
              />
              <div class="text-lg font-bold">$ETH</div>
            </div>

            <!-- USDT -->
            <div
              class="flex items-center justify-between w-11/12 px-4 py-4 mt-4 bg-white border-2 border-black rounded-lg"
              @click="onClickSelectUSDT"
            >
              <img
                src="/img/wallet-usdt-icon-w512.png"
                class="w-12 h-12"
                alt="usdt"
              />
              <div class="text-lg font-bold">$USDT</div>
            </div>

            <!-- AVAX -->
            <div
              class="flex items-center justify-between w-11/12 px-4 py-4 mt-4 bg-white border-2 border-black rounded-lg"
              @click="onClickSelectAVAX"
            >
              <img
                src="/img/wallet-avax-icon-w512.png"
                class="w-12 h-12"
                alt="avax"
              />
              <div class="text-lg font-bold">$AVAX</div>
            </div>
          </div>
        </div>
      </div>
    </transition>

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
      tokenToTransfer: "POP",   //POP, ETH, USDT, AVAX
      tokenBalance: 0,
      amountToTransfer: 0,
      transferDirection: "wallet-to-spending",
      showTokenSelector: false
    };
  },
  computed: {
    
  },
  methods: {
    onClickConfirmTransfer() {
      if(this.tokenBalance > 0 && this.amountToTransfer > 0 && this.amountToTransfer <= this.tokenBalance){

        this.tokenBalance = (parseFloat(this.tokenBalance) - parseFloat(this.amountToTransfer)).toFixed(4);

          if(this.transferDirection == 'wallet-to-spending'){
            if(this.tokenToTransfer == "POP"){
                this.$store.commit('setPopWalletBalance', (parseFloat(this.$store.state.popWalletBalance) - parseFloat(this.amountToTransfer)).toFixed(4));
                this.$store.commit('setPopSpendingBalance', (parseFloat(this.$store.state.popSpendingBalance) + parseFloat(this.amountToTransfer)).toFixed(4));
            }else if(this.tokenToTransfer == "ETH"){
                this.$store.commit('setEthWalletBalance', (parseFloat(this.$store.state.ethWalletBalance) - parseFloat(this.amountToTransfer)).toFixed(4));
                this.$store.commit('setEthSpendingBalance', (parseFloat(this.$store.state.ethSpendingBalance) + parseFloat(this.amountToTransfer)).toFixed(4));
            }else if(this.tokenToTransfer == "USDT"){
                this.$store.commit('setUsdtWalletBalance', (parseFloat(this.$store.state.usdtWalletBalance) - parseFloat(this.amountToTransfer)).toFixed(4));
                this.$store.commit('setUsdtSpendingBalance', ( parseFloat(this.$store.state.usdtSpendingBalance) + parseFloat(this.amountToTransfer)).toFixed(4));
            }else if(this.tokenToTransfer == "AVAX"){
                this.$store.commit('setAvaxWalletBalance', (parseFloat(this.$store.state.avaxWalletBalance) - parseFloat(this.amountToTransfer)).toFixed(4));
                this.$store.commit('setAvaxSpendingBalance', (parseFloat(this.$store.state.avaxSpendingBalance) + parseFloat(this.amountToTransfer)).toFixed(4));
            }
          }else if(this.transferDirection == 'spending-to-wallet'){
            if(this.tokenToTransfer == "POP"){
                this.$store.commit('setPopWalletBalance', (parseFloat(this.$store.state.popWalletBalance) + parseFloat(this.amountToTransfer)).toFixed(4));
                this.$store.commit('setPopSpendingBalance', (parseFloat(this.$store.state.popSpendingBalance) - parseFloat(this.amountToTransfer)).toFixed(4));
            }else if(this.tokenToTransfer == "ETH"){
                this.$store.commit('setEthWalletBalance', (parseFloat(this.$store.state.ethWalletBalance) + parseFloat(this.amountToTransfer)).toFixed(4));
                this.$store.commit('setEthSpendingBalance', (parseFloat(this.$store.state.ethSpendingBalance) - parseFloat(this.amountToTransfer)).toFixed(4));
            }else if(this.tokenToTransfer == "USDT"){
                this.$store.commit('setUsdtWalletBalance', (parseFloat(this.$store.state.usdtWalletBalance) + parseFloat(this.amountToTransfer)).toFixed(4));
                this.$store.commit('setUsdtSpendingBalance', (parseFloat(this.$store.state.usdtSpendingBalance) - parseFloat(this.amountToTransfer)).toFixed(4));
            }else if(this.tokenToTransfer == "AVAX"){
                this.$store.commit('setAvaxWalletBalance', (parseFloat(this.$store.state.avaxWalletBalance) + parseFloat(this.amountToTransfer)).toFixed(4));
                this.$store.commit('setAvaxSpendingBalance', (parseFloat(this.$store.state.avaxSpendingBalance) - parseFloat(this.amountToTransfer)).toFixed(4));
            }
          }

          
        this.amountToTransfer = 0;
        console.log("Sent");
        this.$router.push("/transfer-funds-successful");
      }else{
          console.log("Insufficient balance");
      }
    },
    toggleTransferDirection() {
        if(this.transferDirection == 'wallet-to-spending'){
            this.transferDirection = 'spending-to-wallet'
            this.updateTokenBalance();
        }else {
            this.transferDirection = 'wallet-to-spending'
            this.updateTokenBalance();
        }
    },
    updateTokenBalance(){
        if(this.transferDirection == 'wallet-to-spending'){
          switch (this.tokenToTransfer) {
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
        }else if(this.transferDirection == 'spending-to-wallet'){
          switch (this.tokenToTransfer) {
            case "POP":
            this.tokenBalance = this.$store.state.popSpendingBalance;
            break;
            case "ETH":
            this.tokenBalance = this.$store.state.ethSpendingBalance;
            break;
            case "USDT":
            this.tokenBalance = this.$store.state.usdtSpendingBalance;
            break;
            case "AVAX":
            this.tokenBalance = this.$store.state.avaxSpendingBalance;
            break;
            default:
            break;
          }
      }
    },
    onClickSelectPOP(){
        this.tokenToTransfer ='POP';
        this.showTokenSelector = false;
        this.updateTokenBalance();
    },
    onClickSelectETH(){
        this.tokenToTransfer ='ETH';
        this.showTokenSelector=false;
        this.updateTokenBalance();
    },
    onClickSelectUSDT(){
        this.tokenToTransfer ='USDT';
        this.showTokenSelector=false;
        this.updateTokenBalance();
    },
    onClickSelectAVAX(){
        this.tokenToTransfer ='AVAX';
        this.showTokenSelector=false;
        this.updateTokenBalance();
    }
  },
  mounted() {
      this.updateTokenBalance();
  }
};
</script>

<style></style>
