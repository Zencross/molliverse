<template>
  <div class="select-none overscroll-none">
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
        key-name="nickname"
        :queue.sync="queue"
        class="w-11/12 h-64"
        @submit="onSubmit"
      >
        <template slot-scope="scope">
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
                v-for="media in scope.data.media"
                :key="media.url"
                class="w-full h-1 mx-1 bg-white rounded-full opacity-50"
                :class="[
                  scope.data.media.indexOf(media) === currentMediaIndex
                    ? 'opacity-100'
                    : ''
                ]"
              ></div>
            </div>

            <div class="absolute top-0 w-full h-full">
              <img
                id="mediaImg"
                :src="getMediaSrc(scope)"
                class="object-cover w-full h-full rounded-xl"
                alt="photo"
              />
              <!-- <img
                id="mediaImg"
                v-if="isMediaPhoto(scope)"
                :src="getMediaSrc(scope)"
                class="object-cover w-full h-full rounded-xl"
                alt="photo"
              />
              <video
                id="mediaVideo"
                v-if="isMediaVideo(scope)"
                :src="getMediaSrc(scope)"
                autoplay
                playsinline
                loop
                class="object-cover w-full h-full rounded-xl"
              ></video> -->
            </div>
          </div>
        </template>

        <img class="like-pointer" slot="like" src="/img/like.svg" />
        <img class="nope-pointer" slot="nope" src="/img/nope.svg" />
        <img class="super-pointer" slot="super" src="/img/super-like.svg" />
        <!-- <img class="down-pointer" slot="down" src="/img/down-txt.png" /> -->
        <img class="rewind-pointer" slot="rewind" src="/img/undo.svg" />

        <div
          class="absolute bottom-0 z-50 flex flex-col w-full pl-4 mb-20 text-white lato-font"
        >
          <div class="text-xl font-extrabold leading-tight">
            Bob, 24
          </div>
          <div class="text-sm">Are you French? Because Eiffel for you.</div>
        </div>
      </VueTinder>
    </div>

    <div
      class="absolute bottom-0 z-50 flex justify-between w-full h-24 px-4 pt-4 disable-dbl-tap-zoom"
      id="buttonGroup"
    >
      <button
        @click="decide('nope')"
        class="disable-dbl-tap-zoom focus:outline-none active:scale-50"
      >
        <img src="/img/nope.svg" alt="" />
      </button>
      <button
        @click="decide('rewind')"
        class="disable-dbl-tap-zoom focus:outline-none"
      >
        <img src="/img/undo.svg" alt="" />
      </button>
      <button
        @click="decide('super')"
        class="disable-dbl-tap-zoom focus:outline-none"
      >
        <img src="/img/super-like.svg" alt="" />
      </button>
      <button
        @click="decide('like')"
        class="disable-dbl-tap-zoom focus:outline-none"
      >
        <img src="/img/like.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar";
import VueTinder from "vue-tinder";
import source from "static/bing";
import gql from "graphql-tag";

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
    // this.mock();
    this.loadUsers();
  },
  mounted() {
    // this.checkMediaType(0);

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
  },
  methods: {
    async loadUsers() {
      try {
        const results = await this.$apollo.query({
          query: gql`
            query {
              queryUser {
                nickname
                age
                bio
                email
                gender
                isGenderPublic
                isOrientationPublic
                isPushNotiEnabled
                isVerified
                jobTitle
                location {
                  longitude
                  latitude
                }
                media {
                  index
                  type
                  url
                }
                name
                orientation
                passions {
                  name
                }
                phoneNumber
                showGender
                university
                channels {
                  name
                }
              }
            }
          `
        });
        console.log("queryUsers results:", results.data.queryUser);
        this.queue = results.data.queryUser;
        console.log("queue", this.queue);
        // this.userSelected = this.users[0].nickname;
      } catch (error) {
        console.error(error);
      }
    },
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
      if (this.$store.state.userProfileMedia[index].type === "Image") {
        console.log(`media at index ${index} is a photo`);
        this.isMediaPhoto = true;
        this.isMediaVideo = false;
      } else if (this.$store.state.userProfileMedia[index].type === "Video") {
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
    },
    getMediaSrc(scope) {
      // return scope.media[0].url;
      if (scope) {
        console.log("scope", scope.data);
        return scope.data.media[0].url;
      }
    }
  },
  computed: {
    userProfileMedia() {
      // return this.$store.state.userProfileMedia.filter(e => e.url !== null);
    }
  },
  mounted() {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.lato-font {
  font-family: "Lato", sans-serif;
}

html,
body {
  overscroll-behavior: none;
}

.disable-dbl-tap-zoom {
  touch-action: manipulation;
}

.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 30px;
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
  top: 30px;
  right: 10px;
  width: 64px;
  height: 64px;
}
</style>
