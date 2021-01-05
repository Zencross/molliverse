<template>
    <div class="w-full h-screen">
        <top-bar back @click="onClickBackButton" />
        <div class="flex flex-col items-center w-full">
            <div class="flex justify-center w-4/5 mt-4 mb-2 text-3xl text-grayish-red montserrat-font disable-dbl-tap-zoom">Record a Video</div>
            <div class="flex justify-center w-4/5 text-xs montserrat-font text-lightgrey disable-dbl-tap-zoom">Hold, drag and drop to order your videos</div>
        </div>
        <div class="flex flex-col items-center my-2 grid-height">
            <div class="flex w-full row-height">
                <div class="relative w-1/3 my-3 ml-4 mr-2 bg-darkgrey rounded-xl">
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-2 bg-darkgrey rounded-xl">
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-4 bg-darkgrey rounded-xl">
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
            </div>

            <div class="flex w-full row-height">
                <div class="relative w-1/3 my-3 ml-4 mr-2 bg-darkgrey rounded-xl">
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-2 bg-darkgrey rounded-xl">
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-4 bg-darkgrey rounded-xl">
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
            </div>

            <div class="flex w-full row-height">
                <div class="relative w-1/3 my-3 ml-4 mr-2 bg-darkgrey rounded-xl">
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-2 bg-darkgrey rounded-xl">
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
                <div class="relative w-1/3 my-3 ml-2 mr-4 bg-darkgrey rounded-xl">
                    <img class="absolute bottom-0 right-0 z-20 -mb-2 -mr-2" src="../static/img/plus-purple-30px.svg" alt="">
                </div>
            </div>
        </div>
        <gradient-button buttonText="DONE" />
    </div>
</template>

<script>
import GradientButton from '~/components/GradientButton.vue'
import TopBar from '~/components/TopBar.vue'
export default {
    components:{TopBar, GradientButton},
    data() {
        return {

        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/passions')
        }
    }
}
</script>

<style>
.grid-height {
    height: 60%;
}

.row-height {
    height: 33%;
}
</style>