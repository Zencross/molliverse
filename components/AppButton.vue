<template>
    <div class="flex justify-center w-full">
        <button 
            class="flex items-center w-9/12 p-3 bg-transparent border rounded-full focus:outline-none karla-font"
            :class="[
                borderBlack?'border-black':'',
                borderWhite?'border-white':'',
                textBlack?'text-black':'',
                textWhite?'text-white':'',
                rightArrow?'justify-between':'justify-center',
                activeEffect?'focus:font-black':''
            ]"
            @click="onClickButton"
        >
            <div v-if="rightArrow" class="w-4 h-4" />
            <span class="text-base">{{ buttonText }}</span>
            <img v-if="rightArrow" src="../static/img/arrow-forward-24px.svg" class="w-4 h-4" alt="">
        </button>
    </div>
</template>

<script>
export default {
    props:{
        buttonText:{
            type: String,
            default: 'Button Text'
        },
        borderBlack:{
            type: Boolean,
        },
        borderWhite:{
            type: Boolean,
        },
        textBlack:{
            type: Boolean
        },
        textWhite:{
            type: Boolean,
        },
        rightArrow:{
            type: Boolean
        },
        activeEffect:{
            type: Boolean
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
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap');

.karla-font{
    font-family: 'Karla', sans-serif;
}
</style>