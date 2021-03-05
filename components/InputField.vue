<template>
  <div class="w-full bg-transparent lato-font">
    <div class="flex flex-col items-center w-full">
      <label
        for="input"
        class="w-11/12 mb-4 text-3xl font-semibold text-dark"
        >{{ labelText }}</label
      >
      <input
        id="input"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :type="inputType"
        class="w-11/12 py-3 pl-4 text-lg border border-gray-300 rounded-md bg-lightgrey input-color focus:outline-none"
        :class="[validateError ? 'border-red-500 text-red-500' : '']"
        :placeholder="placeHolder"
      />
      <div class="w-11/12 mt-3 text-sm text-lightgrey">{{ hint }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    labelText: {
      type: String,
      default: "Label Text"
    },
    placeHolder: {
      type: String,
      default: "PlaceHolder"
    },
    hint: {
      type: String,
      default: "hint"
    },
    inputType: {
      type: String,
      default: "text"
    },
    textArea: {
      type: Boolean,
      default: false
    },
    validateError: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.lato-font {
  font-family: "Lato", sans-serif;
}

.montserrat-font {
  font-family: "Montserrat", sans-serif;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: red;
}

.label-color {
  color: #796b6b;
}

.hint-color {
  color: #796b6b;
}
</style>
