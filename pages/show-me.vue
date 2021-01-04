<template>
    <div class="flex flex-col items-center w-full">
        <top-bar back @click="onClickBackButton" />
        <div class="flex flex-col items-center w-full mt-8">
            <app-text class="w-4/5 mb-8" text="Show me" />
            <app-button buttonText="WOMAN" @click="onClickShowWoman" borderBlack textBlack activeEffect class="mb-8" />
            <app-button buttonText="MAN" @click="onClickShowMan" borderBlack textBlack activeEffect class="mb-8" />
            <app-button buttonText="EVERYONE" @click="onClickShowAll" borderBlack textBlack activeEffect class="mb-8" />
            <gradient-button class="mt-12" @click="onClickContinueButton" />
        </div>
    </div>
</template>

<script>
import AppText from '~/components/AppText.vue'
import TopBar from '../components/TopBar'
import AppButton from '../components/AppButton'
import GradientButton from '../components/GradientButton.vue'

export default {
    components:{ TopBar, AppText, AppButton, GradientButton },
    data() {
        return {
            
        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/sexual-orientation')
        },
        onClickShowWoman(){
            this.$store.commit('setShowMePreference','Woman')
        },
        onClickShowMan(){
            this.$store.commit('setShowMePreference','Man')
        },
        onClickShowAll(){
            this.$store.commit('setShowMePreference','Everyone')
        },
        onClickContinueButton(){
            this.$router.push('/education')
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