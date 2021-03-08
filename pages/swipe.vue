<template>
    <div>
        <nav-menu/> 
        <!-- <profile/> -->
        <!-- <swipeable-cards/> -->
        <!-- <swing/> -->
         <!-- <Vue2InteractDraggable/> -->
        <!-- <VueTinder/> -->
        <Swing2/>
        <SwipeButtons v-on:dislike="remove()" @like="add()" @superlike="superLike()" @undo="undo()"/>

        <!-- <div v-for="card in cards" :key="card.id">
            <img :src="card.url"/>
            <h1>{{ card.text }}</h1>
        </div> -->
    </div>
</template>


<script>
import NavMenu from '../components/NavMenu'
import SwipeButtons from '../components/SwipeButtons'
import Profile from '../components/Profile'
import Swing from '../components/Swing'
import { Vue2InteractDraggable,InteractEventBus } from '../components/Swing2'
import VueTinder from '../components/Swing3'
import Swing2 from '../components/Swing2'

export default {
    components: { NavMenu, SwipeButtons, Profile, Swing, Vue2InteractDraggable, InteractEventBus, VueTinder, Swing2 },
    data() {
        return {
        }
    },
    methods: {
        remove() {
            this.$root.$emit('remove')
        },
        add() {
            this.$root.$emit('add')
        },
        superLike() {
            this.$root.$emit('superLike')
        },
        undo() {
            this.$root.$emit('undo')
        }

    }
}
</script>

<style>

</style>