<template>
         <div class="navMenu flex bottom-0 fixed pb-5 gap-16 md:gap-80">
             <a href="#">
                 <img src="../assets/img/undo.png" class="w-3/4 md:w-1/2" v-on:click="$emit('undo')">
            </a>
            <a href="#">
                <!-- <img src="../assets/img/remove.png" class="w-3/4 md:w-1/2" v-on:click="remove()"> -->
                <img src="../assets/img/remove.png" class="w-3/4 md:w-1/2" v-on:click="$emit('dislike')">

            </a>
            <a href="#">
                <!-- <img src="../assets/img/circle.png" class="w-3/4 md:w-1/2" v-on:click="superLike()"> -->
                <img src="../assets/img/circle.png" class="w-3/4 md:w-1/2" v-on:click="$emit('superlike')">
            </a>
            <a href="#">
                <!-- <img src="../assets/img/tick.png" class="w-3/4 md:w-1/2" v-on:click="add()"> -->
                <img src="../assets/img/tick.png" class="w-3/4 md:w-1/2" v-on:click="$emit('like')">
            </a>
        </div> 
</template>

<script>

export default {
    components: {  },
    data () {
        return {}
    },
}
</script>

<style >

</style>

