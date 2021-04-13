<template>
  <div class="select-none">
    <!-- Top Bar -->
    <div class="w-full border border-t-0 border-b-1">
      <div
        @click="onClickTitle"
        class="pt-6 pb-4 pl-4 text-2xl font-bold lato-font"
      >
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
      class="flex items-center py-4 bg-white border border-t-0 border-b-1"
      v-for="channel in channels"
      :key="channel.name"
      :id="channel.name"
      @click="onClickItem(channel)"
    >
      <img
        :src="getTargetAvatar(channel)"
        alt="Avatar"
        class="object-cover w-16 h-16 ml-3 rounded-full"
      />

      <div class="flex flex-col justify-center w-9/12 mx-3">
        <div class="text-lg font-bold lato-font">
          {{ getTargetNickname(channel) }}
        </div>
        <div class="flex flex-wrap leading-tight text-gray-600 lato-font">
          Hey there! I'm Kit, Nice to meet you! xx
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      ]
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

      //document.getElementById(match.id).style.backgroundColor = "#e2e8f0";
      this.$router.push("/message");
    },
    onClickTitle() {
      this.$router.push("/user-profile");
    },
    getTargetAvatar(channel) {
      let targetUser = channel.users.filter(
        user => user.nickname !== this.$store.state.user.nickname
      );

      let arr = targetUser[0].media.filter(media => media.index === 0);

      return arr[0].url;
    },
    getTargetNickname(channel) {
      let targetUser = channel.users.filter(
        user => user.nickname !== this.$store.state.user.nickname
      );
      return targetUser[0].nickname;
    }
  },
  created() {}
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

.image-cropper {
  /* height: 4rem;
  width: 4rem;
  object-fit: contain;
  overflow: hidden;
  border-radius: 50%; */
}

.avatar {
}
</style>
