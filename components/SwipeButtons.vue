<template>
       <div class="flex bottom-0 absolute left-0 right-0 pb-5 pl-16 md:ml-24"> <!--Buttons-->
            <a href="#">
                <img src="../assets/img/remove.png" class="w-2/5" v-on:click="this.$root.$refs.remove">
            </a>
            <a href="#">
                <img src="../assets/img/circle.png" class="w-2/5" v-on:click="this.$root.$refs.add">
            </a>
            <a href="#">
                <img src="../assets/img/tick.png" class="w-2/5" v-on:click="this.$root.$refs.swing">
            </a>
        </div>
</template>

<script>
import Swing from './Swing.vue'

export default {
    data () {
        return {}
    }
}
</script>

<style >

</style>

