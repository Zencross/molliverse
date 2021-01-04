<template>
    <div class="flex flex-col items-center w-full">
        <top-bar back @click="onClickBackButton" />
        <div class="flex flex-col items-center w-full mt-8">
            <app-text class="w-4/5 mb-8" text="I am a" />
            <app-button buttonText="WOMAN" @click="onClickWoman" borderBlack textBlack activeEffect class="mb-8" />
            <app-button buttonText="MAN" @click="onClickMan" borderBlack textBlack activeEffect class="mb-8" />
            <app-button buttonText="MORE" @click="onClickOtherGender" borderBlack textBlack rightArrow class="mb-8" />
            <label class="inline-flex items-center">
                <input type="checkbox" v-model="showGenderOnProfile" @change="onChangeShowGenderOnProfile" class="w-4 h-4 form-checkbox">
                <span class="ml-2 text-sm montserrat-font text-lightgrey">Show my gender on my profile</span>
            </label>
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
            showGenderOnProfile: false,
        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/birthday')
        },
        onClickWoman(){
            this.$store.commit('setGender','Woman')
        },
        onClickMan(){
            this.$store.commit('setGender', 'Man')
        },
        onClickOtherGender(){},
        onChangeShowGenderOnProfile(){
            this.$store.commit('setShowGenderOnProfile', this.showGenderOnProfile)
        },
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