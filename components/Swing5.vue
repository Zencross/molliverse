<template>
    <div> 
        <div>
            <vue-swing
                @throwout="onThrowout"
                @dragmove="onDragmove"
                :config="config"
                ref="vueswing" 
                v-for="(card, index) in cards"
                :key="index"
            >

          <vue-slick-carousel v-bind="settings">
              <img :src="require('../assets/img/profile1.gif')">
          </vue-slick-carousel>
                    


            </vue-swing>
      
        </div>  
    </div>
</template>

<script>
import VueSwing from 'vue-swing'
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'




export default {
    components: { VueSwing, VueSlickCarousel },
    data(){
            return {
                settings: {
                    arrows: true,
                    dots: true,
                    vertical: true
                },
                config: {
                    allowedDirections: [
                        // VueSwing.Direction.UP,
                        // VueSwing.Direction.DOWN,
                        VueSwing.Direction.LEFT,
                        VueSwing.Direction.RIGHT
                    ],
                    // minThrowOutDistance: 250,
                    // maxThrowOutDistance: 300
                     minThrowOutDistance: 0,
                    maxThrowOutDistance: 0,
                    // Rotation: 20,

                },
                allowMovement: [
                    (VueSwing.Direction.UP, false),
                    (VueSwing.Direction.RIGHT, false)
                ],

                cards: [
                    {
                    id: 1,
                    urls: [
                        require('../assets/img/profile1.gif'),
                        require('../assets/img/profile2.gif'),
                    ],
                    //  "url": require('../assets/img/profile1.gif'),
                    text: "I am text"
                    }
                    ,
                    {
                    id: 2,
                    urls: [
                        require('../assets/img/profile3.gif'),
                        require('../assets/img/profile4.gif')
                    ],
                    //  "url": require('../assets/img/profile2.gif'),
                    text: "I am text2"
                    },
                    {
                    id: 3,
                    urls: [
                        require('../assets/img/profile5.gif'),
                        require('../assets/img/profile6.gif')
                    ],
                    //  "url": require('../assets/img/profile3.gif'),
                    text: "I am text3"
                    }
                ],
                swipeRightProfiles: [],
                superLikeProfiles: [],
                // element is considered to be thrown out when throwOutConfidence is == 1
                throwOutConfidence: (xOffset, yOffset, element) => {
                    const xConfidence = Math.min(Maths.abs(xOffset)/element.offsetWidth, 0.5);
                    const yConfidence = Math.min(Maths.abs(yOffset)/element.offsetHeight, 0.5);

                    return Math.max(xConfidence, yConfidence);
                }
            }
         },
    
    methods: {
        // add() {
        //     // this.cards.push(`${this.cards.length + 1}`)
        //     // this.swipeRightProfiles.push(`${this.swipeRightProfiles.length + 1}`)
        //     this.cards.pop()
        //     console.log(this.swipeRightProfiles.length + 'swipeRightProfiles')
        // },
        // remove() {
        //     this.swing()
        //     setTimeout(() => {
        //         this.cards.pop()
        //         // this.cards.push(`${this.cards.length + 1}`)\
        //     }, 100)
        // },
           
        swing() {
            const cards = this.$refs.vueswing.cards
            cards[cards.length - 1].throwOut(
                Math.random() * 100 - 50,
                Math.random() * 100 - 50
            )
            console.log(this.cards.length + 'card Stack length')
        },

        onDragmove({ target, throwOutConfidence}) {
            // if (throwOutConfidence < 1) {
            //     target.initialState()
                console.log('onDragmove is turnt UP')
            // }
        },

        onThrowout({ target, throwDirection }) {
            if (throwDirection == VueSwing.Direction.lEFT) {
                this.cards.pop()
                // this.cards.push(`${this.cards.length + 1}`)
            } else if (throwDirection == VueSwing.Direction.RIGHT) {
                this.swipeRightProfiles.push(`${this.swipeRightProfiles.length + 1}`)
                this.cards.pop()
            } else if (throwDirection == VueSwing.Direction.UP){
                this.superLikeProfiles.push(`${this.superLikeProfiles.length + 1}`)
                this.cards.pop()
            }

            // console.log(this.throwOutConfidence.xConfidence + ' this is throwout confidence')

            console.log(this.swipeRightProfiles.length + "swipeRightProfiles")
            console.log(this.superLikeProfiles.length + "superLikeProfiles")
            console.log(this.cards.length + "cards stack")

            console.log(`Threw out ${target.textContent}`)
            console.log(`target ${target}`)
        }
        // superLike() {
        //         this.superLikeProfiles.push(`${this.superLikeProfiles.length + 1}`)
        //         this.cards.pop()
        //         console.log(this.superLikeProfiles.length + 'superLikeProfiles')
        // }
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


.image-fit{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
  display: flex;
}

.scroller {
    height: 100%;
}

</style>

