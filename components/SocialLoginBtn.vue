<template>
    <div class="flex justify-center w-full">
        <button class="flex items-center justify-center w-9/12 p-3 text-white bg-transparent border border-white rounded-full karla-font">
            <span class="text-base">{{ buttonText }}</span>
        </button>
    </div>
</template>

<script>
export default {
    props:{
        buttonText:{
            type: String,
            default: 'Sign in with Apple'
        }
    },
    data() {
        return {
            
        }
    },
    computed:{},
    methods:{}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap');

.karla-font{
    font-family: 'Karla', sans-serif;
}
</style>