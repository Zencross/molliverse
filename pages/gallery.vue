<template>
  <div class="w-full h-screen select-none">
    <top-bar back @click="onClickBackButton" />
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
      class="w-full px-1 my-2"
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
          <h1 class="absolute top-0 z-50">{{ ele.index }}</h1>
          <img
            v-if="!ele.url"
            class="absolute bottom-0 right-0 z-30"
            src="../static/img/plus-purple-30px.svg"
            alt=""
          />
          <img
            v-if="isMediaPhoto(userProfileMedia.indexOf(ele))"
            :src="getMediaSrc(userProfileMedia.indexOf(ele))"
            class="absolute top-0 left-0 z-20 object-cover w-full h-full rounded-xl"
            alt=""
          />
          <video
            v-if="isMediaVideo(userProfileMedia.indexOf(ele))"
            autoplay
            playsinline
            loop
            :src="getMediaSrc(userProfileMedia.indexOf(ele))"
            class="absolute top-0 left-0 z-20 rounded-xl"
          ></video>
        </div>
      </transition-group>
    </draggable>
    <!-- <gradient-button buttonText="DONE" /> -->
    <app-button
      buttonText="Finish"
      textWhite
      bgPhoneNum
      class=""
      @click="onClickFinsih"
    />
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
      },
      set(value) {
        console.log("setter value", value);
        this.$store.commit("setUserProfileMedia", value);
      }
    }
  },
  mounted() {},
  methods: {
    log(arg) {
      console.log("drag detected", arg);
      // const indexOfMediaMoved = arg.oldIndex;
      // const newIndex = arg.newIndex;
      this.$store.commit("updateUserProfileMediaIndex");
      console.log("user Media array", this.userProfileMedia);
    },
    onClickBackButton() {
      this.$router.push("/passions");
    },
    onClickBox(id) {
      console.log("clicked box ", id);
      this.$store.commit("setCurrentMediaIndex", id);
      this.$router.push("/ar-filter");
    },
    getMediaSrc(id) {
      return this.$store.state.userProfileMedia[id].url;
    },
    isMediaPhoto(id) {
      if (
        this.$store.state.userProfileMedia[id] &&
        this.$store.state.userProfileMedia[id].type === "Image"
      ) {
        console.log(
          `media at index ${id} is`,
          this.$store.state.userProfileMedia[id].type
        );
        return true;
      } else return false;
    },
    isMediaVideo(id) {
      if (
        this.$store.state.userProfileMedia[id] &&
        this.$store.state.userProfileMedia[id].type === "Video"
      ) {
        console.log(
          `media at index ${id} is`,
          this.$store.state.userProfileMedia[id].type
        );
        return true;
      } else return false;
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
