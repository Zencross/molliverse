<template>
  <div class="select-none">
    <!-- Top Bar -->
    <div class="flex items-center w-full border border-t-0 border-b-1">
      <img
        src="/img/arrow-back-24px.svg"
        class="w-10 h-10 pb-3 pl-4"
        alt=""
        @click="onClickBack"
      />
      <div class="pb-3 pl-4 text-2xl font-bold lato-font">
        Messages
      </div>
    </div>

    <!-- List -->
    <!-- <div
      class="flex items-center py-4 bg-white border border-t-0 border-b-1"
      v-for="match in matches"
      :key="match.id"
      :id="match.id"
      @click="onClickItem(match)"
    >
      <img :src="match.target.avatar" alt="" class="w-2/12 ml-4 rounded-full" />
      <div class="flex flex-col justify-center w-full mx-4">
        <div class="text-lg font-bold lato-font">{{ match.target.name }}</div>
        <div class="flex flex-wrap leading-tight text-gray-600 lato-font">
          {{ match.target.messages[0].content }}
        </div>
      </div>
    </div> -->

    <div
      v-if="channels"
      class="flex items-center py-4 bg-white border border-t-0 border-b-1"
      v-for="channel in channels"
      :key="channel.name"
      :id="channel.name"
      @click="onClickItem(channel)"
    >
      <img
        v-if="getTargetAvatarType(channel) == 'IMAGE'"
        :src="getTargetAvatar(channel)"
        alt="Avatar"
        class="object-cover w-16 h-16 ml-3 rounded-full"
      />

      <video
        autoplay
        loop
        playsinline
        v-if="getTargetAvatarType(channel) == 'VIDEO'"
        :src="getTargetAvatar(channel)"
        alt="Avatar Video"
        class="object-cover w-16 h-16 ml-3 rounded-full"
      ></video>

      <div class="flex flex-col justify-center w-9/12 mx-3">
        <div class="text-lg font-bold lato-font">
          {{ getTargetNickname(channel) }}
        </div>
        <div
          class="flex flex-wrap leading-tight text-gray-600 truncate lato-font"
        >
          {{ getLatestMessage(channel) }}
        </div>
      </div>
    </div>
    <!-- <div v-if="channels.length == 0" class="p-4 text-center text-gray-600">
      No match yet. Swipe more to get matched!
    </div> -->
    <div v-if="channels.length == 0" class="flex justify-center w-full ">
      <p class="px-4 py-1 my-4 text-gray-900 bg-gray-300 shadow-md rounded-2xl">
        No match yet. Swipe more to get matched!
      </p>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  components: {},
  data() {
    return {
      matches: [
        {
          id: 1,
          target: {
            id: 1,
            name: "Michelle",
            avatar: "https://i.pravatar.cc/300?img=40",
            messages: [
              {
                content: "Hey there! I'm Michelle, Nice to meet you! xx"
              }
            ]
          }
        },
        {
          id: 2,
          target: {
            id: 2,
            name: "Anna",
            avatar: "https://i.pravatar.cc/300?img=38",
            messages: [
              {
                content: "Hey there! I'm Anna, Nice to meet you! xx"
              }
            ]
          }
        },
        {
          id: 3,
          target: {
            id: 3,
            name: "Peter",
            avatar: "https://i.pravatar.cc/300?img=57",
            messages: [
              {
                content: "Hey there! I'm Peter, Nice to meet you! xx"
              }
            ]
          }
        },
        {
          id: 4,
          target: {
            id: 4,
            name: "Gary",
            avatar: "https://i.pravatar.cc/300?img=55",
            messages: [
              {
                content: "Hey there! I'm Gary, Nice to meet you! xx"
              }
            ]
          }
        },
        {
          id: 5,
          target: {
            id: 5,
            name: "Rebecca",
            avatar: "https://i.pravatar.cc/300?img=9",
            messages: [
              {
                content: "Hey there! I'm Rebecca, Nice to meet you! xx"
              }
            ]
          }
        },
        {
          id: 6,
          target: {
            id: 6,
            name: "Jacob",
            avatar: "https://i.pravatar.cc/300?img=12",
            messages: [
              {
                content: "Hey there! I'm Jacob, Nice to meet you! xx"
              }
            ]
          }
        },
        {
          id: 7,
          target: {
            id: 7,
            name: "Jacob",
            avatar: "https://i.pravatar.cc/300?img=8",
            messages: [
              {
                content: "Hey there! I'm Jacob, Nice to meet you! xx"
              }
            ]
          }
        },
        {
          id: 8,
          target: {
            id: 8,
            name: "Taral",
            avatar: "https://i.pravatar.cc/300?img=33",
            messages: [
              {
                content: "Hey there! I'm Taral, Nice to meet you! xx"
              }
            ]
          }
        }
      ],
      channelLoader: null
    };
  },
  computed: {
    channels() {
      return this.$store.state.channels;
    }
  },
  methods: {
    onClickItem(channel) {
      console.log("clicked", channel);

      let targetUser = channel.users.filter(
        user => user.nickname !== this.$store.state.user.nickname
      );

      let targetUserMedia = targetUser[0].media.filter(
        media => media.index === 0
      );

      //this.$store.commit("setMessageTargetId", match.target.id);
      this.$store.commit("setMessageChannelName", channel.name);
      this.$store.commit("setMessageTargetName", targetUser[0].nickname);
      this.$store.commit("setMessageTargetAvatar", targetUserMedia[0].url);
      this.$store.commit("setMessageTargetAvatarType", targetUserMedia[0].type);

      //document.getElementById(match.id).style.backgroundColor = "#e2e8f0";
      this.$router.push("/message");
    },
    onClickBack() {
      this.$router.push("/user-profile");
    },
    getTargetAvatarType(channel) {
      let targetUser = channel.users.filter(
        user => user.nickname !== this.$store.state.user.nickname
      );

      let arr = targetUser[0].media.filter(media => media.index === 0);
      console.log("avatar type", arr[0].type);
      return arr[0].type;
    },
    getTargetAvatar(channel) {
      let targetUser = channel.users.filter(
        user => user.nickname !== this.$store.state.user.nickname
      );

      let arr = targetUser[0].media.filter(media => media.index === 0);
      console.log("avatar url", arr[0]);
      return arr[0].url;
    },
    getTargetNickname(channel) {
      let targetUser = channel.users.filter(
        user => user.nickname !== this.$store.state.user.nickname
      );
      return targetUser[0].nickname;
    },
    getLatestMessage(channel) {
      let latestMsgIndex = channel.messages.length - 1;
      console.log("latestMsgIndex", latestMsgIndex);
      if (latestMsgIndex == -1) {
        return "Start a new conversation now!";
      } else {
        return channel.messages[latestMsgIndex].content;
      }
    },
    async getChannels() {
      try {
        const results = await this.$apollo.query({
          query: gql`
            query($nickname: String!) {
              getUser(nickname: $nickname) {
                channels {
                  createdAt
                  messages {
                    by {
                      nickname
                    }
                    in {
                      name
                    }
                    content
                    timestamp
                  }
                  name
                  users {
                    nickname
                    media {
                      index
                      type
                      url
                    }
                  }
                }
              }
            }
          `,
          variables: {
            nickname: this.$store.state.user.nickname
          }
        });
        console.log("getUser results:", results.data.getUser);
        //store user object in vuex (simulate login)
        this.$store.commit("setChannels", results.data.getUser.channels);
      } catch (error) {
        console.error(error);
      }
    }
  },
  async mounted() {
    console.log("messages.vue mounted.");
    this.getChannels();
    this.channelLoader = setInterval(() => {
      this.getChannels();
    }, 1000);
  },
  beforeRouteLeave(to, from, next) {
    console.log("messages.vue is unmounted.");
    clearInterval(this.channelLoader);
    console.log("channelLoader stopped");
    next();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.lato-font {
  font-family: "Lato", sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 300ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
