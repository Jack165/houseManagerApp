(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tenant/addTenant"],{"11a2":function(n,t,e){"use strict";e.r(t);var i=e("2f8c"),c=e("e39c");for(var o in c)"default"!==o&&function(n){e.d(t,n,(function(){return c[n]}))}(o);e("df25");var a,u=e("f0c5"),s=Object(u["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=s.exports},2013:function(n,t,e){"use strict";(function(n){e("1046");i(e("66fd"));var t=i(e("11a2"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"2f8c":function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var c=function(){var n=this,t=n.$createElement;n._self._c},o=[]},"59ee":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){e.e("components/sectionTitle").then(function(){return resolve(e("efe6"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/inputItem").then(function(){return resolve(e("c680"))}.bind(null,e)).catch(e.oe)},o=function(){e.e("components/selectItem").then(function(){return resolve(e("f0cc"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("components/submitBtn").then(function(){return resolve(e("4dd5"))}.bind(null,e)).catch(e.oe)},u={data:function(){return{sexData:["男","女"],sexIndex:0,show:!0,list:[{value:"1",label:"江"},{value:"2",label:"湖"}]}},components:{sectionTitle:i,inputItem:c,selectItem:o,submitBtn:a},methods:{showPage:function(t){return n.navigateTo({url:t}),!1},getVal:function(){console.log(this.$refs.name.inputVal)},sexChange:function(n){console.log(this.sexIndex),this.sexIndex=n,console.log(this.sexIndex)},cancelFun:function(){console.log("取消了")},confirm:function(n){console.log(n)},confirmFun:function(){var t=this;n.getStorage({key:"userId",success:function(n){n.data}});var e=this.$refs.name.inputVal,i=this.$refs.phone.inputVal,c=this.$refs.idcard.inputVal,o=this.$refs.sex.inputVal,a=this.$refs.waterPrice.inputVal,u=this.$refs.electricityPrice.inputVal,s=this.$refs.broadbandPrice.inputVal,r=this.$refs.waterInitPrice.inputVal,l=(u=this.$refs.broadbandPrice.inputVal,this.Common.baseUrl+"/contract//add");n.request({url:l,data:{renter:{name:e,cellPhone:i,idCard:c,sex:o},costList:[{costName:"水费",price:a,unit:"元/吨",initData:r},{costName:"电费",price:u,unit:"元/度",initData:u},{costName:"宽带费",price:s,unit:"元/月",initData:""}]},header:{"content-Type":"application/json",Accept:"application/json"},success:function(n){console.log(JSON.stringify(n)),t.bills=n.data.data}}),console.log("保存了")}}};t.default=u}).call(this,e("543d")["default"])},df25:function(n,t,e){"use strict";var i=e("fcd0"),c=e.n(i);c.a},e39c:function(n,t,e){"use strict";e.r(t);var i=e("59ee"),c=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=c.a},fcd0:function(n,t,e){}},[["2013","common/runtime","common/vendor"]]]);