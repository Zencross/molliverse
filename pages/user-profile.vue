<template>
  <div>
    <TopBar
      person
      messager
      @click="onClickPersonIcon"
      @clickMessager="onClickMessager"
      @clickLogo="onClickLogo"
    ></TopBar>

    <!-- New Profile Header -->
    <div class="flex items-center w-full pt-8 pb-6 shadow-md justify-evenly">
      <!-- Settings -->
      <div
        class="flex flex-col items-center justify-center"
        @click="onClickSettings"
      >
        <img src="/img/setting-black.png" class="w-16 h-16" alt="" />
        <div class="mt-1 text-sm lato-font">
          Settings
        </div>
      </div>

      <!-- Icon -->
      <div class="flex flex-col items-center justify-center">
        <img
          v-if="IconIsImage"
          :src="userIcon"
          alt="icon"
          class="object-cover w-32 h-32 bg-gray-300 rounded-full"
          @click="onClickAddMedia"
        />
        <video
          v-else
          autoplay
          loop
          playsinline
          :src="userIcon"
          alt="icon"
          class="object-cover w-32 h-32 bg-gray-300 rounded-full"
          @click="onClickAddMedia"
        />
        <div class="mt-3 text-2xl font-bold lato-font" @click="onClickName">
          {{ userName + ", " + userAge }}
        </div>
        <div class="text-sm text-center lato-font">
          Are you French? <br />
          Because Eiffel for you.
        </div>
      </div>

      <!-- Edit Info -->
      <div
        @click="onClickEditInfo"
        class="flex flex-col items-center justify-center"
      >
        <img src="/img/edit-info-black.png" class="w-16 h-16" alt="" />
        <div class="mt-1 text-sm lato-font">Edit Info</div>
      </div>
    </div>

    <!-- Tabs -->
    <div
      class="flex items-center w-11/12 mx-4 mt-6 mb-6 bg-white border-t border-b border-black rounded-l-full rounded-r-full"
    >
      <div
        class="w-1/3 py-2 text-center rounded-l-full rounded-r-full"
        :class="[
          activeTab == 'Spending'
            ? 'bg-black text-white'
            : 'bg-white text-black border-l border-black'
        ]"
        @click="onClickSpendingTab()"
      >
        Spending
      </div>
      <div
        class="w-1/3 py-2 text-center rounded-l-full rounded-r-full"
        :class="[
          activeTab == 'NFT' ? 'bg-black text-white' : 'bg-white text-black'
        ]"
        @click="onClickNftTab()"
      >
        NFT
      </div>
      <div
        class="w-1/3 py-2 text-center rounded-l-full rounded-r-full"
        :class="[
          activeTab == 'Wallet'
            ? 'bg-black text-white'
            : 'bg-white text-black border-r border-black'
        ]"
        @click="onClickWalletTab()"
      >
        Wallet
      </div>
    </div>

    <!-- Tab Content -->
    <div
      v-if="activeTab == 'Spending'"
      class="flex flex-col items-center w-full"
    >
      <!-- Total Earnings Bar -->
      <div
        id="total-earnings-bar"
        class="flex items-center w-11/12 py-4 rounded-md justify-evenly"
      >
        <div class="text-xl font-thin">
          Total<br />
          Earnings:
        </div>
        <div class="text-4xl font-bold">100</div>
        <div class="flex items-center">
          <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8 mr-1" />
          $POP
        </div>
      </div>

      <!-- Rewards -->
      <div class="flex flex-col items-center w-11/12 py-4">
        <!-- Heading -->
        <h1 class="w-full mb-4 text-2xl font-bold text-left">Rewards</h1>

        <!-- Buy Super Like -->
        <div
          class="flex flex-col items-center w-full mb-4 border-2 border-black rounded-md"
        >
          <div class="flex justify-start w-full px-4 pt-5 pb-1">
            <img
              src="/img/swipe-superlike-btn-512w.png"
              class="w-16 h-16"
              alt=""
            />
          </div>
          <div class="flex items-center justify-between w-full px-4 pb-3">
            <div class="font-bold">Super Likes x 10</div>
            <div class="px-3 py-1 text-xs bg-gray-400 rounded-2xl">App</div>
          </div>
          <div class="flex items-center justify-start w-full px-4 pb-5">
            <button class="flex items-center px-5 py-3 bg-black rounded-full">
              <div class="mr-3 text-lg text-white">20</div>
              <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8" />
            </button>
          </div>
        </div>

        <!-- Buy Undo -->
        <div
          class="flex flex-col items-center w-full mb-4 border-2 border-black rounded-md"
        >
          <div class="flex justify-start w-full px-4 pt-5 pb-1">
            <img src="/img/swipe-undo-btn-512w.png" class="w-16 h-16" alt="" />
          </div>
          <div class="flex items-center justify-between w-full px-4 pb-3">
            <div class="font-bold">Undo's x 10</div>
            <div class="px-3 py-1 text-xs bg-gray-400 rounded-2xl">App</div>
          </div>
          <div class="flex items-center justify-start w-full px-4 pb-5">
            <button class="flex items-center px-5 py-3 bg-black rounded-full">
              <div class="mr-3 text-lg text-white">20</div>
              <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8" />
            </button>
          </div>
        </div>

        <!-- Buy Swipe -->
        <div
          class="flex flex-col items-center w-full mb-4 border-2 border-black rounded-md"
        >
          <div class="flex justify-start w-full px-4 pt-5 pb-1">
            <img src="/img/swipe-like-btn-512w.png" class="w-16 h-16" alt="" />
          </div>
          <div class="flex items-center justify-between w-full px-4 pb-3">
            <div class="font-bold">Swipes x 10</div>
            <div class="px-3 py-1 text-xs bg-gray-400 rounded-2xl">App</div>
          </div>
          <div class="flex items-center justify-start w-full px-4 pb-5">
            <button class="flex items-center px-5 py-3 bg-black rounded-full">
              <div class="mr-3 text-lg text-white">20</div>
              <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8" />
            </button>
          </div>
        </div>

        <!-- Buy See-Who-Liked-You -->
        <div
          class="flex flex-col items-center w-full mb-4 border-2 border-black rounded-md"
        >
          <div class="flex justify-start w-full px-4 pt-5 pb-1">
            <img
              src="/img/see-who-liked-you-512w.png"
              class="w-16 h-16"
              alt=""
            />
          </div>
          <div class="flex items-center justify-between w-full px-4 pb-3">
            <div class="font-bold">See who liked you x 2</div>
            <div class="px-3 py-1 text-xs bg-gray-400 rounded-2xl">App</div>
          </div>
          <div class="flex items-center justify-start w-full px-4 pb-5">
            <button class="flex items-center px-5 py-3 bg-black rounded-full">
              <div class="mr-3 text-lg text-white">20</div>
              <img src="/img/pop_coin_512w.png" alt="" class="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab == 'NFT'">NFT Tab</div>
    <div v-if="activeTab == 'Wallet'">Wallet Tab</div>

    <!-- Add Media Button -->
    <!-- <div class="flex items-center w-full justify-evenly">
      <div
        class="flex flex-col items-center justify-center"
        @click="onClickAddMedia"
      >
        <img src="/img/add-media.svg" class="w-20 h-20" alt="" />
        <div class="mt-1 text-sm lato-font">Add Media</div>
      </div>
    </div> -->

    <!-- Ads -->
    <!-- <div class="flex flex-col items-center justify-center w-full mt-4">
      <div class="text-2xl font-bold leading-none lato-font">
        Stand out with
      </div>
      <div class="text-4xl font-bold lato-font">Mollie Premium</div>
      <div class="mt-1 text-sm">{{ "Unlimited swipes & rewinds!" }}</div>
      <div class="text-sm">{{ "See who likes you & more!" }}</div>
      <div class="text-sm">
        {{ "You're 3 times more likely to get matched!" }}
      </div>
    </div> -->

    <!-- Logout Button -->
    <div class="flex flex-col items-center justify-center w-full my-4">
      <!-- <button
        class="w-11/12 p-4 mb-2 font-bold border rounded-lg text-brandPurple border-brandPurple lato-font feedback-btn"
      >
        Give us feedback
      </button> -->
      <button
        class="w-11/12 p-4 font-bold text-white border rounded-lg bg-brandPurple lato-font"
        @click="onClickLogout"
      >
        <!-- Get Mollie Premium -->
        Log Out
      </button>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar";
import gql from "graphql-tag";

export default {
  components: { TopBar },
  data() {
    return {
      activeTab: "Spending"
    };
  },
  computed: {
    IconIsImage() {
      if (this.$store.state.user.media[0].type === "IMAGE") return true;
      else return false;
    },
    userIcon() {
      return this.$store.state.user.media[0].url;
    },
    userName() {
      return this.$store.state.user.nickname;
    },
    userAge() {
      // if (!this.$store.state.birthday) {
      //   return "Age";
      // }
      // let dob = new Date(this.$store.state.birthday);

      // //calculate month difference from current date in time
      // var month_diff = Date.now() - dob.getTime();

      // //convert the calculated difference in date format
      // var age_dt = new Date(month_diff);

      // //extract year from date
      // var year = age_dt.getUTCFullYear();

      // //now calculate the age of the user
      // var age = Math.abs(year - 1970);
      return this.$store.state.user.age;
    }
  },
  methods: {
    onClickPersonIcon() {},
    onClickMessager() {
      this.$router.push("/messages");
    },
    onClickAddMedia() {
      this.$router.push("/edit-info");
    },
    onClickEditInfo() {
      this.$router.push("/edit-info");
    },
    onClickSettings() {
      this.$router.push("/settings");
    },
    onClickName() {
      this.$router.push("/swipe");
    },
    onClickLogo() {
      this.$router.push("/swipe");
    },
    async onClickLogout() {
      //await this.$auth.logout();
      this.$router.push("/");
      //  TODO: call action that cleans user data & form data
      this.$store.dispatch("clearOnboardingFormStates");
    },
    onClickSpendingTab() {
      this.activeTab = "Spending";
    },
    onClickNftTab() {
      this.activeTab = "NFT";
    },
    onClickWalletTab() {
      this.activeTab = "Wallet";
    }
  },

  async mounted() {
    /*if (this.$store.state.firstName) {
      try {
        const results = await this.$apollo.query({
          query: gql`
            query($nickname: String!) {
              getUser(nickname: $nickname) {
                nickname
              }
            }
          `,
          variables: {
            nickname: this.$store.state.firstName
          }
        });
        console.log("getUser results:", results.data.getUser);
        if (results.data.getUser) {
          this.userExists = true;
          console.log("user exists");
        } else {
          this.userExists = false;
          console.log("user does not exist");
        }
      } catch (error) {
        console.error(error);
      }
    }*/
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.lato-font {
  font-family: "Lato", sans-serif;
}

.feedback-btn {
  border: 1px;
  border-style: solid;
  border-color: #89287c;
}

#total-earnings-bar {
  background-image: linear-gradient(#ecffd4, #fbd2ee);
}

img {
  /* image-rendering: auto; */
  /* image-rendering: crisp-edges; */
  /* image-rendering: pixelated; */
}
</style>
