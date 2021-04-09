<template>
  <div v-if="showWingMan" class="grid justify-items-stretch">
    <table
      class="container fixed bottom-0 w-full pt-2 mb-10 text-center bg-white"
    >
      <div class="heading">
        <h3>
          Looks like you guys want to play a game :) <br />
          Here are some game suggestions!
        </h3>
      </div>
      <tr class="grid grid-cols-2 gap-6 p-4 menu">
        <td
          class="self-center font-bold text-center text-white rounded-lg questionButton"
          :style="{ 'background-color': questionColor[index] }"
          v-for="(x, index) in noOfQuestions"
          :key="index"
        >
          <div :style="btnStyle">
            {{ questions[index] }}
          </div>
        </td>
      </tr>
    </table>

    <div class="ml-16">
      <button
        class="fixed bottom-0 left-0 w-full bg-white pr-52 noThanks no-focusborder"
        @click="showWingMan = false"
      >
        No thanks!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noOfQuestions: {
      type: Number,
      default: 4
    },
    questions: {
      type: Array,
      default: () => [
        "Would you rather",
        "Never have I ever",
        "Two truths & one lie",
        "20 Questions",
        "Yes or No"
      ]
    },
    questionsFont: {
      type: String,
      default: "Montserrat"
    },
    questionColor: {
      type: Array,
      default: () => ["green", "#632B75", "blue", "#FD267D"]
    }
  },
  data() {
    return {
      showWingMan: true
    };
  },
  computed: {
    btnStyle() {
      return {
        "font-family": this.questionsFont
      };
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.montserrat-font {
  font-family: "Montserrat", sans-serif;
}

.button-gradient {
  background: linear-gradient(0.25turn, #632b75, 50%, #fd267d);
}

.heading {
  margin: 1%;
  @media screen and (min-width: 768px) {
    bottom: 18%;
  }
  font-size: 4vw;
}

.menu {
  font-size: 3vw;
  line-height: 36px;
  @media screen and (min-width: 768px) {
    line-height: 54px;
  }
}

.questionButton {
  height: 2.5rem;
  @media screen and (min-width: 768px) {
    height: 4rem;
  }
}

.noThanks {
  font-size: 4vw;
  font-weight: lighter;
  text-decoration-line: underline;
  text-decoration-color: gray;
  line-height: 50px;
}

.no-focusborder:focus {
  outline-style: none;
}

.container {
  border-radius: 30px 30px;
  border-collapse: separate;
  box-shadow: inset 0px 5px 3px -4px gray;
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
