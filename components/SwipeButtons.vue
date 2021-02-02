<template>
         <div class="navMenu flex bottom-0 absolute pb-5 gap-16 md:gap-80">
            <a href="#">
                <!-- <img src="../assets/img/remove.png" class="w-3/4 md:w-1/2" v-on:click="remove()"> -->
                <img src="../assets/img/remove.png" class="w-3/4 md:w-1/2" v-on:click="$emit('dislike')">

            </a>
            <a href="#">
                <img src="../assets/img/circle.png" class="w-3/4 md:w-1/2" v-on:click="superLike()">
            </a>
            <a href="#">
                <img src="../assets/img/tick.png" class="w-3/4 md:w-1/2" v-on:click="add()">
            </a>
        </div> 
</template>

<script>
import swing from './Swing.vue'

export default {
    components: { swing },
    data () {
        return {}
    },
}
</script>

<style >

</style>

