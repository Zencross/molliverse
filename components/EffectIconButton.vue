<template>
    <div class="focus:outline-none longpress-prevent-default" 
            :class="[activeEffectIcon===icon?'px-0':'px-2']"
            @click="onClickHandler" 
            v-long-press="300"
            @long-press-start="onLongPressStartHandler"
            @long-press-stop="onLongPressStopHandler"
        >
          <div class="flex items-center justify-center border-4 border-white rounded-full">
            <img :src="iconURL" />
          </div>
        </div>
</template>

<script>
import LongPress from 'vue-directive-long-press'

export default {
    directives: { 'long-press': LongPress },
    props:{
      icon:{ type: String }
    },
    data() {
        return {
            
        }
    },
    computed:{
        activeEffectIcon(){
            return this.$store.state.activeEffectIcon;
        },
        iconURL(){
            return `/thumbs/${this.icon}.png`
        }
    },
    methods:{
        onClickHandler(){
            this.$emit('click')
        },
        onLongPressStartHandler(){
            this.$emit('long-press-start')
        },
        onLongPressStopHandler(){
            this.$emit('long-press-stop')
        }
    }
}
</script>

<style lang="">
    
</style>