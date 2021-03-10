<template>
  <div class="fixed w-full h-full">
    <VueTinder
      ref="tinder"
      key-name="id"
      :queue.sync="queue"
      class="w-10/12 h-48"
      @submit="onSubmit"
    >
      <!-- <template slot-scope="scope"> -->
      <img :src="imgSrc" alt="" />
      <!-- </template> -->
      <!-- <img class="like-pointer" slot="like" src="~img/like-txt.png" />
      <img class="nope-pointer" slot="nope" src="~img/nope-txt.png" />
      <img class="super-pointer" slot="super" src="~img/super-txt.png" />
      <img class="down-pointer" slot="down" src="~img/down-txt.png" />
      <img class="rewind-pointer" slot="rewind" src="~img/rewind-txt.png" /> -->
    </VueTinder>
    <div
      class="absolute bottom-0 z-50 flex justify-between w-full h-12 px-4 mb-3"
      id="buttonGroup"
    >
      <button @click="nope">
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
import VueTinder from "vue-tinder";

export default {
  components: { VueTinder },
  data() {
    return {
      queue: [{ id: 1, src: this.$store.state.userProfileMedia[0].src }]
    };
  },
  computed: {
    imgSrc() {
      return this.$store.state.userProfileMedia[0].src;
    }
  },
  methods: {
    onSubmit(choice) {
      console.log("user choice", choice);
    },
    like() {
      // Swipe right
      this.$refs["tinder"].decide("like");
    },
    nope() {
      // Swipe left
      this.$refs["tinder"].decide("nope");
    },
    superLike() {
      // Swipe up
      this.$refs["tinder"].decide("super");
    },
    down() {
      // Swipe down
      this.$refs["tinder"].decide("down");
    }
  }
};
</script>

<style></style>
