<template>
    <div>
           <!-- Top Bar -->
        <div class="w-full border border-t-0 border-b-1 pt-6 pb-4 flex">
            <div @click="onClickSettings" class="lato-font font-semibold text-xl text-purple-700 w-1/3 pl-4"> 
            <span class="font-extrabold"><</span>
                Settings 
            </div>
            <div class=" text-xl font-bold lato-font pl-8">
                Location
            </div>
        </div>

        <div class="pt-8 pb-2 pl-4 text-sm font-medium lato-font bg-gray-100 border text-gray-700">
            CURRENT LOCATION
        </div>

        <div class="text-lg font-medium lato-font">

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">My current location </div>
                <div class="pr-4 text-purple-700">✓</div>
              </div>
        </div>
        <div class= "bg-gray-100 pt-2 pb-8 pl-4 border-b-2 text-sm text-gray-700 font-thin lato-font">
            Sai Wan, (null)
        </div>
        
        <div class="text-xl font-semibold text-purple-700 lato-font">
            <div class="pb-4 pt-3 border-b-2 text-center">
            <div class="">Add a new location</div>
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