<template>
  <div
    class="container absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-between"
  >
    <!-- <img src="../static/img/bliss2.svg" alt="Bliss" class="w-9/12 mt-24"> -->
    <img
      id="goFS"
      src="../static/img/mollie-white.png"
      alt="Bliss"
      class="w-7/12 mt-24"
    />

    <nuxt-link
      to="name"
      class="flex flex-col items-center justify-center w-full"
    >
      <app-button
        buttonText="Sign in with Apple"
        bgApple
        borderNone
        class="mb-4"
      />
      <app-button
        buttonText="Sign in with Facebook"
        bgFB
        textWhite
        borderNone
        class="mb-4"
      />
      <app-button
        buttonText="Sign in with Phone number"
        bgPhoneNum
        textWhite
        borderNone
        class="mb-10"
      />
      <div class="mb-10 text-white underline karla-font">
        Trouble Signing in?
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  components: { AppButton },
  data() {
    return {};
  },
  computed: {
    innerHeight() {
      return window.innerHeight;
    },
    innerWidth() {
      return window.innerWidth;
    }
  },
  mounted() {
    if (this.$ua.browser() === "Chrome") {
      var goFS = document.getElementById("goFS");
      goFS.addEventListener(
        "click",
        function() {
          console.log("go FS !!!!");
          document.body.requestFullscreen();
        },
        false
      );
    } else {
      alert("Not CHrome");
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
  background-image: url("../static/img/splash-image-purple.svg");
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
