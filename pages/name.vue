<template>
    <div class="flex flex-col">
        <top-bar close @click="onClickBackButton" />
        <input-field 
            labelText="My first name is" 
            v-model="firstName" 
            placeHolder="Enter your first name" 
            hint="This is how it would appear in Bliss" 
            class="mt-10">
        </input-field>
        <app-button buttonText="Continue" textWhite bgPhoneNum @click="onClickButton" class="absolute bottom-0 mb-8" />
    </div>
</template>

<script>
import TopBar from '../components/TopBar'
import InputField from '../components/InputField'
import AppButton from '~/components/AppButton.vue'

export default {
    components:{ TopBar, InputField, AppButton },
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
            this.$router.push('/')
        },
        onClickButton(){
            this.$router.push('/birthday')
        }
    }
}
</script>

<style>
    
</style>