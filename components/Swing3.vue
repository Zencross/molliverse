<template>
  <vue-tinder key-name="id" :queue.sync="queue.url" :offset-y="10" @submit="onSubmit">
 
  <div
    slot-scope="scope"
    :style="{
      'background-image': `url(https://cn.bing.com//th?id=OHR.${scope.data.id}_UHD.jpg&pid=hp&w=720&h=1280&rs=1&c=4&r=0)`
    }"
  />
  <!-- <img slot="like" src="../assets/img/tick.png" />
  <img slot="nope" src="../assets/img/remove.png" />
  <img slot="super" src="../assets/img/circle.png" /> -->

 
                <!-- <div v-for="card in cards" :key="card.id">
                    <img :src="card.url" class="card" >
                </div> -->
 </vue-tinder> 
</template>

<script>
import VueTinder from 'vue-tinder'

export default {
  components: {
    VueTinder
  },
  data: () => ({
    queue: [
      {
            "id": 1,
            "url": require('../assets/img/profile1.gif'),
            "text": "I am text"
            }
            ,
            {
            "id": 2,
            "url": require('../assets/img/profile2.gif'),
            "text": "I am text2"
            },
            {
            "id": 3,
            "url": require('../assets/img/profile3.gif'),
            "text": "I am text3"
            }
    ],
    offset: 0,
    cards: [
            {
            "id": 1,
            "url": require('../assets/img/profile1.gif'),
            "text": "I am text"
            }
            ,
            {
            "id": 2,
            "url": require('../assets/img/profile2.gif'),
            "text": "I am text2"
            },
            {
            "id": 3,
            "url": require('../assets/img/profile3.gif'),
            "text": "I am text3"
            }
              ]
  }),
  // created() {
  //   this.mock()
  // },
  methods: {
    // mock(count = 5) {
    //   const list = this.cards.slice(this.offset, count)
    //   this.offset += count
    //   this.queue = this.queue.concat(list)
    // },
    onSubmit(type, key, item) {
      // type: result，'like': swipe right, 'nope': swipe left, 'super': swipe up
      // key:  The keyName of the removed card
      // item: Child object in queue
      // if (this.queue.length < 3) {
      //   this.mock()
      // }
    }
  }
}
</script>

<style>
  .vue-tinder {
    width: 335px;
    height: 447px;
}

.card {
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 72px;
  height: 81vh;
  justify-content: center;
  left: 5.13%;
  position: absolute;
  width: 90%;
  object-fit: cover;
  /* height: 80%; */
  /* @media screen and (min-height: 800px) and (max-height: 1000px) {
      height: 85vh;
  }; */
  margin-top: -6%;
  @media screen and (min-width: 410px) and (max-width: 415px) {
      margin-top: -4%;
  }
  @media screen and (min-width: 767px) {
      margin-top: 1%;
  }

  @media screen and (max-height: 569px) {
      height: 78vh;
  }
 
 @media screen and (min-height: 811px) and (max-height: 824px) {
      height: 84vh;
  }
}
</style>