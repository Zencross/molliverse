(window.webpackJsonp=window.webpackJsonp||[]).push([[26,10,11,20],{323:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("39591f00",content,!0,{sourceMap:!1})},324:function(t,e,o){"use strict";o.r(e);var l={props:{close:Boolean,back:Boolean,person:Boolean,skip:Boolean,messager:Boolean,rhsNothing:{type:Boolean,default:!1}},data:function(){return{}},methods:{onClickButton:function(){console.log("click btn"),this.$emit("click")},onClickSkipButton:function(){this.$emit("skip")},onClickMessager:function(){this.$emit("clickMessager")},onClickLogo:function(){this.$emit("clickLogo")}}},n=(o(327),o(60)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex items-center justify-between w-full py-4 bg-white shadow-md select-none disable-dbl-tap-zoom"},[t.close?o("img",{staticClass:"w-6 h-6 ml-4 disable-dbl-tap-zoom",attrs:{src:"/img/close-24px.svg",alt:"close"},on:{click:t.onClickButton}}):t._e(),t._v(" "),t.back?o("img",{staticClass:"w-6 h-6 ml-4 disable-dbl-tap-zoom",attrs:{src:"/img/arrow-back-24px.svg",alt:"close"},on:{click:t.onClickButton}}):t._e(),t._v(" "),t.person?o("img",{staticClass:"w-5 h-5 ml-4 disable-dbl-tap-zoom",attrs:{src:"/img/person.svg",alt:"person"},on:{click:t.onClickButton}}):t._e(),t._v(" "),o("img",{staticClass:"h-8 mt-1 disable-dbl-tap-zoom",attrs:{src:"/img/mollie-color.png",alt:""},on:{click:t.onClickLogo}}),t._v(" "),t.skip?o("div",{staticClass:"pt-1 pr-4 montserrat-font disable-dbl-tap-zoom",on:{click:t.onClickSkipButton}},[t._v("\n    SKIP\n  ")]):t._e(),t._v(" "),t.messager?o("img",{staticClass:"w-6 h-6 mr-4 disable-dbl-tap-zoom",attrs:{src:"/img/messager.svg",alt:"messager"},on:{click:t.onClickMessager}}):t._e(),t._v(" "),t.skip||t.messager?t._e():o("div",{staticClass:"w-6 h-6 mr-4 disable-dbl-tap-zoom"})])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,o){"use strict";o(323)},328:function(t,e,o){var l=o(92)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),l.push([t.i,'.montserrat-font{font-family:"Montserrat",sans-serif}.disable-dbl-tap-zoom{touch-action:manipulation}',""]),t.exports=l},332:function(t,e,o){var content=o(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("a511d300",content,!0,{sourceMap:!1})},333:function(t,e,o){var content=o(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("6ca23880",content,!0,{sourceMap:!1})},335:function(t,e,o){"use strict";o(332)},336:function(t,e,o){var l=o(92)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),l.push([t.i,'.montserrat-font{font-family:"Montserrat",sans-serif}.button-gradient{background:linear-gradient(90deg,#632b75,50%,#fd267d)}',""]),t.exports=l},337:function(t,e,o){"use strict";o.r(e);var l={props:{buttonText:{type:String,default:"Continue"}},data:function(){return{}},computed:{},methods:{onClickButton:function(){this.$emit("click")}}},n=(o(335),o(60)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center w-full"},[o("button",{staticClass:"flex items-center justify-center w-4/5 p-3 text-white rounded-full button-gradient montserrat-font",on:{click:t.onClickButton}},[o("span",{staticClass:"text-lg font-bold"},[t._v(t._s(t.buttonText))])])])}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,o){"use strict";o.r(e);var l={props:{value:{type:String},labelText:{type:String,default:"Label Text"},placeHolder:{type:String,default:"PlaceHolder"},hint:{type:String,default:"hint"},inputType:{type:String,default:"text"},textArea:{type:Boolean,default:!1},validateError:{type:Boolean,default:!1}},methods:{}},n=(o(339),o(60)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full bg-transparent lato-font"},[o("div",{staticClass:"flex flex-col items-center w-full"},[o("label",{staticClass:"w-11/12 mb-4 text-3xl font-semibold text-dark",attrs:{for:"input"}},[t._v(t._s(t.labelText))]),t._v(" "),o("input",{staticClass:"w-11/12 py-3 pl-4 text-lg border border-gray-300 rounded-md bg-lightgrey input-color focus:outline-none",class:[t.validateError?"border-red-500 text-red-500":""],attrs:{id:"input",type:t.inputType,placeholder:t.placeHolder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),o("div",{staticClass:"w-11/12 mt-3 text-sm text-lightgrey"},[t._v(t._s(t.hint))])])])}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,o){"use strict";o(333)},340:function(t,e,o){var l=o(92)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]),l.push([t.i,'.lato-font{font-family:"Lato",sans-serif}.montserrat-font{font-family:"Montserrat",sans-serif}::-moz-placeholder{color:red;opacity:1}:-ms-input-placeholder{opacity:1}::placeholder{color:red;opacity:1}:-ms-input-placeholder{color:red}::-ms-input-placeholder{color:red}.hint-color,.label-color{color:#796b6b}',""]),t.exports=l},485:function(t,e,o){"use strict";o.r(e);var l=o(324),n=o(338),r=o(337),c={components:{TopBar:l.default,InputField:n.default,GradientButton:r.default},data:function(){return{}},computed:{email:{get:function(){return this.$store.state.email},set:function(t){this.$store.commit("setEmail",t)}}},methods:{onClickBackButton:function(){this.$router.push("/")},onClickButton:function(){this.$router.push("/name")},onInputEmail:function(){console.log(this.email),this.$store.commit("setEmail",this.email)}}},d=o(60),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("top-bar",{attrs:{back:""},on:{click:t.onClickBackButton}}),t._v(" "),o("input-field",{staticClass:"mt-8",attrs:{labelText:"My email is",placeHolder:"email@address.com",hint:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),o("gradient-button",{staticClass:"mt-24",on:{click:t.onClickButton}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopBar:o(324).default,InputField:o(338).default,GradientButton:o(337).default})}}]);