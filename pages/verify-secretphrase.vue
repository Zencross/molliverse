<template>
  <div class="min-h-screen">
    <SimpleTopBar :title="'Secret Phrase'" :backLink="'/user-profile'" />
    <p class="w-full p-5 mt-2 text-justify">
      Please choose Secret Phrase in order and make sure your Secret Phrase was
      correctly written. Once forgotten, it cannot be recovered.
    </p>

    <!-- Secret Phases -->
    <!-- <ul
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
    </ul> -->

    <!-- Sticky Bottom Bar -->
    <SimpleBottomBar :title="'Confirm'" @buttonClick="onClickButton" />
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
      // this.$router.push("/create-passcode");
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
