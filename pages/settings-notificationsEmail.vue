<template>
    <div>
                <!-- Top Bar -->
        <div class="w-full border border-t-0 border-b-1 pt-6 pb-4 flex">
       
        <div @click="onClickSettings" class="lato-font font-semibold text-xl text-purple-700 w-1/3 pl-4"> 
         <span class="font-extrabold"><</span>
            Settings 
        </div>
         <div class=" text-xl font-bold lato-font pl-10">
            Email
        </div>
        </div>

        <div class="pt-8 pb-2 pl-4 text-sm font-medium lato-font bg-gray-100 border text-gray-700">
            EMAIL
        </div>

        <div class="text-lg font-medium lato-font">

            <div class="pb-4 pt-3 pl-4 border-b-2 flex">
            <div class="flex-1">siena.l852@gmail.com </div>
            <div class="pr-4 text-purple-700">✓</div>
            </div>
        </div>
        <div class= "bg-gray-100 pt-2 pb-6 pl-4 border-b-2 text-sm text-gray-700 font-thin lato-font">
            Your email is verified
        </div>
        
        <div class="text-lg font-normal text-gray-700 lato-font">
            <div class="pb-4 pt-3 border-b-2 text-center">
            <div class="">Send email verification </div>
            </div>
        </div>

        <div class="h-screen font-medium lato-font bg-gray-100 pt-10"> 
            <div class="flex border-b-2 bg-white border-t-2">
                <div class="pl-4 pt-4 pb-4 flex-1">New matches</div>
                <div class="pr-4 pt-2">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>
            <div class="flex border-b-2 bg-white">
                <div class="pl-4 pt-4 pb-4 flex-1">New messages</div>
                <div class="pr-4 pt-2">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>
              <div class="flex border-b-2 bg-white">
                <div class="pl-4 pt-4 pb-4 flex-1">Promotions</div>
                <div class="pr-4 pt-2">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
            </div>  
            <div class= "bg-gray-100 pt-2 pb-4 pl-4 text-xxs text-gray-700 font-thin lato-font">
                Control all the emails you want to receive - all of them, just the important stuff or the
                bare minimum. You can always unsubscribe at the bottom of any email.
            </div> 
            <div class="text-lg font-normal bg-white border lato-font">
                <div class="pb-4 pt-3 text-center">
                <div class="">Subscribe to all </div>
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