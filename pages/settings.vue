<template>
  <div>
    <!-- Top Bar -->
    <div class="flex w-full pt-6 pb-4 pl-4 border border-t-0 border-b-1">
      <div class="flex-1 text-xl font-bold  lato-font">
        Settings
      </div>
      <div
        @click="onClickTitle"
        class="pr-4 text-xl font-bold text-blue-500 lato-font"
      >
        Done
      </div>
    </div>
    <!-- Settings menu -->
    <!--Account Setting -->
    <div
      class="pt-6 pb-4 pl-4 text-lg font-semibold bg-gray-100 border lato-font "
    >
      Account Settings
    </div>
    <div class="text-sm font-medium lato-font ">
      <div class="flex pt-4 pb-4 pl-4 border-b-2">
        <div class="flex-1">Phone Number</div>
        <div class="text-gray-700 ">
          +852 97489993
          <span class="pr-4 text-gray-700" @click="onClickPhoneNumber">></span>
        </div>
      </div>

      <div class="flex pt-3 pb-4 pl-4 border-b-2">
        <div class="flex-1">Connected Accounts</div>
        <div class="pr-4 text-gray-700" @click="onClickConnectedAccounts">
          >
        </div>
      </div>

      <div class="flex pt-3 pb-4 pl-4 border-b-2">
        <div class="flex-1">Email</div>
        <div class="pr-4 text-gray-700" @click="onClickEmail">
          siena.l852@gmail.com >
        </div>
      </div>
    </div>

    <!--Discovery Setting -->
    <div
      class="pt-6 pb-4 pl-4 text-lg font-semibold bg-gray-100 border lato-font "
    >
      Discovery
    </div>
    <div class="text-sm font-medium lato-font ">
      <div class="flex pt-4 pb-4 pl-4 border-b-2">
        <div class="flex-1">Location</div>
        <div class="pr-4 text-gray-700" @click="onClickLocation">
          Pat Heung, New Territories >
        </div>
      </div>

      <div class="pt-3 pb-4 pl-4 border-b-2 ">
        <div class="flex">
          <div class="flex-1">Maximum Distance</div>
          <div class="pr-4 text-gray-700">100km</div>
        </div>
        <div class="pt-4 pb-6 pr-4 slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider1"
            id="myRange"
          />
        </div>
      </div>

      <div class="flex pt-3 pb-4 pl-4 border-b-2">
        <div class="flex-1">Show me</div>
        <div class="pr-4 text-gray-700" @click="onClickShowMe">Women ></div>
      </div>

      <div class="pt-3 pb-4 border-b-2">
        <div class="flex pl-4">
          <div class="flex-1">Age Range</div>
          <div class="pr-4 text-gray-700">18-36</div>
        </div>
        <div class="pt-4 pb-6 pl-4 pr-4 slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider1"
            id="myRange"
          />
        </div>
      </div>
      <div class="flex border-b-2">
        <div class="flex-1 pt-4 pb-4 pl-4">Global</div>
        <div class="pt-2 pr-4">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div
        class="pt-2 pb-4 pl-4 font-thin text-gray-700 bg-gray-100 text-xxs lato-font"
      >
        Going global will allow you to see people nearby and from around the
        world.
      </div>
    </div>

    <!--Notifications -->
    <div
      class="pt-6 pb-4 pl-4 text-lg font-semibold bg-gray-100 border lato-font "
    >
      Notifications
    </div>
    <div class="text-sm font-medium lato-font ">
      <div class="flex pt-4 pb-4 pl-4 border-b-2">
        <div class="flex-1">Email</div>
        <div class="pr-4 text-gray-700" @click="onClickNotificationEmail">
          >
        </div>
      </div>

      <div class="flex pt-3 pb-4 pl-4 border-b-2">
        <div class="flex-1">Push notifications</div>
        <div class="pr-4 text-gray-700" @click="onClickPushNotifications">
          >
        </div>
      </div>
    </div>

    <!--Contact us -->
    <div
      class="pt-6 pb-4 pl-4 text-lg font-semibold bg-gray-100 border lato-font "
    >
      Contact us
    </div>
    <div class="text-sm font-medium lato-font ">
      <div class="flex pt-4 pb-4 pl-4 border-b-2">
        <div class="flex-1">Help & Support</div>
        <div class="pr-4 text-gray-700">></div>
      </div>
    </div>

    <!--Community -->
    <div
      class="pt-6 pb-4 pl-4 text-lg font-semibold bg-gray-100 border lato-font "
    >
      Community
    </div>
    <div class="text-sm font-medium lato-font ">
      <div class="flex pt-4 pb-4 pl-4 border-b-2">
        <div class="flex-1">Community Guidelines</div>
        <div class="pr-4 text-gray-700">></div>
      </div>

      <div class="flex pt-3 pb-4 pl-4 border-b-2">
        <div class="flex-1">Safety Tips</div>
        <div class="pr-4 text-gray-700">></div>
      </div>
    </div>

    <!--legal -->
    <div
      class="pt-6 pb-4 pl-4 text-lg font-semibold bg-gray-100 border lato-font "
    >
      Legal
    </div>
    <div class="text-sm font-medium lato-font ">
      <div class="flex pt-4 pb-4 pl-4 border-b-2">
        <div class="flex-1">Privacy policy</div>
        <div class="pr-4 text-gray-700">></div>
      </div>

      <div class="flex pt-3 pb-4 pl-4 border-b-2">
        <div class="flex-1">Terms of Service</div>
        <div class="pr-4 text-gray-700">></div>
      </div>

      <div class="flex pt-3 pb-4 pl-4 border-b-2">
        <div class="flex-1">Licenses</div>
        <div class="pr-4 text-gray-700">></div>
      </div>

      <div class="flex pt-3 pb-4 pl-4 border-b-2">
        <div class="flex-1">Privacy Preferences</div>
        <div class="pr-4 text-gray-700">></div>
      </div>
    </div>

    <!--Others -->
    <div class="pt-6 pb-4 pl-4 bg-gray-100 border "></div>
    <div class="text-sm font-medium lato-font">
      <div class="pt-4 pb-4 pl-4 border-b-2">
        <div class="text-center">Log out</div>
      </div>
    </div>

    <div class="pt-6 pb-4 pl-4 bg-gray-100 border "></div>
    <div class="text-sm font-medium lato-font">
      <div class="pt-3 pb-4 pl-4 border-b-2">
        <div class="text-center">Delete account</div>
      </div>
    </div>

    <div class="pt-6 pb-4 pl-4 bg-gray-100 border "></div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    onClickTitle() {
      this.$router.push("/user-profile");
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
      this.$router.push("/settings-location");
    },
    onClickShowMe() {
      this.$router.push("/settings-showMe");
    },
    onClickNotificationEmail() {
      this.$router.push("/settings-notificationsEmail");
    },
    onClickPushNotifications() {
      this.$router.push("/settings-notificationsPushNotifications");
    }
  }
};
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
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 23.4px;
  width: 23.4px;
  left: 3.6px;
  bottom: 3.6px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
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
