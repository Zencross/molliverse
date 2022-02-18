<template>
  <div class="min-h-screen">
    <SimpleTopBar :title="'Create your Wallet'" :backLink="'/user-profile'" />
    <p class="w-full p-5 mt-2 text-justify">
      Don't risk losing your funds. Protect your wallet by saving your Secret
      Phrase in a place you trust.
      <span class="font-bold"
        >It's the only way to recover your wallet if you get locked out of the
        app or get a new device.</span
      >
    </p>

    <!-- Secret Phases -->
    <ul
      id="secretPhases"
      class="flex flex-col flex-wrap content-start w-full p-5 text-lg"
    >
      <li
        class="w-1/2 py-1"
        v-for="secretPhase in secretPhases"
        :key="secretPhase.id"
      >
        {{ secretPhase.id }}. {{ secretPhase.value }}
      </li>
    </ul>

    <!-- Sticky Bottom Bar -->
    <SimpleBottomBar
      :title="'I have written them down!'"
      @buttonClick="onClickButton"
    />
  </div>
</template>

<script>
import SimpleTopBar from "~/components/SimpleTopBar.vue";
import SimpleBottomBar from "~/components/SimpleBottomBar.vue";
export default {
  components: { SimpleTopBar, SimpleBottomBar },
  data() {
    return {
      secretPhases: this.$store.state.secretPhases
    };
  },
  methods: {
    onClickButton() {
      this.$router.push("/passcode");
    }
  },
  mounted() {}
};
</script>

<style>
#secretPhases {
  height: 280px;
}
</style>
