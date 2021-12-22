<template>
  <div>
    <TopBar
      person
      messager
      @click="onClickPersonIcon"
      @clickMessager="onClickMessager"
      @clickLogo="onClickLogo"
    ></TopBar>

    <div class="flex flex-col items-center justify-center w-full pt-8 pb-6">
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
      <div class="text-sm lato-font">
        Are you French? Because Eiffel for you.
      </div>
    </div>

    <!-- Controls -->
    <div class="flex items-center w-full justify-evenly">
      <div
        class="flex flex-col items-center justify-center"
        @click="onClickSettings"
      >
        <img src="/img/settings.svg" class="w-16 h-16" alt="" />
        <div class="mt-1 text-sm lato-font">
          Settings
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center"
        @click="onClickAddMedia"
      >
        <img src="/img/add-media.svg" class="w-20 h-20" alt="" />
        <div class="mt-1 text-sm lato-font">Add Media</div>
      </div>
      <div
        @click="onClickEditInfo"
        class="flex flex-col items-center justify-center"
      >
        <img src="/img/edit-info.svg" class="w-16 h-16" alt="" />
        <div class="mt-1 text-sm lato-font">Edit Info</div>
      </div>
    </div>

    <!-- Ads -->
    <div class="flex flex-col items-center justify-center w-full mt-4">
      <div class="text-2xl font-bold leading-none lato-font">
        Stand out with
      </div>
      <div class="text-4xl font-bold lato-font">Mollie Premium</div>
      <div class="mt-1 text-sm">{{ "Unlimited swipes & rewinds!" }}</div>
      <div class="text-sm">{{ "See who likes you & more!" }}</div>
      <div class="text-sm">
        {{ "You're 3 times more likely to get matched!" }}
      </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full my-4">
      <button
        class="w-11/12 p-4 mb-2 font-bold border rounded-lg text-brandPurple border-brandPurple lato-font feedback-btn"
      >
        Give us feedback
      </button>
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
    return {};
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
      //this.$router.push("/gallery");
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
      await this.$auth.logout();
      //this.$router.push("/");
      //  TODO: call action that cleans user data & form data
      this.$store.dispatch("clearOnboardingFormStates");
    }
  },
  async mounted() {
    if (this.$store.state.firstName) {
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
    }
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
</style>
