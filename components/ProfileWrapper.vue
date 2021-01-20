<template>
  <div id="extended-img" ref="wrapper"> 
    <img 
      v-bind:class="{
        'landscape': isLandscape,
        'cover': size && size === 'cover',
        'contain': size && size ==='contain'
      }" 
      v-bind:src="src" 
      v-bind:alt="alt" 
      ref="image">
  </div>
</template>
<script>
  export default {
    props: ['src', 'alt', 'size'],
    
    data() {
      return {
        isLandscape: false
      }
    },
    computed: {
      wrapperRatio() {
        let wrapper = this.$refs.wrapper;
        return wrapper.clientHeight / wrapper.clientWidth;
      },
      imageRatio() {
        let image = this.$refs.image;
        return image.naturalHeight / image.naturalWidth;
      }
    },
    mounted() {
      let image = this.$refs.image;
      image.onload = () => {
        this.isLandscape = this.imageRatio < this.wrapperRatio;
        this.$emit('load');
      }
    }
  }
</script>
<style lang="scss">
  #extended-img {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
  
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &.contain {
        &.landscape {
          width: 100%;
        }
        &:not(.landscape) {
          height: 100%;
        }
      }
      &.cover {
        &.landscape {
          height: 100%;
        }
        &:not(.landscape) {
          width: 100%;
        }
      }
      &:not(.contain):not(.cover) {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>