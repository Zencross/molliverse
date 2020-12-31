<template>
    <div class="w-9/12 overflow-scroll scroll-view-container">
        <div class='montserrat-font text-lightgrey'>Select up to 3</div>
        <button 
          class="flex flex-col items-start w-full pl-1 mt-3 text-xl karla-font" 
          v-for="item in items" 
          :key="item.id"
        >
            {{item.name}}
        </button>
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

.scroll-view-container{
    max-height: 200px;
}
</style>