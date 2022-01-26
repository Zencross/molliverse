<template>
  <div class="flex flex-col -mt-8" id="parent">
    <!-- Top Bar -->
    <div
      class="sticky top-0 z-10 flex items-center justify-between w-full pt-10 pb-2 overflow-hidden bg-white border border-t-0 border-b-1"
      id="topBar"
      v-show="!showNHIEGameWindow"
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

    <!-- NHIE In-Game Window (New)  -->
    <transition name="fade">
      <div
        id="NHIEGameWindow"
        v-show="showNHIEGameWindow"
        class="sticky top-0 z-20 w-full overflow-hidden bg-white shadow-lg "
      >
        <div class="flex items-center justify-center">
          <img
            src="/img/back-arrow.png"
            alt="back"
            class="absolute left-0 ml-4"
            @click="onClickExitGame"
          />
          <div class="pt-8">
            <p class="mt-4 text-3xl font-medium text-center">
              Never Have I Ever
            </p>
            <p class="m-2 text-lg text-center">
              Question
              {{ NHIETargetUserSelections[NHIETargetQuestionIndex].id }}:
              <br />
              {{ messageTargetName }}
              has
              {{ NHIETargetUserSelections[NHIETargetQuestionIndex].question }}.
            </p>
          </div>
        </div>

        <div class="flex justify-between">
          <div class="flex flex-col my-4">
            <p class="mx-4 mb-2">You</p>
            <!-- Full HP -->
            <div v-if="NHIEUserLives == 3" class="flex justify-between mx-4">
              <img class="mr-1" src="/img/game-heart-filled.png" alt="" />
              <img class="mr-1" src="/img/game-heart-filled.png" alt="" />
              <img class="" src="/img/game-heart-filled.png" alt="" />
            </div>
            <div v-if="NHIEUserLives == 2" class="flex justify-between mx-4">
              <img class="mr-1" src="/img/game-heart-filled.png" alt="" />
              <img class="mr-1" src="/img/game-heart-filled.png" alt="" />
              <img class="" src="/img/game-heart-empty.png" alt="" />
            </div>
            <div v-if="NHIEUserLives == 1" class="flex justify-between mx-4">
              <img class="mr-1" src="/img/game-heart-filled.png" alt="" />
              <img class="mr-1" src="/img/game-heart-empty.png" alt="" />
              <img class="" src="/img/game-heart-empty.png" alt="" />
            </div>
            <div v-if="NHIEUserLives == 0" class="flex justify-between mx-4">
              <img class="mr-1" src="/img/game-heart-empty.png" alt="" />
              <img class="mr-1" src="/img/game-heart-empty.png" alt="" />
              <img class="" src="/img/game-heart-empty.png" alt="" />
            </div>
          </div>
          <div class="flex flex-col my-4">
            <p class="mx-4 mb-2 text-right">{{ messageTargetName }}</p>
            <div class="flex justify-between mx-4">
              <img class="mr-1" src="/img/game-heart-filled.png" alt="" />
              <img class="mr-1" src="/img/game-heart-filled.png" alt="" />
              <img class="" src="/img/game-heart-filled.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Congrat screen (temparory) -->
    <transition name="fade">
      <div
        class="absolute top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center w-full bg-white"
        v-if="showNHIECongratScreen"
      >
        <div class="flex items-center justify-center w-full">
          <img src="/img/you_win.png" alt="" class="" />
        </div>
        <div class="text-3xl font-semibold text-center text-black">
          Congratulations!
        </div>
        <div class="mt-2 text-center">
          You won the game
        </div>
        <button
          class="w-10/12 py-4 mt-6 font-semibold text-black bg-white border border-black lato-font rounded-xl"
          @click="showNHIECongratScreen = false"
        >
          Back to Chat
        </button>
      </div>
    </transition>

    <!-- Sorry screen (temparory) -->
    <transition name="fade">
      <div
        class="absolute top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center w-full bg-white"
        v-if="showNHIESorryScreen"
      >
        <div class="flex items-center justify-center w-full">
          <img src="/img/you_lose.png" alt="" class="" />
        </div>
        <div class="text-3xl font-semibold text-center text-black">
          Sorry!
        </div>
        <div class="mt-2 text-center">
          You lost the game
        </div>
        <button
          class="w-10/12 py-4 mt-6 font-semibold text-black bg-white border border-black lato-font rounded-xl"
          @click="showNHIESorryScreen = false"
        >
          Back to Chat
        </button>
      </div>
    </transition>

    <!-- Never Have I Ever Game Setup Window -->
    <transition name="fade">
      <div v-if="showNHIESetupWindow">
        <div
          class="absolute top-0 bottom-0 left-0 right-0 z-20 w-full bg-black opacity-50"
        ></div>

        <div
          class="absolute bottom-0 z-30 w-full bg-white shadow-xl rounded-t-xl"
        >
          <div
            class="px-4 pt-4 pb-2 text-2xl font-semibold text-center text-black"
          >
            Never Have I Ever
          </div>

          <div class="px-4 pb-3 text-sm leading-tight text-center text-black">
            Prompts will pop up on the screen. Select whether you’ve done it or
            not. You gain a point if you guess correctly on whether your match
            has done it or not.
          </div>

          <!-- <p>Game Window Here</p> -->
          <!-- Category Tab -->
          <div class="flex h-10 mx-3 mb-4">
            <button
              @click="NHIECategory = 'HARMLESS'"
              class="w-1/3 text-sm text-black "
              :class="[NHIECategory == 'HARMLESS' ? 'font-extrabold' : '']"
            >
              Harmless
            </button>
            <button
              @click="NHIECategory = 'DELICATE'"
              class="w-1/3 text-sm text-black "
              :class="[NHIECategory == 'DELICATE' ? 'font-extrabold' : '']"
            >
              Delicate
            </button>
            <button
              @click="NHIECategory = 'DIRTY'"
              class="w-1/3 text-sm text-black "
              :class="[NHIECategory == 'DIRTY' ? 'font-extrabold' : '']"
            >
              Dirty
            </button>
            <button
              @click="NHIECategory = 'OFFENSIVE'"
              class="w-1/3 text-sm text-black "
              :class="[NHIECategory == 'OFFENSIVE' ? 'font-extrabold' : '']"
            >
              Offensive
            </button>
          </div>

          <!-- Harmless Content -->
          <div v-if="NHIECategory == 'HARMLESS'" class="flex flex-col">
            <div
              class="flex items-center justify-between mx-5"
              v-for="item in NHIEHarmlessContent"
              :key="item"
            >
              <div class="my-2 text-lg text-gray-800 lato-font">
                {{ item }}
              </div>
              <button
                class="h-8 px-2 text-sm font-semibold border border-black rounded-2xl disable-dbl-tap-zoom"
                @click="onClickNHIEItem(item)"
                :class="[
                  NHIEUserSelections.includes(item)
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                ]"
              >
                I Have
              </button>
            </div>
          </div>
          <!-- Delicate Content -->
          <div v-if="NHIECategory == 'DELICATE'" class="flex flex-col">
            <div
              class="flex items-center justify-between mx-5"
              v-for="item in NHIEDelicateContent"
              :key="item"
            >
              <div class="my-2 text-lg text-gray-800 lato-font">
                {{ item }}
              </div>
              <button
                class="h-8 px-2 text-sm font-semibold border border-black rounded-2xl disable-dbl-tap-zoom"
                @click="onClickNHIEItem(item)"
                :class="[
                  NHIEUserSelections.includes(item)
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                ]"
              >
                I Have
              </button>
            </div>
          </div>
          <!-- Dirty Content -->
          <div v-if="NHIECategory == 'DIRTY'" class="flex flex-col">
            <div
              class="flex items-center justify-between mx-5"
              v-for="item in NHIEDirtyContent"
              :key="item"
            >
              <div class="my-2 text-lg text-gray-800 lato-font">
                {{ item }}
              </div>
              <button
                class="h-8 px-2 text-sm font-semibold border border-black rounded-2xl disable-dbl-tap-zoom"
                @click="onClickNHIEItem(item)"
                :class="[
                  NHIEUserSelections.includes(item)
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                ]"
              >
                I Have
              </button>
            </div>
          </div>
          <!-- Offensive Content -->
          <div v-if="NHIECategory == 'OFFENSIVE'" class="flex flex-col">
            <div
              class="flex items-center justify-between mx-5"
              v-for="item in NHIEOffensiveContent"
              :key="item"
            >
              <div class="my-2 text-lg text-gray-800 lato-font">
                {{ item }}
              </div>
              <button
                class="h-8 px-2 text-sm font-semibold border border-black rounded-2xl disable-dbl-tap-zoom"
                @click="onClickNHIEItem(item)"
                :class="[
                  NHIEUserSelections.includes(item)
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                ]"
              >
                I Have
              </button>
            </div>
          </div>

          <!-- Add custom NHIE item -->
          <!-- <div class="mx-3 mt-2 text-center text-blue-600 underline">
            Custom Questions
          </div> -->

          <div class="flex justify-center">
            <button
              v-if="NHIEUserSelections.length < 5"
              class="w-full py-4 m-4 font-semibold text-white bg-black opacity-50 lato-font rounded-xl"
              disabled
            >
              {{ NHIEUserSelections.length }} / 5 selected
            </button>

            <button
              v-else
              class="w-full py-4 m-4 font-semibold text-white bg-black lato-font rounded-xl"
              @click="onClickStartNHIE"
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Message Container -->
    <!-- Re-calculate the height of messageContainer when native keyboard is activated -->
    <div class="z-0 overflow-scroll messagesContainer" id="messages">
      <div v-if="messages.length == 0" class="flex justify-center w-full ">
        <p
          class="px-4 py-1 my-4 text-gray-900 bg-gray-300 shadow-md rounded-2xl"
        >
          Start chatting, Say Hi to {{ messageTargetName }}!
        </p>
      </div>
      <!-- Messages -->
      <transition-group name="fade">
        <div
          v-for="message in messages"
          :key="message.timestamp"
          class="flex flex-auto w-full px-2 my-2 lato-font"
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

      <!-- NHIE Game Answer Window (True/False) -->
      <transition name="fade">
        <div
          v-if="showNHIEGameWindow"
          class="z-20 flex flex-col w-full bg-white rounded-t-lg"
        >
          <transition name="fade">
            <p
              v-if="NHIERoundResult == 'correct'"
              class="mt-3 font-medium text-center text-green-500"
            >
              You're correct! Q{{
                NHIETargetUserSelections[NHIETargetQuestionIndex].id
              }}
              answer is
              {{ NHIETargetUserSelections[NHIETargetQuestionIndex].answer }}!
            </p>
          </transition>

          <transition name="fade">
            <p
              v-if="NHIERoundResult == 'wrong'"
              class="mt-4 font-medium text-center text-red-500"
            >
              You're wrong! Q{{
                NHIETargetUserSelections[NHIETargetQuestionIndex].id
              }}
              answer is
              {{ NHIETargetUserSelections[NHIETargetQuestionIndex].answer }}!
            </p>
          </transition>
          <div class="flex">
            <button
              class="w-1/2 h-12 mx-4 mt-4 mb-2 text-sm font-medium border border-black rounded-full disable-dbl-tap-zoom"
              :class="[
                blockTrueButton ? 'bg-black text-white' : 'bg-white text-black'
              ]"
              @click="onClickNHIEAnswerTrue"
              :disabled="blockTrueButton"
            >
              True
            </button>
            <button
              class="w-1/2 h-12 mx-4 mt-4 mb-2 text-sm font-medium border border-black rounded-full disable-dbl-tap-zoom"
              :class="[
                blockFalseButton ? 'bg-black text-white' : 'bg-white text-black'
              ]"
              @click="onClickNHIEAnswerFalse"
              :disabled="blockFalseButton"
            >
              False
            </button>
          </div>
        </div>
      </transition>
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
      showGameModal: false, // Controls the display of wingman game suggestion
      showNHIESetupWindow: false, // Controls the display of NHIE Setup Window (Choose Question)
      showNHIEGameWindow: false, // Controls the display of NHIE In-Game Window (Question + users' lives)
      showNHIECongratScreen: false,
      showNHIESorryScreen: false,
      NHIEGameStateLoader: null,
      NHIEGameStateID: null,
      NHIEGameSourceNick: "",
      NHIEGameTargetNick: "",
      NHIERoundResult: "",
      NHIECategory: "HARMLESS",
      /*NHIEHarmlessContent: [
        "fainted",
        "been to the hospital",
        "had a paranormal experience",
        "gotten stitches",
        "been to Iceland"
      ],
      NHIEDelicateContent: [
        "fallen in love",
        "started a hashtag",
        "been on TV",
        "lied to a best friend",
        "raced on the circuit"
      ],
      NHIEDirtyContent: [
        "being crazy",
        "stolen something in a store",
        "had crush on relatives",
        "bullied someone in high school",
        "been drunk"
      ],
      NHIEOffensiveContent: [
        "cheated",
        "ruined someone else's vacation",
        "used someone else's toothbrush",
        "broken a bone",
        "fled to another country"
      ],*/
      NHIEHarmlessContent: [],
      NHIEDelicateContent: [],
      NHIEDirtyContent: [],
      NHIEOffensiveContent: [],
      NHIEUserSelections: [], // Current User Selection of NHIE Question
      NHIETargetUserSelections: [],
      /*NHIETargetUserSelections: [
        { id: 1, question: "ruined someone else's vacation", answer: true },
        { id: 2, question: "stolen something in a store", answer: true },
        { id: 3, question: "bullied someone in high school", answer: false },
        { id: 4, question: "lied to a best friend", answer: false },
        { id: 5, question: "had a paranormal experience", answer: false },
        { id: 6, question: "been drunk", answer: true },
        { id: 7, question: "been to Iceland", answer: true },
        { id: 8, question: "cheated", answer: false },
        { id: 9, question: "gotten stitches", answer: true },
        { id: 10, question: "broken a bone", answer: false }
      ],*/
      NHIETargetQuestionIndex: 0, // value range from 0-4 (5 Questions),
      blockTrueButton: false,
      blockFalseButton: false,
      NHIEUserLives: 3,
      NHIETargetUserLives: 3
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
      setTimeout(() => {
        console.log("wait time");
      }, 1000);

      var topBar;
      if (!this.showNHIEGameWindow) {
        topBar = document.getElementById("topBar");
        console.log("elem topBar", topBar);
        console.log("height of top bar", topBar.offsetHeight);
      }

      var inputs = document.getElementById("inputs");
      console.log("elem inputs", inputs);
      console.log("height of inputs", inputs.offsetHeight);

      var NHIEGameWindow;
      if (this.showNHIEGameWindow) {
        NHIEGameWindow = document.getElementById("NHIEGameWindow");
        console.log("elem NHIE game window", NHIEGameWindow);
        console.log("height of NHIE game window", NHIEGameWindow.offsetHeight);
      }

      var messages = document.getElementById("messages");

      if (this.showNHIEGameWindow) {
        messages.style.height =
          window.innerHeight -
          NHIEGameWindow.offsetHeight -
          inputs.offsetHeight +
          "px";
      } else {
        messages.style.height =
          window.innerHeight - topBar.offsetHeight - inputs.offsetHeight + "px";
      }

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
    async loadNHIEQuestions() {
      console.log("loading NHIE questions");

      try {
        const results = await this.$apollo.query({
          query: gql`
            query {
              queryNhieGameState {
                category
                question
              }
            }
          `,
          variables: {
            name: this.$store.state.messageChannelName
          }
        });

        console.log("NHIE questions", results.data.queryNhieGameQuestion);

        this.NHIEHarmlessContent = results.filter(r => r.category === "HARMLESS")
        this.NHIEDelicateContent = results.filter(r => r.category === "DELICATE")
        this.NHIEDirtyContent = results.filter(r => r.category === "DIRTY")
        this.NHIEOffensiveContent = results.filter(r => r.category === "OFFENSIVE")

        console.log("HARMLESS: ", this.NHIEHarmlessContent)
        console.log("DELICATE: ", this.NHIEDelicateContent)
        console.log("DIRTY: ", this.NHIEDirtyContent)
        console.log("OFFENSIVE: ", this.NHIEOffensiveContent)
      } catch (error) {
        console.error(error);
      }
    },
    async loadNHIEGameState() {
      console.log("loading NHIE game state");
      try {
        let gameState = null
        if (this.NHIEGameStateID) {
          // This user started game
          const results = await this.$apollo.query({
            query: gql`
              query($id: String!) {
                getNhieGameState($id: String!) {
                  isInProgress
                  sourceLives
                  targetLives
                  sourceAnswers {
                    question {
                      id
                    }
                    answer
                  }
                  targetAnswers {
                    question {
                      id
                    }
                    answer
                  }
                }
              }
            `,
            variables: {
              id: this.NHIEGameStateID
            }
          });
          console.log("loaded NHIE game state ", results.data.getNhieGameState)
          gameState = results.data.getNhieGameState
        } else {
          // Other user started game
          console.log("NHIE game state", results.data.getNhieGameState);
          
          const results = await this.$apollo.query({
            query: gql`
              query($sourceNick: String!, $targetNick: String!) {
                queryNhieGameState(
                  filter: {
                    and: [
                      { sourceNick: { eq: $sourceNick }},
                      { targetNick: { eq: $targetNick }}
                    ]
                  }
                ) {
                  isInProgress
                  sourceLives
                  targetLives
                  sourceAnswers {
                    question {
                      id
                    }
                    answer
                  }
                  targetAnswers {
                    question {
                      id
                    }
                    answer
                  }
                }
              }
            `,
            variables: {
              sourceNick: this.messageTargetName,
              targetNick: this.$store.state.user.nickname
            }l
          });
          if (results.data.getNhieGameState) {
            console.log("loaded NHIE game state ", results.data.getNhieGameState)
            gameState = results.data.getNhieGameState
          }
        }
        if (gameState) {

        } else {
          console.log("no NHIE game in progress")
        }
      } catch (error) {
        console.error(error);
      }
    },
    async updateNHIEGameState() {
      try {
        let gameStateInput = null
        if (this.NHIEGameStateID) {
          gameStateInput = {
            sourceLives: this.NHIEUserLives
            sourceAnswers: this.NHIEUserSelections
          }
        } else {
          gameStateInput = {
            targetLives: this.NHIEUserLives
            targetAnswers: this.NHIEUserSelections
          }
        }
        const results = await this.$apollo.mutate({
          mutation: gql`
            mutation($input: UpdateNHIEGameStateInput!) {
              updateNHIEGameState(input: $input) {
                isInProgress
                sourceLives
                targetLives
                sourceAnswers {
                  question {
                    id
                  }
                  answer
                }
                targetAnswers {
                  question {
                    id
                  }
                  answer
                }
              }
            }
          `,
          variables: {
            input: gameStateInput
          }
        });
        console.log("updateNHIEGameState results", results);
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

      try {
        const gameStateInput = {
          sourceNick: this.$state.user.nickname,
          targetNick: this.messageTargetName,
          sourceLives: 3,
          targetLives: 3,
          isInProgress: true,
          sourceAnswers: [],
          targetAnswers: []
        }
        const results = await this.$apollo.mutate({
          mutation: gql`
            mutation($input: [AddNhieGameStateInput!) {
              addNhieGameState(input: $input) {
                id
              }
            }
          `,
          variables: {
            input: gameStateInput
          }
        });
        console.log("addNhieGameState results", results.data.addNhieGameState);
        this.NHIEGameStateID = results.data.addNhieGameState.id
      } catch (e) {
        console.error(e);
      }

      this.showGameModal = false;
      this.showNHIESetupWindow = true;
    },
    onClickStartNHIE() {
      this.showNHIESetupWindow = false;
      this.showNHIEGameWindow = true;
      setTimeout(() => {
        console.log("wait 5 sec after click NHIE start");
        this.scrollToBottom();
      }, 100);
    },
    onClickNHIEItem(item) {
      console.log("NHIE", item);

      if (this.NHIEUserSelections.includes(item)) {
        // Find and remove
        for (var i = 0; i < this.NHIEUserSelections.length; i++) {
          if (this.NHIEUserSelections[i] === item) {
            this.NHIEUserSelections.splice(i, 1);
          }
        }
        console.log("NHIE", this.NHIEUserSelections);
      } else if (this.NHIEUserSelections.length < 5) {
        this.NHIEUserSelections.push(item);
        console.log("NHIE", this.NHIEUserSelections);
      }
    },
    onInputFocus() {
      console.log("UA: ", navigator.userAgent);
      // if (navigator.userAgentData.mobile == false) {
      //   console.log("non mobile detected. Not shrinking the message container");
      //   return;
      // }

      console.log("onInputFocus, native keyboard should be triggered");
      var messages = document.getElementById("messages");
      var topBar = document.getElementById("topBar");
      var inputs = document.getElementById("inputs");
      var parent = document.getElementById("parent");

      // Calculate 40% of the innerHeight as the keyboard height
      var IOSKeyboardHeight = Math.round(window.innerHeight * 0.35);
      console.log("Estimated keyboard height: ", IOSKeyboardHeight);

      messages.style.height =
        window.innerHeight -
        topBar.offsetHeight -
        inputs.offsetHeight -
        300 +
        "px";

      console.log("height of messages", messages.offsetHeight);

      window.setTimeout(function() {
        "wait 1 sec and scroll...";
        // Scroll to top of page
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        console.log("Scroll to top of page");
      }, 100);

      // Scroll to latest message
      messages.scrollTop = messages.scrollHeight;
      console.log("Scroll to latest message");
    },
    onInputBlur() {
      console.log("onInputBlur, native keyboard should be hide");
      var messages = document.getElementById("messages");
      var topBar = document.getElementById("topBar");
      var inputs = document.getElementById("inputs");
      messages.style.height =
        window.innerHeight - topBar.offsetHeight - inputs.offsetHeight + "px";

      // console.log("height of messages", messages.offsetHeight);
      messages.scrollTop = messages.scrollHeight;
    },
    onClickNHIEAnswerTrue() {
      let currentItem = this.NHIETargetUserSelections[
        this.NHIETargetQuestionIndex
      ];
      console.log("currentItem", currentItem);
      if (currentItem.answer) {
        //  Display correct msg
        this.NHIERoundResult = "correct";
        if (this.NHIETargetQuestionIndex === 9 && this.NHIEUserLives > 0) {
          this.showNHIECongratScreen = true;
          this.showNHIEGameWindow = false;
          this.NHIEUserLives = 3;
          this.NHIEUserSelections = [];
          this.NHIETargetQuestionIndex = 0;
          this.NHIERoundResult = "";
        }
      } else {
        //  Display wrong msg, deduct heart
        this.NHIERoundResult = "wrong";
        if (this.NHIEUserLives > 0) {
          this.NHIEUserLives--;
          if (this.NHIEUserLives === 0) {
            this.showNHIESorryScreen = true;
            this.showNHIEGameWindow = false;
            this.NHIEUserLives = 3;
            this.NHIEUserSelections = [];
            this.NHIETargetQuestionIndex = 0;
            this.NHIERoundResult = "";
          } else if (
            this.NHIETargetQuestionIndex === 9 &&
            this.NHIEUserLives > 0
          ) {
            this.showNHIECongratScreen = true;
            this.showNHIEGameWindow = false;
            this.NHIEUserLives = 3;
            this.NHIEUserSelections = [];
            this.NHIETargetQuestionIndex = 0;
            this.NHIERoundResult = "";
          }
        }
      }
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);

      if (this.showNHIEGameWindow) {
        //  Block user from touching the buttons
        this.blockTrueButton = true;
        setTimeout(() => {
          if (this.NHIETargetQuestionIndex < 9) {
            this.NHIETargetQuestionIndex++;
            console.log("Next Question");
          }
          this.NHIERoundResult = "";
          this.blockTrueButton = false;
        }, 1000);
      } else {
        this.blockTrueButton = false;
      }
      this.updateNHIEGameState()
    },
    onClickNHIEAnswerFalse() {
      let currentItem = this.NHIETargetUserSelections[
        this.NHIETargetQuestionIndex
      ];
      console.log("currentItem", currentItem);
      if (!currentItem.answer) {
        //  Display correct msg
        this.NHIERoundResult = "correct";
        if (this.NHIETargetQuestionIndex === 9 && this.NHIEUserLives > 0) {
          this.showNHIECongratScreen = true;
          this.showNHIEGameWindow = false;
          this.NHIEUserLives = 3;
          this.NHIEUserSelections = [];
          this.NHIETargetQuestionIndex = 0;
          this.NHIERoundResult = "";
        }
      } else {
        //  Display wrong msg, deduct heart
        this.NHIERoundResult = "wrong";

        if (this.NHIEUserLives > 0) {
          this.NHIEUserLives--;
          if (this.NHIEUserLives === 0) {
            this.showNHIESorryScreen = true;
            this.showNHIEGameWindow = false;
            this.NHIEUserLives = 3;
            this.NHIEUserSelections = [];
            this.NHIETargetQuestionIndex = 0;
            this.NHIERoundResult = "";
          } else if (
            this.NHIETargetQuestionIndex === 9 &&
            this.NHIEUserLives > 0
          ) {
            this.showNHIECongratScreen = true;
            this.showNHIEGameWindow = false;
            this.NHIEUserLives = 3;
            this.NHIEUserSelections = [];
            this.NHIETargetQuestionIndex = 0;
            this.NHIERoundResult = "";
          }
        }
        this.updateNHIEGameState()
      }
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
      //  Block user from touching the buttons
      this.blockFalseButton = true;
      if (this.showNHIEGameWindow) {
        setTimeout(() => {
          if (this.NHIETargetQuestionIndex < 9) {
            this.NHIETargetQuestionIndex++;
            console.log("Next Question");
          }
          this.NHIERoundResult = "";
          this.blockFalseButton = false;
        }, 1000);
      } else {
        this.blockFalseButton = false;
      }
    },
    onClickExitGame() {
      this.showNHIEGameWindow = false;
      this.NHIEUserLives = 3;
      this.NHIEUserSelections = [];
      this.NHIETargetQuestionIndex = 0;
      this.NHIERoundResult = "";

      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    }
  },
  mounted() {
    console.log("message.vue mounted.");

    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", e => {
      console.log("resized deteected, new innerHeight:", window.innerHeight);
    });

    // Initialize height on loaded
    // var topBar = document.getElementById("topBar");
    // var inputs = document.getElementById("inputs");
    // var messages = document.getElementById("messages");
    // messages.style.height =
    //   window.innerHeight - topBar.offsetHeight - inputs.offsetHeight + "px";

    this.messageLoader = setInterval(() => {
      this.loadMessages();
    }, 1000);

    this.NHIEGameStateLoader = setInterval(() => {
      this.loadNHIEGameState();
    }, 1000);

    this.loadNHIEQuestions()
  },
  beforeRouteLeave(to, from, next) {
    console.log("message.vue is unmounted.");
    clearInterval(this.messageLoader);
    console.log("messageLoader stopped");
    clearInterval(this.NHIEGameStateLoader);
    console.log("NHIEGameStateLoader stopped");
    window.removeEventListener("scroll", this.handleScroll);
    console.log("remove scroll event listener");
    next();
  },
  destroyed() {
    if (this.messageLoader) clearInterval(this.messageLoader);
    if (this.NHIEGameStateLoader) clearInterval(this.NHIEGameStateLoader);
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

.disable-dbl-tap-zoom {
  touch-action: manipulation;
}
</style>
