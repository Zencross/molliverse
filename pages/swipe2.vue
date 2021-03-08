<template>  
    <div ref="mainBox"> 
      <div> <!--Nav menu on swipe screen (Profile,Bliss,Message)-->
        <!-- <nav class="justify-between flex m-10 mb-8 text-black ">  -->
            <nav class="nav-menu fixed flex m-10 mb-8 text-black border-b-2 pb-3 ml-3 mx-3 justify-center" ref="navMenu"> 
            <div>
                <a href="#">
                 <img src="../assets/img/ProfileIcon.png" class="navButton1and3 ">
                </a>
            </div>

            <div>
                <a href="#">
                    <img src="../assets/img/mollie-color.png" class="navButton2"
                    >
                </a>
            </div>

            <div>
                <a href="#">
                    <img src="../assets/img/MessageIcon.png" class="navButton1and3">
                </a>
            </div>
             </nav>
        </div>

        <!-- Swiping and user videos -->
        <div v-if="isVisible">
            <Vue2InteractDraggable
                :interact-out-of-sight="350"
                :interact-max-rotation="5"
                :interact-x-threshold="10"
                :interact-lock-y-axis="true"
                @draggredRight="right"
                @draggedLeft="left"
                v-for="card in cards"
                :key="card.id"
                v-bind:style="swipeGallery"
            >
               <!-- <carousel 
                class="card"
                :per-page="1" 
                :touchDrag="true"
                :autoplay="true"
                :navigationEnabled="true"
                :paginationPadding="5"
                :paginationEnabled="true"
                paginationPosition="top-overlay"
                :paginationSize="15"
                :centerMode="true"
                >
                   <slide v-for="(url, index) in card.urls" :key="index">
                       <img class="image-fit" :src="url">
                    </slide>
               </carousel> -->

            
               <swiper >
                   <swiper-slide v-for="(url,index) in card.urls" :key="index">
                       <img :src="url">
                    </swiper-slide>
                </swiper>
                

            </Vue2InteractDraggable>
        </div>



        <!-- Buttons for like,dislike,superlike,undo -->
        <div class="navMenu flex bottom-0 fixed pb-5 gap-16 md:gap-80" ref="navButtons">
             <a href="#">
                 <img src="../assets/img/undo.png" class="w-3/4 md:w-1/2" v-on:click="$emit('undo')">
            </a>
            <a href="#">
                <!-- <img src="../assets/img/remove.png" class="w-3/4 md:w-1/2" v-on:click="remove()"> -->
                <img src="../assets/img/remove.png" class="w-3/4 md:w-1/2" v-on:click="$emit('dislike')">

            </a>
            <a href="#">
                <!-- <img src="../assets/img/circle.png" class="w-3/4 md:w-1/2" v-on:click="superLike()"> -->
                <img src="../assets/img/circle.png" class="w-3/4 md:w-1/2" v-on:click="$emit('superlike')">
            </a>
            <a href="#">
                <!-- <img src="../assets/img/tick.png" class="w-3/4 md:w-1/2" v-on:click="add()"> -->
                <img src="../assets/img/tick.png" class="w-3/4 md:w-1/2" v-on:click="$emit('like')">
            </a>
        </div> 

   </div> 
</template>


<script>
import { Vue2InteractDraggable } from 'vue2-interact'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Vue from 'vue'

export default {
    components: { Vue2InteractDraggable, Swiper, SwiperSlide },
    data() {
        return {
            swipeGallery: {},
            isVisible: true,
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
            ]
        }
    },

    methods: {
        right() {
            setTimeout(() => this.isVisible= false, 200)
            setTimeout(() => {
                this.index++
                this.isVisible = true
            }, 300)
        },

        left() {
            setTimeout(() => this.isVisible= false, 200)
            setTimeout(() => {
                this.index++
                this.isVisible = true
            })
        },

        navHeight() {
            let navMenuHeight = this.$refs.navMenu.clientHeight + 'px'
            let navButtonHeight = this.$refs.navButtons.clientHeight + 'px'
            let containerHeight = screen.height + 'px'
            Vue.set(this.swipeGallery, 'height', (containerHeight + (navMenuHeight + navButtonHeight)))
            // let navMenuHeight =  document.getElementById(navMenu).clientHeight + 'px'
            // let navButtonHeight = document.getElementById(navButtons).clientHeight + 'px'
            // let containerHeight = document.getElementById(mainBox).clientHeight + 'px'
            // Vue.set(this.swipeGallery, 'height', (containerHeight - (navMenuHeight + navButtonHeight)))
            //   let height = document.getElementById('info-box').clientHeight
            // this.$refs.infoBox.$el.clientHeight;

        }
    },

    mounted() {
        this.navHeight();
        console.log('v- 111111 - ok client height is off')
        console.log(this.$refs.navButtons.clientHeight + ' is the navButton ClientHeight')
        console.log(this.$refs.navMenu.clientHeight + " is the NavMenu ClientHeight")
        console.log(screen.height + " is the mainBox ClientHeight")

    },

     directives: {
            swiper: directive
        }
}
</script> 

 <style>
    .image-fit{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 25px;
        display: flex;
        background-color: white
        }

    .navButton1and3 {
        width: 28px;
        /* height: 28px; */
        @media screen and (min-height: 548px) and (max-height: 641px) {
            width: 25px;
        }
        @media screen and (min-width: 767px) {
            width: 50px;
        }
    }

    .navButton2 {
        height: 100%;
        width: 83px;
        @media screen and (min-height: 548px) and (max-height: 641px) {
            width: 29px;
        }
        @media screen and (min-width: 767px) {
            width: 65px;
        }
        /* height: 28px; */
    }

    .nav-menu {
        gap: 8rem;
        @media screen and (max-width: 321px) {
            gap: 7rem;
        }
        @media screen and (max-width: 296px) {
            gap: 6rem;
        }
    }

    .card {
        align-items: center;
        border-radius: 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-size: 72px;
        /* height: 100vh; */
        justify-content: center;
        left: 4.13%;
        position: absolute;
        width: 90%;
        object-fit: cover;
        margin-top: 24%
        /* height: 80%; */
        /* @media screen and (min-height: 800px) and (max-height: 1000px) {
            height: 85vh;
        }; */
        /* margin-top: -6%;
        @media screen and (min-width: 410px) and (max-width: 415px) {
            margin-top: -4%;
        } */
        /* @media screen and (min-width: 767px) {
            margin-top: 1%;
        }

        @media screen and (max-height: 569px) {
            height: 78vh;
        }
        
        @media screen and (min-height: 811px) and (max-height: 824px) {
            height: 84vh;
        } */
}
</style> 
