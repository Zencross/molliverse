<template>
    <div>
        <top-bar back skip @click="onClickBackButton" @skip="onClickSkipButton" />
        <input-field labelText="My University is" v-model="university" placeHolder="University name" hint="This is how it would appear in Bliss" class="mt-8"></input-field>
        <gradient-button class="mt-24" @click="onClickButton" />
    </div>
</template>

<script>
import TopBar from '../components/TopBar'
import InputField from '../components/InputField'
import GradientButton from '../components/GradientButton.vue'

export default {
    components:{ TopBar, InputField, GradientButton },
    data() {
        return {
        }
    },
    computed: {
        university: {
            get () {
                return this.$store.state.university
            },
            set (value) {
                this.$store.commit('setUniversity', value)
            }
        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/show-me')
        },
        onClickButton(){
            this.$router.push('/passions')
        },
        onClickSkipButton(){
            this.$router.push('/passions')
        }
    }
}
</script>

<style>
    
</style>