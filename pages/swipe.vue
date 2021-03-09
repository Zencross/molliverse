<template>
  <div class="overflow-hidden overscroll-none">
    <TopBar
      id="topBar"
      person
      messager
      @click="onClickPersonIcon"
      @clickMessager="onClickMessager"
    ></TopBar>

    <Vue2InteractDraggable
      @draggedRight="draggedRight"
      @draggedLeft="draggedLeft"
      :interact-max-rotation="15"
      :interact-out-of-sight-x-coordinate="800"
      :interact-x-threshold="200"
      :interact-lock-swipe-down="true"
    >
      <div id="swipe" class="relative flex justify-center m-4">
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

        <div class="absolute z-40 flex w-full px-2 mt-4 bg-transparent">
          <div
            v-for="media in userProfileMedia"
            :key="media.id"
            class="w-full h-1 mx-1 bg-white rounded-full opacity-50"
            :class="[
              userProfileMedia.indexOf(media) === currentMediaIndex
                ? 'opacity-100'
                : ''
            ]"
          ></div>
        </div>

        <div class="absolute top-0 w-full h-full">
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
    </Vue2InteractDraggable>

    <div
      class="absolute bottom-0 z-50 flex justify-between w-full h-12 px-4 mb-3"
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
import { Vue2InteractDraggable } from "vue2-interact";

export default {
  components: { TopBar, Vue2InteractDraggable },
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
    },
    draggedRight() {
      console.log("dragged right");
    },
    draggedLeft() {
      console.log("dragged left");
    }
  },
  computed: {
    userProfileMedia() {
      return this.$store.state.userProfileMedia.filter(e => e.src !== null);
    }
  },
  mounted() {
    this.checkMediaType(0);

    document.addEventListener(
      "touchmove",
      function(e) {
        e.preventDefault();
      },
      false
    );

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

<style>
html,
body {
  overscroll-behavior: none;
}
</style>
