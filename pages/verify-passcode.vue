<template>
  <div class="min-h-screen pt-8 -mt-8 text-white bg-black">
    <SimpleTopBar
      :title="'Confirm Passcode'"
      :backLink="'/create-passcode'"
      :darkMode="true"
    />
    <div class="w-full px-6 mt-20">Complete - show</div>
    <!-- Passcode widget -->
    <div class="flex w-full pl-6 mt-2" @keyup="onInputPasscode">
      <input
        class="w-12 h-12 m-1 text-2xl text-center text-black bg-white rounded-md"
        :class="[verified == false ? 'error-animation' : '']"
        type="tel"
        maxlength="1"
        name="passcode"
        id="passcode_1"
        v-model="passcodeDigit1"
      />
      <input
        class="w-12 h-12 m-1 text-2xl text-center text-black bg-white rounded-md"
        :class="[verified == false ? 'error-animation' : '']"
        type="tel"
        maxlength="1"
        name="passcode"
        id="passcode_2"
        v-model="passcodeDigit2"
      />
      <input
        class="w-12 h-12 m-1 text-2xl text-center text-black bg-white rounded-md"
        :class="[verified == false ? 'error-animation' : '']"
        type="tel"
        maxlength="1"
        name="passcode"
        id="passcode_3"
        v-model="passcodeDigit3"
      />
      <input
        class="w-12 h-12 m-1 text-2xl text-center text-black bg-white rounded-md"
        :class="[verified == false ? 'error-animation' : '']"
        type="tel"
        maxlength="1"
        name="passcode"
        id="passcode_4"
        v-model="passcodeDigit4"
      />
      <input
        class="w-12 h-12 m-1 text-2xl text-center text-black bg-white rounded-md"
        :class="[verified == false ? 'error-animation' : '']"
        type="tel"
        maxlength="1"
        name="passcode"
        id="passcode_5"
        v-model="passcodeDigit5"
      />
      <input
        class="w-12 h-12 m-1 text-2xl text-center text-black bg-white rounded-md"
        :class="[verified == false ? 'error-animation' : '']"
        type="tel"
        maxlength="1"
        name="passcode"
        id="passcode_6"
        v-model="passcodeDigit6"
      />
    </div>
  </div>
</template>

<script>
import SimpleTopBar from "~/components/SimpleTopBar.vue";
export default {
  components: { SimpleTopBar },
  data() {
    return {
      passcodeDigit1: null,
      passcodeDigit2: null,
      passcodeDigit3: null,
      passcodeDigit4: null,
      passcodeDigit5: null,
      passcodeDigit6: null,
      verifyPasscode: [],
      verified: null
    };
  },
  methods: {
    onInputPasscode(e) {
      console.log(this.passcodeDigit1);
      console.log(this.passcodeDigit2);
      console.log(this.passcodeDigit3);
      console.log(this.passcodeDigit4);
      console.log(this.passcodeDigit5);
      console.log(this.passcodeDigit6);

      console.log("event", e);
      var target = e.srcElement || e.target;
      var maxLength = parseInt(target.attributes["maxlength"].value, 10);
      console.log("maxLength", maxLength);
      var myLength = target.value.length;
      if (myLength >= maxLength) {
        console.log("myLength >= maxLength");
        var next = target;
        while ((next = next.nextElementSibling)) {
          console.log("next object", typeof next);
          if (next == null) {
            break;
          }
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            console.log("found next input");
            break;
          }
        }
        console.log("Check passcode");
        if (
          this.passcodeDigit1 &&
          this.passcodeDigit2 &&
          this.passcodeDigit3 &&
          this.passcodeDigit4 &&
          this.passcodeDigit5 &&
          this.passcodeDigit6
        ) {
          this.verifyPasscode = [
            this.passcodeDigit1,
            this.passcodeDigit2,
            this.passcodeDigit3,
            this.passcodeDigit4,
            this.passcodeDigit5,
            this.passcodeDigit6
          ];
          console.log("verifyPasscode array", this.verifyPasscode);
          if (
            JSON.stringify(this.verifyPasscode) ==
            JSON.stringify(this.$store.state.completePasscode)
          ) {
            console.log("Verified");
            this.verified = true;
            this.$router.push("/verify-secretphrase");
          } else {
            console.log("Wrong");
            this.verified = false;
            this.passcodeDigit1 = null;
            this.passcodeDigit2 = null;
            this.passcodeDigit3 = null;
            this.passcodeDigit4 = null;
            this.passcodeDigit5 = null;
            this.passcodeDigit6 = null;
            document.getElementById("passcode_1").focus();
            setTimeout(() => {
              this.verified = null;
            }, 500);
            // this.verified = null;
          }
        }
      }
      // Move to previous field if empty (user pressed backspace)
      else if (myLength === 0) {
        var previous = target;
        while ((previous = previous.previousElementSibling)) {
          if (previous == null) break;
          if (previous.tagName.toLowerCase() === "input") {
            previous.focus();
            break;
          }
        }
      }
    }
  },
  mounted() {
    document.getElementById("passcode_1").focus();
  }
};
</script>

<style>
.error-animation {
  animation: shake 0.5s;
  box-shadow: 0 0 0.5em red;
}

@keyframes shake {
  /* 0% {
    margin-left: 0rem;
  }
  25% {
    margin-left: 0.25rem;
  }
  75% {
    margin-left: -0.25rem;
  }
  100% {
    margin-left: 0rem;
  } */
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
