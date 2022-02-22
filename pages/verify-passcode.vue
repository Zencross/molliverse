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
      <!-- TODO:  Test Andriod compactabilty on webkit-text-security -->
      <input
        v-for="(passcode, index) in verifyPasscodes"
        :key="index"
        class="w-12 h-12 m-1 text-2xl text-center text-black bg-white rounded-md"
        :class="[verified==false ? 'error-animation' :'']"
        style="-webkit-text-security:disc;"  
        type="number"
        pattern="\d*"
        maxlength="1"
        name="passcode"
        id="passcode_1"
        v-model="passcode.val"
      ></input>
    </div>
  </div>
</template>

<script>
import SimpleTopBar from "~/components/SimpleTopBar.vue";
export default {
  components: { SimpleTopBar },
  data() {
    return {
      verifyPasscodes: [
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" }
      ],
      verified: null
    };
  },
  methods: {
    onInputPasscode(e) {
      
      console.log(`verifyPasscodes=${this.verifyPasscodes[0].val}${this.verifyPasscodes[1].val}${this.verifyPasscodes[2].val}${this.verifyPasscodes[3].val}${this.verifyPasscodes[4].val}${this.verifyPasscodes[5].val}`);      

      // console.log("event", e);
      var target = e.srcElement || e.target;
      var maxLength = parseInt(target.attributes["maxlength"].value, 10);
      // console.log("maxLength", maxLength);
      var myLength = target.value.length;
      if (myLength >= maxLength) {
        // console.log("myLength >= maxLength");
        var next = target;
        while ((next = next.nextElementSibling)) {
          // console.log("next object", typeof next);
          if (next == null) {
            break;
          }
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            // console.log("found next input");
            break;
          }
        }
       
        // Run when passcode is completed
        if (this.verifyPasscodes.every(passcode => passcode.val != "")) {
          console.log("Passcode is completed");
          if (
            JSON.stringify(this.verifyPasscodes) ==
            JSON.stringify(this.$store.state.completePasscode)
          ) {
            console.log("Verified");
            this.verified = true;
            this.$router.push("/verify-secretphrase");
          } else {
            console.log("Wrong");
            this.verified = false;
            this.verifyPasscodes=[
              { val: "" },
              { val: "" },
              { val: "" },
              { val: "" },
              { val: "" },
              { val: "" }
            ];
            document.getElementById("passcode_1").focus();
            setTimeout(() => {
              this.verified = null;
            }, 500);
            // this.verified = null;
          }
        } else {
          // console.log("Passcode not yet completed");
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
    },
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
