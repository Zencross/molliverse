<template>
  <div class="min-h-screen">
    <SimpleTopBar :title="'Trade'" :backLink="'/wallet'" />

    <!-- Body -->
    <div class="flex flex-col items-center w-full h-screen bg-gray-100">
      <!-- Trade Window (From) -->
      <div
        class="flex flex-col items-center w-11/12 px-4 mt-6 mb-3 bg-white border-2 border-black rounded-2xl"
      >
        <div
          class="flex items-center justify-between w-full pt-4 pb-2 text-sm italic font-hairline text-gray-700"
        >
          <div>From</div>
          <div>Balance: 32.32938 AVAX</div>
        </div>

        <div
          class="flex items-center justify-between w-full pt-2 pb-4 text-sm font-hairline"
        >
          <div class="text-lg font-bold">24.392834</div>
          <div class="flex items-center">
            <div class="mx-2 italic all-token-text-color" @click="">
              Max
            </div>
            <img
              src="/img/wallet-avax-icon-w512.png"
              class="w-12 h-12 mx-2"
              alt="avax"
            />
            <div class="mr-2 text-lg font-bold">$AVAX</div>
            <!-- <img src="/img/expand-arrow-512w.png" class="w-3 h-3" alt="" /> -->
            <div
              class="flex items-center justify-center"
              @click="showTokenSelector = true"
            >
              <img src="/img/expand-arrow-512w.png" alt="" class="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <!-- Switch Button -->
      <div class="flex items-center justify-center w-full">
        <button class="w-10 h-10" @click="">
          <img src="/img/transfer-toggle-w512.png" class="" alt="" />
        </button>
      </div>

      <!-- Trade Window (To) -->
      <div
        class="flex flex-col items-center w-11/12 px-4 mt-3 mb-6 bg-white border-2 border-black rounded-2xl"
      >
        <div
          class="flex items-center justify-between w-full pt-4 pb-2 text-sm italic font-hairline text-gray-700"
        >
          <div>To (estimate)</div>
        </div>

        <div
          class="flex items-center justify-between w-full pt-2 pb-4 text-sm font-hairline "
        >
          <div class="text-lg font-bold">24.392834</div>
          <div class="flex items-center">
            <img
              src="/img/pop_coin_512w.png"
              class="w-12 h-12 mx-2"
              alt="pop"
            />
            <div class="mr-2 text-lg font-bold">$POP</div>
            <div
              class="flex items-center justify-center"
              @click="showTokenSelector = true"
            >
              <img src="/img/expand-arrow-512w.png" alt="" class="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <SimpleBottomBar :title="'Trade'" @buttonClick="onClickConfirmTrade" />
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
  </div>
</template>

<script>
import SimpleTopBar from "~/components/SimpleTopBar.vue";
import SimpleBottomBar from "~/components/SimpleBottomBar.vue";
export default {
  components: { SimpleTopBar, SimpleBottomBar },
  data() {
    return {
      showTokenSelector: false
    };
  },
  methods: {
    onClickConfirmTrade() {
      this.$router.push("/trade-successful");
    },
    onClickSelectPOP() {},
    onClickSelectETH() {},
    onClickSelectUSDT() {},
    onClickSelectAVAX() {}
  }
};
</script>

<style></style>
