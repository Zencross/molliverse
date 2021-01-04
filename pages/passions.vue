<template>
    <div class="flex flex-col items-center">
        <top-bar back skip @click="onClickBackButton" @skip="onClickSkipButton" />
        <div class="w-4/5 mt-8 mb-3 text-3xl text-grayish-red montserrat-font">Passions</div>
        <div class="w-4/5 text-sm montserrat-font text-lightgrey">Let everyone know what you’re passionate about, by adding it to your profile</div>
        <div class="w-4/5 mt-3 mb-6 overflow-scroll tag-container disable-dbl-tap-zoom">
            <button 
                v-for="tag in tags"
                :key="tag.id"
                class="px-2 my-1 mr-4 border border-gray-400 rounded-full montserrat-font text-lightgrey" 
                :class="[existInPassionsArr(tag)?'bg-red-100':'']"
                @click="onClickTag(tag)"
                >
                <div class="flex justify-between w-full">
                    <div>{{tag.name}}</div>
                    <!-- <img v-if="existInPassionsArr(tag)" src="../static/img/tick-purple-24px.svg" alt=""> -->
                </div>
                </button>
        </div>
        <button 
            class="flex items-center justify-center w-4/5 p-3 text-white rounded-full button-gradient montserrat-font"
        >
            <span class="text-lg font-bold">CONTINUE {{numberOfPassionChosen}}/5</span>
        </button>
    </div>
</template>

<script>
import AppText from '~/components/AppText.vue'
import TopBar from '~/components/TopBar.vue'
export default {
  components: { AppText, TopBar },
    data() {
        return {
            tags:[
                {id:0,name:'Fishing'},
                {id:1,name:'Spirtuality'},
                {id:2,name:'Shopping'},
                {id:3,name:'Running'},
                {id:4,name:'Dancing'},
                {id:5,name:'Working out'},
                {id:6,name:'Environmentalism'},
                {id:7,name:'Politics'},
                {id:8,name:'Foodie'},
                {id:9,name:'Vlogging'},
                {id:10,name:'Gardening'},
                {id:11,name:'Gamer'},
                {id:12,name:'Music'},
                {id:13,name:'Coffee'},
                {id:14,name:'Photography'},
                {id:15,name:'Grab a drink'},
                {id:16,name:'hiking'},
                {id:17,name:'yoga'},
            ],
            
        }
    },
    computed:{
        numberOfPassionChosen(){
            return this.$store.state.passions.length
        }
    },
    methods:{
        onClickBackButton(){
            this.$router.push('/education')
        },
        onClickSkipButton(){},
        onClickTag(tag){
            console.log('Clicked',tag.name);
            // append item in array, remove item if exist
            if(this.$store.state.passions.some(p => p.name === tag.name)){
                this.$store.commit('removePassion',tag.name)
            } else if(this.$store.state.passions.length < 5){
                this.$store.commit('addPassion', tag)
            }
        },
        existInPassionsArr(tag){
            if(this.$store.state.passions.some(p => p.name === tag.name))
                return true
            else return false
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.montserrat-font{
    font-family: 'Montserrat', sans-serif;
}

.tag-container {
    max-height: 250px;
}

.button-gradient {
    background: linear-gradient(.25turn, #632B75, 50%, #FD267D);
}

.disable-dbl-tap-zoom {
    touch-action: manipulation;
}
</style>