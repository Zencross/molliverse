<template>
    <div class="flex items-center justify-start w-full py-4 bg-white shadow-lg">
        <img v-if="close" class="w-6 h-6 ml-4" src="../static/img/close-24px.svg" alt="close" @click="onClickButton">
        <img v-if="back" class="w-6 h-6 ml-4" src="../static/img/arrow-back-24px.svg" alt="close" @click="onClickButton">
        <div v-if="skip" class="absolute right-0 pr-4 montserrat-font" @click="onClickSkipButton">SKIP</div>
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