<template>
    <div>
        <nav-menu/> 
        <!-- <profile/> -->
        <!-- <swipeable-cards/> -->
        <swing />
        <SwipeButtons v-on:dislike="remove()" @like="add()" @superlike="superLike()"/>

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

export default {
    components: { NavMenu, SwipeButtons, Profile, Swing },
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
        }
    }
}
</script>

<style>

</style>