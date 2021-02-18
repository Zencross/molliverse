<template>
    <div>
        <top-bar back @click="onClickBackButton" />
        <input-field labelText="My email is" v-model="email" placeHolder="email@address.com" hint="" class="mt-8"></input-field>
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
    computed:{
        email: {
            get () {
                return this.$store.state.email
            },
            set (value) {
                this.$store.commit('setEmail', value)
            }
        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/')
        },
        onClickButton(){
            this.$router.push('/name')
        },
        onInputEmail(){
            console.log(this.email);
            this.$store.commit('setEmail', this.email)
        }
    }
}
</script>

<style>
    
</style>