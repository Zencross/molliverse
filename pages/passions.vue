<template>
  <div class="flex flex-col items-center disable-dbl-tap-zoom">
    <top-bar back skip @click="onClickBackButton" @skip="onClickSkipButton" />
    <div class="w-11/12 mt-6 mb-2 text-3xl text-dark">
      My interests are
    </div>
    <!-- <div
      class="w-11/12 text-sm montserrat-font text-lightgrey disable-dbl-tap-zoom"
    >
      Let everyone know what you’re passionate about, by adding it to your
      profile
    </div> -->
    <div
      class="w-11/12 mt-2 mb-4 overflow-scroll tag-container disable-dbl-tap-zoom"
    >
      <button
        v-for="tag in tags"
        :key="tag.id"
        class="px-2 py-1 my-2 mr-4 text-black border border-black rounded-full disable-dbl-tap-zoom"
        :class="[existInPassionsArr(tag) ? 'bg-black text-white' : '']"
        @click="onClickTag(tag)"
      >
        <div class="flex justify-between w-full disable-dbl-tap-zoom">
          <div>{{ tag.name }}</div>
          <!-- <img v-if="existInPassionsArr(tag)" src="../static/img/tick-purple-24px.svg" alt=""> -->
        </div>
      </button>
    </div>
    <div class="flex justify-start w-full px-4">
      <p class="text-sm text-lightgrey">Select up to 5 interests</p>
    </div>
    <!-- <button
      class="flex items-center justify-center w-11/12 px-3 py-4 text-white bg-black rounded-lg disable-dbl-tap-zoom"
      @click="onClickContinueButton"
    >
      <span class="disable-dbl-tap-zoom"
        >Next {{ numberOfPassionChosen }}/5</span
      >
    </button> -->
    <app-button
      buttonText="Next"
      textWhite
      bgBlack
      @click="onClickContinueButton"
      class="absolute bottom-0 mb-8"
    />
  </div>
</template>

<script>
import AppText from "~/components/AppText.vue";
import TopBar from "~/components/TopBar.vue";
export default {
  components: { AppText, TopBar },
  data() {
    return {
      tags: [
        { id: 0, name: "Fishing" },
        { id: 1, name: "Spirtuality" },
        { id: 2, name: "Shopping" },
        { id: 3, name: "Running" },
        { id: 4, name: "Dancing" },
        { id: 5, name: "Working out" },
        { id: 6, name: "Environmentalism" },
        { id: 7, name: "Politics" },
        { id: 8, name: "Foodie" },
        { id: 9, name: "Vlogging" },
        { id: 10, name: "Gardening" },
        { id: 11, name: "Gamer" },
        { id: 12, name: "Music" },
        { id: 13, name: "Coffee" },
        { id: 14, name: "Photography" },
        { id: 15, name: "Grab a drink" },
        { id: 16, name: "hiking" },
        { id: 17, name: "yoga" }
      ]
    };
  },
  computed: {
    numberOfPassionChosen() {
      return this.$store.state.passions.length;
    }
  },
  methods: {
    onClickBackButton() {
      this.$router.push("/education");
    },
    onClickSkipButton() {
      this.$router.push("/gallery");
    },
    onClickContinueButton() {
      this.$router.push("/gallery");
    },
    onClickTag(tag) {
      console.log("Clicked", tag.name);
      // append item in array, remove item if exist
      if (this.$store.state.passions.some(p => p.name === tag.name)) {
        this.$store.commit("removePassion", tag.name);
      } else if (this.$store.state.passions.length < 5) {
        this.$store.commit("addPassion", tag);
      }
    },
    existInPassionsArr(tag) {
      if (this.$store.state.passions.some(p => p.name === tag.name))
        return true;
      else return false;
    }
  }
};
</script>

<style>
.tag-container {
  max-height: 250px;
}

.button-gradient {
  background: linear-gradient(0.25turn, #632b75, 50%, #fd267d);
}

.disable-dbl-tap-zoom {
  touch-action: manipulation;
}
</style>
