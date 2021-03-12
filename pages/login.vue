<template>
  <div
    class="container absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center"
  >
    <!-- <img src="../static/img/bliss2.svg" alt="Bliss" class="w-9/12 mt-24"> -->
    <img
      src="../static/img/mollie-white.png"
      alt="Bliss"
      class="w-7/12 mt-24"
    />
    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
    <div class="flex flex-col items-center w-9/12 mt-16">
      <label for="location" class="block font-medium text-white"
        >Sign in as:</label
      >
      <select
        name="location"
        class="block w-full py-3 pl-3 pr-10 mt-1 text-base bg-white border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        v-model="userSelected"
        @change="onSelectInput"
      >
        <option
          v-for="user in users"
          :key="user.nickname"
          :value="user.nickname"
          >{{ user.nickname }}</option
        >
      </select>
      <app-button
        buttonText="Sign in"
        bgPhoneNum
        textWhite
        borderNone
        class="mt-6"
        @click="onClickSignIn"
      />
      <nuxt-link
        to="name"
        class="mt-4 text-white underline karla-font focus:outline-none"
      >
        Create a new profile
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppButton from "../components/AppButton";
import gql from "graphql-tag";

export default {
  components: { AppButton },
  data() {
    return {
      users: [],
      userSelected: ""
    };
  },
  methods: {
    onSelectInput() {
      console.log(this.userSelected);
    },
    async onClickSignIn() {
      //call getUser using userSelected as variable
      console.log(`Sign in as ${this.userSelected}`);
      try {
        const results = await this.$apollo.query({
          query: gql`
            query($nickname: String!) {
              getUser(nickname: $nickname) {
                name
                nickname
                age
                gender
                location {
                  longitude
                  latitude
                }
                passions {
                  name
                }
                phoneNumber
                email
                university
                media {
                  index
                  type
                  url
                }
                isGenderPublic
                isOrientationPublic
                orientation
                showGender
              }
            }
          `,
          variables: {
            nickname: this.userSelected
          }
        });
        console.log("getUser results:", results.data.getUser);
        //store user object in vuex (simulate login)
        this.$store.commit("setUser", results.data.getUser);
      } catch (error) {
        console.error(error);
      }
      //go to user-profile page
      this.$router.push("/user-profile");
    }
  },
  computed: {
    innerHeight() {
      return window.innerHeight;
    },
    innerWidth() {
      return window.innerWidth;
    }
  },
  async mounted() {
    console.log("in fullscreen ?", document.fullscreenElement);
    console.log("Support fullscreen ?", document.fullscreenEnabled);

    //fetch all users by queryUser
    try {
      const results = await this.$apollo.query({
        query: gql`
          query {
            queryUser {
              nickname
            }
          }
        `
      });
      console.log("queryUser results:", results.data.queryUser);
      this.users = results.data.queryUser;
      this.userSelected = this.users[0].nickname;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");

.karla-font {
  font-family: "Karla", sans-serif;
}

.container {
  background-image: url("../static/img/splash-image-dark-purple-3x.jpeg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

/* .page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 300ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
} */
</style>
