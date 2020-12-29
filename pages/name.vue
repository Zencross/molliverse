<template>
    <div>
        <top-bar close />
        <input-field labelText="My first name is" placeHolder="First Name" hint="This is how it would appear in Bliss" class="mt-8"></input-field>
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