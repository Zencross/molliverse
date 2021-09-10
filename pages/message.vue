<template>
  <div>
    <!-- Top Bar -->
    <div
      class="sticky top-0 z-10 flex items-center justify-between w-full pt-2 pb-2 bg-white border border-t-0 border-b-1"
      id="topBar"
    >
      <img
        src="/img/arrow-back-24px.svg"
        class="w-12 pl-4"
        alt=""
        @click="onClickBack"
      />
      <div class="flex items-center w-full ml-2">
        <img
          v-if="messageTargetAvatarType == 'PHOTO'"
          :src="messageTargetAvatar"
          alt="Avatar"
          class="object-cover w-12 h-12 rounded-full"
        />
        <video
          autoplay
          loop
          playsinline
          v-if="messageTargetAvatarType == 'VIDEO'"
          :src="messageTargetAvatar"
          alt="Avatar Video"
          class="object-cover w-12 h-12 rounded-full"
        ></video>
        <div class="ml-2 text-lg font-semibold lato-font">
          {{ messageTargetName }}
        </div>
      </div>
      <div class="flex items-center justify-around mr-4">
        <img src="/img/video-call.svg" class="w-10 mr-2" alt="" />
        <img src="/img/phone-call.svg" class="w-10" alt="" />
      </div>
    </div>

    <!-- Message Container -->
    <div class="z-0 overflow-scroll messagesContainer" id="messages">
      <div
        v-for="message in messages"
        class="flex w-full px-2 my-2 lato-font"
        :class="[
          message.by.nickname === messageTargetName
            ? 'justify-start'
            : 'justify-end'
        ]"
      >
        <div
          class="flex flex-col w-1/2 text-sm leading-tight"
          :class="[
            message.by.nickname === messageTargetName ? 'receive' : 'send'
          ]"
        >
          <div>
            {{ message.content }}
          </div>
          <div class="flex items-center mt-2 mb-1 text-xs">
            <div class="mr-2">{{ formattedDate(message.timestamp) }}</div>
            <!-- <img
              v-if="message.by.nickname === messageTargetName"
              src="/img/white-sent-icon.svg"
              alt=""
            /> -->
            <img
              v-if="message.by.nickname !== messageTargetName"
              src="/img/white-sent-icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Input Bar -->
    <div
      class="fixed bottom-0 flex w-full pt-2 pb-6 bg-white justify-evenly"
      id="inputs"
    >
      <img src="/img/plus-icon.svg" class="w-5 mx-2" alt="" />
      <input
        type="text"
        class="w-9/12 p-3 pl-5 bg-gray-300 rounded-full outline-none"
        placeholder="New Message"
        v-model="input"
        @keyup.enter="onClickSendMessage"
      />
      <div v-if="input" class="flex items-center">
        <img
          src="/img/send-24px.svg"
          class="flex items-center justify-center w-8 mx-2 mt-1"
          alt=""
          @click="onClickSendMessage"
        />
      </div>
      <div v-else class="flex">
        <img src="/img/camera-icon.svg" class="w-8 ml-2" alt="" />
        <img src="/img/record-icon.svg" class="w-8 mx-2" alt="" />
      </div>
    </div>

    <!-- <Wingman /> -->
  </div>
</template>

<script>
import Wingman from "../components/Wingman";
import gql from "graphql-tag";

export default {
  components: {
    Wingman
  },
  data() {
    return {
      messages: [],
      input: "",
      messageLoader: null,
      userIsScrolling: false
    };
  },
  computed: {
    // messageTargetId() {
    //   return this.$store.state.messageTargetId;
    // },
    messageTargetAvatar() {
      return this.$store.state.messageTargetAvatar;
    },
    messageTargetAvatarType() {
      return this.$store.state.messageTargetAvatarType;
    },
    messageTargetName() {
      return this.$store.state.messageTargetName;
    },
    messageChannelName() {
      return this.$store.state.messageChannelName;
    }
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      this.userIsScrolling = true;
      console.log("scrolling detected!!", this.userIsScrolling);
    },
    scrollToBottom() {
      var topBar = document.getElementById("topBar");
      // console.log("height of top bar", topBar.offsetHeight);

      var inputs = document.getElementById("inputs");
      // console.log("height of inputs", inputs.offsetHeight);

      // console.log("inner height", window.innerHeight);

      var messages = document.getElementById("messages");
      messages.style.height =
        window.innerHeight - topBar.offsetHeight - inputs.offsetHeight + "px";

      // console.log("height of messages", messages.offsetHeight);

      window.setTimeout(function() {
        // var elem = document.getElementById("messages");
        messages.scrollTop = messages.scrollHeight;
        console.log("scrolled");
      }, 100);
    },
    onClickBack() {
      this.$router.push("/messages");
    },
    formattedDate(date) {
      var today = new Date(date);
      var options = {
        hour12: true,
        weekday: "short",
        hour: "numeric",
        minute: "numeric"
      };
      return today.toLocaleString("en-US", options);
    },
    async loadMessages() {
      // console.log("loading message");
      try {
        const results = await this.$apollo.query({
          query: gql`
            query($name: String!) {
              getChannel(name: $name) {
                createdAt
                messages {
                  by {
                    nickname
                  }
                  content
                  timestamp
                }
                name
              }
            }
          `,
          variables: {
            name: this.$store.state.messageChannelName
          }
        });
        // console.log("getChannel results:", results.data.getChannel);
        this.messages = results.data.getChannel.messages;

        // If user hasn't scroll
        if (this.userIsScrolling) {
          console.log("User is scrolling, pause auto scroll");
        } else {
          this.scrollToBottom();
          // this.userIsScrolling = false;
        }
        // this.scrollToBottom();
      } catch (error) {
        console.error(error);
      }
    },
    async onClickSendMessage() {
      if (!this.input) return;

      console.log("sending message", this.input);
      let messageInput = [
        {
          by: { nickname: this.$store.state.user.nickname },
          in: { name: this.$store.state.messageChannelName },
          content: this.input,
          timestamp: new Date().toISOString()
        }
      ];

      console.log("addMessage Input:", messageInput);

      try {
        const results = await this.$apollo.mutate({
          mutation: gql`
            mutation($input: [AddMessageInput!]!) {
              addMessage(input: $input) {
                message {
                  by {
                    name
                  }
                  in {
                    name
                  }
                  content
                  timestamp
                }
              }
            }
          `,
          variables: {
            input: messageInput
          }
        });
        console.log("addMessage results", results);
        this.input = "";
      } catch (e) {
        console.error(e);
      }

      this.loadMessages();
      // this.scrollToBottom();
    }
  },

  mounted() {
    console.log("message.vue mounted.");

    window.addEventListener("scroll", this.handleScroll);

    // this.loadMessages();

    this.messageLoader = setInterval(() => {
      this.loadMessages();
    }, 1000);
  },
  beforeRouteLeave(to, from, next) {
    console.log("message.vue is unmounted.");
    clearInterval(this.messageLoader);
    console.log("messageLoader stopped");
    window.removeEventListener("scroll", this.handleScroll);
    console.log("remove scroll event listener");
    next();
  },
  destroyed() {
    if (this.messageLoader) clearInterval(this.messageLoader);
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.lato-font {
  font-family: "Lato", sans-serif;
}

/* Original style class for sending and receiving dialog box */
/* .receive {
  @apply bg-brandPurple text-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-md pl-4 pt-3 pb-2 pr-4;
}

.send {
  @apply text-gray-900 bg-gray-300 rounded-tl-3xl rounded-tr-3xl rounded-br-md rounded-bl-3xl pl-4 pt-3 pb-2 pr-4;
} */

.receive {
  @apply text-gray-900 bg-gray-300 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-md pl-4 pt-3 pb-2 pr-4;
}

.send {
  @apply bg-brandPurple text-white rounded-tl-3xl rounded-tr-3xl rounded-br-md rounded-bl-3xl pl-4 pt-3 pb-2 pr-4;
}

.messagesContainer {
  display: flex;
  flex-direction: column;
  /* height: 200px; */
}

.body {
  overflow: hidden;
}
</style>
