<template>
  <section class="screen">
    <!-- <div class="fixed fixed--center" style="z-index: 3">
      <Vue2InteractDraggable
        v-if="isVisible"
        :interact-out-of-sight-x-coordinate="500"
        :interact-max-rotation="5"
        :interact-x-threshold="0"
        :interact-y-threshold="0"
        @draggedRight="right"
        class="rounded-borders card card--one">
        <div class="flex flex--center" style="height: 100%">
          <h1>{{current.text}}</h1>
        </div>
      </Vue2InteractDraggable>
    </div> -->

    <!-- <div
      class="rounded-borders card card--two fixed fixed--center"
      style="z-index: 2">
      <div class="flex flex--center" style="height: 100%">
        <h1>test</h1>
      </div>
    </div>

    <div
      class="rounded-borders card card--three fixed fixed--center"
      style="z-index: 1">
      <div class="flex flex--center" style="height: 100%">
        <h1>test</h1>
      </div>
    </div> -->

      <!-- <div class="fixed fixed--center" style="z-index: 3"> -->
    <!-- <div>
      <Vue2InteractDraggable
        :interact-out-of-sight-x-coordinate="350"
        :interact-max-rotation="5"
        :interact-x-threshold="0"
        :interact-y-threshold="0"
        @draggedRight="right"
        @draggedLeft="left"
        v-for="card in cards"
        :key="card.id"
        >
        
      </Vue2InteractDraggable>
    
      <splide v-for="(url, index) in card.urls" :key="index" :options="options">
          <splide-slide>
            <img :src="url" class="image-fit">
          </splide-slide>
        </splide>
    </div> -->
    <div class="fixed" style="z-index: 3">
      <VueInteractDraggable
        v-if="isVisible"
        :interact-out-of-sight="500"
        :interact-max-rotation="5"
        :interact-x-threshold="0"
        :interact-y-threshold="0"
        @draggedRight="right"
        @draggedLeft="left"
        class="card"
      > 
         <div class="image-fit">
            <splide :options="options">
            <splide-slide>
              <img :src="`current.url`">
            </splide-slide>
          </splide>
        </div>
      </VueInteractDraggable>
    </div>

    <div class="image-fit" style="z-index: 2">
       <splide :options="options">
            <splide-slide>
              <img :src="`current.url`">
            </splide-slide>
          </splide>
    </div>
    
  </section>
</template>
<script>
import { Vue2InteractDraggable } from 'vue2-interact'
import { Hooper, Slide, Pagination } from 'hooper'
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: 'SwipeableCards',
  components: { Vue2InteractDraggable, Hooper, Slide, Pagination, Splide, SplideSlide },
  data() {
    return {
      isVisible: true,
      index: 0,
    //   cards: [
    //     { 
    //         id: 1,
    //         texts: ['one', 'two', 'three'] 
    //     },
    //     { 
    //         id: 2,
    //         texts: ['four', 'five', 'six'] 
    //     },
    //     { 
    //         id: 3,
    //         texts: ['seven','eight', 'nine'] },
    //   ]
        cards: [
                {
                id: 1,
                urls: [
                    require('../assets/img/profile1.gif'),
                    require('../assets/img/profile2.gif'),
                ],
                //  "url": require('../assets/img/profile1.gif'),
                text: "TEXTY"
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
                text: ""
                },
                {
                id: 3,
                urls: [
                    require('../assets/img/profile5.gif'),
                    require('../assets/img/profile6.gif')
                ],
                //  "url": require('../assets/img/profile3.gif'),
                text: "BOHOOO"
                }
                    ],
        test: [
                require('../assets/img/profile3.gif'),
                require('../assets/img/profile4.gif'),
                require('../assets/img/profile2.gif')
        ],
        options: {
          gap: '1rem',
          direction: 'ttb',
          heightRatio: 0.2,
          arrows: false,
          rewind: true
        }
    }
  },
  computed: {
    current() {
      return this.cards.url[this.index]
    }
  },
  methods: {
    right() {
      setTimeout(() => this.isVisible = false, 200)
      setTimeout(() => {
        this.index++
        this.isVisible = true
      }, 300)
    },

    left() {
      setTimeout(() => this.isVisible = false, 200)
      setTimeout(() => {
        this.index--
        this.isVisible = true
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
// .container {
//   background: #eceff1;
//   width: 100%;
//   height: 100vh;
// }

// .flex {
//   display: flex;
//   &--center {
//     align-items: center;
//     justify-items: center;
//     justify-content: center;
//   }
// }

.fixed {
  position: fixed;
  &--center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.rounded-borders {
  border-radius: 12px;
}

.image-fit{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
  display: flex;
}

.screen{
    height: 100%;
    width: 100%;
    border: 10px solid;
    border-radius: 10px;
}

.card {
  width: 100%;
  height: 100%;
  color: white;
  &--one {
    background-color: pink;
  }
  &--two {
    background-color: red;
    width: 280px;
    top: 51%;
  }
  &--three {
    background-color: orange;
    width: 260px;
    top: 51.8%;
  }
}

.image-fit{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
  display: flex;
}
</style>