<template>
  <div>
    <TopBar
      id="topBar"
      person
      messager
      @click="onClickPersonIcon"
      @clickMessager="onClickMessager"
    ></TopBar>

    <div id="swipe" class="relative m-4 bg-gray-200">
      <!-- Hidden listeners for carousel -->
      <div class="absolute z-30 flex w-full h-full">
        <div
          id="lastMedia"
          class="z-30 w-1/2 h-full bg-transparent rounded-xl"
          @click="onClickLastMedia"
        ></div>
        <div
          id="nextMedia"
          class="z-30 w-1/2 h-full bg-transparent rounded-xl"
          @click="onClickNextMedia"
        ></div>
      </div>

      <div class="absolute top-0 h-full">
        <img
          id="mediaImg"
          v-if="isMediaPhoto"
          :src="getMediaSrc()"
          class="object-cover w-full h-full rounded-xl"
          alt="photo"
        />
        <video
          id="mediaVideo"
          v-if="isMediaVideo"
          :src="getMediaSrc()"
          autoplay
          playsinline
          loop
          class="object-cover w-full h-full rounded-xl"
        ></video>
      </div>
    </div>

    <div
      class="absolute bottom-0 flex justify-between w-full h-12 px-4 mb-3"
      id="buttonGroup"
    >
      <button>
        <img src="/img/nope.svg" alt="" />
      </button>
      <button>
        <img src="/img/undo.svg" alt="" />
      </button>
      <button>
        <img src="/img/super-like.svg" alt="" />
      </button>
      <button>
        <img src="/img/like.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar";

export default {
  components: { TopBar },
  data() {
    return {
      isMediaPhoto: false,
      isMediaVideo: false,
      currentMediaIndex: 0
    };
  },
  methods: {
    onClickPersonIcon() {
      this.$router.push("/user-profile");
    },
    onClickMessager() {
      this.$router.push("/messages");
    },
    getMediaSrc() {
      return this.$store.state.userProfileMedia[this.currentMediaIndex].src;
    },
    // isMediaPhoto() {
    //   if (
    //     this.$store.state.userProfileMedia[this.currentMediaIndex] &&
    //     this.$store.state.userProfileMedia[this.currentMediaIndex].type ===
    //       "photo"
    //   ) {
    //     console.log(
    //       `media at index ${this.currentMediaIndex} is`,
    //       this.$store.state.userProfileMedia[this.currentMediaIndex].type
    //     );
    //     return true;
    //   } else return false;
    // },
    // isMediaVideo() {
    //   if (
    //     this.$store.state.userProfileMedia[this.currentMediaIndex] &&
    //     this.$store.state.userProfileMedia[this.currentMediaIndex].type ===
    //       "video"
    //   ) {
    //     console.log(
    //       `media at index ${this.currentMediaIndex} is`,
    //       this.$store.state.userProfileMedia[this.currentMediaIndex].type
    //     );
    //     return true;
    //   } else return false;
    // },
    onClickLastMedia() {
      console.log("last Media clicked");
      if (this.currentMediaIndex !== 0) {
        this.currentMediaIndex -= 1;
        this.checkMediaType(this.currentMediaIndex);
        console.log("currentIndex", this.currentMediaIndex);
      }
    },
    onClickNextMedia() {
      console.log("next Media clicked");
      if (this.currentMediaIndex < this.userProfileMedia.length - 1) {
        this.currentMediaIndex += 1;
        this.checkMediaType(this.currentMediaIndex);
        console.log("currentIndex", this.currentMediaIndex);
      }
    },
    checkMediaType(index) {
      if (this.$store.state.userProfileMedia[index].type === "photo") {
        console.log(`media at index ${index} is a photo`);
        this.isMediaPhoto = true;
        this.isMediaVideo = false;
      } else if (this.$store.state.userProfileMedia[index].type === "video") {
        console.log(`media at index ${index} is a video`);
        this.isMediaPhoto = false;
        this.isMediaVideo = true;
      }
    }
  },
  computed: {
    userProfileMedia() {
      return this.$store.state.userProfileMedia.filter(e => e.src !== null);
    }
  },
  mounted() {
    this.checkMediaType(0);

    var topBar = document.getElementById("topBar");
    var buttonGroup = document.getElementById("buttonGroup");
    document.getElementById("swipe").style.height =
      window.innerHeight -
      topBar.clientHeight -
      buttonGroup.clientHeight +
      "px";

    console.log("height of top bar:", topBar.clientHeight);
    console.log("height of button grp:", buttonGroup.clientHeight);
    console.log(
      "Carousel height should be: ",
      window.innerHeight - topBar.clientHeight - buttonGroup.clientHeight
    );
  }
};
</script>

<style></style>
