<template>
  <div class="-mt-8">
    <face-filter
      @confirmPhoto="onClickConfirmPhoto"
      @confirmVideo="onClickConfirmVideo"
    />
  </div>
</template>

<script>
import FaceFilter from "~/components/FaceFilter.vue";
export default {
  components: { FaceFilter },
  data() {
    return {};
  },
  methods: {
    onClickConfirmPhoto() {
      this.$router.push("/gallery");
      // console.log("confirm photo", this.$store.state.photo);
      this.$store.commit(
        "addPhotoToUserProfileMedia",
        this.$store.state.currentMediaIndex
      );
      this.$store.commit("setActiveEffectIcon", "lion");
    },
    onClickConfirmVideo() {
      this.$router.push("/gallery");
      // console.log("confirm video", this.$store.state.video);
      this.$store.commit(
        "addVideoToUserProfileMedia",
        this.$store.state.currentMediaIndex
      );
      this.$store.commit("setVideo", null);
      this.$store.commit("setActiveEffectIcon", "lion");
    }
  }
};
</script>

<style lang=""></style>
