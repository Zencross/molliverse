(window.webpackJsonp=window.webpackJsonp||[]).push([[24,10,20],{323:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("39591f00",content,!0,{sourceMap:!1})},324:function(t,e,o){"use strict";o.r(e);var l={props:{close:Boolean,back:Boolean,person:Boolean,skip:Boolean,messager:Boolean,rhsNothing:{type:Boolean,default:!1}},data:function(){return{}},methods:{onClickButton:function(){console.log("click btn"),this.$emit("click")},onClickSkipButton:function(){this.$emit("skip")},onClickMessager:function(){this.$emit("clickMessager")},onClickLogo:function(){this.$emit("clickLogo")}}},r=(o(327),o(60)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex items-center justify-between w-full py-4 bg-white shadow-md select-none disable-dbl-tap-zoom"},[t.close?o("img",{staticClass:"w-6 h-6 ml-4 disable-dbl-tap-zoom",attrs:{src:"/img/close-24px.svg",alt:"close"},on:{click:t.onClickButton}}):t._e(),t._v(" "),t.back?o("img",{staticClass:"w-6 h-6 ml-4 disable-dbl-tap-zoom",attrs:{src:"/img/arrow-back-24px.svg",alt:"close"},on:{click:t.onClickButton}}):t._e(),t._v(" "),t.person?o("img",{staticClass:"w-5 h-5 ml-4 disable-dbl-tap-zoom",attrs:{src:"/img/person.svg",alt:"person"},on:{click:t.onClickButton}}):t._e(),t._v(" "),o("img",{staticClass:"h-8 mt-1 disable-dbl-tap-zoom",attrs:{src:"/img/mollie-color.png",alt:""},on:{click:t.onClickLogo}}),t._v(" "),t.skip?o("div",{staticClass:"pt-1 pr-4 montserrat-font disable-dbl-tap-zoom",on:{click:t.onClickSkipButton}},[t._v("\n    SKIP\n  ")]):t._e(),t._v(" "),t.messager?o("img",{staticClass:"w-6 h-6 mr-4 disable-dbl-tap-zoom",attrs:{src:"/img/messager.svg",alt:"messager"},on:{click:t.onClickMessager}}):t._e(),t._v(" "),t.skip||t.messager?t._e():o("div",{staticClass:"w-6 h-6 mr-4 disable-dbl-tap-zoom"})])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,o){"use strict";o(323)},328:function(t,e,o){var l=o(92)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),l.push([t.i,'.montserrat-font{font-family:"Montserrat",sans-serif}.disable-dbl-tap-zoom{touch-action:manipulation}',""]),t.exports=l},332:function(t,e,o){var content=o(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("a511d300",content,!0,{sourceMap:!1})},335:function(t,e,o){"use strict";o(332)},336:function(t,e,o){var l=o(92)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),l.push([t.i,'.montserrat-font{font-family:"Montserrat",sans-serif}.button-gradient{background:linear-gradient(90deg,#632b75,50%,#fd267d)}',""]),t.exports=l},337:function(t,e,o){"use strict";o.r(e);var l={props:{buttonText:{type:String,default:"Continue"}},data:function(){return{}},computed:{},methods:{onClickButton:function(){this.$emit("click")}}},r=(o(335),o(60)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center w-full"},[o("button",{staticClass:"flex items-center justify-center w-4/5 p-3 text-white rounded-full button-gradient montserrat-font",on:{click:t.onClickButton}},[o("span",{staticClass:"text-lg font-bold"},[t._v(t._s(t.buttonText))])])])}),[],!1,null,null,null);e.default=component.exports},359:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTIyLjUwMDIgMTUuNzg5NUgxNi41NzkyVjIxLjcxMDZDMTYuNTc5MiAyMi4zNjE5IDE2LjA0NjMgMjIuODk0OCAxNS4zOTQ5IDIyLjg5NDhDMTQuNzQzNiAyMi44OTQ4IDE0LjIxMDcgMjIuMzYxOSAxNC4yMTA3IDIxLjcxMDZWMTUuNzg5NUg4LjI4OTY4QzcuNjM4MzYgMTUuNzg5NSA3LjEwNTQ3IDE1LjI1NjYgNy4xMDU0NyAxNC42MDUzQzcuMTA1NDcgMTMuOTU0IDcuNjM4MzYgMTMuNDIxMSA4LjI4OTY4IDEzLjQyMTFIMTQuMjEwN1Y3LjUwMDA1QzE0LjIxMDcgNi44NDg3MyAxNC43NDM2IDYuMzE1ODQgMTUuMzk0OSA2LjMxNTg0QzE2LjA0NjMgNi4zMTU4NCAxNi41NzkyIDYuODQ4NzMgMTYuNTc5MiA3LjUwMDA1VjEzLjQyMTFIMjIuNTAwMkMyMy4xNTE1IDEzLjQyMTEgMjMuNjg0NCAxMy45NTQgMjMuNjg0NCAxNC42MDUzQzIzLjY4NDQgMTUuMjU2NiAyMy4xNTE1IDE1Ljc4OTUgMjIuNTAwMiAxNS43ODk1WiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjE1IiB5MT0iLTE1IiB4Mj0iLTE1IiB5Mj0iMTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzYzMkI3NSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRTM0NzYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"},378:function(t,e,o){var content=o(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("708008fa",content,!0,{sourceMap:!1})},415:function(t,e,o){"use strict";o(378)},416:function(t,e,o){var l=o(92)(!1);l.push([t.i,".gallery-height{height:58%}.cell-height{height:30%}.cell-width{width:30%}.cell-aspect-ratio{overflow:hidden;height:0;padding-top:35.5%}.flip-list-move{transition:transform .5s}video::-webkit-media-controls{display:none}video{width:100%;height:auto}",""]),t.exports=l},483:function(t,e,o){"use strict";o.r(e);var l=o(12),r=(o(52),o(337)),n=o(324),c=o(377),d=o.n(c),f={components:{TopBar:n.default,GradientButton:r.default,draggable:d.a},data:function(){return{myArray:[{name:"A",id:0},{name:"B",id:1},{name:"C",id:2},{name:"D",id:3},{name:"E",id:4},{name:"F",id:5},{name:"G",id:6},{name:"H",id:7},{name:"I",id:8}]}},computed:{userProfileMedia:{get:function(){return this.$store.state.userProfileMedia},set:function(t){console.log("setter value",t),this.$store.commit("setUserProfileMedia",t)}}},mounted:function(){},methods:{log:function(t){console.log("drag detected",t),this.$store.commit("updateUserProfileMediaIndex"),console.log("user Media array",this.userProfileMedia)},onClickBackButton:function(){this.$router.push("/passions")},onClickBox:function(t){console.log("clicked box ",t),this.$store.commit("setCurrentMediaIndex",t),this.$router.push("/ar-filter")},getMediaSrc:function(t){return this.$store.state.userProfileMedia[t].url},isMediaPhoto:function(t){return!(!this.$store.state.userProfileMedia[t]||"IMAGE"!==this.$store.state.userProfileMedia[t].type)&&(console.log("media at index ".concat(t," is"),this.$store.state.userProfileMedia[t].type),!0)},isMediaVideo:function(t){return!(!this.$store.state.userProfileMedia[t]||"VIDEO"!==this.$store.state.userProfileMedia[t].type)&&(console.log("media at index ".concat(t," is"),this.$store.state.userProfileMedia[t].type),!0)},onClickFinsih:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("createUserProfile");case 2:return console.log("--------------------createUserProfile finished--------------------"),e.next=5,t.$store.dispatch("addUser");case 5:console.log("--------------------addUser finished--------------------"),t.$router.push("/swipe");case 7:case"end":return e.stop()}}),e)})))()}}},m=(o(415),o(60)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full h-screen select-none"},[t._m(0),t._v(" "),l("div",{staticClass:"bg-gray-100"},[t._m(1),t._v(" "),l("draggable",{staticClass:"w-full px-1 my-2 pb-4",attrs:{group:"people"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1},change:t.log},model:{value:t.userProfileMedia,callback:function(e){t.userProfileMedia=e},expression:"userProfileMedia"}},[l("transition-group",{staticClass:"z-10 flex flex-wrap justify-around w-full h-full",attrs:{tag:"div",name:"flip-list"}},t._l(t.userProfileMedia,(function(e){return l("div",{key:e.index,staticClass:"relative z-10 my-1 bg-darkgrey rounded-xl cell-width cell-aspect-ratio",on:{click:function(o){t.onClickBox(t.userProfileMedia.indexOf(e))}}},[e.url?t._e():l("img",{staticClass:"absolute bottom-0 right-0 z-30",attrs:{src:o(359),alt:""}}),t._v(" "),t.isMediaPhoto(t.userProfileMedia.indexOf(e))?l("img",{staticClass:"absolute top-0 left-0 z-20 object-cover w-full h-full rounded-xl",attrs:{src:t.getMediaSrc(t.userProfileMedia.indexOf(e)),alt:""}}):t._e(),t._v(" "),t.isMediaVideo(t.userProfileMedia.indexOf(e))?l("video",{staticClass:"absolute top-0 left-0 z-20 rounded-xl",attrs:{autoplay:"",playsinline:"",loop:"",src:t.getMediaSrc(t.userProfileMedia.indexOf(e))}}):t._e()])})),0)],1),t._v(" "),l("div",{staticClass:"pt-8 pl-4 text-lg pb-4 font-semibold lato-font bg-gray-100"},[t._v("\n            About me\n        ")]),t._v(" "),l("textarea",{staticClass:"pr-2 pt-4 pl-4 border",attrs:{placeholder:"My relationship status? Netflix, Oreos and sweatpants",rows:"6",cols:"50"}}),t._v(" "),l("div",{staticClass:"pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100"},[t._v("\n            Passions\n        ")]),t._v(" "),l("textarea",{staticClass:"pr-2 pt-4 pl-4 border",attrs:{placeholder:"Boxing, Foodie, Travel",rows:"2",cols:"50"}}),t._v(" "),l("div",{staticClass:"pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100"},[t._v("\n            Job Title\n        ")]),t._v(" "),l("textarea",{staticClass:"pr-2 pt-4 pl-4 border",attrs:{placeholder:"Part time Techie, full time hustler",rows:"2",cols:"50"}}),t._v(" "),l("div",{staticClass:"pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100"},[t._v("\n            Education\n        ")]),t._v(" "),l("textarea",{staticClass:"pr-2 pt-4 pl-4 border",attrs:{placeholder:"HKU",rows:"2",cols:"50"}}),t._v(" "),l("div",{staticClass:"pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100"},[t._v("\n            Company\n        ")]),t._v(" "),l("textarea",{staticClass:"pr-2 pt-4 pl-4 border",attrs:{placeholder:"Self-Employed",rows:"2",cols:"50"}}),t._v(" "),l("div",{staticClass:"pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100"},[t._v("\n            Living in \n        ")]),t._v(" "),l("textarea",{staticClass:"pr-2 pt-4 pl-4 border",attrs:{placeholder:"Hong Kong",rows:"2",cols:"50"}}),t._v(" "),l("div",{staticClass:"pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100"},[t._v("\n            Gender\n        ")]),t._v(" "),l("textarea",{staticClass:"pr-2 pt-4 pl-4 border",attrs:{placeholder:"Male",rows:"2",cols:"50"}}),t._v(" "),l("div",{staticClass:"pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100"},[t._v("\n            Sexual Orientation\n        ")]),t._v(" "),l("textarea",{staticClass:"pr-2 pt-4 pl-4 border",attrs:{placeholder:"Straight",rows:"2",cols:"50"}}),t._v(" "),l("div",{staticClass:"pt-8 pl-4 pb-4 text-lg font-semibold lato-font bg-gray-100"})],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full border border-t-0 border-b-1 flex pt-6 pb-4 pl-4"},[o("div",{staticClass:" text-xl font-bold lato-font flex-1"},[t._v("\n            Edit Info\n        ")]),t._v(" "),o("div",{staticClass:"lato-font font-bold text-xl text-pink-600 pr-4"},[t._v(" Done ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col items-center w-full"},[o("div",{staticClass:"w-11/12 mt-2 ml-2 text-3xl font-semibold text-dark"},[t._v("\n            Record a video\n        ")]),t._v(" "),o("div",{staticClass:"w-11/12 ml-2 text-xs montserrat-font text-lightgrey disable-dbl-tap-zoom"},[t._v("\n            Drag to re-order your videos\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);