<template>
  <div>
    <!-- Top Bar -->
    <div
      class="flex items-center justify-between w-full pt-2 pb-2 border border-b-1"
    >
      <img
        src="/img/arrow-back-24px.svg"
        class="pl-4"
        alt=""
        @click="onClickBack"
      />
      <div class="flex items-center ml-6">
        <img :src="messageTargetAvatar" alt="" class="w-2/12 rounded-full" />
        <div class="ml-2 text-lg font-semibold lato-font">
          {{ messageTargetName }}
        </div>
      </div>
      <div class="flex items-center justify-around mr-6">
        <img src="/img/video-call.svg" class="mr-2" alt="" />
        <img src="/img/phone-call.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          id: 1,
          by: {
            id: 1,
            name: "Michelle"
          },
          content: "Hey there! I'm Michelle, Nice to meet you! xx",
          timestamp: `2021-02-21T14:01:05.000Z`
        }
      ]
    };
  },
  computed: {
    messageTargetAvatar() {
      return this.$store.state.messageTargetAvatar;
    },
    messageTargetName() {
      return this.$store.state.messageTargetName;
    }
  },
  methods: {
    onClickBack() {
      this.$router.push("/messages");
    }
  },
  mounted() {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.lato-font {
  font-family: "Lato", sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 300ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
