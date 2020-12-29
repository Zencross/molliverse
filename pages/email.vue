<template>
    <div>
        <top-bar back />
        <input-field labelText="My email is" placeHolder="email@address.com" hint="" class="mt-8"></input-field>
    </div>
</template>

<script>
import TopBar from '../components/TopBar'
import InputField from '../components/InputField'
export default {
    components:{ TopBar, InputField },
    data() {
        return {
            
        }
    },
}
</script>

<style>
    
</style>