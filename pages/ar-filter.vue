<template>
    <div>
        <face-filter @confirmPhoto="onClickConfirmPhoto" @confirmVideo="onClickConfirmVideo" />
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
    onClickConfirmPhoto(){
      if(this.$store.state.photo)
      console.log("confirm photo", this.$store.state.photo);
      this.$store.commit("addPhotoToUserProfileMedia",this.$store.state.currentMediaIndex)
      this.$store.commit('setActiveEffectIcon','lion')
      this.$router.push('/gallery')
    },
    onClickConfirmVideo(){
      if(this.$store.state.video)
      console.log("confirm video", this.$store.state.video);
      this.$store.commit("addVideoToUserProfileMedia",this.$store.state.currentMediaIndex)
      this.$store.commit("setVideo",null)
      this.$store.commit('setActiveEffectIcon','lion')
      this.$router.push('/gallery')
    }
  }
}
</script>

<style lang="">
    
</style>