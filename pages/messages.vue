<template>
    <div class="overflow-scroll" ontouchmove>
        <!-- Top Bar -->
        <div class="w-full border border-b-1">
            <div class="pt-6 pb-4 pl-4 text-2xl font-bold lato-font">Messages</div>
        </div>

        <!-- List -->
        <div class="flex items-center py-4 border border-t-0 border-b-1 list-action-listener" 
            v-for="match in matches" 
            :key="match.id"
            @click="onClickItem(match)"
        >
            <img :src="match.target.avatar" alt="" class="w-2/12 ml-4 rounded-full">
            <div class="flex flex-col justify-center w-full mx-4">
                <div class="text-lg font-bold lato-font">{{match.target.name}}</div>
                <div class="flex flex-wrap leading-tight text-gray-600 lato-font">{{match.target.messages[0].content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{},
    data() {
        return {
            matches:[
                {
                    id:1,
                    target: {
                        id: 1,
                        name: "Michelle",
                        avatar: "https://i.pravatar.cc/300?img=40",
                        messages: [
                            {
                                content: "Hey there! I'm Michelle, Nice to meet you! xx"
                            }
                        ]
                    }
                },
                {
                    id:2,
                    target: {
                        id: 1,
                        name: "Anna",
                        avatar: "https://i.pravatar.cc/300?img=38",
                        messages: [
                            {
                                content: "Hey there! I'm Anna, Nice to meet you! xx"
                            }
                        ]
                    }
                },
                {
                    id:3,
                    target: {
                        id: 1,
                        name: "Peter",
                        avatar: "https://i.pravatar.cc/300?img=57",
                        messages: [
                            {
                                content: "Hey there! I'm Peter, Nice to meet you! xx"
                            }
                        ]
                    }
                },
                {
                    id:4,
                    target: {
                        id: 1,
                        name: "Gary",
                        avatar: "https://i.pravatar.cc/300?img=55",
                        messages: [
                            {
                                content: "Hey there! I'm Gary, Nice to meet you! xx"
                            }
                        ]
                    }
                },
                {
                    id:5,
                    target: {
                        id: 1,
                        name: "Rebecca",
                        avatar: "https://i.pravatar.cc/300?img=9",
                        messages: [
                            {
                                content: "Hey there! I'm Rebecca, Nice to meet you! xx"
                            }
                        ]
                    }
                },
                {
                    id:6,
                    target: {
                        id: 1,
                        name: "Jacob",
                        avatar: "https://i.pravatar.cc/300?img=12",
                        messages: [
                            {
                                content: "Hey there! I'm Jacob, Nice to meet you! xx"
                            }
                        ]
                    }
                },
                {
                    id:7,
                    target: {
                        id: 1,
                        name: "Jacob",
                        avatar: "https://i.pravatar.cc/300?img=8",
                        messages: [
                            {
                                content: "Hey there! I'm Jacob, Nice to meet you! xx"
                            }
                        ]
                    }
                },
                {
                    id:8,
                    target: {
                        id: 1,
                        name: "Taral",
                        avatar: "https://i.pravatar.cc/300?img=33",
                        messages: [
                            {
                                content: "Hey there! I'm Taral, Nice to meet you! xx"
                            }
                        ]
                    }
                }
            ]
        }
    },
    computed: {},
    methods: {
        onClickItem(match){
            console.log('item is clicked', match);
            this.$router.push('/message')
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.lato-font{
    font-family: 'Lato', sans-serif;
}

.list-action-listener:hover {
    @apply bg-gray-300
}
</style>