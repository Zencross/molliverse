(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{383:function(e,t,n){var content=n(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(93).default)("314eeba8",content,!0,{sourceMap:!1})},425:function(e,t,n){"use strict";n(383)},426:function(e,t,n){var r=n(92)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]),r.push([e.i,'.lato-font{font-family:"Lato",sans-serif}.page-enter-active,.page-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:.3s}.page-enter,.page-leave-to{opacity:0}',""]),e.exports=r},490:function(e,t,n){"use strict";n.r(t);var r,o=n(162),c=n(12),l=(n(52),n(39),n(16),n(38),n(94),n(62)),m={components:{},data:function(){return{matches:[{id:1,target:{id:1,name:"Michelle",avatar:"https://i.pravatar.cc/300?img=40",messages:[{content:"Hey there! I'm Michelle, Nice to meet you! xx"}]}},{id:2,target:{id:2,name:"Anna",avatar:"https://i.pravatar.cc/300?img=38",messages:[{content:"Hey there! I'm Anna, Nice to meet you! xx"}]}},{id:3,target:{id:3,name:"Peter",avatar:"https://i.pravatar.cc/300?img=57",messages:[{content:"Hey there! I'm Peter, Nice to meet you! xx"}]}},{id:4,target:{id:4,name:"Gary",avatar:"https://i.pravatar.cc/300?img=55",messages:[{content:"Hey there! I'm Gary, Nice to meet you! xx"}]}},{id:5,target:{id:5,name:"Rebecca",avatar:"https://i.pravatar.cc/300?img=9",messages:[{content:"Hey there! I'm Rebecca, Nice to meet you! xx"}]}},{id:6,target:{id:6,name:"Jacob",avatar:"https://i.pravatar.cc/300?img=12",messages:[{content:"Hey there! I'm Jacob, Nice to meet you! xx"}]}},{id:7,target:{id:7,name:"Jacob",avatar:"https://i.pravatar.cc/300?img=8",messages:[{content:"Hey there! I'm Jacob, Nice to meet you! xx"}]}},{id:8,target:{id:8,name:"Taral",avatar:"https://i.pravatar.cc/300?img=33",messages:[{content:"Hey there! I'm Taral, Nice to meet you! xx"}]}}],channelLoader:null}},computed:{channels:function(){return this.$store.state.channels}},methods:{onClickItem:function(e){var t=this;console.log("clicked",e);var n=e.users.filter((function(e){return e.nickname!==t.$store.state.user.nickname})),r=n[0].media.filter((function(e){return 0===e.index}));this.$store.commit("setMessageChannelName",e.name),this.$store.commit("setMessageTargetName",n[0].nickname),this.$store.commit("setMessageTargetAvatar",r[0].url),this.$store.commit("setMessageTargetAvatarType",r[0].type),this.$router.push("/message")},onClickTitle:function(){this.$router.push("/user-profile")},getTargetAvatarType:function(e){var t=this,n=e.users.filter((function(e){return e.nickname!==t.$store.state.user.nickname}))[0].media.filter((function(e){return 0===e.index}));return console.log("avatar type",n[0].type),n[0].type},getTargetAvatar:function(e){var t=this,n=e.users.filter((function(e){return e.nickname!==t.$store.state.user.nickname}))[0].media.filter((function(e){return 0===e.index}));return console.log("avatar url",n[0]),n[0].url},getTargetNickname:function(e){var t=this;return e.users.filter((function(e){return e.nickname!==t.$store.state.user.nickname}))[0].nickname},getLatestMessage:function(e){var t=e.messages.length-1;return console.log("latestMsgIndex",t),-1==t?"Start a new conversation now!":e.messages[t].content},getChannels:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$apollo.query({query:Object(l.a)(r||(r=Object(o.a)(["\n            query($nickname: String!) {\n              getUser(nickname: $nickname) {\n                channels {\n                  createdAt\n                  messages {\n                    by {\n                      nickname\n                    }\n                    in {\n                      name\n                    }\n                    content\n                    timestamp\n                  }\n                  name\n                  users {\n                    nickname\n                    media {\n                      index\n                      type\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          "]))),variables:{nickname:e.$store.state.user.nickname}});case 3:n=t.sent,console.log("getUser results:",n.data.getUser),e.$store.commit("setChannels",n.data.getUser.channels),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("messages.vue mounted."),e.getChannels(),e.channelLoader=setInterval((function(){e.getChannels()}),1e3);case 3:case"end":return t.stop()}}),t)})))()},beforeRouteLeave:function(e,t,n){console.log("messages.vue is unmounted."),clearInterval(this.channelLoader),console.log("channelLoader stopped"),n()}},d=(n(425),n(60)),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-none"},[n("div",{staticClass:"w-full border border-t-0 border-b-1"},[n("div",{staticClass:"pt-6 pb-4 pl-4 text-2xl font-bold lato-font",on:{click:e.onClickTitle}},[e._v("\n      Messages\n    ")])]),e._v(" "),e._l(e.channels,(function(t){return e.channels?n("div",{key:t.name,staticClass:"flex items-center py-4 bg-white border border-t-0 border-b-1",attrs:{id:t.name},on:{click:function(n){return e.onClickItem(t)}}},["IMAGE"==e.getTargetAvatarType(t)?n("img",{staticClass:"object-cover w-16 h-16 ml-3 rounded-full",attrs:{src:e.getTargetAvatar(t),alt:"Avatar"}}):e._e(),e._v(" "),"VIDEO"==e.getTargetAvatarType(t)?n("video",{staticClass:"object-cover w-16 h-16 ml-3 rounded-full",attrs:{autoplay:"",loop:"",playsinline:"",src:e.getTargetAvatar(t),alt:"Avatar Video"}}):e._e(),e._v(" "),n("div",{staticClass:"flex flex-col justify-center w-9/12 mx-3"},[n("div",{staticClass:"text-lg font-bold lato-font"},[e._v("\n        "+e._s(e.getTargetNickname(t))+"\n      ")]),e._v(" "),n("div",{staticClass:"flex flex-wrap leading-tight text-gray-600 truncate lato-font"},[e._v("\n        "+e._s(e.getLatestMessage(t))+"\n      ")])])]):n("div",{staticClass:"p-4 text-center text-gray-600"},[e._v("\n    Oops! No match yet. Go find your bliss!\n  ")])}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);