(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-person-bonusRecord"],{"265c":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{buttonCant:!1,CustomBar:this.CustomBar,TabCur:0,tabNav:["LEVEL1","LEVEL2"],recordLists:[],pageNum:1,totalPageNum:10,totalRecordNum:300,pageArea:"1-10",nameLists:["Join Parity","Join Sapre","Join Bcone","Join Emerd"],editLists:["","","Recharge","Withdrawal","Commission","Recharge","Withdrawal","Grants","Recharge","Gift"]}},onLoad:function(){this.initSuggestion()},methods:{scrollToPage:function(e){var a=e.currentTarget.dataset.type,i=this.pageNum;this.pageNum="up"==a?++i>this.totalPageNum?this.totalPageNum:i:--i<1?1:i,this.pageNum>this.totalPageNum?this.pageNum=this.totalPageNum:(this.initSuggestion(this.pageNum),t("log","当前我的页面:",this.pageNum," at pages/person/bonusRecord.vue:91"))},tabSelect:function(t){var e=this;this.buttonCant||(this.buttonCant=!0,setTimeout((function(){e.buttonCant=!1}),700),this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.sType=Math.abs(this.TabCur-1),this.initSuggestion())},initSuggestion:function(t){var e=this;t||(t=1);var a="/user/getCommissionListLevelOne?pageNum=";0===this.sType&&(a="/user/getCommissionListLevelTwo?pageNum=");var i=this;this.$Request.postT(a+t+"&pageSize=8").then((function(t){var a=t.obj;if(1===t.res){if(i.totalRecordNum=a.totalRecord,i.totalPageNum=a.totalPage,i.pageNum=a.pageNum,i.pageArea=1+8*(i.pageNum-1)+"-"+(8+8*(i.pageNum-1)>e.totalRecordNum?e.totalRecordNum:8+8*(i.pageNum-1)),i.recordLists=[],!a.results)return;i.recordLists=a.results}else 401===t.res?uni.$emit("userisLogin",!1):uni.showModal({title:"",content:"加载异常",showCancel:!1,cancelText:"",confirmText:"CLOSE"})}))},getRecord:function(e){var a=this;e||(e=1);var i=this;this.$Request.postT("/cash/findMoneyTranceList?pageNum="+e+"&pageSize=10").then((function(e){t("log","res:",JSON.stringify(e)," at pages/person/bonusRecord.vue:153");var s=e.obj;if(1===e.res){if(i.totalRecordNum=s.totalRecord,i.totalPageNum=s.totalPage,i.pageNum=s.pageNum,i.pageArea=1+10*(i.pageNum-1)+"-"+(10+10*(i.pageNum-1)>a.totalRecordNum?a.totalRecordNum:10+10*(i.pageNum-1)),i.recordLists=[],!s.results)return;i.recordLists=s.results}else 401===e.res?uni.$emit("userisLogin",!1):uni.showModal({title:"",content:"加载异常",showCancel:!1,cancelText:"",confirmText:"CLOSE"})}))}}};e.default=a}).call(this,a("0de9")["log"])},5480:function(t,e,a){"use strict";a.r(e);var i=a("265c"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"657e":function(t,e,a){var i=a("fa13");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("2266677c",i,!0,{sourceMap:!1,shadowMode:!1})},"682c":function(t,e,a){"use strict";a.r(e);var i=a("a6a4"),s=a("5480");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("a0b6");var o,u=a("f0c5"),r=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"dceb48ea",null,!1,i["a"],o);e["default"]=r.exports},a0b6:function(t,e,a){"use strict";var i=a("657e"),s=a.n(i);s.a},a6a4:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-blue",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("Bonus Record")])],2),a("v-uni-scroll-view",{staticClass:"bg-blue nav text-center",style:[{top:t.CustomBar+"px"}],attrs:{"scroll-x":!0}},t._l(t.tabNav,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-white cur":"",attrs:{"data-id":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(t.tabNav[i]))])})),1),a("v-uni-view",{staticClass:"my-record-view bg-white shadow"},[a("v-uni-view",{},[0==t.recordLists.length?a("v-uni-view",{staticClass:"bg-white text-center padding-sm text-gray"},[a("v-uni-text",[t._v("No data available")])],1):a("v-uni-view",t._l(t.recordLists,(function(e,i){return a("v-uni-view",{key:i,staticClass:"flex padding-xl solid-top"},[a("v-uni-button",{staticClass:"cu-btn cuIcon sm round my-space-x",class:"bg-"+[e.changeCommission<0?"red":"green"],staticStyle:{top:"15upx"}},[a("v-uni-text",[t._v("₹")])],1),a("v-uni-view",{staticClass:"block"},[a("v-uni-view",{},[t._v(t._s(e.editType<3?t.nameLists[e.gameType-1]:t.editLists[e.editType-1]))]),a("v-uni-view",{staticClass:"text-gray",staticStyle:{"margin-top":"10upx"}},[t._v("period:"+t._s(e.period))]),a("v-uni-view",{},[t._v(t._s(e.createTime))])],1),a("v-uni-view",{class:"text-"+[e.changeCommission<0?"red":"green"],staticStyle:{position:"absolute",right:"50upx",top:"40upx"}},[t._v("+"+t._s(e.changeCommission))])],1)})),1)],1),a("v-uni-view",{staticClass:"padding bg-white my-textsize solid-top",staticStyle:{height:"100upx"}},[a("v-uni-view",{staticClass:"my-lottery-info"},[a("v-uni-text",{staticClass:"my-space-x"},[t._v(t._s(t.pageArea)+" of "+t._s(t.totalRecordNum))]),a("v-uni-button",{staticClass:"cu-btn cuIcon  sm round my-space-x",attrs:{"data-type":"down"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollToPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"})],1),a("v-uni-button",{staticClass:"cu-btn cuIcon sm round",attrs:{"data-type":"up"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollToPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-right"})],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-tabbar-height"})],1)},n=[]},fa13:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".my-textsize[data-v-dceb48ea]{font-size:%?20?%}.padding-xl[data-v-dceb48ea]{padding:%?20?%}.my-text[data-v-dceb48ea]{position:absolute; /*相对父节点 绝对位置*/right:%?50?%;top:%?180?%}.my-lottery-info[data-v-dceb48ea]{position:absolute;right:%?30?%}.my-space-x[data-v-dceb48ea]{margin-right:%?20?%}",""]),t.exports=e}}]);