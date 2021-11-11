<template>
  <div
    class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center w-full"
  >
    <!-- <img src="../static/img/bliss2.svg" alt="Bliss" class="w-9/12 mt-24"> -->
    <img
      src="/img/bliss_new_splash_image_short.png"
      alt="Bliss"
      class="w-full"
    />

    <div class="flex flex-col items-center justify-center w-full my-8">
      <img
        id="goFS"
        src="../static/img/mollie-color.png"
        alt="Bliss"
        class="w-1/4 mb-2"
      />

      <p class="font-medium">Where two minds make a connection</p>
    </div>

    <div class="flex flex-col items-center w-9/12">
      <label for="location" class="block font-medium text-black"
        >Sign in as:</label
      >
      <select
        name="location"
        class="block w-full py-3 pl-3 pr-10 mt-1 text-base bg-white border border-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

      <div
        @click="onClickCreateNewProfile"
        class="mt-4 text-black underline karla-font focus:outline-none"
      >
        Create a new profile
      </div>
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
                channels {
                  createdAt
                  messages {
                    by {
                      nickname
                    }
                    in {
                      name
                    }
                    content
                    timestamp
                  }
                  name
                  users {
                    nickname
                    media {
                      index
                      type
                      url
                    }
                  }
                }
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
        this.$store.commit("setChannels", results.data.getUser.channels);
      } catch (error) {
        console.error(error);
      }
      //go to user-profile page
      this.$router.push("/user-profile");
    },
    onClickCreateNewProfile() {
      this.$router.replace("/name");
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
