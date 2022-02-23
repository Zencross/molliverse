<template>
  <div class="min-h-screen pt-8 -mt-8 text-white bg-black">
    <SimpleTopBar
      :title="'Create Passcode'"
      :backLink="'/create-wallet'"
      :darkMode="true"
    />
    <div class="w-full px-6 mt-20">Complete - show</div>
    <!-- Passcode widget -->
    <div class="flex w-full pl-6 mt-2" @keyup="onInputPasscode">
      <!-- TODO:  Test Andriod compactabilty on webkit-text-security -->
      <input
        v-for="(passcode, index) in passcodes"
        :key="index"
        class="w-12 h-12 m-1 text-2xl text-center text-black bg-white rounded-md"
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
      passcodes: [
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" }
      ],
    };
  },
  methods: {
    onInputPasscode(e) {
      
      console.log(`passcodes=${this.passcodes[0].val}${this.passcodes[1].val}${this.passcodes[2].val}${this.passcodes[3].val}${this.passcodes[4].val}${this.passcodes[5].val}`);      

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
        if (this.passcodes.every(passcode => passcode.val != "")) {
          console.log("Passcode is completed");
          this.$store.commit("setCompletePasscode", this.passcodes);
          this.$router.push("/verify-passcode");
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
    }
  },
  mounted() {
    document.getElementById("passcode_1").focus();
  }
};
</script>

<style></style>
