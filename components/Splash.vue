<template>
    <div class="container absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
        <img src="../static/img/bliss.svg" alt="Bliss" class="mb-16">
        <nuxt-link to="email" class="w-full">
          <social-login-btn buttonText="Sign in with Apple" class="mb-8" />
          <social-login-btn buttonText="Sign in with Facebook" class="mb-8"/>
          <social-login-btn buttonText="Sign in with Phone number" class="mb-10" />
        </nuxt-link>
        <div class="text-white underline karla-font">Trouble Signing in</div>
    </div>
</template>

<script>
import SocialLoginBtn from './SocialLoginBtn.vue';
export default {
    components:{ SocialLoginBtn },
    data() {
        return {
            
        }
    },
    computed:{
      innerHeight() {
        return window.innerHeight;
      },
      innerWidth() {
        return window.innerWidth;
      },
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap');

.karla-font{
    font-family: 'Karla', sans-serif;
}

.container {
    background-image: url('../static/img/splash-image-purple.svg');
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