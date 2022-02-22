<template>
  <div class="min-h-screen bg-gray-100">
    <SimpleTopBar :title="'Secret Phrase'" :backLink="'/verify-passcode'" />
    <p class="w-full p-5 mt-2 text-justify">
      Please choose Secret Phrase in order and make sure your Secret Phrase was
      correctly written. Once forgotten, it cannot be recovered.
    </p>

    <div class="flex flex-col items-center w-full">
      <!-- Input Window -->
      <div
        class="flex flex-wrap w-11/12 h-32 px-2 border border-black rounded-md"
        :class="[verified == false ? 'error-animation' : '']"
      >
        <div
          v-for="answer in secretPhrasesUserAnswer"
          :key="answer.id"
          class="p-2"
        >
          {{ answer.value }}
        </div>
      </div>

      <!-- Secret Phrases Options -->
      <div class="flex flex-wrap w-11/12 mt-2">
        <div
          v-for="option in secretPhrasesRandomizedOptions"
          :key="option.id"
          class="px-4 py-2 mt-1 mr-1 bg-white border rounded-full"
          :class="[
            secretPhrasesUserAnswer.find(answer => answer.value == option.value)
              ? 'opacity-50'
              : ''
          ]"
          @click="onClickOption(option)"
        >
          {{ option.value }}
        </div>
      </div>
    </div>

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
    <SimpleBottomBar
      :title="'Confirm'"
      @buttonClick="onClickButton"
      :validation="true"
      :validationState="verified"
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
      secretPhrasesRandomizedOptions: this.$store.state.secretPhrases,
      secretPhrasesUserAnswer: [],
      verified: null
    };
  },
  methods: {
    onClickButton() {
      if (this.verified) {
        this.$router.push("/create-wallet-successful");
      } else {
      }
    },
    onClickOption(option) {
      console.log("clicked option: ", option);

      if (
        this.secretPhrasesUserAnswer.find(
          answer => answer.value == option.value
        )
      ) {
        // remove from answer array
        this.secretPhrasesUserAnswer = this.secretPhrasesUserAnswer.filter(
          answer => answer.value != option.value
        );
      } else if (this.secretPhrasesUserAnswer.length < 12) {
        // push to answer array
        this.secretPhrasesUserAnswer.push(option);
      }
      console.log(
        "New secretPhrasesUserAnswer array",
        this.secretPhrasesUserAnswer
      );

      if (this.secretPhrasesUserAnswer.length == 12) {
        if (
          JSON.stringify(this.secretPhrasesUserAnswer) ==
          JSON.stringify(this.secretPhrasesRandomizedOptions)
        ) {
          console.log("Secret Phrase Order is Correct!");
          this.verified = true;
        } else {
          console.log("Secret Phrase Order is Wrong!");
          this.verified = false;
          setTimeout(() => {
            this.verified = null;
          }, 1000);
        }
      }
    }
  },
  mounted() {}
};
</script>

<style>
#secretPhases {
  height: 280px;
}

.error-animation {
  animation: shake 0.5s;
  box-shadow: 0 0 0.5em red;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
