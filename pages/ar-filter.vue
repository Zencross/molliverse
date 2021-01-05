<template>
    <div>
        <face-filter @confirm="onClickConfirm" />
    </div>
</template>

<script>
import FaceFilter from '~/components/FaceFilter.vue'
export default {
  components: { FaceFilter },
  data() {
    return {
      
    }
  },
  methods:{
    onClickConfirm(){
      if(this.$store.state.photo)
      console.log("confirm photo", this.$store.state.photo);

      if(this.$store.state.video)
      console.log("confirm video", this.$store.state.video);
      
      //put photo to array[0] & clean up photo
      //put this.$store.state.photo to this.$store.state.userProfileMedia[this.$store.state.currentMediaIndex]
      this.$store.commit("addUserProfileMedia",this.$store.state.currentMediaIndex)
      this.$store.commit('setActiveEffectIcon','lion')
      this.$router.push('/gallery')
    }
  }
}
</script>

<style lang="">
    
</style>