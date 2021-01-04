<template>
    <div class="flex flex-col items-center">
        <top-bar back skip @click="onClickBackButton" @skip="onClickSkipButton" />
        <div class="w-4/5 mt-8 mb-3 text-3xl text-grayish-red montserrat-font">Passions</div>
        <div class="w-4/5 text-sm montserrat-font text-lightgrey">Let everyone know what you’re passionate about, by adding it to your profile</div>
    </div>
</template>

<script>
import AppText from '~/components/AppText.vue'
import TopBar from '~/components/TopBar.vue'
export default {
  components: { AppText, TopBar },
    data() {
        return {
            
        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/education')
        },
        onClickSkipButton(){}
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.montserrat-font{
    font-family: 'Montserrat', sans-serif;
}
</style>