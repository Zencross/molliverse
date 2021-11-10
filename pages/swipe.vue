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
        class="z-40 w-11/12 h-64"
        @submit="onSubmit"
      >
        <template slot-scope="scope">
          <!-- <div class="z-10">{{ scope }}</div> -->
          <div class="relative flex justify-center h-full">
            <!-- User Name, Age, and Bio -->
            <div class="absolute bottom-0 z-40 p-6 mb-20 text-white">
              <p class="text-4xl font-extrabold">
                {{ scope.data.name }}, {{ scope.data.age }}
              </p>
              <p class="text-lg font-medium">
                Hello ladies! I'm learning about important dates in history.
                Wanna be one of them?
              </p>
            </div>

            <!-- Buttons for carousel behavior -->
            <div class="absolute z-30 flex w-full h-full">
              <div
                id="lastMedia"
                class="z-30 w-1/2 h-full bg-transparent rounded-xl"
                @click="onClickLastMedia(scope)"
              ></div>
              <div
                id="nextMedia"
                class="z-30 w-1/2 h-full bg-transparent rounded-xl"
                @click="onClickNextMedia(scope)"
              ></div>
            </div>

            <div class="absolute z-40 flex w-full px-2 mt-4 bg-transparent">
              <div
                v-for="media in scope.data.media.filter(
                  media => media.url !== null
                )"
                :key="media.url"
                class="w-full h-1 mx-1 bg-black rounded-full opacity-50"
                :class="[
                  scope.data.media
                    .filter(media => media.url !== null)
                    .indexOf(media) === currentMediaIndex
                    ? 'opacity-100'
                    : ''
                ]"
              ></div>
            </div>

            <div class="absolute top-0 w-full h-full">
              <img
                v-if="
                  scope.data.media
                    .filter(m => m.url !== null)
                    .sort((a, b) => {
                      return a.index - b.index;
                    })[currentMediaIndex] &&
                    scope.data.media
                      .filter(m => m.url !== null)
                      .sort((a, b) => {
                        return a.index - b.index;
                      })[currentMediaIndex].type === 'IMAGE'
                "
                id="mediaImg"
                :src="
                  scope.data.media
                    .filter(m => m.url !== null)
                    .sort((a, b) => {
                      return a.index - b.index;
                    })[currentMediaIndex] &&
                    scope.data.media
                      .filter(m => m.url !== null)
                      .sort((a, b) => {
                        return a.index - b.index;
                      })[currentMediaIndex].url
                "
                class="object-cover w-full h-full rounded-xl"
                alt="photo"
              />
              <video
                v-else
                id="mediaVideo"
                :src="
                  scope.data.media
                    .filter(m => m.url !== null)
                    .sort((a, b) => {
                      return a.index - b.index;
                    })[currentMediaIndex] &&
                    scope.data.media
                      .filter(m => m.url !== null)
                      .sort((a, b) => {
                        return a.index - b.index;
                      })[currentMediaIndex].url
                "
                autoplay
                playsinline
                loop
                class="object-cover w-full h-full rounded-xl"
              ></video>
            </div>
          </div>
        </template>

        <!-- Action icons showing up on the card upon swipe -->
        <img class="like-pointer" slot="like" src="/img/swipe-like-btn.png" />
        <img class="nope-pointer" slot="nope" src="/img/swipe-nope-btn.png" />
        <img
          class="super-pointer"
          slot="super"
          src="/img/btn__super-like.svg"
        />
        <!-- Down swipe is disabled -->
        <!-- <img class="down-pointer" slot="down" src="/img/down-txt.png" /> -->
        <img
          class="rewind-pointer"
          slot="rewind"
          src="/img/swipe-undo-btn.png"
        />
      </VueTinder>
    </div>

    <!-- Swipe buttons -->
    <div
      class="absolute bottom-0 z-50 flex justify-between w-full h-24 px-6 disable-dbl-tap-zoom"
      id="buttonGroup"
    >
      <button
        @click="decide('nope')"
        class="disable-dbl-tap-zoom focus:outline-none active:scale-50"
      >
        <img src="/img/swipe-nope-btn.png" alt="" />
      </button>
      <button
        @click="decide('rewind')"
        class="disable-dbl-tap-zoom focus:outline-none"
      >
        <img src="/img/swipe-undo-btn.png" alt="" />
      </button>
      <button
        @click="decide('super')"
        class="disable-dbl-tap-zoom focus:outline-none"
      >
        <img src="/img/swipe-superlike-btn.png" alt="" />
      </button>
      <button
        @click="decide('like')"
        class="disable-dbl-tap-zoom focus:outline-none"
      >
        <img src="/img/swipe-like-btn.png" alt="" />
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
      currentMediaIndex: 0,
      queue: [],
      offset: 0,
      history: []
    };
  },
  created() {
    // this.mock();
    console.log("DOM created");
    this.loadUsers();
  },
  mounted() {
    console.log("DOM mounted");

    var topBar = document.getElementById("topBar");
    var buttonGroup = document.getElementById("buttonGroup");
    document.getElementById("swipe").style.height =
      window.innerHeight -
      topBar.clientHeight -
      buttonGroup.clientHeight / 1.65 +
      "px";

    console.log("height of top bar:", topBar.clientHeight);
    console.log("height of button grp:", buttonGroup.clientHeight);
    console.log(
      "Carousel height should be: ",
      window.innerHeight - topBar.clientHeight - buttonGroup.clientHeight / 2
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
        this.queue = results.data.queryUser;
        this.queue = this.queue.filter(
          ele => ele.nickname !== this.$store.state.user.nickname
        );
        console.log("queue", this.queue);
        // return results.data.queryUser;
      } catch (error) {
        console.error(error);
      }
    },
    mock(count = 5, append = true) {
      console.log("mock running");
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
    currentMedia(scope) {
      let media = scope.data.media
        .filter(media => media.url !== null)
        .sort((a, b) => {
          return a.index - b.index;
        });
      return media;
    },
    onClickLastMedia(scope) {
      console.log("last Media clicked", scope);
      if (this.currentMediaIndex !== 0) {
        this.currentMediaIndex -= 1;
        console.log("currentMediaIndex", this.currentMediaIndex);
      }
    },
    onClickNextMedia(scope) {
      console.log("next Media clicked", scope);
      if (
        this.currentMediaIndex <
        scope.data.media.filter(media => media.url !== null).length - 1
      ) {
        this.currentMediaIndex += 1;
        console.log("currentMediaIndex", this.currentMediaIndex);
      }
    },
    getMediaSrc(scope) {
      return "";
    },
    async onSubmit(choice) {
      console.log("user choice", choice);
      console.log(`${this.queue.length} card left`);
      this.currentMediaIndex = 0;
      if (this.queue.length === 1) {
        console.log("only 1 card left");
      }

      try {
        const results = await this.$apollo.mutate({
          mutation: gql`
            mutation swipe(
              $sourceNick: String!
              $targetNick: String!
              $emotion: Emotion!
            ) {
              swipe(
                sourceNick: $sourceNick
                targetNick: $targetNick
                emotion: $emotion
              ) {
                match
              }
            }
          `,
          variables: {
            sourceNick: this.$store.state.user.nickname,
            targetNick: choice.key,
            emotion: choice.type.toUpperCase()
          }
        });
        console.log("swipe results", results);
      } catch (e) {
        console.error(e);
      }

      this.history.push(choice.item);
    },
    async decide(choice) {
      if (choice === "rewind") {
        this.currentMediaIndex = 0;
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
        console.log("this.$refs.tinder.decide(choice)");
        this.$refs.tinder.decide(choice);
      }
    }
  },
  computed: {}
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
