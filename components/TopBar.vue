<template>
    <div class="flex items-center justify-between w-full py-5 bg-white shadow-lg">
        <img v-if="close" class="w-6 h-6 ml-4" src="/img/close-24px.svg" alt="close" @click="onClickButton">
        <img v-if="back" class="w-6 h-6 ml-4" src="/img/arrow-back-24px.svg" alt="close" @click="onClickButton">
        <img src="/img/top-bar-logo.svg" class="h-6" alt="">
        <div v-if="skip" class="pr-4 montserrat-font" @click="onClickSkipButton">SKIP</div>
        <div v-else class="w-6 h-6 mr-4"></div>
    </div>
</template>

<script>
export default {
    props:{
        close: Boolean,
        back: Boolean,
        skip: Boolean
    },
    data() {
        return {
            
        }
    },
    methods:{
        onClickButton(){
            console.log('click btn');
            this.$emit('click')
        },
        onClickSkipButton(){
            this.$emit('skip')
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