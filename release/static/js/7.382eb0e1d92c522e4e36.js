webpackJsonp([7],{503:function(n,t,s){s(560);var a=s(38)(s(530),s(581),null,null);n.exports=a.exports},507:function(n,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"LOGIN_USERNAME_NOT_EMPTY",function(){return a}),s.d(t,"LOGIN_PASSWORD_NOT_EMPTY",function(){return i}),s.d(t,"SERVER_ERROR_MSG",function(){return e}),s.d(t,"PROJECT_NOT_SELECT_ERROR_MSG",function(){return c}),s.d(t,"PROJECT_NOT_SELECT_AND_KEYWORD_EMPTY_ERROR_MSG",function(){return r}),s.d(t,"COMMONE_ERROR_MSG",function(){return l}),s.d(t,"ADD_USERINFO_ERROR_MSG",function(){return o}),s.d(t,"PHONE_NUMBER_ERROR_MSG",function(){return u}),s.d(t,"IDENTITY_CARD_ERROR_MSG",function(){return _});var a="请输入登录账号",i="请输入密码",e="服务器错误，请稍后重试",c="请先选择楼盘!",r="请选择楼盘或输入关键字!",l="啊哈，去看看是不是没联网呢!",o="一个账号最多绑定2个身份证",u="手机号格式不正确",_="身份证号码格式错误"},530:function(n,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=s(135),e=s.n(i),c=s(198),r=s.n(c),l=s(199),o=s(201),u=s(197),_=s(507),d=s(136),h=s(66),v=s(202);s.n(v);t.default={data:function(){return{isSearch:!1,statusText:"全部项目",status:"",district:"",keyword:"",page:1,hasMore:!0,list:[]}},mounted:function(){this.$route.query.status&&(this.status=this.$route.query.status),this.searchList();var n=this;a=function(){var t=v(this).scrollTop(),s=v(document).height();t+v(this).height()===s&&n.hasMore&&n.searchList(!0)},v(window).bind("scroll",a)},beforeDestroy:function(){v(window).unbind("scroll",a)},methods:r()({},s.i(l.b)([o.c,u.b,u.c]),{searchList:function(n){var t=this;this.hasMore=!1,!0===n?this.page++:(this.page=1,this.list=[]),this.CHANGE_PENDING(!0),this.PROJECT_LIST({status:this.status,district:this.district,kw:this.keyword}).then(function(s){t.CHANGE_PENDING(!1),d.d==s.status?(t.list=!0===n?t.list.concat(s.info):s.info,setTimeout(function(){t.hasMore=s.info.length==h.d},100)):t.CHANGE_TOAST(s.msg)}).catch(function(){t.CHANGE_PENDING(!1),t.CHANGE_TOAST(_.COMMONE_ERROR_MSG)})},tapLabel:function(n){if("active"==n.target.className)return this.status="",this.district="",n.target.className="",void this.searchList();var t=document.getElementById("searchLabels").children;for(var s in t){var a=t[s].children;for(var i in a)n.target.innerHTML==a[i].innerHTML?a[i].dataset.district&&void 0!=a[i].dataset.district?(this.district=n.target.dataset.district,this.status=""):(this.district="",this.status=n.target.dataset.status):"object"===e()(a[i])&&a[i].classList.remove("active")}n.target.className="active",this.searchList()},tapSearch:function(){this.isSearch=!0},cancleSearch:function(){this.isSearch=!1}})}},546:function(n,t,s){t=n.exports=s(492)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"projectSearch.vue",sourceRoot:""}])},560:function(n,t,s){var a=s(546);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);s(493)("c2a890fe",a,!0)},581:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"body-wrapper"},[s("div",{class:n.isSearch?"weui-search-bar weui-search-bar_focusing":"weui-search-bar",attrs:{id:"searchBar"}},[s("div",{staticClass:"weui-search-bar__form",on:{click:n.tapSearch}},[s("div",{staticClass:"weui-search-bar__box"},[s("i",{staticClass:"weui-icon-search"}),n._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:n.keyword,expression:"keyword"}],staticClass:"weui-search-bar__input",attrs:{placeholder:"输入楼盘名称，如：中海锦江城",required:"",name:"keyword",type:"search"},domProps:{value:n.keyword},on:{change:n.searchList,input:function(t){t.target.composing||(n.keyword=t.target.value)}}}),n._v(" "),s("a",{staticClass:"weui-icon-clear",attrs:{href:"javascript:",id:"searchClear"}})]),n._v(" "),n._m(0)]),n._v(" "),s("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:",id:"searchCancel"},on:{click:n.cancleSearch}},[n._v("取消")])]),n._v(" "),s("div",{staticClass:"status-label",attrs:{id:"searchLabels"}},[s("ul",[s("li",{attrs:{"data-district":"天府新区"},on:{click:n.tapLabel}},[n._v("天府新区")]),n._v(" "),s("li",{attrs:{"data-district":"高新区"},on:{click:n.tapLabel}},[n._v("高新区")]),n._v(" "),s("li",{attrs:{"data-district":"主城区"},on:{click:n.tapLabel}},[n._v("主城区")]),n._v(" "),s("li",{attrs:{"data-district":"郊区"},on:{click:n.tapLabel}},[n._v("郊区")])]),n._v(" "),s("ul",[s("li",{attrs:{"data-status":"1"},on:{click:n.tapLabel}},[n._v("即将预售")]),n._v(" "),s("li",{attrs:{"data-status":"2"},on:{click:n.tapLabel}},[n._v("正在报名")]),n._v(" "),s("li",{attrs:{"data-status":"3"},on:{click:n.tapLabel}},[n._v("报名结束")]),n._v(" "),s("li",{attrs:{"data-status":"4"},on:{click:n.tapLabel}},[n._v("已复核")])]),n._v(" "),s("ul",[s("li",{class:5==n.status?"active":"",attrs:{"data-status":"5"},on:{click:n.tapLabel}},[n._v("正在摇号")]),n._v(" "),s("li",{attrs:{"data-status":"6"},on:{click:n.tapLabel}},[n._v("已摇号")]),n._v(" "),s("li",{staticClass:"notdata"}),n._v(" "),s("li",{staticClass:"notdata"})]),n._v(" "),s("ul")]),n._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"projectlist weui-panel weui-panel_access"},[n.list.length?s("div",{staticClass:"weui-panel__bd"},n._l(n.list,function(t){return s("router-link",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{to:{name:"projects",query:{pid:t.pid}}}},[s("div",{staticClass:"weui-media-box__hd",staticStyle:{width:"100px",height:"100px"}},[s("img",{staticClass:"weui-media-box__thumb",staticStyle:{width:"100px"},attrs:{src:t.image,alt:"..."}})]),n._v(" "),s("div",{staticClass:"weui-media-box__bd"},[s("h5",{staticClass:"weui-media-box__title"},[n._v(n._s(t.title))]),n._v(" "),s("div",{staticClass:"item_status"},n._l(t.tags,function(t){return s("span",{staticClass:"status"},[n._v(n._s(t))])})),n._v(" "),s("div",{staticClass:"weui-media-box__desc"},[n._v(n._s(t.district))]),n._v(" "),s("div",{staticClass:"weui-media-box__desc"},[n._v(n._s(t.date))])])])})):n._e()]),n._v(" "),n.list.length?n._e():s("div",{staticClass:"t-c"},[n._v("没找到你想要的呢！")])])])},staticRenderFns:[function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("label",{staticClass:"weui-search-bar__label",attrs:{id:"searchText"}},[s("i",{staticClass:"weui-icon-search"}),n._v(" "),s("span",[n._v("搜索")])])}]}}});