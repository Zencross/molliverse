<template>
    <div class="container w-9/12 overflow-scroll bg-white">
        <div class='bg-white montserrat-font text-lightgrey'>Select up to 3</div>
        <div class="flex flex-col items-start pt-3 pl-1 text-xl bg-white karla-font" v-for="item in items" :key="item.id">{{item.name}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        items:{
            type: Array
        }
    },
    data() {
        return {
            
        }
    },
    methods:{}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.montserrat-font{
    font-family: 'Montserrat', sans-serif;
}

.karla-font{
    font-family: 'Karla', sans-serif;
}

.container{
    max-height: 200px;
}
</style>