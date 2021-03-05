<template>
  <div class="flex flex-col items-center w-full">
    <top-bar back @click="onClickBackButton" />
    <div class="flex flex-col items-center w-full mt-10">
      <!-- <app-text class="w-4/5 mb-8" text="I am a" /> -->
      <div class="w-11/12 mb-6 text-3xl font-semibold text-dark">I am a:</div>
      <app-button
        buttonText="Man"
        @click="onClickMan"
        borderBlack
        textBlack
        activeEffect
        font-bold
        class="mb-5"
      />
      <app-button
        buttonText="Woman"
        @click="onClickWoman"
        borderBlack
        textBlack
        activeEffect
        font-bold
        class="mb-5"
      />
      <app-button
        buttonText="More options"
        @click="onClickOtherGender"
        borderBlack
        textBlack
        rightArrow
        font-bold
        class="mb-5"
      />
      <label class="inline-flex items-center">
        <input
          type="checkbox"
          v-model="showGenderOnProfile"
          class="w-4 h-4 form-checkbox"
        />
        <span class="ml-2 text-sm montserrat-font text-lightgrey"
          >Show my gender on my profile</span
        >
      </label>
      <!-- <gradient-button class="mt-12" @click="onClickContinueButton" /> -->
      <app-button
        buttonText="Continue"
        textWhite
        bgPhoneNum
        @click="onClickButton"
        class="absolute bottom-0 mb-8"
      />
    </div>
  </div>
</template>

<script>
import AppText from "~/components/AppText.vue";
import TopBar from "../components/TopBar";
import AppButton from "../components/AppButton";
import GradientButton from "../components/GradientButton.vue";

export default {
  components: { TopBar, AppText, AppButton, GradientButton },
  data() {
    return {};
  },
  computed: {
    showGenderOnProfile: {
      get() {
        return this.$store.state.showGenderOnProfile;
      },
      set(value) {
        this.$store.commit("setShowGenderOnProfile", value);
      }
    }
  },
  methods: {
    onClickBackButton() {
      this.$router.push("/birthday");
    },
    onClickWoman() {
      this.$store.commit("setGender", "Woman");
    },
    onClickMan() {
      this.$store.commit("setGender", "Man");
    },
    onClickOtherGender() {},
    onClickButton() {
      this.$router.push("/sexual-orientation");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.montserrat-font {
  font-family: "Montserrat", sans-serif;
}
</style>
