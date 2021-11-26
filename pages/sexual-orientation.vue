<template>
  <div class="flex flex-col items-center w-full">
    <top-bar back skip @click="onClickBackButton" @skip="onClickSkipButton" />
    <div class="flex flex-col items-center w-full mt-8 bg-white">
      <!-- <app-text class="w-4/5 mb-4" text="My Sexual orientation is" /> -->
      <div class="w-11/12 mb-6 text-3xl text-dark">
        My sexual orientation is:
      </div>
      <div class="w-11/12 overflow-scroll scroll-view-container">
        <div class=" text-lightgrey">Select up to 3</div>
        <button
          class="flex flex-col items-start w-full pl-1 mt-3 text-xl focus:outline-none"
          v-for="item in sexualOrientations"
          :key="item.id"
          @click="onClickItem(item)"
        >
          <div class="flex justify-between w-full">
            <div>{{ item.name }}</div>
            <img
              v-if="existInUserSOArr(item)"
              src="../static/img/tick-purple-24px.svg"
              alt=""
            />
          </div>
        </button>
      </div>
      <label class="inline-flex items-center mt-8">
        <input
          type="checkbox"
          v-model="showSexualOrientationOnProfile"
          class="w-4 h-4 form-checkbox"
        />
        <span class="pl-2 text-sm montserrat-font text-lightgrey"
          >Show my orientation on my profile</span
        >
      </label>
      <app-button
        buttonText="Next"
        textWhite
        bgBlack
        @click="onClickContinueButton"
        class="absolute bottom-0 mb-8"
      />
    </div>
  </div>
</template>

<script>
import AppText from "~/components/AppText.vue";
import TopBar from "../components/TopBar";
import AppButton from "../components/AppButton";

export default {
  components: { TopBar, AppText, AppButton },
  data() {
    return {
      sexualOrientations: [
        { id: 1, name: "Straight" },
        { id: 2, name: "Gay" },
        { id: 3, name: "Lesbian" },
        { id: 4, name: "Bisexual" },
        { id: 5, name: "Asexual" },
        { id: 6, name: "Others" }
      ]
    };
  },
  computed: {
    showSexualOrientationOnProfile: {
      get() {
        return this.$store.state.showSexualOrientationOnProfile;
      },
      set(value) {
        this.$store.commit("setShowSexualOrientationOnProfile", value);
      }
    }
  },
  methods: {
    existInUserSOArr(item) {
      if (
        this.$store.state.userSexualOrientations.some(s => s.name === item.name)
      )
        return true;
      else return false;
    },
    onClickBackButton() {
      this.$router.push("/gender");
    },
    onClickSkipButton() {
      this.$router.push("/show-me");
    },
    onClickItem(item) {
      console.log("Clicked", item.name);
      // append item in array, remove item if exist
      if (
        this.$store.state.userSexualOrientations.some(s => s.name === item.name)
      ) {
        this.$store.commit("removeSexualOrientation", item.name);
      } else if (this.$store.state.userSexualOrientations.length < 3) {
        this.$store.commit("addSexualOrientation", item);
      }
    },
    onClickContinueButton() {
      this.$router.push("/show-me");
    }
  }
};
</script>

<style>
.scroll-view-container {
  max-height: 200px;
}
</style>
