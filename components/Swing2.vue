<template>
  <section class="container">
    <div>
      <Vue2InteractDraggable
        :interact-out-of-sight-x-coordinate="350"
        :interact-max-rotation="2"
        :interact-x-threshold="20"
        :interact-lock-swipe-down="true"
        :interact-lock-swipe-up="true"
       
        class="h-16 pb-64"
        >
        <!-- <div class="card bg-red-400">
          <h1>{{card.urls}}</h1>
        </div> -->
        <!-- <div>
            <hooper class="card pt-20" :vertical="true" :itemsToShow="1"
            :centerMode="true">
                <slide v-for="(url,index) in card.urls" :key="index" :index="index">
                  <img class="image-fit" v-img :src="url">
                </slide>
            </hooper>
        </div> -->

      <!-- <div> -->


        <!-- <hooper class="card" :vertical="true" :centerMode="true">
          <slide v-for="(url, index) in card.urls" :key="index">
            <div>
              <img class="image-fit" v-if="index == 0" :src="url">
              <h1 class= "image-fit" v-if="card.text">{{card.text}}</h1>
              <img class="image-fit" v-if="index == 1" :src="url">
              <img class="image-fit" v-if="index ==2" :src="url">
            </div> 
          </slide>
        </hooper>
      </div> -->
      <!-- <vue-slick-carousel v-bind="settings">  
         <img :src="require('../assets/img/profile1.gif')">
      </vue-slick-carousel> -->
      <div> 
         <img class="image-fit" :src="require('../assets/img/profile1.gif')">
      </div>


      </Vue2InteractDraggable>
    
    </div>
  
  </section>
</template>
<script>
import { Vue2InteractDraggable } from 'vue2-interact'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'SwipeableCards',
  components: { Vue2InteractDraggable, Hooper, Slide, HooperPagination, VueSlickCarousel },
  data() {
    return {
      settings: {
        // arrows: true,
        // dots: true,
        vertical: true
      },
      isVisible: true,
      index: 0,
      cards: [
              {
              id: 1,
              urls: [
                  require('../assets/img/profile1.gif'),
                  require('../assets/img/profile2.gif'),
              ],
              //  "url": require('../assets/img/profile1.gif'),
              text: {
                bio: "I am a cat, I am not Human",
                passon: "sleeping, eating, chilling with kittens"

              }
              }
              ,
              {
              id: 2,
              urls: [
                  require('../assets/img/profile3.gif'),
                  require('../assets/img/profile4.gif'),
                  require('../assets/img/profile2.gif')
              ],
              //  "url": require('../assets/img/profile2.gif'),
              text: "sdfsdfsdfdfsdfdsdfsdfsdsdf"
              },
              {
              id: 3,
              urls: [
                  require('../assets/img/profile5.gif'),
                  require('../assets/img/profile6.gif')
              ],
              //  "url": require('../assets/img/profile3.gif'),
              text: "BOHOOOooooooo000000"
              }
                ]
    }
  },
  computed: {
    current() {
      return this.cards[this.index]
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .card {
  // align-items: center;
  // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  // font-size: 72px;
  height: 30vh;
  // justify-content: center;
  // left: 5.13%;
  position: fixed;
  // width: 90%;
  // border-radius: 75px;
  background: white;
  

  // object-fit: cover;
  /* height: 80%; */
  /* @media screen and (min-height: 800px) and (max-height: 1000px) {
      height: 85vh;
  }; */
//   margin-top: -6%;
//   @media screen and (min-width: 410px) and (max-width: 415px) {
//       margin-top: -4%;
//   }
//   @media screen and (min-width: 767px) {
//       margin-top: 1%;
//   }

//   @media screen and (max-height: 569px) {
//       height: 78vh;
//   }
 
//  @media screen and (min-height: 811px) and (max-height: 824px) {
//       height: 84vh;
//   }
}

.image-fit{
  height: 85vh;
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
  display: flex;
  margin-top: 50px;
}

.text-fit{
  height: 100px;
  width: 55vh;
  border-color: blue;
  border-width: 1px;
}
</style>