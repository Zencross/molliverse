(window.webpackJsonp=window.webpackJsonp||[]).push([[28,6,7,10,20],{323:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("39591f00",content,!0,{sourceMap:!1})},324:function(t,e,o){"use strict";o.r(e);var n={props:{close:Boolean,back:Boolean,person:Boolean,skip:Boolean,messager:Boolean,rhsNothing:{type:Boolean,default:!1}},data:function(){return{}},methods:{onClickButton:function(){console.log("click btn"),this.$emit("click")},onClickSkipButton:function(){this.$emit("skip")},onClickMessager:function(){this.$emit("clickMessager")},onClickLogo:function(){this.$emit("clickLogo")}}},l=(o(327),o(60)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex items-center justify-between w-full py-4 bg-white shadow-md select-none disable-dbl-tap-zoom"},[t.close?o("img",{staticClass:"w-6 h-6 ml-4 disable-dbl-tap-zoom",attrs:{src:"/img/close-24px.svg",alt:"close"},on:{click:t.onClickButton}}):t._e(),t._v(" "),t.back?o("img",{staticClass:"w-6 h-6 ml-4 disable-dbl-tap-zoom",attrs:{src:"/img/arrow-back-24px.svg",alt:"close"},on:{click:t.onClickButton}}):t._e(),t._v(" "),t.person?o("img",{staticClass:"w-5 h-5 ml-4 disable-dbl-tap-zoom",attrs:{src:"/img/person.svg",alt:"person"},on:{click:t.onClickButton}}):t._e(),t._v(" "),o("img",{staticClass:"h-8 mt-1 disable-dbl-tap-zoom",attrs:{src:"/img/mollie-color.png",alt:""},on:{click:t.onClickLogo}}),t._v(" "),t.skip?o("div",{staticClass:"pt-1 pr-4 montserrat-font disable-dbl-tap-zoom",on:{click:t.onClickSkipButton}},[t._v("\n    SKIP\n  ")]):t._e(),t._v(" "),t.messager?o("img",{staticClass:"w-6 h-6 mr-4 disable-dbl-tap-zoom",attrs:{src:"/img/messager.svg",alt:"messager"},on:{click:t.onClickMessager}}):t._e(),t._v(" "),t.skip||t.messager?t._e():o("div",{staticClass:"w-6 h-6 mr-4 disable-dbl-tap-zoom"})])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,o){var content=o(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("73c31998",content,!0,{sourceMap:!1})},326:function(t,e,o){"use strict";o.r(e);var n={props:{buttonText:{type:String,default:"Button Text"},borderBlack:{type:Boolean},borderWhite:{type:Boolean},textBlack:{type:Boolean},textWhite:{type:Boolean},rightArrow:{type:Boolean},activeEffect:{type:Boolean},bgApple:{type:Boolean},bgFB:{type:Boolean},bgPhoneNum:{type:Boolean},borderNone:{type:Boolean},fontBold:{type:Boolean},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{onClickButton:function(){this.$emit("click")}}},l=(o(330),o(60)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center w-full"},[n("button",{staticClass:"flex items-center w-11/12 px-3 py-4 bg-transparent border rounded-lg focus:outline-none lato-font",class:[t.borderBlack?"border-black":"",t.borderWhite?"border-white":"",t.borderNone?"border-transparent":"",t.textBlack?"text-black":"",t.textWhite?"text-white":"",t.rightArrow?"justify-between":"justify-center",t.activeEffect?"focus:bg-gray-300 hover:bg-gray-300":"",t.bgApple?"bg-white":"",t.bgFB?"bg-FB":"",t.bgPhoneNum?"bg-brandPurple":"",t.fontBold?"font-semibold":"",t.disabled?"opacity-50":"",t.selected?"bg-selected text-white":""],attrs:{disabled:t.disabled},on:{click:t.onClickButton}},[t.rightArrow?n("div",{staticClass:"w-4 h-4"}):t._e(),t._v(" "),n("span",{staticClass:"text-base"},[t._v(t._s(t.buttonText))]),t._v(" "),t.rightArrow?n("img",{staticClass:"w-4 h-4",attrs:{src:o(329),alt:""}}):t._e()])])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,o){"use strict";o(323)},328:function(t,e,o){var n=o(92)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),n.push([t.i,'.montserrat-font{font-family:"Montserrat",sans-serif}.disable-dbl-tap-zoom{touch-action:manipulation}',""]),t.exports=n},329:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUuODggNC4xMkwxMy43NiAxMmwtNy44OCA3Ljg4TDggMjJsMTAtMTBMOCAyeiIvPjwvc3ZnPg=="},330:function(t,e,o){"use strict";o(325)},331:function(t,e,o){var n=o(92)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]),n.push([t.i,'.lato-font{font-family:"Lato",sans-serif}.karla-font{font-family:"Karla",sans-serif}',""]),t.exports=n},332:function(t,e,o){var content=o(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("a511d300",content,!0,{sourceMap:!1})},334:function(t,e,o){var content=o(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("6170e54e",content,!0,{sourceMap:!1})},335:function(t,e,o){"use strict";o(332)},336:function(t,e,o){var n=o(92)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),n.push([t.i,'.montserrat-font{font-family:"Montserrat",sans-serif}.button-gradient{background:linear-gradient(90deg,#632b75,50%,#fd267d)}',""]),t.exports=n},337:function(t,e,o){"use strict";o.r(e);var n={props:{buttonText:{type:String,default:"Continue"}},data:function(){return{}},computed:{},methods:{onClickButton:function(){this.$emit("click")}}},l=(o(335),o(60)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center w-full"},[o("button",{staticClass:"flex items-center justify-center w-4/5 p-3 text-white rounded-full button-gradient montserrat-font",on:{click:t.onClickButton}},[o("span",{staticClass:"text-lg font-bold"},[t._v(t._s(t.buttonText))])])])}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,o){"use strict";o(334)},342:function(t,e,o){var n=o(92)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),n.push([t.i,'.montserrat-font{font-family:"Montserrat",sans-serif}.label-color{color:#796b6b}',""]),t.exports=n},344:function(t,e,o){"use strict";o.r(e);var n={props:{text:{type:String,required:!0}}},l=(o(341),o(60)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-3xl montserrat-font text-lightgrey"},[t._v("\n    "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,o){var content=o(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("4d8c7ed6",content,!0,{sourceMap:!1})},419:function(t,e,o){"use strict";o(380)},420:function(t,e,o){var n=o(92)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),n.push([t.i,'.montserrat-font{font-family:"Montserrat",sans-serif}',""]),t.exports=n},487:function(t,e,o){"use strict";o.r(e);var n=o(344),l=o(324),r=o(326),c=o(337),d={components:{TopBar:l.default,AppText:n.default,AppButton:r.default,GradientButton:c.default},data:function(){return{btnManSelected:!1,btnWomanSelected:!1}},computed:{showGenderOnProfile:{get:function(){return this.$store.state.showGenderOnProfile},set:function(t){this.$store.commit("setShowGenderOnProfile",t)}}},methods:{onClickBackButton:function(){this.$router.push("/birthday")},onClickWoman:function(){this.$store.commit("setGender","Woman"),this.btnManSelected=!1,this.btnWomanSelected=!0},onClickMan:function(){this.$store.commit("setGender","Man"),this.btnWomanSelected=!1,this.btnManSelected=!0},onClickOtherGender:function(){},onClickButton:function(){this.$router.push("/sexual-orientation")}},mounted:function(){"Man"===this.$store.state.gender?(this.btnWomanSelected=!1,this.btnManSelected=!0):"Woman"===this.$store.state.gender?(this.btnManSelected=!1,this.btnWomanSelected=!0):(this.btnManSelected=!1,this.btnWomanSelected=!1)}},f=(o(419),o(60)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col items-center w-full"},[o("top-bar",{attrs:{back:""},on:{click:t.onClickBackButton}}),t._v(" "),o("div",{staticClass:"flex flex-col items-center w-full mt-10"},[o("div",{staticClass:"w-11/12 mb-6 text-3xl font-semibold text-dark"},[t._v("I am a:")]),t._v(" "),o("app-button",{staticClass:"mb-5",attrs:{buttonText:"Man",borderBlack:"",textBlack:"","font-bold":"",selected:t.btnManSelected},on:{click:t.onClickMan}}),t._v(" "),o("app-button",{staticClass:"mb-5",attrs:{buttonText:"Woman",borderBlack:"",textBlack:"","font-bold":"",selected:t.btnWomanSelected},on:{click:t.onClickWoman}}),t._v(" "),o("app-button",{staticClass:"mb-5",attrs:{buttonText:"More options",borderBlack:"",textBlack:"",rightArrow:"","font-bold":""},on:{click:t.onClickOtherGender}}),t._v(" "),o("label",{staticClass:"inline-flex items-center"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.showGenderOnProfile,expression:"showGenderOnProfile"}],staticClass:"w-4 h-4 form-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showGenderOnProfile)?t._i(t.showGenderOnProfile,null)>-1:t.showGenderOnProfile},on:{change:function(e){var o=t.showGenderOnProfile,n=e.target,l=!!n.checked;if(Array.isArray(o)){var r=t._i(o,null);n.checked?r<0&&(t.showGenderOnProfile=o.concat([null])):r>-1&&(t.showGenderOnProfile=o.slice(0,r).concat(o.slice(r+1)))}else t.showGenderOnProfile=l}}}),t._v(" "),o("span",{staticClass:"ml-2 text-sm montserrat-font text-lightgrey"},[t._v("Show my gender on my profile")])]),t._v(" "),o("app-button",{staticClass:"absolute bottom-0 mb-8",attrs:{buttonText:"Continue",textWhite:"",bgPhoneNum:""},on:{click:t.onClickButton}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopBar:o(324).default,AppButton:o(326).default})}}]);