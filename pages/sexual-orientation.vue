<template>
    <div class="flex flex-col items-center w-full">
        <top-bar back @click="onClickBackButton" />
        <div class="flex flex-col items-center w-full mt-8 bg-white">
            <app-text class="w-4/5 mb-4" text="My Sexual orientation is" />
            <scroll-view :items="sexualOrientations" />
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
            ]
        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/gender')
        },
        onClickWoman(){},
        onClickMan(){},
        onClickOtherGender(){},
        onClickContinueButton(){
            this.$router.push('/sexual-orientation')
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