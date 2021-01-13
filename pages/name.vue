<template>
    <div>
        <top-bar back @click="onClickBackButton" />
        <input-field labelText="My first name is" v-model="firstName" placeHolder="First Name" hint="This is how it would appear in Bliss" class="mt-8"></input-field>
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
        firstName: {
            get () {
                return this.$store.state.firstName
            },
            set (value) {
                this.$store.commit('setFirstName', value)
            }
        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/email')
        },
        onClickButton(){
            this.$router.push('/birthday')
        }
    }
}
</script>

<style>
    
</style>