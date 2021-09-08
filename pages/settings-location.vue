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

        <!-- <div class="text-lg font-medium lato-font">
             <img src="../static/img/location.svg" class="w-10 mt-24 change-my-color"/>
              <div class=" pt-1 pb-1 pl-4 border-b-2 flex">
                <div class="flex-1">My current location 
                    <br> <span class="text-sm text-gray-700 font-thin">Sai Wan, (null)</span> 
                </div>
                <div class="pr-4 text-purple-700 pt-3">✓</div>
              </div>
        </div> -->

        <div class="row text-lg font-medium lato-font pt-2 pb-2">
            <div class="column1 pl-4 pt-2">
                 <img src="../static/img/location.svg" class="w-8 location"/>
            </div>
            <div class="column2 pl-2">
                 <div class="">My current location 
                    <br> <span class="text-sm text-gray-700 font-thin">Sai Wan, (null)</span> 
                </div>
            </div>
            <div class="column3">
                <div class="text-purple-700 pt-2 text-2xl pl-2">✓</div>
            </div>
        </div>


        <!-- <div class= "bg-gray-100 pt-2 pb-8 pl-4 border-b-2 text-sm text-gray-700 font-thin lato-font">
            Sai Wan, (null)
        </div> -->
        
        <!-- <div class="text-xl font-semibold text-purple-700 lato-font">
            <div class="pb-4 pt-3 border-b-2 border-t-2 text-center">
            <div class="">
                <img src="../static/img/airplane.svg" class="w-8 airplane"/>
                Add a new location</div>
            </div>
        </div> -->

        <div class="row border-b-2 border-t-2 text-xl font-semibold lato-font bg-purple-700 text-white pl-20 pt-4 pb-4">
            <div class="columnA pt-2 pb-2 ml-2">
                <img src="../static/img/plane.svg" class="w-5  airplane"/>
            </div>
            <div class="columnB pl-10">
                Add a new location
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
.location {
    filter: invert(31%) sepia(83%) saturate(1063%) hue-rotate(232deg) brightness(86%) contrast(92%);
}

.airplane {
    filter: invert(96%) sepia(4%) saturate(17%) hue-rotate(112deg) brightness(104%) contrast(105%);
}

.columnA {
    float: left;
    width: 10%;
}

.columnB {
    /* float: right; */
    width: 90%;
}

.column1 {
  float: left;
  width: 13%;
}

.column2 {
  float: left;
  width: 74%;
}

.column3 {
  float: right;
  width: 13%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>