<template>
    <div>

        <!-- <button @click = "add">Add</button>
        <button @click = "remove">Remove</button>
        <button @click = "swing">swing</button> -->

        <div class="flex fixed bottom-0 mb-10"> <!--Buttons-->
        <!-- <svg class="w-20 h-20" fill="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
        <svg class="w-20 h-20" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <svg class="w-20 h-20" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg> -->
        <a href="#">
            <img src="../assets/img/swipeNoButton.svg" class="w-12 h-12" v-on:click="remove">
        </a>
        <a href="#">
            <img src="../assets/img/swipeSuperLikeButton.svg" class="w-12 h-12" v-on:click="swing">
        </a>
        <a href="#">
            <img src="../assets/img/swipeYesButton.svg" class="w-12 h-12" v-on:click="add">
        </a>
    </div>

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
            <div v-for="card in cards" class="card" :key="card.id">
                <img :src="card.url" class="card">
                <!-- <img :src="require('@/assets/img/profile1.gif')"> -->
            </div>
                <!-- <span>{{ card }}</span> -->

            <!-- </div> -->


        </vue-swing>
    </div>
</template>

<script>
import VueSwing from 'vue-swing'


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
  background-color: papayawhip;
  margin: 0;
}

.card {
  align-items: center;
  /* background-color: #fff; */
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display:block;
  font-size: 72px;
  height: 300px;
  justify-content: center;
  left: calc(40% - 100px);
  position: absolute;
  top: calc(30% - 100px);
  width: 200px;
}

</style>
