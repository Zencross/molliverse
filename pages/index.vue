<template>
  <div>
    <h1>Deep Ar in VueJs</h1>
    <canvas class="deepar" id="deepar-canvas" oncontextmenu="event.preventDefault()"></canvas>
    <div id="loader-wrapper">
      <span class="loader"></span></span>
    </div>

    <div class="effect-carousel">
      <div><img class="thumb" src="/thumbs/galaxy.png"></div>
      <div><img class="thumb" src="/thumbs/aviators.png"></div>
      <div><img class="thumb" src="/thumbs/beard.png"></div>
      <div><img class="thumb" src="/thumbs/dalmatian.png"></div>
      <div><img class="thumb" src="/thumbs/flowers.png"></div>
      <div><img class="thumb" src="/thumbs/koala.png"></div>
      <div><img class="thumb" src="/thumbs/lion.png"></div>
      <div><img class="thumb" src="/thumbs/teddy_cigar.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvasHeight: window.innerHeight,
      canvasWidth: window.innerWidth,
      deepAR: null,
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
          console.log(deepAR);
          // start video immediately after the initalization, mirror = true
          deepAR.startVideo(true);

          // or we can setup the video element externally and call deepAR.setVideoElement (see startExternalVideo function below)

          deepAR.switchEffect(
            0,
            "slot",
            "/effects/background_segmentation",
            function () {
              // effect loaded
            }
          );
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

      if (window.innerWidth > window.innerHeight) {
        var width = Math.floor(window.innerHeight * 0.66);
        var carousel = document.getElementsByClassName("effect-carousel")[0];
        carousel.style.width = width + "px";
        carousel.style.marginLeft = (window.innerWidth - width) / 2 + "px";
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

body {
  margin: 0px;
  padding: 0px;
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

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }

  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

.effect-carousel {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 130px;
  position: fixed;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
}

.thumb {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  opacity: 0.8;
  transition: all 300ms ease;
  height: 100px;
}

.slick-center .thumb {
  -moz-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  color: #e67e22;
  opacity: 1;
  transform: scale(1.3);
}

.slick-slide {
  width: 130px;
}
</style>
