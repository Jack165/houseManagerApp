(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tenant/tenantInfo"],{"37d5":function(t,e,n){"use strict";(function(t){n("1046");c(n("66fd"));var e=c(n("4010"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},4010:function(t,e,n){"use strict";n.r(e);var c=n("6d59"),r=n("afbf");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("bb0a");var a,i=n("f0c5"),u=Object(i["a"])(r["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],a);e["default"]=u.exports},"6d59":function(t,e,n){"use strict";var c;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c}));var r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(t){return this.showPage("../../pages/tenant/updateTenant")})},o=[]},"926b":function(t,e,n){},afbf:function(t,e,n){"use strict";n.r(e);var c=n("c5c1"),r=n.n(c);for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);e["default"]=r.a},bb0a:function(t,e,n){"use strict";var c=n("926b"),r=n.n(c);r.a},c5c1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c,r,o=function(){n.e("components/sectionTitle").then(function(){return resolve(n("efe6"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/inputItem").then(function(){return resolve(n("c680"))}.bind(null,n)).catch(n.oe)},i=function(){n.e("components/selectItem").then(function(){return resolve(n("f0cc"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/bottomBtn").then(function(){return resolve(n("267a"))}.bind(null,n)).catch(n.oe)},s={onLoad:function(e){var n=this;c=e.id;var o=this.Common.baseUrl+"/contract//select";t.request({url:o,method:"POST",data:{id:c},header:{"content-Type":"application/json",Accept:"application/json"},success:function(t){console.log(JSON.stringify(t)),r=t.data,n.name=r.renter.name,n.phone=r.renter.cellPhone,n.idcard=r.renter.idCard,n.addressDetail=r.contract.housePropertyName,n.waterPrice=r.costList[0].price,n.waterInitPrice=r.costList[0].price,n.electricityPrice=r.costList[1].price,n.electricityInitPrice=r.costList[1].price,n.broadbandPrice=r.costList[2].price}})},data:function(){return{sexItems:[{name:"男",value:"男",checked:"true"},{name:"女",value:"女"}],sexIndex:0,name:""}},methods:{jumpToDetails:function(){t.navigateTo({url:"../../pages/tenant/bill/bill?rentarId="+r.renter.id+"&rentarName="+r.renter.name+"&rentarAddress="+r.contract.housePropertyName+"&rentarState"+r.contract.status})}},components:{sectionTitle:o,inputItem:a,selectItem:i,bottomBtn:u}};e.default=s}).call(this,n("543d")["default"])}},[["37d5","common/runtime","common/vendor"]]]);