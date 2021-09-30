<template>
    <div>
            <!-- Top Bar -->
        <div class="w-full border border-t-0 border-b-1 pt-6 pb-4 flex">
       
        <div @click="onClickSettings" class="lato-font font-semibold text-xl text-purple-700 w-1/3 pl-4"> 
         <span class="font-extrabold"><</span>
            Settings 
        </div>
         <div class=" text-xl font-bold lato-font w-2/3 pl-1">
            Phone number
        </div>
        </div>

        <div class="pt-8 pb-2 pl-4 text-sm font-medium lato-font bg-gray-100 border text-gray-700">
            PHONE NUMBER
        </div>

        <form @submit="onSubmit"> 
            <div class="text-lg font-medium lato-font">

                <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                    <!-- <div class="flex-1">+852 97489993 </div> -->
                    <div class="">
                        <input :value="phoneNumber" placeholder="phone number" type="text" class="flex-1">
                    </div>
                    <!-- <div class="pl-40 submit">
                        <input type="submit" value="✓" class=" text-purple-700 bg-white" >
                    </div> -->
                    <!-- <div class="pr-4 text-purple-700" @click="onClickPhoneNumber">✓</div> -->
                    
                </div>
            </div>
            <div class= "bg-gray-100 pt-2 pb-8 pl-4 border-b-2 text-sm text-gray-700 font-thin lato-font">
                Verified phone number 
            </div>
            
            <div class="text-xl font-bold text-purple-700 lato-font">
                <div class="pb-4 pt-3 border-b-2 text-center">
                <input type="submit"  value="Update my phone number " class="bg-white font-bold" >
                </div>
            </div>
    <!-- </div> -->
        <!-- <div class="h-screen  bg-gray-100"> </div> -->

     </form>   
    </div>
     
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

    export default {
        // data() {
        //     return {
        //         phoneNumber: ""
        //     }
        // },
        methods: {
            onClickSettings() {
                this.$router.push("/settings");
            },
            onSubmit(value) {
                this.$store.commit("setPhoneNumber",value);
                console.log(phoneNumber);
                // this.$router.push('/settings')
            },
            ...mapActions(['setPhoneNumber'])
        },
        computed: {
            phoneNumber: {
                get() {
                    return this.$store.state.phoneNumber;
                },
                // set(value) {
                //     this.$store.commit("setPhoneNumber", value);
                // }
            },
            // ...mapGetters(['setPhoneNumber'])
        }
    }

</script>

<style>

</style>
