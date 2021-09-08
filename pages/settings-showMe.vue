<template>
    <div>
                 <!-- Top Bar -->
        <div class="w-full border border-t-0 border-b-1 pt-6 pb-4 flex">
       
        <div @click="onClickSettings" class="lato-font font-semibold text-xl text-purple-700 w-1/3 pl-4"> 
         <span class="font-extrabold"><</span>
            Settings 
        </div>

          <div class=" text-xl font-bold lato-font pl-10">
            Show me
        </div>
        </div>

        <div class="pt-8 pb-2 pl-4 text-sm font-medium lato-font bg-gray-100 border text-gray-700">
            SHOW ME
        </div>

        <!-- <div class="control-group">

          <label class="control control--checkbox">Women
            <input type="checkbox" checked="checked"/>
            <div class="control__indicator"></div>
          </label>

          <label class="control control--checkbox">Men
            <input type="checkbox"/>
            <div class="control__indicator"></div>
          </label>

          <label class="control control--checkbox">Everyone
            <input type="checkbox"/>
            <div class="control__indicator"></div>
          </label>
      
        </div> -->

        <!-- <label for="Women">male</label>
        <input type="radio" id="Women" value="Women" v-model="picked">
        <br>
        <label for="Men">female</label>
        <input type="radio" id="Men" value="Men" v-model="picked">
        <br>
        <label for="Everyone">Everyone</label>
        <input type="radio" id="Everyone" value="Everyone" v-model="picked">
        <br>
        <span>Picked: {{ picked }}</span> -->

     <v-radio-group class="column text-base font-medium lato-font">
        <div class="rowX border-b-2 border-gray-200 pt-2 pb-3 pl-4">    
            <label for="Women">Women</label>
            <input type="radio" id="Women" value="Women" v-model="picked" class="float-right mr-4">
        </div>
        <div class="rowY border-b-2 border-gray-200 pt-2 pb-3 pl-4">
            <label for="Men">Men</label>
            <input type="radio" id="Men" value="Men" v-model="picked" class="float-right mr-4">  
        </div> 
        <div class="rowZ border-b-2 border-gray-200 pt-2 pb-3 pl-4">
            <label for="Everyone">Everyone</label>
            <input type="radio" id="Everyone" value="Everyone" v-model="picked" class="float-right mr-4">
        </div>
    </v-radio-group> 

    <div class="pt-8 pb-2 pl-4 text-xs pr-4 h-screen font-medium lato-font bg-gray-100  text-gray-700">
            Mollie welcomes everyone <br><br>

            Discovery settings now show users who include more information about their gender identity and sexual
            orientation. Once users add more information about themselves, they can select to be shown in searches that 
            best reflect their identity.
    </div>

  

        <!-- <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span> -->



 <!-- <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="n in 3"
          :key="n"
          :label="`Radio ${n}`"
          :value="n"
        ></v-radio>
      </v-radio-group> -->

      <!-- <v-container
      class="px-0"
      fluid
    >
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="n in 3"
          :key="n"
          :label="`Radio ${n}`"
          :value="n"
        ></v-radio>
      </v-radio-group>
    </v-container> -->

    </div>
    
</template>

<script>
    export default {
        methods: {
            onClickSettings() {
                this.$router.push("/settings");
            }
        },
        // components: { 
        //     'v-radio-group': RadioGroup
        //     }
    }

</script>

<style scoped>

</style>
