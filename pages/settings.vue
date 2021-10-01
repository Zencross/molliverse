<template>
    <div>
    <!-- Top Bar -->
    <div class="w-full border border-t-0 border-b-1 flex pt-6 pb-4 pl-4">
      <div
        class=" text-xl font-bold lato-font flex-1">
        Settings
      </div>
      <div @click="onClickTitle" class="lato-font font-bold text-xl text-pink-600 pr-4"> Done </div>
    </div>
    <!-- Settings menu -->
      <!--Account Setting -->
        <div class="pt-6 pb-4 pl-4 text-lg font-semibold lato-font bg-gray-100 border ">
            Account Settings
        </div>
          <div class="text-sm font-medium lato-font ">
              <div class="pb-4 pt-4 pl-4 border-b-2 flex">  
                <div class="flex-1">Phone Number </div>
                <div class=" text-gray-700">
                   {{ this.$store.state.phoneNumber }}
                  <span class="pr-4 text-gray-700" @click="onClickPhoneNumber">></span>
                </div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Connected Accounts </div>
                <div class="pr-4 text-gray-700" @click="onClickConnectedAccounts">></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Email</div>
                <div class="pr-4 text-gray-700" @click="onClickEmail">{{ this.$store.state.email }} ></div>
              </div>
          </div>

      <!--Discovery Setting -->
        <div class="pt-6 pb-4 pl-4 text-lg font-semibold lato-font bg-gray-100 border ">
            Discovery
        </div>
          <div class="text-sm font-medium lato-font ">
              <div class="pb-4 pt-4 pl-4 border-b-2 flex">  
                <div class="flex-1">Location </div>
                <div class="pr-4 text-gray-700" @click="onClickLocation">Pat Heung, New Territories ></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 ">
                <div class="flex">
                  <div class="flex-1">Maximum Distance</div>
                  <div class="pr-4 text-gray-700">{{ value1 }} km</div>
                </div>
                <div class="pb-6 pt-10">
                  <vue-slider v-model="value1" v-bind="options"/>
                </div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Show me</div>
                <div class="pr-4 text-gray-700" @click="onClickShowMe">Women ></div>
              </div>

              <div class="pb-4 pt-3 border-b-2">
                <div class="flex pl-4">
                  <div class="flex-1">Age Range</div>
                  <div class="pr-4 text-gray-700">{{ value[0] }} - {{ value[1] }} </div>
                </div>
              <div class="pb-6 pt-10 pl-4" >
                  <vue-slider v-model="value" v-bind="options"/>
              </div>
              </div> 
              <div class="flex border-b-2">
                <div class="pl-4 pt-4 pb-4 flex-1">Global</div>
                <div class="pr-4 pt-2">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider2 round"></span>
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
                <div class="pr-4 text-gray-700" @click="onClickNotificationEmail">></div>
              </div>

              <div class="pb-4 pt-3 pl-4 border-b-2 flex">
                <div class="flex-1">Push notifications</div>
                <div class="pr-4 text-gray-700" @click="onClickPushNotifications">></div>
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

// import 'vue-range-component/dist/vue-range-slider.css'
// import VueRangeSlider from 'vue-range-component'
import VueSlider from 'vue-slider-component'
import { mapGetters } from 'vuex';


  export default {
  components: { VueSlider },
  data: () => ({
    value1: 50,
    value: [18,45],
       options: {
        width: '92%',
        dotSize: 16,
        height: 4,
        contained: true,
        direction: 'ltr',
	      data: null,
        min: 18,
        max: void 0,
        interval: 1,
        disabled: false,
        clickable: false,
        duration: 0.5,
        adsorb: true,
        lazy: true,
        tooltip: 'always',
        tooltipPlacement: 'top',
        tooltipFormatter: void 0,
        useKeyboard: false,
        keydownHook: null,
        dragOnClick: false,
        enableCross: true,
        fixed: false,
        minRange: 10,
        maxRange: 100,
        order: true,
        marks: false,
        // dotOptions: void 0,
        // process: true,
        // dotStyle: void 0,
        // railStyle: void 0,
        // processStyle: void 0,
        // tooltipStyle: void 0,
        // stepStyle: void 0,
        // stepActiveStyle: void 0,
        // labelStyle: void 0,
        // labelActiveStyle: void 0,
        }
  }),
  // created() {
  //       this.width = window.innerWidth * 88/100
  // },
  methods: {
    onClickTitle() {
      this.$router.push("/login");
    },
    onClickPhoneNumber() {
      this.$router.push("/settings-phoneNumber");
    },
    onClickEmail() {
      this.$router.push("/settings-email");
    },
    onClickConnectedAccounts() {
      this.$router.push("/settings-connectedAccounts");
    },
    onClickLocation() {
      this.$router.push("/settings-location")
    },
    onClickShowMe() {
      this.$router.push("/settings-showMe");
    },
    onClickNotificationEmail() {
      this.$router.push("/settings-notificationsEmail")
    },
    onClickPushNotifications() {
      this.$router.push("/settings-notificationsPushNotifications")
    }
  },
  
     
  }

</script>

<style>
  .vue-slider-disabled .vue-slider-process {
  background-color: #a7a7a7;
}
.vue-slider-disabled .vue-slider-dot-handle {
  border-color: #a7a7a7;
}
.vue-slider-disabled .vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #a7a7a7;
}

/* rail style */
.vue-slider-rail {
  background-color: whitesmoke;
  border-radius: 15px;
  transition: background-color 0.3s;
}
.vue-slider:hover .vue-slider-rail {
  background-color: rgba(175, 169, 169, 0.719);
}

/* process style */
.vue-slider-process {
  background-color: #d53f8c;
  border-radius: 15px;
  transition: background-color 0.3s;
}
.vue-slider:hover .vue-slider-process {
  background-color: #d53f8c;
}

/* mark style */
.vue-slider-mark-step {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #e8e8e8;
  background-color: #fff;
}
.vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #9cd5ff;
}
.vue-slider:hover .vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #69c0ff;
}

.vue-slider-mark-label {
  font-size: 12px;
  white-space: nowrap;
}
/* dot style */
.vue-slider-dot-handle {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #c2c2c2;
  box-sizing: border-box;
  transition: box-shadow 0.3s, border-color 0.3s;
}
.vue-slider:hover .vue-slider-dot-handle {
  border-color: #d53f8c;
}

.vue-slider-dot-handle-focus {
  border-color: #d53f8c;
  box-shadow: 0 0 0 5px rgb(95, 91, 93);
}
.vue-slider:hover .vue-slider-dot-handle-focus {
  border-color: #d53f8c;
}

.vue-slider-dot-handle:hover {
  border-color: #d53f8c;
}
.vue-slider:hover .vue-slider-dot-handle:hover {
  border-color: #d53f8c;
}

.vue-slider-dot-handle-disabled {
  cursor: not-allowed;
  border-color: #ddd !important;
}

.vue-slider-dot-tooltip {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.vue-slider-dot-tooltip-inner {
  font-size: 12px;
  white-space: nowrap;
  padding: 4px 6px;
  color: #fff;
  border-radius: 5px;
  border-color: #d53f8c;
  background-color: #d53f8c;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transform: scale(0.9);
  transition: transform 0.3s;
}
.vue-slider-dot-tooltip-inner::after {
  content: "";
  position: absolute;
}
.vue-slider-dot-tooltip-inner-top::after {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-top-color: inherit;
}
.vue-slider-dot-tooltip-inner-bottom::after {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-bottom-color: inherit;
}
.vue-slider-dot-tooltip-inner-left::after {
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-left-color: inherit;
}
.vue-slider-dot-tooltip-inner-right::after {
  right: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-right-color: inherit;
}
.vue-slider-dot-tooltip-inner-top {
  transform-origin: 50% 100%;
}
.vue-slider-dot-tooltip-inner-bottom {
  transform-origin: 50% 0;
}
.vue-slider-dot-tooltip-inner-left {
  transform-origin: 100% 50%;
}
.vue-slider-dot-tooltip-inner-right {
  transform-origin: 0% 50%;
}

.vue-slider-dot:hover .vue-slider-dot-tooltip, .vue-slider-dot-tooltip-show {
  opacity: 1;
  visibility: visible;
}
.vue-slider-dot:hover .vue-slider-dot-tooltip .vue-slider-dot-tooltip-inner, .vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner {
  transform: scale(1);
}
</style>
