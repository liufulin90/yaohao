webpackJsonp([7],{517:function(t,e,n){n(586);var a=n(38)(n(547),n(608),"data-v-f6b8134a",null);t.exports=a.exports},519:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"LOGIN_USERNAME_NOT_EMPTY",function(){return a}),n.d(e,"LOGIN_PASSWORD_NOT_EMPTY",function(){return i}),n.d(e,"SERVER_ERROR_MSG",function(){return r}),n.d(e,"PROJECT_NOT_SELECT_ERROR_MSG",function(){return s}),n.d(e,"PROJECT_NOT_SELECT_AND_KEYWORD_EMPTY_ERROR_MSG",function(){return o}),n.d(e,"COMMONE_ERROR_MSG",function(){return c}),n.d(e,"ADD_USERINFO_ERROR_MSG",function(){return l}),n.d(e,"USER_NAME_ERROR_MSG",function(){return u}),n.d(e,"PHONE_NUMBER_ERROR_MSG",function(){return _}),n.d(e,"IDENTITY_CARD_ERROR_MSG",function(){return d});var a="请输入登录账号",i="请输入密码",r="服务器错误，请稍后重试",s="请先选择楼盘!",o="请选择楼盘或输入关键字!",c="啊哈，去看看是不是没联网呢!",l="一个账号最多绑定3个身份证",u="您贵姓？",_="手机号格式不正确",d="身份证号码错误"},547:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(550),r=n.n(i),s=n(549),o=n.n(s),c=n(200),l=n.n(c),u=n(93),_=n(519),d=n(140),p=n(61),h=n(199),v=n(202),f=n(94);n.n(f);e.default={data:function(){return{isSearch:!1,type:2,keyword:"",page:1,hasMore:!0,selectProject:"",projectList:[],list:[]}},mounted:function(){var t=this.$route.query.type,e=this.$route.query.pid;t&&(this.type=t),e&&(this.selectProject=e),this.initData();var n=this;a=function(){var t=f(this).scrollTop(),e=f(document).height();t+f(this).height()===e&&n.hasMore&&n.searchList(!0)},f(window).bind("scroll",a)},beforeDestroy:function(){f(window).unbind("scroll",a)},methods:l()({},n.i(u.mapActions)([h.b,h.c,v.h,v.i,v.j]),{tapSearch:function(){this.isSearch=!0},cancleSearch:function(){this.isSearch=!1},changeType:function(t){this.type=t.target.dataset.type,this.searchList()},initData:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.CHANGE_PENDING(!0),e.next=3,t.PROJECT_LIST().then(function(e){t.CHANGE_PENDING(!1),d.d?t.projectList=e.info:t.CHANGE_TOAST(e.msg)}).catch(function(){t.CHANGE_PENDING(!1),t.CHANGE_TOAST(_.COMMONE_ERROR_MSG)});case 3:if(!t.selectProject){e.next=6;break}return e.next=6,t.searchList();case 6:case"end":return e.stop()}},e,t)}))()},searchList:function(t){return this.hasMore=!1,!0===t?this.page++:(this.page=1,this.list=[]),1==this.type?this.selectProject?this.searchApplyList(t):void this.CHANGE_TOAST(_.PROJECT_NOT_SELECT_ERROR_MSG):2==this.type?this.selectProject||this.keyword?this.searchResultList(t):void this.CHANGE_TOAST(_.PROJECT_NOT_SELECT_AND_KEYWORD_EMPTY_ERROR_MSG):void 0},searchApplyList:function(t){var e=this;return this.CHANGE_PENDING(!0),this.APPLY_LIST({pid:this.selectProject,kw:this.keyword,page:this.page}).then(function(n){e.CHANGE_PENDING(!1),d.d?(e.list=!0===t?e.list.concat(n.info):n.info,setTimeout(function(){e.hasMore=n.info.length==p.d},100)):e.CHANGE_TOAST(n.msg)}).catch(function(t){e.CHANGE_PENDING(!1),e.CHANGE_TOAST(_.COMMONE_ERROR_MSG)})},searchResultList:function(t){var e=this;return this.CHANGE_PENDING(!0),this.RESULT_LIST({pid:this.selectProject,kw:this.keyword,page:this.page}).then(function(n){e.CHANGE_PENDING(!1),d.d?(e.list=!0===t?e.list.concat(n.info):n.info,setTimeout(function(){e.hasMore=n.info.length==p.d},100)):e.CHANGE_TOAST(n.msg)}).catch(function(t){e.CHANGE_PENDING(!1),e.CHANGE_TOAST(_.COMMONE_ERROR_MSG)})}})}},549:function(t,e,n){"use strict";e.__esModule=!0;var a=n(204),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,n){function a(r,s){try{var o=e[r](s),c=o.value}catch(t){return void n(t)}if(!o.done)return i.default.resolve(c).then(function(t){a("next",t)},function(t){a("throw",t)});t(c)}return a("next")})}}},550:function(t,e,n){t.exports=n(587)},568:function(t,e,n){e=t.exports=n(501)(),e.push([t.i,"\n.left-label[data-v-f6b8134a]{\n  width: 122px; display: inline-block; text-align: right; padding-right: 15px;\n}\n.top-wrap[data-v-f6b8134a]{\n  position: fixed;\n  top: 0;\n  z-index: 490;\n  width: 100%;\n  background-color: white;\n}\n.top-wrap .select-wrap[data-v-f6b8134a]{\n  padding: 15px 30px;\n  border-bottom: 1px solid #ccc;\n}\n.top-wrap .select-wrap[data-v-f6b8134a]:after{\n}\n.top-wrap .select-wrap .weui-select[data-v-f6b8134a]{\n   -webkit-appearance: menulist;\n   z-index: 501;\n  height: 30px;\n  line-height: 30px;\n}\n.top-wrap .weui-navbar[data-v-f6b8134a]{\n  position: relative;\n}\n.table>tbody>tr>td[data-v-f6b8134a]{\n  border-top: none;\n  border-bottom: 1px dotted #ccc;\n}\n","",{version:3,sources:["E:/work/TS/Projects/摇号/git_source/yaohao/src/pages/shakeResult.vue"],names:[],mappings:";AACA;EACE,aAAa,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,oBAAoB;CAC7E;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,aAAa;EACb,YAAY;EACZ,wBAAwB;CACzB;AACD;EACE,mBAAmB;EACnB,8BAA8B;CAC/B;AACD;CACC;AACD;GACG,6BAA6B;GAC7B,aAAa;EACd,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,+BAA+B;CAChC",file:"shakeResult.vue",sourcesContent:["\n.left-label[data-v-f6b8134a]{\n  width: 122px; display: inline-block; text-align: right; padding-right: 15px;\n}\n.top-wrap[data-v-f6b8134a]{\n  position: fixed;\n  top: 0;\n  z-index: 490;\n  width: 100%;\n  background-color: white;\n}\n.top-wrap .select-wrap[data-v-f6b8134a]{\n  padding: 15px 30px;\n  border-bottom: 1px solid #ccc;\n}\n.top-wrap .select-wrap[data-v-f6b8134a]:after{\n}\n.top-wrap .select-wrap .weui-select[data-v-f6b8134a]{\n   -webkit-appearance: menulist;\n   z-index: 501;\n  height: 30px;\n  line-height: 30px;\n}\n.top-wrap .weui-navbar[data-v-f6b8134a]{\n  position: relative;\n}\n.table>tbody>tr>td[data-v-f6b8134a]{\n  border-top: none;\n  border-bottom: 1px dotted #ccc;\n}\n"],sourceRoot:""}])},586:function(t,e,n){var a=n(568);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(502)("038d5680",a,!0)},587:function(t,e,n){var a=function(){return this}()||Function("return this")(),i=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,r=i&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,t.exports=n(207),i)a.regeneratorRuntime=r;else try{delete a.regeneratorRuntime}catch(t){a.regeneratorRuntime=void 0}},608:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body-wrapper",staticStyle:{"padding-top":"111px"}},[n("div",{staticClass:"top-wrap"},[n("div",{staticClass:"select-wrap"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectProject,expression:"selectProject"}],staticClass:"weui-select",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectProject=e.target.multiple?n:n[0]},t.searchList]}},[n("option",{attrs:{value:""}},[t._v("-- 请选择楼盘 --")]),t._v(" "),t._l(t.projectList,function(e){return n("option",{domProps:{value:e.pid}},[t._v(t._s(e.title))])})],2)]),t._v(" "),n("div",{staticClass:"weui-navbar"},[n("div",{class:"weui-navbar__item "+(2==t.type?"weui_bar__item_on":""),attrs:{"data-type":"2"},on:{click:t.changeType}},[t._v("\n        摇号结果\n      ")]),t._v(" "),n("div",{class:"weui-navbar__item "+(1==t.type?"weui_bar__item_on":""),attrs:{"data-type":"1"},on:{click:t.changeType}},[t._v("\n        复核名单\n      ")])])]),t._v(" "),n("div",{class:t.isSearch?"weui-search-bar weui-search-bar_focusing":"weui-search-bar",attrs:{id:"searchBar"}},[n("div",{staticClass:"weui-search-bar__form",on:{click:t.tapSearch}},[n("div",{staticClass:"weui-search-bar__box"},[n("i",{staticClass:"weui-icon-search"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"weui-search-bar__input",attrs:{placeholder:"输入身份证、登记号、摇号编号进行搜索",required:"",name:"keyword",type:"search"},domProps:{value:t.keyword},on:{change:t.searchList,input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),n("a",{staticClass:"weui-icon-clear",attrs:{href:"javascript:",id:"searchClear"}})]),t._v(" "),t._m(0)]),t._v(" "),n("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:",id:"searchCancel"},on:{click:t.cancleSearch}},[t._v("取消")])]),t._v(" "),n("div",{staticClass:"item"},[n("table",{staticClass:"table"},[n("tbody",t._l(t.list,function(e){return n("tr",[n("td",[n("div",[n("label",{staticClass:"left-label",attrs:{for:""}},[t._v("选房顺序：")]),t._v(t._s(e.apply_sort?e.apply_sort:"未知")+"\n          ")]),t._v(" "),n("div",[n("label",{staticClass:"left-label",attrs:{for:""}},[t._v("公正摇号编码：")]),t._v(t._s(e.apply_no)+"\n          ")]),t._v(" "),n("div",[n("label",{staticClass:"left-label",attrs:{for:""}},[t._v("姓名：")]),t._v(t._s(e.name)+"\n          ")]),t._v(" "),n("div",[n("label",{staticClass:"left-label",attrs:{for:""}},[t._v("购房登记号：")]),t._v(t._s(e.reg_no)+"\n          ")]),t._v(" "),n("div",[n("label",{staticClass:"left-label",attrs:{for:""}},[t._v("身份证：")]),t._v(t._s(e.id_no)+"\n          ")])])])}))]),t._v(" "),t.list.length?t._e():n("div",{staticClass:"t-c pading-t20"},[t._v("没找到你想要的呢！")])]),t._v(" "),n("v-homeicon")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"weui-search-bar__label",attrs:{id:"searchText"}},[n("i",{staticClass:"weui-icon-search"}),t._v(" "),n("span",[t._v("搜索")])])}]}}});