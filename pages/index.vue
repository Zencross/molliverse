<template>
  <div>
    <canvas class="deepar" id="deepar-canvas" oncontextmenu="event.preventDefault()"></canvas>
    <div class="fixed bottom-0 z-20 w-full py-3 slick-background">
      <VueSlickCarousel v-bind="settings">
        <div @click="changeEffect('galaxy')">
          <div class="thumb">
            <img height="95px" width="95px" src="/thumbs/galaxy.png" />
          </div>
        </div>
        <div @click="changeEffect('aviators')">
          <div class="thumb">
            <img  height="95px" width="95px" src="/thumbs/aviators.png" />
          </div>
        </div>
        <div @click="changeEffect('beard')">
          <div class="thumb">
            <img  height="95px" width="95px" src="/thumbs/beard.png" />
          </div>
        </div>
        <div @click="changeEffect('dalmatian')">
          <div class="thumb">
            <img  height="95px" width="95px" src="/thumbs/dalmatian.png" />
          </div>
        </div>
        <div @click="changeEffect('flowers')">
          <div class="thumb">
            <img  height="95px" width="95px" src="/thumbs/flowers.png" />
          </div>
        </div>
        <div @click="changeEffect('koala')">
          <div class="thumb">
            <img  height="95px" width="95px" src="/thumbs/koala.png" />
          </div>
        </div>
        <div @click="changeEffect('lion')">
          <div class="thumb">
            <img  height="95px" width="95px" src="/thumbs/lion.png" />
          </div>
        </div>
        <div @click="changeEffect('teddy_cigar')">
          <div class="thumb">
            <img  height="95px" width="95px" src="/thumbs/teddy_cigar.png" />
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
        // var loaderWrapper = document.getElementById("loader-wrapper");
        // loaderWrapper.style.display = "none";
      };

      deepAR.downloadFaceTrackingModel("/lib/models-68-extreme.bin");

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
  z-index: 10;
}

.thumb {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slick-background {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
