<template>
  <div class="w-full h-screen select-none">
    <!-- Top Bar -->
    <div class="flex w-full pt-6 pb-4 pl-4 border border-t-0 border-b-1">
      <div class="flex-1 text-xl font-bold lato-font">
        Edit Info
      </div>
      <div
        @click="onClickDone"
        class="pr-4 text-xl font-bold text-pink-600 lato-font"
      >
        Done
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="flex flex-col items-center w-full">
        <!-- <div class="flex justify-center w-4/5 mt-2 text-3xl text-grayish-red montserrat-font disable-dbl-tap-zoom">Record a Video</div> -->
        <div class="w-11/12 mt-2 ml-2 text-3xl font-semibold text-dark">
          Record a video
        </div>
        <div
          class="w-11/12 ml-2 text-xs montserrat-font text-lightgrey disable-dbl-tap-zoom"
        >
          Drag to re-order your videos
        </div>
      </div>
      <draggable
        v-model="userProfileMedia"
        group="people"
        @start="drag = true"
        @end="drag = false"
        @change="log"
        class="w-full px-1 pb-4 my-2"
      >
        <transition-group
          tag="div"
          class="z-10 flex flex-wrap justify-around w-full h-full"
          name="flip-list"
        >
          <div
            v-for="ele in userProfileMedia"
            :key="ele.index"
            class="relative z-10 my-1 bg-darkgrey rounded-xl cell-width cell-aspect-ratio"
            @click="onClickBox(userProfileMedia.indexOf(ele))"
          >
            <!-- The blank box -->
            <img
              v-if="!ele.url"
              class="absolute bottom-0 right-0 z-30"
              src="../static/img/plus-purple-30px.svg"
              alt=""
            />
            <!-- The photo -->
            <img
              v-if="userProfileMedia[ele.index].type === 'IMAGE'"
              :src="userProfileMedia[ele.index].url"
              class="absolute top-0 left-0 z-20 object-cover w-full h-full rounded-xl"
              alt=""
            />
            <!-- The video -->
            <video
              v-if="userProfileMedia[ele.index].type === 'VIDEO'"
              autoplay
              playsinline
              loop
              :src="userProfileMedia[ele.index].url"
              class="absolute top-0 left-0 z-20 rounded-xl"
            ></video>
          </div>
        </transition-group>
      </draggable>
      <!-- <gradient-button buttonText="DONE" /> -->
      <!-- <app-button
            buttonText="Finish"
            textWhite
            bgPhoneNum
            class=""
            @click="onClickFinsih"
            /> -->

      <!-- About Me -->

      <div class="pt-8 pb-4 pl-4 text-lg font-semibold bg-gray-100 lato-font">
        About me
      </div>
      <textarea
        class="pt-4 pl-4 pr-2 border"
        placeholder="My relationship status? Netflix, Oreos and sweatpants"
        rows="6"
        cols="50"
      ></textarea>

      <!-- Passions-->
      <div class="pt-8 pb-4 pl-4 text-lg font-semibold bg-gray-100 lato-font">
        Passions
      </div>
      <textarea
        class="pt-4 pl-4 pr-2 border"
        placeholder="Boxing, Foodie, Travel"
        rows="2"
        cols="50"
      ></textarea>

      <!-- Job Title -->
      <div class="pt-8 pb-4 pl-4 text-lg font-semibold bg-gray-100 lato-font">
        Job Title
      </div>
      <textarea
        class="pt-4 pl-4 pr-2 border"
        placeholder="Part time Techie, full time hustler"
        rows="2"
        cols="50"
      ></textarea>

      <!-- Education-->
      <div class="pt-8 pb-4 pl-4 text-lg font-semibold bg-gray-100 lato-font">
        Education
      </div>
      <textarea
        class="pt-4 pl-4 pr-2 border"
        placeholder="HKU"
        rows="2"
        cols="50"
      ></textarea>

      <!-- Company-->
      <div class="pt-8 pb-4 pl-4 text-lg font-semibold bg-gray-100 lato-font">
        Company
      </div>
      <textarea
        class="pt-4 pl-4 pr-2 border"
        placeholder="Self-Employed"
        rows="2"
        cols="50"
      ></textarea>

      <!-- Living in-->
      <div class="pt-8 pb-4 pl-4 text-lg font-semibold bg-gray-100 lato-font">
        Living in
      </div>
      <textarea
        class="pt-4 pl-4 pr-2 border"
        placeholder="Hong Kong"
        rows="2"
        cols="50"
      ></textarea>

      <!-- Gender-->
      <div class="pt-8 pb-4 pl-4 text-lg font-semibold bg-gray-100 lato-font">
        Gender
      </div>
      <textarea
        class="pt-4 pl-4 pr-2 border"
        placeholder="Male"
        rows="2"
        cols="50"
      ></textarea>

      <!-- Sexual Orientation -->
      <div class="pt-8 pb-4 pl-4 text-lg font-semibold bg-gray-100 lato-font">
        Sexual Orientation
      </div>
      <textarea
        class="pt-4 pl-4 pr-2 border"
        placeholder="Straight"
        rows="2"
        cols="50"
      ></textarea>

      <div
        class="pt-8 pb-4 pl-4 text-lg font-semibold bg-gray-100 lato-font"
      ></div>
    </div>
  </div>
</template>

<script>
import GradientButton from "~/components/GradientButton.vue";
import TopBar from "~/components/TopBar.vue";
import draggable from "vuedraggable";

export default {
  components: { TopBar, GradientButton, draggable },
  data() {
    return {
      myArray: [
        { name: "A", id: 0 },
        { name: "B", id: 1 },
        { name: "C", id: 2 },
        { name: "D", id: 3 },
        { name: "E", id: 4 },
        { name: "F", id: 5 },
        { name: "G", id: 6 },
        { name: "H", id: 7 },
        { name: "I", id: 8 }
      ]
    };
  },
  computed: {
    userProfileMedia: {
      get() {
        return this.$store.state.userProfileMedia;
        // return this.$store.state.user.media;
      },
      set(value) {
        console.log("setter value", value);
        // this.$store.commit("setUserProfileMedia", value);
      }
    }
  },
  mounted() {
    console.log("edit-info page, user object", this.$store.state.user);
    console.log("nickname", this.$store.state.user.nickname);
    console.log("userProfileMedia", this.$store.state.userProfileMedia);
  },
  methods: {
    log(arg) {
      console.log("drag detected", arg);
      // const indexOfMediaMoved = arg.oldIndex;
      // const newIndex = arg.newIndex;
      // this.$store.commit("updateUserProfileMediaIndex");
      // console.log("user Media array", this.userProfileMedia);
    },
    onClickBox(id) {
      console.log("clicked box ", id);
      this.$store.commit("setCurrentMediaIndex", id);
      this.$router.push("/ar-filter-2");
    },
    async onClickFinsih() {
      //  Create User Profile
      await this.$store.dispatch("createUserProfile");
      console.log(
        "--------------------createUserProfile finished--------------------"
      );
      await this.$store.dispatch("addUser");
      console.log("--------------------addUser finished--------------------");
      this.$router.push("/swipe");
    },
    async onClickDone() {
      // Update User Profile
      await this.$store.dispatch("createUserProfile");
      console.log(
        "--------------------createUserProfile finished--------------------"
      );

      await this.$store.dispatch("updateUser");
      console.log(
        "--------------------updateUser finished--------------------"
      );

      this.$router.push("/user-profile");
    }
  }
};
</script>

<style>
.gallery-height {
  height: 58%;
}

.cell-height {
  height: 30%;
}

.cell-width {
  width: 30%;
}

.cell-aspect-ratio {
  overflow: hidden;
  height: 0;
  padding-top: 35.5%;
}

.flip-list-move {
  transition: transform 0.5s;
}

video::-webkit-media-controls {
  display: none;
}

video {
  width: 100%;
  height: auto;
}
</style>
