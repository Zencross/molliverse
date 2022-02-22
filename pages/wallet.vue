<template>
  <div class="min-h-screen">
    <SimpleTopBar :title="'Your Wallet'" :backLink="'/user-profile'" />
    <div
      id="wallet-background"
      class="flex flex-col items-center w-full h-screen"
    >
      <!-- Balance -->
      <h1 class="mt-6 text-4xl font-bold">0 USDT</h1>
      <!-- Waller Address -->
      <div class="px-4 py-2 mt-4 bg-white border-2 border-black rounded-full">
        o2u3...r923
      </div>
      <!-- Wallet Actions -->
      <div class="flex justify-around w-full px-2 mt-6">
        <!-- Receive Button -->
        <div class="flex flex-col">
          <button
            class="flex items-center justify-center p-4 bg-white border-2 border-black rounded-full"
            @click="onClickReceiveButton"
          >
            <img
              src="/img/wallet-receive-icon-w512.png"
              class="w-10 h-10"
              alt="receive"
            />
          </button>
          <span class="mt-2 text-sm font-bold text-center">Receive</span>
        </div>

        <!-- Send Button -->
        <div class="flex flex-col">
          <button
            class="flex items-center justify-center p-4 bg-white border-2 border-black rounded-full"
          >
            <img
              src="/img/wallet-send-icon-w512.png"
              class="w-10 h-10"
              alt="send"
            />
          </button>
          <span class="mt-2 text-sm font-bold text-center">Send</span>
        </div>

        <!-- Transfer Button -->
        <div class="flex flex-col">
          <button
            class="flex items-center justify-center p-4 bg-white border-2 border-black rounded-full"
          >
            <img
              src="/img/wallet-transfer-icon-w512.png"
              class="w-10 h-10"
              alt="transfer"
            />
          </button>
          <span class="mt-2 text-sm font-bold text-center">Transfer</span>
        </div>

        <!-- Trade Button -->
        <div class="flex flex-col">
          <button
            class="flex items-center justify-center p-4 bg-white border-2 border-black rounded-full"
          >
            <img
              src="/img/wallet-trade-icon-w512.png"
              class="w-10 h-10"
              alt="trade"
            />
          </button>
          <span class="mt-2 text-sm font-bold text-center">Trade</span>
        </div>
      </div>

      <!-- Tokens -->
      <div class="flex flex-col items-center w-full mt-4">
        <div
          class="flex items-center justify-between w-11/12 px-4 py-4 mt-2 bg-white border-2 border-black rounded-lg"
        >
          <img src="/img/pop_coin_512w.png" class="w-12 h-12" alt="pop" />
          <div class="text-lg font-bold">$POP</div>
        </div>

        <div
          class="flex items-center justify-between w-11/12 px-4 py-4 mt-4 bg-white border-2 border-black rounded-lg"
        >
          <img
            src="/img/wallet-eth-icon-w512.png"
            class="w-12 h-12"
            alt="eth"
          />
          <div class="text-lg font-bold">$ETH</div>
        </div>

        <div
          class="flex items-center justify-between w-11/12 px-4 py-4 mt-4 bg-white border-2 border-black rounded-lg"
        >
          <img
            src="/img/wallet-usdt-icon-w512.png"
            class="w-12 h-12"
            alt="usdt"
          />
          <div class="text-lg font-bold">$USDT</div>
        </div>

        <div
          class="flex items-center justify-between w-11/12 px-4 py-4 mt-4 bg-white border-2 border-black rounded-lg"
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
    <!-- Receive Modal -->
    <transition name="fade">
      <div v-if="showReceiveModal">
        <div
          class="absolute top-0 bottom-0 left-0 right-0 z-20 w-full bg-black opacity-50"
          @click="showReceiveModal = false"
        ></div>

        <div
          class="fixed inset-x-0 bottom-0 z-30 w-full bg-white shadow-xl rounded-t-xl"
        >
          <div class="pt-4 pb-2 font-semibold text-center text-black text">
            Receive
          </div>

          <div class="flex items-center justify-center w-full">
            <img
              src="/img/receive-qr-code-w512.png"
              class="w-40 h-40 "
              alt="qr-code"
            />
          </div>

          <div class="py-4 font-hairline text-center text-black text">
            Scan address to receive payment
          </div>

          <div
            class="py-2 mx-4 text-sm text-center bg-white border-2 border-black rounded-full px-x"
          >
            {{ walletAddress }}
          </div>

          <div class="flex items-center justify-center my-4">
            <button
              class="w-11/12 py-4 text-white bg-black rounded-md"
              @click="onClickCopyAddress"
            >
              Copy Address
            </button>
          </div>
          <transition name="fade">
            <div
              v-if="showCopiedToast"
              class="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center w-full pt-4 mb-16"
            >
              <span
                class="w-1/3 px-4 py-2 text-center text-black bg-gray-300 rounded-full"
                >Copied to Clipboard</span
              >
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SimpleTopBar from "~/components/SimpleTopBar.vue";
export default {
  components: { SimpleTopBar },
  data() {
    return {
      showReceiveModal: false,
      walletAddress: "o2u3asidftyase897ruh123lasd0f8y807234r923",
      showCopiedToast: false
    };
  },
  methods: {
    onClickReceiveButton() {
      this.showReceiveModal = true;
    },
    onClickCopyAddress() {
      navigator.clipboard.writeText(this.walletAddress);
      // alert("Copied the address " + this.walletAddress);
      this.showCopiedToast = true;
      setTimeout(() => {
        this.showCopiedToast = false;
        // this.showReceiveModal = false;
      }, 800);
    }
  }
};
</script>

<style>
#wallet-background {
  background-image: url("../static/img/wallet-gradient-background.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
