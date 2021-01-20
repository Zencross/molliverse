



<template>
    <div class="absolute" id="cards">
        <!-- <img src="../assets/img/profile1.gif"  class=" border-pink-600 border-4 rounded-xl -mt-8 w-100% h-100% bg-contain"> -->
        <!-- <b-img :src="profile.src"  ></b-img> -->
    
        <!-- <b-img :src="require('../assets/img/profile1.gif')" class="fluid-grow bg-contain"/> -->
       
        <!-- <button id="profile" onclick="changeImage()">click me</button> -->
            <script>
                
            </script>
        
    </div>
</template>

<script>
    import ProfileWrapper from './ProfileWrapper.vue'

    export default {
  components: { ProfileWrapper },
        data () {
            return {
                
            }
        }
    }
</script>

<style>

</style>

     <!-- // var myImage = document.getElementById('profile');
                // var imageArray=['img/swipecards/gif4.gif', 'img/swipecards/gif5.gif', 'img/swipecards/gif6.gif', 'img/swipecards/gif7.gif'];
                // var imageArray1='img/swipecards';
                // var imageIndex=1;

                // function changeImage() {
                //     myImage.setAttribute("src", imageArray[imageIndex]);
                //     imageIndex++;
                //         if (imageIndex > 3) {
                //             imageIndex=0;
                //         }
                //         console.log(imageArray1.length);
                // }

                // cards.addEventListener("click", () => {
                //     var pWidth = $(cards).innerWidth();
                //     var pOffset = $(cards).offset();
                //     var x = (e.pageX = pOffset.left);
                //     if (pWidth / 2 > x) {
                //         let arrayIndex;
                //         for (arrayIndex = 0; arrayIndex < imageArray.length; arrayIndex++) {
                //         return imageArray[arrayIndex];
                //         console.log("hello world");
                //         }
                //     } else {
                //         let arrayIndex;
                //         for (arrayIndex = 0; arrayIndex < imageArray.length; arrayIndex--) {
                //         return imageArray[arrayIndex];
                //         console.log("hello world");
                //         }
                //     }
                //     });


                // var images=['img/swipecards/gif2.gif', 'img/swipecards/gif4.gif', 'img/swipecards/gif5.gif', 'img/swipecards/gif6.gif', 'img/swipecards/gif7.gif'];
                // function myImages() {
                //     var imageIndex=1;
                //     document.getElementById('profile').src = images[imageIndex];
                //     imageIndex++;
                //     if (imageIndex > images.length) {
                //         imageIndex=0;
                //     }
                // } -->