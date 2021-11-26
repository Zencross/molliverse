<template>
  <div>
    <top-bar back @click="onClickBackButton" />
    <!-- <input-field
      labelText="My Birthday is"
      v-model="birthday"
      placeHolder="MM/DD/YYYY"
      hint="Your Age will be public"
      class="mt-10"
    ></input-field> -->

    <div class="w-full mt-10 bg-transparent">
      <div class="flex flex-col items-center w-full">
        <label for="input" class="w-11/12 mb-4 text-3xl text-dark">
          My birthday is</label
        >
        <datepicker
          class="w-11/12 mx-4 text-lg border border-gray-300 rounded-md bg-lightgrey input-color focus:outline-none"
          v-model="birthday"
          placeholder="Enter your birthday"
          input-class="w-full px-4 py-3 outline-none bg-lightgrey"
        ></datepicker>
        <div class="w-11/12 mt-3 text-sm text-lightgrey">
          Your Age will be public
        </div>
      </div>
    </div>

    <app-button
      buttonText="Next"
      textWhite
      bgBlack
      @click="onClickButton"
      class="absolute bottom-0 mb-8"
    />
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import InputField from "../components/InputField";
import AppButton from "~/components/AppButton.vue";
import Datepicker from "vuejs-datepicker";

export default {
  components: { TopBar, InputField, AppButton, Datepicker },
  data() {
    return {
      dateObject: new Date(2021, 3, 3)
    };
  },
  computed: {
    birthday: {
      get() {
        return this.$store.state.birthday;
      },
      set(value) {
        this.$store.commit("setBirthday", value);
      }
    }
  },
  methods: {
    onClickBackButton() {
      this.$router.push("/name");
    },
    onClickButton() {
      this.$router.push("/gender");
    }
  }
};
</script>

<style></style>
