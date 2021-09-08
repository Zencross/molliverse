<template>
     <div>
            <!-- Top Bar -->
        <div class="w-full border border-t-0 border-b-1 pt-6 pb-4 flex">
       
        <div @click="onClickSettings" class="lato-font font-semibold text-xl text-purple-700 w-1/3 pl-4"> 
         <span class="font-extrabold"><</span>
            Settings 
        </div>
         <div class=" text-xl font-bold lato-font w-2/3 pl-1">
            Connected accounts
        </div>
        </div>

        <div class="pt-8 pb-2 pl-4 text-sm font-medium lato-font bg-gray-100 border text-gray-700">
            SIGN IN QUICKER BY LINKING YOUR ACCOUNT
        </div>

        <div class="text-lg font-medium lato-font">
             <div class="flex border-b-2">
                <div class="pl-4 pt-4 pb-4 flex-1">Sign in with Apple</div>
                <div class="pr-4 pt-4">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
               <div class="flex border-b-2">
                <div class="pl-4 pt-4 pb-4 flex-1">Sign in with Facebook</div>
                <div class="pr-4 pt-4">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
        </div>

        <div class="h-screen  bg-gray-100"> </div>
        
     </div> 
</template>

<script>
    export default {
        methods: {
            onClickSettings() {
                this.$router.push("/settings");
            }
        }
    }

</script>

<style>

    /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 54px;
    height: 30.6px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 23.4px;
    width: 23.4px;
    left: 3.6px;
    bottom: 3.6px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 30.6px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

</style>
