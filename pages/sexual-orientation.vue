<template>
    <div class="flex flex-col items-center w-full">
        <top-bar back skip @click="onClickBackButton" @skip="onClickSkipButton" />
        <div class="flex flex-col items-center w-full mt-8 bg-white">
            <app-text class="w-4/5 mb-4" text="My Sexual orientation is" />
            <!-- <scroll-view :items="sexualOrientations" @click="onClickItem" /> -->
            <div class="w-9/12 overflow-scroll scroll-view-container">
                <div class='montserrat-font text-lightgrey'>Select up to 3</div>
                <button 
                class="flex flex-col items-start w-full pl-1 mt-3 text-xl karla-font focus:outline-none" 
                v-for="item in sexualOrientations" 
                :key="item.id"
                @click="onClickItem(item)"
                >
                    <div class="flex justify-between w-full">
                        <div>{{item.name}}</div>
                        <img v-if="existInUserSOArr(item)" src="../static/img/tick-purple-24px.svg" alt="">
                    </div>
                </button>
            </div>
            <label class="inline-flex items-center mt-8">
                <input type="checkbox" class="w-4 h-4 form-checkbox">
                <span class="pl-2 text-sm montserrat-font text-lightgrey">Show my orientation on my profile</span>
            </label>
            <gradient-button class="mt-10" @click="onClickContinueButton" />
        </div>
    </div>
</template>

<script>
import AppText from '~/components/AppText.vue'
import TopBar from '../components/TopBar'
import AppButton from '../components/AppButton'
import GradientButton from '../components/GradientButton.vue'
import ScrollView from '~/components/ScrollView.vue'

export default {
    components:{ TopBar, AppText, AppButton, GradientButton, ScrollView },
    data() {
        return {
            sexualOrientations:[
                { id:1, name:"Straight" },
                { id:2, name:"Gay" },
                { id:3, name:"Lesbian" },
                { id:4, name:"Bisexual" },
                { id:5, name:"Asexual" },
                { id:6, name:"Others"},
            ],
        }
    },
    computed:{
    },
    methods:{
        existInUserSOArr(item){
            if(this.$store.state.userSexualOrientations.some(s => s.name === item.name))
                return true
            else return false
        },
        onClickBackButton(){
            this.$router.push('/gender')
        },
        onClickSkipButton(){
            this.$router.push('/gender')
        },
        onClickItem(item){
            console.log('Clicked',item.name);
            // append item in array, remove item if exist
            if(this.$store.state.userSexualOrientations.some(s => s.name === item.name)){
                this.$store.commit('removeSexualOrientation',item.name)
            } else if(this.$store.state.userSexualOrientations.length < 3){
                this.$store.commit('addSexualOrientation', item)
            }
        },
        onClickContinueButton(){
            this.$router.push('/show-me')
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.montserrat-font{
    font-family: 'Montserrat', sans-serif;
}
</style>