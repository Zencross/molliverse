<template>
    <div class="text-3xl montserrat-font text-lightgrey">
        {{text}}
    </div>
</template>

<script>
export default {
    props:{
        text: {
            type: String,
            required: true
        }
    }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.montserrat-font{
    font-family: 'Montserrat', sans-serif;
}

.label-color {
    color: #796B6B
}
</style>