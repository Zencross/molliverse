<template>
  <div class="flex flex-col items-center w-full">
    <top-bar back @click="onClickBackButton" />
    <div class="flex flex-col items-center w-full mt-8">
      <!-- <app-text class="w-4/5 mb-8" text="Show me" /> -->
      <div class="w-11/12 mb-6 text-3xl font-semibold text-dark">Show me</div>
      <app-button
        buttonText="Man"
        @click="onClickShowMan"
        borderBlack
        textBlack
        fontBold
        class="mb-5"
        :selected="btnManSelected"
      />
      <app-button
        buttonText="Woman"
        @click="onClickShowWoman"
        borderBlack
        textBlack
        fontBold
        class="mb-5"
        :selected="btnWomanSelected"
      />
      <app-button
        buttonText="Everyone"
        @click="onClickShowAll"
        borderBlack
        textBlack
        fontBold
        class="mb-5"
        :selected="btnEveryoneSelected"
      />
      <!-- <gradient-button class="mt-12" @click="onClickContinueButton" /> -->
      <app-button
        buttonText="Continue"
        textWhite
        bgPhoneNum
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
import GradientButton from "../components/GradientButton.vue";

export default {
  components: { TopBar, AppText, AppButton, GradientButton },
  data() {
    return {
      btnManSelected: false,
      btnWomanSelected: false,
      btnEveryoneSelected: false
    };
  },
  methods: {
    onClickBackButton() {
      this.$router.push("/sexual-orientation");
    },
    onClickShowMan() {
      this.$store.commit("setShowMePreference", "Man");
      this.btnWomanSelected = false;
      this.btnEveryoneSelected = false;
      this.btnManSelected = true;
    },
    onClickShowWoman() {
      this.$store.commit("setShowMePreference", "Woman");
      this.btnEveryoneSelected = false;
      this.btnManSelected = false;
      this.btnWomanSelected = true;
    },
    onClickShowAll() {
      this.$store.commit("setShowMePreference", "Everyone");
      this.btnManSelected = false;
      this.btnWomanSelected = false;
      this.btnEveryoneSelected = true;
    },
    onClickContinueButton() {
      this.$router.push("/education");
    }
  },
  mounted() {
    if (
      this.$store.state.showMePreference.length === 1 &&
      this.$store.state.showMePreference[0] === "Man"
    ) {
      this.btnWomanSelected = false;
      this.btnEveryoneSelected = false;
      this.btnManSelected = true;
    } else if (
      this.$store.state.showMePreference.length === 1 &&
      this.$store.state.showMePreference[0] === "Woman"
    ) {
      this.btnManSelected = false;
      this.btnEveryoneSelected = false;
      this.btnWomanSelected = true;
    } else if (
      this.$store.state.showMePreference.length > 1 &&
      this.$store.state.showMePreference[0] === "Man" &&
      this.$store.state.showMePreference[1] === "Woman"
    ) {
      this.btnManSelected = false;
      this.btnWomanSelected = false;
      this.btnEveryoneSelected = true;
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
