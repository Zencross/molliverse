<template>
    <div class="flex items-center rounded-full focus:outline-none longpress-prevent-default" 
            :class="[activeEffectIcon===icon?'border-8 border-white px-0':'px-2',
            longPressActive && activeEffectIcon===icon ?'animate-pulse':'animate-none']"
            @click="onClickHandler" 
            v-long-press="500"
            @long-press-start="onLongPressStartHandler"
            @long-press-stop="onLongPressStopHandler"
        >
          <img 
            :src="iconURL" 
            class="flex items-center justify-center object-fill" 
            :class="[activeEffectIcon===icon?'':'border-white rounded-full border-4',loading?'opacity-25':'']" 
          />
        </div>
</template>

<script>
import LongPress from 'vue-directive-long-press'

export default {
    directives: { 'long-press': LongPress },
    props:{
      icon:{ type: String },
      loading: { type: Boolean }
    },
    data() {
        return {
            longPressActive: false
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
          if(!this.longPressActive)
            this.$emit('click')
        },
        onLongPressStartHandler(){
            this.longPressActive = true;
            console.log(`longPressActive is ${this.longPressActive} inside EffectIconButton`);
            this.$emit('long-press-start')
        },
        onLongPressStopHandler(){
            this.longPressActive = false;
            console.log(`longPressActive is ${this.longPressActive} inside EffectIconButton`);
            this.$emit('long-press-stop')
        }
    }
}
</script>

<style>
@keyframes jiggle {
  0% {
    transform: rotate(-1deg);
  }
  50% {
    transform: rotate(1deg);
  }
}

.button-class {
  @apply animate-bounce
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>