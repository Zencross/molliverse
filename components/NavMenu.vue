<template>
    <div> <!--Nav menu on swipe screen (Profile,Bliss,Message)-->
        <!-- <nav class="justify-between flex m-10 mb-8 text-black ">  -->
            <nav class="nav-menu flex m-10 mb-8 text-black border-b-2 pb-3 ml-3 mx-3 justify-center"> 
            <div>
                <a href="#">
                 <img src="../assets/img/ProfileIcon.png" class="navButton1and3 ">
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

.nav-menu {
    gap: 8rem;
    @media screen and (max-width: 321px) {
        gap: 7rem;
    }
    @media screen and (max-width: 296px) {
        gap: 6rem;
    }
}
</style>