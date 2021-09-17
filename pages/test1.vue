<template>
    <div>
        <h3>He</h3>
        <!-- <Slider v-model="value"></Slider> -->
       <!-- <div class="pb-4 pt-3 border-b-2">
                <div class="flex pl-4">
                  <div class="flex-1">Age Range</div>
                  <div class="pr-4 text-gray-700">18-36 </div>
                </div>
                <vue-range-slider v-model="value" 
                :tooltipMerge='false'
                :useKeyboard="true"
                :stopPropagation="true"
                :enableCross="false"
                :height="4"
                 > </vue-range-slider>
      </div> -->
        <br>
       <div class="pb-4 pt-3 border-b-2">
                <div class="flex pl-4">
                  <div class="flex-1">Age Range</div>
                  <div class="pr-4 text-gray-700">18-36 </div>
                </div>
                <div class="pl-6">
                <vue-slider v-model="value" v-bind="options"/>
                </div>
      </div>
    </div>

</template>

<script>
// import 'vue-range-component/dist/vue-range-slider.css'
// import VueRangeSlider from 'vue-range-component'
// import HistogramSlider from "vue-histogram-slider";
// import "vue-histogram-slider/dist/histogram-slider.css";
import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'

export default {
      components: { VueSlider },
      data: () => ({
        value: [18, 45],
        options: {
        width: '95%',
        dotSize: 16,
        height: 4,
        contained: false,
        direction: 'ltr',
	      data: null,
        min: void 0,
        max: void 0,
        interval: 1,
        disabled: false,
        clickable: true,
        duration: 0.5,
        adsorb: false,
        lazy: false,
        tooltip: 'active',
        tooltipPlacement: 'top',
        tooltipFormatter: void 0,
        useKeyboard: false,
        keydownHook: null,
        dragOnClick: false,
        enableCross: true,
        fixed: false,
        minRange: 10,
        maxRange: 100,
        order: true,
        marks: false,
        dotOptions: void 0,
        process: true,
        dotStyle: void 0,
        railStyle: void 0,
        processStyle: void 0,
        tooltipStyle: void 0,
        stepStyle: void 0,
        stepActiveStyle: void 0,
        labelStyle: void 0,
        labelActiveStyle: void 0,
        }
      })
    }


</script>

<style>
.vue-slider-disabled .vue-slider-process {
  background-color: #a7a7a7;
}
.vue-slider-disabled .vue-slider-dot-handle {
  border-color: #a7a7a7;
}
.vue-slider-disabled .vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #a7a7a7;
}

/* rail style */
.vue-slider-rail {
  background-color: whitesmoke;
  border-radius: 15px;
  transition: background-color 0.3s;
}
.vue-slider:hover .vue-slider-rail {
  background-color: #e1e1e1;
}

/* process style */
.vue-slider-process {
  background-color: #800080;
  border-radius: 15px;
  transition: background-color 0.3s;
}
.vue-slider:hover .vue-slider-process {
  background-color: #800080;
}

/* mark style */
.vue-slider-mark-step {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #e8e8e8;
  background-color: #fff;
}
.vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #9cd5ff;
}
.vue-slider:hover .vue-slider-mark-step-active {
  box-shadow: 0 0 0 2px #69c0ff;
}

.vue-slider-mark-label {
  font-size: 12px;
  white-space: nowrap;
}
/* dot style */
.vue-slider-dot-handle {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #c2c2c2;
  box-sizing: border-box;
  transition: box-shadow 0.3s, border-color 0.3s;
}
.vue-slider:hover .vue-slider-dot-handle {
  border-color: #800080;
}

.vue-slider-dot-handle-focus {
  border-color: #800080;
  box-shadow: 0 0 0 5px rgba(222, 54, 255, 0.445);
}
.vue-slider:hover .vue-slider-dot-handle-focus {
  border-color: #800080;
}

.vue-slider-dot-handle:hover {
  border-color: #800080;
}
.vue-slider:hover .vue-slider-dot-handle:hover {
  border-color: #800080;
}

.vue-slider-dot-handle-disabled {
  cursor: not-allowed;
  border-color: #ddd !important;
}

.vue-slider-dot-tooltip {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.vue-slider-dot-tooltip-inner {
  font-size: 14px;
  white-space: nowrap;
  padding: 6px 8px;
  color: #fff;
  border-radius: 5px;
  border-color: rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transform: scale(0.9);
  transition: transform 0.3s;
}
.vue-slider-dot-tooltip-inner::after {
  content: "";
  position: absolute;
}
.vue-slider-dot-tooltip-inner-top::after {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-top-color: inherit;
}
.vue-slider-dot-tooltip-inner-bottom::after {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-bottom-color: inherit;
}
.vue-slider-dot-tooltip-inner-left::after {
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-left-color: inherit;
}
.vue-slider-dot-tooltip-inner-right::after {
  right: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-right-color: inherit;
}
.vue-slider-dot-tooltip-inner-top {
  transform-origin: 50% 100%;
}
.vue-slider-dot-tooltip-inner-bottom {
  transform-origin: 50% 0;
}
.vue-slider-dot-tooltip-inner-left {
  transform-origin: 100% 50%;
}
.vue-slider-dot-tooltip-inner-right {
  transform-origin: 0% 50%;
}

.vue-slider-dot:hover .vue-slider-dot-tooltip, .vue-slider-dot-tooltip-show {
  opacity: 1;
  visibility: visible;
}
.vue-slider-dot:hover .vue-slider-dot-tooltip .vue-slider-dot-tooltip-inner, .vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner {
  transform: scale(1);
}
/* .vue-range-slider.slider-component .slider .slider-dot.slider-dot-focus .slider-dot-handle {
  -webkit-box-shadow: 0 0 2px 1px #800080;
          box-shadow: 0 0 2px 1px#800080;
}

 .vue-range-slider.slider-component .slider-tooltip-wrap .slider-tooltip {
  display: block;
  font-size: 14px;
  white-space: nowrap;
  padding: 2px 4px;
  min-width: 20px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #800080;
  background-color: #800080;
}

.vue-range-slider.slider-component .slider .slider-process {
  position: absolute;
  border-radius: 15px;
  background-color: #800080;
   z-index: 1;
} */

</style>