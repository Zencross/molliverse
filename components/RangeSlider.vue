<template>
    <!-- <img
      src="../static/img/mollie-white.png"
      alt="Bliss"
      class="w-7/12 mt-24"
    /> -->
        <div class="aria-widget-slider">
            <div class="rail" style="width: 300px;">
                <img id="minPriceHotel"
                    src="../static/img/purple-dot.svg"
                    role="slider"
                    tabindex="0"
                    class="min thumb"
                    aria-valuemin="0"
                    aria-valuenow="100"
                    aria-valuetext="$100"
                    aria-valuemax="400"
                    aria-label="Hotel Minimum Price">
                <img id="maxPriceHotel"
                    src="../static/img/purple-dot.svg"
                    role="slider"
                    tabindex="0"
                    class="max thumb"
                    aria-valuemin="0"
                    aria-valuenow="250"
                    aria-valuetext="$250"
                    aria-valuemax="400"
                    aria-label="Hotel Maximum Price">
            </div>
    </div>
    
</template>

<script>
    export default {
       
    }
</script>

<style >
    .aria-widget-slider {
    clear: both;
    padding-top: 0.5em;
    padding-bottom: 1em;
    }

    /* .rail-label {
    padding-right: 0.5em;
    text-align: right;
    float: left;
    width: 4em;
    position: relative;
    top: -0.5em;
    } */

    /* .rail-label.max {
    padding-left: 0.5em;
    text-align: left;
    } */

    .aria-widget-slider .rail {
    background-color: #eee;
    border: 1px solid #888;
    position: relative;
    height: 4px;
    float: left;
    }

    .aria-widget-slider img[role="slider"] {
    position: absolute;
    padding: 0;
    margin: 0;
    top: -10px;
    }

    .aria-widget-slider img[role="slider"].focus,
    .aria-widget-slider img[role="slider"]:hover {
    outline-color: rgb(140, 203, 242);
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
    }

    .aria-widget-slider .rail.focus {
    background-color: #aaa;
    }
</style>