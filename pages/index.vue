<template>
  <div>
    <canvas class="deepar" id="deepar-canvas" oncontextmenu="event.preventDefault()"></canvas>
    <div id="loader-wrapper">
      <span class="loader"></span></span>
    </div>

    <!-- <div class="effect-carousel">
      <div><img class="thumb" src="/thumbs/galaxy.png"></div>
      <div><img class="thumb" src="/thumbs/aviators.png"></div>
      <div><img class="thumb" src="/thumbs/beard.png"></div>
      <div><img class="thumb" src="/thumbs/dalmatian.png"></div>
      <div><img class="thumb" src="/thumbs/flowers.png"></div>
      <div><img class="thumb" src="/thumbs/koala.png"></div>
      <div><img class="thumb" src="/thumbs/lion.png"></div>
      <div><img class="thumb" src="/thumbs/teddy_cigar.png"></div>
    </div> -->

    <VueSlickCarousel class="slick" v-bind="settings">
      <div class="thumb" @click="changeEffect('galaxy')"><img src="/thumbs/galaxy.png" /></div>
      <div class="thumb" @click="changeEffect('aviators')"><img src="/thumbs/aviators.png" /></div>
      <div class="thumb" @click="changeEffect('beard')"><img src="/thumbs/beard.png" /></div>
      <div class="thumb" @click="changeEffect('dalmatian')"><img src="/thumbs/dalmatian.png" /></div>
      <div class="thumb" @click="changeEffect('flowers')"><img src="/thumbs/flowers.png" /></div>
      <div class="thumb" @click="changeEffect('koala')"><img src="/thumbs/koala.png" /></div>
      <div class="thumb" @click="changeEffect('lion')"><img src="/thumbs/lion.png" /></div>
      <div class="thumb" @click="changeEffect('teddy_cigar')"><img src="/thumbs/teddy_cigar.png" /></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      canvasHeight: window.innerHeight,
      canvasWidth: window.innerWidth,
      deepARInstance: null,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
      },
    };
  },
  methods: {
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

      deepAR.onScreenshotTaken = function (photo) {
        console.log("screenshot taken");
      };

      deepAR.onImageVisibilityChanged = function (visible) {
        console.log("image visible", visible);
      };

      deepAR.onFaceVisibilityChanged = function (visible) {
        console.log("face visible", visible);
      };

      deepAR.onVideoStarted = function () {
        var loaderWrapper = document.getElementById("loader-wrapper");
        loaderWrapper.style.display = "none";
      };

      deepAR.downloadFaceTrackingModel("/lib/models-68-extreme.bin");

      // if (window.innerWidth > window.innerHeight) {
      //   var width = Math.floor(window.innerHeight * 0.66);
      //   var carousel = document.getElementsByClassName("effect-carousel")[0];
      //   carousel.style.width = width + "px";
      //   carousel.style.marginLeft = (window.innerWidth - width) / 2 + "px";
      // }

      this.deepARInstance = deepAR;
    },
    changeEffect(key) {
      console.log(`${key} selected`);
      switch (key) {
        case "galaxy":
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/background_segmentation",
            function () {}
          );
          break;
        case "aviators":
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/aviators",
            function () {}
          );
          break;
        case "beard":
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/beard",
            function () {}
          );
          break;
        case "dalmatian":
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/dalmatian",
            function () {}
          );
          break;
        case "flowers":
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/flowers",
            function () {}
          );
          break;
        case "koala":
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/koala",
            function () {}
          );
          break;
        case "lion":
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/lion",
            function () {}
          );
          break;
        case "teddy_cigar":
          this.deepARInstance.switchEffect(
            0,
            "slot",
            "/effects/teddycigar",
            function () {}
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
}

#loader-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  text-align: center;
}

.loader {
  display: inline-block;
  position: relative;
  top: 42%;
  z-index: 1000;

  width: 90px;
  height: 90px;
  margin: auto;
  background-color: #00f;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1.5s infinite ease-in-out;
  animation: sk-scaleout 1.5s infinite ease-in-out;
}

.slick {
  width: 100%;
  height: 130px;
  background-color: rgba(255, 255, 255, 0.7);
}

.thumb {
  display: flex;
  justify-content: center;
  width: 186px;
}
</style>
