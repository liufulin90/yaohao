webpackJsonp([7],{517:function(n,t,i){i(583),i(584);var e=i(38)(i(549),i(610),"data-v-4d0ce7b9",null);n.exports=e.exports},520:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"LOGIN_USERNAME_NOT_EMPTY",function(){return e}),i.d(t,"LOGIN_PASSWORD_NOT_EMPTY",function(){return s}),i.d(t,"SERVER_ERROR_MSG",function(){return a}),i.d(t,"PROJECT_NOT_SELECT_ERROR_MSG",function(){return r}),i.d(t,"PROJECT_NOT_SELECT_AND_KEYWORD_EMPTY_ERROR_MSG",function(){return c}),i.d(t,"COMMONE_ERROR_MSG",function(){return o}),i.d(t,"ADD_USERINFO_ERROR_MSG",function(){return _}),i.d(t,"USER_NAME_ERROR_MSG",function(){return u}),i.d(t,"PHONE_NUMBER_ERROR_MSG",function(){return d}),i.d(t,"IDENTITY_CARD_ERROR_MSG",function(){return l});var e="请输入登录账号",s="请输入密码",a="服务器错误，请稍后重试",r="请先选择楼盘!",c="请选择楼盘或输入关键字!",o="啊哈，去看看是不是没联网呢!",_="一个账号最多绑定3个身份证",u="您贵姓？",d="手机号格式不正确",l="身份证号码错误"},533:function(n,t,i){"use strict";i.d(t,"a",function(){return e});var e={key:"top",title:"您户口所在地",data:[{key:"TREE_01",value:"成都户口"},{key:"TREE_02",value:"非成都户口"}]}},549:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i(200),s=i.n(e),a=i(93),r=i(199),c=i(202),o=i(533),_=i(520),u=i(140);t.default={data:function(){return{searchNumber:5e3,title:"ddd",initTree:[],dataList:[],start:!0,isYuanJiaoQu:!1,isend:!1,lastRole:!1,lastTips:"暂时不具备购房资格",specialStr:!1}},mounted:function(){this.dataList=o.a.data,this.title=o.a.title,this.getInitData(),this.searchTimesAdd()},methods:s()({},i.i(a.mapActions)([r.b,r.c,c.b,c.c]),{startSearch:function(){this.start=!0},nextPage:function(n,t,i){if(1==i.length&&i[0].children.length<1){this.isend=!0;var e=i[0].data.text;return"可购买远郊县住房"==e?(this.specialStr=!0,this.lastTips="您目前只能购买远郊(三圈层)房屋"):(this.specialStr=!1,this.lastTips=e),e.indexOf("无购房资格")>0||e.indexOf("单独家庭购房")>0?this.lastRole=!1:this.lastRole=!0,void(e.indexOf("无购房资格")>0||e.indexOf("+")<0||e.indexOf("单独家庭购房")>0?this.isYuanJiaoQu=!0:this.isYuanJiaoQu=!1)}this.dataList=i},resetSearch:function(){this.dataList=this.initTree,this.lastRole=!1,this.isend=!1,this.lastTips="暂时不具备购房资格",this.specialStr=!1,this.isYuanJiaoQu=!1,this.searchTimesAdd()},searchTimesAdd:function(){var n=this;this.ROLE_CHECK_TIMES({}).then(function(t){n.CHANGE_PENDING(!1),u.d!=t.status||t.errno?n.CHANGE_TOAST(t.msg):n.searchNumber=t.info.times}).catch(function(){n.CHANGE_PENDING(!1),n.CHANGE_TOAST(_.COMMONE_ERROR_MSG)})},getInitData:function(){var n=this;this.CHANGE_PENDING(!0),this.ROLE_CHECK_DATA({}).then(function(t){n.CHANGE_PENDING(!1),u.d!=t.status||t.errno?n.CHANGE_TOAST(t.msg):(n.initTree=t.info.root.children,n.dataList=n.initTree)}).catch(function(){n.CHANGE_PENDING(!1),n.CHANGE_TOAST(_.COMMONE_ERROR_MSG)})}})}},563:function(n,t,i){t=n.exports=i(501)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"rolecheckAuto.vue",sourceRoot:""}])},564:function(n,t,i){t=n.exports=i(501)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"rolecheckAuto.vue",sourceRoot:""}])},583:function(n,t,i){var e=i(563);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);i(502)("f1f6a46a",e,!0)},584:function(n,t,i){var e=i(564);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);i(502)("0d8a686a",e,!0)},595:function(n,t,i){n.exports=i.p+"static/img/artic_qrcode.c9a7dd5.png"},596:function(n,t,i){n.exports=i.p+"static/img/daidai_qrcode.de083fd.png"},597:function(n,t,i){n.exports=i.p+"static/img/daidai_qrcode_notrole_jiaoqu.b67aa32.png"},610:function(n,t,i){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"body-wrapper rolecheckbody"},[n._e(),n._v(" "),n.start&&!n.isend?e("div",{staticClass:"rolepagewrap"},[e("div",{staticClass:"title"}),n._v(" "),e("ul",n._l(n.dataList,function(t){return e("li",{on:{click:function(i){n.nextPage(i,t.data,t.children)}}},[n._v(n._s(t.data?t.data.text:""))])})),n._v(" "),e("button",{staticClass:"resetBtn",on:{click:n.resetSearch}},[n._v("重新查询")]),n._v(" "),n._m(0)]):n._e(),n._v(" "),n.isend?e("div",{staticClass:"endpage"},[n.lastRole?n._e():e("div",{staticClass:"tips"},[e("font",{attrs:{color:"red"}},[n._v("对不起，"+n._s(n.lastTips))]),e("br"),n._v("请扫描二维码，代代为你做详细分析")],1),n._v(" "),n.lastRole?e("div",{staticClass:"tips"},[n._v(n._s(n.specialStr?"":"哇！原来你有购房资格")),n.specialStr?n._e():e("br"),e("font",{attrs:{color:"red"}},[n._v(n._s(n.lastTips))])],1):n._e(),n._v(" "),e("p",{staticStyle:{width:"100%"}},[n._v("有 "+n._s(n.searchNumber)+" 人已查询")]),n._v(" "),e("button",{staticClass:"resetBtn",on:{click:n.resetSearch}},[n._v("重新查询")]),n._v(" "),e("div",{staticClass:"qrcode"},[e("br"),n._v(" "),e("img",{attrs:{src:i(595)}}),n._v(" "),e("p",[n._v("最及时最全面的购房信息，请扫下面二维码，代代拉你入购房新政解读群，还有大牛为你做详细分析。")]),n._v(" "),n.isYuanJiaoQu?n._e():e("img",{staticStyle:{width:"135px"},attrs:{src:i(596)}}),n._v(" "),n.isYuanJiaoQu?e("img",{staticStyle:{width:"135px"},attrs:{src:i(597)}}):n._e()])]):n._e(),n._v(" "),e("v-homeicon")],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticStyle:{padding:"20px","margin-top":"10px"}},[i("p",[n._v("11区："),i("br"),n._v("成都高新区西部园区、锦江区、青羊区、金牛区、武侯区、成华区、龙泉驿区、新都区、温江区、双流区、郫都区")]),n._v(" "),i("p",[n._v("远郊县："),i("br"),n._v("青白江区、简阳市、都江堰市、彭州市、邛崃市、崇州市、金堂县、新津县、大邑县、蒲江县")])])}]}}});