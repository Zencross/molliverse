<template>
    <!-- <div> -->
        <!-- <div class="flex bottom-0 absolute left-0 right-0 pb-5 pl-16 md:ml-24">
            <a href="#">
                <img src="../assets/img/remove.png" class="w-2/5" v-on:click="remove">
            </a>
            <a href="#">
                <img src="../assets/img/tick.png" class="w-2/5" v-on:click="swing">
            </a>
            <a href="#">
                <img src="../assets/img/circle.png" class="w-2/5" v-on:click="add">
            </a>
        </div> -->
        <div>
            <vue-swing
                @throwout="onThrowout"
                :config="config"
                ref="vueswing"
            >
                <div v-for="card in cards" :key="card.id">
                    <img :src="card.url" class="card" >

                </div>
            </vue-swing>
        </div>
    <!-- </div> -->
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
                ]
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


