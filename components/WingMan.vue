<template>
   <div class="grid justify-items-stretch ">
    <!-- <div class="fixed mb-40 heading text-center">
        <h3> Looks like you guys want to play a game :) <br /> Here are some game suggestions! </h3>
    </div> -->
    
    <!-- <div class="ae bg-red-700"  v-for="(x, index) in noOfOptions" :key="index">
        <button class="text-white rounded-full button-gradient montserrat-font"> 
             <span class="text-xs font-bold">{{ options[index] }}</span>
        </button>
    </div> -->
     <!-- <div class="grid grid-cols-2 bg-red-700"  v-for="(x, index) in noOfOptions" :key="index">
        <div class="flex-1 text-white text-xs font-bold rounded-full button-gradient montserrat-font"> 
             <span class="flex-1">{{ options[index] }}</span>
        </div>
    </div> -->
    
    <table class="fixed bottom-0 mb-10 text-center  w-full container pt-2">
        <div class="heading">
            <h3> Looks like you guys want to play a game :) <br /> Here are some game suggestions! </h3>
        </div>
        <tr class="grid grid-cols-2 gap-6 p-4 menu">
            <td class="text-white  font-bold rounded-lg
             text-center self-center questionButton"
            :style="{'background-color': questionColor[index]}"
            v-for="(x, index) in noOfQuestions" :key="index">
                <div :style="btnStyle">
                    {{ questions[index] }}
                </div>
            </td>
        </tr>
    </table>

    <div class="ml-16">
        <button class="fixed bottom-0 left-0 pr-52 w-full noThanks no-focusborder">No thanks!</button>
    </div>
   </div>
    
</template>

<script>
export default {
    props: {
        noOfQuestions: {
            type: Number,
            default: 4
        },
        questions: {
            type: Array,
            default: () =>  [
                "Would you rather",
               "Never have I ever",
               "Two truths & one lie",
               "20 Questions",
               "Yes or No"
               ]
        },
        questionsFont: {
            type: String,
            default: 'Montserrat'
        },
        questionColor: {
            type: Array,
            default: () => ['green','#632B75','blue','#FD267D']
        }
    },
    // var randomItem = myArray[Math.floor(Math.random()*myArray.length)];


    computed: {
        btnStyle() {
            return {
                'font-family': this.questionsFont,
                // 'background': this.questionColor[Math.floor(Math.random() * (this.questionColor.length ))]
            }
        },
        // btnColor() {
        //     return {
        //         'background': this.questionColor[Math.floor(Math.random() * (this.questionColor.length ))]
        //     }
        // }
    },
    data () {
       return {
        //    options: [
        //        "Would you rather",
        //        "Never have I ever",
        //        "Two truths & one lie",
        //        "20 Questions",
        //        "Yes or No"
        //    ]
       }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    .montserrat-font{
        font-family: 'Montserrat', sans-serif;
    }

    .button-gradient {
        background: linear-gradient(.25turn, #632B75, 50%, #FD267D);
    }

    .heading {
        margin: 1%;
        @media screen and (min-width: 768px) {
            bottom: 18%;
        }
        font-size: 4vw;
    }

    .menu {
        font-size: 3vw;
        line-height: 36px;
        @media screen and (min-width: 768px) {
            line-height: 54px
        }
    }

    .questionButton {
        height: 2.5rem;
        @media screen and (min-width: 768px) {
            height: 4rem;
        };
        /* font-family: 'montserrat-font'; */
    }

    .noThanks {
        font-size: 4vw;
        font-weight: lighter;
        text-decoration-line: underline;
        text-decoration-color: gray;
        line-height: 50px;
        /* outline-style: none */
    }


    .no-focusborder:focus {
        outline-style: none;
        /* box-shadow: none; */
        /* border-color: transparent; */
        /* background-color: black; */
        /* color: white; */
    } 

    .container {
        /* border-top-style: solid; */
        /* border-top-width: 7px; */
        /* border-color: red; */
        /* border-top-width: 7px; */
        /* border-radius: 50px; */
        border-radius: 30px 30px;
        border-collapse: separate;
        /* box-shadow: 0px 0px 5px 5px; */
        box-shadow: inset 0px 5px 3px -4px gray

    }
</style>  