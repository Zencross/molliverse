<template>
  <div class="overscroll-none">
    <TopBar
      id="topBar"
      person
      messager
      @click="onClickPersonIcon"
      @clickMessager="onClickMessager"
    ></TopBar>

    <div class="flex justify-center mt-4">
      <VueTinder
        id="swipe"
        ref="tinder"
        key-name="id"
        :queue.sync="queue"
        class="w-11/12 h-64"
        @submit="onSubmit"
      >
        <div class="relative flex justify-center h-full">
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
              :src="getMediaSrc"
              class="object-cover w-full h-full rounded-xl"
              alt="photo"
            />
            <video
              id="mediaVideo"
              v-if="isMediaVideo"
              :src="getMediaSrc"
              autoplay
              playsinline
              loop
              class="object-cover w-full h-full rounded-xl"
            ></video>
          </div>
        </div>

        <img class="like-pointer" slot="like" src="/img/like-txt.png" />
        <img class="nope-pointer" slot="nope" src="/img/nope-txt.png" />
        <img class="super-pointer" slot="super" src="/img/super-txt.png" />
        <!-- <img class="down-pointer" slot="down" src="/img/down-txt.png" /> -->
        <img class="rewind-pointer" slot="rewind" src="/img/rewind-txt.png" />
      </VueTinder>
    </div>

    <div
      class="absolute bottom-0 z-50 flex justify-between w-full h-24 px-4 pt-4"
      id="buttonGroup"
    >
      <button @click="decide('nope')">
        <img src="/img/nope.svg" alt="" />
      </button>
      <button @click="decide('rewind')">
        <img src="/img/undo.svg" alt="" />
      </button>
      <button @click="decide('super')">
        <img src="/img/super-like.svg" alt="" />
      </button>
      <button @click="decide('like')">
        <img src="/img/like.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar";
import VueTinder from "vue-tinder";
import source from "static/bing";

export default {
  components: { TopBar, VueTinder },
  data() {
    return {
      isMediaPhoto: false,
      isMediaVideo: false,
      currentMediaIndex: 0,
      queue: [],
      offset: 0,
      history: []
    };
  },
  created() {
    this.mock();
  },
  methods: {
    mock(count = 5, append = true) {
      const list = [];
      for (let i = 0; i < count; i++) {
        list.push({ id: source[this.offset] });
        this.offset++;
      }
      if (append) {
        this.queue = this.queue.concat(list);
      } else {
        this.queue.unshift(...list);
      }
    },

    onClickPersonIcon() {
      this.$router.push("/user-profile");
    },
    onClickMessager() {
      this.$router.push("/messages");
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
    onSubmit(choice) {
      console.log("user choice", choice);
      if (this.queue.length < 3) {
        this.mock();
      }
      this.history.push(choice.item);
    },
    async decide(choice) {
      if (choice === "rewind") {
        if (this.history.length) {
          //一个个 rewind
          this.$refs.tinder.rewind([this.history.pop()]);
          // 一次性 rewind 全部
          // this.$refs.tinder.rewind(this.history)
          // this.history = []
          // 一次随机 rewind 多个
          //   this.$refs.tinder.rewind(
          //     this.history.splice(-Math.ceil(Math.random() * 3))
          //   );
          // 非 api调用的添加
          // this.queue.unshift(this.history.pop())
          // this.queue.push(this.history.pop())
          // 非头部添加
          // this.queue.splice(1, 0, this.history.pop())
          // 一次性 rewind 多个，并且含有非头部添加的 item
          // this.queue.unshift(this.history.pop())
          // this.queue.unshift(...this.history)
        }
      } else {
        this.$refs.tinder.decide(choice);
      }
    }
  },
  computed: {
    userProfileMedia() {
      return this.$store.state.userProfileMedia.filter(e => e.src !== null);
    },
    getMediaSrc() {
      return this.$store.state.userProfileMedia[this.currentMediaIndex].src;
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

<style>
html,
body {
  overscroll-behavior: none;
}

.tinder-height {
  /* height: 500px; */
}

.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 64px;
  height: 64px;
}
.nope-pointer {
  right: 10px;
}
.like-pointer {
  left: 10px;
}
.super-pointer,
.down-pointer {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: auto;
  width: 112px;
  height: 78px;
}
.super-pointer {
  bottom: 40px;
}
.down-pointer {
  top: 40px;
}
.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
  width: 112px;
  height: 78px;
}
</style>
