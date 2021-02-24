<template>
  <div>
    <top-bar back @click="onClickBackButton" />
    <input-field
      labelText="My Birthday is"
      v-model="birthday"
      placeHolder="MM/DD/YYYY"
      hint="Your Age will be public"
      class="mt-10"
    ></input-field>
    <app-button
      buttonText="Continue"
      textWhite
      bgPhoneNum
      @click="onClickButton"
      class="absolute bottom-0 mb-8"
    />
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import InputField from "../components/InputField";
import AppButton from "~/components/AppButton.vue";

export default {
  components: { TopBar, InputField, AppButton },
  data() {
    return {};
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
