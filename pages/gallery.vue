<template>
    
    <div class="w-full h-screen">
        <top-bar back @click="onClickBackButton" />
        <div class="flex flex-col items-center w-full">
            <div class="flex justify-center w-4/5 mt-4 text-3xl text-grayish-red montserrat-font disable-dbl-tap-zoom">Record a Video</div>
            <div class="flex justify-center w-4/5 text-xs montserrat-font text-lightgrey disable-dbl-tap-zoom">Hold, drag and drop to order your videos</div>
        </div>
        <draggable v-model="userProfileMedia" group="people" @start="drag=true" @end="drag=false" @change="log" class="w-full px-1 my-2 gallery-height">
            <transition-group tag="div" class="flex flex-wrap justify-around w-full h-full" name="flip-list">
            <div v-for="ele in userProfileMedia" :key="ele.id" class="relative my-1 bg-darkgrey rounded-xl item cell-height" @click="onClickBox(userProfileMedia.indexOf(ele))">
                <img v-if="isMediaPhoto(userProfileMedia.indexOf(ele))" :src="getMediaSrc(userProfileMedia.indexOf(ele))" class="w-full h-full rounded-xl" alt="">
                <video v-if="isMediaVideo(userProfileMedia.indexOf(ele))" autoplay loop :src="getMediaSrc(userProfileMedia.indexOf(ele))" class="w-full h-full rounded-xl"></video>
                <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
            </div>
            </transition-group>
        </draggable>
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

.flip-list-move {
  transition: transform 0.5s;
}
</style>