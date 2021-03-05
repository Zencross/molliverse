<template>
  <div class="flex justify-center w-full">
    <button
      class="flex items-center w-11/12 px-3 py-4 bg-transparent border rounded-lg focus:outline-none lato-font"
      :class="[
        borderBlack ? 'border-black' : '',
        borderWhite ? 'border-white' : '',
        borderNone ? 'border-transparent' : '',
        textBlack ? 'text-black' : '',
        textWhite ? 'text-white' : '',
        rightArrow ? 'justify-between' : 'justify-center',
        activeEffect ? 'focus:bg-gray-300 hover:bg-gray-300' : '',
        bgApple ? 'bg-white' : '',
        bgFB ? 'bg-FB' : '',
        bgPhoneNum ? 'bg-brandPurple' : '',
        fontBold ? 'font-semibold' : '',
        disabled ? 'opacity-50' : '',
        selected ? 'bg-selected text-white' : ''
      ]"
      @click="onClickButton"
      :disabled="disabled"
    >
      <div v-if="rightArrow" class="w-4 h-4" />
      <span class="text-base">{{ buttonText }}</span>
      <img
        v-if="rightArrow"
        src="../static/img/arrow-forward-24px.svg"
        class="w-4 h-4"
        alt=""
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Button Text"
    },
    borderBlack: {
      type: Boolean
    },
    borderWhite: {
      type: Boolean
    },
    textBlack: {
      type: Boolean
    },
    textWhite: {
      type: Boolean
    },
    rightArrow: {
      type: Boolean
    },
    activeEffect: {
      type: Boolean
    },
    bgApple: {
      type: Boolean
    },
    bgFB: {
      type: Boolean
    },
    bgPhoneNum: {
      type: Boolean
    },
    borderNone: {
      type: Boolean
    },
    fontBold: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onClickButton() {
      this.$emit("click");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.lato-font {
  font-family: "Lato", sans-serif;
}

.karla-font {
  font-family: "Karla", sans-serif;
}
</style>
