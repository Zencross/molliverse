<template>
    <div>
    <!-- Top Bar -->
    <div class="w-full border border-t-0 border-b-1 flex pt-6 pb-4 pl-4">
      <div
        class=" text-xl font-bold lato-font flex-1">
        Settings
      </div>
      <div class="lato-font font-bold text-xl text-blue-500 pr-4"> Done </div>
    </div>
    <!-- Settings menu -->
      <!--Account Setting -->
        <div class="pt-6 pb-4 pl-4 text-lg font-semibold lato-font bg-gray-100 border ">
            Account Settings
        </div>
          <div class="text-sm font-medium lato-font ">
              <div class="pb-4 pt-4 pl-4 border-b-2 flex">  
                <div class="flex-1">Phone Number </div>
                <div class="pr-4 text-gray-700">+852 97489993</div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Connected Accounts </div>
                <div class="pr-4 text-gray-700">></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Email</div>
                <div class="pr-4 text-gray-700">siena.l852@gmail.com</div>
              </div>
          </div>

      <!--Discovery Setting -->
        <div class="pt-6 pb-4 pl-4 text-lg font-semibold lato-font bg-gray-100 border ">
            Discovery
        </div>
          <div class="text-sm font-medium lato-font ">
              <div class="pb-4 pt-4 pl-4 border-b-2 flex">  
                <div class="flex-1">Location </div>
                <div class="pr-4 text-gray-700">Pat Heung, New Territories ></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 ">
                <div class="flex">
                  <div class="flex-1">Maximum Distance</div>
                  <div class="pr-4 text-gray-700">100km</div>
                </div>
                <div class="slidecontainer pr-4 pb-6 pt-4">
                  <input type="range" min="1" max="100" value="50" class="slider1" id="myRange">
                </div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Show me</div>
                <div class="pr-4 text-gray-700">Women ></div>
              </div>

              <div class="pb-4 pt-3 border-b-2">
                <div class="flex pl-4">
                  <div class="flex-1">Age Range</div>
                  <div class="pr-4 text-gray-700">18-36 </div>
                </div>
                <div class="slidecontainer pr-4 pb-6 pt-4 pl-4">
                  <input type="range" min="1" max="100" value="50" class="slider1" id="myRange">
                </div>
              </div> 
              <div class="flex border-b-2">
                <div class="pl-4 pt-4 pb-4 flex-1">Global</div>
                <div class="pr-4 pt-2">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class= "bg-gray-100 pt-2 pb-4 pl-4 text-xxs text-gray-700 font-thin lato-font">
                Going global will allow you to see people nearby and from around the world. 
              </div>
          </div>

      <!--Notifications -->
       <div class="pt-6 pb-4 pl-4 text-lg font-semibold lato-font bg-gray-100 border ">
            Notifications
        </div>
          <div class="text-sm font-medium lato-font ">
              <div class="pb-4 pt-4 pl-4 border-b-2 flex">  
                <div class="flex-1">Email </div>
                <div class="pr-4 text-gray-700">></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Push notifications</div>
                <div class="pr-4 text-gray-700">></div>
              </div>
          </div>

      <!--Contact us -->
        <div class="pt-6 pb-4 pl-4 text-lg font-semibold lato-font bg-gray-100 border ">
            Contact us
        </div>
          <div class="text-sm font-medium lato-font ">
              <div class="pb-4 pt-4 pl-4 border-b-2 flex">  
                <div class="flex-1">Help & Support </div>
                <div class="pr-4 text-gray-700">></div>
              </div>
          </div>

      <!--Community -->
        <div class="pt-6 pb-4 pl-4 text-lg font-semibold lato-font bg-gray-100 border ">
            Community
        </div>
          <div class="text-sm font-medium lato-font ">
              <div class="pb-4 pt-4 pl-4 border-b-2 flex">  
                <div class="flex-1">Community Guidelines </div>
                <div class="pr-4 text-gray-700">></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Safety Tips</div>
                <div class="pr-4 text-gray-700">></div>
              </div>
          </div>

      <!--legal -->
        <div class="pt-6 pb-4 pl-4 text-lg font-semibold lato-font bg-gray-100 border ">
            Legal
        </div>
          <div class="text-sm font-medium lato-font ">
              <div class="pb-4 pt-4 pl-4 border-b-2 flex">  
                <div class="flex-1">Privacy policy </div>
                <div class="pr-4 text-gray-700">></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Terms of Service</div>
                <div class="pr-4 text-gray-700">></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Licenses</div>
                <div class="pr-4 text-gray-700">></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Privacy Preferences</div>
                <div class="pr-4 text-gray-700">></div>
              </div>
          </div>

      <!--Others -->
        <div class="pt-6 pb-4 pl-4 bg-gray-100 border "></div>
          <div class="text-sm font-medium lato-font">
              <div class="pb-4 pt-4 pl-4 border-b-2">  
                <div class="text-center">Log out </div>
              </div>
          </div>

        <div class="pt-6 pb-4 pl-4 bg-gray-100 border "></div>
            <div class="text-sm font-medium lato-font">
              <div class="pb-4 pt-3 pl-4 border-b-2">
                <div class="text-center">Delete account</div>
              </div>
          </div>
        
        <div class="pt-6 pb-4 pl-4 bg-gray-100 border "></div>


    </div>
     
</template>

<script>
  export default {
  components: {  },
     
  }

</script>

<style>
  .slidecontainer {
    width: 100%; /* Width of the outside container */
  }

  .slider1 {
    /* -webkit-appearance: none; */
    width: 100%;
    height: 5px;
    border-radius: 5px;  
    background: #d3d3d3;
    /* outline: none; */
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

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
