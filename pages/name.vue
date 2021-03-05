<template>
  <div class="flex flex-col">
    <top-bar close @click="onClickBackButton" />
    <input-field
      labelText="My first name is"
      v-model="firstName"
      placeHolder="Enter your first name"
      hint="This is how it would appear in Bliss"
      class="mt-10"
      :validateError="userExists"
      @input="onInputFirstName"
    >
    </input-field>
    <div v-if="userExists" class="ml-4 text-sm text-red-500 lato-font">
      Username is taken
    </div>
    <app-button
      buttonText="Continue"
      textWhite
      bgPhoneNum
      @click="onClickButton"
      class="absolute bottom-0 mb-8"
      :disabled="userExists || !firstName"
    />
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import InputField from "../components/InputField";
import AppButton from "~/components/AppButton.vue";
import gql from "graphql-tag";

export default {
  components: { TopBar, InputField, AppButton },
  data() {
    return {
      userExists: false
    };
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.firstName;
      },
      set(value) {
        this.$store.commit("setFirstName", value);
      }
    }
  },
  methods: {
    onInputFirstName(value) {
      console.log("onInputFirstName", value);
      this.getUser(value);
    },
    onClickBackButton() {
      this.$router.push("/");
    },
    onClickButton() {
      //  Query getUser to check if username exists

      this.$router.push("/birthday");
    },
    // validate(userObject) {
    //   if (userObject) {
    //     this.userExists = true;
    //   } else {
    //     this.userExists = false;
    //   }
    // },
    async getUser(nickname) {
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
            nickname
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
  },
  mounted() {
    this.getUser(this.$store.state.firstName);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.lato-font {
  font-family: "Lato", sans-serif;
}
</style>
