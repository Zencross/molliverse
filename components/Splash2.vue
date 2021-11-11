<template>
  <div
    class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-between w-full h-full"
  >
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

    <nuxt-link
      to="login"
      class="flex flex-col items-center justify-center w-full"
    >
      <app-button
        buttonText="Sign in with Email"
        bgApple
        borderBlack
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
      <div class="mb-10 text-black underline karla-font">
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
    console.log("in fullscreen ?", document.fullscreenElement);
    console.log("Support fullscreen ?", document.fullscreenEnabled);
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
