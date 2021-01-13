<template>
    <div class="w-full h-screen">
        <top-bar back @click="onClickBackButton" />
        <div class="flex flex-col items-center w-full">
            <div class="flex justify-center w-4/5 mt-4 mb-2 text-3xl text-grayish-red montserrat-font disable-dbl-tap-zoom">Record a Video</div>
            <div class="flex justify-center w-4/5 text-xs montserrat-font text-lightgrey disable-dbl-tap-zoom">Hold, drag and drop to order your videos</div>
        </div>
        <!-- <div class="flex flex-col items-center my-2 grid-height">
            <div class="flex w-full row-height">
                <div class="relative w-1/3 my-3 ml-4 mr-2 bg-darkgrey rounded-xl" @click="onClickBox(0)">
                    <img v-if="isMediaPhoto(0)" :src="getMediaSrc(0)" class="w-full h-full rounded-xl" alt="">
                    <video v-if="isMediaVideo(0)" autoplay loop :src="getMediaSrc(0)" class="w-full h-full rounded-xl"></video>
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-2 bg-darkgrey rounded-xl" @click="onClickBox(1)">
                    <img v-if="isMediaPhoto(1)" :src="getMediaSrc(1)" class="w-full h-full rounded-xl" alt="">
                    <video v-if="isMediaVideo(1)" autoplay loop :src="getMediaSrc(1)" class="w-full h-full rounded-xl"></video>
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-4 bg-darkgrey rounded-xl" @click="onClickBox(2)">
                    <img v-if="isMediaPhoto(2)" :src="getMediaSrc(2)" class="w-full h-full rounded-xl" alt="">
                    <video v-if="isMediaVideo(2)" autoplay loop :src="getMediaSrc(2)" class="w-full h-full rounded-xl"></video>
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
            </div>

            <div class="flex w-full row-height">
                <div class="relative w-1/3 my-3 ml-4 mr-2 bg-darkgrey rounded-xl" @click="onClickBox(3)">
                    <img v-if="isMediaPhoto(3)" :src="getMediaSrc(3)" class="w-full h-full rounded-xl" alt="">
                    <video v-if="isMediaVideo(3)" autoplay loop :src="getMediaSrc(3)" class="w-full h-full rounded-xl"></video>
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-2 bg-darkgrey rounded-xl" @click="onClickBox(4)">
                    <img v-if="isMediaPhoto(4)" :src="getMediaSrc(4)" class="w-full h-full rounded-xl" alt="">
                    <video v-if="isMediaVideo(4)" autoplay loop :src="getMediaSrc(4)" class="w-full h-full rounded-xl"></video>
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-4 bg-darkgrey rounded-xl" @click="onClickBox(5)">
                    <img v-if="isMediaPhoto(5)" :src="getMediaSrc(5)" class="w-full h-full rounded-xl" alt="">
                    <video v-if="isMediaVideo(5)" autoplay loop :src="getMediaSrc(5)" class="w-full h-full rounded-xl"></video>
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
            </div>

            <div class="flex w-full row-height">
                <div class="relative w-1/3 my-3 ml-4 mr-2 bg-darkgrey rounded-xl" @click="onClickBox(6)">
                    <img v-if="isMediaPhoto(6)" :src="getMediaSrc(6)" class="w-full h-full rounded-xl" alt="">
                    <video v-if="isMediaVideo(6)" autoplay loop :src="getMediaSrc(6)" class="w-full h-full rounded-xl"></video>
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-2 bg-darkgrey rounded-xl" @click="onClickBox(7)">
                    <img v-if="isMediaPhoto(7)" :src="getMediaSrc(7)" class="w-full h-full rounded-xl" alt="">
                    <video v-if="isMediaVideo(7)" autoplay loop :src="getMediaSrc(7)" class="w-full h-full rounded-xl"></video>
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-4 bg-darkgrey rounded-xl" @click="onClickBox(8)">
                    <img v-if="isMediaPhoto(8)" :src="getMediaSrc(8)" class="w-full h-full rounded-xl" alt="">
                    <video v-if="isMediaVideo(8)" autoplay loop :src="getMediaSrc(8)" class="w-full h-full rounded-xl"></video>
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
            </div>
        </div> -->
        <draggable v-model="userProfileMedia" group="people" @start="drag=true" @end="drag=false" @change="log" class="flex flex-wrap justify-around w-full px-1 my-2 gallery-height">
            <div v-for="ele in userProfileMedia" :key="ele.id" class="relative my-1 bg-darkgrey rounded-xl item cell-height" @click="onClickBox(userProfileMedia.indexOf(ele))">
                <img v-if="isMediaPhoto(userProfileMedia.indexOf(ele))" :src="getMediaSrc(userProfileMedia.indexOf(ele))" class="w-full h-full rounded-xl" alt="">
                <video v-if="isMediaVideo(userProfileMedia.indexOf(ele))" autoplay loop :src="getMediaSrc(userProfileMedia.indexOf(ele))" class="w-full h-full rounded-xl"></video>
                <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
            </div>
        </draggable>

        <!-- <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
            <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
        </draggable> -->
        <gradient-button buttonText="DONE" />
        
    </div>
</template>

<script>
import GradientButton from '~/components/GradientButton.vue'
import TopBar from '~/components/TopBar.vue'
import draggable from 'vuedraggable'

export default {
    components:{TopBar, GradientButton, draggable},
    data() {
        return {
            myArray:[{"name": "A","id": 0}, {"name": "B","id": 1},{"name": "C","id": 2},{"name": "D","id": 3},{"name": "E","id": 4},{"name": "F","id": 5},{"name": "G","id": 6},{"name": "H","id": 7},{"name": "I","id": 8}]
        }
    },
    computed:{
        userProfileMedia: {
            get() {
                return this.$store.state.userProfileMedia
            },
            set(value) {
                console.log('setter value',value);
                this.$store.commit('setUserProfileMedia', value)
            }
        }
    },
    methods:{
        log(){
            console.log("user Media array", this.userProfileMedia );
        },
        onClickBackButton(){
            this.$router.push('/passions')
        },
        onClickBox(id){
            console.log("clicked box ",id);
            this.$store.commit('setCurrentMediaIndex', id)
            this.$router.push('/ar-filter')
        },
        getMediaSrc(id){
            return this.$store.state.userProfileMedia[id].src
        },
        isMediaPhoto(id){
            if(this.$store.state.userProfileMedia[id] && this.$store.state.userProfileMedia[id].type==="photo"){
                console.log(`media at index ${id} is`, this.$store.state.userProfileMedia[id].type);
                return true
            }
            else 
                return false
        },
        isMediaVideo(id){
            if(this.$store.state.userProfileMedia[id] && this.$store.state.userProfileMedia[id].type==="video"){
                console.log(`media at index ${id} is`, this.$store.state.userProfileMedia[id].type);
                return true
            }
            else 
                return false
        }
    }
}
</script>

<style>
.gallery-height {
    height: 58%;
}

.cell-height {
    height: 30%;
}

.item {
  width: 30%;
}
</style>