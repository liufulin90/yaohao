webpackJsonp([10],{515:function(n,t,s){s(590);var e=s(38)(s(547),s(615),null,null);n.exports=e.exports},520:function(n,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"LOGIN_USERNAME_NOT_EMPTY",function(){return e}),s.d(t,"LOGIN_PASSWORD_NOT_EMPTY",function(){return a}),s.d(t,"SERVER_ERROR_MSG",function(){return i}),s.d(t,"PROJECT_NOT_SELECT_ERROR_MSG",function(){return r}),s.d(t,"PROJECT_NOT_SELECT_AND_KEYWORD_EMPTY_ERROR_MSG",function(){return c}),s.d(t,"COMMONE_ERROR_MSG",function(){return o}),s.d(t,"ADD_USERINFO_ERROR_MSG",function(){return u}),s.d(t,"USER_NAME_ERROR_MSG",function(){return l}),s.d(t,"PHONE_NUMBER_ERROR_MSG",function(){return _}),s.d(t,"IDENTITY_CARD_ERROR_MSG",function(){return d});var e="请输入登录账号",a="请输入密码",i="服务器错误，请稍后重试",r="请先选择楼盘!",c="请选择楼盘或输入关键字!",o="啊哈，去看看是不是没联网呢!",u="一个账号最多绑定3个身份证",l="您贵姓？",_="手机号格式不正确",d="身份证号码错误"},547:function(n,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e,a=s(139),i=s.n(a),r=s(200),c=s.n(r),o=s(93),u=s(202),l=s(199),_=s(520),d=s(140),h=s(61),v=s(94);s.n(v);t.default={data:function(){return{isSearch:!1,statusText:"全部项目",status:"",district:"",keyword:"",page:1,hasMore:!0,addrMap:d.g,statusMap:d.h,list:[]}},mounted:function(){this.$route.query.status&&(this.status=this.$route.query.status),this.searchList();var n=this;e=function(){if("projectSearch"===n.$route.name){var t=v(this).scrollTop(),s=v(document).height();t+v(this).height()===s&&n.hasMore&&n.searchList(!0)}},v(window).bind("scroll",e)},beforeDestroy:function(){v(window).unbind("scroll",e)},beforeRouteLeave:function(n,t,s){"projects"===n.name?t.meta.keepAlive=!0:t.meta.keepAlive=!1,s()},methods:c()({},s.i(o.mapActions)([u.h,l.b,l.c]),{searchList:function(n){var t=this;this.hasMore=!1,!0===n?this.page++:(this.page=1,this.list=[]),this.CHANGE_PENDING(!0),this.PROJECT_LIST({status:this.status,district:this.district,kw:this.keyword}).then(function(s){t.CHANGE_PENDING(!1),d.d!=s.status||s.errno?t.CHANGE_TOAST(s.msg):(t.list=!0===n?t.list.concat(s.info):s.info,setTimeout(function(){t.hasMore=s.info.length==h.d},100))}).catch(function(){t.CHANGE_PENDING(!1),t.CHANGE_TOAST(_.COMMONE_ERROR_MSG)})},tapLabel:function(n){if("active"==n.target.className)return this.status="",this.district="",n.target.className="",void this.searchList();var t=document.getElementById("searchLabels").children;for(var s in t){var e=t[s].children;for(var a in e)n.target.innerHTML==e[a].innerHTML?e[a].dataset.district&&void 0!=e[a].dataset.district?(this.district=n.target.dataset.district,this.status=""):(this.district="",this.status=n.target.dataset.status):"object"===i()(e[a])&&e[a].classList.remove("active")}n.target.className="active",this.searchList()},tapSearch:function(){this.isSearch=!0},cancleSearch:function(){this.isSearch=!1}})}},570:function(n,t,s){t=n.exports=s(501)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"projectSearch.vue",sourceRoot:""}])},590:function(n,t,s){var e=s(570);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);s(502)("c2a890fe",e,!0)},615:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"body-wrapper"},[s("div",{class:n.isSearch?"weui-search-bar weui-search-bar_focusing":"weui-search-bar",attrs:{id:"searchBar"}},[s("div",{staticClass:"weui-search-bar__form",on:{click:n.tapSearch}},[s("div",{staticClass:"weui-search-bar__box"},[s("i",{staticClass:"weui-icon-search"}),n._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:n.keyword,expression:"keyword"}],staticClass:"weui-search-bar__input",attrs:{placeholder:"输入楼盘名称，如：中海锦江城",required:"",name:"keyword",type:"search"},domProps:{value:n.keyword},on:{change:n.searchList,input:function(t){t.target.composing||(n.keyword=t.target.value)}}}),n._v(" "),s("a",{staticClass:"weui-icon-clear",attrs:{href:"javascript:",id:"searchClear"}})]),n._v(" "),n._m(0)]),n._v(" "),s("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:",id:"searchCancel"},on:{click:n.cancleSearch}},[n._v("取消")])]),n._v(" "),s("div",{staticClass:"status-label",attrs:{id:"searchLabels"}},[s("ul",[n._l(n.addrMap,function(t){return s("li",{attrs:{"data-district":t},on:{click:n.tapLabel}},[n._v(n._s(t))])}),n._v(" "),n._l(n.statusMap,function(t){return s("li",{class:5==n.status&&5==t.code?"active":"",attrs:{"data-status":t.code},on:{click:n.tapLabel}},[n._v(n._s(t.text))])}),n._v(" "),s("li",{staticClass:"notdata"}),n._v(" "),s("li",{staticClass:"notdata"})],2)]),n._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"projectlist weui-panel weui-panel_access"},[n.list.length?s("div",{staticClass:"weui-panel__bd"},n._l(n.list,function(t){return s("router-link",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{to:{name:"projects",query:{pid:t.pid}}}},[s("div",{staticClass:"weui-media-box__hd",staticStyle:{width:"100px",height:"100px"}},[s("img",{staticClass:"weui-media-box__thumb",staticStyle:{width:"100px"},attrs:{src:t.image,alt:"..."}})]),n._v(" "),s("div",{staticClass:"weui-media-box__bd"},[s("h5",{staticClass:"weui-media-box__title"},[n._v(n._s(t.title))]),n._v(" "),s("div",{staticClass:"item_status"},n._l(t.tags,function(t){return s("span",{staticClass:"status"},[n._v(n._s(t))])})),n._v(" "),s("div",{staticClass:"weui-media-box__desc"},[n._v(n._s(t.district))]),n._v(" "),s("div",{staticClass:"weui-media-box__desc"},[n._v(n._s(t.date))])])])})):n._e()]),n._v(" "),n.list.length?n._e():s("div",{staticClass:"t-c"},[n._v("没找到你想要的呢！")])]),n._v(" "),s("v-homeicon")],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("label",{staticClass:"weui-search-bar__label",attrs:{id:"searchText"}},[s("i",{staticClass:"weui-icon-search"}),n._v(" "),s("span",[n._v("搜索")])])}]}}});