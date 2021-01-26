<template>
    <div>

        <!-- <button @click = "add">Add</button>
        <button @click = "remove">Remove</button>
        <button @click = "swing">swing</button> -->

        <div class="flex bottom-0 absolute left-0 right-0 pb-5 pl-16 md:ml-24"> <!--Buttons-->
            <!-- <svg class="w-20 h-20" fill="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
            <svg class="w-20 h-20" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <svg class="w-20 h-20" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg> -->
            <a href="#">
                <!-- <img src="../assets/img/swipeNoButton.svg" class="w-12 md:w-20 lg:w-35 h-12 md:h-20 lg:h-35 " v-on:click="remove"> -->
                <img src="../assets/img/remove.png" class="w-2/5" v-on:click="remove">
            </a>
            <a href="#">
                <!-- <img src="../assets/img/swipeSuperLikeButton.svg" class="w-12 md:w-20 lg:w-35 h-12 md:h-20 lg:h-35 " v-on:click="swing"> -->
                <img src="../assets/img/tick.png" class="w-2/5" v-on:click="swing">
            </a>
            <a href="#">
                <!-- <img src="../assets/img/swipeYesButton.svg" class="w-12 md:w-20 lg:w-5/6 h-12 md:h-20 lg:h-5/6 " v-on:click="add"> -->
                <img src="../assets/img/circle.png" class="w-2/5" v-on:click="add">
            </a>
        </div>

<div>
        <vue-swing
            @throwout="onThrowout"
            :config="config"
            ref="vueswing"
        >
            <!-- <div
                v-for = "card in cards"
                :key="card"
                class="card"
                src="../components/assets/img/profile1.gif"
            > -->
            <div v-for="card in cards" :key="card.id">
                <img :src="card.url" class="card" >
                <!-- class="absolute rounded-lg min-w-full p-2 h-50 object-cover items-center" -->
                <!-- <img :src="require('@/assets/img/profile1.gif')"> -->
            </div>
                <!-- <span>{{ card }}</span> -->

            <!-- </div> -->
        </vue-swing>
</div>
    </div>
</template>

<script>
import VueSwing from 'vue-Swing'


export default {
    components: { VueSwing },
    data(){
            return {
                config: {
                    allowedDirections: [
                        VueSwing.Direction.UP,
                        VueSwing.Direction.DOWN,
                        VueSwing.Direction.LEFT,
                        VueSwing.Direction.RIGHT
                    ],
                    minThrowOutDistance: 250,
                    maxThrowOutDistance: 300
                },
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
                    // ,
                    // {
                    // "id": 4,
                    // "url": require('../assets/img/logo.png'),
                    // "text": "I am text4"
                    // }
                ]
                // ,
                // card: [{
                //     "id": 2,
                //     "url": '../assets/img/profile2.gif',
                //     "text": "I am text2"
                //     }]

            }
         },
    
    methods: {
        add() {
            this.cards.push(`${this.cards.length + 1}`)
        },
        remove() {
            this.swing()
            setTimeout(() => {
                this.cards.pop()
            }, 100)
        },
        swing() {
            const cards = this.$refs.vueswing.cards
            cards[cards.length - 1].throwOut(
                Math.random() * 100 - 50,
                Math.random() * 100 - 50
            )
            console.log(this.cards.length)
        },
        onThrowout({ target, throwDirection }) {
            // if (this.cards.length < 1) {
                
            // const newCards = [].slice.call(document.querySelector(cards));
            //     this.cards.push(newCards);
            // }
            console.log(`Threw out ${target.textContent}`)
            
        }
    }
    
}
</script>

<style >

body {
  background-color: white;
  margin: 0;
}

.card {
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 72px;
  height: 75vh;
  justify-content: center;
  left: 1.5%;
  position: absolute;
  width: 97%;
  object-fit: cover;
  @media screen and (min-height: 800px) and (max-height: 1000px) {
      height: 80vh;
  };
  margin-top: -6%;
  @media screen and (min-width: 410px) and (max-width: 415px) {
      margin-top: -4%;
  }
  @media screen and (min-width: 767px) {
      margin-top: 1%;
  }
 
}

</style>


