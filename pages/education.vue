<template>
    <div>
        <top-bar back @click="onClickBackButton" />
        <input-field labelText="My University is" placeHolder="University name" hint="This is how it would appear in Bliss" class="mt-8"></input-field>
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
    methods:{
        onClickBackButton(){
            this.$router.push('/show-me')
        },
        onClickButton(){
            this.$router.push('/passions')
        }
    }
}
</script>

<style>
    
</style>