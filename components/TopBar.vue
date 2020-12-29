<template>
    <div class="flex items-center justify-start w-full py-4 bg-white shadow-lg">
        <img v-if="close" class="w-8 h-8 ml-4" src="../static/img/close-24px.svg" alt="close" @click="onClickButton">
        <img v-if="back" class="w-8 h-8 ml-4" src="../static/img/arrow-back-24px.svg" alt="close" @click="onClickButton">
    </div>
</template>

<script>
export default {
    props:{
        close: Boolean,
        back: Boolean
    },
    data() {
        return {
            
        }
    },
    methods:{
        onClickButton(){
            console.log('click btn');
            this.$emit('click')
        }
    }
}
</script>