<template>
    <div class="flex justify-center w-full">
        <button @click="onClickButton" class="flex items-center justify-center w-4/5 p-3 text-white rounded-full button-gradient montserrat-font">
            <span class="text-lg font-bold">{{ buttonText }}</span>
        </button>
    </div>
</template>

<script>
export default {
    props:{
        buttonText:{
            type: String,
            default: 'Continue'
        }
    },
    data() {
        return {
            
        }
    },
    computed:{},
    methods:{
        onClickButton(){
            this.$emit('click')
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.montserrat-font{
    font-family: 'Montserrat', sans-serif;
}

.button-gradient {
    background: linear-gradient(.25turn, #632B75, 50%, #FD267D);
}
</style>