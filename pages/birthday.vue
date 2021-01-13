<template>
    <div>
        <top-bar back @click="onClickBackButton" />
        <input-field labelText="My Birthday is" v-model="birthday" placeHolder="MM/DD/YYYY" hint="Your Age will be public" class="mt-8"></input-field>
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
        birthday: {
            get () {
                return this.$store.state.birthday
            },
            set (value) {
                this.$store.commit('setBirthday', value)
            }
        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/name')
        },
        onClickButton(){
            this.$router.push('/gender')
        }
    }
}
</script>

<style>
    
</style>