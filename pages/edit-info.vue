<template>
    <div class="w-full h-screen select-none">
            <!-- Top Bar -->
            <div class="w-full border border-t-0 border-b-1 flex pt-6 pb-4 pl-4">
            <div
                class=" text-xl font-bold lato-font flex-1">
                Edit Info
            </div>
            <div class="lato-font font-bold text-xl text-pink-600 pr-4"> Done </div>
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
            class="w-full px-1 my-2 pb-4"
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
            <!-- <app-button
            buttonText="Finish"
            textWhite
            bgPhoneNum
            class=""
            @click="onClickFinsih"
            /> -->

            <!-- About Me -->
       
            <div class="pt-8 pl-4 text-lg pb-4 font-semibold lato-font bg-gray-100">
                About me
            </div>
             <textarea class="pr-2 pt-4 pl-4 border" placeholder="My relationship status? Netflix, Oreos and sweatpants" rows=6 cols="50"></textarea>
           
            <!-- Passions-->
             <div class="pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100">
                Passions
            </div>
            <textarea class="pr-2 pt-4 pl-4 border" placeholder="Boxing, Foodie, Travel" rows=2 cols="50"></textarea>

            <!-- Job Title -->
            <div class="pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100">
                Job Title
            </div>
            <textarea class="pr-2 pt-4 pl-4 border" placeholder="Part time Techie, full time hustler" rows=2 cols="50"></textarea>
            
            <!-- Education-->
            <div class="pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100">
                Education
            </div>
            <textarea class="pr-2 pt-4 pl-4 border" placeholder="HKU" rows=2 cols="50"></textarea>

            <!-- Company-->
            <div class="pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100">
                Company
            </div>
            <textarea class="pr-2 pt-4 pl-4 border" placeholder="Self-Employed" rows=2 cols="50"></textarea>

            <!-- Living in-->
            <div class="pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100">
                Living in 
            </div>
            <textarea class="pr-2 pt-4 pl-4 border" placeholder="Hong Kong" rows=2 cols="50"></textarea>
            
            <!-- Gender-->
            <div class="pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100">
                Gender
            </div>
            <textarea class="pr-2 pt-4 pl-4 border" placeholder="Male" rows=2 cols="50"></textarea>
            
            <!-- Sexual Orientation -->
            <div class="pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100">
                Sexual Orientation
            </div>
            <textarea class="pr-2 pt-4 pl-4 border" placeholder="Straight" rows=2 cols="50"></textarea>

            <div class="pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100">
            </div>

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
        this.$store.state.userProfileMedia[id].type === "IMAGE"
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
        this.$store.state.userProfileMedia[id].type === "VIDEO"
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
