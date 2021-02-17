<template>
    <div class="overflow-scroll">
        <!-- Top Bar -->
        <div class="w-full border border-b-1">
            <div class="pt-6 pb-4 pl-4 text-2xl font-bold lato-font">Messages</div>
        </div>

        <!-- List -->
        <div class="flex items-center py-4 border border-t-0 border-b-1" v-for="message in messages" :key="message.id">
            <img :src="message.by.icon" alt="" class="w-2/12 ml-4 rounded-full">
            <div class="flex flex-col justify-center w-full mx-4">
                <div class="text-lg font-bold lato-font">{{message.by.name}}</div>
                <div class="flex flex-wrap text-gray-600 lato-font">{{message.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            messages:[
                {
                    id:1,
                    by: {
                        id:1,
                        name: "Michelle",
                        icon: "https://i.pravatar.cc/300?img=40"
                    },
                    in: {
                        createdAt:"",
                        messages:[],
                        name:""
                    },
                    content: "Hey there! I'm Michelle, Nice to meet you! xx"
                },
                {
                    id:2,
                    by: {
                        id:1,
                        name: "Anna",
                        icon: "https://i.pravatar.cc/300?img=38"
                    },
                    in: {
                        createdAt:"",
                        messages:[],
                        name:""
                    },
                    content: "Hey there! I'm Anna, Nice to meet you! xx"
                },
                {
                    id:3,
                    by: {
                        id:1,
                        name: "Peter",
                        icon: "https://i.pravatar.cc/300?img=57"
                    },
                    in: {
                        createdAt:"",
                        messages:[],
                        name:""
                    },
                    content: "Hey there! I'm Peter, Nice to meet you! xx"
                },
                {
                    id:4,
                    by: {
                        id:1,
                        name: "Gary",
                        icon: "https://i.pravatar.cc/300?img=55"
                    },
                    in: {
                        createdAt:"",
                        messages:[],
                        name:""
                    },
                    content: "Hey there! I'm Michelle, Nice to meet you! xx"
                },
                {
                    id:5,
                    by: {
                        id:1,
                        name: "Rebecca",
                        icon: "https://i.pravatar.cc/200?img=9"
                    },
                    in: {
                        createdAt:"",
                        messages:[],
                        name:""
                    },
                    content: "Hey there! I'm Rebecca, Nice to meet you! xx"
                },
                {
                    id:6,
                    by: {
                        id:1,
                        name: "Jacob",
                        icon: "https://i.pravatar.cc/200?img=12"
                    },
                    in: {
                        createdAt:"",
                        messages:[],
                        name:""
                    },
                    content: "Hey there! I'm Jacob, Nice to meet you! xx"
                },
                {
                    id:7,
                    by: {
                        id:1,
                        name: "Jacob",
                        icon: "https://i.pravatar.cc/200?img=8"
                    },
                    in: {
                        createdAt:"",
                        messages:[],
                        name:""
                    },
                    content: "Hey there! I'm Jacob, Nice to meet you! xx"
                },
                {
                    id:8,
                    by: {
                        id:1,
                        name: "Taral",
                        icon: "https://i.pravatar.cc/200?img=33"
                    },
                    in: {
                        createdAt:"",
                        messages:[],
                        name:""
                    },
                    content: "Hey there! I'm Taral, Nice to meet you! xx"
                }
            ]
        }
    },
    computed: {},
    methods: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.lato-font{
    font-family: 'Lato', sans-serif;
}
</style>