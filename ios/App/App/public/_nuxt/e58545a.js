(window.webpackJsonp=window.webpackJsonp||[]).push([[13,14],{354:function(e,t,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(93).default)("7824de85",content,!0,{sourceMap:!1})},364:function(e,t,n){"use strict";n(354)},365:function(e,t,n){var r=n(92)(!1);r.push([e.i,"#extended-img{overflow:hidden;position:relative;width:100%;height:100%}#extended-img img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#extended-img img.contain.landscape{width:100%}#extended-img img.contain:not(.landscape),#extended-img img.cover.landscape{height:100%}#extended-img img.cover:not(.landscape){width:100%}#extended-img img:not(.contain):not(.cover){width:100%;height:100%}",""]),e.exports=r},406:function(e,t,n){"use strict";n.r(t);var r={props:["src","alt","size"],data:function(){return{isLandscape:!1}},computed:{wrapperRatio:function(){var e=this.$refs.wrapper;return e.clientHeight/e.clientWidth},imageRatio:function(){var image=this.$refs.image;return image.naturalHeight/image.naturalWidth}},mounted:function(){var e=this;this.$refs.image.onload=function(){e.isLandscape=e.imageRatio<e.wrapperRatio,e.$emit("load")}}},o=(n(364),n(60)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrapper",attrs:{id:"extended-img"}},[n("img",{ref:"image",class:{landscape:e.isLandscape,cover:e.size&&"cover"===e.size,contain:e.size&&"contain"===e.size},attrs:{src:e.src,alt:e.alt}})])}),[],!1,null,null,null);t.default=component.exports},506:function(e,t,n){"use strict";n.r(t);var r={components:{ProfileWrapper:n(406).default},data:function(){return{}}},o=n(60),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"absolute",attrs:{id:"cards"}},[t("script")])}],!1,null,null,null);t.default=component.exports}}]);