<template>
    <div> <!--Nav menu on swipe screen (Profile,Bliss,Message)-->
        <nav class="justify-between flex m-10 mb-8 text-black"> 
            <!-- <div>
                <a href="#">
                    <svg class="w-10 h-10" fill="red" viewBox="0 0 0 0" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </a>
            </div> -->
            <div>
                <a href="#">
                 <img src="../assets/img/ProfileIcon.png" class="navButton1and3">
                </a>
            </div>

            <div>
                <a href="#">
                    <img src="../assets/img/logo.png" class="navButton2">
                </a>
            </div>

            <div>
                <a href="#">
                    <img src="../assets/img/MessageIcon.png" class="navButton1and3">
                </a>
            </div>
            <!-- <div>
                <a href="#">
                    <svg class="w-10 h-10" fill="red" viewBox="0 0 0 0" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd"></path></svg>
                </a>
            </div> -->
        </nav>
    </div>
    
</template>

<script>
export default {
    data () {
        return {}
    }
    }
    
</script>

<style>
 .navButton1and3 {
     width: 28px;
     /* height: 28px; */
     @media screen and (min-height: 548px) and (max-height: 641px) {
         width: 25px;
     }
     @media screen and (min-width: 767px) {
         width: 50px;
     }
 }

.navButton2 {
    width: 33px;
    @media screen and (min-height: 548px) and (max-height: 641px) {
        width: 29px;
    }
    @media screen and (min-width: 767px) {
        width: 65px;
    }
    /* height: 28px; */
}
</style>