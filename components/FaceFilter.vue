<template>
  <div>
    <!-- Photo preview -->
    <div v-if="photo" class="absolute top-0 z-30">
      <img class="fixed top-0 right-0 w-16 h-16 p-3" src="~/assets/img/close-white-18dp.svg" alt="close" @click="onClickClosePhotoPreview">
      <img :src="photo" alt="photo">
    </div>

    <!-- Video preview -->
    <div v-if="showVideoPreview" class="absolute top-0 z-30" >
    <img class="fixed top-0 right-0 z-40 w-16 h-16 p-3" src="~/assets/img/close-white-18dp.svg" alt="close" @click="onClickCloseVideoPreview">
    <video :src="video" 
      autoplay 
      loop
    >
    </video>        
    </div>

    <canvas class="deepar" id="deepar-canvas" ref="canvas" oncontextmenu="event.preventDefault()"></canvas>
    <div class="fixed bottom-0 z-20 w-full py-3 mb-10 slick-background">
      <VueSlickCarousel @afterChange="onElementChange" v-bind="settings">
        <div id="lion" class="focus:outline-none longpress-prevent-default" :class="[activeEffectIcon==='lion'?'px-0':'px-2']" @click="capturePhoto('lion')" 
        v-long-press="800" @long-press-start="onLongPressStart" @long-press-stop="onLongPressStop" >
          <div class="flex items-center justify-center border-4 border-white rounded-full">
            <img src="/thumbs/lion.png" />
          </div>
        </div>
        <div id="aviators" class="focus:outline-none" :class="[activeEffectIcon==='aviators'?'px-0':'px-2']" @click="capturePhoto('aviators')"
        v-long-press="800" @long-press-start="onLongPressStart" @long-press-stop="onLongPressStop">
          <div class="flex items-center justify-center border-4 border-white rounded-full">
            <img src="/thumbs/aviators.png" />
          </div>
        </div>
        <div id="beard" class="focus:outline-none" :class="[activeEffectIcon==='beard'?'px-0':'px-2']" @click="capturePhoto('beard')"
        v-long-press="800" @long-press-start="onLongPressStart" @long-press-stop="onLongPressStop">
          <div class="flex items-center justify-center border-4 border-white rounded-full">
            <img src="/thumbs/beard.png" />
          </div>
        </div>
        <div id="dalmatian" class="focus:outline-none" :class="[activeEffectIcon==='dalmatian'?'px-0':'px-2']" @click="capturePhoto('dalmatian')"
        v-long-press="800" @long-press-start="onLongPressStart" @long-press-stop="onLongPressStop">
          <div class="flex items-center justify-center border-4 border-white rounded-full">
            <img src="/thumbs/dalmatian.png" />
          </div>
        </div>
        <div id="flowers" class="focus:outline-none" :class="[activeEffectIcon==='flowers'?'px-0':'px-2']" @click="capturePhoto('flowers')"
        v-long-press="800" @long-press-start="onLongPressStart" @long-press-stop="onLongPressStop">
          <div class="flex items-center justify-center border-4 border-white rounded-full">
            <img src="/thumbs/flowers.png" />
          </div>
        </div>
        <div id="koala" class="focus:outline-none" :class="[activeEffectIcon==='koala'?'px-0':'px-2']" @click="capturePhoto('koala')"
        v-long-press="800" @long-press-start="onLongPressStart" @long-press-stop="onLongPressStop">
          <div class="flex items-center justify-center border-4 border-white rounded-full">
            <img src="/thumbs/koala.png" />
          </div>
        </div>
        <div id="galaxy" class="focus:outline-none" :class="[activeEffectIcon==='background_segmentation'?'px-0':'px-2']" @click="capturePhoto('background_segmentation')"
        v-long-press="800" @long-press-start="onLongPressStart" @long-press-stop="onLongPressStop">
          <div class="flex items-center justify-center border-4 border-white rounded-full">
            <img src="/thumbs/galaxy.png" />
          </div>
        </div>
        <div id="teddy_cigar" class="focus:outline-none" :class="[activeEffectIcon==='teddycigar'?'px-0':'px-2']" @click="capturePhoto('teddycigar')"
        v-long-press="800" @long-press-start="onLongPressStart" @long-press-stop="onLongPressStop">
          <div class="flex items-center justify-center border-4 border-white rounded-full">
            <img src="/thumbs/teddy_cigar.png" />
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import LongPress from 'vue-directive-long-press'


export default {
  directives: { 'long-press': LongPress },
  components: { VueSlickCarousel },
  data() {
    return {
      activeEffectIcon: 'lion',
      canvasHeight: window.innerHeight,
      canvasWidth: window.innerWidth,
      deepARInstance: null,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15%',
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
        speed: 150,
      },
      photoTaken: null,
      showVideoPreview: false,
      mediaRecorder: null,
    };
  },
  computed:{
    photo(){
      return this.$store.state.photo
    },
    video(){
      return this.$store.state.video
    }
  },
  methods: {
    onLongPressStart(e){
      console.log('onLongPressStart',e);
      //Apply start record CSS to button
      this.initRecord()
    },
    onLongPressStop(){
      console.log('onLongPressStop');
      if(this.mediaRecorder && this.mediaRecorder.state !== 'inactive')
      this.mediaRecorder.stop()
    },
    initRecord(){
      console.log("initRecord..");
      var video = document.querySelector("video")
      console.log('video ref', video);
      var canvas = document.getElementById("deepar-canvas")
      var videoStream = canvas.captureStream(30);
      this.mediaRecorder = new MediaRecorder(videoStream);
      console.log('mediaRecorder', this.mediaRecorder);

      var chunks = [];
      this.mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      };

      this.mediaRecorder.onstop = (e) => {
        console.log("video onStop");
        var blob = new Blob(chunks, { 'type' : 'video/mp4' }); // other types are available such as 'video/webm' for instance, see the doc for more info
        chunks = [];
        var videoURL = URL.createObjectURL(blob);
        this.$store.commit('setVideo', videoURL)
        this.showVideoPreview = true
      };
      this.mediaRecorder.start();
    },
    onClickClosePhotoPreview(){
      this.$store.commit('setPhoto', null)
    },
    onClickCloseVideoPreview(){
      console.log("close video");
      this.showVideoPreview = false;
      this.$store.commit('setVideo', null)
    },
    capturePhoto(key){
      console.log(`${key} icon is pressed`);
      //  If center icon is clicked
      if(key === this.activeEffectIcon){
        console.log(`${key} is at center, take screen shot`);
        this.deepARInstance.takeScreenshot();
      }
    },
    onElementChange(index){
      console.log("change to ", index);
      this.changeEffect(index)
    },
    initialize() {
      // desktop, the width of the canvas is 0.66 * window height and on mobile it's fullscreen
      if (window.innerWidth > window.innerHeight) {
        this.canvasWidth = Math.floor(window.innerHeight * 0.66);
      }

      const deepAR = DeepAR({
        canvasWidth: this.canvasWidth,
        canvasHeight: this.canvasHeight,
        licenseKey:
          "b31c00ca5e518316fd9c2edc7a4ed4507f272498998f7c5ff91a42ddf3afe0bce83fb15abd1d8a43",
        canvas: document.getElementById("deepar-canvas"),
        numberOfFaces: 1,
        libPath: "/lib",
        segmentationInfoZip: "segmentation.zip",
        onInitialize: function () {
          console.log("onInitialize callback", deepAR);
          // start video immediately after the initalization, mirror = true
          deepAR.startVideo(true);

          // or we can setup the video element externally and call deepAR.setVideoElement (see startExternalVideo function below)

          deepAR.switchEffect(0, "slot", "/effects/lion", function () {
            // effect loaded
          });
        },
      });

      deepAR.onCameraPermissionAsked = function () {
        console.log("camera permission asked");
      };

      deepAR.onCameraPermissionGranted = function () {
        console.log("camera permission granted");
      };

      deepAR.onCameraPermissionDenied = function () {
        console.log("camera permission denied");
      };

      deepAR.onScreenshotTaken = (photo) => {
        console.log("screenshot taken");
        this.$store.commit('setPhoto', photo)
      };

      deepAR.onImageVisibilityChanged = function (visible) {
        console.log("image visible", visible);
      };

      deepAR.onFaceVisibilityChanged = function (visible) {
        console.log("face visible", visible);
      };

      deepAR.onVideoStarted = function () {
        // var loaderWrapper = document.getElementById("loader-wrapper");
        // loaderWrapper.style.display = "none";
      };

      deepAR.downloadFaceTrackingModel("/lib/models-68-extreme.bin");

      this.deepARInstance = deepAR;
    },
    changeEffect(key) {
      console.log(`${key} selected`);
      switch (key) {
        case 0:
          // document.getElementById('aviators').style.paddingLeft = '0.5rem'
          // document.getElementById('aviators').style.paddingRight = '0.5rem'

          // document.getElementById('lion').style.paddingLeft = '0px'
          // document.getElementById('lion').style.paddingRight = '0px'

          this.activeEffectIcon = 'lion'

          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/lion",
            function () {
              console.log("changed effect to lion");
            }
          );
          break;
        case 1:
          // document.getElementById('lion').style.paddingLeft = '0.5rem'
          // document.getElementById('lion').style.paddingRight = '0.5rem'

          // document.getElementById('aviators').style.paddingLeft = '0px'
          // document.getElementById('aviators').style.paddingRight = '0px'

          this.activeEffectIcon = 'aviators'

          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/aviators",
            function () {
              console.log("changed effect to aviators");
            }
          );
          break;
        case 2:
          this.activeEffectIcon = 'beard'
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/beard",
            function () {
              console.log("changed effect to beard");
            }
          );
          break;
        case 3:
          this.activeEffectIcon = 'dalmatian'
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/dalmatian",
            function () {
              console.log("changed effect to dalmation");
            }
          );
          break;
        case 4:
          this.activeEffectIcon = 'flowers'
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/flowers",
            function () {
              console.log("changed effect to flowers");
            }
          );
          break;
        case 5:
          this.activeEffectIcon = 'koala'
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/koala",
            function () {
              console.log("changed effect to koala");
            }
          );
          break;
        case 6:
          this.activeEffectIcon = 'background_segmentation'
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/background_segmentation",
            function () {
              console.log("changed effect to background_segmentation");
            }
          );
          break;
        case 7:
          this.activeEffectIcon = 'teddycigar'
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/teddycigar",
            function () {
              console.log("changed effect to teddycigar");
            }
          );
          break;
        default:
          // code block
          console.log("effect not found");
      }
    },
  },
  mounted() {
    this.initialize();
  },
};
</script>

<style>
canvas.deepar {
  border: 0px none;
  background-color: black;
  display: block;
  margin: auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: 10;
}

.thumb {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slick-background {
  background-color: transparent
}

.center-circle {

}

.longpress-prevent-default {
  -webkit-user-select: none; /* disable selection/Copy of UIWebView */
  -webkit-touch-callout: none; /* disable the IOS popup when long-press on a link */
}   

</style>
