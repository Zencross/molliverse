<template>
  <div>
    <!-- Top Bar -->
    <div
      class="flex items-center justify-between w-full pt-2 pb-2 border border-t-0 border-b-1"
    >
      <img
        src="/img/arrow-back-24px.svg"
        class="w-12 pl-4"
        alt=""
        @click="onClickBack"
      />
      <div class="flex items-center ml-5">
        <img :src="messageTargetAvatar" alt="" class="w-2/12 rounded-full" />
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
    <div class="overflow-scroll messagesContainer" id="messages">
      <div
        v-for="message in messages"
        class="flex w-full px-2 my-2 lato-font"
        :class="[
          message.by.id === messageTargetId ? 'justify-start' : 'justify-end'
        ]"
      >
        <div
          class="flex flex-col w-1/2 text-sm leading-tight"
          :class="[message.by.id === messageTargetId ? 'receive' : 'send']"
        >
          <div>
            {{ message.content }}
          </div>
          <div class="flex items-center mt-2 mb-1 text-xs">
            <div class="mr-2">{{ formattedDate(message.timestamp) }}</div>
            <img
              v-if="message.by.id === messageTargetId"
              src="/img/white-sent-icon.svg"
              alt=""
            />
            <img v-else src="/img/dark-sent-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Input Bar -->
    <div class="sticky bottom-0 flex w-full py-4 bg-white justify-evenly">
      <img src="/img/plus-icon.svg" class="w-6 mx-2" alt="" />
      <input
        type="text"
        class="w-9/12 p-3 pl-5 bg-gray-300 rounded-full outline-none"
        placeholder="New Message"
      />
      <img src="/img/camera-icon.svg" class="w-8 ml-2" alt="" />
      <img src="/img/record-icon.svg" class="w-8 mx-2" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  computed: {
    messageTargetId() {
      return this.$store.state.messageTargetId;
    },
    messageTargetAvatar() {
      return this.$store.state.messageTargetAvatar;
    },
    messageTargetName() {
      return this.$store.state.messageTargetName;
    }
  },
  methods: {
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
    }
  },
  mounted() {
    window.setInterval(function() {
      var elem = document.getElementById("messages");
      console.log("elem", elem);
      elem.scrollTop = elem.scrollHeight;
    }, 5000);
    //   Fetch latest messages
    this.messages = [
      {
        id: 1,
        by: {
          id: this.messageTargetId,
          name: this.messageTargetName
        },
        content: `Hey there! I'm ${this.messageTargetName}, Nice to meet you! xx`,
        timestamp: `2021-02-21T14:01:05.000Z`
      },
      {
        id: 2,
        by: {
          id: 99,
          name: "User"
        },
        content: "Hey. My name's Microsoft. Can I crash at your's tonight?",
        timestamp: `2021-02-21T14:02:05.000Z`
      },
      {
        id: 3,
        by: {
          id: this.messageTargetId,
          name: this.messageTargetName
        },
        content: "OMG you’re soooo silly haha Haven’t heard that one before ;)",
        timestamp: `2021-02-21T14:02:55.000Z`
      },
      {
        id: 4,
        by: {
          id: 99,
          name: "User"
        },
        content: "Do you wanna grab a drink?",
        timestamp: `2021-02-21T14:03:05.000Z`
      },
      {
        id: 5,
        by: {
          id: this.messageTargetId,
          name: this.messageTargetName
        },
        content: "Sure thing :) But lets know each other more first.",
        timestamp: `2021-02-21T14:03:45.000Z`
      },
      {
        id: 6,
        by: {
          id: this.messageTargetId,
          name: this.messageTargetName
        },
        content: "Who is your favourite singer?",
        timestamp: `2021-02-21T14:04:05.000Z`
      },
      {
        id: 7,
        by: {
          id: 99,
          name: "User"
        },
        content: "I dont really have one. Probably myself.",
        timestamp: `2021-02-21T14:05:35.000Z`
      },
      {
        id: 8,
        by: {
          id: 99,
          name: "User"
        },
        content: "Let's play a game together.",
        timestamp: `2021-02-21T14:06:00.000Z`
      },
      {
        id: 9,
        by: {
          id: this.messageTargetId,
          name: this.messageTargetName
        },
        content: "Sure thing!",
        timestamp: `2021-02-21T14:07:00.000Z`
      }
    ];
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

.receive {
  @apply bg-brandPurple text-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-md pl-4 pt-3 pb-2 pr-4;
}

.send {
  @apply text-gray-900 bg-gray-300 rounded-tl-3xl rounded-tr-3xl rounded-br-md rounded-bl-3xl pl-4 pt-3 pb-2 pr-4;
}

.messagesContainer {
  display: flex;
  flex-direction: column;
  height: auto;
}
</style>
