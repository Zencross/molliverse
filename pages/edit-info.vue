<template>
  <div class="w-full h-screen select-none">
    <div
      v-show="showWarningModal"
      class="absolute top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center backdrop-color"
    >
      <div class="relative z-40 flex flex-col m-4 bg-white rounded-xl">
        <div class="p-6 text-lg font-bold text-left">Delete Media</div>
        <p class="px-6 pb-4 text-lg">
          Do you want to delete this media?
        </p>
        <div class="flex justify-end px-4 py-2">
          <button
            id="cancelDeleteBtn"
            class="px-3 py-2 m-2 text-black border border-gray-500 rounded-lg"
          >
            Cancel
          </button>
          <button
            id="confirmDeleteBtn"
            class="px-3 py-2 m-2 text-white bg-red-600 rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
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
            @click="onClickBox(ele, userProfileMedia.indexOf(ele))"
          >
            <!-- The blank box -->
            <img
              v-if="!ele.url"
              class="absolute bottom-0 right-0 z-30"
              src="../static/img/plus-black.svg"
              alt=""
            />
            <img
              v-else
              class="absolute bottom-0 right-0 z-30"
              src="../static/img/minus-black.svg"
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
import WarningModal from "~/components/WarningModal.vue";

export default {
  components: { TopBar, GradientButton, draggable, WarningModal },
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
      ],
      showWarningModal: false,
      confirmDeleteMedia: false
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
        this.$store.commit("setUserProfileMedia", value);
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
      this.$store.commit("updateUserProfileMediaIndex");
      console.log("user Media array", this.userProfileMedia);
    },
    resolveDeleteFlag() {
      return new Promise((resolve, reject) => {
        this.showWarningModal = true;

        document
          .getElementById("cancelDeleteBtn")
          .addEventListener("click", () => {
            // console.log("resolve false");
            resolve(false);
          });

        document
          .getElementById("confirmDeleteBtn")
          .addEventListener("click", () => {
            // console.log("resolve true");
            resolve(true);
          });
      });
    },
    async onClickBox(ele, id) {
      console.log("clicked box ", id);
      if (ele.url) {
        console.log(
          "media exists, we want to shows a pop-up for delete confirmation"
        );
        // this.$store.commit("setCurrentMediaIndex", id);

        let result = await this.resolveDeleteFlag();

        if (result) {
          // console.log("removing the media..");
          let userProfileMedia = this.$store.state.userProfileMedia;
          userProfileMedia = userProfileMedia.map(e => {
            if (e.index == id) {
              return { index: id, type: null, url: null };
            } else {
              return { ...e };
            }
          });
          // console.log("after remove:", userProfileMedia);
          this.$store.commit("setUserProfileMedia", userProfileMedia);
        }
        this.showWarningModal = false;
      } else {
        this.$store.commit("setCurrentMediaIndex", id);
        this.$router.push("/ar-filter-2");
      }
    },
    onClickConfirmDeleteMedia() {
      this.showWarningModal = false;
      this.confirmDeleteMedia = true;
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

.backdrop-color {
  background-color: rgba(143, 139, 139, 0.75);
}
</style>
