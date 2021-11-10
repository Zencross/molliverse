<template>
  <div class="max-h-screen">
    <!-- Top Bar -->
    <div
      class="fixed top-0 z-10 flex items-center justify-between w-full pt-2 pb-2 bg-white border border-t-0 border-b-1"
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
          v-if="messageTargetAvatarType == 'IMAGE'"
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
        <div class="ml-3 text-lg font-semibold lato-font">
          {{ messageTargetName }}
        </div>
      </div>
      <div class="flex items-center justify-around mr-4">
        <img
          src="/img/video-call.svg"
          class="w-10 mr-2"
          alt=""
          @click="showGameModal = !showGameModal"
        />
        <img src="/img/phone-call.svg" class="w-10" alt="" />
      </div>
    </div>

    <!-- Never Have I Ever Game Window -->
    <transition name="fade">
      <div
        class="absolute top-auto z-20 w-full bg-white shadow-lg"
        v-if="showNHIESetupWindow"
      >
        <!-- <p>Game Window Here</p> -->
        <!-- Category Tab -->
        <div class="flex h-10">
          <button
            @click="NHIECategory = 'harmless'"
            class="w-1/3 text-white bg-modalBtnGreen"
          >
            Harmless
          </button>
          <button
            @click="NHIECategory = 'delicate'"
            class="w-1/3 text-white bg-modalBtnOrange"
          >
            Delicate
          </button>
          <button
            @click="NHIECategory = 'offensive'"
            class="w-1/3 text-white bg-modalBtnBlue"
          >
            Offensive
          </button>
        </div>

        <div class="px-4 py-2 text-xl font-semibold text-brandPurple">
          Never have I ever ...
        </div>

        <!-- Harmless Content -->
        <div v-if="NHIECategory == 'harmless'" class="flex flex-col">
          <div
            class="flex items-center"
            v-for="item in NHIEHarmlessContent"
            :key="item"
          >
            <div class="mx-4 my-2 text-lg text-gray-800 lato-font">
              {{ item }}
            </div>
            <button
              class="h-8 px-2 text-sm font-semibold bg-white border border-purple-700 rounded-2xl"
              @click="onClickNHIEItem(item)"
              :class="[
                NHIEUserSelections.includes(item)
                  ? 'bg-modalBtnGreen text-white'
                  : 'text-brandPurple'
              ]"
            >
              I Have
            </button>
          </div>
        </div>
        <!-- Delicate Content -->
        <div v-if="NHIECategory == 'delicate'" class="flex flex-col">
          <div
            class="flex items-center"
            v-for="item in NHIEDelicateContent"
            :key="item"
          >
            <div class="mx-4 my-2 text-lg text-gray-800 lato-font">
              {{ item }}
            </div>
            <button
              class="h-8 px-2 text-sm font-semibold bg-white border border-purple-700 rounded-2xl"
              @click="onClickNHIEItem(item)"
              :class="[
                NHIEUserSelections.includes(item)
                  ? 'bg-modalBtnGreen text-white'
                  : 'text-brandPurple'
              ]"
            >
              I Have
            </button>
          </div>
        </div>
        <!-- Offensive Content -->
        <div v-if="NHIECategory == 'offensive'" class="flex flex-col">
          <div
            class="flex items-center"
            v-for="item in NHIEOffensiveContent"
            :key="item"
          >
            <div class="mx-4 my-2 text-lg text-gray-800 lato-font">
              {{ item }}
            </div>
            <button
              class="h-8 px-2 text-sm font-semibold bg-white border border-purple-700 rounded-2xl"
              @click="onClickNHIEItem(item)"
              :class="[
                NHIEUserSelections.includes(item)
                  ? 'bg-modalBtnGreen text-white'
                  : 'text-brandPurple'
              ]"
            >
              I Have
            </button>
          </div>
        </div>

        <!-- Add custom NEIE item -->
        <div class="mx-3 mt-2 text-center text-blue-600 underline">
          Custom Questions
        </div>

        <div
          v-if="NHIEUserSelections.length < 5"
          class="mb-2 mr-6 text-lg font-semibold text-right text-green-500 lato-font"
        >
          {{ NHIEUserSelections.length }} / 5
        </div>
        <div
          v-else
          class="mb-2 mr-6 text-lg font-semibold text-right text-green-500 lato-font"
          @click="onClickStartNHIE"
        >
          Start Game
        </div>
      </div>
    </transition>

    <!-- NHIE Window -->
    <transition name="fade">
      <div
        v-if="showNHIEGameWindow"
        class="absolute top-auto z-20 w-full bg-white shadow-lg"
      >
        <p class="mt-4 text-2xl font-semibold text-center">Never Have I Ever</p>
        <p class="m-2 text-lg text-center">
          {{ messageTargetName }} has never been to the hospital.
        </p>
        <div class="flex m-2">
          <button
            class="w-1/2 h-12 mx-4 mt-4 mb-2 text-white rounded-xl bg-brandPurple"
            @click="showNHIEGameWindow = false"
          >
            True
          </button>
          <button
            class="w-1/2 h-12 mx-4 mt-4 mb-2 text-white rounded-xl bg-modalBtnOrange"
            @click="showNHIEGameWindow = false"
          >
            False
          </button>
        </div>
      </div>
    </transition>

    <!-- Message Container -->
    <!-- Re-calculate the height of messageContainer when native keyboard is activated -->
    <div class="z-0 overflow-scroll messagesContainer" id="messages">
      <transition-group name="fade">
        <div
          v-for="message in messages"
          :key="message.timestamp"
          class="flex w-full px-2 my-2 lato-font"
          :class="[
            message.by.nickname === messageTargetName
              ? 'justify-start'
              : 'justify-end'
          ]"
        >
          <div
            class="flex flex-col text-sm leading-tight message-box-max-width"
            :class="[
              message.by.nickname === messageTargetName ? 'receive' : 'send'
            ]"
          >
            <!-- Message Content -->
            <p class="break-words whitespace-pre-line">
              {{ message.content }}
            </p>

            <!-- Message Timestamp -->
            <div class="flex items-center mt-2 mb-1 text-xs">
              <div class="mr-2">{{ formattedDate(message.timestamp) }}</div>
              <!-- <img
              v-if="message.by.nickname === messageTargetName"
              src="/img/white-sent-icon.svg"
              alt=""
            /> -->
              <!-- Tick Icon (fake sent/received) -->
              <img
                v-if="message.by.nickname !== messageTargetName"
                src="/img/white-sent-icon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <!-- Input Bar -->
    <div
      class="fixed bottom-0 flex w-full h-20 py-4 bg-white justify-evenly"
      id="inputs"
    >
      <!-- Plus Icon -->
      <img src="/img/plus-icon.svg" class="w-5 mx-2" alt="" />

      <!-- Message Input Box -->
      <textarea
        type="text"
        class="w-8/12 h-12 p-3 pl-5 bg-gray-300 rounded-full outline-none"
        placeholder="New Message"
        v-model="input"
        @focus="onInputFocus"
        @blur="onInputBlur"
      />

      <!-- Send Button -->
      <div
        v-if="input"
        class="flex items-center justify-center w-12 h-12 mx-2 bg-gray-200 rounded-full shadow-md"
      >
        <img
          src="/img/send-24px.svg"
          class="flex items-center justify-center w-2/3"
          alt=""
          @click="onClickSendMessage"
        />
      </div>
      <div v-else class="flex">
        <img src="/img/camera-icon.svg" class="w-6 ml-2" alt="" />
        <img src="/img/record-icon.svg" class="w-6 mx-2" alt="" />
      </div>
    </div>

    <!-- Game Modal -->
    <transition name="fade">
      <GameModal
        v-if="showGameModal"
        @close-modal="closeModal"
        @start-game="startGame"
      />
    </transition>
  </div>
</template>

<script>
import GameModal from "../components/GameModal";
import gql from "graphql-tag";

export default {
  components: {
    GameModal
  },
  data() {
    return {
      messages: [],
      input: "",
      messageLoader: null,
      userIsScrolling: false,
      showGameModal: false,
      showNHIESetupWindow: false,
      showNHIEGameWindow: false,
      NHIECategory: "harmless",
      NHIEHarmlessContent: [
        "fainted",
        "been to the hospital",
        "had a paranormal experience",
        "gotten stitches"
      ],
      NHIEDelicateContent: [
        "fallen in love",
        "started a hashtag",
        "been on TV",
        "lied to my best friend"
      ],
      NHIEOffensiveContent: [
        "cheated",
        "ruined someone else's vacation",
        "used someone else's toothbrush",
        "broke a bone"
      ],
      NHIEUserSelections: []
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
      console.log("height of top bar", topBar.offsetHeight);

      var inputs = document.getElementById("inputs");
      console.log("height of inputs", inputs.offsetHeight);

      var messages = document.getElementById("messages");
      messages.style.height =
        window.innerHeight - topBar.offsetHeight - inputs.offsetHeight + "px";

      console.log("height of messages", messages.offsetHeight);

      window.setTimeout(function() {
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
      console.log("loading message");
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

        // console.log("loadMessages results", results.data.getChannel.messages);

        let oldMsgsLength = this.messages.length;
        let newMsgsLength = results.data.getChannel.messages.length;

        //  Update the messages array
        this.messages = results.data.getChannel.messages;

        if (newMsgsLength > oldMsgsLength) {
          this.scrollToBottom();
          console.log("call scrollToBottom");
        }

        // // If user hasn't scroll
        // if (this.userIsScrolling) {
        //   console.log("User is scrolling, pause auto scroll");
        // } else {
        //   this.scrollToBottom();
        //   // this.userIsScrolling = false;
        // }
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
    },
    closeModal() {
      this.showGameModal = false;
    },
    startGame(game) {
      console.log("startGame", game);
      this.showGameModal = false;
      this.showNHIESetupWindow = true;
    },
    onClickStartNHIE() {
      this.showNHIESetupWindow = false;
      this.showNHIEGameWindow = true;
    },
    onClickNHIEItem(item) {
      console.log("NHIE", item);
      if (this.NHIEUserSelections.includes(item)) {
        for (var i = 0; i < this.NHIEUserSelections.length; i++) {
          if (this.NHIEUserSelections[i] === item) {
            this.NHIEUserSelections.splice(i, 1);
          }
        }
        console.log("NHIE", this.NHIEUserSelections);
      } else {
        this.NHIEUserSelections.push(item);
        console.log("NHIE", this.NHIEUserSelections);
      }
    },
    onInputFocus() {
      console.log("onInputFocus, native keyboard should be triggered");
      var messages = document.getElementById("messages");
      var topBar = document.getElementById("topBar");
      var inputs = document.getElementById("inputs");
      messages.style.height =
        window.innerHeight -
        topBar.offsetHeight -
        inputs.offsetHeight -
        270 +
        "px";

      console.log("height of messages", messages.offsetHeight);
      messages.scrollTop = messages.scrollHeight;
    },
    onInputBlur() {
      console.log("onInputBlur, native keyboard should be hide");
      var messages = document.getElementById("messages");
      var topBar = document.getElementById("topBar");
      var inputs = document.getElementById("inputs");
      messages.style.height =
        window.innerHeight - topBar.offsetHeight - inputs.offsetHeight + "px";

      console.log("height of messages", messages.offsetHeight);
      messages.scrollTop = messages.scrollHeight;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* Original style class for sending and receiving dialog box */
/* .receive {
  @apply bg-brandPurple text-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-md pl-4 pt-3 pb-2 pr-4;
}

.send {
  @apply text-gray-900 bg-gray-300 rounded-tl-3xl rounded-tr-3xl rounded-br-md rounded-bl-3xl pl-4 pt-3 pb-2 pr-4;
} */

.receive {
  @apply text-gray-900 bg-gray-300 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-md pl-4 pt-0 pb-3 pr-4;
}

.send {
  @apply bg-brandPurple text-white rounded-tl-3xl rounded-tr-3xl rounded-br-md rounded-bl-3xl pl-4 pt-0 pb-3 pr-4;
}

.messagesContainer {
  display: flex;
  flex-direction: column;
  /* height: 200px; */
  background-color: rgba(255, 255, 255, 0.9);
}

.body {
  overflow: hidden;
}

.message-box-max-width {
  max-width: 70%;
}
</style>
