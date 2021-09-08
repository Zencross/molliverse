<template>
    <div>
                <!-- Top Bar -->
        <div class="w-full border border-t-0 border-b-1 pt-6 pb-4 flex">
       
        <div @click="onClickSettings" class="lato-font font-semibold text-xl text-purple-700 w-1/3 pl-4"> 
         <span class="font-extrabold"><</span>
            Settings 
        </div>
         <div class=" text-xl font-bold lato-font">
            Push notifications
        </div>
        </div>

        <div class="h-screen font-medium lato-font bg-gray-100 pt-10"> 
            <div class="flex border-b-2 bg-white border-t-2">
                <div class="pl-4 pt-3 pb-3 flex-1">
                    New matches
                    <br> <p class="text-xs text-gray-700 font-thin leading-4">You just got a new match.</p>
                </div>
                <div class="pr-4 pt-4">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>
            <div class="flex border-b-2 bg-white">
                <div class="pl-4 pt-3 pb-3  flex-1">
                    Messages
                    <br> <p class="text-xs text-gray-700 font-thin leading-4">Someone sent you a new message.</p>
                </div>
                <div class="pr-4 pt-4">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>
            <div class="flex border-b-2 bg-white">
                <div class="pl-4 pt-3 pb-3  flex-1">
                    Message likes
                    <br> <p class="text-xs text-gray-700 font-thin leading-4">Someone liked your message.</p>
                </div>
                <div class="pr-4 pt-4">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>  
            <div class="flex border-b-2 bg-white">
                <div class="pl-4 pt-3 pb-3  flex-1">
                    Holly Mollie
                    <br> <p class="text-xs text-gray-700 font-thin leading-4">You've been Super Liked.</p>
                </div>
                <div class="pr-4 pt-4">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>  
            <div class="flex border-b-2 bg-white">
                <div class="pl-4 pt-3 pb-3  flex-1">
                    Top Picks
                    <br> <p class="text-xs text-gray-700 font-thin leading-4">Your daily Top Picks are ready!</p>
                </div>
                <div class="pr-4 pt-4">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>  
            <div class="flex border-b-2 bg-white">
                <div class="pl-4 pt-3 pb-3  flex-1">In-app vibrations</div>
                <div class="pr-4 pt-2">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>  
            <div class="flex border-b-2 bg-white">
                <div class="pl-4 pt-3 pb-3  flex-1">In-app sounds</div>
                <div class="pr-4 pt-2">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>  
        </div>

        
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

</style>